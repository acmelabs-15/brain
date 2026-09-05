# Dynamic batching experiment — protocol, results, findings (the evidence behind D-010)

Purpose: find how much work one primary-agent conversation can carry **without approaching context rot**, how much of it can run at the same time, and how the Teamwork runs behind it behave under load. Quota is not the objective. Every number below is either measured (with the command or file that produced it) or marked *to measure*. Every harness claim carries a citation; a behaviour the documentation does not state is written as `undocumented — probe`, never filled in.

D-010 records the values this document supports. `budget.ts` applies them live; this document is the record of how they were obtained and is appended to — §7 gets one block per run, §9 gets a dated findings section whenever a capture is analysed.

## 1. Architecture under test (D-014 → D-017)

The primary agent (one conversation) reads METHOD/STATE, writes an interview brief, dispatches Teamwork itself (`invoke_subagent` → `teamwork_preview`), waits on the run's files (`await-run.ts`), verifies with `quote-check.ts` and `coverage.ts`, records, commits. It never reads a source file for inventory and never writes a card. Inside the run, the Project Orchestrator surveys with explorers, fans units out to Workers (all at once), and the Critic, Auditor, Success Auditor and an independent post-victory audit judge against the interview rubric.

Where context rot can occur, and what bounds it:

| Where | Bound | How measured |
|---|---|---|
| Primary agent | the D-010 budget (§3) | `budget.ts --record` at start, run-start, dispatched, verified, close |
| Project Orchestrator (inside the run) | §6.5 unit caps; Teamwork's own succession | the run's `progress.md` / `handoff.md`, read after the run |
| Workers | one unit each, fresh context; ≤ 50 KB and ≤ 12 files | `quote-check.ts` FAIL rate per unit; empty required fields; worker compaction (transcripts, analysed after the fact) |

## 2. Baselines from disk (measured before the reset)

Produced by `quote-check.ts --all --summary` and `coverage.ts` on the pre-reset tree (212 cards written by one-team-per-unit dispatch with no verification field), sources at the pinned SHAs:

```
quote-check: 6208 PASS, 1228 FAIL (61 of them off by one line), 339 MISSING source, across 212 card(s); 188 card(s) with failures
```

18% of resolvable citations were not byte-exact at the cited line; 82% of cards carried at least one such citation. Failure classes seen by hand: paraphrase in a verbatim field, off-by-one line numbers, a term cited at a line that does not contain it, a path cited where only the skill's name appears. This is the number the contract (Worker runs `quote-check.ts` before returning; Auditor re-runs it; primary agent re-runs it) must keep at zero.

## 3. The budget (D-010; `budget.ts`)

```
used_end = S + Σ over runs (R + n × u) + C
headroom = governing ceiling − used − C
k runs × n units fit  iff  k × (R + n × u) ≤ headroom
```

- **S** session start, **R** fixed cost per run, **u** per verified unit, **C** close — measured (§9.2), stored in `budget-params.json`, re-measured every conversation (`budget.ts --measure` at §8.3).
- **governing ceiling** — per model, `context-ceilings.json`; set only from this project's evidence, raised only by the file's `raise_rule`.
- **n** and **k** grow one step at a time along `run_sizes` / `concurrency_sizes`; a step is clean when §4 shows nothing, there are no 429s, and wall time stays within 25% of the last clean run.

## 4. Rot metrics (operational, recorded with `used` at that moment)

Primary agent: a §7 step skipped; a unit checked off without read-back; a `units.ts check` failure; a decision cited that does not exist in `DECISIONS.md`; a role or file referred to by a name that is not its documented name.

Units: any `quote-check.ts` FAIL on a returned card; an empty required field; a package prefix dropped (R4); a `coverage.ts` regression.

## 5. Concurrency

