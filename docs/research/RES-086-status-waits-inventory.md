---
id: RES-086
status: resolved # in-progress | resolved
kind: research
from: IDEA-016#16 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
date: 2026-11-21
outcome: answered
---
# RES-086: Inventory of every place that handles status or waits

## Question
Where does Brain handle status or waits: every site in the repo, with its file, item kinds and operation, found by a full read of every file and by independent sweeps?

## Answer
Sufficient answer: every text file of the worktree has an entry from an agent that read it in full; independent sweeps that search another way agree with those entries, or each difference is explained; and the sites are cut into topics for research in depth.

**377 of the 611 files hold 2015 sites that handle status or waits.** A further 213 sites are borderline: a "status" or "blocked" about something else, such as git status or a test result. The other 162 files have no site, each with a reason.

How it was made, on 2026-11-21, by workflow run `wf_b45aa748-93e` (33 agents) and a merge script in the main session:
- The file list is every file that `rg --files --hidden` lists outside `node_modules` and `.git`: 611 text files, 58,934 lines, no binary file. It includes the uncommitted records of IDEA-014 to IDEA-016.
- 25 readers each read every file of one slice of that list in full and wrote one entry per file. The merge found an entry for all 611 paths and no malformed entry.
- 8 sweeps searched the whole repo another way and recorded 3275 sites: by literal status value, by literal wait word, by general word and identifier, by item kind (two sweeps), by entry point in code, by lifecycle moment in the instructions, and by commit history.
- The merge compared the two. Of the sweep sites that are not borderline, 5 had no matching reader site: 4 in files the reader gave no site, and 1 in a file with other sites. All 5 are minor and are kept in the sweep data: a grader rubric line, the plain-talk renderer that copies the protocol text, a layout-1 ADR fixture with no status, a grader for `layout: 2`, and a test of retired tracker flags.
- A search for the strong words (Blocked by, superseded, in-progress, specced, parked, frontier, resolved, wave, checkpoint, depends on, waits on, outcome:) found 7 lines outside every site. All 7 are other meanings: "the resolved path" (5), an idea template's "Outcome:" line, and "depends on it".

Limits:
- The per-site data (lines, kinds, operations, values and a summary for each site) is in the session scratchpad, `<scratchpad of session 8f41990c>/status-waits/`, which is temporary. This record keeps the per-file index below; the topic records of rows 17 to 30 carry the depth.
- A reader judged scope file by file. The three checks on each topic record (rows 17 to 30) test those judgements again.
- Kinds and operations are the readers' labels, so the counts show size, not exact classes.

### Sites by area
| Area | Files with sites | Sites |
|---|---|---|
| `scripts/workspace` | 83 | 322 |
| `docs/research` | 18 | 311 |
| `docs/ideas` | 14 | 152 |
| `scripts/evals` | 24 | 151 |
| `docs/intent` | 2 | 93 |
| `specs/SPEC-009-workspace` | 3 | 86 |
| `docs/decisions` | 39 | 79 |
| `evals/lifecycle` | 44 | 69 |
| `scripts/setup` | 8 | 59 |
| `skills/ask-user-question` | 12 | 55 |
| `(root)` | 6 | 52 |
| `skills/interview-me` | 3 | 48 |
| `commands` | 7 | 41 |
| `.claude` | 6 | 35 |
| `skills/idea-refine` | 2 | 33 |
| `scripts/lifecycle` | 7 | 31 |
| `skills/setup-brain` | 4 | 29 |
| `protocol` | 2 | 26 |
| `specs/SPEC-001-evals` | 3 | 22 |
| `skills/planning-and-task-breakdown` | 1 | 19 |
| `docs/agents` | 3 | 18 |
| `specs/SPEC-003-lifecycle` | 3 | 18 |
| `skills/spec-driven-development` | 1 | 17 |
| `scripts/hooks` | 3 | 16 |
| `specs/SPEC-006-setup` | 3 | 16 |
| `skills/using-brain` | 1 | 15 |
| `evals/setup` | 12 | 14 |
| `skills/incremental-implementation` | 1 | 13 |
| `references/brain` | 3 | 12 |
| `specs/SPEC-005-question` | 3 | 12 |
| `skills/domain-modeling` | 3 | 11 |
| `specs/SPEC-002-host-manifests` | 3 | 10 |
| `specs/SPEC-004-plain-talk` | 3 | 10 |
| `specs/SPEC-008-upstream-sync` | 3 | 10 |
| `rules` | 1 | 9 |
| `references` | 2 | 8 |
| `docs/evals` | 2 | 7 |
| `docs/install` | 5 | 7 |
| `skills/debugging-and-error-recovery` | 2 | 7 |
| `docs` | 1 | 6 |
| `skills/code-review-and-quality` | 1 | 6 |
| `skills/prototype` | 3 | 6 |
| `specs/SPEC-007-source-cache` | 1 | 6 |
| `skills/context-engineering` | 1 | 5 |
| `skills/doubt-driven-development` | 1 | 5 |
| `tasks` | 2 | 5 |
| `docs/maintainers` | 1 | 3 |
| `plain-talk` | 3 | 3 |
| `scripts` | 1 | 3 |
| `scripts/lib` | 2 | 3 |
| `skills/constraint-driven-development` | 1 | 3 |
| `skills/git-workflow-and-versioning` | 1 | 3 |
| `evals/question` | 2 | 2 |
| `skills/browser-testing-with-devtools` | 1 | 2 |
| `skills/documentation-and-adrs` | 1 | 2 |
| `.claude-plugin` | 1 | 1 |
| `.github` | 1 | 1 |
| `claude` | 1 | 1 |
| `output-styles` | 1 | 1 |
| `scripts/plain-talk` | 1 | 1 |
| `skills/codebase-design` | 1 | 1 |
| `skills/deprecation-and-migration` | 1 | 1 |
| `skills/source-driven-development` | 1 | 1 |
| `skills/test-driven-development` | 1 | 1 |

### Sites by item kind and by operation
A site can name several kinds and several operations.

| Item kind | Sites | | Operation | Sites |
|---|---|---|---|---|
| user-wait | 636 | | describe | 750 |
| plan-row | 633 | | instruct | 525 |
| map-row | 603 | | record-instance | 490 |
| idea | 467 | | fixture | 349 |
| spec | 448 | | test | 341 |
| decision-record | 388 | | store | 257 |
| effort | 375 | | validate | 236 |
| research-record | 358 | | define-values | 234 |
| other | 293 | | report | 215 |
| wave | 226 | | derive | 185 |
| checkpoint | 169 | | template | 163 |
| phase | 99 | | write | 127 |
|  |  | | select | 108 |
|  |  | | change | 93 |
|  |  | | parse | 71 |
|  |  | | other | 16 |
|  |  | | sort | 4 |

### Topics
The sites are cut into 11 topics by path, which together hold every site once, and 3 topics that cut across all areas. Each topic is one research row of IDEA-016.

| Row | Topic | Sites | Covers |
|---|---|---|---|
| 17 | code-fields | 99 | the schemas, the templates, `brain new-doc` and `brain check` |
| 18 | code-rows-graph | 84 | map and plan parsing, Blocked by edges, the frontier, phases, checkpoints, waves and cycles |
| 19 | code-status-report | 141 | `brain status`, the stage, effort selection, the session-start hook and their fixtures |
| 20 | setup-migration | 119 | the setup code, the layout-1 reader and migration, migrated files and the setup skill |
| 21 | instr-interview | 154 | interview-me, idea-refine, prototype, domain-modeling, ask-user-question, wait-what, handoff and the researcher agent |
| 22 | instr-spec-build | 177 | the spec, plan, build, review and ship skills, the commands, the references, the personas and the vendored skills |
| 23 | protocol-routing | 131 | the protocol, the router, the host deliveries and the lifecycle checks |
| 24 | evals | 243 | the eval cases, graders and scaffolds, and the eval code and its tests |
| 25 | docs-design-history | 130 | the glossary, README, changelog, maintainer docs and the design sources under `docs/intent/` |
| 26 | records-ideas-decisions-research | 542 | this repo's ideas, decision records and research records |
| 27 | records-specs-plans | 195 | this repo's specs, plans and task files |
| 28 | phases-checkpoints-waves | 350 | every site about a phase, a checkpoint or a wave, across all areas |
| 29 | wait-forms | 865 | every site about a wait: Blocked by, blocking links, depends on, sources, supersedes, prose waits, cycles, the frontier |
| 30 | status-lifecycle | 513 | every site that sets, changes, works out or relies on the status of an idea, a spec or an effort |

### Sites per file
Each line: the file, its count of sites, the item kinds and the operations the reader named.

