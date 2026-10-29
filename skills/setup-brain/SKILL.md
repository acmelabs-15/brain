---
name: setup-brain
description: "Prepare a repo for brain: the workspace layout, the STATUS.md handoff note and the domain docs rules, and for Codex the plain-talk and protocol blocks. Run once per repo before the other brain skills, again after a brain update, or with --check to report drift."
---

# Setup brain

Write what the other brain skills assume is in a repo:

- **`docs/agents/workspace.md`**, the workspace layout: the folders for ideas, decisions, research and specs, and their naming rules. Every brain skill and `brain` read it.
- **`docs/agents/domain.md`**, the rules for reading the glossary, `GLOSSARY.md`, and the decision records.
- **`docs/STATUS.md`**, the handoff note, seeded with "No active work. Start with interview-me." The agent rewrites it at the end of each task, so setup-brain writes it only when it is absent.
- **For Codex, the plain-talk block and the protocol block**, in the Codex global `AGENTS.md` once per machine, or in this repo's `AGENTS.md` at project scope. Codex is the one host where the plugin cannot carry the text. Claude Code, Gemini CLI and Antigravity get both from the plugin itself.

The repo's `CLAUDE.md` and `GEMINI.md` are never written. The repo's `AGENTS.md` is written only at project scope, and only after the user picks that scope in step 4: the pick is the user's explicit yes.

Every file change goes through one script. The steps below decide and explain; the script writes.

## Find the plugin folder

The script and the templates live in the brain plugin folder. This skill file is `skills/setup-brain/SKILL.md` inside it, so the plugin folder is two folders above this file. On Claude Code, `${CLAUDE_PLUGIN_ROOT}` in this text is that folder: Claude Code fills it in when it loads this skill. On another host, put the plugin folder in place of `${CLAUDE_PLUGIN_ROOT}` in each command below. Other brain skills "resolve the plugin folder as setup-brain does": this rule is what they mean.

## 1. Check for bun

```
bun --version
```

brain's scripts run with bun: this skill's script, and `brain status`, `brain new-doc` and `brain check`. When the command fails, tell the user plainly that brain needs bun, give the install page, https://bun.sh/docs/installation, and stop. The step is done when the command prints a version.

## 2. Explore

Read what exists. Facts are your job; never ask the user for one you can look up.

- `docs/agents/workspace.md`, `docs/agents/domain.md` and `docs/STATUS.md`: which exist. A re-run keeps the folder paths and `max_parallel` that an existing `workspace.md` sets, and leaves an existing `STATUS.md` as it is.
- `GLOSSARY.md`, `GLOSSARY-MAP.md` and `docs/decisions/`: which exist. Also the old glossary names at the root, `CONTEXT.md` and `CONTEXT-MAP.md`.
- Monorepo signals: `pnpm-workspace.yaml`, a `workspaces` field in `package.json`, or `packages/*` folders that each hold their own `src/`. Their absence means single-context, which is almost every repo.
- The Codex home: `$CODEX_HOME`, else `~/.codex`. Whether the directory exists, and whether its `AGENTS.md` already holds the blocks between `<!-- brain:plain-talk:start -->` and `<!-- brain:plain-talk:end -->`, and between `<!-- brain:protocol:start -->` and `<!-- brain:protocol:end -->`.

## 3. Decide the small things, and say so

- Single-context is the default. Write it without a question.
- `workspace.md` and the `STATUS.md` seed take no question: every repo gets the same layout.
- At global scope the Codex file is written when the Codex home exists and skipped when it does not. Text outside the markers is kept, and a symlink there stays a symlink.

State each decision in one sentence before you go on.

## 4. Ask the questions that are the user's, one per call

Every question goes through the host's user-question tool, composed with the ask-user-question skill: the facts you found in the question, the recommended option first with its reason, the cost of each option in its description.

- **The layout, only when the exploration found monorepo signals.** Single-context, one `GLOSSARY.md` at the root, or multi-context, a `GLOSSARY-MAP.md` at the root that points to one `GLOSSARY.md` per context. Recommend single-context when the signals are weak.
- **The glossary rename, only when a root `CONTEXT.md` or `CONTEXT-MAP.md` exists without its new name beside it.** Move it with `git mv` to `GLOSSARY.md` or `GLOSSARY-MAP.md`, or leave it. Recommend the move: it keeps the file's history, and Matt's skills now read only the new names. Leaving it costs a reminder in every session, and brain reads the old name for one release only. Only the root files move: a per-context file that `CONTEXT-MAP.md` lists stays where it is, and the user moves it by hand.
- **The Codex scope, only when a Codex home exists on this machine.** Global, both blocks in `~/.codex/AGENTS.md` for every repo, or project, both blocks in this repo's `AGENTS.md` only. Recommend global: a Codex plugin install is global, so brain's skills are in every repo, and the Codex docs put communication style in the global file. Project writes this repo's `AGENTS.md`, so say so in the option: the blocks reach teammates who lack brain, and plain talk and the protocol reach Codex in this repo only.

Nothing else forks. When no Codex home exists, say so and pass `--no-codex`.

## 5. Show, then write

Run the script in dry-run mode and show its output, one line per file:

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/setup/write.ts" --root . --layout single --dry-run
```

Add `--layout multi`, `--codex-scope project` or `--rename-glossary` when the user chose that option, and `--no-codex` when no Codex home exists.

When the Codex file is in the list, show the blocks as they will appear there. When the user agrees, run the same command without `--dry-run`.

## 6. Say what changed

One line per file: created, updated, unchanged, skipped or moved, with the reason the script prints beside a skipped file. Then what reads these files now:

- every brain skill and `brain` read `docs/agents/workspace.md` for the folders and the naming rules;
- every brain lifecycle skill reads `docs/agents/domain.md` and, through it, `GLOSSARY.md`; the domain-modeling skill writes `GLOSSARY.md` and the decision records;
- `brain status` reads `docs/STATUS.md`, and on Claude Code the session-start text carries both;
- Codex reads the blocks in its `AGENTS.md` at the start of every session.

Then give the next step: start with interview-me, which charts the first idea.

## Check for drift

When the user asks for `--check`, or asks whether the setup is current, run the script with `--check` and the flags step 5 would use:

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/setup/write.ts" --root . --layout single --check
```

It writes nothing. It lists each file, then ends with "every file is in place" (exit 0) or with how many files differ (exit 1). Show the lines. A normal run, after the user's yes, brings each file that differs in line.

Running this skill again is safe: the script changes nothing when everything is in place, keeps the repo's workspace settings, and never rewrites `docs/STATUS.md`.