Inside a run every unit is a Worker and all Workers start together; the run's worker window is set by the largest unit, not by the count (§9.10). Across runs, `k` simultaneous dispatches from one conversation are a D-010 probe. What is measured per run: units, wall time (dispatch → COMPLETE, from `await-run.ts`), 429 onset and `quota.reset_in_seconds`, Success Auditor sandbox failures, per-unit `quote-check.ts` FAIL count, worker compactions (from the capture).

## 6. Harness facts, cited

- Teamwork scope, roles, integrity modes, Project Working Directory, exclusive file ownership, Orchestrator succession: https://antigravity.google/docs/teamwork
- Subagents: `model: inherit|flash|pro`, fresh context per invocation, nesting depth 10: https://antigravity.google/docs/subagents
- Boost: three-tier pipeline, code-only use cases: https://antigravity.google/docs/boost
- Statusline payload (`context_window.used_percentage`, `quota{}.reset_in_seconds`, `agent_state`, `task_count`): https://antigravity.google/docs/cli/statusline
- Headless: `-p`/`--print`, `--output-format stream-json`, `step_update.usage.{input_tokens,output_tokens,thinking_tokens,cache_read_tokens,total_tokens}`, `subagent_info`, `--print-timeout` (default 5 min), permission modes `request-review` / `always-proceed`: https://antigravity.google/docs/cli/headless
- Quota is one shared pool drawn down at API-pricing ratios; five-hour and weekly buckets: https://antigravity.google/blog/changes-to-antigravity-plans
- 429 behaviour: retries, then stop; resume by telling the team "Continue"; "keep your machine awake": https://antigravity.google/blog/google-antigravity-built-an-os
- Concurrent stream limit exists, value undocumented: https://github.com/google-antigravity/antigravity-cli/blob/main/CHANGELOG.md (1.1.21)
- Automatic conversation compaction: **undocumented**. Observed (§9.4): fires independently of `used_percentage`; handled by METHOD §8.4, not avoided.
- Teamwork dispatch under `-p`: **undocumented — probe** (D-018).
- Cache discount under plan login: **undocumented — probe** (`cache_read_tokens` is reported; whether it reduces quota draw-down is not stated).

## 7. Results

### run 01

- **run-id**: `p1-run-01`
- **units**: `inv-addy-1`, `inv-addy-6`, `inv-addy-8`, `inv-addy-9`, `inv-addy-12`, `inv-addy-14` (6 units, 88 files, 4 divergence pairs)
- **context used**:
  - start: not observed
  - at approval: not observed
  - after report 1: not observed
  - after report 2: not observed
  - after report 3: not observed
  - after report 4: not observed
  - at end: not observed
  - largest per-unit delta: not observed
- **rot metrics**: none observed (used: not observed)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 27m 54s (from `2026-09-04T17:54:17Z` request to `2026-09-04T18:22:11Z` final report). Files read under `.teamwork/p1-run-01/` and `.agents/`:
  - `.teamwork/p1-run-01/DISPATCH.md` (dispatch logged at 2026-09-04T17:55:17Z)
  - `.teamwork/p1-run-01/progress.md` (last visited at 2026-09-04T18:18:25Z)
  - `.teamwork/p1-run-01/handoff.md` (orchestrator handoff at 2026-09-04T18:18:40Z)
  - `.teamwork/p1-run-01/success_auditor_report.md` (completed at 2026-09-04T18:17:15Z)
  - `.agents/victory_auditor_p1_run_01/handoff.md` (audit completed at 2026-09-04T18:22:30Z)
