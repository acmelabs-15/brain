/** The pin file, upstream.json, parsed and checked. */

export type Mapping = { from: string; to: string };

export type Upstream = {
  repo: string;
  sha: string;
  take: Mapping[];
  seed: Mapping[];
  license?: string;
};

export type Config = { upstreams: Record<string, Upstream> };

/** Roots a take or seed target may land under, inside brain's tree. */
export const allowedRoots = [
  "skills",
  "references",
  "agents",
  "hooks",
  ".claude/commands",
  "commands",
  "licenses",
] as const;

const shaPattern = /^[0-9a-f]{40}$/u;
const repoPattern = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/u;

function fail(name: string, message: string): never {
  throw new Error(`upstream "${name}": ${message}`);
}

function checkPath(name: string, path: string): void {
  const parts = path.split("/");
  if (path.startsWith("/") || parts.includes("..") || parts.includes("")) {
    fail(name, `path "${path}" must be relative and inside the repo`);
  }
}

function underAllowedRoot(target: string): boolean {
  return allowedRoots.some((root) => target === root || target.startsWith(`${root}/`));
}

function parseMappings(name: string, kind: "take" | "seed", raw: unknown): Mapping[] {
  if (raw === undefined) {
    return [];
  }
  if (!Array.isArray(raw)) {
    fail(name, `${kind} must be a list`);
  }
  return raw.map((entry: unknown) => {
    const m = entry as Partial<Mapping>;
    if (typeof m.from !== "string" || typeof m.to !== "string") {
      fail(name, `${kind} entries need string from and to`);
    }
    checkPath(name, m.from);
    checkPath(name, m.to);
    if (!underAllowedRoot(m.to)) {
      fail(name, `${kind} target "${m.to}" is outside the allowed roots`);
    }
    return { from: m.from, to: m.to };
  });
}

export function parseConfig(raw: unknown): Config {
  const root = raw as { upstreams?: Record<string, unknown> };
  if (!root || typeof root.upstreams !== "object" || root.upstreams === null) {
    throw new Error("upstream.json: upstreams must be an object");
  }
  const upstreams: Record<string, Upstream> = {};
  for (const [name, value] of Object.entries(root.upstreams)) {
    const u = value as Partial<Upstream>;
    if (typeof u.repo !== "string" || !repoPattern.test(u.repo)) {
      fail(name, "repo must be owner/name");
    }
    if (typeof u.sha !== "string" || !shaPattern.test(u.sha)) {
      fail(name, "sha must be 40 hex characters");
    }
    if (u.license !== undefined) {
      if (typeof u.license !== "string") {
        fail(name, "license must be a path");
      }
      checkPath(name, u.license);
    }
    upstreams[name] = {
      repo: u.repo,
      sha: u.sha,
      take: parseMappings(name, "take", u.take),
      seed: parseMappings(name, "seed", u.seed),
      ...(u.license === undefined ? {} : { license: u.license }),
    };
  }
  return { upstreams };
}

export async function loadConfig(path: string): Promise<Config> {
  return parseConfig(await Bun.file(path).json());
}
