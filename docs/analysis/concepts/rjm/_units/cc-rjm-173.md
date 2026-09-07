---
unit: cc-rjm-173
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-173

## Files assigned
- [x] sources/rjm/.claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md
- [x] sources/rjm/.claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md
- [x] docs/analysis/inventory/rjm/claude-skills-prompt-engineer-references-prompt-engineering-multi-turn-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-prompt-engineer-references-prompt-engineering-single-turn-md.md

## Outputs produced
- docs/analysis/concepts/rjm/the-vague-feedback.md (1372 bytes)
- docs/analysis/concepts/rjm/the-majority-fallacy.md (1306 bytes)
- docs/analysis/concepts/rjm/self-refine-cove.md (1456 bytes)
- docs/analysis/concepts/rjm/usc-complexity-weighting.md (1429 bytes)
- docs/analysis/concepts/rjm/mcr-self-refine.md (1477 bytes)
- docs/analysis/concepts/rjm/active-prompting.md (991 bytes)
- docs/analysis/concepts/rjm/tree-of-thoughts.md (1007 bytes)
- docs/analysis/concepts/rjm/meta-prompting.md (934 bytes)
- docs/analysis/concepts/rjm/step-back.md (1614 bytes)
- docs/analysis/concepts/rjm/chain-of-draft.md (1509 bytes)
- docs/analysis/concepts/rjm/direct-prompting.md (1386 bytes)
- docs/analysis/concepts/rjm/thread-of-thought.md (1743 bytes)
- docs/analysis/concepts/rjm/re-reading.md (1663 bytes)
- docs/analysis/concepts/rjm/rar.md (1452 bytes)
- docs/analysis/concepts/rjm/rephrase-and-respond.md (1526 bytes)
- docs/analysis/concepts/rjm/s2a.md (1571 bytes)
- docs/analysis/concepts/rjm/system-2-attention.md (1561 bytes)
- docs/analysis/concepts/rjm/distractor-robust-prompting.md (1527 bytes)
- docs/analysis/concepts/rjm/document-positioning.md (1663 bytes)
- docs/analysis/concepts/rjm/complexity-based-selection.md (1468 bytes)
- docs/analysis/concepts/rjm/diversity-based-selection.md (1527 bytes)
- docs/analysis/concepts/rjm/analogical-prompting.md (1538 bytes)
- docs/analysis/concepts/rjm/xml-structure-patterns.md (1543 bytes)
- docs/analysis/concepts/rjm/output-format-strictness.md (1431 bytes)
- docs/analysis/concepts/rjm/hint-based-guidance.md (1600 bytes)
- docs/analysis/concepts/rjm/metacognitive-prompting.md (1833 bytes)
- docs/analysis/concepts/rjm/identity-establishment.md (1631 bytes)
- docs/analysis/concepts/rjm/role-play-prompting.md (1599 bytes)
- docs/analysis/concepts/rjm/emotional-stimuli.md (1487 bytes)
- docs/analysis/concepts/rjm/confidence-building.md (1482 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-173.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/the-vague-feedback.md docs/analysis/concepts/rjm/the-majority-fallacy.md docs/analysis/concepts/rjm/self-refine-cove.md docs/analysis/concepts/rjm/usc-complexity-weighting.md docs/analysis/concepts/rjm/mcr-self-refine.md docs/analysis/concepts/rjm/active-prompting.md docs/analysis/concepts/rjm/tree-of-thoughts.md docs/analysis/concepts/rjm/meta-prompting.md docs/analysis/concepts/rjm/step-back.md docs/analysis/concepts/rjm/chain-of-draft.md docs/analysis/concepts/rjm/direct-prompting.md docs/analysis/concepts/rjm/thread-of-thought.md docs/analysis/concepts/rjm/re-reading.md docs/analysis/concepts/rjm/rar.md docs/analysis/concepts/rjm/rephrase-and-respond.md docs/analysis/concepts/rjm/s2a.md docs/analysis/concepts/rjm/system-2-attention.md docs/analysis/concepts/rjm/distractor-robust-prompting.md docs/analysis/concepts/rjm/document-positioning.md docs/analysis/concepts/rjm/complexity-based-selection.md docs/analysis/concepts/rjm/diversity-based-selection.md docs/analysis/concepts/rjm/analogical-prompting.md docs/analysis/concepts/rjm/xml-structure-patterns.md docs/analysis/concepts/rjm/output-format-strictness.md docs/analysis/concepts/rjm/hint-based-guidance.md docs/analysis/concepts/rjm/metacognitive-prompting.md docs/analysis/concepts/rjm/identity-establishment.md docs/analysis/concepts/rjm/role-play-prompting.md docs/analysis/concepts/rjm/emotional-stimuli.md docs/analysis/concepts/rjm/confidence-building.md` (exit code 0, 46 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-173 covers 30 concept cards across prompt engineering research reference documents in rjm:
  1. Multi-turn prompt engineering patterns and technique combinations (`the-vague-feedback`, `the-majority-fallacy`, `self-refine-cove`, `usc-complexity-weighting`, `mcr-self-refine`).
  2. External research paper citations documented in reference bibliography (`active-prompting`, `tree-of-thoughts`, `meta-prompting`), categorized as `kind: name-only` with `(used, not defined)` per D-023.
  3. Single-turn reasoning enhancement techniques (`step-back`, `chain-of-draft`, `direct-prompting`, `thread-of-thought`).
  4. Input enhancement and context filtering techniques (`re-reading`, `rar`, `rephrase-and-respond`, `s2a`, `system-2-attention`, `distractor-robust-prompting`, `document-positioning`).
  5. Few-shot example selection and structure patterns (`complexity-based-selection`, `diversity-based-selection`, `analogical-prompting`, `xml-structure-patterns`, `output-format-strictness`, `hint-based-guidance`).
  6. Natural language understanding and behavioral shaping patterns (`metacognitive-prompting`, `identity-establishment`, `role-play-prompting`, `emotional-stimuli`, `confidence-building`).
- Both citing inventory files (`claude-skills-prompt-engineer-references-prompt-engineering-multi-turn-md.md` and `claude-skills-prompt-engineer-references-prompt-engineering-single-turn-md.md`) have clean implementation status with `defects: none`, systematically reflected as `Implementation status: clean` across all cards.
- All 30 cards pass `bun scripts/synthesis/quote-check.ts` byte-exact citation validation with 0 failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~27,000 tokens across 2 source files and 2 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 authored concept cards and 1 unit report.
