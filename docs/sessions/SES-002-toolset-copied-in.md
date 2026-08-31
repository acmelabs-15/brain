# 2026-08-31 08:22 · The toolset copied into the plugin — PLAN-001 Part 2

- Goal: PLAN-001 Part 2 — every skill, command, agent and reference from `~/.claude`, and the `ask-user-question` plugin with its history, copied into this plugin as they stand; the layout that holds them; `brain` 0.4.0 validating and loading with every `brain:` name; nothing deleted at the sources (that is Part 6).
- Status: done
- Plan: PLAN-001 · part 2
- Outcome: PLAN-001 Part 2 done. Delivered: `brain` 0.4.0 carrying the whole toolset — 47 skills (the `ask-user-question` repo merged in with its 196 commits, `b1202e4`; 45 copied from `~/.claude/skills`), 11 commands, 4 agents, 9 references, `LOCAL-CHANGES.md` frozen; the gate's rule that a merge of unrelated histories accounts for what it brought in (`514174e`); `CONTEXT-MAP.md` naming the carried vocabularies; the `plugin-reviewer` run with no Critical and its sweep written into Part 6; the references audit (Part 5 Task 3) placed on its measured premise. Verified: `validate --strict` on both manifests, 43 `brain:` names loading headless, `bun test` 28/0, `tsc` clean, the gate green over 290-odd commits. Not done, by design: nothing deleted at the sources; the cross-reference sweep (Part 6); the reinstall (Part 3 Task 3, next).

## Narrative

Started 2026-08-31 right after SES-001 closed (Part 1 done). Peter: "I'm not doing that. I'd like you to do it" — the outward steps that had been held for him (push, archive, and soon the reinstall) are this conversation's to run, asked once. The copy comes before the reinstall so the reinstall happens once, with everything (ANA-003 F8).