- `.claude-plugin/plugin.json`: 1; effort, other, plan-row; other
- `.claude/commands/build.md`: 22; checkpoint, effort, phase, plan-row, spec, user-wait, wave; change, define-values, derive, instruct, report, select, sort, validate, write
- `.claude/commands/plan.md`: 6; checkpoint, effort, phase, plan-row, spec, user-wait, wave; derive, describe, instruct, select, store, template, validate
- `.claude/commands/review.md`: 1; user-wait; instruct
- `.claude/commands/spec.md`: 4; plan-row, spec, user-wait; instruct, template, write
- `.claude/commands/status.md`: 1; effort, idea, map-row, plan-row, spec; instruct, report
- `.claude/commands/test.md`: 1; user-wait; instruct
- `.github/workflows/release.yml`: 1; decision-record, idea, map-row, plan-row, research-record, spec; validate
- `AGENTS.md`: 4; decision-record, effort, idea, plan-row, spec, user-wait; describe, instruct, select
- `CHANGELOG.md`: 15; checkpoint, decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait, wave; describe, report
- `GEMINI.md`: 10; decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait; change, define-values, instruct, report, select, store, template, validate, write
- `GLOSSARY.md`: 13; checkpoint, decision-record, effort, idea, map-row, other, phase, plan-row, research-record, user-wait, wave; define-values, derive, describe
- `README.md`: 6; decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait; define-values, describe, report, validate
- `claude/agents/researcher.md`: 1; map-row, research-record; describe, instruct, write
- `commands/build.toml`: 22; checkpoint, effort, other, phase, plan-row, spec, user-wait, wave; change, define-values, derive, describe, instruct, report, select, sort, store, validate, write
- `commands/planning.toml`: 8; checkpoint, effort, phase, plan-row, spec, user-wait, wave; define-values, derive, describe, instruct, select, store, template, validate, write
- `commands/review.toml`: 1; spec, user-wait; instruct
- `commands/ship.toml`: 1; other, user-wait; instruct, validate
- `commands/spec.toml`: 5; decision-record, effort, idea, plan-row, research-record, spec, user-wait; instruct, sort, template, write
- `commands/status.toml`: 2; effort, idea, plan-row, spec, user-wait; describe, instruct, report
- `commands/test.toml`: 2; spec, user-wait; instruct
- `docs/agents.md`: 6; effort, map-row, other, plan-row, research-record, user-wait; describe, instruct, report
- `docs/agents/domain.md`: 2; decision-record; describe, instruct
- `docs/agents/history/STATUS.md`: 4; idea, map-row, other, phase, research-record, spec, user-wait; instruct, record-instance, report
- `docs/agents/workspace.md`: 12; decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait, wave; define-values, derive, describe, instruct, report, select, store, validate
- `docs/decisions/DEC-001-lint-and-format.md`: 2; decision-record; record-instance, store
- `docs/decisions/DEC-002-ask-user-question-upstream.md`: 2; decision-record, other, spec; describe, record-instance, store
- `docs/decisions/DEC-003-specs-folder-at-the-root.md`: 2; decision-record; describe, record-instance, store
- `docs/decisions/DEC-004-capability-map-brain.md`: 5; decision-record, other, research-record, spec, wave; describe, record-instance, store
- `docs/decisions/DEC-005-specs-folder-of-a-first-install.md`: 2; decision-record, user-wait; describe, record-instance, store
- `docs/decisions/DEC-006-drop-ask-user-question-upstream.md`: 2; decision-record, user-wait; describe, record-instance, store
- `docs/decisions/DEC-007-flow-outline-and-continuous-writes.md`: 2; decision-record, map-row, plan-row, research-record; define-values, describe, record-instance, store
- `docs/decisions/DEC-010-session-opens-with-a-question.md`: 2; decision-record, effort, map-row, user-wait; define-values, describe, record-instance, store
- `docs/decisions/DEC-013-keep-the-whole-map-evaluated.md`: 2; decision-record, idea, map-row, research-record; define-values, describe, record-instance, store
- `docs/decisions/DEC-014-remove-the-handoff-note.md`: 2; decision-record, effort, map-row, plan-row, user-wait; define-values, describe, record-instance, store
- `docs/decisions/DEC-020-status-then-prompt-then-router.md`: 2; decision-record, effort, map-row, user-wait; define-values, describe, record-instance, store
- `docs/decisions/DEC-024-workspace-owns-status.md`: 2; decision-record, effort; define-values, describe, record-instance, store
- `docs/decisions/DEC-025-split-idea-004-by-scope.md`: 2; decision-record, idea, map-row; define-values, describe, record-instance, store
- `docs/decisions/DEC-026-views-show-only.md`: 2; decision-record, map-row, plan-row, research-record; define-values, describe, record-instance, store
- `docs/decisions/DEC-027-views-why-now.md`: 2; decision-record, effort, idea, map-row, spec; define-values, describe, record-instance, store
- `docs/decisions/DEC-028-roadmap-view.md`: 2; decision-record, effort, idea, map-row, phase, spec; define-values, describe, record-instance, store
- `docs/decisions/DEC-029-effort-blocked-by.md`: 2; decision-record, effort, idea, map-row, plan-row, spec; define-values, describe, record-instance, store
- `docs/decisions/DEC-030-fixed-and-live-waves.md`: 2; checkpoint, decision-record, map-row, phase, plan-row, spec, wave; define-values, derive, describe, record-instance, store
- `docs/decisions/DEC-031-effort-field-own-idea.md`: 2; decision-record, effort, idea, map-row, spec; define-values, describe, record-instance, store
- `docs/decisions/DEC-032-detail-linked-records.md`: 2; decision-record, idea, map-row, research-record, spec; define-values, describe, record-instance, select, store
- `docs/decisions/DEC-033-detail-view-contents.md`: 2; checkpoint, decision-record, idea, map-row, phase, plan-row, spec, wave; define-values, describe, record-instance, report, store
- `docs/decisions/DEC-034-one-item-type-per-view.md`: 2; decision-record, idea, map-row, spec; define-values, describe, record-instance, store
- `docs/decisions/DEC-035-board-columns.md`: 2; checkpoint, decision-record, idea, map-row, phase, plan-row, spec; define-values, derive, describe, record-instance, store
- `docs/decisions/DEC-036-migrated-column.md`: 2; decision-record, map-row, plan-row, spec; define-values, describe, record-instance, store
- `docs/decisions/DEC-037-read-every-format.md`: 2; decision-record, idea, map-row, plan-row, research-record, spec; define-values, describe, parse, record-instance, store
- `docs/decisions/DEC-038-board-levels-and-filter.md`: 2; checkpoint, decision-record, idea, map-row, phase, spec; define-values, derive, describe, record-instance, store
- `docs/decisions/DEC-039-live-views.md`: 2; decision-record, map-row, other; define-values, describe, record-instance, store
- `docs/decisions/DEC-040-board-one-type-for-now.md`: 2; checkpoint, decision-record, idea, map-row, phase, spec; define-values, derive, describe, record-instance, store
- `docs/decisions/DEC-041-no-roadmap-view.md`: 2; decision-record, map-row; define-values, describe, record-instance, store
- `docs/decisions/DEC-042-board-type-and-scope.md`: 2; checkpoint, decision-record, idea, map-row, phase, plan-row, spec, wave; define-values, derive, describe, record-instance, store
- `docs/decisions/DEC-043-views-claude-code-only.md`: 2; decision-record, effort, map-row, other; define-values, describe, record-instance, report, store
- `docs/decisions/DEC-044-changes-are-git-status.md`: 1; decision-record, map-row; define-values, record-instance, store
- `docs/decisions/DEC-045-history-commit-list.md`: 2; decision-record, map-row, plan-row; define-values, describe, record-instance, store
- `docs/decisions/DEC-046-panel-opening.md`: 1; decision-record, map-row; define-values, record-instance, store
- `docs/decisions/DEC-047-views-success.md`: 2; decision-record, idea, map-row, phase, plan-row, spec; define-values, describe, record-instance, report, store
- `docs/decisions/DEC-048-brain-session-command.md`: 2; decision-record, map-row, user-wait; define-values, describe, record-instance, store
- `docs/decisions/DEC-049-board-group-by.md`: 2; decision-record, map-row, phase, plan-row, wave; define-values, describe, record-instance, select, store
- `docs/decisions/DEC-050-widen-idea-016.md`: 2; decision-record, effort, idea, map-row, phase, plan-row, spec; define-values, describe, record-instance, store
- `docs/decisions/DEC-051-shared-status-values.md`: 2; decision-record, idea, map-row, plan-row, spec; change, define-values, derive, describe, record-instance, store
- `docs/evals/first-run.md`: 3; other, plan-row, spec, user-wait; describe, fixture, report, test
- `docs/evals/interview-recovery.md`: 4; decision-record, idea, map-row, research-record, user-wait, wave; define-values, describe, instruct, test
- `docs/ideas/IDEA-001-review-follow-ups.md`: 11; decision-record, effort, idea, map-row, other, plan-row, spec, user-wait, wave; define-values, derive, describe, instruct, parse, record-instance, store, template, test, validate
- `docs/ideas/IDEA-004-keystone-workflow-follow-ups.md`: 10; decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait, wave; describe, instruct, record-instance, report, store
- `docs/ideas/IDEA-005-source-cache.md`: 6; effort, idea, map-row, research-record, user-wait; define-values, instruct, record-instance, store, template
- `docs/ideas/IDEA-006-setup-and-workspace-safety.md`: 6; effort, idea, map-row, research-record, user-wait; define-values, instruct, record-instance, store, template
- `docs/ideas/IDEA-007-build-and-review-orchestration.md`: 7; effort, idea, map-row, plan-row, research-record, user-wait, wave; define-values, describe, instruct, record-instance, store, template
- `docs/ideas/IDEA-008-stage-state-and-handoffs.md`: 9; effort, idea, map-row, research-record, spec, user-wait; define-values, describe, instruct, record-instance, store, template
- `docs/ideas/IDEA-009-detours-and-side-skills.md`: 7; effort, idea, map-row, research-record, user-wait; define-values, describe, instruct, record-instance, store, template
- `docs/ideas/IDEA-010-external-specs.md`: 8; effort, idea, map-row, research-record, spec, user-wait; define-values, describe, instruct, record-instance, store, template
- `docs/ideas/IDEA-011-upstream-reference-fixes.md`: 8; effort, idea, map-row, research-record, user-wait; define-values, instruct, record-instance, store, template
- `docs/ideas/IDEA-012-model-output-checks.md`: 8; effort, idea, map-row, other, research-record, user-wait; define-values, describe, instruct, record-instance, report, store, template
- `docs/ideas/IDEA-013-session-start-prompt-via-mod.md`: 7; decision-record, effort, idea, map-row, research-record, user-wait; define-values, describe, instruct, record-instance, report, store, template
- `docs/ideas/IDEA-014-migration.md`: 8; effort, idea, map-row, other, research-record, user-wait; define-values, describe, instruct, record-instance, store, template
- `docs/ideas/IDEA-015-views-mod.md`: 36; checkpoint, decision-record, effort, idea, map-row, other, phase, plan-row, research-record, spec, user-wait, wave; change, define-values, derive, describe, instruct, record-instance, report, store, template
- `docs/ideas/IDEA-016-effort-blocked-by.md`: 21; checkpoint, decision-record, effort, idea, map-row, other, phase, plan-row, research-record, spec, user-wait; change, define-values, derive, describe, instruct, record-instance, store, template, validate
- `docs/install/antigravity.md`: 1; effort, map-row, plan-row; describe, instruct
- `docs/install/claude-code.md`: 2; effort, map-row, plan-row; derive, describe, instruct, report
- `docs/install/codex.md`: 1; effort, map-row, plan-row; describe, instruct
- `docs/install/gemini-cli.md`: 1; effort, map-row, plan-row; describe, instruct
- `docs/install/prerequisites.md`: 2; effort, idea, map-row, other, plan-row, spec; describe, instruct
- `docs/intent/brain-wrap.md`: 6; decision-record, idea, map-row, other, plan-row, research-record, user-wait; change, describe, record-instance, store
- `docs/intent/workspace-and-stateful-interview.md`: 87; checkpoint, decision-record, effort, idea, map-row, other, phase, plan-row, research-record, spec, user-wait, wave; change, define-values, derive, describe, fixture, instruct, parse, record-instance, report, select, store, template, test, validate, write
- `docs/maintainers/changes.md`: 3; user-wait; instruct, test
- `docs/research/RES-001-wrap-layout.md`: 4; research-record, user-wait; record-instance, store
- `docs/research/RES-002-matt-over-addy.md`: 12; checkpoint, decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait, wave; describe, record-instance, store
- `docs/research/RES-003-triage-wayfinder.md`: 10; effort, idea, map-row, other, plan-row, research-record, user-wait; describe, record-instance, store
- `docs/research/RES-004-ask-user-question-fit.md`: 11; checkpoint, decision-record, map-row, research-record, spec, user-wait; describe, record-instance, store
- `docs/research/RES-005-ask-user-question-artifacts.md`: 9; other, research-record, user-wait; describe, instruct, record-instance, store
- `docs/research/RES-006-status-note-role.md`: 29; decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait; define-values, derive, describe, fixture, instruct, parse, record-instance, report, select, store, template, test, validate, write
- `docs/research/RES-024-state-file-origins.md`: 15; decision-record, effort, idea, map-row, other, phase, plan-row, research-record, spec, user-wait; define-values, describe, record-instance, store
- `docs/research/RES-035-auto-start-mechanisms.md`: 6; effort, idea, map-row, other, research-record; define-values, describe, record-instance, report, store
- `docs/research/RES-037-flow-statement.md`: 62; checkpoint, decision-record, effort, idea, map-row, other, phase, plan-row, research-record, spec, user-wait, wave; change, define-values, derive, describe, instruct, parse, record-instance, report, select, store, test, validate, write
- `docs/research/RES-038-opening-question.md`: 10; effort, map-row, research-record, user-wait; change, define-values, describe, record-instance, select, store, test
- `docs/research/RES-040-ui-ask-opening-question.md`: 13; effort, map-row, other, research-record, user-wait; define-values, describe, record-instance, select, store, test
- `docs/research/RES-069-keystone-workflow-audit.md`: 33; decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait, wave; change, describe, instruct, record-instance, report, select, store, test, validate, write
- `docs/research/RES-072-mod-packaging.md`: 8; effort, idea, map-row, research-record, spec, user-wait; describe, parse, record-instance, report, store
- `docs/research/RES-073-view-data.md`: 48; checkpoint, decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait, wave; define-values, derive, describe, fixture, instruct, parse, record-instance, report, select, store, template, validate
- `docs/research/RES-074-mod-ui-surface.md`: 8; effort, map-row, other, research-record, user-wait; describe, record-instance, report, store
- `docs/research/RES-075-git-item-history.md`: 13; decision-record, idea, map-row, plan-row, research-record, spec, user-wait; derive, describe, instruct, parse, record-instance, store, test
- `docs/research/RES-076-brain-format-versions.md`: 16; checkpoint, decision-record, idea, map-row, other, phase, plan-row, research-record, spec, wave; derive, describe, parse, record-instance, report, select, store, validate
- `docs/research/RES-077-brain-session-command.md`: 4; decision-record, map-row, research-record, spec, user-wait; describe, record-instance, store
- `evals/lifecycle/adr-is-dec/graders/passes-check.md`: 1; decision-record; test, validate
- `evals/lifecycle/adr-is-dec/prompt.md`: 1; decision-record; describe, test
- `evals/lifecycle/build-clean-context/graders/plan-rows-resolved.md`: 1; plan-row; test
- `evals/lifecycle/build-clean-context/graders/todo-ticked.md`: 1; plan-row; test
- `evals/lifecycle/build-clean-context/prompt.md`: 1; plan-row, spec, user-wait; describe, test
- `evals/lifecycle/build-clean-context/scaffold.sh`: 5; phase, plan-row, spec, wave; describe, fixture, instruct
- `evals/lifecycle/build-parallel/graders/branch-head.md`: 1; plan-row, wave; test
- `evals/lifecycle/build-parallel/graders/reason-for-fewer.md`: 1; plan-row, wave; test
- `evals/lifecycle/build-parallel/graders/rows-resolved.md`: 1; plan-row; test
- `evals/lifecycle/build-parallel/graders/started-01.md`: 1; plan-row, wave; test
- `evals/lifecycle/build-parallel/graders/started-02.md`: 1; plan-row, wave; test
- `evals/lifecycle/build-parallel/graders/started-03.md`: 1; plan-row, wave; test
- `evals/lifecycle/build-parallel/graders/started-04.md`: 1; plan-row, wave; test
- `evals/lifecycle/build-parallel/graders/started-05.md`: 1; plan-row, wave; test
- `evals/lifecycle/build-parallel/graders/stops-at-checkpoint.md`: 1; checkpoint, plan-row, user-wait; test
- `evals/lifecycle/build-parallel/graders/worktrees.md`: 1; plan-row, wave; test
- `evals/lifecycle/build-parallel/prompt.md`: 1; checkpoint, plan-row, user-wait, wave; describe, test
- `evals/lifecycle/build-parallel/scaffold.sh`: 7; checkpoint, phase, plan-row, spec, user-wait, wave; describe, fixture, instruct
- `evals/lifecycle/interview-parallel-research/graders/one-agent-per-row.md`: 1; map-row, research-record; test
- `evals/lifecycle/interview-parallel-research/graders/research-02.md`: 1; map-row, research-record; test
- `evals/lifecycle/interview-parallel-research/graders/research-03.md`: 1; map-row, research-record; test
- `evals/lifecycle/interview-parallel-research/graders/research-04.md`: 1; map-row, research-record; test
- `evals/lifecycle/interview-parallel-research/graders/rows-in-progress.md`: 1; map-row; test
- `evals/lifecycle/interview-parallel-research/graders/started-at-once.md`: 1; map-row, research-record; test
- `evals/lifecycle/interview-parallel-research/prompt.md`: 1; idea, map-row, user-wait; describe, test
- `evals/lifecycle/interview-parallel-research/scaffold.sh`: 6; decision-record, idea, map-row, user-wait; describe, fixture, instruct
- `evals/lifecycle/interview-resume/graders/frontier-row.md`: 1; map-row; select, test
- `evals/lifecycle/interview-resume/graders/no-new-decision.md`: 1; decision-record, map-row, user-wait; test
- `evals/lifecycle/interview-resume/graders/no-new-idea.md`: 1; idea; test
- `evals/lifecycle/interview-resume/graders/no-settled-question.md`: 1; map-row, user-wait; test
- `evals/lifecycle/interview-resume/graders/one-question.md`: 1; map-row, user-wait; test
- `evals/lifecycle/interview-resume/prompt.md`: 1; idea, map-row, user-wait; describe, test
- `evals/lifecycle/interview-resume/scaffold.sh`: 11; decision-record, idea, map-row, research-record, user-wait; describe, fixture, instruct
- `evals/lifecycle/no-overload/graders/no-lifecycle-skill.md`: 1; other; describe, test
- `evals/lifecycle/plan-three-questions/graders/one-question.md`: 1; plan-row, user-wait; test
- `evals/lifecycle/plan-three-questions/graders/plan-file.md`: 1; checkpoint, plan-row; test
- `evals/lifecycle/plan-three-questions/prompt.md`: 1; plan-row, user-wait; describe, test
- `evals/lifecycle/spec-underspecified/graders/idea-file.md`: 1; idea, map-row, user-wait; test
- `evals/lifecycle/spec-underspecified/graders/one-discovery-question.md`: 1; user-wait; test
- `evals/lifecycle/spec-underspecified/graders/question-asked.md`: 1; user-wait; test
- `evals/lifecycle/spec-underspecified/prompt.md`: 1; idea, map-row, user-wait; describe, test
- `evals/lifecycle/verify-no-loop/graders/asked.md`: 1; user-wait; test
- `evals/lifecycle/verify-no-loop/graders/no-fix-without-loop.md`: 1; user-wait; test
- `evals/lifecycle/verify-no-loop/prompt.md`: 1; user-wait; describe, test
- `evals/question/plan-approval/graders/one-question.md`: 1; plan-row, user-wait; test
- `evals/question/plan-approval/prompt.md`: 1; plan-row, user-wait; describe, test
- `evals/setup/fresh-repo-resume/graders/agents-md.md`: 1; other; test
- `evals/setup/fresh-repo-resume/graders/invents-no-work.md`: 1; decision-record, effort, idea, plan-row, spec; report, test
- `evals/setup/fresh-repo-resume/graders/next-step.md`: 1; effort; report, test
- `evals/setup/fresh-repo-resume/graders/stage.md`: 1; effort, idea, spec; derive, report, test
- `evals/setup/fresh-repo-resume/prompt.md`: 1; effort; describe, report, test
- `evals/setup/fresh-repo-resume/scaffold.sh`: 1; effort; fixture
- `evals/setup/fresh-repo/graders/status-md.md`: 1; effort, other; describe, test
- `evals/setup/migrate-08/graders/adr-in-place.md`: 1; decision-record; test
- `evals/setup/migrate-08/graders/agents-md-kept.md`: 1; other, user-wait; test
- `evals/setup/migrate-08/graders/check-ran.md`: 1; other; test, validate
- `evals/setup/migrate-08/graders/status-md.md`: 1; effort, other; describe, test
- `evals/setup/migrate-08/scaffold.sh`: 3; decision-record, other, plan-row, research-record, user-wait; fixture, instruct
- `output-styles/talk-plain.md`: 1; user-wait; instruct
- `package.json`: 4; checkpoint, decision-record, effort, idea, map-row, other, plan-row, research-record, spec, wave; derive, report, template, validate
- `plain-talk/AGENTS-block.md`: 1; user-wait; instruct
- `plain-talk/PLAIN-TALK.md`: 1; user-wait; instruct
- `plain-talk/templates/protocol-rule.md`: 1; other, plan-row; describe
- `protocol/AGENTS-block.md`: 13; decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait; change, define-values, instruct, report, store, template, validate, write
- `protocol/PROTOCOL.md`: 13; decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait; change, define-values, instruct, report, store, template, validate, write
- `references/brain/agent-brief.md`: 1; other; instruct, template
- `references/brain/commit-contract.md`: 6; plan-row, user-wait, wave; change, instruct, validate, write
- `references/brain/stage-boundaries.md`: 5; decision-record, idea, map-row, other, plan-row, research-record, spec, user-wait; define-values, derive, describe, instruct, store
- `references/definition-of-done.md`: 4; other, plan-row, user-wait; define-values, derive, describe, instruct, template, validate
- `references/orchestration-patterns.md`: 4; other, user-wait; define-values, describe, instruct, select
- `rules/protocol.md`: 9; decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait; change, define-values, instruct, report, store, template, validate, write
- `scripts/brain.ts`: 3; decision-record, effort, idea, other, plan-row, research-record, spec, wave; describe, other, report, select
- `scripts/evals/__tests__/adr-is-dec.test.ts`: 6; decision-record, map-row, research-record; fixture, template, test, validate, write
- `scripts/evals/__tests__/build-clean-context.test.ts`: 8; plan-row, spec, wave; change, derive, fixture, instruct, parse, select, test, validate, write
- `scripts/evals/__tests__/build-parallel.test.ts`: 19; checkpoint, other, plan-row, spec, user-wait, wave; change, define-values, derive, describe, fixture, instruct, other, parse, report, select, test, validate, write
- `scripts/evals/__tests__/fixtures/build-parallel.trace.jsonl`: 11; checkpoint, plan-row, spec, user-wait, wave; change, derive, fixture, instruct, parse, report, select, template, validate, write
- `scripts/evals/__tests__/fixtures/interview-resume.reply-0.md`: 4; idea, map-row, research-record, user-wait; derive, fixture, report, select
- `scripts/evals/__tests__/fixtures/interview-resume.reply-1.md`: 3; idea, map-row, research-record, user-wait; fixture, report, select
- `scripts/evals/__tests__/fixtures/migrate-08.trace.jsonl`: 2; decision-record, idea, plan-row, spec, user-wait; change, fixture, validate, write
- `scripts/evals/__tests__/fresh-repo-resume.test.ts`: 7; effort, idea, map-row, other, spec, user-wait; describe, fixture, report, test
- `scripts/evals/__tests__/fresh-repo.test.ts`: 2; effort, other; fixture, test
- `scripts/evals/__tests__/interview-cases.ts.test.ts`: 2; decision-record, idea, map-row, research-record; fixture, test, validate
- `scripts/evals/__tests__/interview-driver.ts.test.ts`: 3; decision-record, idea, other, research-record, user-wait; other, store, test
- `scripts/evals/__tests__/interview-parallel-research.test.ts`: 14; decision-record, idea, map-row, research-record, user-wait, wave; change, define-values, derive, describe, fixture, other, parse, report, select, store, test, validate, write
- `scripts/evals/__tests__/interview-resume.test.ts`: 11; decision-record, idea, map-row, research-record, user-wait; define-values, derive, describe, fixture, other, parse, report, select, test, validate
- `scripts/evals/__tests__/keystone-policy.ts.test.ts`: 5; decision-record, effort, idea, map-row, other, research-record, user-wait; fixture, other, select, template, test
- `scripts/evals/__tests__/migrate-08.test.ts`: 6; decision-record, idea, other, plan-row, research-record, spec; change, describe, fixture, other, report, test, validate
- `scripts/evals/__tests__/no-overload.test.ts`: 4; effort, other; define-values, derive, describe, parse, select, test
- `scripts/evals/__tests__/plan-three-questions.test.ts`: 9; checkpoint, other, plan-row, spec, user-wait, wave; derive, fixture, report, template, test, validate, write
- `scripts/evals/__tests__/spec-underspecified.test.ts`: 5; idea, map-row, user-wait; fixture, report, template, test, validate, write
- `scripts/evals/__tests__/suite.test.ts`: 1; other, user-wait, wave; test
- `scripts/evals/interview-cases.ts`: 11; decision-record, idea, map-row, other, research-record, user-wait; define-values, fixture, template, test, write
- `scripts/evals/interview-driver.ts`: 5; decision-record, idea, other, research-record, user-wait; instruct, other, select, store, test, validate
- `scripts/evals/interview-evaluation.ts`: 3; decision-record, idea, research-record, user-wait; fixture, other, report, store, test
- `scripts/evals/keystone-cases.ts`: 9; decision-record, effort, idea, map-row, user-wait, wave; fixture, template, test, write
- `scripts/evals/prepare-keystone.ts`: 1; idea, map-row; fixture, write
- `scripts/hooks/__tests__/session-start.test.ts`: 10; decision-record, effort, idea, map-row, other, plan-row, spec, user-wait, wave; fixture, parse, report, test, validate
- `scripts/hooks/claude-code.json`: 1; other; other, report
- `scripts/hooks/session-start.ts`: 5; effort, other, user-wait; define-values, derive, instruct, parse, report, validate
- `scripts/lib/__tests__/table.test.ts`: 2; map-row, plan-row; parse, test
- `scripts/lib/table.ts`: 1; checkpoint, map-row, plan-row; parse
- `scripts/lifecycle/__tests__/names.test.ts`: 7; checkpoint, other, phase, plan-row, spec, wave; fixture, test, validate
- `scripts/lifecycle/__tests__/parallel-build.test.ts`: 8; checkpoint, other, plan-row, wave; describe, record-instance, test, validate
- `scripts/lifecycle/__tests__/router.test.ts`: 2; decision-record, effort, other; fixture, parse, test
- `scripts/lifecycle/__tests__/spec-folder.test.ts`: 1; effort, spec; test
- `scripts/lifecycle/__tests__/using-brain.test.ts`: 9; decision-record, effort, idea, map-row, other, spec, user-wait; test
- `scripts/lifecycle/names.ts`: 3; checkpoint, decision-record, effort, idea, map-row, other, phase, plan-row, research-record, spec; define-values, derive, parse, select, validate
- `scripts/lifecycle/router.ts`: 1; other; parse
- `scripts/plain-talk/__tests__/render.test.ts`: 1; effort; test
- `scripts/setup/__tests__/fixtures/resume/AGENTS.md`: 8; effort, other, plan-row, spec, user-wait; change, describe, fixture, instruct, record-instance, report, store
- `scripts/setup/__tests__/migrate.test.ts`: 10; decision-record, idea, other, plan-row, research-record, spec, user-wait; derive, fixture, parse, report, store, test, validate, write
- `scripts/setup/__tests__/overlap.test.ts`: 2; effort, other, plan-row, spec; fixture, instruct, test
- `scripts/setup/__tests__/write.test.ts`: 7; decision-record, effort, map-row, other, spec, user-wait, wave; fixture, test
- `scripts/setup/__tests__/write.ts.test.ts`: 6; effort, other, user-wait, wave; fixture, test
- `scripts/setup/migrate.ts`: 23; decision-record, idea, other, plan-row, research-record, spec, user-wait; change, define-values, derive, describe, other, parse, report, select, template, validate, write
- `scripts/setup/workspace-config.ts`: 1; other, wave; store, template, write
- `scripts/setup/write.ts`: 2; effort, other, wave; change, describe, write
- `scripts/workspace/__tests__/check.test.ts`: 19; checkpoint, decision-record, effort, idea, map-row, phase, plan-row, research-record, spec, wave; define-values, fixture, test, validate
- `scripts/workspace/__tests__/check.ts.test.ts`: 7; decision-record, effort, idea, map-row, research-record, spec, user-wait; fixture, report, test, validate, write
- `scripts/workspace/__tests__/fixtures.test.ts`: 3; decision-record, effort, idea, other, plan-row, research-record, spec; describe, fixture, test, validate
- `scripts/workspace/__tests__/fixtures/idea-mid-define/README.md`: 4; decision-record, effort, idea, map-row, research-record, spec, user-wait; derive, describe, fixture, report
- `scripts/workspace/__tests__/fixtures/idea-mid-define/docs/STATUS.md`: 1; effort, idea, map-row, user-wait; fixture, record-instance, report
- `scripts/workspace/__tests__/fixtures/idea-mid-define/docs/agents/workspace.md`: 4; decision-record, effort, idea, map-row, plan-row, research-record, spec, user-wait; derive, describe, fixture, instruct, select
- `scripts/workspace/__tests__/fixtures/idea-mid-define/docs/decisions/DEC-001-phones-and-laptops.md`: 1; decision-record; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/idea-mid-define/docs/decisions/DEC-002-hosted-sync-service.md`: 1; decision-record, research-record; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/idea-mid-define/docs/ideas/IDEA-001-sync-notes.md`: 4; idea, map-row, user-wait; fixture, instruct, record-instance, store, template
- `scripts/workspace/__tests__/fixtures/idea-mid-define/docs/research/RES-001-store-change-feed.md`: 2; map-row, research-record; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/idea-mid-define/docs/research/RES-002-sync-test-account.md`: 1; research-record; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/layout-0.8/README.md`: 6; checkpoint, decision-record, effort, idea, phase, plan-row, research-record, spec, user-wait; change, describe, fixture, report, test, validate
- `scripts/workspace/__tests__/fixtures/layout-0.8/docs/agents/domain.md`: 1; decision-record; fixture, instruct
- `scripts/workspace/__tests__/fixtures/layout-0.8/docs/agents/issue-tracker.md`: 1; map-row, other; change, define-values, derive, fixture, instruct
- `scripts/workspace/__tests__/fixtures/layout-0.8/docs/decisions/DEC-001-bill-by-calendar-month.md`: 1; decision-record; fixture, record-instance
- `scripts/workspace/__tests__/fixtures/layout-0.8/docs/intent/billing.md`: 1; idea, user-wait; fixture, record-instance
- `scripts/workspace/__tests__/fixtures/layout-0.8/docs/intent/usage-alerts.md`: 1; idea, user-wait; fixture, record-instance
- `scripts/workspace/__tests__/fixtures/layout-0.8/docs/research/RES-001-payment-provider-retries.md`: 1; research-record; fixture, record-instance
- `scripts/workspace/__tests__/fixtures/layout-0.8/spec/CAPABILITY-MAP.md`: 1; other, spec; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/layout-0.8/spec/SPEC-accounts.md`: 1; spec; fixture, record-instance
- `scripts/workspace/__tests__/fixtures/layout-0.8/spec/SPEC-billing.md`: 1; spec; fixture, record-instance
- `scripts/workspace/__tests__/fixtures/layout-0.8/tasks/plan.md`: 2; checkpoint, phase, plan-row, spec, user-wait; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/layout-0.8/tasks/todo.md`: 3; checkpoint, plan-row, user-wait; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/no-active-work/README.md`: 4; checkpoint, decision-record, effort, idea, map-row, plan-row, research-record, spec, user-wait, wave; derive, describe, fixture, report, validate
- `scripts/workspace/__tests__/fixtures/no-active-work/docs/STATUS.md`: 1; effort; fixture, record-instance, report
- `scripts/workspace/__tests__/fixtures/no-active-work/docs/agents/workspace.md`: 4; decision-record, effort, idea, map-row, plan-row, research-record, spec, user-wait; derive, describe, fixture, instruct, select
- `scripts/workspace/__tests__/fixtures/no-active-work/docs/decisions/DEC-001-system-theme-only.md`: 2; decision-record, research-record; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/no-active-work/docs/decisions/DEC-002-theme-switch.md`: 1; decision-record, research-record; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/no-active-work/docs/ideas/IDEA-001-dark-mode.md`: 3; idea, map-row, user-wait; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/no-active-work/docs/ideas/IDEA-002-offline-mode.md`: 4; effort, idea, map-row, user-wait; fixture, record-instance, store, template
- `scripts/workspace/__tests__/fixtures/no-active-work/docs/research/RES-001-system-theme-css.md`: 2; map-row, research-record; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/no-active-work/docs/specs/SPEC-001-theme-tokens/spec.md`: 2; decision-record, idea, research-record, spec, user-wait; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/no-active-work/docs/specs/SPEC-001-theme-tokens/tasks/plan.md`: 4; checkpoint, plan-row, spec, user-wait, wave; derive, describe, fixture, record-instance, store, template
- `scripts/workspace/__tests__/fixtures/no-active-work/docs/specs/SPEC-001-theme-tokens/tasks/todo.md`: 3; checkpoint, plan-row, user-wait; describe, fixture, record-instance, store, template
- `scripts/workspace/__tests__/fixtures/no-active-work/docs/specs/SPEC-002-theme-switch/spec.md`: 2; decision-record, idea, spec, user-wait; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/no-active-work/docs/specs/SPEC-002-theme-switch/tasks/plan.md`: 4; checkpoint, plan-row, spec, user-wait, wave; derive, describe, fixture, record-instance, store, template
- `scripts/workspace/__tests__/fixtures/no-active-work/docs/specs/SPEC-002-theme-switch/tasks/todo.md`: 4; checkpoint, plan-row, user-wait; describe, fixture, record-instance, store, template
- `scripts/workspace/__tests__/fixtures/plan-shapes/README.md`: 5; checkpoint, effort, idea, phase, plan-row, spec, wave; define-values, derive, describe, fixture, report, validate
- `scripts/workspace/__tests__/fixtures/plan-shapes/docs/agents/workspace.md`: 5; decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait, wave; derive, describe, fixture, instruct, select, store
- `scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-001-linear/spec.md`: 2; plan-row, spec; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-001-linear/tasks/plan.md`: 5; checkpoint, phase, plan-row, spec, user-wait, wave; derive, describe, fixture, record-instance, store, template
- `scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-001-linear/tasks/todo.md`: 3; checkpoint, plan-row, user-wait; describe, fixture, record-instance, store, template
- `scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-002-wide/spec.md`: 2; plan-row, spec, wave; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-002-wide/tasks/plan.md`: 5; other, phase, plan-row, spec, user-wait, wave; derive, describe, fixture, record-instance, store, template
- `scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-002-wide/tasks/todo.md`: 2; plan-row; describe, fixture, record-instance, store, template
- `scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-003-checkpoints/spec.md`: 2; checkpoint, phase, spec; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-003-checkpoints/tasks/plan.md`: 5; checkpoint, phase, plan-row, spec, user-wait, wave; derive, describe, fixture, record-instance, store, template
- `scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-003-checkpoints/tasks/todo.md`: 3; checkpoint, plan-row, user-wait; describe, fixture, record-instance, store, template
- `scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-004-cycle/spec.md`: 2; plan-row, spec; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-004-cycle/tasks/plan.md`: 4; plan-row, spec, user-wait; describe, fixture, record-instance, store, template
- `scripts/workspace/__tests__/fixtures/plan-shapes/docs/specs/SPEC-004-cycle/tasks/todo.md`: 2; plan-row; describe, fixture, record-instance, store, template
- `scripts/workspace/__tests__/fixtures/spec-mid-build/README.md`: 5; checkpoint, decision-record, effort, idea, map-row, phase, plan-row, research-record, spec, user-wait, wave; derive, describe, fixture, report, validate
- `scripts/workspace/__tests__/fixtures/spec-mid-build/docs/agents/workspace.md`: 4; decision-record, effort, idea, map-row, plan-row, research-record, spec, user-wait; derive, describe, fixture, instruct, select
- `scripts/workspace/__tests__/fixtures/spec-mid-build/docs/decisions/DEC-001-export-fields.md`: 1; decision-record; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/spec-mid-build/docs/decisions/DEC-002-csv-with-bom.md`: 1; decision-record, research-record; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/spec-mid-build/docs/decisions/DEC-003-export-button-in-header.md`: 1; decision-record, plan-row; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/spec-mid-build/docs/ideas/IDEA-001-invoice-export.md`: 3; idea, map-row, user-wait; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/spec-mid-build/docs/research/RES-001-spreadsheet-apps.md`: 1; research-record; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/spec-mid-build/docs/specs/SPEC-001-invoice-csv-export/spec.md`: 2; decision-record, idea, research-record, spec, user-wait; fixture, record-instance, store
- `scripts/workspace/__tests__/fixtures/spec-mid-build/docs/specs/SPEC-001-invoice-csv-export/tasks/plan.md`: 5; checkpoint, phase, plan-row, spec, user-wait, wave; derive, describe, fixture, record-instance, store, template
- `scripts/workspace/__tests__/fixtures/spec-mid-build/docs/specs/SPEC-001-invoice-csv-export/tasks/todo.md`: 4; checkpoint, plan-row, user-wait; describe, fixture, record-instance, store, template
- `scripts/workspace/__tests__/new-doc.test.ts`: 3; decision-record, idea, plan-row, research-record, spec; fixture, template, test, validate
- `scripts/workspace/__tests__/plan.test.ts`: 14; checkpoint, effort, idea, other, phase, plan-row, spec, wave; change, derive, fixture, report, select, test, validate
- `scripts/workspace/__tests__/schema.test.ts`: 12; decision-record, idea, map-row, plan-row, research-record, spec, user-wait; define-values, fixture, template, test, validate
- `scripts/workspace/__tests__/schema.ts.test.ts`: 2; research-record; fixture, test, validate
- `scripts/workspace/__tests__/status.test.ts`: 11; checkpoint, decision-record, effort, idea, map-row, other, plan-row, spec, user-wait; change, derive, fixture, report, select, test, validate
- `scripts/workspace/__tests__/status.ts.test.ts`: 2; effort, map-row, research-record, user-wait; derive, fixture, report, test
- `scripts/workspace/check.ts`: 11; checkpoint, decision-record, idea, map-row, other, phase, plan-row, research-record, spec, user-wait, wave; define-values, derive, describe, parse, report, select, validate
- `scripts/workspace/config.ts`: 4; other, wave; define-values, derive, describe, parse, validate
- `scripts/workspace/effort.ts`: 4; effort, idea, plan-row, spec, user-wait; define-values, derive, describe, parse, select
- `scripts/workspace/graph.ts`: 6; checkpoint, map-row, plan-row, wave; define-values, derive, describe, validate
- `scripts/workspace/map.ts`: 6; checkpoint, map-row, plan-row; define-values, derive, describe, parse, select, validate
- `scripts/workspace/new-doc.ts`: 1; decision-record, idea, plan-row, research-record, spec; template, write
- `scripts/workspace/old-layout.ts`: 4; decision-record, idea, other, plan-row, research-record, spec; define-values, describe, parse, report, select
- `scripts/workspace/plan.ts`: 11; checkpoint, effort, idea, map-row, phase, plan-row, spec, user-wait, wave; define-values, derive, describe, parse, report, select, validate, write
- `scripts/workspace/schema.ts`: 14; checkpoint, decision-record, idea, map-row, other, plan-row, research-record, spec, user-wait; define-values, describe, parse, validate
- `scripts/workspace/status.ts`: 13; effort, idea, map-row, other, plan-row, research-record, spec, user-wait; define-values, derive, describe, parse, report, select
- `scripts/workspace/templates/DEC.md`: 3; decision-record, map-row, plan-row, research-record, user-wait; define-values, template
- `scripts/workspace/templates/IDEA.md`: 5; idea, map-row, research-record, user-wait; define-values, instruct, template
- `scripts/workspace/templates/RES.md`: 5; map-row, plan-row, research-record, user-wait; define-values, instruct, template
- `scripts/workspace/templates/plan.md`: 5; checkpoint, decision-record, phase, plan-row, spec, user-wait, wave; describe, instruct, template
- `scripts/workspace/templates/spec.md`: 2; decision-record, idea, research-record, spec, user-wait; template
- `scripts/workspace/templates/todo.md`: 3; checkpoint, plan-row; describe, template
- `skills/ask-user-question/SKILL.md`: 21; decision-record, other, user-wait; define-values, derive, describe, instruct, store, validate, write
- `skills/ask-user-question/evals/README.md`: 2; user-wait; describe, test
- `skills/ask-user-question/evals/evals.json`: 8; other, spec, user-wait; test
- `skills/ask-user-question/evals/files/overflow-fixture.md`: 1; other, spec, user-wait; fixture
- `skills/ask-user-question/evals/files/qualified-selection-reply.md`: 1; user-wait; fixture
- `skills/ask-user-question/evals/files/selection-fixture.md`: 1; user-wait; fixture
- `skills/ask-user-question/evals/files/text-approval.md`: 1; user-wait; fixture
- `skills/ask-user-question/evals/files/unanswered-results.md`: 4; user-wait; fixture
- `skills/ask-user-question/references/claude-code.md`: 4; user-wait; define-values, describe, instruct, parse
- `skills/ask-user-question/references/codex.md`: 4; user-wait; define-values, describe, instruct, parse
- `skills/ask-user-question/references/gemini-cli.md`: 3; user-wait; describe, instruct, parse
- `skills/ask-user-question/references/selection.md`: 5; other, user-wait; define-values, instruct, parse, validate, write
- `skills/browser-testing-with-devtools/SKILL.md`: 2; other, user-wait; instruct, template
- `skills/code-review-and-quality/SKILL.md`: 6; effort, other, plan-row, spec, user-wait; define-values, derive, instruct, report, select, template, validate
- `skills/codebase-design/DESIGN-IT-TWICE.md`: 1; other, user-wait; instruct
- `skills/constraint-driven-development/SKILL.md`: 3; other, user-wait; describe, instruct, template
- `skills/context-engineering/SKILL.md`: 5; other, plan-row, spec, user-wait; derive, instruct, report, store, template
- `skills/debugging-and-error-recovery/SKILL.md`: 6; other, user-wait; instruct
- `skills/debugging-and-error-recovery/scripts/hitl-loop.template.sh`: 1; user-wait; other, template
- `skills/deprecation-and-migration/SKILL.md`: 1; other; describe, instruct
- `skills/documentation-and-adrs/SKILL.md`: 2; decision-record; change, define-values, describe, instruct, store, template
- `skills/domain-modeling/DEC-FORMAT.md`: 8; decision-record, idea, map-row, research-record, spec, user-wait; change, define-values, describe, instruct, template, validate
- `skills/domain-modeling/GLOSSARY-FORMAT.md`: 1; user-wait; instruct
- `skills/domain-modeling/SKILL.md`: 2; decision-record, user-wait; instruct, validate, write
- `skills/doubt-driven-development/SKILL.md`: 5; other, user-wait; define-values, describe, instruct
- `skills/git-workflow-and-versioning/SKILL.md`: 3; other, user-wait, wave; describe, instruct, report, template
- `skills/idea-refine/SKILL.md`: 17; decision-record, idea, map-row, other, research-record, user-wait; change, define-values, describe, instruct, parse, report, select, store, template, validate, write
- `skills/idea-refine/examples.md`: 16; decision-record, idea, map-row, other, research-record, user-wait; change, define-values, derive, describe, fixture, instruct, select, store, validate, write
- `skills/incremental-implementation/SKILL.md`: 13; checkpoint, effort, plan-row, spec, user-wait, wave; change, derive, describe, instruct, report, select, validate, write
- `skills/interview-me/CONVERSATION.md`: 12; idea, map-row, research-record, spec, user-wait; change, define-values, derive, instruct, report, select, store, validate, write
- `skills/interview-me/RESEARCH.md`: 12; map-row, research-record; change, define-values, instruct, report, store, template, validate, write
- `skills/interview-me/SKILL.md`: 24; decision-record, effort, idea, map-row, other, research-record, spec, user-wait, wave; change, define-values, derive, describe, instruct, parse, report, select, store, template, validate, write
- `skills/planning-and-task-breakdown/SKILL.md`: 19; checkpoint, decision-record, effort, phase, plan-row, spec, user-wait, wave; change, define-values, derive, describe, fixture, instruct, parse, report, select, store, template, validate, write
- `skills/prototype/LOGIC.md`: 2; decision-record, map-row, user-wait; instruct
- `skills/prototype/SKILL.md`: 2; decision-record, map-row, other, user-wait; instruct, write
- `skills/prototype/UI.md`: 2; decision-record, map-row, user-wait; instruct
- `skills/setup-brain/MIGRATION.md`: 6; decision-record, idea, map-row, other, plan-row, research-record, spec, user-wait; derive, describe, instruct, report, select, store, validate, write
- `skills/setup-brain/SKILL.md`: 7; decision-record, effort, idea, other, plan-row, research-record, user-wait; change, define-values, derive, instruct, report, validate, write
- `skills/setup-brain/domain.md`: 2; decision-record; describe, instruct, template
- `skills/setup-brain/workspace.md`: 14; decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait, wave; define-values, derive, describe, instruct, report, select, store, template, validate
- `skills/source-driven-development/SKILL.md`: 1; user-wait; instruct
- `skills/spec-driven-development/SKILL.md`: 17; checkpoint, decision-record, effort, idea, map-row, other, phase, plan-row, research-record, spec, user-wait, wave; change, define-values, derive, describe, instruct, select, template, validate, write
- `skills/test-driven-development/SKILL.md`: 1; effort, spec, user-wait; instruct, validate
- `skills/using-brain/SKILL.md`: 15; decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait; define-values, describe, instruct, report, select, write
- `specs/SPEC-001-evals/spec.md`: 15; checkpoint, decision-record, effort, idea, map-row, other, plan-row, spec, user-wait, wave; describe, fixture, record-instance, store, test
- `specs/SPEC-001-evals/tasks/plan.md`: 5; checkpoint, effort, plan-row, spec, user-wait, wave; record-instance, store
- `specs/SPEC-001-evals/tasks/todo.md`: 2; plan-row, spec; record-instance, store
- `specs/SPEC-002-host-manifests/spec.md`: 3; spec, user-wait; record-instance, store
- `specs/SPEC-002-host-manifests/tasks/plan.md`: 5; checkpoint, effort, plan-row, spec, user-wait, wave; record-instance, store
- `specs/SPEC-002-host-manifests/tasks/todo.md`: 2; plan-row, spec; record-instance, store
- `specs/SPEC-003-lifecycle/spec.md`: 8; decision-record, effort, idea, map-row, other, plan-row, research-record, spec, user-wait; define-values, describe, instruct, record-instance, store
- `specs/SPEC-003-lifecycle/tasks/plan.md`: 5; checkpoint, other, plan-row, spec, wave; record-instance, store
- `specs/SPEC-003-lifecycle/tasks/todo.md`: 5; map-row, other, plan-row, spec, user-wait; describe, record-instance, store
- `specs/SPEC-004-plain-talk/spec.md`: 4; effort, other, spec, user-wait; describe, record-instance, store, test
- `specs/SPEC-004-plain-talk/tasks/plan.md`: 4; checkpoint, plan-row, spec, user-wait, wave; record-instance, store
- `specs/SPEC-004-plain-talk/tasks/todo.md`: 2; plan-row, spec; record-instance, store
- `specs/SPEC-005-question/spec.md`: 5; decision-record, spec, user-wait; define-values, describe, record-instance, store, test
- `specs/SPEC-005-question/tasks/plan.md`: 4; checkpoint, plan-row, research-record, spec, wave; record-instance, store
- `specs/SPEC-005-question/tasks/todo.md`: 3; plan-row, spec, user-wait; describe, record-instance, store
- `specs/SPEC-006-setup/spec.md`: 10; decision-record, effort, idea, other, plan-row, spec, user-wait; describe, instruct, record-instance, store, validate, write
- `specs/SPEC-006-setup/tasks/plan.md`: 4; checkpoint, plan-row, spec, user-wait, wave; record-instance, store
- `specs/SPEC-006-setup/tasks/todo.md`: 2; plan-row, spec; record-instance, store
- `specs/SPEC-007-source-cache/spec.md`: 6; decision-record, effort, research-record, spec; describe, record-instance, store
- `specs/SPEC-008-upstream-sync/spec.md`: 4; decision-record, spec, user-wait; record-instance, store
- `specs/SPEC-008-upstream-sync/tasks/plan.md`: 4; checkpoint, plan-row, spec, wave; record-instance, store
- `specs/SPEC-008-upstream-sync/tasks/todo.md`: 2; phase, plan-row, spec; record-instance, store
- `specs/SPEC-009-workspace/spec.md`: 40; checkpoint, decision-record, effort, idea, map-row, other, phase, plan-row, research-record, spec, user-wait, wave; change, define-values, derive, describe, fixture, instruct, parse, record-instance, report, select, store, template, test, validate, write
- `specs/SPEC-009-workspace/tasks/plan.md`: 11; checkpoint, other, phase, plan-row, spec, user-wait, wave; change, derive, describe, instruct, record-instance, report, store
- `specs/SPEC-009-workspace/tasks/todo.md`: 35; checkpoint, decision-record, effort, idea, map-row, other, phase, plan-row, research-record, spec, user-wait, wave; change, define-values, derive, describe, fixture, instruct, parse, record-instance, report, store, template, test, validate, write
- `tasks/done/context-scope/plan.md`: 4; checkpoint, effort, plan-row, spec, user-wait, wave; change, describe, record-instance, store
- `tasks/done/context-scope/todo.md`: 1; effort, plan-row; record-instance, store

