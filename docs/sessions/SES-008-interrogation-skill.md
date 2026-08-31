# 2026-08-31 14:28 · The interrogation skill — PLAN-005 Part 1

- Goal: PLAN-005 Part 1 — interview-me rebuilt as the interrogation skill (ADR-006 D2/D4, ADR-005 decision 6): intent and artifact modes behind a Step-0 fork, first line the brain:ask-user-question call, one question at a time, the prototype move and the fog-or-ticket test, the domain-modeling handoff; grilling to a pointer stub; grill-me and grill-with-docs retarget; wayfinder's and triage's grilling calls follow; idea-refine gains the decrees and the handoff edge. Acceptance: the merged trigger set measured at or above both old skills' rates, a headless render showing the first line firing, validators green.
- Status: done
- Plan: PLAN-005 · part 1
- Outcome: PLAN-005 Part 1 done in one push (`9dfa271`): the interrogation skill live under the conditional-workflow pattern with both modes, the decree verified firing first in a headless render, the injection verified by verbatim quote-back, the merged description measured strictly better than both baselines (21/22 vs 16 and 18), every retired surface a stub or retargeted call site, idea-refine under the decrees. Next: Part 2, the requirements skill, in a fresh session.

## Narrative

Opened right after ADR-006/PRD-002/PLAN-005 landed (SES-007's close). The build ran with Peter steering mid-turn twice: the skill restructured to the docs' conditional-workflow pattern (his pointer — SKILL.md became the decision point at ~90 lines with intent-mode.md and artifact-mode.md read per branch), and the `/brain:grill-with-docs` mention removed from the body (the skill replaces it, so the body must not cite it). Verified, not assumed: the first render's stream showed the model's first act was the brain:ask-user-question Skill call ("as the interview skill requires"); the second render quoted the injected read-rule sentence back verbatim and read artifact-mode.md; the injection's absence from stream 1's grep was a weak oracle (stream-json never echoes the expanded prompt), diagnosed before trusting it. The first sweep summary misread the results' field names (rows at rate 1.00 printed as MISS) — recounted on the real `pass`/`trigger_rate` fields before any conclusion; the lesson stands: read the wire contract before summarizing it (`9dfa271`).

## Changes (one entry per commit, in order)

### 2026-08-31 · feat(interview-me): the interrogation skill — intent and artifact modes behind a conditional-workflow fork (mode files read per branch), first line calls brain:ask-user-question, one question at a time, the prototype move and fog-or-ticket test, the read-rule !-cat injection from references/read-the-glossary.md; grilling retires to a stub, wrappers and the three call sites (wayfinder, triage, loop-me) retarget, grill-with-docs no longer referenced from the body; idea-refine gains the decrees and handoff edges; measured 21/22 vs 16 and 18 baselines (evals committed), render verified injection + first line (PLAN-005 Part 1) · 9dfa271

- Summary: interview-me is now the interrogation skill (PRD-002 requirements 1–2): the decree as its literal first body line, the read-rule injected by `!`-cat from the new one-home `references/read-the-glossary.md` (with `allowed-tools: Bash(cat:*)`), the conditional-workflow fork reading intent-mode.md (hypothesis+confidence, guess-in-the-call, want-vs-should-want, restate, explicit yes, the 95% stop) or artifact-mode.md (design tree, frontier in dependency order one question at a time, facts by subagents) per branch, the prototype move and fog-or-ticket test shared. grilling is a disable-model-invocation stub; grill-me and grill-with-docs call interview-me; wayfinder (3 calls), triage and loop-me retarget. idea-refine gains the first-line decree, one-at-a-time sharpening questions, and the handoff section. Measured: merged description 21/22 on the 22-query set (fails only "make it faster", which both baselines also fail at 0.00) vs old interview-me 16/22 and old grilling 18/22; every verdict ≥ both olds; one rate dip within passing bounds (0.67 vs old-grilling's 1.00 on one row) and one negative at 0.33 (declined, between the two baselines). Rendered twice with strong oracles.
- Why: PLAN-005 Part 1 Tasks 1–2 (ADR-006 D2/D4; ADR-005 decision 6 discharged; PLAN-002 Part 5 Task 5 absorbed here — read-the-glossary.md created with this, its first consumer; the other 15 conversions stay PLAN-002's).
- Files:
  - `references/read-the-glossary.md` (+1/−0) — the read rule's one home, injected at skill load
  - `skills/grill-me/SKILL.md` (+2/−2) — calls interview-me (artifact mode)
  - `skills/grill-with-docs/SKILL.md` (+1/−1) — calls interview-me (artifact mode) + domain-modeling
  - `skills/grilling/SKILL.md` (+3/−24) — retired to a disable-model-invocation pointer stub
  - `skills/idea-refine/SKILL.md` (+14/−2) — the decree first line, one-at-a-time questions, the Handoffs section
  - `skills/interview-me/SKILL.md` (+49/−188) — the decision point: decree, injection, the conditional fork, the two moves, shared checks
  - `skills/interview-me/artifact-mode.md` (+30/−0) — the design tree and frontier discipline, read when an artifact exists
  - `skills/interview-me/evals/results/trigger/merge-1/merged.sonnet.envelope.json` (+429/−0) — the sweep of record (envelope: conditions and provenance)
  - `skills/interview-me/evals/results/trigger/merge-1/merged.sonnet.json` (+209/−0) — the sweep of record (envelope: conditions and provenance)
  - `skills/interview-me/evals/results/trigger/merge-1/merged.sonnet.log` (+3/−0) — the sweep of record (envelope: conditions and provenance)
  - `skills/interview-me/evals/results/trigger/merge-1/old-grilling.sonnet.envelope.json` (+429/−0) — the sweep of record (envelope: conditions and provenance)
  - `skills/interview-me/evals/results/trigger/merge-1/old-grilling.sonnet.json` (+209/−0) — the sweep of record (envelope: conditions and provenance)
  - `skills/interview-me/evals/results/trigger/merge-1/old-grilling.sonnet.log` (+3/−0) — the sweep of record (envelope: conditions and provenance)
  - `skills/interview-me/evals/results/trigger/merge-1/old-interview-me.sonnet.envelope.json` (+429/−0) — the sweep of record (envelope: conditions and provenance)
  - `skills/interview-me/evals/results/trigger/merge-1/old-interview-me.sonnet.json` (+209/−0) — the sweep of record (envelope: conditions and provenance)
  - `skills/interview-me/evals/results/trigger/merge-1/old-interview-me.sonnet.log` (+3/−0) — the sweep of record (envelope: conditions and provenance)
  - `skills/interview-me/evals/trigger-eval.json` (+24/−0) — 12 positives (both lineages' phrasings) + 10 hard negatives
  - `skills/interview-me/intent-mode.md` (+68/−0) — Steps 1–5 and the 95% stop, read when no artifact exists
  - `skills/loop-me/SKILL.md` (+1/−1) — its grilling call retargeted
  - `skills/triage/SKILL.md` (+1/−1) — step 4 retargeted, one question at a time
  - `skills/wayfinder/SKILL.md` (+3/−3) — the three Skill-tool calls retargeted; ticket labels untouched
