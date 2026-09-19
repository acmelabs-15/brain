# Spec: setup

Module `setup` of `CAPABILITY-MAP.md`. Depends on `plain-talk`.
Status: approved 2026-09-19; amended the same day, see the amendment notes.

## Objective

One skill, `setup-brain`, that a user runs once per repo. It writes what the other
brain skills assume is there:

1. The domain-docs layout: single-context (`CONTEXT.md` at the root, `docs/adr/`) or
   multi-context (`CONTEXT-MAP.md` at the root), and the consumer rules that tell
   every brain skill to read the glossary before it names a domain concept.
2. The issue tracker and the label vocabulary, `docs/agents/issue-tracker.md` and
   `docs/agents/triage-labels.md`, which the triage and wayfinder skills read. The spec
   and the plan still live in the repo; only issues go to the tracker.
3. The plain-talk block for Codex: once per machine in the Codex global `AGENTS.md`, or,
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

Users: anyone who installs brain, once per repo. The skill is user-invoked only.

## Process the skill follows

1. **Explore.** Read what exists: `CONTEXT.md`, `CONTEXT-MAP.md`, `docs/adr/`,
   `docs/agents/domain.md`, `docs/agents/issue-tracker.md`, monorepo signals
   (`pnpm-workspace.yaml`, a `workspaces` field, `packages/*` with their own `src/`),
   the git remote, and the Codex home. Facts are the skill's job; it never asks the user
   for one it can look up.
2. **Decide the small things itself, and say so.** Single-context is the default and is
   written without a question. The Codex file is written when the Codex home exists and
   skipped when it does not.
3. **Ask the questions that are the user's, through ask-user-question, one per call.** The
   tracker, always; the layout, only when monorepo signals exist; the Codex scope, global or
   this repo, only when a Codex home exists on the machine. Nothing else forks.
4. **Show, then write.** Show the dry run and, when the Codex file is in it, the block as
   it will appear there. Then run the writer script, which is the only thing that touches
   files.
5. **Say what changed and what reads it.** One line per file, and the list of
   brain skills that now read `docs/agents/domain.md` and `CONTEXT.md`.

## The writer script

`scripts/setup/write.ts` does every file change, so the change is deterministic and
tested, and the skill prose only decides and explains.

```
bun run scripts/setup/write.ts --root <repo> --layout single|multi [--tracker local|github|gitlab] [--repo owner/name] [--codex-scope global|project] [--codex-home <dir> | --no-codex] [--dry-run]
```

- Writes `docs/agents/domain.md` from the skill's `domain.md`, the consumer rules, with the
  chosen layout named. Creates `docs/agents/` if missing.
- Writes `docs/agents/issue-tracker.md` from the skill's `issue-tracker-<tracker>.md`, with
  the repo slug filled in, and `docs/agents/triage-labels.md` from `triage-labels.md`.
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
- Creates no `CONTEXT.md`, `CONTEXT-MAP.md` or `docs/adr/`. Those are created lazily by
  the vendored `domain-modeling` skill when the first term or decision is resolved,
  which is that skill's rule.
- `--dry-run` prints every change and writes nothing.

## Tech Stack

Bun 1.4.0, TypeScript, `bun:test`. No Node-only API.

## Project Structure

```
skills/setup-brain/SKILL.md            user-invoked; disable-model-invocation: true
skills/setup-brain/agents/openai.yaml  Codex: policy.allow_implicit_invocation: false
skills/setup-brain/domain.md           the consumer-rules template; brain-owned, adapted from matt's
skills/setup-brain/issue-tracker-local.md, issue-tracker-github.md, issue-tracker-gitlab.md, triage-labels.md
                                       the tracker and label templates; brain-owned, adapted from matt's
scripts/setup/write.ts
scripts/setup/__tests__/write.test.ts
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
nothing and lists every change; multi layout names the map in `domain.md`.

The conversation in the skill, exploring and asking, is not tested here. `evals` owns it.

## Boundaries

- **Always:** write through the script; keep text outside the markers untouched; show before writing.
- **Ask first:** the layout, only when monorepo signals exist; any change to what the block says, which is `plain-talk`'s.
- **Never:** write a repo's `CLAUDE.md` or `GEMINI.md`; write a repo's `AGENTS.md` outside project scope; create `CONTEXT.md` or an ADR here; put the spec or the plan in the tracker.

## Success Criteria

1. After `setup-brain` in a fresh repo: `docs/agents/domain.md`, `docs/agents/issue-tracker.md` and `docs/agents/triage-labels.md` exist, no repo context file was written, and a second run changes nothing. By test.
2. With a Codex home whose `AGENTS.md` has other content, every line outside the markers is unchanged and a symlink stays a symlink. By test.
3. In a Codex session on that machine, the agent answers with one line of context first. Manual, recorded on the Codex install page.
4. `bun test` passes with the network off.

## Open Questions

1. Resolved 2026-09-19: whether Gemini CLI reads `@AGENTS.md` imports under an
   extension-shipped context file no longer matters; the skill writes no import line.
2. Resolved 2026-09-19: Antigravity loads a plugin rule with `trigger: always_on`, so brain
   ships `rules/talk-plain.md` and the AGENTS.md step is gone there. See `SPEC-plain-talk.md`.