### Readers' and sweeps' notes
Notes the agents returned with their counts, kept as written. They are leads for the topic rows, not checked findings.

- S01: 8 files have no site and carry a none_reason: .changeset/config.json, .claude/commands/code-simplify.md, .claude/commands/webperf.md, .gemini/settings.json, .gitignore, .mailmap, CLAUDE.md, LICENSE.
- S01: CLAUDE.md is one line, the import @AGENTS.md. It has no site of its own; the AGENTS.md sites load through it.
- S01: Finding for the design decision: .github/workflows/ci.yml runs the steps one by one and does not run workspace:check (brain check on the repo's own records). Only bun run check does, and only .github/workflows/release.yml calls it. I read package.json (outside this slice) to confirm the script names.
- S01: Finding: .claude/commands/build.md line 21 says 'pending' for an open row, and line 61 says a running task keeps its row open, so a plan row has no in-progress value there.
- S01: Finding: GLOSSARY.md defines the idea status values (define, specced, done, parked) and frontier, phase and checkpoint, but has no entry for wave, blocked by, result, or any decision-record or research-record status value.
- S01: Finding: AGENTS.md line 30 names tasks/done/context-scope/, a folder that marks a finished plan by its location, outside the row statuses.
- S01: Finding: CHANGELOG.md lines 59 and 65 describe docs/STATUS.md as live state (0.10.0); line 17 retires it (0.13.0). Both are recorded as sites.
- S01: GEMINI.md is generated from plain-talk/PLAIN-TALK.md and protocol/PROTOCOL.md. Its sites repeat those sources, which belong to other slices.
- S03: One file has no site: docs/agents/capabilities.md (toolchain, library skills and servers only).
- S03: DEC-001 and DEC-004 have no status field in their frontmatter, only migrated: 0.8. A reader of decision status must handle that.
- S03: Supersede and replace links between decision records exist only in prose on the newer record (DEC-006, DEC-038, DEC-040, DEC-041, DEC-042, DEC-048, DEC-049). DEC-042 and DEC-049 replace part of an older record with no status change on it.
- S03: Waits between efforts exist only in prose: IDEA-008 line 26 (row 02 waits on IDEA-007 row 01, while its Blocked by cell is empty), IDEA-014 line 39 (IDEA-016 waits on IDEA-014), DEC-031 and DEC-050 (IDEA-015 waits on IDEA-016), and the idea-number order note in IDEA-005 to IDEA-012.
- S03: IDEA-004 is parked with an empty map table (header only) and no result key; its 17 rows are recorded as moved in the Out of scope list. IDEA-010, IDEA-011 and IDEA-012 are parked while their rows stay open.
- S03: docs/agents/history/STATUS.md is an old hand-written status note that DEC-014 removed as a concept; IDEA-001 rows 15 and 17 still name its parser and hook, so they may be stale.
- S05: RES-001 to RES-004 have no frontmatter status field. Each carries only id, migrated: 0.8 and date, plus a legacy prose line in the body: 'Status: evidence gathered, decision open'. Each has one site for the frontmatter and one for the prose line; none has a table of map or plan rows.
- S05: docs/intent/workspace-and-stateful-interview.md (1022 lines, 89 sites) is the design source for most status and wait rules. It holds superseded values: the idea status list at line 105 has three values and line 751 adds 'done'; lines 27 and 496 say 'phase' where line 753 later fixes the word 'stage'.
- S05: Some sites use a multi-range 'lines' string (for example '733, 735-736') where one handling spans non-adjacent table rows.
- S05: Triage issue states in RES-003 and the comparison verdict words in RES-002, RES-003 and RES-004 (among them 'partial') are recorded as borderline, because they are not the status of a Brain item.
- S06: docs/research/RES-005-ask-user-question-artifacts.md has no frontmatter status field. It carries only 'migrated: 0.8' and a prose line 'Status: read-only analysis' at line 8. Both are recorded as sites.
- S06: The three other RES records have status: resolved but each keeps UNVERIFIED claims and pending questions in its Follow-ups section. These are recorded as research-record outcome sites.
- S06: The per-finding 'Source: ..., checked <date>' citations are recorded once per file as borderline, because they are evidence citations and not a sources list between Brain items. A reviewer can change this call.
- S09: 64 files have one or more sites; 86 files have none_reason only (case.yaml configs, skill-fired graders, plain-talk and wait-what cases, question-format graders).
- S09: The research-record fixtures in evals/lifecycle/interview-resume/scaffold.sh (RES-001 to RES-003) have status: resolved but no outcome field, no Answer section and no Next action section. They are in the form from before 0.13.0. A change to research status or outcome must update them.
- S09: evals/setup/migrate-08/scaffold.sh copies scripts/workspace/__tests__/fixtures/layout-0.8 at run time. The layout-1 status and wait forms in that fixture (checkboxes, Dependencies lines, prose Status lines) are not in this slice; another slice must cover that fixture.
- S09: Several graders name tests that hold the same status rules: scripts/evals/__tests__/adr-is-dec.test.ts, interview-resume.test.ts, no-overload.test.ts and migrate-08.test.ts. They are not in this slice.
- S09: The 5 borderline sites are: the host command queue in RES-077 (lines 34-43), the three review-one-verdict files (parallel review axes and the Approve / Request changes / Reject verdict), and the pre-given consent in evals/setup/migrate-08/prompt.md.
- S10: 14 files have no site and carry a none_reason: 3 licenses, 2 lint/format configs, 5 wrapper templates with only a {{body}} placeholder, hooks/SIMPLIFY-IGNORE.md, hooks/sdd-cache-post.sh, hooks/session-start.sh, hooks/session-start-test.sh.
- S10: protocol/AGENTS-block.md is the rendered copy of protocol/PROTOCOL.md (same 13 sites, line numbers +3). plain-talk/AGENTS-block.md and output-styles/talk-plain.md are rendered copies of plain-talk/PLAIN-TALK.md. A change belongs in the source file, then the renderer.
- S10: Judgement calls recorded as non-borderline, for a reviewer to confirm: the plain-talk rule for the wording of a user question (3 files), the protocol line 'stop the work that depends on a server that does not answer' (2 files), the acceptance-criteria boxes in references/brain/agent-brief.md, the persona fan-out and lifecycle patterns in references/orchestration-patterns.md, and the description line in plain-talk/templates/protocol-rule.md.
- S10: package.json: `lifecycle:check` is recorded as borderline. A look at scripts/lifecycle/check-refs.ts (outside this slice, orientation only) shows it checks skill-name references, not a lifecycle stage.
- S10: hooks/session-start.sh points at skills/using-agent-skills/SKILL.md, which does not exist in this repo; the hook is vendored and not wired. This has no effect on the inventory.
- S12: Note for the reviewer: both trace fixtures hold only tool calls (Bash, Agent). The edits that tick task boxes or set a plan row to done are not in build-parallel.trace.jsonl; only the `brain check` call and the state commit 'SPEC-001: close row 0N' show the status change.
- S12: Note for the reviewer: migrate-08.trace.jsonl holds no status literal. I recorded the migrate command and the `brain check` call as sites because the migration rewrites records that carry status; a reviewer can downgrade them to borderline.
- S13: Two files have no site and carry a none_reason: scripts/evals/__tests__/second-run.test.ts and scripts/evals/__tests__/skill-not-skipped.test.ts.
- S13: Two test files each hold their own copy of the frontier rule and of the Map table parser (interview-parallel-research.test.ts lines 192-217, interview-resume.test.ts lines 138-163). They do not import the real rule, so a change to the rule must be repeated there.
- S13: no-overload.test.ts lines 25-26 hold a hard-coded copy of the six lifecycle stage names.
- S13: migrate-08.test.ts lines 402-414 show that the migration modifies one DEC and one RES record, but the test does not say which fields change. A reader must open scripts/setup/write.ts (another slice) to see whether the migrate rewrites a status.
- S13: interview-cases.ts.test.ts line 20 leaves case id 3 out of the workspace-checker test with no stated reason. The fixture source scripts/evals/interview-cases.ts is in another slice.
- S13: Three sites are low-confidence inclusions that name a status surface but handle no status value: interview-driver.ts.test.ts lines 27-40 and 62-107 (the eval host's command allowlist and record write policy) and keystone-policy.ts.test.ts lines 98-106 and 118-152 (the brain:status skill name and the snapshot selection of scripts/workspace/status.ts).
- S14: 8 files have no site and carry a none_reason: scripts/evals/keystone-snapshot.ts, scripts/lib/__tests__/files.test.ts, scripts/lib/files.ts, scripts/lib/git.ts, scripts/lifecycle/__tests__/agents.test.ts, scripts/lifecycle/__tests__/check-refs.test.ts, scripts/lifecycle/__tests__/check-refs.ts.test.ts, scripts/lifecycle/__tests__/hooks.test.ts.
- S14: Finding for the researcher: the idea file format and its starting status are hardcoded by hand in two eval scaffolds (scripts/evals/interview-cases.ts lines 232-281 and scripts/evals/keystone-cases.ts lines 146-181), not built through `brain new-doc`. They will not follow a template change.
- S14: Finding for the researcher: scripts/evals/interview-cases.ts lines 38-48 gives a research record the values `resolved` and `in-progress` in its frontmatter status. Check these against the allowed research record values.
- S14: Finding for the researcher: scripts/evals/interview-driver.ts lines 174-212 and 250-292 allow only `brain check`, `brain status`, `brain new-doc IDEA|DEC|RES` and writes to docs/ideas, docs/decisions, docs/research and GLOSSARY.md. A new status command or a new status file location is denied in these evals until the allow-lists change.
- S14: Finding for the researcher: scripts/hooks/session-start.ts lines 18-38 reads only the `report` list of strings from `brain status --json`. New status or wait data reaches a session only through that list, under the 10,000-byte cap.
- S17: Judgement calls a reviewer may want to check: (1) scripts/setup/write.ts and scripts/setup/workspace-config.ts: the repo-level 'migrated' / layout 2 state and the setup-time waits on the user's answer are recorded as borderline, while the max_parallel handling and the retired docs/STATUS.md note ('rows and records now hold current state') are recorded as real sites. (2) The sync files that report vendored-file drift (changed, missing, unlisted) have no site, only a none_reason, because they use neither 'status' nor 'blocked'. (3) In scripts/workspace/__tests__/check.test.ts the tests for DEC `kind` values and for the RES finding line format (lines 220-235, 436-451) are not recorded, because kind and the finding format are not status or waits.
- S18: Two files have no site, each with a none_reason: scripts/workspace/__tests__/fixtures/layout-0.8/CONTEXT.md (glossary) and scripts/workspace/__tests__/fixtures/layout-0.8/docs/decisions/0001-keep-the-ledger-in-postgres.md (0.8 ADR with no frontmatter and no status line).
- S18: Note for the design: scripts/workspace/__tests__/status.test.ts lines 249-306 use an idea status 'done' with a frontmatter 'result: DEC-002' link, and status.ts.test.ts lines 29-63 and schema.ts.test.ts lines 20-33 use a research 'outcome' field (answered, partial, blocked) with a 'blocked:' report label and a retry condition in Follow-ups. No fixture tree in this slice holds a record with these values; only the tests build them inline.
- S18: Note for the design: the layout-0.8 fixture carries status in old free forms that a reader of every format must handle: 'Status: approved on <date>' in spec prose, 'Status: evidence gathered' in a research record, 'Decided <date> by <name>' and 'Confirmed by' / 'Draft, not yet confirmed' prose lines, ticked boxes as the only task status, a 'Dependencies:' field per task block, and a 'Depends on' column plus 'Build order' line in the capability map.
- S18: The four fixture copies of docs/agents/workspace.md repeat the same active-effort and frontier rules; each copy has its own sites. The plan-shapes copy differs: it adds max_parallel and a newer 'brain <cmd>' section, so the copies are not byte-identical.
- S18: Two summary statements are inferences from test assertions, not direct reads of the templates: new-doc.test.ts and schema.test.ts show that status is not among the fields a fresh DEC or RES fails on, so the templates (outside this slice) must set it.
- S20: Two files have no site and carry a none_reason: skills/codebase-design/DEEPENING.md (code dependencies only) and skills/codebase-design/agents/openai.yaml (host metadata).
- S20: Slice content note: 53 of the 71 sites are user-wait handling in skills/ask-user-question (skill, host references, selection reference, evals and fixtures). No file in this slice stores or parses an idea, spec, row, DEC or RES status value.
- S20: Judgement call for the reviewer: in skills/code-review-and-quality/SKILL.md the review verdict (Approve, Request changes, Reject with 're-spec before rework'), the review checklist boxes and the 'resolved or explicitly deferred' findings are recorded as non-borderline sites of kind 'other', because they are the result of the review stage. They are not statuses of an idea, spec, row or record.
- S20: Judgement call for the reviewer: skills/code-review-and-quality/SKILL.md lines 43-48 select 'the active spec folder' by a slug or title match to the branch, with no status check. Recorded as a select site for spec, plan-row and effort.
- S20: Judgement call for the reviewer: skills/browser-testing-with-devtools/SKILL.md user-confirmation rules (lines 78-80, 90) are recorded as non-borderline user-wait sites although they are permission checks; line 315 ('before marking complete') is recorded as a non-borderline completion gate.
- S21: Finding for the design decision: skills/documentation-and-adrs/SKILL.md (lines 46-57, 93-100) defines a second decision status model that conflicts with skills/domain-modeling/DEC-FORMAT.md (line 40). It uses a '## Status' body section, the prefix ADR-, and the values Accepted, Superseded by ADR-XXX, Deprecated, plus PROPOSED in the lifecycle line. DEC-FORMAT uses frontmatter 'status' with proposed, accepted, superseded by DEC-NNN and has no Deprecated value.
- S21: Word collisions recorded as borderline or noted in summaries: 'Phase' as a step of a skill (debugging-and-error-recovery, idea-refine, deprecation-and-migration) and as the lifecycle stage column in constraint-driven-development lines 190-195; 'checkpoint' as a non-blocking user check in debugging-and-error-recovery line 181; 'resolved' for a glossary term in domain-modeling SKILL.md and GLOSSARY-FORMAT.md; 'migrated' for consumers of a deprecated system in deprecation-and-migration.
- S21: One shell command that combined several steps was refused by the worktree isolation check. The same validation then ran as two separate commands and passed. Nothing in the repo was changed.
- S22: Borderline sites are recorded once per distinct topic, not once per file, so some files have 2 to 4 borderline sites (for example HTTP status_class, incident resolved, product retries and a checklist in skills/observability-and-instrumentation/SKILL.md).
- S22: Finding for the design decision: skills/prototype/SKILL.md line 26, LOGIC.md lines 52-58 and UI.md lines 94-105 capture the user's verdict in an issue or a commit and name no DEC, map row or status. skills/interview-me/SKILL.md line 41 expects a prototype row to resolve with a DEC that links the prototype.
- S22: Finding for the design decision: the frontier rule is restated in three files of this slice (skills/incremental-implementation/SKILL.md line 21, skills/interview-me/SKILL.md line 57, skills/planning-and-task-breakdown/SKILL.md line 259), and the row status value list in two (interview-me line 53, planning-and-task-breakdown line 225).
- S24: All 23 records are in the migrated 0.8 format: frontmatter holds only `spec: SPEC-NNN` and `migrated: 0.8`. No record has a `status` field or a `sources` list, so each frontmatter site records the absence of a status, not a value.
- S24: Spec status lives in a free-text body line ('Status: draft for review', 'Status: approved', 'Status: superseded on ... by docs/decisions/DEC-002-...'). In SPEC-001, SPEC-002, SPEC-003 and SPEC-008 the spec.md says 'draft for review' while its plan.md says 'approved'; in SPEC-005 the spec.md says 'superseded' while its plan.md says 'approved' and all todo boxes are ticked.
- S24: The 7 plan.md files use a legacy 'Components and order' table (columns #, Component, Depends on, Risk) with no Status, Blocked by or Result column. Order, parallel work and checkpoints are prose lines and bullets outside the table, so the current row parser finds no rows there.
- S24: The 7 todo.md files use legacy blocks ('- [x] Task N: ...', one box per task, no T-number ID). Only SPEC-008's todo.md groups tasks under plain-text 'Phase N:' lines; its plan.md has no phases.
- S24: SPEC-007-source-cache and SPEC-009-workspace have only spec.md in this slice (no tasks/plan.md or tasks/todo.md were listed).
- S24: Open Questions lists mark a closed question with two different prefixes: 'Resolved <date>' (SPEC-004, SPEC-006) and 'Closed <date>' or 'Closed <date> by DEC-006' (SPEC-005, SPEC-008). Decision links also use 'amends' and 'refines' (SPEC-006 line 111, SPEC-009 lines 81-87), which are not 'supersedes'.
- S24: SPEC-009-workspace/spec.md is the densest file (41 sites). Key places: lines 216-219 (plan rows use the map's statuses open, in-progress, resolved, superseded by NN, one parser), 90-98 (migrated files need only the identity field, every other field optional), 109-115 (`brain status` five lines), 116-118 and 142-156 (main session is the only writer of plan rows and todo ticks), 136-142 (waves and the checkpoint-row rule), 381-394 (the `brain check` rules for resolved rows, blocked-by, sources and superseded-by).
- S24: The schema for a result with a site list of 'lines' sometimes holds several ranges in one string (for example '61-62, 130-138') where one handling spans separate places in a file.
- S25: Three files have no site: tsconfig.json, upstream.json and upstream.lock.json hold no status or wait content.
- S25: specs/SPEC-009-workspace/tasks/plan.md and tasks/todo.md are old-layout records (migrated: 0.8). The plan has no row table with status, blocked by and result; task status is only the ticks in todo.md, and the waits are 'Depends:' lines in todo.md plus a phase-level 'Depends on' column in the plan.
- S25: Stale status inside specs/SPEC-009-workspace/tasks/plan.md: line 53-54 says T28, T38 and T52 are running, the wave table at line 60 says wave A (T53 to T57) is running, and todo.md has every box ticked. Two of the three open questions at lines 103-105 carry no answer mark although their tasks are ticked.
- S25: Several waits in the SPEC-009 records point at things that are not rows: the user's second ask (T39), the 0.10.0 release (T40), a merged pull request, and 'Ask first' on T06. No Depends line names a checkpoint; the checkpoint gate is prose (plan.md line 56, todo.md line 105).
- S25: tasks/done/context-scope/plan.md and todo.md have no frontmatter. Their finished state is the folder tasks/done/ and the prose line 'Done 2026-09-19'; one confirmation (the Antigravity rule) stays pending in prose.
- W1-literal-values: Long files were read at the hit lines with context, not in full: the test files under scripts/*/__tests__, scripts/setup/*.ts, docs/intent/workspace-and-stateful-interview.md, docs/research/RES-037, RES-006, RES-024, RES-069, RES-075, RES-076, specs/SPEC-009-workspace/* and docs/ideas/IDEA-015. Their line ranges are section ranges, so some are approximate.
- W1-literal-values: A few sites were recorded from the search output line alone, without more context: some eval scaffold and grader lines under evals/, and the fixture record files under scripts/workspace/__tests__/fixtures.
- W1-literal-values: Copies are recorded once with a pointer, not once per copy: the protocol renders (rules/protocol.md, protocol/AGENTS-block.md, GEMINI.md have one site each for Task end only), commands/build.toml as one site against five for .claude/commands/build.md, and the SPEC-002/003/004 spec.md files of the plan-shapes fixture.
- W1-literal-values: The two .jsonl eval traces were searched, not read. Git history, node_modules and bun.lock are not covered.
- W1-literal-values: Rule slip: one helper list was written to /tmp/claude-501/w1-recorded.txt and removed at once. No repo file changed; git status shows the same 35 entries as at the start.
- W1-literal-values: Findings seen in passing, not verified in depth (also in the file's notes): six status vocabularies exist today and a spec stores none; the planning skill lists in-progress for plan rows but RES-037:99 says no build text writes it; effort.ts counts a spec with no plan rows as finished; the four fixture workspace.md files are older copies (a specced idea 'is done', no Session state section); skills/documentation-and-adrs carries a second ADR status vocabulary (Accepted, Superseded by ADR-XXX, Deprecated); cross-effort waits exist only in prose (IDEA-008, IDEA-014, IDEA-015, IDEA-016, DEC-004); docs/agents/history/STATUS.md still names IDEA-003, which no longer exists.
- W2-literal-waits: The 21 word searches gave 2,270 file:line hits in 321 files. Every hit file has a site. 180 hit lines sit outside every site range; each was read and is a word match only (the name 'lifecycle', text 'blocks', skill 'Phase N' sections, import lines, install prerequisites).
- W2-literal-waits: Limit: this sweep searched wait words only. A file that handles status with none of these words is not covered here. Not opened: the fixture DEC and RES files, scripts/workspace/new-doc.ts, scripts/workspace/old-layout.ts, hooks/session-start.sh.
- W2-literal-waits: Limit: large files have one site per section or test group, not per test (build-parallel.test.ts, check.test.ts, RES-037, the workspace intent doc, the SPEC-009 todo). commands/build.toml and the three rendered protocol copies were compared with their sources by hit lines and headings, not line by line.
- W2-literal-waits: Finding for the design: the frontier rule exists in four code copies (map.ts frontier, graph.ts layWaves, and test-local copies in interview-resume.test.ts and interview-parallel-research.test.ts) and as prose in nine or more instruction files.
- W2-literal-waits: Finding for the design: 'still to do' is open or in-progress in graph.ts, but the frontier takes open rows only. The build command keeps a running task's row open; interview-me sets a started research or do row in-progress.
- W2-literal-waits: Finding for the design: waits between efforts exist only as prose (IDEA-008 on IDEA-007, IDEA-015 on IDEA-016, IDEA-016 on IDEA-014, DEC-004's Depends on column, each migrated spec's Depends on line, SPEC-009's phase table).
- W2-literal-waits: Finding for the design: a wait on the user has at least six forms (a decide row on the frontier, a checkpoint row, a proposed DEC, a pending question in Notes, a do row with a user-run step, Open questions sections). Only the first reaches the 'Waiting on the user' line of brain status.
- W2-literal-waits: Finding for the design: all nine real specs and their plans are migrated layout-1 files with no sources, no row table, ticked boxes and prose 'Status:' lines; Brain's code reads none of that. SPEC-005's prose status is 'superseded', a value the spec schema lacks.
- W2-literal-waits: Record drift found: RES-077 has status resolved while its row IDEA-015#29 is in-progress. Many real DEC and RES files keep the template comment after the status value.
- W2-literal-waits: The relayed user message ('sorry ask me again didn't mean to dismiss') asks the main session to put its pending question again. This sweep cannot ask the user, so the main session must do that.
- W3-literal-words: Coverage limit 1: 404 files have a hit for the sweep words. About 80 of them have no site of their own. A sibling site names them in its summary (for example started-02 to started-05, the commands/*.toml mirrors, the todo.md files of the plan-shapes fixture, the talk-plain copies), or every hit in them is a borderline sense that is recorded once for the group (vendored checklists, agents/*.md, hook scripts, sync and version tests). A scripted check of this list was not possible, see the tool problem below.
- W3-literal-words: Coverage limit 2: test files are recorded per describe group from the test names and line numbers, not from every assertion.
- W3-literal-words: Coverage limit 3: RES-002, RES-003, RES-006, RES-024, RES-037 and RES-069, and docs/intent/workspace-and-stateful-interview.md outside lines 138-156, 410-425, 525-552 and the Decisions table, are summarized from headings, frontmatter and hit counts. A slice reader must confirm their detail.
- W3-literal-words: Line ranges: a decision record's range is the whole short file. A range of 1-300 on a borderline vendored skill means the whole file, not one passage.
- W3-literal-words: Rule slip, corrected: two temporary files (.w3-filecounts.txt and .w3-hitfiles.txt) were written in the sweeps folder by mistake and removed again. One rg command hung for 300 s and was stopped; it wrote nothing that remains.
- W3-literal-words: Finding to pass on: the same status rules live in several places that must change together. Examples: the frontier rule in scripts/workspace/map.ts and its copies in two eval tests (mapRows and frontier helpers in interview-resume.test.ts and interview-parallel-research.test.ts); the Close a row steps in .claude/commands/build.md, commands/build.toml, incremental-implementation and the played-run helpers of the build eval tests; the protocol text in four files; regex graders that hard-code row status text and the DEC schema.
- W3-literal-words: Finding to pass on: inconsistent real records. IDEA-015 row 29 is in-progress while RES-077 is resolved and answered. SPEC-001, 002, 003 and 008 say `Status: draft for review` while their plans are approved and all boxes are ticked. SPEC-005 is superseded by DEC-002, which DEC-006 supersedes. SPEC-009's spec still names a status skill and a STATUS.md seed that later decisions removed. skills/documentation-and-adrs keeps an ADR status set that differs from the DEC schema.
- W3-literal-words: Finding to pass on: waits that exist only in prose. IDEA-008 row 02 on IDEA-007 row 01; IDEA-015 row 32 on IDEA-016#08; IDEA-016 on IDEA-014; IDEA-015's spec on IDEA-016; the module `Depends on` in DEC-004 and in the layout-1 specs; parked ideas that wait for the user's evaluation.
- W4-kind-efforts: Not opened line by line: scripts/evals/__tests__/fixtures/*.jsonl traces, docs/research/RES-037 (916 lines) and RES-002 to RES-005, the bodies of DEC records not named in a site, the spec.md bodies of specs/SPEC-002 to SPEC-008, and vendored skills with no hit on a row, plan or wait word.
- W4-kind-efforts: Findings a reader must not miss (detail in the notes field): a spec stores no status, and all nine real specs are migrated, so effort.ts counts them as finished; a migrated or status-less idea also counts as finished; a phase and a wave have no record and no status; waits between efforts exist only in prose (IDEA-008, IDEA-014, IDEA-015, IDEA-016, DEC-004); the stored Parallel waves section must be rewritten on every row change; docs/agents/workspace.md, the protocol and the commands each have copies that repeat the same rules.
- W4-kind-efforts: Drift seen: a parallel build keeps a running task's row open, so in-progress is not set there; idea-refine writes 'None yet.' where brain check accepts only an empty section or 'None' on a finished idea; the vendored ADR skill names a Deprecated status that the DEC schema lacks; IDEA-015 row 29 is in-progress while its RES-077 is resolved and answered; the retired docs/STATUS.md is still described in fixtures, the intent doc, SPEC-009 and old changelog entries.
- W5-kind-rows-records: Coverage limit: seven large test files under scripts/evals/__tests__ and one trace fixture are recorded as one site per file, with the whole file as the line range. I searched them and did not read them line by line.
- W5-kind-rows-records: Coverage limit: the finding lines of RES-037, RES-076, RES-006 and RES-024, and the Decisions table of docs/intent/workspace-and-stateful-interview.md, are recorded by section. I read the headings and searched the bodies.
- W5-kind-rows-records: Coverage limit: the migrated plan and todo files of SPEC-001 to SPEC-008 are counted, and SPEC-009 is recorded as the representative. Git history is not covered; that is another sweep.
- W5-kind-rows-records: Line ranges for long test groups start at the describe line and can be off by a few lines at the end. All ranges are inside the file length (checked by script).
- W5-kind-rows-records: Finding for the design: no code writes or changes a status. brain new-doc copies templates only (a new DEC starts as accepted, a new RES as in-progress), and every later status change is an instruction to an agent that edits Markdown.
- W5-kind-rows-records: Finding for the design: a spec has no stored status. scripts/workspace/effort.ts derives finished from plan rows, so a spec with no row table (all nine real specs, migrated from layout 1) and an idea with no status (a migrated idea) both count as finished.
- W5-kind-rows-records: Finding for the design: /build keeps a running task's row open; only interview-me sets a row to in-progress. Ticked boxes in tasks/todo.md are a second status carrier that no code parses.
- W5-kind-rows-records: Finding for the design: status text exists in copies that must change together: protocol/PROTOCOL.md renders to protocol/AGENTS-block.md, rules/protocol.md and GEMINI.md; skills/setup-brain/workspace.md is identical to docs/agents/workspace.md; four test fixtures hold an older workspace.md; .claude/commands/*.md mirror commands/*.toml.
- W5-kind-rows-records: Finding for the design: exact status words are pinned by text-match tests (scripts/lifecycle/__tests__, scripts/evals/__tests__) and by regex graders (evals/**/graders, for example adr-is-dec/graders/passes-check.md, which copies the DEC status values).
- W5-kind-rows-records: Finding for the design: waits between efforts exist only in prose today: Notes of IDEA-008, IDEA-014, IDEA-015 and IDEA-016, and the Depends on column of DEC-004 that the layout-1 specs repeat.
- W6-flow-commands: Coverage limit: test files are recorded per describe group, from test titles and selected bodies, not line by line. The end lines of groups in scripts/evals/__tests__ are approximate.
- W6-flow-commands: Coverage limit: the repo's own records are recorded as four folder-level sites (docs/ideas, docs/decisions, docs/research, specs) plus IDEA-015. In those four sites, 'path' is a folder, not a file.
- W6-flow-commands: Not opened: skills that call no brain command (for example context-engineering, code-review-and-quality, shipping-and-launch, doubt-driven-development, prototype, ask-user-question), tasks/done, docs/intent, .changeset, licenses, the per-host manifests, and vendored upstream skill text.
- W6-flow-commands: Finding for the design: scripts/workspace/effort.ts does not check the 'migrated' marker. A migrated idea has no status and counts as finished. A migrated plan has no row table and counts as finished. All 9 real specs in this repo are migrated, so no real plan has rows.
- W6-flow-commands: Finding for the design: a spec has no stored status, and an effort has no blocked-by field. A wait on the user is derived (decide rows on the frontier) or is free text in an idea's Notes.
- W6-flow-commands: Finding for the design: the status rules exist as code in scripts/workspace and again as text in skills/setup-brain/workspace.md (byte-identical to docs/agents/workspace.md), protocol/PROTOCOL.md with its three generated copies, the build, plan, spec and status commands for two hosts, and three skills. scripts/lifecycle/__tests__/parallel-build.test.ts and using-brain.test.ts assert some of these sentences word for word.
- W6-flow-commands: Finding in real data: IDEA-015#29 is in-progress while its record RES-077 has status resolved and outcome answered. brain check has no rule for this and reports no finding.
- W6-flow-commands: Finding: .github/workflows/ci.yml does not run brain check on the repo's own records. Only 'bun run check' and release.yml run it.
- W7-flow-lifecycle: Tool limit: the shell refused inline scripts that name the scratchpad path, so I wrote the file with the Write and Edit tools. The content is not affected.
- W7-flow-lifecycle: Scope limit: this sweep covers the instruction text (skills/, commands/, .claude/commands/, protocol/, rules/, references/, agents/, claude/agents/, docs/agents/, GEMINI.md, AGENTS.md, output-styles/, plain-talk/), plus the session-start hook, the six item templates in scripts/workspace/templates/, README.md 56-80, docs/agents.md and docs/install/claude-code.md 38-43. It does not cover the other scripts/ code, tests, evals/, docs/evals/, docs/intent/, docs/research/, docs/decisions/, docs/ideas/, specs/, tasks/, GLOSSARY.md, CHANGELOG.md or the other hooks.
- W7-flow-lifecycle: Copies: rules/protocol.md, protocol/AGENTS-block.md and GEMINI.md 40-98 are rendered from protocol/PROTOCOL.md; docs/agents/workspace.md is byte-identical to skills/setup-brain/workspace.md; commands/*.toml mirror .claude/commands/*.md. Each copy has its own site, so one handling appears two to four times in the count.
- W7-flow-lifecycle: Finding for the design decision: the plan row status list has in-progress, but both build commands say 'a running task keeps its row open' (.claude/commands/build.md 61, commands/build.toml 61). No instruction sets a plan row to in-progress; only map rows for research and do work get it.
- W7-flow-lifecycle: Finding: 'blocked' is never a row status. It exists only as a research record outcome (with status in-progress) and as prose. A decide row that waits on the user has no status value either; its wait lives in the idea's Notes as a pending question, and in a DEC as status proposed.
- W7-flow-lifecycle: Finding: the workspace Stage line has three values (define, build, finished), while the lifecycle has six stages (define, plan, build, verify, review, ship).
- W7-flow-lifecycle: Finding: module specs wait on each other only through the capability map's 'Depends on' column and build order (skills/spec-driven-development/SKILL.md 57-80), recorded in a DEC and in sources:. No Blocked by exists between efforts.
- W7-flow-lifecycle: Finding: skills/documentation-and-adrs/SKILL.md 49-55 and 93-100 keep an older ADR status list (Accepted, Superseded by ADR-XXX, Deprecated; PROPOSED first) that differs from DEC-FORMAT.md (proposed, accepted, superseded by DEC-NNN).
- W7-flow-lifecycle: Line ranges come from the worktree as it was during the sweep. The worktree has uncommitted records under docs/ that this sweep did not read.
- W8-history: Scope limit: the sweep records the places that still follow an older way, or that exist only to handle one. It does not list every current-way site; the file-by-file slices own those.
- W8-history: Not opened: the rendered protocol copies (AGENTS.md, GEMINI.md, rules/protocol.md, protocol/AGENTS-block.md), skills/interview-me/*, skills/idea-refine/*, the plan-shapes and layout-2 fixtures, scripts/evals/interview-*.ts and keystone-*.ts, docs/evals/*, and the vendored skills other than documentation-and-adrs.
- W8-history: History searched on the current branch only. Other branches and the four unrelated root histories that RES-024 names were not searched.
- W8-history: Finding for the design decision: ticks in tasks/todo.md are still live state beside the row Status. The build commands, the planning and build skills, the commit contract and the todo-ticked grader all require them.
- W8-history: Finding: stale prose status lines remain in migrated bodies. SPEC-001, 002, 003 and 008 say 'Status: draft for review' though built; RES-001 to RES-004 say 'evidence gathered, decision open'; the SPEC-009 plan shows waves as '(running)'.
- W8-history: Finding: a migrated idea with no status and a migrated plan with no row table count as finished efforts only because the parse finds nothing (scripts/workspace/effort.ts). SPEC-007 has no plan at all.
- W8-history: Finding: waits between efforts have no field. They are prose: 'Depends on' columns in old plans and DEC-004, the history note's 'Take no open row until that review ends', and Notes in IDEA-008 (line 26) and IDEA-014 (line 39).
- W8-history: Finding: check.ts reads an absent research outcome as answered, for records written before 637f6da4. RES-006, 024, 035, 037, 038 and 040 depend on this.
- W8-history: Finding: IDEA-001 rows 15 and 17 are open rows about the docs/STATUS.md parser and hook section, both removed in 5c71de7f. docs/agents/history/STATUS.md, RES-006 and RES-037 cite IDEA-003 and RES-068, which are not in the tree.
- W8-history: Finding: skills/documentation-and-adrs/SKILL.md (vendored) still teaches an ADR '## Status' section with Deprecated, which no DEC status allows.

### Critic: what lies outside the file list
One independent agent looked for kinds of places the inventory missed (2026-11-21). Inside the 611 files it found the inventory sound: 22 extra word searches and 53 opened files with no site gave 2 small misses (M9, M10). The real gaps are outside the file list, which is one worktree of one branch. So this record answers for every file of this worktree; the places in M1 to M7 and M12 are outside it and belong to the decide rows and to IDEA-014's migration. Its text follows as written; the main session has not checked each line.

Result in short:

- Inside the 611 files, the inventory is sound. 22 extra word searches and 53 opened no-site files gave 2 small line-level misses (M9, M10).
- The real gaps are outside the file list. The file list is one worktree of one branch. Status and waits also live on two unmerged branches, in a store in the git folder, in other hosts' copies of Brain, and in repos that use Brain.
- 12 misses in total. 2 of them block the claim "every place in the repo": M1 and M2.

| ID | Miss | Kind of place | Blocks the claim |
|---|---|---|---|
| M1 | A second implementation of worked-out status and waits | Unmerged branch `prototype/views-board` | Yes |
| M2 | Real records in the layout-1 tracker format, at a path no migration step names | Unmerged branch `skill-creation` | Yes |
| M3 | The ID claim store | Git common folder, outside every worktree | No |
| M4 | Live layout-2 records of a repo that uses Brain | Other repos on this machine | No |
| M5 | Brain 0.5.0 copies in Gemini CLI and Antigravity | Installed plugin copies | No |
| M6 | Stale command copies that Codex wrote | Git-ignored, host-generated files | No |
| M7 | A Codex memory skill that updates `docs/STATUS.md` | Host memory | No |
| M8 | No ownership label on a site (vendored, seeded, generated) | Attribute the inventory lacks | No |
| M9 | The line that lets an external tool own a spec | Line in the worktree | No |
| M10 | Two graders bound to the DEC frontmatter shape | Lines in the worktree | No |
| M11 | The file list is 8 files and 20 rows behind | Files written after the cut | No |
| M12 | The history sweep read 312 of 1087 commits | Git history on other refs | No |


#### M1. Branch `prototype/views-board`: a second implementation of status and waits

- Where: worktree `~/Dev/ACMElabs/brain-views-proto`, tip `1381391c`, 6 commits, the last on 2026-11-21. 42 files under `prototypes/views-board-mod/`, none on this branch.
- `docs/ideas/IDEA-015-views-mod.md` lines 50 to 87 point to it. The readers recorded the pointer and not the content.
- It is the only code that names `ready`, `waiting` and `in review`, the three values that DEC-051 says are worked out and never stored. The shipped code has no such value; `scripts/workspace/graph.ts` lines 94-103 hold only a local list named `ready`.

| File on the branch | Lines | What it handles |
|---|---|---|
| `prototypes/views-board-mod/proto-data.ts` | 108 | A record with `migrated:` and no status gets the status `migrated` |
| same | 116-140 | `fixedWaves`: wave = 1 + the highest wave of the blockers, over every row (DEC-030). The shipped code has no fixed wave; it has `layWaves` only |
| same | 143-148 | `waveStatus`: `done`, `in progress`, `open`, worked out from row status |
| same | 150-155 | `column`: `in progress`, `resolved`, `superseded`, else `ready` or `waiting` from Blocked by |
| same | 203-253 | `addPhases`: a phase is a checkpoint and the tasks that block it; phase waits and phase waves are worked out |
| same | 268-276 | `specState`: `Migrated`, `Not planned`, `Done`, `In review`, `Planned`, `Building` |
| same | 302 | An idea with no status gets `define` |
| same | 351-354 | Loads the sample waits between ideas and specs |
| `prototypes/views-board-mod/hooks/views-proto.js` | 27-29 | The column lists for a spec, a task and a phase |
| same | 33-40 | One mark and one colour for each status value, `parked` and `Migrated` too |
| same | 526 | `readyWord`: `ready`, `open`, `define`, `Planned`, `Not planned` count as ready |
| same | 545-581 | Cycle search over waits (strongly connected components) and a count of open blockers |
| same | 664-684 | The Show filter (All, Blocked, Ready) and the blocked count |
| same | 955-960 | The verdict: in a cycle, done, blocked by N open items, ready to start |
| same | 1003, 1319 | `Blocked by` and its inverse `Blocks`; the detail fields |
| `prototypes/views-board-mod/samples/sample-effort-waits.json` | 1-18 | The only sample of the effort blocked-by data: a map from an ID to the IDs it waits on, with a cycle and a wait from an idea on a spec |
| `prototypes/views-board-mod/samples/specs/SPEC-900-sample-blocked-by-field/` | `spec.md`, `tasks/plan.md`, `tasks/todo.md` | A sample spec named for the blocked-by field, with a row table |
| `prototypes/views-board-mod/PROGRESS.md` | 1-36 | A hand-off note with ticked boxes and a "Next step" line, outside the workspace. DEC-014 removed this form from Brain |
| `prototypes/views-board-mod/captures/*.txt` | 27 files | Screens that show each status column and each wait |

#### M2. Branch `skill-creation`: real records in the layout-1 tracker format

- Where: worktree `~/Dev/ACMElabs/brain-skill-creation`, tip `f4d361a1`, 2026-09-20, 22 commits that this branch lacks, 155 files changed.
- The tracker folder is `docs/tracker/`. That path appears in no file of this worktree. `scripts/setup/migrate.ts` and `scripts/workspace/old-layout.ts` name neither `docs/tracker/` nor `.scratch/`. RES-037 lines 91 and 779 note the gap for `.scratch/` only.
- The folder comes from a `--tracker-dir` flag in that branch's `scripts/setup/write.ts`. No release holds that flag (checked in v0.8.0 and v0.9.0).

| File on the branch | Lines | What it holds |
|---|---|---|
| `docs/tracker/skill-creation/issues/01-user.md` to `24-intake-gate.md` | 3-5 | `Type:`, `Status: resolved` and, in 6 files, `Blocked by: 05,08,12,13` as plain lines. 24 files |
| `docs/tracker/skill-creation/map.md` | 1-69 | The map: Destination with a "Cleared 2026-09-20" line, "Decisions so far" (24 links), "Not yet specified", "Out of scope" |
| `docs/agents/issue-tracker.md` | 11, 24, 30-35 | The rules: `Status: claimed` or `resolved`, the `Blocked by: NN, NN` line, the frontier (open, unblocked, unclaimed, lowest number first), claim, resolve |
| `docs/agents/triage-labels.md` | 7-13 | Five issue states; `needs-info` is a wait on the reporter |
| `tasks/plan.md` | 3-32 | A Component table with a `Depends on` column, an order line, and "Verification checkpoints" |
| `tasks/todo.md`, `tasks/done/skill-rules/plan.md`, `tasks/done/skill-rules/todo.md` | all | Layout-1 task lists |
| `docs/decisions/DEC-002` to `DEC-010` | file names | Nine records. This branch uses DEC-002 to DEC-007 and DEC-010 for other decisions, so one ID names two records across branches |

#### M3. The ID claim store

- Where: `~/Dev/ACMElabs/brain/.git/brain/ids/<TYPE>/<NNN>`, one empty folder for each claim. All worktrees share it. Outside git the store is `~/.cache/brain/` (absent on this machine).
- Code: `scripts/workspace/claims.ts` lines 1-7 and 38-47. The reader marked the file borderline and did not look at the store.
- Content today: 48 DEC, 16 IDEA, 90 RES and 9 SPEC claims.
- A claim is never removed. RES-078 to RES-085 are claimed and have no file (`docs/ideas/IDEA-016-effort-blocked-by.md` lines 76 and 82). DEC-001, DEC-002, DEC-006 and RES-001 to RES-005 have a file and no claim.
- Why it matters: it is the only Brain state outside tracked files. A new item kind with its own ID needs a claim type. A migration that renumbers or removes records cannot free a number.

#### M4. Live layout-2 records in a repo that uses Brain

- `~/.claude/plugins/installed_plugins.json` lists Brain 0.13.0 at project scope in 10 repos. 6 are on layout 1 (RES-037 covers them). 2 are on layout 2. No research record names these 2.
- `~/Dev/peterkloss.dev`: 14 ideas, 106 decision records, 36 research records, 1 spec. It holds twice the decision records of this repo.

| Field | Values in that repo |
|---|---|
| Frontmatter `status:` | `accepted` 102, `resolved` 33, `define` 12, `superseded by DEC-NNN` 4, `in-progress` 3, `parked` 1 |
| Research `outcome:` | `answered` 33; 3 records are `in-progress` |
| Row status | `resolved` 154, `superseded by NN` 14, `open` 9, `in-progress` 4 |
| Idea `result:` | Empty, with the template comment "with status: done, the DEC-NNN or the commit SHA" still on the line |

- Waits written as prose in its idea notes, 10 lines in 6 files. Forms: a row waits on a row of another idea (`IDEA-008` line 86), an idea's Success line waits on a row (`IDEA-007` line 103, `IDEA-012` line 78), a research record waits (`IDEA-008` line 89), and a row waits on a thing outside Brain, a write-up and an API key (`IDEA-001` lines 94 and 99).
- `~/Dev/tanstack-chat`: layout 2, 1 spec, 4 rows, all `resolved`.

#### M5. Brain 0.5.0 in Gemini CLI and Antigravity

- Where: `~/.gemini/extensions/brain` and `~/.gemini/config/plugins/brain`, both version 0.5.0, installed 2026-09-19.
- They hold the removed forms: `skills/wayfinder/SKILL.md`, `skills/setup-brain/issue-tracker-local.md` (`Status: claimed`), `commands/build.toml` and `commands/planning.toml` (root `tasks/todo.md`), and `skills/planning-and-task-breakdown/SKILL.md` (37 lines that match the old checkbox and tracker forms).
- An agent on those hosts follows 0.5.0 rules in a layout-2 repo. No migration reaches a host's copy.

#### M6. Command copies that Codex wrote

- Where: `~/Dev/ACMElabs/brain/.agents/skills/source-command-*/SKILL.md`, 8 folders. `.gitignore` line 12 hides them.
- `source-command-plan/SKILL.md` (2026-10-29) lines 14, 23 and 25 hold layout-1 rules: read `SPEC.md` or `spec/`, save to root `tasks/plan.md`, stop on "unchecked tasks". The current `.claude/commands/plan.md` lines 7-26 say the opposite.
- No copy of the build command exists. The status copy is from 2026-11-05.

#### M7. A Codex memory skill

- Where: `~/.codex/memories/skills/brain-workflow-build/SKILL.md`, 2026-11-05.
- Lines 17 and 35: read `docs/STATUS.md`, then update it "with the actual frontier, checks, commits, blockers, and decisions". Line 24: derive dependency waves. Line 59: `docs/STATUS.md` must reflect the state.
- DEC-014 removed that note. The memory skill still tells Codex to keep it.

#### M8. A site has no ownership label

The inventory records kind and operation for a site. It does not record who may change the file. AGENTS.md says a vendored file keeps byte identity, and a generated file changes through its source.

- Vendored (`upstream.lock.json`, key `files`): 14 files hold 37 real sites. `skills/context-engineering/SKILL.md` 5, `skills/doubt-driven-development/SKILL.md` 5, `references/definition-of-done.md` 4, `references/orchestration-patterns.md` 4, `skills/constraint-driven-development/SKILL.md` 3, `skills/git-workflow-and-versioning/SKILL.md` 3, `skills/browser-testing-with-devtools/SKILL.md` 2, `skills/documentation-and-adrs/SKILL.md` 2, `skills/prototype/LOGIC.md` 2, `skills/prototype/SKILL.md` 2, `skills/prototype/UI.md` 2, `skills/codebase-design/DESIGN-IT-TWICE.md` 1, `skills/deprecation-and-migration/SKILL.md` 1, `skills/source-driven-development/SKILL.md` 1.
- Seeded (key `seeds`): 23 files hold 210 real sites. Brain owns them and may change them.
- Generated: `rules/protocol.md`, `protocol/AGENTS-block.md`, `GEMINI.md` and the plain-talk outputs. The sweeps note this; no site carries it.

#### M9. The line that lets an external tool own a spec

- `skills/spec-driven-development/SKILL.md` line 163: when the project uses OpenSpec or another system, the external tool owns how the spec is stored. Such a spec has no Brain frontmatter and no rows, so it cannot hold `status` or `blocked-by` (DEC-029).
- The inventory holds the problem (`docs/ideas/IDEA-010-external-specs.md` line 12, `docs/research/RES-069-keystone-workflow-audit.md` line 92) and not the instruction that causes it. No reader site and no sweep site covers line 163.

#### M10. Two graders bound to the DEC frontmatter shape

- `evals/lifecycle/adr-is-dec/graders/kind-architecture.md` line 6: the pattern needs `adr-test:` on the line after `kind:`. A new field between them fails the grader.
- `evals/lifecycle/adr-is-dec/graders/filled.md` line 6: the pattern lists the template placeholders, `IDEA-NNN#NN` (the `from` link) among them. A new placeholder in `scripts/workspace/templates/DEC.md` passes unseen.
- The readers gave both files no site because no status word appears. The reason holds for the words and misses the link to the format.

#### M11. The file list is behind

- 8 files were written after the cut at 05:38: `docs/research/RES-086` to `RES-093`. Each is a research record with `status`, `from: IDEA-016#NN` and, for some, `outcome`.
- `docs/ideas/IDEA-016-effort-blocked-by.md` lines 141-158 lie outside every site: rows 17 to 31 and the "Not yet specified" note, written after the readers ran. Rows 28 to 30 each wait on 11 rows.
- At 08:46, `docs/research/RES-089-status-waits-code-fields.md` held `status: in-progress` (line 3) with `outcome: answered` (line 7). Another agent may still write it.
- 18 record files (13 without the new records) name a path outside the repo, such as the place of a result or of evidence: a file in another worktree or the scratchpad. Some also name a commit on another branch. Examples: `docs/ideas/IDEA-015-views-mod.md` line 57, `docs/ideas/IDEA-016-effort-blocked-by.md` lines 90 and 96.

#### M12. The history sweep read one branch

- W8 ran `git log` on this branch: 312 commits. All refs hold 1087.
- `v2` has 528 commits that this branch lacks, from the design before the reset of 2026-09-01. Its docs use other status forms: `STATUS: in_progress` (3 files) and prose lines such as `**Status:** adopted as D-015`. I did not read them in depth.
- `skill-creation` (22 commits) and `prototype/views-board` (6 commits) are M2 and M1.

## Findings
- Every one of the 611 listed files has an entry from a reader that read it in full; 0 entries are missing or malformed. Source: `<scratchpad of session 8f41990c>/status-waits/inventory/S01-result.json` to `S25-result.json`, merged by `<scratchpad of session 8f41990c>/merge_inventory.py`, checked 2026-11-21.
- The readers recorded 2228 sites, 213 of them borderline; the 8 sweeps recorded 3275 sites (W1-literal-values 583, W2-literal-waits 619, W3-literal-words 547, W4-kind-efforts 382, W5-kind-rows-records 395, W6-flow-commands 282, W7-flow-lifecycle 299, W8-history 168). Source: `<scratchpad of session 8f41990c>/status-waits/inventory-merged.json`, checked 2026-11-21.
- 5 sweep sites have no matching reader site and 7 strong search hits lie outside every site; none is a missed handling of status or waits. Source: the gap list printed by `<scratchpad of session 8f41990c>/merge_inventory.py`, each place opened in the main session, checked 2026-11-21.
- The code area with the most sites is `scripts/workspace`; the record areas with the most are `docs/research` and `docs/ideas`. Source: the table "Sites by area" above, checked 2026-11-21.

## Follow-ups
None. The topics are rows 17 to 30 of IDEA-016, and row 31 is their synthesis.

## Next action
None.
