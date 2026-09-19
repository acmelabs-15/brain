---
name: setup-brain
description: "Prepare this repo for brain: write the plain-talk block into AGENTS.md and set the domain docs layout. Run once per repo before the other brain skills."
disable-model-invocation: true
---

# Setup brain

Write what the other brain skills assume is in this repo:

- **The plain-talk block** in `AGENTS.md`, so the agent talks plain on every turn in Codex and Antigravity, with an import line in `CLAUDE.md` and `GEMINI.md` where they exist. Claude Code and Gemini CLI also get the text from the plugin itself.
- **The domain docs layout** and the consumer rules in `docs/agents/domain.md`, so every brain skill reads `CONTEXT.md` before it names a domain concept.

Every file change goes through one script. The steps below decide and explain; the script writes.

## 1. Explore

Read what exists. Facts are your job; never ask the user for one you can look up.

- `AGENTS.md`, `CLAUDE.md`, `GEMINI.md` at the repo root: which exist, and whether `AGENTS.md` already holds the block between `<!-- brain:plain-talk:start -->` and `<!-- brain:plain-talk:end -->`.
- `CONTEXT.md`, `CONTEXT-MAP.md`, `docs/adr/`, `docs/agents/domain.md`: which exist.
- Monorepo signals: `pnpm-workspace.yaml`, a `workspaces` field in `package.json`, or `packages/*` folders that each hold their own `src/`. Their absence means single-context, which is almost every repo.

## 2. Decide the small things, and say so

- Single-context is the default. Write it without a question.
- The block goes in `AGENTS.md`, created if absent. Every host reads that file or imports it, so it is the one place.
- `CLAUDE.md` and `GEMINI.md` are never created here. They get one import line only when they already exist.

State each decision in one sentence before you go on.

## 3. Ask the one real question

Only when the exploration found monorepo signals: single-context, one `CONTEXT.md` at the root, or multi-context, a `CONTEXT-MAP.md` at the root that points to one `CONTEXT.md` per context. Put it through the host's user-question tool, composed with the ask-user-question skill: the facts you found in the question, single-context first and recommended when the signals are weak, the cost of each option in its description.

Nothing else forks. Do not ask about the file to edit, the tracker, or labels.

## 4. Show, then write

Run the script in dry-run mode and show its output, one line per file:

```
bun run "${CLAUDE_PLUGIN_ROOT}/scripts/setup/write.ts" --root . --layout single --dry-run
```

Use `--layout multi` when that was chosen. When the plugin root variable is not set, the script's own location resolves it: `--brain <path to the brain plugin>`.

Then show the block as it will appear in `AGENTS.md`. When the user agrees, run the same command without `--dry-run`.

## 5. Say what changed

One line per file: created, updated or unchanged. Then the list of what reads these files now: every brain lifecycle skill reads `docs/agents/domain.md` and, through it, `CONTEXT.md`; the domain-modeling skill writes `CONTEXT.md` and ADRs; the wait-what skill re-pitches a message in the glossary's words.

Running this skill again is safe: the script changes nothing when everything is already in place.
