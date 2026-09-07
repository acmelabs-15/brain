---
unit: cc-matt-39
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-39

## Files assigned
- [x] sources/matt/skills/productivity/teach/GLOSSARY-FORMAT.md
- [x] sources/matt/skills/productivity/teach/LEARNING-RECORD-FORMAT.md
- [x] sources/matt/skills/productivity/teach/MISSION-FORMAT.md
- [x] sources/matt/skills/productivity/teach/RESOURCES-FORMAT.md
- [x] sources/matt/skills/productivity/teach/SKILL.md
- [x] docs/analysis/inventory/matt/skills-productivity-teach-glossary-format-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-teach-learning-record-format-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-teach-mission-format-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-teach-resources-format-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-teach-skill-md.md

## Outputs produced
- docs/analysis/concepts/matt/structure.md — 968 bytes
- docs/analysis/concepts/matt/terms.md — 947 bytes
- docs/analysis/concepts/matt/hypertrophy.md — 1076 bytes
- docs/analysis/concepts/matt/progressive-overload.md — 1125 bytes
- docs/analysis/concepts/matt/rpe-rate-of-perceived-exertion.md — 1168 bytes
- docs/analysis/concepts/matt/rules.md — 1327 bytes
- docs/analysis/concepts/matt/learning-record.md — 1878 bytes
- docs/analysis/concepts/matt/evidence.md — 1395 bytes
- docs/analysis/concepts/matt/implications.md — 1332 bytes
- docs/analysis/concepts/matt/numbering.md — 1004 bytes
- docs/analysis/concepts/matt/when-to-write-a-learning-record.md — 1035 bytes
- docs/analysis/concepts/matt/what-does-not-qualify.md — 1089 bytes
- docs/analysis/concepts/matt/supersession.md — 1446 bytes
- docs/analysis/concepts/matt/workspace-root.md — 962 bytes
- docs/analysis/concepts/matt/teaching-decision.md — 1463 bytes
- docs/analysis/concepts/matt/why.md — 1252 bytes
- docs/analysis/concepts/matt/success-looks-like.md — 1235 bytes
- docs/analysis/concepts/matt/constraints.md — 1228 bytes
- docs/analysis/concepts/matt/parametric-guesses.md — 1244 bytes
- docs/analysis/concepts/matt/wisdom-communities.md — 1285 bytes
- docs/analysis/concepts/matt/gaps.md — 1276 bytes
- docs/analysis/concepts/matt/reference-html.md — 1505 bytes
- docs/analysis/concepts/matt/resources-format-md.md — 1069 bytes
- docs/analysis/concepts/matt/learning-records-md.md — 1616 bytes
- docs/analysis/concepts/matt/architectural-decision-records.md — 1466 bytes
- docs/analysis/concepts/matt/learning-record-format-md.md — 1105 bytes
- docs/analysis/concepts/matt/lessons-html.md — 1513 bytes
- docs/analysis/concepts/matt/philosophy.md — 1046 bytes
- docs/analysis/concepts/matt/fluency-vs-storage-strength.md — 1730 bytes
- docs/analysis/concepts/matt/fluency-strength.md — 1332 bytes
- docs/analysis/concepts/matt/_units/cc-matt-39.md — this report

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/structure.md docs/analysis/concepts/matt/terms.md docs/analysis/concepts/matt/hypertrophy.md docs/analysis/concepts/matt/progressive-overload.md docs/analysis/concepts/matt/rpe-rate-of-perceived-exertion.md docs/analysis/concepts/matt/rules.md docs/analysis/concepts/matt/learning-record.md docs/analysis/concepts/matt/evidence.md docs/analysis/concepts/matt/implications.md docs/analysis/concepts/matt/numbering.md docs/analysis/concepts/matt/when-to-write-a-learning-record.md docs/analysis/concepts/matt/what-does-not-qualify.md docs/analysis/concepts/matt/supersession.md docs/analysis/concepts/matt/workspace-root.md docs/analysis/concepts/matt/teaching-decision.md docs/analysis/concepts/matt/why.md docs/analysis/concepts/matt/success-looks-like.md docs/analysis/concepts/matt/constraints.md docs/analysis/concepts/matt/parametric-guesses.md docs/analysis/concepts/matt/wisdom-communities.md docs/analysis/concepts/matt/gaps.md docs/analysis/concepts/matt/reference-html.md docs/analysis/concepts/matt/resources-format-md.md docs/analysis/concepts/matt/learning-records-md.md docs/analysis/concepts/matt/architectural-decision-records.md docs/analysis/concepts/matt/learning-record-format-md.md docs/analysis/concepts/matt/lessons-html.md docs/analysis/concepts/matt/philosophy.md docs/analysis/concepts/matt/fluency-vs-storage-strength.md docs/analysis/concepts/matt/fluency-strength.md — exit 0 (31 PASS, 0 FAIL)
- bun scripts/synthesis/concept-index.ts — exit 0 (regenerated index)
- bun scripts/synthesis/coverage.ts — exit 0 for unit cc-matt-39 cards (all 30 cards covered and valid)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The concepts in `skills/productivity/teach/` form an integrated teaching workspace model encompassing workspace grounding (`MISSION.md`, `Why`, `Success looks like`, `Constraints`), curated knowledge (`RESOURCES.md`, `parametric-guesses`, `Wisdom (Communities)`, `Gaps`), persistent learner memory (`learning-records`, `evidence`, `implications`, `supersession`), instructional delivery (`./lessons/*.html`), and reference storage (`./reference/*.html`).
- The pedagogical framework draws explicitly from cognitive psychology, distinguishing `fluency-strength` from `storage-strength` and employing desirable difficulty principles.
- `architectural-decision-records` is cited directly as the architectural analog for `learning-record`, connecting teaching state preservation to engineering ADR practices.
- Structural markdown headings (`Structure`, `Terms`, `Rules`, `Numbering`, `When to write a learning record`, `What does _not_ qualify`, `Philosophy`), illustrative domain examples (`Hypertrophy`, `Progressive overload`, `RPE (Rate of Perceived Exertion)`), and file path identifiers (`workspace-root`, `RESOURCES-FORMAT.md`, `LEARNING-RECORD-FORMAT.md`) were classified with `kind: name-only` per D-023.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~18,000 bytes (~4,000 tokens) across 5 source files and 5 citing inventory cards.
Approximate output written: ~39,000 bytes (~9,000 tokens) across 30 concept cards and this unit report.
