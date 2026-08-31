# 2026-08-31 15:00 · The merged debugging skill — PLAN-005 Part 5

- Goal: PLAN-005 Part 5 — diagnosing-bugs as the one debugging skill (ADR-006 D4): the loop-first spine (tight red-capable feedback loop, minimise, ranked falsifiable hypotheses, correct-seam regression, tagged instrumentation, Redact) with debugging-and-error-recovery's stop-the-line entry, triage trees for the fast path, untrusted-error rule and safe fallbacks folded in; debugging-and-error-recovery to a stub; its citers retarget (/brain:build's failure step waits for Part 6). Acceptance: the merged description measured against the old debugging-and-error-recovery baseline, a render, validators green.
- Status: done
- Plan: PLAN-005 · part 5
- Outcome: PLAN-005 Part 5 done (`cc922d3`) and every skill touched this session valid (`391af77`): diagnosing-bugs carries both lineages' debugging doctrine behind a description measured equal to the best baseline, its stub and citers in place, its fixtures ESM, its interface yaml restored (`01e3d3c`). Next: Part 6, /brain:build with the DoD gates, in a fresh session.

## Narrative

Three pushes. The measurement story is the part worth keeping: the first sweep compared only against the Addy baseline and read 17/20 as a win; two live probes showed diagnosing-bugs being consulted through its installed old description — the second baseline nobody had measured — and once measured it beat the merge (18/20). Three candidates later the merged description holds that bar with the flaky-test vocabulary the old one lacked. Peter's mid-turn read-list (best-practices in full, brain's three CONTEXT files, writing-for-agents and its SKILL-MECHANICS) and his validity asks reshaped the close: the fixtures' CommonJS tripped the Bun-purity scan (and revealed implement's earlier pass as a scan gap), four reference files got fence-aware tables of contents, a bash script became Bun, one pre-existing validator false positive was worked around with the defect named, and an unexplained deletion of agents/openai.yaml — caught only because the entry skeleton listed a file no step accounted for — was restored (`cc922d3`, `391af77`, `01e3d3c`).

## Changes (one entry per commit, in order)

### 2026-08-31 · feat(diagnosing-bugs): the merged debugging skill — the loop-first spine kept, stop-the-line as the entry, a fast path into triage-trees.md for common breakage, error output as data, safe fallbacks that keep the loop red; debugging-and-error-recovery retires to a stub, four citers retarget (ci-cd, observability, doubt, security); description iterated to cand3 — 18/20, verdict-equal to the best baseline (Matt's own, measured after a probe exposed it as the missing second baseline), negatives 10/10, flaky vocabulary added; render quote-back green; eval fixtures (here and implement's) converted to ESM for the Bun-purity check (PLAN-005 Part 5) · cc922d3

