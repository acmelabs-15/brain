---
layout: 2
paths:
  decisions: docs/decisions
  research: docs/research
  ideas: docs/ideas
  specs: docs/specs
max_parallel: 8
---

# Workspace

The workspace is this repo's folders for ideas, decisions, research and specs, with the naming rules they follow. setup-brain writes this file, and every brain skill reads the layout from it.

- `layout` is the version of the layout. setup-brain's re-run and `--check` read it.
- `paths` names each folder. Skills and `brain` read every folder from here, so a folder moves with a change to this file only.
- `max_parallel` is the most sub-agents that run at once: tasks in a build, or research rows in an interview. It is 8 when absent, and the `BRAIN_MAX_PARALLEL` environment variable overrides it.

## `brain <cmd>`

`brain <cmd>` means running `scripts/brain.ts` from the brain plugin with bun. Find the path this way:

- On Claude Code, the session-start report names it, and every brain skill writes it in full. Bash commands do not get `CLAUDE_PLUGIN_ROOT`, so never type that variable into a command.
- A sub-agent gets the path in its brief.
- On another host, resolve the plugin folder as setup-brain does.

## Session state

Use this procedure at session start, after clearing or resuming a session, and when the user asks where work stands.

1. Get the current report. Reuse the report the session-start hook just supplied; otherwise run `brain status`. It reads the whole repo from any folder inside it and writes no file. Use `brain status --json` when you need each effort's frontier, claimed tasks, full red items, or the specs produced by an idea.
2. Show the five lines as printed. The report uses the effort the git branch names, or every unfinished effort when the branch names none. Use **Find the active effort** below to select the work; ask through ask-user-question when that choice remains the user's.
3. Give each reported problem its next action. A layout-1 report needs setup-brain's migration. A missing workspace file needs setup-brain; until then the CLI uses its default folders. For workspace-check findings, run `brain check` and show the file and rule it names. For blocked research, read its record for the missing prerequisite and retry condition.
4. Return the report and selected effort to the caller. For a status-only request, report without starting or changing work. When asked to continue, follow **Resume** below. When called by using-brain, return to its current routing step; this procedure does not invoke the router again.

| Line | Meaning |
| --- | --- |
| Stage | Each reported effort and its stage from current rows: define, build or finished; no active work when none is selected |
| Last step | Each reported effort's most recently completed task and its result |
| Next step | The first ready task, followed by claimed tasks; a linked partial or blocked research record names that outcome and its record |
| Red | Missing workspace setup, workspace-check findings, and blocked research records |
| Waiting on the user | Ready tasks assigned to the user |

When Bun or the plugin path is unavailable, read the selected idea's or spec's task files and their linked records. Compute the frontier by hand and state that limit.

**Missing or older workspace:** when the file is absent, use this template's defaults as a reference and report that setup is needed. When an installed copy lacks this section, use this template's procedure with the installed copy's settings and report that setup-brain must refresh its guidance. The status command itself creates no files.

This procedure is complete when the user has the current report, each red item has a supported next action, and the relevant effort is selected or its selection waits on the user. An explicit user request or handoff takes precedence over a report's suggested next step. "Continue" resumes the next approved action only after the owning workflow reconciles current records and the session's required reads and checks complete.

## Files

| Type | Folder | Name |
| --- | --- | --- |
| Idea: intent, destination and task index | `paths.ideas` | `IDEA-NNN-<slug>.md` |
| Decision record: one decision the user made | `paths.decisions` | `DEC-NNN-<slug>.md` |
| Research record: the findings for one research task | `paths.research` | `RES-NNN-<slug>.md` |
| Spec, with its task files | `paths.specs` | `SPEC-NNN-<slug>/` holding `spec.md` and one file per task in tasks/ |

- Every numbered file (IDEA, SPEC, DEC, RES) is created only through `brain new-doc`. Run `brain new-doc <TYPE> <slug>`: it claims the next free number, writes the file from its template and prints the path. Its claim gives each number to one agent only, which a file written by hand cannot do.
- `NNN` is three digits, global to the repo and never reused; gaps are allowed. Tasks have two-digit numbers local to their folder (T01). Cite a task as `IDEA-004#03`.
- Every H1 opens with an ID: a numbered file with its own (`# DEC-031: <title>`), a file in a spec folder with its spec's (` #  ``SPEC-012 T01:` `<title>`). `spec.md` and each task file also carry `spec: SPEC-012` in their frontmatter.
- A spec names its idea and decisions in its idea: and decisions: frontmatter. Links run one way: an idea holds no list of its specs.
- A completed task links to the DEC or RES file it produced. The task stays short, and the detail lives in that file.
- `brain check` reports every file that breaks these rules.

## Find the active effort

An effort is the idea or spec that a session works on. The active effort is the one that is not finished: an idea with `status: define`, or a spec with a task that is `blocked`, `ready` or `claimed`. An idea with `status: specced` or `done` is finished, and a `parked` idea waits until the user names it. Take the first that applies:

1. An effort explicitly named by the user or the current handoff, including a slug passed to a command that accepts one.
2. The git branch name, if it matches an idea or spec.
3. The only idea or spec that is not finished.
4. Otherwise, ask the user when continuing work requires a choice. A concrete new task does not require selecting an unrelated old effort first.

## Resume

- An idea: load interview-me and follow interview-me's **Resume** before choosing a task. It reconciles saved answers, linked records, running research and uncertain effects, then evaluates all the idea's tasks. The frontier is every `ready` task.
- A spec: read `spec.md`, its task files and relevant result records. Reconcile completed work with actual changes and verification evidence before repeating a task. Load the workflow for the next approved action; incremental-implementation owns a build task. Its task file holds the acceptance criteria.
- An idea with `status: specced` is finished. Resume the spec that names it in idea:.
- An idea with `status: done` is finished with no spec. Its `result:` names what it produced: a `DEC-NNN` for a decision, or a commit SHA for a change made in place.

## Sub-agents

A sub-agent writes its result to a file named after its task or record, the ID first: `T10-result.md`, `RES-032-<slug>.md`. A sub-agent's file name never starts with report, summary, findings or analysis: Claude Code refuses a sub-agent's write to such a `.md` file.

## Background work

A background watcher reports its own outcome, its failure included, as a line of output. Silence is not "still running": check a job's status before you report it in progress. macOS has no `timeout` command.
