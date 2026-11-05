---
name: status
description: "Reports where the active work stands in five lines, computed from the workspace's rows and records: the stage, the last completed step, the next step, anything red, and the decisions waiting on the user. Use when a session starts or resumes and no status report is in context yet, when the user asks for the status, where the work stands or what comes next, and before you name a next step from memory."
---

# Status

`brain status` reads the workspace and prints where the active work stands. It writes no file, so run it whenever the state matters.

## 1. Run `brain status`

On Claude Code, run:

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts" status
```

Claude Code fills in the plugin path when it loads this skill. On another host, resolve the plugin folder as setup-brain does, then run `scripts/brain.ts status` from it with bun. It reports on the whole repo from any folder inside it. Below, `brain <cmd>` stands for the same command with `<cmd>` in place of `status`.

Add `--json` when the five lines are not enough. The JSON holds the same lines, each effort's frontier and rows in progress, each red item in full, and every idea with the specs it produced.

## 2. Show the report, then act on it

Show the lines to the user exactly as printed. Then give the next action for each of these:

- **One line that says "run setup-brain to migrate".** The repo is on layout 1 (brain 0.9 and earlier). Tell the user to run setup-brain, which moves the files with `git mv` and changes no body.
- **Red names `brain check` findings.** Run `brain check` and show its list. Each line names a file and the rule it breaks.
- **Red names a missing `docs/agents/workspace.md`.** Tell the user once to run setup-brain. Until then, `brain` uses the default folders.
- **No work is active.** Route the user's request through using-brain. There is no saved next step to assume.

The step is done when the user has seen the lines and every red item has its next action.

## The five lines

| Line | What it holds |
|---|---|
| Stage | The active effort and its stage: an idea with `status: define` is in define; a spec whose `tasks/plan.md` has an `open` or `in-progress` row is in build. The active effort is the one the git branch names, else every effort that is not finished. A branch can name a finished effort; its stage is then "finished". "No active work" when no effort is active. |
| Last step | Each active effort's highest-numbered resolved row, with its result. |
| Next step | Each effort's first frontier row, then its rows in progress. A linked research record with a partial or blocked outcome names that outcome and its record. When the rows give none: none. |
| Red | A missing `docs/agents/workspace.md`, the number of `brain check` findings, and blocked research records. |
| Waiting on the user | The decide rows on the frontier. |

The frontier is every `open` row whose `Blocked by` rows are all `resolved`. A specced, done or parked idea, and a spec with no unfinished row, are finished. When several efforts are active, each line names each of them; ask the user which one to take up, with the ask-user-question skill.

## When `brain status` cannot run

With no bun or no plugin path, read the active effort yourself: an idea's map, or a spec's `tasks/plan.md`, and the records they link. Work out the frontier by hand, and tell the user that you computed it by eye.
