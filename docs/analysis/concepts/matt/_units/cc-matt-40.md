---
unit: cc-matt-40
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-40

## Files assigned
- [x] sources/matt/skills/productivity/teach/SKILL.md
- [x] sources/matt/skills/productivity/to-questionnaire/SKILL.md
- [x] sources/matt/skills/productivity/writing-for-agents/SKILL-MECHANICS.md
- [x] sources/matt/skills/productivity/writing-for-agents/SKILL.md
- [x] docs/analysis/inventory/matt/skills-productivity-teach-skill-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-to-questionnaire-skill-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-writing-for-agents-skill-mechanics-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-writing-for-agents-skill-md.md

## Outputs produced
- docs/analysis/concepts/matt/the-mission.md — 1328 bytes
- docs/analysis/concepts/matt/acquiring-wisdom.md — 1387 bytes
- docs/analysis/concepts/matt/community.md — 1428 bytes
- docs/analysis/concepts/matt/reference-documents.md — 1438 bytes
- docs/analysis/concepts/matt/glossaries.md — 1291 bytes
- docs/analysis/concepts/matt/grill-the-send-not-the-subject.md — 1617 bytes
- docs/analysis/concepts/matt/questionnaire-template.md — 1344 bytes
- docs/analysis/concepts/matt/how-to-answer.md — 974 bytes
- docs/analysis/concepts/matt/question-example.md — 1096 bytes
- docs/analysis/concepts/matt/anything-else.md — 1000 bytes
- docs/analysis/concepts/matt/skill-mechanics.md — 1465 bytes
- docs/analysis/concepts/matt/splitting-by-invocation.md — 1648 bytes
- docs/analysis/concepts/matt/router-skill.md — 1598 bytes
- docs/analysis/concepts/matt/branches.md — 1309 bytes
- docs/analysis/concepts/matt/steps.md — 1340 bytes
- docs/analysis/concepts/matt/in-file-step.md — 1226 bytes
- docs/analysis/concepts/matt/in-file-reference.md — 1413 bytes
- docs/analysis/concepts/matt/disclosed-reference.md — 1502 bytes
- docs/analysis/concepts/matt/co-location.md — 1492 bytes
- docs/analysis/concepts/matt/steps-and-completion-criteria.md — 1378 bytes
- docs/analysis/concepts/matt/completion-criterion.md — 1289 bytes
- docs/analysis/concepts/matt/post-completion-steps.md — 1382 bytes
- docs/analysis/concepts/matt/when-to-split.md — 1398 bytes
- docs/analysis/concepts/matt/_units/cc-matt-40.md — this report

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/the-mission.md docs/analysis/concepts/matt/acquiring-wisdom.md docs/analysis/concepts/matt/community.md docs/analysis/concepts/matt/reference-documents.md docs/analysis/concepts/matt/glossaries.md docs/analysis/concepts/matt/grill-the-send-not-the-subject.md docs/analysis/concepts/matt/questionnaire-template.md docs/analysis/concepts/matt/how-to-answer.md docs/analysis/concepts/matt/question-example.md docs/analysis/concepts/matt/anything-else.md docs/analysis/concepts/matt/skill-mechanics.md docs/analysis/concepts/matt/splitting-by-invocation.md docs/analysis/concepts/matt/router-skill.md docs/analysis/concepts/matt/branches.md docs/analysis/concepts/matt/steps.md docs/analysis/concepts/matt/in-file-step.md docs/analysis/concepts/matt/in-file-reference.md docs/analysis/concepts/matt/disclosed-reference.md docs/analysis/concepts/matt/co-location.md docs/analysis/concepts/matt/steps-and-completion-criteria.md docs/analysis/concepts/matt/completion-criterion.md docs/analysis/concepts/matt/post-completion-steps.md docs/analysis/concepts/matt/when-to-split.md — exit 0 (24 PASS, 0 FAIL)
- bun scripts/synthesis/coverage.ts — exit 0 / clean on unit concepts (0 empty required, 0 orphan cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Concepts in `skills/productivity/teach/` (`the-mission`, `acquiring-wisdom`, `community`, `reference-documents`, `glossaries`) complete the educational workspace architecture started in earlier productivity units. Defect history inherited from `skills-productivity-teach-skill-md.md` reflects `doc-drift` (omitted link to `GLOSSARY-FORMAT.md`) and `other` (initial knowledge assessment gap).
- In `to-questionnaire`, `how-to-answer`, `question-example`, and `anything-else` represent structural template headings and XML formatting tags within `<questionnaire-template>`, correctly classified with `kind: name-only` per D-023.
- In `writing-for-agents` and `SKILL-MECHANICS.md`, authoring levers (`branches`, `steps`, `in-file-step`, `in-file-reference`, `disclosed-reference`, `co-location`, `steps-and-completion-criteria`, `completion-criterion`, `post-completion-steps`, `when-to-split`, `skill-mechanics`, `splitting-by-invocation`, `router-skill`) formalize the progressive disclosure and behavioral completion bounds governing prompt authoring across Matt's repository.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~26,000 bytes (~6,000 tokens) across 4 source files and 4 citing inventory cards.
Approximate output written: ~33,500 bytes (~7,500 tokens) across 23 concept cards and this unit report.