- **quote-check totals**:
  - Run 01 cards: 1,158 PASS, 0 FAIL, 0 MISSING across 92 cards (0% failure rate)
  - Baseline (§2): 6,208 PASS, 1,228 FAIL, 339 MISSING across 212 cards (18% failure rate)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-01/success_auditor_report.md` (confirmed by victory auditor at `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/victory_auditor_p1_run_01/handoff.md` with VICTORY CONFIRMED)

### run 02

- **run-id**: `p1-run-02`
- **units**: `inv-addy-15`, `inv-addy-16`, `inv-addy-17`, `inv-addy-22`, `inv-addy-25`, `inv-addy-36`, `inv-addy-37`, `inv-addy-38` (8 units)
- **context readings**:
  - session start:
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        9.071636199951172%  (95,123 tokens; peak this conversation 9.071636199951172%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        9.93%
  per-unit delta  not measured%   units_left —   max clean run —   pending 303
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - immediately before dispatch:
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        10.214805603027344%  (107,110 tokens; peak this conversation 10.214805603027344%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        8.79%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - after Sentinel report 1 (2026-09-04T20:03:55Z):
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        11.05642318725586%  (115,935 tokens; peak this conversation 11.05642318725586%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        7.94%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - after Sentinel report 2 (2026-09-04T20:08:16Z):
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        11.581611633300781%  (121,442 tokens; peak this conversation 11.581611633300781%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        7.42%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - after Sentinel report 3 (2026-09-04T20:10:05Z):
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        11.871528625488281%  (124,482 tokens; peak this conversation 11.871528625488281%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        7.13%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - after Sentinel report 4 (2026-09-04T20:16:11Z):
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        12.137699127197266%  (127,273 tokens; peak this conversation 12.137699127197266%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        6.86%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - after Sentinel report 5 (2026-09-04T20:18:20Z):
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        12.427997589111328%  (130,317 tokens; peak this conversation 12.427997589111328%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        6.57%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - after Sentinel report 6 (2026-09-04T20:20:06Z):
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        12.712764739990234%  (133,303 tokens; peak this conversation 12.712764739990234%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        6.29%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
  - after verification:
```
budget — Gemini 3.8 Flash (High), window 1,048,576 tokens, conversation 8be0644c-481b-4495-ab2e-b33297756439
  used now        14.423465728759766%  (151,241 tokens; peak this conversation 14.423465728759766%; compactions seen 0)
  ceiling         strict 6.25%  plateau 25%  ← context-ceilings.json["Gemini 3.8 Flash (High)"]
  governing       21%  (budget-params.experiment_ceiling_pct (provisional))   reserve 2%
  headroom        4.58%
  per-unit delta  not measured%   units_left —   max clean run —   pending 295
  DISPATCH 6 (per-unit delta not yet measured: run the smallest size and measure)
```
- **per-unit delta**: 0.53% (used after verification 14.42% − used before dispatch 10.21% = 4.21% ÷ 8 units = 0.526%)
- **rot metrics**: none observed (used: 14.42%)
- **429s and quota.reset_in_seconds**: none observed
- **wall time**: 17m 00s (from `2026-09-04T20:04:00Z` dispatch to `2026-09-04T20:21:00Z` sentinel final handoff). Files read under `.teamwork/p1-run-02/` and `.agents/`:
  - `.teamwork/p1-run-02/DISPATCH.md` (dispatch logged at 2026-09-04T20:04:00Z)
  - `.teamwork/p1-run-02/progress.md` (last updated at 2026-09-04T20:17:15Z)
  - `.teamwork/p1-run-02/handoff.md` (orchestrator handoff at 2026-09-04T20:17:30Z)
  - `.teamwork/p1-run-02/success_auditor_report.md` (completed at 2026-09-04T20:17:15Z)
  - `.agents/victory_auditor_p1_run_02/handoff.md` (audit completed at 2026-09-04T20:20:00Z)
  - `.agents/sentinel_p1_run_02/handoff.md` (sentinel handoff at 2026-09-04T20:21:00Z)
- **quote-check totals**:
  - Run 02 cards: 1,003 PASS, 0 FAIL, 0 MISSING across 17 cards (0% failure rate)
  - Cumulative (Runs 01 + 02): 2,161 PASS, 0 FAIL, 0 MISSING across 109 cards (0% failure rate)
  - Baseline (§2): 6,208 PASS, 1,228 FAIL, 339 MISSING across 212 cards (18% failure rate)
- **Success Auditor report path**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.teamwork/p1-run-02/success_auditor_report.md` (confirmed by victory auditor at `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/victory_auditor_p1_run_02/handoff.md` and sentinel handoff at `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/sentinel_p1_run_02/handoff.md` with VICTORY CONFIRMED)

