# 01 · Timeline — 2026-09-02 to 2026-09-05

Sources: the fourteen session handoffs that existed before the reset (`docs/plan/sessions/000` … `014`, now in git history before the D-016 boundary and therefore not an input — this is their record), `DECISIONS.md`, the two captures analysed on 2026-09-04/05, and the conversations between Peter and his assistant in which the kits were built. Dates are Peter's local dates (Pacific).

## Before the project — the assessment

Peter had a first attempt at merging three lifecycle packages into brain. He judged it unreliable and decided to discard it and start on a fresh branch (`v2`) with a method whose whole memory is files: METHOD.md as the operating manual, STATE.md as position, DECISIONS.md append-only, one handoff per session. The three sources — Addy Osmani's `agent-skills`, Matt Pocock's `skills`, rjmurillo's `ai-agents` (lifecycle part only; its memory stack out of scope, D-001) — were pinned to commits. D-001–D-009 were made by Peter on 2026-09-02: sources and scope, the fence to the `v2` branch, pure Bun, the documentation layout, the human gate between Part 1 and Part 2, defects recorded not dismissed, the landscape scan question (skipped: D-007 `no`), and dual-target output (Claude Code first, full Antigravity parity, D-009).

## 2026-09-02 — kit, Phase 0, first inventory sessions

- **Session 001** (handoff `000-setup.md`): Phase 0 on the Antigravity CLI. The agent *wrote* `manifest.ts`, `coverage.ts`, `glossary-lint.ts` itself (the first kit shipped no tooling). 276 rjm units, 6 addy, 5 matt. `coverage.ts` and `glossary-lint.ts` were stubs.
- **Sessions 002–005:** one Teamwork run per unit (`teamwork_preview` subagent), the agent answering the interview. The handoffs praise the mechanism ("extremely capable", "performs impeccably"). The subagent was also updating `STATE.md` and the manifest itself — a violation of what later became §6.3 item 5. Coverage was judged by `coverage.ts` alone; no citation was ever checked against its source.
- **Session 006:** the agent added its own "D-010 — autonomous parallel batching" and processed 15 units in chunks of five concurrent teams. Quota (429) paused execution twice; it resumed. Every unit "passed the independent 3-phase Victory Audit".

## 2026-09-03 — scaling, quota, and the first sign of trouble

- **Sessions 007–009:** five concurrent teams per session, five units each. 429 lockouts; Peter upgraded the quota. Reviewers inside the teams caught "inaccurate defect citations" (session 009) — the first recorded instance of the problem that would define the reset.
- **Session 009 → 010:** Peter and the agent agreed to a "stress test" of 15 concurrent units. Session 010 halted correctly: the handoff named units `inv-addy-42`–`50` that did not exist.
- **Session 011:** 15 concurrent units; a massive 429; the agent treated it as a failed experiment and ran `git clean`, destroying the in-flight state. Peter's correction in the handoff reframed the goal, and it is the sentence the whole later method serves: *the goal is a dynamic calculation of how much work fits in one conversation before context rot — not finding out when the quota runs out.* Two bounds were named: the work scope a conversation can hold, and the parallelism that work can use.
- **Session 012:** a "fix" session whose first report contained three false claims about `manifest.ts` (corrected in the same file, 2026-09-04 01:57). The true root cause of duplicate rows: 127 markdown files spelt `SkillForge` while the directory is `skillforge`; the walker followed path-like strings and `existsSync` on macOS is case-insensitive, so the same file entered twice. Coverage marks had been hard-coded by a one-off script and were wiped on regeneration. D-011 (the delegation contract) was drafted by the agent for Peter's ratification.

## 2026-09-04 — research, measurement, and the experiment

Outside the sessions, Peter asked his assistant for:

1. **A general solution to duplication** across all three packages, not an rjm patch → `03-duplication-ledger.md`, `dedupe.ts`, D-012. The analysis also found that the rjm reachability never reached `.claude/agents/*.md` (zero of the nine agents the lifecycle commands dispatch to were in the manifest) → D-013.
2. **Research on caching and token efficiency** with the constraint that nothing may lower quality → `04`, `05`. Model tiering was proposed by the researcher and **withdrawn** by Peter ("cannot be solutions that result in any compromise on quality").
3. **A Teamwork / Boost / subagent audit** → `06`. The researcher's verdict that Teamwork was "misused" was corrected by Peter: the project *is* Teamwork's documented use case; the defect was one team per unit and no verification field, not the mechanism. → D-014 (one run per batch; Peter answers the interview; Boost only in Phase 7).
4. **A measurement of the existing analysis**: `quote-check.ts --all` on the 212 pre-reset cards found **18% of resolvable citations not byte-exact**, 82% of cards affected. This is the §2 baseline of the experiment doc and the reason for the reset.
5. **The statusline port** so the agent (and Peter) can read context use → `09`.
6. **Model choice**: 3.8 Flash (high) over 3.1 Pro (high) → `07`. **Context ceilings** per model → `08`.

Then the experiment:

- **Session 013** (run 01, 6 units): the first agent-dispatched Teamwork run under the new contract. 1,158 PASS / 0 FAIL. The conversation was compacted by the harness three minutes in — after which the agent went looking for the dispatch recipe in `~/.gemini` transcripts (the compaction notice points there). Peter saw `<conversation-was-compacted>` and objected.
- **Session 014, first attempt:** the provisional ceiling (16%, reserve 5) left no headroom after an 11.5% start; the agent STOPped without dispatching. Second attempt: the two-message flow made the agent ask a question Peter missed; he cancelled. Third attempt, one paste (`PROMPT-experiment-2-full.md`): run 02, 8 units, 1,003 PASS / 0 FAIL, from dispatch to close with no human action. Peak 18.08%. `budget.ts` stopped the series on headroom.
- **Capture and analysis** (evening): the statusline log (4,871 readings) and all 34 transcripts of the day → `docs/analysis/dynamic-batching-experiment.md` §9 and `11-experiment-and-reset.md`. Key results: per-unit cost 0.19% not 0.53%; the fixed costs (start 9%, per run 4.6%, close 2.9%) are what limit a conversation; compaction is not a function of context used; 5 of every 22 minutes were unit work.

## 2026-09-05 — the final method, the reset, and the test series

