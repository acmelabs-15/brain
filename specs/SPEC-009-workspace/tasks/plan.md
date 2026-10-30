---
spec: SPEC-009
migrated: 0.8
---
# Plan: workspace

Spec: `spec/SPEC-workspace.md` (approved 2026-10-29). Decisions: the Decisions table in
`docs/intent/workspace-and-stateful-interview.md`. The source cache is not in this plan; it
gets its own plan on `feat/source-cache` (`spec/SPEC-source-cache.md`).

Approved by Peter on 2026-10-29, after three rounds: granularity, blocking edges, merge or
split.

## Branches and pull requests

| Phase | Branch | Pull request |
|---|---|---|
| 1, glossary rename | `feat/glossary-rename`, from `main` | PR 1, small, lands first. After Peter approves the phase 1 checkpoint review, the build pushes the branch and opens PR 1; Peter merges it himself |
| 2 to 6 | `feat/workspace-layout`, from `main` after PR 1 merges | PR 2, after Peter's yes |
| 7, brain's history (T39) | its own branch, after a second ask | PR 3, after Peter's yes |
| 7, the fallback's end (T40) | its own branch, in the release that ships 0.11.0 | PR 4, after Peter's yes |

Each task ends with `bun run check` green and one commit, files staged by name.

## Components and order

| Phase | Tasks | What it delivers | Depends on |
|---|---|---|---|
| 1. Glossary rename | T01 to T08 | `GLOSSARY.md` everywhere brain owns, Matt's pin at `d81f3a1`, the fallback until 0.11.0, brain's own glossary, the guard | — |
| 2. Workspace foundation | T09 to T16 | the `brain` CLI, `workspace.md`, the templates, `brain new-doc`, the fixtures and map parser, the migrate mode's frontmatter step, `brain check` and `sync --check` in the gate, `brain status` and the status skill | 1 |
| 3. Define phase | T17 to T25 | DEC format with its eval, the agent brief and agent list, interview-me in three tasks (map, loop with the resume eval, research), idea-refine seeded, wayfinder and triage retired, setup-brain without a tracker | 2 |
| 4. Build-phase paths and parallel work | T26, T27, T29, T41 to T46 | commands with the build eval, lifecycle skills on `docs/specs/`, path updates to the other evals; `brain plan`, checkpoint edges in `brain check`, the "Parallel waves" section in every plan, `max_parallel`, the parallel `/build auto` and research rows with their evals | 3 |
| 5. The protocol | T30 to T32 | the render prefactor, the protocol rendered per host, the Claude `SessionStart` hook | 2, 4 |
| 6. Install and the router | T33, T34, T28, T35 to T38 | the install writer with the fresh-repo eval, capabilities detection, `using-brain` and the 1% rule with its two evals (T28, after T34, because it describes the protocol and setup-brain's new outputs), the overlap report, the migrate mode in three tasks with its eval | 3, 5 |
| 7. Brain's history and the fallback's end | T39, T40 | `spec/` and `tasks/done/` moved through the migrate mode; the old-glossary fallback and its check removed in the release that ships 0.11.0 | 6 and a second ask (T39); the 0.10.0 release (T40) |

Prefactors, each before the task that needs it: T09 (the CLI skeleton and the workspace
config reader, which every later script calls), T13 (the migrate mode's frontmatter step,
which the check needs to pass on brain), T30 (`render.ts` takes several source texts, which
the protocol needs).

Each eval case is written first, in the task it verifies: `adr-is-dec` in T17,
`interview-resume` in T20, `build-clean-context` in T26, `skill-not-skipped` and
`no-overload` in T28 (phase 6), `fresh-repo-resume` in T33, `migrate-08` in T38. T29 only moves paths in
existing cases.

The glossary rename is a wide but mechanical text change. It touches more than five files per
task in T04 and T06; each of those diffs is a word swap the reviewer checks for intent only.

## Parallel waves

Worked out by hand from the blocking edges; `brain plan` (T41) cannot read this plan, which
is in the old layout, until T39 migrates it. Updated 2026-10-29: T01 to T27, T29 to T34,
T35 to T37, T41 to T51 done; T28, T38 and T52 running. Each wave is a frontier: every task in
it can start once the waves above it are done. Waves cross phase lines; a phase checkpoint
still reviews its own tasks. From the phase 5 review on, a task waits for every checkpoint whose phase it depends on (Peter, 2026-10-29, at the phase 2 review).

| Wave | Tasks |
|---|---|
| A (running) | T53, T54, T55, T56, T57 |
| Then | T39 after the second ask; T40 after the 0.10.0 release |

The critical path from here is 1 task: T38 (T28 and T52 are as long).

Tasks in one wave share some files: `skills/setup-brain/` (T33, T34, T36, T37),
`scripts/setup/write.ts` (T33, T34, T36), `scripts/workspace/check.ts` (T43) and
`tasks/todo.md` (every task). Parallel tasks therefore run in separate git worktrees, and the
main session merges each one back in turn, resolves those small overlaps, and is the only
writer of the ticks in `tasks/todo.md`. For the rest of this build each wave runs whole (cap
8, Peter, 2026-10-29), unless two of its tasks edit the same function; then the later one
waits.

## Checkpoints

Every phase ends with a checkpoint row in `tasks/todo.md` and a review with Peter.

- Phase 1: `bun run check` and `bun run validate` green; the checkpoint is PR 1 merged, after
  Peter's yes to the push.
- Phase 2: `bun run check` runs `workspace:check` and `sync --check` and is green on brain;
  the parallel-claim test passes ten runs in a row.
- Phase 3: no `wayfinder` or `triage` mention outside history; `bun run check` green.
- Phase 4: every eval dry check passes.
- Phase 5: the hook's output is under 10,000 characters on every fixture.
- Phase 6: the full suite once, `bun run validate`, then code-review-and-quality over the
  branch; PR 2 after Peter's yes.
- Phase 7: `bun run check` green; PR 3 after Peter's yes.

## Risks and mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| `docs/intent/brain-wrap.md` has an uncommitted change that is not this work's (it looks like a formatter run, and it drops `<version>` from "tag v<version>") | T06 must add one line to that file | Ask Peter at T06 whether to keep, revert or commit that change first; stage only the amendment line |
| `bun run sync` needs the network | T01 and T22 cannot run offline | Run them when online; `sync --check` stays offline |
| The parallel-claim test is timing-dependent | A flaky gate | Real processes, ten runs at the checkpoint, and an assertion message that prints every claimed number |
| The interview-me rewrite grows past a readable size | Agents skip its later steps | writing-for-agents: steps in `SKILL.md`, the research brief disclosed in a sibling file |
| `SessionStart` text over 10,000 characters is cut to a preview | The protocol loses its tail | A test on every fixture; the protocol kept short |
| Evals cost model runs | Budget | Each new case stays within SPEC-evals' three runs per arm; CI runs them |
| The 1% wording over-loads skills on native-routing hosts | Noise, context | The `no-overload` eval; soften the wording if it fails (Peter, question 14) |


## Open questions

- At T06: what to do with the uncommitted `brain-wrap.md` change.
- At T28: the 1% wording is ported from Peter's hand-written `AGENTS.md`; the build reads
  `/Users/peterkloss/Dev/resume/AGENTS.md` for it, and asks if that file lacks it.
- At T39: the second ask before brain's history moves.