## 8. Objective

Not quota. No session approaches the rot metrics; within that, the most work per unit of wall time — bigger runs and simultaneous runs, never fewer checks.

## 9. Findings from the capture of 2026-09-04 (sessions 013–014; the basis of D-010)

*Provenance note: the transcripts and logs this section cites were analysed outside the project, from a capture, by Peter and his assistant. They are not inputs to the analysis and are not to be read by the agent (§2). This section is the record of what they showed.*


Source: `brain-v2-experiment-20260904-170149.zip` — the statusline context log (`.teamwork/ctx-log.jsonl`, 4,871 readings), the 34 Antigravity transcripts of the day (every orchestrator, Sentinel, explorer, worker and auditor conversation), the Teamwork run directories, and the repo at `2620815`. Every number below comes from those files; the command that produced it is in `analysis/` of this kit.

### 9.1 What the two runs proved

| | run 01 (session 013) | run 02 (session 014) |
|---|---|---|
| units | 6 (88 files) | 8 (17 files) |
| workers in parallel | 6 | 8 |
| quote-check on returned cards | 1,158 PASS / 0 FAIL | 1,003 PASS / 0 FAIL |
| baseline before the reset | 18% of citations FAIL | — |
| wall time, brief → final report | 27 m 54 s | 17 m 00 s |
| 429s | 0 | 0 |
| rot metrics in the primary conversation | none | none |
| primary conversation peak | not logged (see §5) | 18.08% (189,627 tokens) |

Run 02 was started, dispatched, verified, recorded and closed by the agent alone from one paste. That is the end state working.

### 9.2 Where the primary conversation's context goes (run 02, window 1,048,576 tokens)

Every reading is `total_input_tokens` from the log, attributed to the transcript step that produced it.

| phase | tokens | % of window | what it is |
|---|---|---|---|
| harness + PROMPT.md + METHOD.md | 49,870 | 4.76 | METHOD is 56 KB; the tail (lines 400–532) was read **twice** (`view_file` truncates at ~410 lines) — 17k tokens, 1.6% of that is the duplicate |
| rest of §8.1 reads | 30,022 | 2.86 | STATE.md (26 KB, 333-row unit table), handoff, DECISIONS, GLOSSARY, PREFERENCES, DO-NOT-READ, template, budget-params, experiment doc |
| §8.1 checks | 14,840 | 1.42 | memo check, quote-check, prefix, partition, coverage, git |
| **S — session start, total** | **94,732** | **9.03** | before any unit work |
| pre-dispatch | 19,055 | 1.82 | unit-facts × 8, STATE edits (each `replace_file_content` echoes ~4k tokens), brief, commits |
| monitoring, 6 Sentinel reports | 22,315 | 2.13 | 0.35% per report: budget.ts + view doc + edit + commit + reply |
| verification, 8 units | 15,737 | 1.50 | **0.19% per unit** (quote-check --summary, stamp loop, head of two cards) |
| record + close | 37,788 | 3.60 | §7 results, `--set`, next brief incl. unit-facts × 6, STATE edits × 4, `git status -u`, handoff, checks, commits |

So the cost of one conversation is

```
used_end = S + Σ over runs (R + n × u) + C
S = 9.0   (start)        R = 4.6  (fixed per run: pre-dispatch 1.8 + monitoring 2.1 + record 0.7)
u = 0.19  (per unit)     C = 2.9  (close)
```

The model reproduces run 02: 9.0 + 4.6 + 8 × 0.19 + 2.9 = 18.1% (observed 18.08%).

