# Tasks: workspace

Spec: `spec/SPEC-workspace.md`. Plan: `tasks/plan.md`. Each task: a failing test first where
code changes, and the eval case first where skill behaviour changes, written in the task it
verifies; then `bun run check` green; then one commit with files staged by name. Every phase
ends with a checkpoint and a review with Peter.

## Phase 1: glossary rename (`feat/glossary-rename`, PR 1)

- [x] T01: Matt's pin to `d81f3a1`
  - Acceptance: `upstream.json` pins mattpocock-skills at `d81f3a183412e71a5b1e84ca21bc1a35eea03a60`; `bun run sync -- --only mattpocock-skills` changes only `skills/codebase-design/DESIGN-IT-TWICE.md` ("GLOSSARY.md vocabulary") and the lock; `sync --check` clean; its own commit
  - Verify: `bun run sync -- --check`; `git diff --stat HEAD~1`
  - Files: upstream.json, upstream.lock.json, skills/codebase-design/DESIGN-IT-TWICE.md
  - Depends: none. Scope: S
- [x] T02: plain-talk sources renamed and re-rendered
  - Acceptance: `plain-talk/PLAIN-TALK.md` names `GLOSSARY.md` and `GLOSSARY-MAP.md`; `bun run plain-talk:render` rewrites the five outputs; no rendered file edited by hand
  - Verify: `bun run plain-talk:render -- --check`; `bun test scripts/plain-talk`
  - Files: plain-talk/PLAIN-TALK.md; rendered: output-styles/talk-plain.md, GEMINI.md, rules/talk-plain.md, plain-talk/AGENTS-block.md, AGENTS.md
  - Depends: none. Scope: S
- [x] T03: domain-modeling renamed
  - Acceptance: `CONTEXT-FORMAT.md` moved with `git mv` to `GLOSSARY-FORMAT.md`; `SKILL.md` and the format files name `GLOSSARY.md` and `GLOSSARY-MAP.md`; the description says "glossary"
  - Verify: `bun run lifecycle:check`; `rg -n 'CONTEXT' skills/domain-modeling` is empty
  - Files: skills/domain-modeling/SKILL.md, skills/domain-modeling/GLOSSARY-FORMAT.md, skills/domain-modeling/ADR-FORMAT.md
  - Depends: none. Scope: S
- [x] T04: brain-owned skills and commands renamed
  - Acceptance: every read and write of the glossary in brain-owned skills and commands names `GLOSSARY.md` / `GLOSSARY-MAP.md`; mechanical swap only
  - Verify: `bun run check`; `rg -n 'CONTEXT(-MAP)?\.md' skills .claude/commands commands` lists only vendored files
  - Files: skills/{code-review-and-quality,debugging-and-error-recovery,incremental-implementation,interview-me,planning-and-task-breakdown,spec-driven-development,test-driven-development,using-brain,wait-what,triage,wayfinder}/SKILL.md; .claude/commands/{build,plan,review,spec,test}.md; commands/{build,planning,review,spec,test}.toml
  - Depends: none. Scope: M (21 files, word swap)
- [x] T05: setup-brain renames the glossary, and the one-release fallback
  - Acceptance: the `domain.md` template names `GLOSSARY.md` and holds the fallback rule (no `GLOSSARY.md` but a `CONTEXT.md`: read it, and tell the user once to run setup-brain); setup-brain explores for `CONTEXT.md` / `CONTEXT-MAP.md` and offers `git mv` through `write.ts --rename-glossary`, which shows the move in `--dry-run` and never runs without the flag
  - Verify: `bun test scripts/setup` (a temp git repo with `CONTEXT.md`: dry run lists it, the real run moves it and keeps its history)
  - Files: skills/setup-brain/SKILL.md, skills/setup-brain/domain.md, scripts/setup/write.ts, scripts/setup/__tests__/write.test.ts
  - Depends: none. Scope: M