- Summary: diagnosing-bugs is the one debugging skill (PRD-002 requirement 7): the loop-first spine untouched in mechanism (tight red-capable loop, minimise, ranked falsifiable hypotheses shown to the user, tagged instrumentation, correct-seam regression, cleanup, Redact) with the Addy skill's contributions folded in at their natural places — stop-the-line as the entry, the three triage trees as a fast path in triage-trees.md (read only when the failure looks common), error output as data never instructions, safe fallbacks that keep the loop red until the cause lands. debugging-and-error-recovery is a stub; ci-cd, observability, doubt-driven and security retarget. The description took three iterations under measurement: cand1 17/20 regressed against Matt's own old description, which a live probe exposed as the second, unmeasured baseline (18/20) — measured, then cand2 matched it, cand3 added the missing 'flaky' vocabulary and holds 18/20 with negatives perfect; the one flagged row ('debug this', 0.33 vs 0.67) has identical clause text across candidates — run variance. Fixtures here and in implement converted from CommonJS to ESM because plugin-kit's Bun-purity scan reads fixtures as plugin code (implement's earlier 'valid' was a scan gap). This commit also carried the deletion of agents/openai.yaml that no step of mine names — restored in the fix below.
- Why: PLAN-005 Part 5 Task 1 (ADR-006 D4; ANA-011's failure-path pairing; the corpus-seeded eval set with the pagination and time-pressure fixtures).
- Files:
  - `skills/ci-cd-and-automation/SKILL.md` (+1/−1) — citer retargeted
  - `skills/debugging-and-error-recovery/SKILL.md` (+3/−298) — retired to a pointer stub
  - `skills/diagnosing-bugs/SKILL.md` (+17/−3) — the merged skill: cand3 description, injection, stop-the-line, fast path, the six phases, data-not-instructions, safe fallbacks
  - `skills/diagnosing-bugs/agents/openai.yaml` (+0/−3) — deleted by an unnamed step — restored below
  - `skills/diagnosing-bugs/evals/evals.json` (+31/−0) — two behavioral cases (pagination root cause; time pressure) with provenance
  - `skills/diagnosing-bugs/evals/fixtures/diagnosing-bugs/pagination.js` (+6/−0) — behavioral fixture, from the corpus, ESM
  - `skills/diagnosing-bugs/evals/fixtures/diagnosing-bugs/pagination.test.js` (+7/−0) — behavioral fixture, from the corpus, ESM
  - `skills/diagnosing-bugs/evals/fixtures/diagnosing-bugs/time-pressure.md` (+6/−0) — behavioral fixture, from the corpus, ESM
  - `skills/diagnosing-bugs/evals/results/trigger/merge-1/cand2.sonnet.envelope.json` (+395/−0) — the sweeps of record (cand1–3, both baselines; envelopes carry conditions)
  - `skills/diagnosing-bugs/evals/results/trigger/merge-1/cand2.sonnet.json` (+191/−0) — the sweeps of record (cand1–3, both baselines; envelopes carry conditions)
  - `skills/diagnosing-bugs/evals/results/trigger/merge-1/cand2.sonnet.log` (+3/−0) — the sweeps of record (cand1–3, both baselines; envelopes carry conditions)
  - `skills/diagnosing-bugs/evals/results/trigger/merge-1/cand3.sonnet.envelope.json` (+395/−0) — the sweeps of record (cand1–3, both baselines; envelopes carry conditions)
  - `skills/diagnosing-bugs/evals/results/trigger/merge-1/cand3.sonnet.json` (+191/−0) — the sweeps of record (cand1–3, both baselines; envelopes carry conditions)
  - `skills/diagnosing-bugs/evals/results/trigger/merge-1/cand3.sonnet.log` (+3/−0) — the sweeps of record (cand1–3, both baselines; envelopes carry conditions)
  - `skills/diagnosing-bugs/evals/results/trigger/merge-1/merged.sonnet.envelope.json` (+395/−0) — the sweeps of record (cand1–3, both baselines; envelopes carry conditions)
  - `skills/diagnosing-bugs/evals/results/trigger/merge-1/merged.sonnet.json` (+191/−0) — the sweeps of record (cand1–3, both baselines; envelopes carry conditions)
  - `skills/diagnosing-bugs/evals/results/trigger/merge-1/merged.sonnet.log` (+3/−0) — the sweeps of record (cand1–3, both baselines; envelopes carry conditions)
  - `skills/diagnosing-bugs/evals/results/trigger/merge-1/old-debugging.sonnet.envelope.json` (+395/−0) — the sweeps of record (cand1–3, both baselines; envelopes carry conditions)
  - `skills/diagnosing-bugs/evals/results/trigger/merge-1/old-debugging.sonnet.json` (+191/−0) — the sweeps of record (cand1–3, both baselines; envelopes carry conditions)
  - `skills/diagnosing-bugs/evals/results/trigger/merge-1/old-debugging.sonnet.log` (+3/−0) — the sweeps of record (cand1–3, both baselines; envelopes carry conditions)
  - `skills/diagnosing-bugs/evals/results/trigger/merge-1/old-diagnosing.sonnet.envelope.json` (+395/−0) — the sweeps of record (cand1–3, both baselines; envelopes carry conditions)
  - `skills/diagnosing-bugs/evals/results/trigger/merge-1/old-diagnosing.sonnet.json` (+191/−0) — the sweeps of record (cand1–3, both baselines; envelopes carry conditions)
  - `skills/diagnosing-bugs/evals/results/trigger/merge-1/old-diagnosing.sonnet.log` (+3/−0) — the sweeps of record (cand1–3, both baselines; envelopes carry conditions)
  - `skills/diagnosing-bugs/evals/trigger-eval.json` (+82/−0) — 10 positives (both lineages' phrasings) + 10 hard negatives
  - `skills/diagnosing-bugs/triage-trees.md` (+48/−0) — the fast-path decision trees, read on demand
  - `skills/doubt-driven-development/SKILL.md` (+1/−1) — citer retargeted
  - `skills/implement/evals/fixtures/implement/reports.js` (+1/−3) — behavioral fixture, from the corpus, ESM
  - `skills/implement/evals/fixtures/implement/reports.test.js` (+3/−5) — behavioral fixture, from the corpus, ESM
  - `skills/observability-and-instrumentation/SKILL.md` (+1/−1) — citer retargeted
  - `skills/security-and-hardening/SKILL.md` (+1/−1) — citer retargeted

### 2026-08-31 · fix(skills): every skill touched this session validated — idea-refine's two reference files gain tables of contents and its init script is ported from bash to Bun; triage's AGENT-BRIEF and OUT-OF-SCOPE gain tables of contents; wayfinder's fenced map template uses a URL placeholder the dangling-link check accepts (pre-existing false positive on fenced code — the validator defect noted upstream) · 391af77

- Summary: Peter: 'make sure all other skills you recently created are valid as well' — all 22 skills touched this session run through plugin-kit's validator: 21 valid, wayfinder invalid on a pre-existing dangling-link hit against its fenced map template (present before this session) — the fenced placeholder now a URL form the check accepts (the validator's fence-blindness is the real defect, noted upstream); the warnings fixed at the cause: idea-refine's examples.md and refinement-criteria.md and triage's AGENT-BRIEF.md and OUT-OF-SCOPE.md gain fence-aware tables of contents (the best-practices rule for reference files over 100 lines), idea-refine's bash init script ported to Bun TypeScript with SKILL.md's usage line updated. Left with reasons: diagnosing-bugs' hitl-loop.template.sh (a user-run interactive shell loop — bash is its nature); security-and-hardening's body over the 5,000-token target (pre-existing, one word touched here). interview-me re-validated with environment checks on Peter's ask: valid, no collisions across 78 installed skills.
- Why: the validity sweep Peter asked for mid-turn; every fix follows the read-list's rules (ToCs, pure Bun).
- Files:
  - `skills/idea-refine/SKILL.md` (+1/−1) — usage line points at the Bun script
  - `skills/idea-refine/examples.md` (+13/−0) — table of contents
  - `skills/idea-refine/refinement-criteria.md` (+7/−0) — table of contents
  - `skills/idea-refine/scripts/idea-refine.sh` (+0/−15) — removed — ported to Bun
  - `skills/idea-refine/scripts/idea-refine.ts` (+13/−0) — the Bun port of the init script
  - `skills/triage/AGENT-BRIEF.md` (+6/−0) — table of contents
  - `skills/triage/OUT-OF-SCOPE.md` (+8/−0) — table of contents
  - `skills/wayfinder/SKILL.md` (+1/−1) — the map template's link placeholder in URL form

### 2026-08-31 · fix(diagnosing-bugs): restore agents/openai.yaml — deleted during Part 5 by a step I cannot name (no command in the record removed it; the sweep tool's target isolation is the unverified suspect); no other agents file differs from the session's start · 01e3d3c

- Summary: agents/openai.yaml restored from 8ab7ca7 — the only agents file that differed from the session's start. Cause unverified: no command in this session's record removed it; the sweep tool's target-isolation copy is the suspect, unproven.
- Why: the deletion surfaced as an unexplained line in cc922d3's skeleton; a deletion nobody intended is restored, not rationalized.
- Files:
  - `skills/diagnosing-bugs/agents/openai.yaml` (+3/−0) — restored