**Correction to session 014's own figure.** The agent recorded "per-unit delta 0.53%". That number divides the whole run — Sentinel monitoring included — by the unit count. Monitoring is a fixed cost per run (Teamwork sends about the same number of reports whatever the size). The true marginal cost of a unit in the primary conversation is 0.19%. This matters: it means run size barely moves the conversation budget.

What the model says at today's costs (ceiling 21%):

| run size | 1 run per conversation | 2 runs | 3 runs |
|---|---|---|---|
| 8 | 18.1 | 24.2 | 30.4 |
| 12 | 18.8 | 25.7 | 32.6 |
| 16 | **19.6** | 27.2 | 34.9 |

A single **16-unit run fits under 21% today**; two runs do not. The stop after run 02 (headroom 1.01%) was the arithmetic working, not a limit of the method.

### 9.3 The reductions the log justifies (no quality cost — none touches what the agent reads for the work itself)

| change | saves | where |
|---|---|---|
| Read METHOD.md in two exact views (1–410, 411–end) — PROMPT.md instruction | 1.6% per conversation | S |
| Move the 333-row unit table out of STATE.md into `docs/plan/units.md` (partition.ts already writes it); STATE keeps counts + in-progress rows | 0.5% at start, ~0.3% per run of edit echoes, 0.4% at close | S, R, C |
| Sentinel report handling: `budget.ts --record "report N"` appends the reading to a JSONL; no view/edit/commit per report | 1.5% per run | R |
| §7 records the compact `budget.ts --line` form instead of the 9-line block | 0.3% per run | R |
| Handoff and brief written with `write_to_file` once, no `git status -u` echo | 0.3% at close | C |

Result: S ≈ 6.9, R ≈ 2.5, u = 0.19, C ≈ 2.5.

| run size | 1 run | 2 runs | 3 runs |
|---|---|---|---|
| 12 | 14.2 | 19.0 | 23.8 |
| 16 | 15.0 | **20.5** | 26.1 |

Two 16-unit runs per conversation fit under 21%. Three need a ceiling of 27%.

### 9.4 Compaction — what the transcripts show, and why the 24% figure is withdrawn

Three compactions occurred on 2026-09-04, none in the run-02 conversation:

| conversation | role | when | steps in | evidence |
|---|---|---|---|---|
| `7e1f90f9` | session 013 primary | 15:56:29Z, **3 minutes after start**, right after the §8.1 reads and a failed `write_to_file` | 31 | `{{ CHECKPOINT 0 }} … truncated due to its long length` |
| `f06e4f74` | run 01 worker `inv-addy-1` (29 files) | 18:11:00Z | 331 | `# Resuming from a compaction` |
| `a20239cb` | run 01 worker `inv-addy-6` (55 files) | 18:11:33Z | 339 | `# Resuming from a compaction` |

The session-013 compaction fired when the conversation held roughly what session 014's held at the same point — about 9–10% of the window. Session 014 then ran to 18.08% with none. **The harness's compaction is not a function of `used_percentage` we can put a ceiling on.** Its trigger is undocumented; the one observed in a primary conversation coincided with a slow, failed tool call, not with length. The "≈24%" written into `budget-params.json` came from a reading of the run-01 series that no longer exists (§5) and is withdrawn.

Two consequences for METHOD:

1. Compaction must be **harmless**, not avoided. It already nearly is — the state is on disk. What it breaks: the summary the harness injects ends with *"Reference the following log files for the full, untruncated conversation: ~/.gemini/…/transcript.jsonl"*. That line is why session 013 spent several percent reading transcripts and `cli.log`. METHOD §8 gets a rule: *after any compaction notice, re-read STATE.md, the latest handoff and `git log -5`; the transcript is outside the fence (§2) whatever the notice says.*
2. Worker compaction correlates with **file count**, not bytes: the two workers that compacted held 29 and 55 files; every 1–6-file unit (both runs, 12 workers) finished without one. Both compacted workers still returned 0 FAIL, but a compaction inside a worker doing the R11 duplication ledger is a risk the partition should remove: `partition.ts` caps units at ≤ 12 files as well as ≤ 50 KB.

