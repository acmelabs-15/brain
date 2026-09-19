---
name: setup-brain
description: "Prepare a repo for brain: the domain docs layout and the issue tracker, and once per machine the plain-talk block in the Codex global AGENTS.md. Run once per repo before the other brain skills."
disable-model-invocation: true
---

# Setup brain

Write what the other brain skills assume is there:

- **The domain docs layout** and the consumer rules in `docs/agents/domain.md`, so every brain skill reads `CONTEXT.md` before it names a domain concept.
- **The issue tracker** in `docs/agents/issue-tracker.md` and the label vocabulary in `docs/agents/triage-labels.md`, which the triage and wayfinder skills read. The spec and the plan never go there; they live in the repo.
- **The plain-talk block for Codex**, in the Codex global `AGENTS.md`, once per machine. Codex is the one host where the plugin cannot carry the text. Claude Code, Gemini CLI and Antigravity get it from the plugin itself, at the scope the plugin was installed in. The repo's own `AGENTS.md`, `CLAUDE.md` and `GEMINI.md` are never touched.

Every file change goes through one script. The steps below decide and explain; the script writes.

## 1. Explore

Read what exists. Facts are your job; never ask the user for one you can look up.

- `CONTEXT.md`, `CONTEXT-MAP.md`, `docs/adr/`, `docs/agents/domain.md`, `docs/agents/issue-tracker.md`: which exist.
- Monorepo signals: `pnpm-workspace.yaml`, a `workspaces` field in `package.json`, or `packages/*` folders that each hold their own `src/`. Their absence means single-context, which is almost every repo.
- `git remote -v`: whether a remote points at github.com, at a GitLab host, or nowhere. Read the `owner/name` slug from it.
- The Codex home: `$CODEX_HOME`, else `~/.codex`. Whether the directory exists, and whether its `AGENTS.md` already holds the block between `<!-- brain:plain-talk:start -->` and `<!-- brain:plain-talk:end -->`.

## 2. Decide the small things, and say so

- Single-context is the default. Write it without a question.
- The Codex file is written when the Codex home exists and skipped when it does not. Text outside the markers is kept, and a symlink there stays a symlink. Nothing to ask.

State each decision in one sentence before you go on.

## 3. Ask the questions that are the user's, one per call

Every question goes through the host's user-question tool, composed with the ask-user-question skill: the facts you found in the question, the recommended option first with its reason, the cost of each option in its description.

- **The issue tracker, always one question.** Local markdown under `.scratch/`, GitHub issues through `gh`, or GitLab issues through `glab`. Recommend local markdown, unless a remote points at GitHub or GitLab, then recommend that host. Local costs nothing to set up and holds issues as files; a hosted tracker gives native blocking links and a shared queue, and needs the CLI signed in.
- **The layout, only when the exploration found monorepo signals.** Single-context, one `CONTEXT.md` at the root, or multi-context, a `CONTEXT-MAP.md` at the root that points to one `CONTEXT.md` per context. Recommend single-context when the signals are weak.

Nothing else forks. Do not ask about the label names; the label file is written with the defaults and the user edits it later. Do not ask about the Codex file; the user who does not use Codex says so, and `--no-codex` leaves it out.

## 4. Show, then write

Run the script in dry-run mode and show its output, one line per file:

```
bun run "${CLAUDE_PLUGIN_ROOT}/scripts/setup/write.ts" --root . --layout single --tracker local --dry-run
```

Use `--layout multi`, `--tracker github` or `--tracker gitlab` with `--repo <owner>/<name>` when those were chosen, and `--no-codex` when the user said Codex is not used here. When the plugin root variable is not set, the script's own location resolves it: `--brain <path to the brain plugin>`.

When the Codex file is in the list, show the block as it will appear there. When the user agrees, run the same command without `--dry-run`.

## 5. Say what changed

One line per file: created, updated, unchanged or skipped. Then the list of what reads these files now: every brain lifecycle skill reads `docs/agents/domain.md` and, through it, `CONTEXT.md`; the domain-modeling skill writes `CONTEXT.md` and ADRs; the wait-what skill re-pitches a message in the glossary's words; the triage and wayfinder skills read `docs/agents/issue-tracker.md` and `docs/agents/triage-labels.md`; Codex reads its global `AGENTS.md` at the start of every session.

Running this skill again is safe: the script changes nothing when everything is already in place.
