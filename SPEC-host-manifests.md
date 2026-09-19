# Spec: host-manifests

Module `host-manifests` of `CAPABILITY-MAP.md`. Status: draft for review, 2026-09-19.

## Objective

brain installs as one plugin in each of four hosts from the one repo
`acmelabs-15/brain`, with one version number in every manifest and one install
page per host that a stranger can follow on a clean machine.

| Host | Manifest brain ships | Skills discovered from | Install | Verified by |
|---|---|---|---|---|
| Claude Code 2.1.268 | `.claude-plugin/plugin.json`; `.claude-plugin/marketplace.json` as the self-marketplace fallback | `skills/` (default), `agents/`, `output-styles/`, `.claude/commands/` | `/plugin marketplace add acmelabs-15/marketplace`, then `/plugin install brain@acmelabs` | `claude plugin validate . --strict` in CI |
| Codex CLI 0.154.0 | `.codex-plugin/plugin.json` with `"skills": "./skills/"`; `.agents/plugins/marketplace.json` | `skills/` | `codex plugin marketplace add acmelabs-15/brain`, then `codex plugin add brain@brain` | manual, recorded on the install page with CLI version and date |
| Gemini CLI 0.58.0 | `gemini-extension.json` with `name: brain` and `contextFileName` | `skills/`, `commands/*.toml` | `gemini extensions install https://github.com/acmelabs-15/brain` | manual, recorded |
| Antigravity CLI 1.2.0 | root `plugin.json` with `name` and `description` only | `skills/`, `agents/` | `agy plugin install https://github.com/acmelabs-15/brain.git` | `agy plugin validate .` in CI when the CLI is present, else manual |

Why two `plugin.json` files: Codex reads a root `plugin.json` that must carry an
agent-plugins.org `$schema`, and Antigravity reads a root `plugin.json` whose
schema forbids extra keys. Codex documents `.codex-plugin/plugin.json` as a
fallback, so brain gives Codex that file and Antigravity the root one. This is what
agent-skills does, and it installs on both.

Codex has no slash commands and Antigravity does not surface converted TOML commands
(agent-skills issue #445). On those hosts the skills are the entry points. The
`lifecycle` module names them so that works.

## Tech Stack

- Bun 1.4.0, TypeScript, `bun:test`. No Node-only API.
- Version source of truth: `package.json`. A script writes it into every manifest.
- Releases: changesets, as `acmelabs-15/ask-user-question` does. A release commit gets
  the tags `v<version>`, a moving `latest`, and `brain--v<version>` so a Claude Code
  plugin that depends on brain can pin a range.

## Commands

```
bun run version:sync            # write package.json's version into every manifest
bun run version:sync -- --check # exit 1 if any manifest disagrees
bun run validate                # claude plugin validate . --strict; agy plugin validate . when agy exists
bun test
bun run typecheck
```

## Project Structure

```
.claude-plugin/plugin.json         name brain, version, description, author, repository, license
.claude-plugin/marketplace.json    self-marketplace: one plugin, source "./"
.codex-plugin/plugin.json          name, version, skills "./skills/", interface block
.agents/plugins/marketplace.json   Codex marketplace: one plugin, source "./"
gemini-extension.json              name brain, version, description, contextFileName
plugin.json                        Antigravity: name, description
package.json                       version source of truth; scripts
scripts/version/version-sync.ts
scripts/version/__tests__/version-sync.test.ts
scripts/validate.ts
docs/install/claude-code.md  codex.md  gemini-cli.md  antigravity.md
.github/workflows/ci.yml
.changeset/
```

The Claude Code manifest lists no `skills` path: the default `skills/` scan finds
vendored and brain-owned skills alike. It lists no `dependencies`: brain carries its
packs inside.

## Code Style

```ts
// scripts/version/version-sync.ts
export const manifests = [
  { path: ".claude-plugin/plugin.json", field: "version" },
  { path: ".claude-plugin/marketplace.json", field: "plugins.0.version" },
  { path: ".codex-plugin/plugin.json", field: "version" },
  { path: ".agents/plugins/marketplace.json", field: "plugins.0.version" },
  { path: "gemini-extension.json", field: "version" },
] as const;

export async function syncVersions(root: string, check: boolean): Promise<string[]> {
  const version = (await Bun.file(`${root}/package.json`).json()).version as string;
  const drifted: string[] = [];
  for (const m of manifests) { /* read, compare, write unless check */ }
  return drifted;
}
```

- Named exports, explicit return types, kebab-case files, no em-dashes.
- JSON manifests are rewritten with two-space indent and a trailing newline, so the diff is one line.

## Testing Strategy

- `bun:test` in `scripts/version/__tests__/version-sync.test.ts`: writes a fixture tree in a temp
  directory; cases: all manifests updated; `--check` passes when equal; `--check` lists every
  drifted file; a manifest missing the field is an error; formatting is stable across two runs.
- CI: `bun install --frozen-lockfile`, `bun run typecheck`, `bun test`, `bun run version:sync -- --check`,
  `claude plugin validate . --strict`. Codex, Gemini and Antigravity installs are manual checks;
  each install page records the CLI version and date of its last successful run.

## Boundaries

- **Always:** change the version through changesets; run `version:sync -- --check` and
  `claude plugin validate --strict` in CI; keep the root `plugin.json` to `name` and `description`.
- **Ask first:** add a host; add a field to a manifest; change the marketplace layout; change the tag scheme.
- **Never:** hand-edit a version in a manifest; publish a release without the three tags; add a
  `dependencies` entry that would make brain a two-install plugin.

## Success Criteria

1. `claude plugin validate . --strict` exits 0.
2. `version:sync -- --check` exits 0 on a clean tree and exits 1 after one manifest is edited by hand.
3. On each of the four hosts, a fresh install from the public repo lists `domain-modeling` in the skill
   catalogue, and the install page records the run.
4. `claude plugin details brain@acmelabs` shows the version in `package.json`.
5. `agy plugin validate .` exits 0 on a machine with agy 1.2.0.

## Open Questions

1. The ACMElabs marketplace repo `acmelabs-15/marketplace` must gain a `brain` entry. That is a
   change in another repo and a push, so it is asked for when the first release is cut.
2. Whether `gemini extensions install` accepts the `commands/` folder alongside `contextFileName`
   without a `.gemini/` prefix is read from the docs, not tested. The Gemini install page test settles it.
3. Whether Codex can validate a plugin without installing it (`codex plugin validate` is not in the
   CLI reference read on 2026-09-19). If not, the Codex check stays manual.