- Peter's direction: no more token cutting ("I don't want to risk losing any more quality"); more parallelism where it does not touch quality; include the headless driver; the 4.6-generation Claude models out of the ceilings file, Opus 5 / Sonnet 5 / Fable 5.1 in.
- The final kit was built against a clone of the repo and tested end to end, including a full Phase 0 tooling run; two adversarial review passes over the rewritten METHOD found 64 issues, all fixed except historical ones.
- **D-010** (the budget), **D-016** (the reset), **D-017** (the agent dispatches; `Model: "inherit"`), **D-018** (the headless driver) were appended. The tree was reset; 416 units after Phase 0 (matt's 37 external pages now in the manifest).
- **Session 000** (Phase 0 under the final method): one paste, 10.2% of context, everything clean, closed by itself. 416 units.
- **Session 001 — the first headless conversation** (`drive.ts --max 1`): Teamwork dispatched under `agy -p`; `p1-run-01` (8 units, `inv-addy-1`–`8`) produced 90 cards and 4 divergence cards, 1,217 PASS / 0 FAIL, coverage clean, committed and closed by plan — no human action. Three things learned from its capture: (1) agy renders the statusline headless, so the context log was real (peak 22.97%); (2) the stream's `usage.input_tokens + cache_read_tokens` equals the context (23.09% by that sum — within 0.1% of the statusline), and `input_tokens` alone is the uncached part; (3) **a fence incident**: the agent's first action was to search the whole home directory for `METHOD.md` and it read eight files from the *other* worktree (`…/ACMElabs/brain/` — the discarded first attempt) before finding `brain-v2`, doubling the start cost to 15.3% and touching fenced inputs. Every card it produced was verified against the pinned sources by `quote-check.ts`, so the outputs stand; the cause — a relative path in the prompt and no stated root — is fixed by hotfix 1 (PROMPT.md names the repository root and forbids searching; METHOD §7/§8.1 say the same).
- **D-019** (this record) and hotfix 1, installed together between sessions.
- **Sessions 002–003** stopped for Peter within three minutes each: `memo.ts audit` reported the 90 session-001 cards STALE, because hotfix 1 had edited METHOD and the memo key was the whole file. The agent's own For-Peter section diagnosed it exactly. → **D-020** (hotfix 2): the key is the extraction contract (§2.4, §3, §4 + template); `memo.ts restamp`; the display (`drive-ui.ts`) shipped with it.
- **Sessions 004–006 — the test series proper**, one `drive.ts` command, no human action: p1-run-02 (12), 03 (12), 04 (16 — the probe that set `max_clean_run` 16 at 12.6 min), 05 (12), 06 (24 — clean on quality, 27.6 min), 07 (16 — 65 min). 100 units, 428 cards, 8,466 PASS / 0 FAIL; peaks 19.0–20.0%; no compaction; no 429. Session 004 ended with agy's "The stream was interrupted" after its close had been committed.
- **Session 007** dispatched the first `k = 2` plan (p1-run-08 + p1-run-09, 16 units each). Peter pressed Ctrl-C on the driver two minutes in: "this is our last test session … reset once more and let the thing run". Third capture. The next morning: the Ctrl-C had killed only the driver; the conversation had run on for nine hours, verified and committed run 08 (`cac2f67`, 23:45) and was stamping run 09 when it was found and killed. Both runs of the probe completed together.
- **Analysis of the third capture** → `13-test-series-and-final-parameters.md`: the three slow runs were the three where the Orchestrator did not give each unit its own Worker (6 for 12, 8 for 24, sequential gated milestones for 16) — the wall-time bound had measured Teamwork's decomposition, not the harness; the primary conversation's per-run cost did not grow with `n`; two harness quirks cost one step each per conversation; the `run-start` labels were sometimes guessed.
- **D-021 and the go kit**: the brief requires one Worker per unit; the wall-time test is same-shape only; `budget.ts` refuses a wrong `run-start`; the driver runs to the human gate with a graceful STOP file; the tree is reset a second time and the production series starts at Phase 0.

## What the timeline teaches

Three things went wrong before 2026-09-04, and each became a rule:

1. **Verification that was not mechanical.** "VICTORY CONFIRMED" from inside a team meant nothing until `quote-check.ts` compared bytes. → R11, M5, the Worker/Auditor/primary triple check.
2. **State in the wrong hands.** Teams editing `STATE.md` and manifests; a one-off script hard-coding coverage; `git clean` on a live tree. → §6.3 item 5 (the primary agent is the only writer of shared state), `Checked` derived never ticked, `units.ts` as the only writer of the unit table.
3. **No instrument.** Context was never measured, so "how much fits" was a guess and quota was mistaken for the limit. → the statusline log, `budget.ts`, D-010.

## 2026-09-05/06 — the production series

- **Session 000** (Phase 0, 3 min) then **sessions 001–008**: Phase 1 in 17 runs, all from one `drive.ts` command. Run sizes stepped 24 → 32 → 48 by the probe rule (p1-run-04 proved 24 at 13.5 min, run 07 proved 32 at 15.6 min, run 13 proved 48 at 13.2 min); 48 Workers at once, one per unit, as the brief now requires. 416 units, 1,567 cards, 0 FAIL. Wall time about 24 hours including two long quota pauses (run 09: 3.5 h; run 14: 3.5 h) that the Sentinel resumed and the primary agent waited through.
- **Three stops that recovered themselves or were handled**: session 005 ended in ERROR with an uncommitted tree after a 7.6-hour conversation (the driver stopped; Peter restarted it; session 006's §8.1 step 6 finished the work). Session 007 dispatched the first `k = 2` plan (runs 14 and 15, 48 units each) during the quota pause; run 14 finished clean, run 15's Orchestrator worked sequentially, and the conversation rolled run 15 back at close with 0.55 % headroom left (peak 24.4 %, one compaction). Session 008 finished Phase 1.
- **Session 009** ran Phase 1V: six verifier subagents over a 15 % sample of each package, three `_verification.md` reports, each with omissions to fix.
- **Session 010** stopped for Peter within three minutes: the reports were counted as cards by the checks. → **D-022** (hotfix 3): `_`-prefixed files are never cards; the 1V remediation procedure (`units.ts owner` / `rerun`, re-run the units, re-verify); `await-run.ts` waits through a quota pause in one call, because the waiting had cost 8–10 % of the window in sessions 005 and 007.