### 9.5 Two losses to own

- **Run 01's context series is gone.** `apply-experiment2.sh` replaced the statusline directory (`rm -rf … statusline`) to install the version that logs model and window — and the old log lived inside that directory. Run 01's readings survive only as the agent's `not observed` entries. (The workspace log at `.teamwork/ctx-log.jsonl` is inside the capture; nothing else was lost.)
- **The first attempt at session 014** reached 13.08% and STOPped because ceiling 16 − start 11.5 − reserve 5 left nothing (that conversation also did transcript archaeology — six `grep`/`ls` calls into `~/.gemini`, about 0.5%). The one-paste prompt fixed both.

### 9.6 What Teamwork did inside the runs (from the 30 subagent transcripts)

Each run is: interview conversation → Project Orchestrator → 3 survey explorers (M0, ~3.5 min) → all workers **in parallel** (run 02: 8 started at 20:09:30Z, done by 20:14:27Z — 5 min) → Success Auditor (2.5 min) → Independent Post-Victory Auditor (2 min) → Sentinel final report. Fixed overhead per run is about 12 minutes; the workers' part scales with the largest unit, not the count. **Bigger runs are cheaper per unit in wall time, in quota, and (per §2) in primary-conversation context.** The only untested edge is Teamwork's undocumented concurrent-stream limit: 11 concurrent conversations (8 workers + orchestrator + sentinel + primary) produced no 429.

### 9.7 D-010 as the evidence supports it

| parameter | value | basis |
|---|---|---|
| governing ceiling, Gemini 3.8 Flash | **25%** provisional (from 21) | 0 rot metrics through 18.08%; MRCR plateau 25% is the point where long-context recall stops degrading gracefully; compaction is not a ceiling (§4). Raise only on evidence: a conversation that peaks above 22% with zero rot metrics moves it to 28%. |
| reserve (close) | 2.9% measured → **3** | §2 |
| per-unit delta | **0.19** | §2 (replaces 0.53, which was per-run overhead spread over units) |
| per-run fixed | **4.6** now, **2.5** after §3 | new parameter in budget-params.json |
| run sizes | 8 → 12 → 16 → 24 | 8 is clean; each step needs one clean run first (§3 of the experiment doc) |
| unit cap | ≤ 50 KB **and ≤ 12 files** | §4 |
| max clean run | 8 → next probe 12 | run 03 |

`budget.ts` changes shape accordingly: `headroom = ceiling − used − reserve`; a run of n fits if `run_fixed + n × per_unit ≤ headroom`; recommend the largest series size that fits and is ≤ max_clean_run.

### 9.8 Remaining work — 295 pending units at the time of the capture (372 after the D-016 re-partition)

At 16 units per run: 19 runs. Two runs per conversation → 10 conversations of ~40 minutes each. Each conversation still needs one human action: paste PROMPT.md. The one thing that removes even that is the CLI's headless mode (`agy -p`, documented at antigravity.google/docs/cli/headless): a driver loop that starts a fresh conversation with PROMPT.md, waits for it to end, and starts the next until STATE.md says Phase 1 is complete. Whether `invoke_subagent` with `teamwork_preview` works headless is **undocumented — probe**; run 03 is the natural probe.

### 9.9 Is the work waiting on other work? Yes — 5 of 22 minutes are unit work

Run 02, every conversation's start and end relative to the paste (from the 17 transcripts of that run):