- [x] T06: repo docs, brain's specs, and the brain-wrap amendment
  - Acceptance: `README.md`, `.codex-plugin/plugin.json`, `spec/CAPABILITY-MAP.md` and the five `spec/SPEC-*.md` that name `CONTEXT.md` describe the current contract with `GLOSSARY.md`; `docs/intent/brain-wrap.md` gains one line: "Glossary renamed to `GLOSSARY.md` on 2026-10-29; see `docs/intent/workspace-and-stateful-interview.md`"; `tasks/done/` and `docs/research/` untouched
  - Verify: `bun run validate`; `git diff --stat` shows no file under `tasks/done/` or `docs/research/`
  - Files: README.md, .codex-plugin/plugin.json, spec/CAPABILITY-MAP.md, spec/SPEC-{lifecycle,plain-talk,question,setup}.md, docs/intent/brain-wrap.md
  - Depends: none. Ask first: the uncommitted change already in `brain-wrap.md`. Scope: M
- [x] T07: brain's own `GLOSSARY.md`
  - Acceptance: written with domain-modeling, in `GLOSSARY-FORMAT.md`'s format; one entry each for idea, effort, destination, map, row, decide / research / do rows, frontier, fog, claim, decision record (DEC), research record (RES), workspace, protocol; `_Avoid_` lines where a synonym exists; no implementation detail
  - Verify: read against `GLOSSARY-FORMAT.md`; the T08 check passes
  - Files: GLOSSARY.md
  - Depends: T03. Scope: S
- [x] T08: the rename guard, the upstream compare, the changeset
  - Acceptance: `lifecycle:check` fails on `CONTEXT.md` or `CONTEXT-MAP.md` in a brain-owned file, except history (`tasks/done/`, `docs/research/`, `docs/intent/`, `CHANGELOG.md`), the fallback rule, and text that describes the rename; it fails when `GLOSSARY.md` lacks an entry for a listed term; `bun run sync -- --report` compared with brain's rename of domain-modeling and wait-what, and anything brain missed fixed; a changeset for the rename
  - Verify: `bun test scripts/lifecycle` (fixtures for each finding and each exemption); `bun run check`
  - Files: scripts/lifecycle/check-refs.ts (or a sibling check-names.ts), scripts/lifecycle/__tests__/, .changeset/<name>.md
  - Depends: T01 to T07. Scope: M

