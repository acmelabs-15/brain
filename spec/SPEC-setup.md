# Spec: setup

Module `setup` of `CAPABILITY-MAP.md`. Depends on `plain-talk`.
Status: approved 2026-09-19; amended since, see the amendment notes.

## Objective

One skill, `setup-brain`, that a user runs once per repo. It writes what the other
brain skills assume is there:

1. The domain-docs layout: single-context (`GLOSSARY.md` at the root, `docs/decisions/`) or
   multi-context (`GLOSSARY-MAP.md` at the root), and the consumer rules that tell
   every brain skill to read the glossary before it names a domain concept.
2. The plain-talk block for Codex: once per machine in the Codex global `AGENTS.md`, or,
   at project scope, in this repo's `AGENTS.md`.

It is the brain counterpart of matt's `setup-matt-pocock-skills`, cut down to what
brain's lifecycle needs.

**Amended 2026-09-19, by the on-ramps decision.** Item 2 was added: one tracker
question, local markdown, GitHub or GitLab, local recommended unless a remote points at
one of the hosts.

**Amended 2026-09-19, by the context-scope decision.** The plain-talk text follows the
install's scope. Claude Code, Gemini CLI and Antigravity carry it in the plugin, at the
scope the plugin was installed in, so the skill no longer writes a block into a repo's
`AGENTS.md` and no import line into `CLAUDE.md` or `GEMINI.md`. Codex installs a plugin
for the machine only (`~/.codex/config.toml`; project-scoped plugin config is an open
request, openai/codex#18115), and the Codex docs put "how Codex communicates with you"
in the global file, so the block goes to `$CODEX_HOME/AGENTS.md`, `~/.codex` by
default, once per machine. Item 3 replaces the old item 1.

**Amended 2026-09-19, second time.** Peter asked for a project scope for Codex as well: a
user who wants plain talk in some Codex repos only. `--codex-scope project` writes the block
into the repo's `AGENTS.md` and leaves the global file alone. Global stays the default and
the recommendation, because a Codex plugin install is global.

**Amended 2026-10-19, by Peter.** The ADR folder is `docs/decisions/`, the folder
agent-skills uses, instead of `docs/adr/`. A repo that already keeps its ADRs in another
folder keeps using that folder. `domain-modeling` was seeded from matt for this change,
because it names the folder too.

**Amended 2026-10-29, by the workspace decision on open question 10.** The tracker item is
removed, so the Codex block is now item 2. The skill asks no tracker question, and the
script writes no `docs/agents/issue-tracker.md` or `docs/agents/triage-labels.md` and takes
no `--tracker` or `--repo`. The workspace migrate mode removes those two files from an
existing repo, only with the user's yes (`SPEC-workspace.md`).

**Amended 2026-10-29, by the workspace install flow (`SPEC-workspace.md`, task T33).** The
skill checks for bun first and says plainly that brain needs it. The script also writes
`docs/agents/workspace.md`, where a re-run keeps the folder paths and `max_parallel` that
the repo sets, and the `docs/STATUS.md` seed, only when the file is absent, since it is the
agent's handoff note. The Codex file gets the protocol block beside the plain-talk block,
each between its own markers. `--check` lists what a run would change, writes nothing, and
exits 1 when a file differs. The skill says how to find the plugin folder on every host.

**Amended 2026-10-29, by the workspace migrate mode (`SPEC-workspace.md`, task T36).**
`--migrate` moves a 0.8 repo's specs (`SPEC.md`, `spec/SPEC-<module>.md`) to
`docs/specs/SPEC-NNN-<slug>/spec.md`, and `tasks/plan.md` and `tasks/todo.md` into that
folder's `tasks/`, each with `git mv` and frontmatter added, no byte below it changed. The
capability map becomes a DEC file. When a plan sits beside several specs, the skill asks
the user which spec it belongs to, one question, and passes the answer as `--plan-spec`;
without that answer the script exits 2.

**Amended 2026-10-29, by the workspace migrate mode (`SPEC-workspace.md`, task T37).**
`--migrate` moves each intent doc in `docs/intent/` that the user picks to
`docs/ideas/IDEA-NNN-<name>.md` with `git mv`, adding only its ID and `migrated: 0.8`; it
gets no status, since only the user knows it. It removes `docs/agents/issue-tracker.md` and
`docs/agents/triage-labels.md` with `git rm`, inside the run's one commit, only after the
user's yes. The skill asks one question per intent doc and one for the tracker files, and
passes the answers as `--ideas` and `--tracker-files`. A run that lacks an answer it needs
exits 2 and names every such answer at once.

**Amended 2026-10-29, by the workspace install flow (`SPEC-workspace.md`, task T34).** A
second script, `scripts/setup/capabilities.ts`, proposes `docs/agents/capabilities.md` from
the repo's files: toolchain checks from `packageManager` and `engines`, library skills from
the dependencies matched against the skills the host lists, and servers from the MCP config
file each host reads from a repo. The skill shows the dry run and writes the file only after
the user's yes, one question per call. An existing `capabilities.md` is the repo's file: a
run keeps it and lists each proposed row it does not name.


Users: anyone who installs brain, once per repo. The user can run it as `/setup-brain`, and the agent can load it on its own (Peter, 2026-10-28).

## Process the skill follows

1. **Explore.** Read what exists: `GLOSSARY.md`, `GLOSSARY-MAP.md`, `docs/decisions/`,
   `docs/agents/domain.md`, monorepo signals (`pnpm-workspace.yaml`, a `workspaces` field,
   `packages/*` with their own `src/`), and the Codex home. Facts are the skill's job; it
   never asks the user for one it can look up.
2. **Decide the small things itself, and say so.** Single-context is the default and is
   written without a question. The Codex file is written when the Codex home exists and
   skipped when it does not.
3. **Ask the questions that are the user's, through ask-user-question, one per call.** The
   layout, only when monorepo signals exist; the Codex scope, global or this repo, only when
   a Codex home exists on the machine. Nothing else forks.
4. **Show, then write.** Show the dry run and, when the Codex file is in it, the block as
   it will appear there. Then run the writer script, which is the only thing that touches
   files.
5. **Say what changed and what reads it.** One line per file, and the list of
   brain skills that now read `docs/agents/domain.md` and `GLOSSARY.md`.

## The writer script

`scripts/setup/write.ts` does every file change, so the change is deterministic and
tested, and the skill prose only decides and explains.

```
bun run scripts/setup/write.ts --root <repo> --layout single|multi [--codex-scope global|project] [--codex-home <dir> | --no-codex] [--rename-glossary] [--dry-run | --check]
```

- Writes `docs/agents/domain.md` from the skill's `domain.md`, the consumer rules, with the
  chosen layout named. Creates `docs/agents/` if missing.
- Inserts or replaces the plain-talk block in `<codex home>/AGENTS.md` between the markers
  that `plain-talk/AGENTS-block.md` carries, through `scripts/plain-talk/block.ts`, the
  same replace the renderer uses. Text outside the markers is never touched. A symlink
  there is written through and stays a symlink. When the Codex home directory does not
  exist, the change is reported as `skipped` and nothing is created. `--codex-home`
  names the directory; `--no-codex` leaves the step out.
- With `--codex-scope project`, the same block goes into the repo's `AGENTS.md` instead,
  created if absent, and the global file is not read or written.
- Never writes the repo's `CLAUDE.md` or `GEMINI.md`, and writes the repo's `AGENTS.md`
  only at project scope.
- Creates no `GLOSSARY.md`, `GLOSSARY-MAP.md` or `docs/decisions/`. Those are created lazily by
  the `domain-modeling` skill when the first term or decision is resolved,
  which is that skill's rule.
- `--dry-run` prints every change and writes nothing.

## Tech Stack

Bun 1.4.0, TypeScript, `bun:test`. No Node-only API.

## Project Structure

```
skills/setup-brain/SKILL.md            model-invoked and user-invoked
skills/setup-brain/agents/openai.yaml  Codex metadata, no policy block
skills/setup-brain/domain.md           the consumer-rules template; brain-owned, adapted from matt's
skills/setup-brain/capabilities.md     the capabilities template: toolchain, library skills, servers
scripts/setup/write.ts
scripts/setup/__tests__/write.test.ts
scripts/setup/capabilities.ts          proposes and writes capabilities.md
scripts/setup/__tests__/capabilities.test.ts
scripts/plain-talk/block.ts            the marker replace, shared with the renderer
```

The skill is a brain-owned directory beside the vendored ones. Its name is distinct in
every host: `brain:setup-brain` in Claude Code, `$setup-brain` in Codex.

## Code Style

```ts
// scripts/setup/write.ts
export type Change = { path: string; action: "created" | "updated" | "unchanged" | "skipped" };

async function writeCodex(input: SetupInput, block: string): Promise<Change | null> {
  if (input.codexHome === null) {
    return null;
  }
  const home = input.codexHome ?? defaultCodexHome();
  const path = `${home}/AGENTS.md`;
  if (!(await isDirectory(home))) {
    return { path, action: "skipped" };
  }
  const current = (await readIfPresent(path)) ?? "";
  return put(input, path, path, replaceBlock(current, block, path));
}
```

Named exports, explicit types, kebab-case files, no em-dashes in prose.

## Testing Strategy

`bun:test` in `scripts/setup/__tests__/write.test.ts` against fixture repos and fixture
Codex homes in a temp directory: a repo with no files; a repo whose `AGENTS.md`,
`CLAUDE.md` and `GEMINI.md` stay byte-identical; a Codex home without `AGENTS.md`; one
with other content and an old block; one whose `AGENTS.md` is a symlink; a missing Codex
home; `codexHome: null`; project scope, where the block lands in the repo `AGENTS.md`, other
text kept, and the global file is untouched; a second run on each is byte-identical; `--dry-run` writes
nothing and lists every change; multi layout names the map in `domain.md`; the retired
`--tracker` and `--repo` flags exit 2 and write nothing. Against brain's
shipped files: `domain.md` and `domain-modeling` name `docs/decisions/`, and no brain-owned
skill file names `docs/adr/`.

The conversation in the skill, exploring and asking, is not tested here. `evals` owns it.

## Boundaries

- **Always:** write through the script; keep text outside the markers untouched; show before writing.
- **Ask first:** the layout, only when monorepo signals exist; any change to what the block says, which is `plain-talk`'s.
- **Never:** write a repo's `CLAUDE.md` or `GEMINI.md`; write a repo's `AGENTS.md` outside project scope; create `GLOSSARY.md` or an ADR here.

## Success Criteria

1. After `setup-brain` in a fresh repo: `docs/agents/domain.md` exists, no tracker file and no repo context file was written, and a second run changes nothing. By test.
2. With a Codex home whose `AGENTS.md` has other content, every line outside the markers is unchanged and a symlink stays a symlink. By test.
3. In a Codex session on that machine, the agent answers with one line of context first. Manual, recorded on the Codex install page.
4. `bun test` passes with the network off.

## Open Questions

1. Resolved 2026-09-19: whether Gemini CLI reads `@AGENTS.md` imports under an
   extension-shipped context file no longer matters; the skill writes no import line.
2. Resolved 2026-09-19: Antigravity loads a plugin rule with `trigger: always_on`, so brain
   ships `rules/talk-plain.md` and the AGENTS.md step is gone there. See `SPEC-plain-talk.md`.