| minute | what is running | serial or parallel |
|---|---|---|
| 0.0 – 1.6 | primary agent: startup reads, checks, brief, dispatch | serial |
| 1.6 – 3.5 | Sentinel and Project Orchestrator start | serial |
| 3.5 – 7.0 | 3 survey explorers (Teamwork's M0 milestone) | 3 in parallel, but the workers wait for them |
| 7.0 – 8.1 | Orchestrator plans the worker milestones | serial |
| **8.1 – 13.1** | **8 workers, all started at 20:09:30Z** (3.0 – 5.0 min each) | **fully parallel — the only unit work** |
| 13.1 – 16.0 | Success Auditor | serial |
| 16.0 – 18.8 | Independent Post-Victory Auditor | serial |
| 18.8 – 19.2 | Sentinel final report | serial |
| 19.2 – 21.8 | primary agent: verify 8 units, record, next brief, handoff, commit | serial |

Unit work: 5.0 minutes of 21.8 (23%). Everything else is fixed, serial overhead that does not change with run size. Inside the worker window, the run finishes when the largest unit finishes (inv-addy-36, 49.5 KB, 5.0 min), so the worker window is set by the unit cap, not by the count.

#### The levers — parallelism only; nothing here changes what any agent reads or checks

1. **Bigger runs — free.** Going from 8 to 16 or 24 units adds workers to the same 5-minute window. Wall time per run stays ~22 min; throughput doubles or triples. Cost to the primary agent: 0.19% per unit. Only unknown: Antigravity's undocumented cap on simultaneous conversations (11 ran at once in run 02 with no error).
2. **Two or more runs at once from one conversation — probe.** `invoke_subagent` returned in 4 seconds and the primary sat idle receiving Sentinel messages, so it is asynchronous. The primary can dispatch run A and run B (disjoint units, separate `.teamwork/<run-id>` directories) back to back; the runs overlap; the primary verifies each when its final report arrives. Cost to the primary: one per-run fixed cost per run. This halves wall time per unit again.
3. **The headless driver removes the human gap.** Today the wall clock between conversations is however long until you paste. Run 02's conversation ended at 13:23 and nothing ran after it. The driver starts the next conversation the moment the previous one exits.

The survey explorers and the two auditors stay exactly as Teamwork runs them. They are part of the quality gate, not overhead to remove.

#### The parallelism calculation (added to budget.ts as D-010's second half)

Three measured quantities and two limits set how much work one conversation can run at once:

```
context:      S + k × (R + n × u) + C  ≤  ceiling          (S, R, u, C measured; §2)
concurrency:  k × (n + 2) + 1          ≤  stream_limit     (n workers + orchestrator + sentinel per run, + the primary)
worker time:  per-run wall ≈ 12 min fixed + time of the largest unit   (unit cap sets it, not n)

  n = units per run       k = runs dispatched at the same time
```

`budget.ts` recommends the largest (k, n) that satisfies the context line, with n ≤ max_clean_run and k ≤ max_clean_concurrency. Both maxima start at their measured values (8, 1) and step up one notch per clean run, exactly as the run-size series does now. The stream limit is unknown and is discovered the same way: a step up is clean only if the run shows zero quote-check FAIL, zero 429, and per-run wall time within 25% of the previous step — a longer wall time at the same unit sizes means the harness is queueing conversations, and that is the limit.

#### What the 295 remaining units cost in wall time

| plan | conversations | minutes each | total |
|---|---|---|---|
| today: n = 8, k = 1, one run per conversation | 37 | 22 | ~13.5 h |
| n = 16, k = 1, two runs per conversation one after the other | 10 | ~39 | ~6.5 h |
| n = 16, k = 2 | 10 | ~23 | ~3.8 h |
| n = 24, k = 2 | 7 | ~23 | ~2.7 h |

All four keep the same quality gates. Every step in n or k needs one clean run at the previous step first. Quota is the other bound: the same tokens are spent either way, only faster, so the five-hour bucket may bind before the stream limit does (the run's cost is not in the capture — `cost` was null in every log record; the statusline receives no cost field under plan login).

