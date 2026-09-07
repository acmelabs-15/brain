---
unit: cc-rjm-172
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-172

## Files assigned
- [x] sources/rjm/.claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md
- [x] docs/analysis/inventory/rjm/claude-skills-prompt-engineer-references-prompt-engineering-multi-turn-md.md

## Outputs produced
- docs/analysis/concepts/rjm/simple-majority-voting.md (1450 bytes)
- docs/analysis/concepts/rjm/chain-synthesis.md (1406 bytes)
- docs/analysis/concepts/rjm/mcr.md (1473 bytes)
- docs/analysis/concepts/rjm/explanation-generation.md (1389 bytes)
- docs/analysis/concepts/rjm/iterative-refinement.md (1509 bytes)
- docs/analysis/concepts/rjm/feedback.md (1302 bytes)
- docs/analysis/concepts/rjm/refine.md (1285 bytes)
- docs/analysis/concepts/rjm/non-monotonic-improvement.md (1578 bytes)
- docs/analysis/concepts/rjm/acronym-generation.md (1142 bytes)
- docs/analysis/concepts/rjm/feedback-prompt-design.md (1384 bytes)
- docs/analysis/concepts/rjm/refinement-prompt-design.md (1413 bytes)
- docs/analysis/concepts/rjm/stopping-conditions.md (1380 bytes)
- docs/analysis/concepts/rjm/factored-vs-joint-verification.md (1651 bytes)
- docs/analysis/concepts/rjm/2-step-cove.md (1460 bytes)
- docs/analysis/concepts/rjm/factored-cove.md (1460 bytes)
- docs/analysis/concepts/rjm/verification-question-design.md (1421 bytes)
- docs/analysis/concepts/rjm/factor-revise.md (1467 bytes)
- docs/analysis/concepts/rjm/aggregation-and-consistency.md (1577 bytes)
- docs/analysis/concepts/rjm/gsm8k.md (955 bytes)
- docs/analysis/concepts/rjm/math.md (960 bytes)
- docs/analysis/concepts/rjm/truthfulqa.md (977 bytes)
- docs/analysis/concepts/rjm/summscreen.md (995 bytes)
- docs/analysis/concepts/rjm/complexity-based-consistency.md (1630 bytes)
- docs/analysis/concepts/rjm/conversation-structure-template.md (1434 bytes)
- docs/analysis/concepts/rjm/context-management.md (1409 bytes)
- docs/analysis/concepts/rjm/the-mixed-goal-turn.md (1371 bytes)
- docs/analysis/concepts/rjm/the-contaminated-context.md (1381 bytes)
- docs/analysis/concepts/rjm/the-yes-no-verification-trap.md (1419 bytes)
- docs/analysis/concepts/rjm/the-infinite-loop.md (1398 bytes)
- docs/analysis/concepts/rjm/the-forgotten-history.md (1362 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-172.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/simple-majority-voting.md docs/analysis/concepts/rjm/chain-synthesis.md docs/analysis/concepts/rjm/mcr.md docs/analysis/concepts/rjm/explanation-generation.md docs/analysis/concepts/rjm/iterative-refinement.md docs/analysis/concepts/rjm/feedback.md docs/analysis/concepts/rjm/refine.md docs/analysis/concepts/rjm/non-monotonic-improvement.md docs/analysis/concepts/rjm/acronym-generation.md docs/analysis/concepts/rjm/feedback-prompt-design.md docs/analysis/concepts/rjm/refinement-prompt-design.md docs/analysis/concepts/rjm/stopping-conditions.md docs/analysis/concepts/rjm/factored-vs-joint-verification.md docs/analysis/concepts/rjm/2-step-cove.md docs/analysis/concepts/rjm/factored-cove.md docs/analysis/concepts/rjm/verification-question-design.md docs/analysis/concepts/rjm/factor-revise.md docs/analysis/concepts/rjm/aggregation-and-consistency.md docs/analysis/concepts/rjm/gsm8k.md docs/analysis/concepts/rjm/math.md docs/analysis/concepts/rjm/truthfulqa.md docs/analysis/concepts/rjm/summscreen.md docs/analysis/concepts/rjm/complexity-based-consistency.md docs/analysis/concepts/rjm/conversation-structure-template.md docs/analysis/concepts/rjm/context-management.md docs/analysis/concepts/rjm/the-mixed-goal-turn.md docs/analysis/concepts/rjm/the-contaminated-context.md docs/analysis/concepts/rjm/the-yes-no-verification-trap.md docs/analysis/concepts/rjm/the-infinite-loop.md docs/analysis/concepts/rjm/the-forgotten-history.md` (exit code 0, 36 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-172 completes 30 concept cards derived from `.claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md`:
  1. Aggregation and multi-sample consensus techniques (`simple-majority-voting`, `aggregation-and-consistency`, `complexity-based-consistency`, `mcr`, `chain-synthesis`, `explanation-generation`).
  2. Iterative self-refinement mechanics (`iterative-refinement`, `feedback`, `refine`, `non-monotonic-improvement`, `feedback-prompt-design`, `refinement-prompt-design`, `stopping-conditions`).
  3. Structured self-verification architectures (`factored-vs-joint-verification`, `2-step-cove`, `factored-cove`, `verification-question-design`, `factor-revise`).
  4. Conversational patterns and context management (`conversation-structure-template`, `context-management`).
  5. Empirical prompt engineering anti-patterns (`the-mixed-goal-turn`, `the-contaminated-context`, `the-yes-no-verification-trap`, `the-infinite-loop`, `the-forgotten-history`).
  6. Benchmark evaluation datasets (`acronym-generation`, `gsm8k`, `math`, `truthfulqa`, `summscreen`) classified as `kind: name-only` per D-023.
- All 30 occurrences from `facts/cc-rjm-172.txt` are mapped 1-to-1 in the respective `Where used` tables.
- All 30 cards pass `bun scripts/synthesis/quote-check.ts` with 36 PASS, 0 FAIL, 0 MISSING source.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,000 tokens across 1 source reference file and 1 inventory card.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
