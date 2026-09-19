# Spec: upstream-sync

Module `upstream-sync` of `CAPABILITY-MAP.md`. Status: draft for review, 2026-09-19.

## Objective

Carry three upstream packs inside brain's own tree as real files, each pinned to
one commit, so that all four hosts see one flat `skills/` folder and an update is
a SHA bump plus one script run.

Users: brain maintainers and CI. Nobody who installs brain runs this.

| Upstream | Repo | Take | Lands at |
|---|---|---|---|
| agent-skills | addyosmani/agent-skills | `skills/*` (25), `references/*` (7), `agents/*` (4), `hooks/*` (8 files), `LICENSE` | `skills/<name>/`, `references/`, `agents/`, `hooks/`, `licenses/agent-skills.LICENSE` |
| agent-skills, seeded | addyosmani/agent-skills | `.claude/commands/*.md` (9), `commands/*.toml` (9) | `.claude/commands/`, `commands/`, copied once, then brain-owned |
| mattpocock-skills | mattpocock/skills | `skills/engineering/domain-modeling`, `skills/productivity/wait-what`, `skills/productivity/writing-for-agents`, `LICENSE` | `skills/domain-modeling/`, `skills/wait-what/`, `skills/writing-for-agents/`, `licenses/mattpocock-skills.LICENSE` |
| ask-user-question | acmelabs-15/ask-user-question | `skills/ask-user-question` | `skills/ask-user-question/` |

`references/` must sit at the root: seven addy skills link to `../../references/<file>.md`
(20 links, counted 2026-09-19). `agents/` is taken because Claude Code and
Antigravity read it. `hooks/` is taken as is: addy's own plugin wires none of its
four scripts, so they do nothing until a later module wires them. addy's `evals/`,
`docs/`, `scripts/`, `.github/` and the root markdown are not taken.
The `lifecycle` module may add matt paths later by editing the pin file.

**Two ways in: vendored and seeded.** A *vendored* path is copied on every sync and
must stay byte-identical to upstream. A *seeded* path is copied once, into a
brain-owned location, and never overwritten: brain edits it. addy's command files are
seeded, not vendored, because each Claude command calls its skill as
`agent-skills:<skill>`, which inside brain is `brain:<skill>`, and because brain's
own lifecycle entry points take those same nine names (Peter, 2026-09-19). The TOML
commands are seeded for the same reason. Only addy's root `commands/` is seeded: a
Gemini extension and Antigravity both read root `commands/`, and addy's
`.gemini/commands/` is a byte-identical copy for workspace installs. For a seeded
path, `sync -- --report` prints the upstream diff between the last-synced SHA and the
current pin, so a change addy makes to a command is reviewed by hand.

## Tech Stack

- Bun 1.4.0, TypeScript, `bun:test`. No Node-only API, no Python.
- Fetch: the GitHub tarball for a commit, `https://codeload.github.com/<owner>/<repo>/tar.gz/<sha>`.
  Verified 200 for all three upstreams on 2026-09-19. No git needed at sync time.
- Extract: `tar -xzf` through `Bun.spawn`, the one shell call.
- Hash: `Bun.CryptoHasher("sha256")`.

## Commands

```
bun run sync                    # fetch every pin, write vendored files, rewrite upstream.lock.json
bun run sync -- --check         # compare the tree to the lock; exit 1 on any drift
bun run sync -- --only <name>   # sync one upstream
bun run sync -- --report        # for every seeded path, the upstream diff since its seed SHA
bun run sync -- --seed <name>   # copy the seeded paths of one upstream; refuses to overwrite
bun test                        # unit tests, no network
bun run typecheck               # tsc --noEmit
```

CI runs, in order: `bun install --frozen-lockfile`, `bun run typecheck`, `bun test`, `bun run sync -- --check`.

## Project Structure

```
upstream.json                      pins and take-lists; edited by hand
upstream.lock.json                 sha256 per vendored file; written by sync only
scripts/sync/sync.ts               entry point
scripts/sync/lib/fetch.ts          tarball download and extract
scripts/sync/lib/plan.ts           take-list to file list, collision check
scripts/sync/lib/apply.ts          write, delete, hash
scripts/sync/lib/check.ts          tree against lock
scripts/sync/__tests__/sync.test.ts
skills/<name>/                     vendored and brain-owned skills, side by side
references/                        addy's checklists (vendored)
agents/                            addy's personas (vendored)
licenses/                          upstream licence texts
package.json  tsconfig.json  bunfig.toml  .github/workflows/ci.yml
```

`upstream.json`:

```json
{
  "upstreams": {
    "agent-skills": {
      "repo": "addyosmani/agent-skills",
      "sha": "c004a74784a08295d52749b04cda634125b9a581",
      "take": [
        { "from": "skills", "to": "skills" },
        { "from": "references", "to": "references" },
        { "from": "agents", "to": "agents" },
        { "from": "hooks", "to": "hooks" }
      ],
      "seed": [
        { "from": ".claude/commands", "to": ".claude/commands" },
        { "from": "commands", "to": "commands" }
      ],
      "license": "LICENSE"
    },
    "mattpocock-skills": {
      "repo": "mattpocock/skills",
      "sha": "c55ee46073ed923f86ce59a5eb3b6d895095d1b7",
      "take": [
        { "from": "skills/engineering/domain-modeling", "to": "skills/domain-modeling" },
        { "from": "skills/productivity/wait-what", "to": "skills/wait-what" },
        { "from": "skills/productivity/writing-for-agents", "to": "skills/writing-for-agents" }
      ],
      "license": "LICENSE"
    },
    "ask-user-question": {
      "repo": "acmelabs-15/ask-user-question",
      "sha": "d6594010d0ce100df831e5de91ba11c54f5796ce",
      "take": [
        { "from": "skills/ask-user-question", "to": "skills/ask-user-question" }
      ]
    }
  }
}
```

`upstream.lock.json` maps every vendored path to `{ upstream, sha256 }` and every
seeded path to `{ upstream, seededAt: <sha> }`.

**Ownership rule.** The unit of vendoring follows the take: a take of `skills`
makes each child directory `skills/<name>/` a vendored unit; a take of `hooks` or
`references` makes each file a vendored unit. A path is vendored when it is in the
lock and brain-owned when it is not. Brain-owned files may sit beside vendored file
units in one folder, and brain-owned skill directories sit beside vendored ones. Sync
never writes into a brain-owned path: a take target that already exists and is not in
the lock is an error, and sync stops before writing anything. Sync deletes a vendored
file the new upstream no longer has. Sync adds no file of its own inside a vendored
directory, so a vendored directory stays byte-identical to upstream. A seeded path
is written by `--seed` once and is brain-owned from then on.

## Code Style

```ts
// scripts/sync/lib/check.ts
import type { Lock } from "./lock";

export type Drift =
  | { kind: "changed"; path: string }
  | { kind: "missing"; path: string }
  | { kind: "unlisted"; path: string };

export async function checkTree(root: string, lock: Lock): Promise<Drift[]> {
  const drift: Drift[] = [];
  for (const [path, entry] of Object.entries(lock.files)) {
    const file = Bun.file(`${root}/${path}`);
    if (!(await file.exists())) {
      drift.push({ kind: "missing", path });
      continue;
    }
    if ((await sha256(file)) !== entry.sha256) drift.push({ kind: "changed", path });
  }
  return drift;
}
```

- Named exports only. Explicit return types on exported functions.
- One module per concern, kebab-case file names.
- Errors are thrown `Error`s with a one-line message that names the path.
- No em-dashes in prose or comments.

## Testing Strategy

- `bun:test`, in `scripts/sync/__tests__/sync.test.ts`, beside the file under test.
- Tests build a fixture "upstream" in a temp directory and pack it with `tar`, then point
  fetch at the local file. No network in `bun test`.
- Cases: fresh sync writes files, licences and the lock; check passes on a clean tree; check
  fails on an edited vendored file; check fails on an unlisted file inside a vendored
  directory; check fails on a missing vendored file; sync refuses a collision with a
  brain-owned directory and writes nothing; sync deletes a file dropped upstream; a matt
  path lands under its `to` name; `--only` touches one upstream; `--seed` copies once and
  refuses a second time; `--report` lists a seeded file addy changed since the seed SHA.
- One network smoke test, run only when `SYNC_NETWORK=1`, syncs agent-skills at its pin
  into a temp root and checks the count of skill directories.

## Boundaries

- **Always:** run `sync -- --check` in CI; keep `upstream.lock.json` in git; copy each
  upstream licence; pin to a full commit SHA.
- **Ask first:** change a pin; add or remove a take path; change the ownership rule.
- **Never:** edit a vendored file in place; overwrite a seeded file by sync; pin to a branch
  or tag name; commit a file under a vendored directory that is not in the lock; fetch at
  test time.

## Success Criteria

1. A fresh clone plus `bun run sync` reproduces the vendored tree byte for byte: `sync -- --check` exits 0.
2. `sync -- --check` exits 1 when one vendored file differs, is missing, or has an unlisted neighbour.
3. Bumping the agent-skills SHA and running sync changes only files that addy changed, as `git diff --stat` shows.
4. Every `../../references/<file>.md` link in a vendored addy skill resolves in brain's tree.
5. `bun test` passes with the network off.
7. After `--seed`, `.claude/commands/` holds nine files and `commands/` nine files, none in the
   vendored part of the lock, and a second `--seed` changes nothing.
6. The four hosts each discover `skills/domain-modeling/SKILL.md` after install. This is verified in `host-manifests`, not here.

## Open Questions

1. acmelabs-15/ask-user-question has no LICENSE file. brain is public, so it needs one before that pack is vendored. Peter owns that repo.
2. Provenance per skill, such as antfu's `SYNC.md` inside each vendored directory, is not done here because it breaks byte identity with upstream. The root lock carries the provenance. Say if a per-skill file is wanted anyway.
