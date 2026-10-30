---
name: status
description: "Reports where the active work stands in five lines, read from the workspace and docs/STATUS.md: the stage, the last completed step, the next step, anything red, and the decisions waiting on the user. Use when a session starts or resumes and no status report is in context yet, when the user asks for the status, where the work stands or what comes next, and before you name a next step from memory."
---

# Status

`brain status` reads the workspace and prints where the active work stands. It writes no file, so run it whenever the state matters.

## 1. Run `brain status`

On Claude Code, run:

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts" status
```

Claude Code fills in the plugin path when it loads this skill. On another host, resolve the plugin folder as setup-brain does, then run `scripts/brain.ts status` from it with bun. It reports on the whole repo from any folder inside it. Below, `brain <cmd>` stands for the same command with `<cmd>` in place of `status`.

Add `--json` when the five lines are not enough. The JSON holds the same lines, each effort's frontier and rows in progress, each red item in full, every idea with the specs it produced, and the full text of `docs/STATUS.md`.

## 2. Show the report, then act on it

Show the lines to the user exactly as printed. Then give the next action for each of these:

- **One line that says "run setup-brain to migrate".** The repo is on layout 1 (brain 0.9 and earlier). Tell the user to run setup-brain, which moves the files with `git mv` and changes no body.
- **Red names `brain check` findings.** Run `brain check` and show its list. Each line names a file and the rule it breaks.
- **Red names a missing `docs/agents/workspace.md`.** Tell the user once to run setup-brain. Until then, `brain` uses the default folders.
- **The next step names a row that is already resolved.** `docs/STATUS.md` is older than the rows. Say so, and take the first frontier row from `--json` instead.

The step is done when the user has seen the lines and every red item has its next action.

## The five lines

| Line | What it holds |
|---|---|
| Stage | The active effort and its stage: an idea with `status: define` is in define; a spec whose `tasks/plan.md` has an `open` or `in-progress` row is in build. The active effort is the one the git branch names, else every effort that is not finished. A branch can name a finished effort; its stage is then "finished". "No active work" when no effort is active. |
| Last step | Each active effort's highest-numbered resolved row, with its result. |
| Next step | The next step `docs/STATUS.md` names. Without one: each effort's first frontier row, then its rows in progress. When the rows give none: the first line of `docs/STATUS.md`. |
| Red | A missing `docs/agents/workspace.md`, and the number of `brain check` findings. |
| Waiting on the user | The decisions `docs/STATUS.md` names. Without them: the decide rows on the frontier. |

The frontier is every `open` row whose `Blocked by` rows are all `resolved`. A specced, done or parked idea, and a spec with no unfinished row, are finished. When several efforts are active, each line names each of them; ask the user which one to take up, with the ask-user-question skill.

## What `docs/STATUS.md` feeds

`docs/STATUS.md` is the handoff note that the agent rewrites at task end. Two labelled lines feed the report:

```
- Next: <the next action, with the exact command when the user runs it>
- Waiting on the user: <each decision, by its row: IDEA-004#05>
```

A line that starts with `Next:` or `Next step:` becomes the next-step line. A line that starts with `Waiting on the user:` becomes the waiting line. The other lines stay in the note, and `--json` carries the whole note.

## When `brain status` cannot run

With no bun or no plugin path, read `docs/STATUS.md` and the active effort yourself: an idea's map, or a spec's `tasks/plan.md`. Work out the frontier by hand, and tell the user that you computed it by eye.