The order of work: the gate first (`514174e` — a merge of unrelated histories accounts for what it brought in, because the ask-user-question repo's note names only 91 of its 196 commits), then that repo merged in (`b1202e4`, a merge commit the gate excludes: `git fetch ~/Dev/ACMElabs/ask-user-question main`, `--allow-unrelated-histories --no-commit`, six add/add conflicts — `.claude-plugin/plugin.json`, `.gitignore`, `bun.lock`, `package.json`, `README.md`, `tsconfig.json` — all resolved to this repo's files; its `ANALYSIS-001..007` and `SKILL-001` notes archived under `docs/analysis/archive/acmelabs-15-ask-user-question/`, its `SESSION-2026-08-23_01` note under `docs/sessions/archive/acmelabs-15-ask-user-question/`, each behind a README pointer; its `evals/` and `Makefile` under `skills/ask-user-question/evals/` with the Makefile's `ROOT` and `EVALS` repointed; 285 commits on `main` after it), then the copy (`a1c8398`). What the copy had to bend, and why, is in that entry's Notes; the principle held — no skill body changed.

Peter, seeing `references/` arrive: "it's very possible we don't need a lot of these anymore and we could probably restore a lot of the skills referencing these to what they were originally, esp. the Addy Osmani agent-skills." Measured before answering: who cites what — `accessibility-checklist` ← shipping-and-launch, frontend-ui-engineering; `definition-of-done` ← using-agent-skills, planning-and-task-breakdown, incremental-implementation, shipping-and-launch; `issue-tracker` ← wayfinder, choosing-a-skill, code-review, to-tickets, to-spec, triage; `observability-checklist` ← observability-and-instrumentation; `orchestration-patterns` ← choosing-a-skill, doubt-driven-development, `/ship`, all four agents; `performance-checklist` ← shipping-and-launch, code-review-and-quality, performance-optimization, web-performance-auditor; `project-docs-conventions` ← `/spec`, `/plan`, LOCAL-CHANGES; `security-checklist` ← shipping-and-launch, code-review-and-quality, security-and-hardening; `testing-patterns` ← test-driven-development. Seven of the nine are upstream Addy files, not local inventions; two are local. The Addy skills' drift from upstream is 0–8 lines each, bar the two that carry ADR-022's plan edits (37 and 20 lines). So the audit is a real task with a small blast radius: PLAN-001 Part 5 Task 3, decided reference by reference with him, after Part 2 — not inside the copy, which is "as they stand".

His reason, next: the references were there because not all of Addy's skills, commands and agents were installed at first, and now they all are. Tested against the reference checkout: the seven upstream references are byte-identical here and cited by upstream's own skills — the same citers — so they are the package's design, not stand-ins; all 24 upstream skills are present; the four agents drift 2–8 lines (a local "Project vocabulary" section, a local pointer to `orchestration-patterns`); upstream's commands are `.toml`, so the eight `.md` commands are local renderings. The premise holds only for what was local all along: `issue-tracker.md`, `project-docs-conventions.md`, and the `orchestration-patterns` pointers added to `/ship`, the agents and `choosing-a-skill`. Task 3's text now says so, so the audit starts from the measured state.

Part 2's checkpoint: the `plugin-kit:plugin-reviewer` agent, run once over 0.4.0, in the background while the record was written. Verdict: no Critical; the plugin installs, validates and loads as measured; every load-bearing defect belongs to Part 6's sweep, which it measured larger than the plan had it — 153 bare sibling references (the plan said 75, counted differently), the eight command names in 30 files, 27 component files anchoring `references/` through `~/.claude/`, subagents dispatched by bare name in `/ship` and `/webperf`, three relative-path anchors no `~/.claude` grep catches, `choosing-a-skill` a router for a world that ends at Part 6. Its cheap findings landed as `41ebf38`; the rest is Part 6 Task 1's text, numbers included. Nothing it found argued against the copy-first order.

## Changes (one entry per commit, in order)

### 2026-08-31 · feat(tool): a merge of unrelated histories accounts for the history it brought in — git merge-base finds no common ancestor, so every commit reachable from the foreign parent is that repository's to have recorded · 514174e

- Summary: The gate treats a merge of unrelated histories as accounting for every commit it brought in: `foreignShas()` finds each merge whose parents share no ancestor (`git merge-base` exits 1) and excludes the foreign parent's whole ancestry from `missingCommits()`. SES-002 started for Part 2 in the same commit.
- Why: the ask-user-question repo was about to merge in with 196 commits, and its session note names 91 of them, so the archived-log reader (`2322745`) could not cover it; the merge itself is the honest boundary — that repository's past is its own log's to have recorded. The same rule covers the sessions merge (`5b89ce6`, whose parents also share no ancestor).
- Files:
  - `docs/plan/PLAN-001-record-and-rehydration-split.md` (+1/−1) — Part 2's status line: `in progress (session SES-002)`
  - `docs/sessions/README.md` (+1/−0) — SES-002 in the index (tool-regenerated)
  - `docs/sessions/SES-002-toolset-copied-in.md` (+12/−0) — Goal, `Plan: PLAN-001 · part 2`, opening Narrative
  - `skills/session/SKILL.md` (+3/−2) — the merge gotcha says a merge of another repository's history accounts for what it brought in, its archived log the record
  - `skills/session/scripts/__tests__/cli.test.ts` (+49/−0) — a repo with a complete log merges in an unrelated repo with two commits: the gate stays green; then an ordinary `--no-ff` branch merge: its commit is reported missing
  - `skills/session/scripts/cli.ts` (+27/−2) — `foreignShas()` (`git log --merges --format=%H %P`, `git merge-base` per merge, `git rev-list` of the foreign parent); `missingCommits()` skips them first; USAGE says so
- Notes: Verified: `bun test` 28/0 (the new test included), `tsc`, the gate here green before the merge. The archived-log reader stays — ADR-003 names it, and it costs 15 lines; the two rules overlap on the sessions merge and only the new one covers ask-user-question.

### 2026-08-31 · feat(plugin): brain 0.4.0 — the toolset copied in as it stands: 45 skills from ~/.claude/skills, the 8 commands, the 4 agents, the 9 references, LOCAL-CHANGES.md frozen; the ask-user-question skill's evals typecheck here and its script-style checks no longer end bun test early · a1c8398

- Summary: The whole toolset is in the plugin: 45 skills from `~/.claude/skills` beside the two already here (session; ask-user-question from its merge, `b1202e4`), the 8 commands beside the three session ones, the 4 agents, the 9 references, `LOCAL-CHANGES.md` frozen with a header; `brain` 0.4.0 in both manifests; `CONTEXT-MAP.md` names the vocabularies the carried skills bring. The sources under `~/.claude` are untouched (Part 6).
- Why: PLAN-001 Part 2 (ANA-003 F8, Peter: copy sooner, delete nothing) — every later edit to a carried file is a tracked commit here, and the one reinstall (Part 3 Task 3) installs everything.
- Files:
  - `.claude-plugin/marketplace.json` (+1/−1) — the plugin `brain` 0.4.0
  - `.claude-plugin/plugin.json` (+2/−2) — version 0.4.0; the description says the plugin carries the whole toolset as `brain:<name>`
  - `CONTEXT-MAP.md` (+23/−2) — § The carried skills' vocabularies — deep modules, loops, the triage roles, ask-user-question's words — and the collision rule for *brief*, *session*, *record*; the docs system's reference path is `references/project-docs-conventions.md` now
  - `agents/code-reviewer.md` (+106/−0) — copied as it stood from `~/.claude/agents/` — the `code-reviewer` persona
  - `agents/security-auditor.md` (+112/−0) — copied as it stood from `~/.claude/agents/` — the `security-auditor` persona
  - `agents/test-engineer.md` (+99/−0) — copied as it stood from `~/.claude/agents/` — the `test-engineer` persona
  - `agents/web-performance-auditor.md` (+184/−0) — copied as it stood from `~/.claude/agents/` — the `web-performance-auditor` persona
  - `bun.lock` (+3/−0) — `tiktoken` pinned (ask-user-question's evals import it)
  - `commands/build.md` (+49/−0) — copied as it stood from `~/.claude/commands/` — `/brain:build` once installed; still names its skill bare (Part 6's sweep)
  - `commands/code-simplify.md` (+26/−0) — copied as it stood from `~/.claude/commands/` — `/brain:code-simplify` once installed; still names its skill bare (Part 6's sweep)
  - `commands/plan.md` (+21/−0) — copied as it stood from `~/.claude/commands/` — `/brain:plan` once installed; still names its skill bare (Part 6's sweep)
  - `commands/review.md` (+16/−0) — copied as it stood from `~/.claude/commands/` — `/brain:review` once installed; still names its skill bare (Part 6's sweep)
  - `commands/ship.md` (+72/−0) — copied as it stood from `~/.claude/commands/` — `/brain:ship` once installed; still names its skill bare (Part 6's sweep)
  - `commands/spec.md` (+21/−0) — copied as it stood from `~/.claude/commands/` — `/brain:spec` once installed; still names its skill bare (Part 6's sweep)
  - `commands/test.md` (+19/−0) — copied as it stood from `~/.claude/commands/` — `/brain:test` once installed; still names its skill bare (Part 6's sweep)
  - `commands/webperf.md` (+32/−0) — copied as it stood from `~/.claude/commands/` — `/brain:webperf` once installed; still names its skill bare (Part 6's sweep)
  - `package.json` (+2/−1) — version 0.4.0; `tiktoken` as a devDependency
  - `references/accessibility-checklist.md` (+160/−0) — copied as it stood from `~/.claude/references/`
  - `references/definition-of-done.md` (+67/−0) — copied as it stood from `~/.claude/references/`
  - `references/issue-tracker.md` (+63/−0) — copied as it stood from `~/.claude/references/`
  - `references/observability-checklist.md` (+91/−0) — copied as it stood from `~/.claude/references/`
  - `references/orchestration-patterns.md` (+370/−0) — copied as it stood from `~/.claude/references/`
  - `references/performance-checklist.md` (+153/−0) — copied as it stood from `~/.claude/references/`
  - `references/project-docs-conventions.md` (+251/−0) — copied as it stood from `~/.claude/references/`
  - `references/security-checklist.md` (+205/−0) — copied as it stood from `~/.claude/references/`
  - `references/testing-patterns.md` (+235/−0) — copied as it stood from `~/.claude/references/`
  - `skills/LOCAL-CHANGES.md` (+43/−0) — `~/.claude/skills/LOCAL-CHANGES.md` frozen with a header line: git history records every edit from here
  - `skills/api-and-interface-design/SKILL.md` (+369/−0) — copied as it stood from `~/.claude/skills/api-and-interface-design/`
  - `skills/ask-user-question/evals/Makefile` (+2/−2) — from the merge (`b1202e4`), unchanged here
  - `skills/ask-user-question/evals/TRUSTWORTHINESS.md` (+4/−4) — from the merge (`b1202e4`), unchanged here
  - `skills/ask-user-question/evals/assert-skill-absent.check.ts` (+194/−0) — renamed from `.test.ts`: it calls `process.exit` at module level and ended `bun test` before the session tests ran; its Makefile and header run it by name
  - `skills/ask-user-question/evals/assert-skill-absent.test.ts` (+0/−194) — renamed to `.check.ts` (see that line)
  - `skills/ask-user-question/evals/composition/LINT-RULES-PENDING.md` (+3/−3) — from the merge (`b1202e4`), unchanged here
  - `skills/ask-user-question/evals/composition/checks.check.ts` (+339/−0) — renamed from `.test.ts`: it calls `process.exit` at module level and ended `bun test` before the session tests ran; its Makefile and header run it by name
  - `skills/ask-user-question/evals/composition/checks.quarantined.check.ts` (+102/−0) — renamed from `.test.ts`: it calls `process.exit` at module level and ended `bun test` before the session tests ran; its Makefile and header run it by name
  - `skills/ask-user-question/evals/composition/checks.quarantined.test.ts` (+0/−102) — renamed to `.check.ts` (see that line)
  - `skills/ask-user-question/evals/composition/checks.test.ts` (+0/−339) — renamed to `.check.ts` (see that line)
  - `skills/ask-user-question/evals/frontmatter.check.ts` (+198/−0) — renamed from `.test.ts`: it calls `process.exit` at module level and ended `bun test` before the session tests ran; its Makefile and header run it by name
  - `skills/ask-user-question/evals/frontmatter.test.ts` (+0/−198) — renamed to `.check.ts` (see that line)
  - `skills/ask-user-question/evals/history/disclosure-comparison.html` (+1/−1) — from the merge (`b1202e4`), unchanged here
  - `skills/ask-user-question/evals/history/trigger-runner.ts` (+3/−2) — two `noUncheckedIndexedAccess` errors under this repo's `tsconfig`: `finish(m[1] ?? "")`, and `--target`'s value read into a local before the check
  - `skills/browser-testing-with-devtools/SKILL.md` (+317/−0) — copied as it stood from `~/.claude/skills/browser-testing-with-devtools/`
  - `skills/choosing-a-skill/SKILL.md` (+244/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/evals.json` (+83/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/benchmark.json` (+313/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/benchmark.md` (+13/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/feedback.json` (+15/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/intermittent-bug-routing/eval_metadata.json` (+11/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/intermittent-bug-routing/with_skill/grading.json` (+108/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/intermittent-bug-routing/with_skill/outputs/response.md` (+13/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/intermittent-bug-routing/with_skill/outputs/routing.md` (+34/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/intermittent-bug-routing/with_skill/timing.json` (+1/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/intermittent-bug-routing/without_skill/grading.json` (+112/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/intermittent-bug-routing/without_skill/outputs/response.md` (+24/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/intermittent-bug-routing/without_skill/outputs/routing.md` (+46/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/intermittent-bug-routing/without_skill/timing.json` (+1/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/review-and-simplify-collisions/eval_metadata.json` (+11/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/review-and-simplify-collisions/with_skill/grading.json` (+104/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/review-and-simplify-collisions/with_skill/outputs/response.md` (+11/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/review-and-simplify-collisions/with_skill/outputs/routing.md` (+74/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/review-and-simplify-collisions/with_skill/timing.json` (+1/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/review-and-simplify-collisions/without_skill/grading.json` (+108/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/review-and-simplify-collisions/without_skill/outputs/response.md` (+12/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/review-and-simplify-collisions/without_skill/outputs/routing.md` (+69/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/review-and-simplify-collisions/without_skill/timing.json` (+1/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/small-change-no-ceremony/eval_metadata.json` (+11/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/small-change-no-ceremony/with_skill/grading.json` (+100/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/small-change-no-ceremony/with_skill/outputs/response.md` (+13/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/small-change-no-ceremony/with_skill/outputs/routing.md` (+59/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/small-change-no-ceremony/with_skill/timing.json` (+1/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/small-change-no-ceremony/without_skill/grading.json` (+104/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/small-change-no-ceremony/without_skill/outputs/response.md` (+3/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/small-change-no-ceremony/without_skill/outputs/routing.md` (+59/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-1/small-change-no-ceremony/without_skill/timing.json` (+1/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-10/logging-build-vs-advise/logging-prompt-with-skill/outputs/response.md` (+27/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-10/logging-build-vs-advise/logging-prompt-with-skill/outputs/routing.md` (+54/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-10/logging-build-vs-advise/logging-prompt-with-skill/timing.json` (+1/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-10/logging-build-vs-advise/payments-prompt-with-skill/outputs/response.md` (+13/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-10/logging-build-vs-advise/payments-prompt-with-skill/outputs/routing.md` (+77/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - `skills/choosing-a-skill/evals/results/iteration-10/logging-build-vs-advise/payments-prompt-with-skill/timing.json` (+1/−0) — copied as it stood from `~/.claude/skills/choosing-a-skill/`
  - … +281 more (`git show --stat a1c8398`) — the rest of the 45 skills' files, each copied as it stood from `~/.claude/skills/<name>/`, and the rest of ask-user-question's evals from the merge
- Notes: Verified: `claude plugin validate . --strict` passes; a headless `claude --plugin-dir . -p` load lists 43 `brain:` names — the 35 model-invocable skills and the 8 commands (the 22 `disable-model-invocation` skills are hidden from the model's list by design; `session-start`, `-log`, `-close` are among the listed commands); `bun test` 28/0 across two files; `tsc --noEmit` clean; the copied skills' `name` fields all match their directories (checked on the scratch clone in ANA-003 F8). Four changes on the way in, each forced by this repo's gates and none to a skill body: `tiktoken` added as a devDependency (ask-user-question's evals import it; its own `package.json` had it); two `noUncheckedIndexedAccess` errors in `evals/history/trigger-runner.ts` fixed; three of its `*.test.ts` files renamed `*.check.ts` because they call `process.exit` at module level, which ended `bun test` after three files with a green exit and the session tests never run — a false pass at the root gate (its Makefile and their own headers run them by name); the Makefile's `ROOT` and `EVALS` repointed for its new place under the skill. Unverified: whether ask-user-question's Makefile targets still run end to end from the new location — Part 6's sweep. The personal copy of ask-user-question under `~/.claude/skills` is byte-identical to the repo's skill, so nothing was lost by taking the repo's. Part 2's checkpoint — the `plugin-kit:plugin-reviewer` run — is in the Narrative.

### 2026-08-31 · docs(plan): PLAN-001 Part 5 Task 3 — the references audit: seven of the nine are upstream Addy files, two local; restore the skills whose only drift was a pointer · 10888ad

- Summary: PLAN-001 Part 5 gains Task 3, the references audit — per reference: who cites it, whether any measured run reads it, whether the citing skill's drift was only the pointer; restore upstream text where it was, keep a reference only where a skill demonstrably loads it; the two deliberate edits stay — with the facts measured at the copy written into the task, and Part 5's graph showing it independent of Tasks 1 and 2.
- Why: Peter, on `references/` arriving with the copy. The copy is "as they stand", so the audit is its own task, decided reference by reference with him after Part 2.
- Files:
  - `docs/plan/PLAN-001-record-and-rehydration-split.md` (+22/−2) — Part 5 Task 3 with acceptance (every file left is read by a citing skill; every Addy skill whose only drift was a pointer is byte-identical to upstream again; the `CONTEXT.md` read rule and the plan's status lines named as the drift that remains) and verification (`diff -r` against the reference checkout per skill); the part's graph gains the task
  - `docs/sessions/SES-002-toolset-copied-in.md` (+2/−0) — the Narrative's citation map and the drift figures behind the task
- Notes: Measured, not guessed: the citation map is a grep over `skills`, `commands`, `agents` for `references/<name>`; the drift figures are `diff` line counts of each Addy `SKILL.md` against `~/Dev/reference/addy-osmani-agent-skills/skills/<name>/SKILL.md`; the upstream `references/` directory was listed. Not measured: whether any run reads a reference — that is the audit's own work (ANA-002's disclosure lesson gives the method).

### 2026-08-31 · docs(plan): Part 5 Task 3 starts from the measured state — the seven upstream references are Addy's design and byte-identical here; what is local is two files, the orchestration-patterns pointers and the .md commands · 9496da2

- Summary: Part 5 Task 3's text starts from the measured state instead of the premise: the seven upstream references stay as upstream ships them (byte-identical, cited by upstream's own skills); the audit decides the two local references, the local-only `orchestration-patterns` pointers and the intended drift of each Addy skill and agent; its acceptance names every line of drift as intended.
- Why: Peter's reason for the earlier remark — the references stood in for skills not yet installed, and now they all are — tested against `~/Dev/reference/addy-osmani-agent-skills` and found to hold only for what was local all along; a task chasing the wrong premise would have deleted files upstream's skills load.
- Files:
  - `docs/plan/PLAN-001-record-and-rehydration-split.md` (+16/−11) — Task 3's facts paragraph (the seven byte-identical and cited upstream; the local two; the local-only pointers; the agents' 2–8 lines; the `.md` commands as renderings of upstream's `.toml`), the audit restated as keep-the-seven-and-decide-the-rest, acceptance and verification per file
  - `docs/sessions/SES-002-toolset-copied-in.md` (+2/−0) — the Narrative paragraph with the test of the premise
- Notes: Measured: `cmp` of each of the seven against the checkout (all identical); a grep of upstream's `skills`, `commands`, `agents` for `references/<name>` (the same citers, `orchestration-patterns` cited upstream by `doubt-driven-development` only); `diff` line counts for the four agents; `comm` of upstream's 24 skill directories against `skills/` (none absent); upstream's `commands/` listed (`.toml`).

### 2026-08-31 · fix(plugin): the reviewer's cheap findings — the marketplace entry says the whole toolset, validate checks both manifests, the repo docs carry the counts, /build names /brain:session log; PLAN-001 Part 2 checkpoint done, Part 6 Task 1 carries the measured sweep · 41ebf38

- Summary: The `plugin-reviewer`'s cheap findings on 0.4.0 fixed — the marketplace entry describes the whole toolset as `plugin.json` does, `bun run validate` validates the plugin manifest and then the marketplace, the repo docs carry the real counts, `/build` names `/brain:session log` instead of the retired `/session entry` — and Part 2's checkpoint is ticked with its verdict; Part 6 Task 1 carries the reviewer's measured sweep.
- Why: Part 2's checkpoint: the reviewer run once, Critical findings fixed or reasoned, the rest listed for Part 6. It found no Critical; the High items are the sweep (H1 references anchored via `~/.claude`, H2 subagents dispatched by bare name, H3 153 bare sibling references — twice the plan's estimate); the Medium and Low items that touch this repo's own files were cheaper to fix than to list.
- Files:
  - `.claude-plugin/marketplace.json` (+1/−1) — the entry's description is `plugin.json`'s (L1: `plugin install` shows the marketplace's text)
  - `.claude/CLAUDE.md` (+2/−5) — the opening names 47 skills, 11 commands, 4 agents, 9 references; the `commands/` convention says the eight lifecycle commands are model-invocable as they stand and Part 6 decides the flag (L3, L4)
  - `README.md` (+3/−2) — the same counts; `/plan PLAN-NNN`'s section is Part 4 (L3)
  - `commands/build.md` (+1/−1) — step 8: `/brain:session log` (M1)
  - `docs/plan/PLAN-001-record-and-rehydration-split.md` (+26/−3) — Part 2's checkpoint ticked with the verdict; Part 6 Task 1 gains the sweep as measured (H1–H3, M2–M5, L4, L5, L7) and three acceptance lines with numbers
  - `package.json` (+1/−1) — `validate` runs `claude plugin validate .claude-plugin/plugin.json --strict && claude plugin validate . --strict` (L2: with both manifests present the bare form validates the marketplace and only cross-checks the plugin's version)
- Notes: Verified: `bun run validate` prints two passes; `docs/skills/` (L6, empty and untracked) removed. Not done here, on purpose: everything the reviewer put in Part 6 — the copies stay as they stand until the sweep; and L7 (ask-user-question's body over the token target) waits for that skill's next edit. The reviewer's full report is not in the repo; its substance is in Part 6 Task 1's text and in the Narrative.
