---
name: setup-brain
description: "Prepare this repo for brain: write the plain-talk block into AGENTS.md and set the domain docs layout. Run once per repo before the other brain skills."
disable-model-invocation: true
---

# Setup brain

Write what the other brain skills assume is in this repo:

- **The plain-talk block** in `AGENTS.md`, so the agent talks plain on every turn in Codex and Antigravity, with an import line in `CLAUDE.md` and `GEMINI.md` where they exist. Claude Code and Gemini CLI also get the text from the plugin itself.
- **The domain docs layout** and the consumer rules in `docs/agents/domain.md`, so every brain skill reads `CONTEXT.md` before it names a domain concept.
- **The issue tracker** in `docs/agents/issue-tracker.md` and the label vocabulary in `docs/agents/triage-labels.md`, which the triage and wayfinder skills read. The spec and the plan never go there; they live in the repo.

Every file change goes through one script. The steps below decide and explain; the script writes.

## 1. Explore

Read what exists. Facts are your job; never ask the user for one you can look up.

- `AGENTS.md`, `CLAUDE.md`, `GEMINI.md` at the repo root: which exist, and whether `AGENTS.md` already holds the block between `<!-- brain:plain-talk:start -->` and `<!-- brain:plain-talk:end -->`.
- `CONTEXT.md`, `CONTEXT-MAP.md`, `docs/adr/`, `docs/agents/domain.md`: which exist.
- Monorepo signals: `pnpm-workspace.yaml`, a `workspaces` field in `package.json`, or `packages/*` folders that each hold their own `src/`. Their absence means single-context, which is almost every repo.
- `git remote -v`: whether a remote points at github.com, at a GitLab host, or nowhere. Read the `owner/name` slug from it.

## 2. Decide the small things, and say so

- Single-context is the default. Write it without a question.
- The block goes in `AGENTS.md`, created if absent. Every host reads that file or imports it, so it is the one place.
- `CLAUDE.md` and `GEMINI.md` are never created here. They get one import line only when they already exist.

State each decision in one sentence before you go on.

## 3. Ask the questions that are the user's, one per call

Every question goes through the host's user-question tool, composed with the ask-user-question skill: the facts you found in the question, the recommended option first with its reason, the cost of each option in its description.

- **The issue tracker, always one question.** Local markdown under `.scratch/`, GitHub issues through `gh`, or GitLab issues through `glab`. Recommend local markdown, unless a remote points at GitHub or GitLab, then recommend that host. Local costs nothing to set up and holds issues as files; a hosted tracker gives native blocking links and a shared queue, and needs the CLI signed in.
- **The layout, only when the exploration found monorepo signals.** Single-context, one `CONTEXT.md` at the root, or multi-context, a `CONTEXT-MAP.md` at the root that points to one `CONTEXT.md` per context. Recommend single-context when the signals are weak.

Nothing else forks. Do not ask about the file to edit or the label names; the label file is written with the defaults and the user edits it later.

## 4. Show, then write

Run the script in dry-run mode and show its output, one line per file:

```
bun run "${CLAUDE_PLUGIN_ROOT}/scripts/setup/write.ts" --root . --layout single --tracker local --dry-run
```

Use `--layout multi`, `--tracker github` or `--tracker gitlab` with `--repo <owner>/<name>` when those were chosen. When the plugin root variable is not set, the script's own location resolves it: `--brain <path to the brain plugin>`.

Then show the block as it will appear in `AGENTS.md`. When the user agrees, run the same command without `--dry-run`.

## 5. Say what changed

One line per file: created, updated or unchanged. Then the list of what reads these files now: every brain lifecycle skill reads `docs/agents/domain.md` and, through it, `CONTEXT.md`; the domain-modeling skill writes `CONTEXT.md` and ADRs; the wait-what skill re-pitches a message in the glossary's words; the triage and wayfinder skills read `docs/agents/issue-tracker.md` and `docs/agents/triage-labels.md`.

Running this skill again is safe: the script changes nothing when everything is already in place.
