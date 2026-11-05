/** Read-only policy metadata. Prints presence, safe key names and hook counts, never setting values. */
import { lstat, readdir } from "node:fs/promises";
import { homedir, userInfo } from "node:os";
import path from "node:path";

type Json = Record<string, unknown>;
function object(value: unknown): Json {
  return typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Json)
    : {};
}

export function policySummary(value: unknown): Json {
  const data = object(value);
  const sensitiveName = /secret|token|password|credential|apiKey|authorization/iu;
  const keys = Object.keys(data);
  const hooks = object(data.hooks);
  const eventCounts = Object.fromEntries(
    Object.entries(hooks).map(([event, handlers]) => [
      /^[A-Za-z]{1,40}$/u.test(event) ? event : "unrecognized-event",
      Array.isArray(handlers) ? handlers.length : 0,
    ]),
  );
  return {
    topLevelKeys: keys.filter((key) => !sensitiveName.test(key)).toSorted(),
    withheldKeyCount: keys.filter((key) => sensitiveName.test(key)).length,
    hookEventCounts: eventCounts,
    configuredPluginCount: Object.keys(object(data.enabledPlugins)).length,
    hasInlineInstructions: typeof data.claudeMd === "string" && data.claudeMd.length > 0,
    hasPolicyHelper: data.policyHelper !== undefined,
    nestedSettings: ["settings", "managedSettings", "data"]
      .filter((key) => typeof data[key] === "object" && data[key] !== null)
      .map((key) => ({ key, ...policySummary(data[key]) })),
  };
}

async function inspectFile(file: string): Promise<Json> {
  let stat;
  try {
    stat = await lstat(file);
  } catch (error) {
    return {
      path: file,
      present: (error as { code?: string }).code === "ENOENT" ? false : "unknown",
      readable: false,
    };
  }
  if (stat.size > 2_000_000) {
    return { path: file, present: true, readable: false, reason: "over metadata inspection bound" };
  }
  try {
    let data: unknown;
    if (file.endsWith(".plist")) {
      const run = Bun.spawnSync(["/usr/bin/plutil", "-convert", "json", "-o", "-", "--", file], {
        timeout: 5000,
      });
      if (run.exitCode !== 0) {
        return { path: file, present: true, readable: false, reason: "plist conversion failed" };
      }
      data = JSON.parse(run.stdout.toString());
    } else {
      data = Bun.JSONC.parse(await Bun.file(file).text());
    }
    if (data === null || typeof data !== "object" || Array.isArray(data)) {
      return { path: file, present: true, readable: false, reason: "policy is not an object" };
    }
    return { path: file, present: true, readable: true, ...policySummary(data) };
  } catch {
    return { path: file, present: true, readable: false, reason: "could not read policy metadata" };
  }
}

export async function inspectManagedSources(): Promise<Json> {
  const policy = "/Library/Application Support/ClaudeCode";
  const config = process.env.CLAUDE_CONFIG_DIR ?? path.join(homedir(), ".claude");
  let dropInStatus = "readable";
  const drops = await readdir(`${policy}/managed-settings.d`).catch((error: { code?: string }) => {
    dropInStatus = error.code === "ENOENT" ? "absent" : "unreadable";
    return [] as string[];
  });
  if (drops.length > 100) {
    throw new Error("managed drop-ins exceed bounded inspection");
  }
  const files = [
    `${policy}/managed-settings.json`,
    `${policy}/managed-mcp.json`,
    "/Library/Managed Preferences/com.anthropic.claudecode.plist",
    `/Library/Managed Preferences/${userInfo().username}/com.anthropic.claudecode.plist`,
    `${config}/remote-settings.json`,
    ...drops
      .filter((file) => !file.startsWith(".") && file.endsWith(".json"))
      .map((file) => `${policy}/managed-settings.d/${file}`),
  ];
  const sources = await Promise.all(files.map(inspectFile));
  const managedSkillDirectories = await Promise.all(
    [`${policy}/.claude/skills`, `${policy}/skills`].map(async (folder) => {
      try {
        const entries = await readdir(folder);
        return { path: folder, present: true, entryCount: entries.length };
      } catch (error) {
        return {
          path: folder,
          present: (error as { code?: string }).code === "ENOENT" ? false : "unknown",
        };
      }
    }),
  );
  // CLI auth status reports metadata only. Retain no email, account ID, organization ID or credential.
  const status = Bun.spawnSync(["claude", "auth", "status", "--json"], { timeout: 15_000 });
  let auth: Json = { readable: false };
  try {
    const value = object(JSON.parse(status.stdout.toString()));
    auth = { readable: true, loggedIn: value.loggedIn === true };
    for (const key of ["authMethod", "apiProvider", "subscriptionType"]) {
      const entry = value[key];
      if (typeof entry === "string" && /^[A-Za-z0-9_.-]{1,50}$/u.test(entry)) {
        auth[key] = entry;
      }
    }
  } catch {
    /* No raw auth output is written or printed. */
  }
  const credentialEnvironment = {
    apiKeyPresent: Boolean(process.env.ANTHROPIC_API_KEY),
    oauthTokenPresent: Boolean(process.env.CLAUDE_CODE_OAUTH_TOKEN),
    anthropicProfilePresent: Boolean(process.env.ANTHROPIC_PROFILE),
    customAuthTokenPresent: Boolean(process.env.ANTHROPIC_AUTH_TOKEN),
  };
  const policyOverridesPresent = [
    "CLAUDE_CODE_MANAGED_SETTINGS_PATH",
    "CLAUDE_CODE_PARENT_SETTINGS",
    "CLAUDE_CODE_PARENT_SETTINGS_FILE",
  ].filter((key) => Boolean(process.env[key]));
  const direct = Object.values(credentialEnvironment).some(Boolean);
  const personalSubscription = ["pro", "max", "ultra"].includes(
    String(auth.subscriptionType ?? "").toLowerCase(),
  );
  return {
    sources,
    managedSkillDirectories,
    dropInStatus,
    auth,
    credentialEnvironment,
    policyOverridesPresent,
    remoteEligibility:
      auth.loggedIn === true && personalSubscription && !direct
        ? "personal-subscription-not-eligible-by-current-docs"
        : "not-established-statically",
    notes: [
      "No policy value, credential, account identifier or hook command is recorded.",
      "Managed enforcement remains enabled. Future server-side policy changes are not predicted by this read-only snapshot.",
    ],
  };
}

if (import.meta.main) {
  const result = await inspectManagedSources();
  const [output] = process.argv.slice(2);
  if (output !== undefined) {
    await Bun.write(output, `${JSON.stringify(result, null, 2)}\n`);
  }
  console.log(JSON.stringify(result, null, 2));
}