### Checkpoint: phase 1 (PR 1 merged)
- [x] `bun run check` and `bun run validate` green
- [x] Review with Peter; push and open PR 1 only after his yes (PR #13)
- [x] PR 1 merged with a merge commit (80aaef91); `feat/workspace-layout` created from `main`

## Phase 2: workspace foundation (`feat/workspace-layout`)

- [x] T09: the `brain` CLI skeleton and the `workspace.md` template (prefactor)
  - Acceptance: `bun scripts/brain.ts` with no or an unknown subcommand prints usage and exits 2; `skills/setup-brain/workspace.md` is the template: `layout: 2`, the paths, the `brain <cmd>` definition, the new-doc-only rule (the config reader moved to T11, its first user, where the CLI seam can test it)
  - Verify: `bun test scripts/workspace` (CLI seam)
  - Files: scripts/brain.ts, scripts/workspace/__tests__/cli.test.ts, skills/setup-brain/workspace.md
  - Depends: T08. Scope: M
- [x] T10: the templates and their frontmatter schemas
  - Acceptance: IDEA, DEC, RES, spec, plan and todo templates as in the intent doc's File formats, with the H1 ID rule and the `spec:` field; one schema per type that check and new-doc share; plan rows carry ID, task, type (`task` or `checkpoint`), status, blocked by, result; todo blocks carry no status line and no Dependencies field; the RES finding line allows the optional validator; `from` is required for new DEC and RES files, and a migrated 0.8 file carries `migrated: 0.8` instead, the only case where the check accepts a missing `from`; `evidence` is optional for all files; the schemas are final for this build: T13 and T17 use them unchanged
  - Verify: `bun test scripts/workspace` (each template, filled, passes its schema)
  - Files: scripts/workspace/templates/{IDEA,DEC,RES,spec,plan,todo}.md, scripts/workspace/schema.ts, test
  - Depends: T09. Scope: M
- [x] T11: `brain new-doc`
  - Acceptance: the config reader (`scripts/workspace/config.ts`) takes `layout` and the four folder paths from `docs/agents/workspace.md` frontmatter, with the defaults when the file or a key is absent, and new-doc writes into those folders; `brain new-doc IDEA|DEC|RES|SPEC <slug>` claims the next number with `mkdir` under `$(git rev-parse --git-common-dir)/brain/ids/<TYPE>/`, falls back to the user's cache directory outside git, writes the file from its template, prints the path; SPEC writes the folder with `spec.md`, `tasks/plan.md`, `tasks/todo.md`; a bad type or slug exits 2; `package.json` gains `new-doc`
  - Verify: CLI seam, one case per type; the parallel test: 20 processes, several runs, unique numbers, no gap without a failed claim
  - Files: scripts/workspace/config.ts, scripts/workspace/new-doc.ts, scripts/workspace/claims.ts, scripts/workspace/__tests__/new-doc.test.ts, package.json
  - Depends: T10. Scope: M
- [x] T12: shared fixtures
  - Acceptance: fixture folders for an idea mid-define with a known frontier, a spec mid-build, no active work, and a 0.8-layout repo; every workspace file in them passes T10's `checkDoc` (the map parser moved to T14, its first CLI user, per the seam decision: no function seam for the parser now)
  - Verify: `bun test scripts/workspace` (each fixture file passes `checkDoc`); the known frontier is written into the fixture's README for T14 and T16 to assert
  - Files: scripts/workspace/__tests__/fixtures/*, scripts/workspace/__tests__/fixtures.test.ts
  - Depends: T10. Scope: M
- [x] T13: the migrate mode's frontmatter step, run on brain (prefactor)
  - Acceptance: `write.ts --migrate` adds frontmatter to a `DEC` or `RES` file that has none, from its schema, with `migrated: 0.8` in place of `from`, and changes no byte below it; `--dry-run` lists every file; one commit; run on brain's seven files (DEC-001, DEC-002, RES-001 to RES-005)
  - Verify: `bun test scripts/setup` (bodies byte-compared); `git diff` on brain shows frontmatter lines only
  - Files: scripts/setup/migrate.ts, scripts/setup/write.ts, scripts/setup/__tests__/migrate.test.ts, docs/decisions/DEC-00{1,2}-*.md, docs/research/RES-00{1..5}-*.md
  - Depends: T10. Scope: M
- [x] T14: `brain check`, in the gate
  - Acceptance: the map parser (`scripts/workspace/map.ts`: map and plan rows, and the frontier: open rows whose blockers are all resolved), tested through `brain check`; one finding line and exit 1 for each rule in spec success criterion 3; exit 0 on clean fixtures; row checks skip a migrated file; one informational line, exit unchanged, when migrated decisions have no `kind` ("3 migrated decisions have no kind: DEC-001, DEC-002, DEC-005"); paths from the config; `package.json` gains `workspace:check`, and `check` runs it
  - Verify: one fixture per rule (CLI seam), and one for the informational line; `bun run check` green on brain
  - Files: scripts/workspace/map.ts, scripts/workspace/check.ts, scripts/workspace/__tests__/check.test.ts, fixtures, package.json
  - Depends: T11, T12, T13. Scope: M
- [x] T15: `sync --check` in the gate, and the survival test
  - Acceptance: `bun run check` runs `bun run sync -- --check`; a test proves a brain-owned file in `agents/` and in `hooks/` survives `applyUpstream`, and that an upstream file at a brain-owned path stops the sync before any write
  - Verify: `bun test scripts/sync`; `bun run check`
  - Files: package.json, scripts/sync/__tests__/apply.test.ts
  - Depends: none. Scope: S
- [ ] T16: `brain status` and the status skill
  - Acceptance: five lines by default, fed by `docs/STATUS.md`; `--json` with the full `STATUS.md` text; the specs each idea produced; "run setup-brain to migrate" on a 0.8 repo; read-only; `skills/status` (`/brain:status`), `commands/status.toml`, `package.json` `status`
  - Verify: CLI seam on every fixture, tree hashed before and after; `bun run validate`
  - Files: scripts/workspace/status.ts, scripts/workspace/__tests__/status.test.ts, skills/status/SKILL.md, skills/status/agents/openai.yaml, commands/status.toml, package.json
  - Depends: T12, T14. Scope: M

### Checkpoint: phase 2
- [ ] `bun run check` green with both new steps; the parallel test passes ten runs in a row
- [ ] Review with Peter

## Phase 3: define phase

- [x] T17: domain-modeling's DEC format, with the ADR eval
  - Acceptance: documents T10's DEC schema in `DEC-FORMAT.md` and changes no field; eval `lifecycle/adr-is-dec` written first ("write an ADR for <decision>" in a fresh brain repo yields a `DEC-NNN` file with `kind: architecture` that passes `brain check`); `ADR-FORMAT.md` moved to `DEC-FORMAT.md`; "offer ADRs sparingly" becomes "record every decision; the three tests set the kind"; decisions created with `brain new-doc DEC`; the "keeps using that folder" line goes; the description drops "ADR"
  - Verify: `bun run lifecycle:check`; the eval's dry check; a filled DEC passes `brain check`
  - Files: skills/domain-modeling/{SKILL.md,DEC-FORMAT.md,agents/openai.yaml}, evals/lifecycle/adr-is-dec/*
  - Depends: T11. Scope: M
- [x] T18: the agent brief moved, and the Claude manifest's agent list
  - Acceptance: `skills/triage/AGENT-BRIEF.md` moved to `references/brain/agent-brief.md` (triage's link updated until T24); `.claude-plugin/plugin.json` lists every `agents/*.md`; `lifecycle:check` fails when that list misses one
  - Verify: `bun test scripts/lifecycle`; `bun run validate`
  - Files: references/brain/agent-brief.md, .claude-plugin/plugin.json, skills/triage/SKILL.md, scripts/lifecycle/
  - Depends: T08. Scope: S
- [x] T19: interview-me (a), the stateful map
  - Acceptance: always stateful; loads ask-user-question, domain-modeling and context-engineering; the chart (destination, breadth-first frontier, the IDEA file through `brain new-doc`, fog in "Not yet specified", blocking edges in a second pass); the row types (decide, research, do) and statuses; every resolved row links to a `DEC` or `RES` file; no repo: the map lives in the conversation, said so
  - Verify: `bun run lifecycle:check`; a charted fixture idea passes `brain check`
  - Files: skills/interview-me/SKILL.md
  - Depends: T11, T12, T17. Scope: M
- [ ] T20: interview-me (b), the loop, with the resume eval
  - Acceptance: eval `lifecycle/interview-resume` written first (a new session, given only the idea file, takes the next frontier row and asks no settled question); decide rows one question per call; a `DEC` the moment the user decides; re-map after every resolved row of every type, written to disk; single writer; the session ends only between rows; resume from the idea's `status`; finding the active effort; the finish (restate, explicit yes, hand-off to spec-driven-development)
  - Verify: `bun run lifecycle:check`; the eval's dry check
  - Files: skills/interview-me/SKILL.md, evals/lifecycle/interview-resume/*
  - Depends: T19. Scope: M
- [x] T21: interview-me (c), delegating research
  - Acceptance: before any edit, one throwaway sub-agent writes a `RES-999-probe.md` file in a temp folder, to confirm Claude Code lets a sub-agent write a RES name (then delete it); `skills/interview-me/RESEARCH.md` holds the brief (writing-for-agents; `references/brain/agent-brief.md` read as a reference; `brain new-doc RES`; findings written as confirmed; the optional validator from `brain sdd-cache lookup` when it answers; path-only reply; no other agents); `claude/agents/researcher.md` with `disallowedTools: Agent` and "Follow the research brief you are given.", listed in `.claude-plugin/plugin.json`; other hosts use their general-purpose agent with the same brief
  - Verify: `bun run lifecycle:check`; `bun run validate`
  - Files: skills/interview-me/{SKILL.md,RESEARCH.md}, claude/agents/researcher.md, .claude-plugin/plugin.json
  - Depends: T18, T19. Scope: M
- [ ] T22: idea-refine seeded and changed
  - Acceptance: idea-refine leaves the agent-skills take list for the seed list; `bun run sync -- --seed agent-skills` records it; the save step uses `brain new-doc IDEA <slug>` with the section mapping from the Decisions row; ideate rows resolve to a `DEC`; questions through ask-user-question, one per call; `scripts/idea-refine.sh` deleted; `examples.md` and `frameworks.md` fixed
  - Verify: `bun run sync -- --check`; `bun run lifecycle:check`
  - Files: upstream.json, upstream.lock.json, skills/idea-refine/{SKILL.md,examples.md,frameworks.md}, skills/idea-refine/scripts/idea-refine.sh
  - Depends: T11, T20. Scope: M
- [ ] T23: wayfinder retired
  - Acceptance: `skills/wayfinder` deleted, with its seed entry and lock entries; mentions removed from `README.md`, brain's specs and `using-brain` (its wayfinder lines only; the full rewrite is T28); `lifecycle:check` fails on a mention outside `CHANGELOG.md` and history; a changeset marked breaking with Peter's wayfinder text
  - Verify: `bun run check`; `bun run validate`
  - Files: skills/wayfinder/, skills/using-brain/SKILL.md, upstream.json, upstream.lock.json, README.md, spec/SPEC-{lifecycle,setup,upstream-sync}.md, scripts/lifecycle/, .changeset/<name>.md
  - Depends: T21. Scope: M
- [ ] T24: triage retired
  - Acceptance: `skills/triage` deleted, with its seed entry and lock entries; mentions removed outside history, including `using-brain`'s triage lines; `lifecycle:check` fails on a stray one; the breaking changeset gains "triage is removed; re-seed it from mattpocock/skills if you need it."
  - Verify: `bun run check`; `bun run validate`
  - Files: skills/triage/, skills/using-brain/SKILL.md, upstream.json, upstream.lock.json, README.md, spec/*, scripts/lifecycle/, .changeset/<name>.md
  - Depends: T18, T23. Scope: M
- [ ] T25: setup-brain without a tracker
  - Acceptance: `write.ts` stops writing `issue-tracker.md` and `triage-labels.md`; the four templates are deleted; the tracker question leaves `SKILL.md`; the eval grader `issue-tracker-md.md` and the scaffold lines go
  - Verify: `bun test scripts/setup`; `bun run check`
  - Files: scripts/setup/write.ts, scripts/setup/__tests__/write.test.ts, skills/setup-brain/{SKILL.md,issue-tracker-*.md,triage-labels.md}, evals/setup/fresh-repo/graders/issue-tracker-md.md, evals/setup/second-run/scaffold.sh
  - Depends: T24. Scope: M

### Checkpoint: phase 3
- [ ] No wayfinder or triage mention outside history; `bun run check` green
- [ ] Review with Peter

## Phase 4: build-phase paths and the router

- [ ] T26: commands on spec folders, with the build eval
  - Acceptance: eval `lifecycle/build-clean-context` moved first (`/build` runs a task from `docs/specs/SPEC-001-<slug>/` with its block from `todo.md`); `/spec`, `/plan`, `/build` (Claude and Gemini) find the active spec through `workspace.md`; `/build` hands a sub-agent its block, the sub-agent ticks only its own boxes, and the main session updates the row in `plan.md`; the clean-baseline list names `docs/specs/SPEC-NNN-<slug>/`
  - Verify: `bun run lifecycle:check`; `bun run validate`; the eval's dry check
  - Files: .claude/commands/{build,plan,spec}.md, commands/{build,planning,spec}.toml, evals/lifecycle/build-clean-context/*
  - Depends: T14. Scope: M
- [ ] T27: lifecycle skills on spec folders
  - Acceptance: spec-driven-development writes `spec.md` through `brain new-doc SPEC` with `sources:`; planning-and-task-breakdown writes the plan table and the todo blocks in the decided format; incremental-implementation, code-review-and-quality and test-driven-development read the workspace paths
  - Verify: `bun run lifecycle:check`
  - Files: skills/{spec-driven-development,planning-and-task-breakdown,incremental-implementation,code-review-and-quality,test-driven-development}/SKILL.md
  - Depends: T14. Scope: M
- [ ] T29: path updates to the other existing evals
  - Acceptance: `lifecycle/plan-three-questions` and any other existing case that names `SPEC.md`, `spec/`, `tasks/` or `CONTEXT.md` use the new paths; no new case
  - Verify: `bun test scripts/evals`; each dry check
  - Files: evals/lifecycle/*
  - Depends: T26, T27. Scope: S

- [ ] T41: `brain plan`
  - Acceptance: read-only; from a spec's `tasks/plan.md` rows (T14's map parser) and its `tasks/todo.md` blocks it prints the waves (each wave is the frontier once the waves above it are done), the critical path, for each wave the files more than one of its tasks touches (from "Files likely touched"), and which phases overlap (a phase's tasks are its checkpoint row's blockers); `--json` gives the same data; exit 1 on a cycle or an unknown blocker; `package.json` gains `plan`
  - Verify: CLI seam on fixtures (a linear plan, a wide plan, a cycle); the tree hashed before and after
  - Files: scripts/workspace/plan.ts, scripts/workspace/__tests__/plan.test.ts, scripts/brain.ts, fixtures, package.json
  - Depends: T14. Scope: M
- [ ] T42: checkpoint rows checked by `brain check`
  - Acceptance: a checkpoint row's phase is its blockers; `brain check` reports a task that depends, directly or through other tasks, on a task in the phase but is not blocked, directly or through other tasks, by the checkpoint; and a task the checkpoint blocks that depends on no task in the phase; one finding line each
  - Verify: CLI seam, one fixture per finding and a clean one
  - Files: scripts/workspace/check.ts, scripts/workspace/__tests__/check.test.ts, fixtures
  - Depends: T41. Scope: S
- [ ] T43: the "Parallel waves" section in every plan
  - Acceptance: planning-and-task-breakdown writes a "Parallel waves" section into `tasks/plan.md` from `brain plan` output, never by hand, and runs `brain plan` again whenever an edge changes; `brain check` fails, with one finding line, when a plan with rows lacks the section or the section differs from a fresh `brain plan` output
  - Verify: CLI seam (missing, stale, current); `bun run lifecycle:check`
  - Files: skills/planning-and-task-breakdown/SKILL.md, scripts/workspace/check.ts, scripts/workspace/plan.ts, scripts/workspace/__tests__/check.test.ts
  - Depends: T27, T41, T42. Scope: M
- [ ] T44: `max_parallel`
  - Acceptance: `docs/agents/workspace.md` frontmatter takes `max_parallel`, default 8; `BRAIN_MAX_PARALLEL` overrides it; the config reader returns it and rejects a value below 1; the template names it; `brain plan` prints the cap and, for each wave, how many tasks start at once
  - Verify: CLI seam
  - Files: scripts/workspace/config.ts, skills/setup-brain/workspace.md, scripts/workspace/plan.ts, scripts/workspace/__tests__/plan.test.ts
  - Depends: T41. Scope: S
- [ ] T45: `/build auto` and incremental-implementation run the frontier in parallel, with the build eval
  - Acceptance: eval `lifecycle/build-parallel` written first (a plan whose frontier is five tasks wide: `/build auto` starts five sub-agents, each worktree based on the branch head, and never fewer without a stated reason); the commands and the skill carry the Decisions row "Parallel build by default" in full: every task on the frontier at once, up to the cap; a stated reason for fewer; the critical path first; a worktree from the feature branch's head, the install step first; the main session merges one at a time, critical path first, runs the gate after each merge, is the only writer of plan rows and todo ticks, and tells an in-flight task to rebase when a merge changes what it depends on; result files named after the task, and the reply the path plus one line
  - Verify: `bun run lifecycle:check`; `bun run validate`; the eval's dry check
  - Files: .claude/commands/build.md, commands/build.toml, skills/incremental-implementation/SKILL.md, evals/lifecycle/build-parallel/*
  - Depends: T26, T27, T41, T44. Scope: M
- [ ] T46: interview-me starts research rows in parallel, with the research eval
  - Acceptance: eval `lifecycle/interview-parallel-research` written first (an idea with three research rows on its frontier: interview-me starts all three at once); interview-me starts every research row on the frontier at once, up to the cap; on Claude Code with `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` the research rows may run as an agent team, each teammate writing its own RES file through `brain new-doc`; the build stays on worktree sub-agents
  - Verify: `bun run lifecycle:check`; the eval's dry check
  - Files: skills/interview-me/{SKILL.md,RESEARCH.md}, evals/lifecycle/interview-parallel-research/*
  - Depends: T21, T44. Scope: M

### Checkpoint: phase 4
- [ ] `bun run check` green; every eval dry check passes
- [ ] Review with Peter

## Phase 5: the protocol

- [x] T30: `render.ts` takes several sources (prefactor)
  - Acceptance: the render pipeline renders more than one source text to its targets; plain talk's outputs stay byte-identical
  - Verify: `bun test scripts/plain-talk`; `bun run plain-talk:render -- --check`
  - Files: scripts/plain-talk/render.ts, scripts/plain-talk/__tests__/render.test.ts
  - Depends: none. Scope: S
- [ ] T31: the protocol, rendered per host
  - Acceptance: `protocol/PROTOCOL.md` from the intent doc's draft, with "the user", the new-doc-only rule, the soft skill line, the status fallback and the task-end `brain check`; rendered into Gemini's context file, an Antigravity always-on rule and the Codex block
  - Verify: `bun run plain-talk:render -- --check`; `bun test scripts/plain-talk`
  - Files: protocol/PROTOCOL.md, plain-talk/templates/*, scripts/plain-talk/render.ts, rendered outputs
  - Depends: T16, T30. Scope: M
- [ ] T32: the Claude `SessionStart` hook
  - Acceptance: `scripts/hooks/claude-code.json` (startup, clear, compact) runs `scripts/hooks/session-start.ts`, which prints JSON with `additionalContext` = protocol + five lines + `STATUS.md` text, under 10,000 characters; `.claude-plugin/plugin.json` names the file in `hooks`; `lifecycle:check` fails on `hooks/hooks.json` or a root `hooks.json`
  - Verify: spawn the hook on each fixture; `bun run validate`
  - Files: scripts/hooks/claude-code.json, scripts/hooks/session-start.ts, scripts/hooks/__tests__/session-start.test.ts, .claude-plugin/plugin.json, scripts/lifecycle/
  - Depends: T16, T31. Scope: M

### Checkpoint: phase 5
- [ ] The hook's output is under 10,000 characters on every fixture; `bun run check` green
- [ ] Review with Peter

## Phase 6: install

- [ ] T33: setup-brain's install writer, with the fresh-repo eval
  - Acceptance: eval `setup/fresh-repo-resume` written first (after `/setup-brain` in a fresh repo, a new session reports its phase and next step, and `AGENTS.md` holds no brain text); setup-brain checks for bun first and says plainly that brain needs it; writes `workspace.md`, the `STATUS.md` seed and `domain.md`; the Codex block carries plain talk and the protocol; `--check` reports drift and writes nothing; idempotent; `setup/fresh-repo` and `setup/second-run` updated for the new files
  - Verify: `bun test scripts/setup`; the evals' dry checks
  - Files: scripts/setup/write.ts, scripts/setup/__tests__/write.test.ts, skills/setup-brain/{SKILL.md,STATUS.md}, evals/setup/*
  - Depends: T25, T31, T32. Scope: M
- [ ] T34: `capabilities.md` detection
  - Acceptance: proposes library skills from dependencies matched against installed skills, servers from `.mcp.json`, toolchain checks from `engines` or `packageManager`; writes `capabilities.md` from its template after the user's yes
  - Verify: `bun test scripts/setup`
  - Files: scripts/setup/capabilities.ts, scripts/setup/__tests__/capabilities.test.ts, skills/setup-brain/capabilities.md, skills/setup-brain/SKILL.md
  - Depends: T33. Scope: M
- [ ] T28: using-brain, the 1% rule, phase boundaries, with the two evals (moved here from phase 4)
  - Acceptance: evals `lifecycle/skill-not-skipped` and `lifecycle/no-overload` written first; every change in the intent doc's `using-brain` table; Skill Rule 1 carries the 1% rule and the rejected thoughts, ported from Peter's hand-written `AGENTS.md`; the lifecycle sequence folded to one line per stage; `references/brain/phase-boundaries.md` says the files carry the work; `lifecycle:check` fails when `using-brain` names a missing skill or misses one
  - Verify: `bun test scripts/lifecycle`; the two evals' dry checks
  - Files: skills/using-brain/SKILL.md, references/brain/phase-boundaries.md, scripts/lifecycle/, evals/lifecycle/{skill-not-skipped,no-overload}/*
  - Depends: T16, T21, T23, T24, T31, T33, T34 (moved to phase 6 at plan review). Scope: M
- [ ] T35: the overlap report
  - Acceptance: maps each `AGENTS.md` heading to a protocol section or to `capabilities.md`; flags orphan lines and keeps them; says so and recommends report-only when git history shows other authors; one multi-select question; the `AGENTS.md` change is its own commit; `CLAUDE.md` overlap reported only; spec success criterion 13 on the `resume/AGENTS.md` fixture (copy at `ac74fb5`)
  - Verify: `bun test scripts/setup`
  - Files: scripts/setup/overlap.ts, scripts/setup/__tests__/overlap.test.ts, fixture, skills/setup-brain/SKILL.md
  - Depends: T34. Scope: M
- [ ] T36: migrate mode (a), specs, plans and todos
  - Acceptance: `SPEC.md`, `spec/*.md`, `tasks/plan.md` and `tasks/todo.md` move with `git mv` into `docs/specs/SPEC-NNN-<slug>/`, gaining frontmatter only; the skill asks which plan belongs to which spec, one question per call
  - Verify: `bun test scripts/setup` on the 0.8 fixture; bodies byte-compared
  - Files: scripts/setup/migrate.ts, scripts/setup/__tests__/migrate.test.ts, skills/setup-brain/SKILL.md
  - Depends: T13, T33. Scope: M
- [ ] T37: migrate mode (b), intent docs and the tracker files
  - Acceptance: `docs/intent/*.md` become IDEA files with `git mv` after the skill asks which ones, one question per call; `docs/agents/issue-tracker.md` and `triage-labels.md` are removed only with the user's yes
  - Verify: `bun test scripts/setup`
  - Files: scripts/setup/migrate.ts, scripts/setup/__tests__/migrate.test.ts, skills/setup-brain/SKILL.md
  - Depends: T25, T36. Scope: M
- [ ] T38: migrate mode (c), the rest, with the migrate eval
  - Acceptance: eval `setup/migrate-08` written first (a 0.8-layout fixture, migrated, passes `brain check`); `0001-<slug>.md` ADRs become `DEC` files; the ADR-folder move is offered, one question per repo; `workspace.md` records `layout: 2`; one commit for the whole run; nothing deleted without a yes; T05's glossary move and T13's frontmatter step are reused, not repeated
  - Verify: `bun test scripts/setup`; the eval's dry check
  - Files: scripts/setup/migrate.ts, scripts/setup/__tests__/migrate.test.ts, skills/setup-brain/SKILL.md, evals/setup/migrate-08/*
  - Depends: T05, T35, T37 (its eval runs the whole setup-brain flow, overlap step included). Scope: M

### Checkpoint: phase 6
- [ ] The full suite once; `bun run validate`; code-review-and-quality over the branch
- [ ] T35's overlap report on brain's own `AGENTS.md`, report-only, for Peter to decide what the protocol now covers
- [ ] Review with Peter; push and open PR 2 only after his yes

## Phase 7: brain's history (after a second ask) and the fallback's end (in 0.11.0); separate PRs

- [ ] T39: brain's `spec/` and `tasks/done/` through the migrate mode
  - Acceptance: run only after Peter's yes; moves with `git mv`; bodies unchanged; `brain check` green
  - Verify: `bun run check`
  - Files: spec/, tasks/done/, docs/specs/
  - Depends: T38. Scope: L (a move; no body changes)

- [ ] T40: remove the old-glossary fallback, in the release that ships 0.11.0
  - Acceptance: runs after the workspace release (0.10.0), in the release that ships 0.11.0; the fallback sentence leaves `plain-talk/PLAIN-TALK.md` (re-rendered) and `skills/setup-brain/domain.md`; `checkFallbackExpiry`, `fallbackRemovedIn` and their tests leave `scripts/lifecycle/names.ts`, and `write.test.ts` stops expecting the sentence; the rename guard and `--rename-glossary` stay; a changeset says brain no longer reads `CONTEXT.md` in place of `GLOSSARY.md`
  - Verify: `bun run check`; `bun run plain-talk:render -- --check`
  - Files: plain-talk/PLAIN-TALK.md, rendered outputs, skills/setup-brain/domain.md, scripts/lifecycle/{names.ts,check-refs.ts}, scripts/lifecycle/__tests__/names.test.ts, scripts/setup/__tests__/write.test.ts, .changeset/<name>.md
  - Depends: the 0.10.0 release. Scope: S

### Checkpoint: phase 7
- [ ] `bun run check` green; review with Peter; PR 3 only after his yes
