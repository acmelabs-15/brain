# Spec: setup

Module `setup` of `CAPABILITY-MAP.md`. Depends on `plain-talk`.
Status: draft for review, 2026-09-19.

## Objective

One skill, `setup-brain`, that a user runs once per repo. It writes what the other
brain skills assume is there:

1. The plain-talk block in the repo's `AGENTS.md`, so Codex and Antigravity get it on
   every turn, and a one-line import of `AGENTS.md` from `CLAUDE.md` and `GEMINI.md`
   where those files exist, so one block serves four hosts.
2. The domain-docs layout: single-context (`CONTEXT.md` at the root, `docs/adr/`) or
   multi-context (`CONTEXT-MAP.md` at the root), and the consumer rules that tell
   every brain skill to read the glossary before it names a domain concept.

It is the brain counterpart of matt's `setup-matt-pocock-skills`, cut down to what
brain's lifecycle needs.

**Amended 2026-09-19, by the on-ramps decision.** The skill also asks one tracker
question, local markdown, GitHub or GitLab, local recommended unless a remote points
at one of the hosts, and writes `docs/agents/issue-tracker.md` and
`docs/agents/triage-labels.md` from brain-owned templates, which the triage and
wayfinder skills read. The spec and the plan still live in the repo; only issues go to
the tracker.

Users: anyone who installs brain, once per repo. The skill is user-invoked only.

## Process the skill follows

1. **Explore.** Read what exists: `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `CONTEXT.md`,
   `CONTEXT-MAP.md`, `docs/adr/`, `docs/agents/domain.md`, and monorepo signals
   (`pnpm-workspace.yaml`, a `workspaces` field, `packages/*` with their own `src/`).
   Facts are the skill's job; it never asks the user for one it can look up.
2. **Decide the small things itself, and say so.** Single-context is the default and is
   written without a question. The file to hold the block is `AGENTS.md`, created if
   absent, because every host reads it or can import it.
3. **Ask the questions that are the user's, through ask-user-question, one per call.** The
   tracker, always; the layout, only when monorepo signals exist. Nothing else forks.
4. **Show, then write.** Show the block and the domain file as they will be written.
   Then run the writer script, which is the only thing that touches files.
5. **Say what changed and what reads it.** One line per file written, and the list of
   brain skills that now read `docs/agents/domain.md` and `CONTEXT.md`.

## The writer script

`scripts/setup/write.ts` does every file change, so the change is deterministic and
tested, and the skill prose only decides and explains.

```
bun run scripts/setup/write.ts --root <repo> --layout single|multi [--tracker local|github|gitlab] [--repo owner/name] [--dry-run]
```

- Inserts or replaces the plain-talk block in `AGENTS.md` between the markers that
  `plain-talk/AGENTS-block.md` carries. Text outside the markers is never touched.
  A second run with the same block changes nothing.
- Adds `@AGENTS.md` on its own line to `CLAUDE.md` and `GEMINI.md` when they exist and
  do not import it yet. It never creates those two files.
- Writes `docs/agents/domain.md` from the skill's `domain.md`, the consumer rules, with the
  chosen layout named. Creates `docs/agents/` if missing.
- Writes `docs/agents/issue-tracker.md` from the skill's `issue-tracker-<tracker>.md`, with
  the repo slug filled in, and `docs/agents/triage-labels.md` from `triage-labels.md`.
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
```

The skill is a brain-owned directory beside the vendored ones. Its name is distinct in
every host: `brain:setup-brain` in Claude Code, `$setup-brain` in Codex.

## Code Style

```ts
// scripts/setup/write.ts
export type Change = { path: string; action: "created" | "updated" | "unchanged" };

export function replaceBlock(text: string, block: string, start: string, end: string): string {
  const from = text.indexOf(start);
  const to = text.indexOf(end);
  if (from === -1 || to === -1) {
    return `${text.trimEnd()}\n\n${block}\n`;
  }
  return `${text.slice(0, from)}${block}${text.slice(to + end.length)}`;
}
```

Named exports, explicit types, kebab-case files, no em-dashes in prose.

## Testing Strategy

`bun:test` in `scripts/setup/__tests__/write.test.ts` against fixture repos in a temp
directory: a repo with no files; a repo with `AGENTS.md` that has other content; a repo
with an old version of the block between the markers; a repo with `CLAUDE.md` and
`GEMINI.md`; a second run on each is byte-identical; `--dry-run` writes nothing and
lists every change; multi layout names the map in `domain.md`.

The conversation in the skill, exploring and asking, is not tested here. `evals` owns it.

## Boundaries

- **Always:** write through the script; keep text outside the markers untouched; show before writing.
- **Ask first:** the layout, only when monorepo signals exist; any change to what the block says, which is `plain-talk`'s.
- **Never:** create `CONTEXT.md` or an ADR here; create `CLAUDE.md` or `GEMINI.md`; put the spec or the plan in the tracker.

## Success Criteria

1. After `setup-brain` in a fresh repo: `AGENTS.md` holds the block, `docs/agents/domain.md` exists, and a second run changes nothing. By test.
2. In a repo with an existing `AGENTS.md`, every line outside the markers is unchanged. By test.
3. In a Codex session in that repo, the agent answers with one line of context first. Manual, recorded on the Codex install page.
4. `bun test` passes with the network off.

## Open Questions

1. Whether Gemini CLI reads `@AGENTS.md` imports in `GEMINI.md` under an extension-shipped
   context file as well. Read from the docs; the Gemini install run settles it.
2. Whether Antigravity honours an always-on plugin rule, which would remove the AGENTS.md
   step there. Carried from `SPEC-plain-talk.md`, still unverified.
