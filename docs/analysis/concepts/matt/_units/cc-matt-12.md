---
unit: cc-matt-12
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-12

## Files assigned
- [x] sources/matt/docs/engineering/codebase-design.md
- [x] sources/matt/docs/engineering/diagnosing-bugs.md
- [x] sources/matt/docs/engineering/domain-modeling.md
- [x] sources/matt/docs/engineering/grill-with-docs.md
- [x] sources/matt/docs/engineering/wayfinder.md
- [x] sources/matt/docs/productivity/grilling.md
- [x] sources/matt/docs/productivity/writing-for-agents.md
- [x] sources/matt-external/ask-matt.md
- [x] sources/matt-external/codebase-design.md
- [x] sources/matt-external/diagnosing-bugs.md
- [x] sources/matt-external/domain-modeling.md
- [x] sources/matt-external/grill-with-docs.md
- [x] sources/matt-external/wayfinder.md
- [x] sources/matt-external/writing-for-agents.md
- [x] sources/matt/skills/engineering/diagnosing-bugs/SKILL.md
- [x] sources/matt/skills/engineering/domain-modeling/CONTEXT-FORMAT.md
- [x] sources/matt/skills/engineering/grill-with-docs/SKILL.md
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/domain.md
- [x] sources/matt/skills/in-progress/retro/SKILL.md
- [x] sources/matt/skills/productivity/teach/SKILL.md
- [x] sources/matt/skills/productivity/writing-for-agents/SKILL.md

## Outputs produced
- docs/analysis/concepts/matt/design-an-interface.md — 1408 bytes
- docs/analysis/concepts/matt/interface-design.md — 1184 bytes
- docs/analysis/concepts/matt/harnesses.md — 1763 bytes
- docs/analysis/concepts/matt/connascence.md — 1581 bytes
- docs/analysis/concepts/matt/module-secrets.md — 1566 bytes
- docs/analysis/concepts/matt/progressive-disclosure.md — 2059 bytes
- docs/analysis/concepts/matt/vocabulary-layer.md — 2182 bytes
- docs/analysis/concepts/matt/regression-test.md — 2040 bytes
- docs/analysis/concepts/matt/tight.md — 1524 bytes
- docs/analysis/concepts/matt/feedback-loop.md — 2145 bytes
- docs/analysis/concepts/matt/bisection.md — 1555 bytes
- docs/analysis/concepts/matt/human-in-the-loop.md — 1701 bytes
- docs/analysis/concepts/matt/scripts-hitl-loop-template-sh.md — 1238 bytes
- docs/analysis/concepts/matt/reproduction-rate.md — 1731 bytes
- docs/analysis/concepts/matt/environment.md — 1833 bytes
- docs/analysis/concepts/matt/gates.md — 1532 bytes
- docs/analysis/concepts/matt/falsifiable-hypotheses.md — 1392 bytes
- docs/analysis/concepts/matt/debug-log.md — 1404 bytes
- docs/analysis/concepts/matt/correct-seam.md — 1964 bytes
- docs/analysis/concepts/matt/leak-secrets.md — 1115 bytes
- docs/analysis/concepts/matt/glossary.md — 2338 bytes
- docs/analysis/concepts/matt/models.md — 1992 bytes
- docs/analysis/concepts/matt/avoid.md — 1756 bytes
- docs/analysis/concepts/matt/all-three.md — 1083 bytes
- docs/analysis/concepts/matt/adr-s-three-tests.md — 1624 bytes
- docs/analysis/concepts/matt/three-tests.md — 1409 bytes
- docs/analysis/concepts/matt/bounded-area.md — 1412 bytes
- docs/analysis/concepts/matt/ddd.md — 1706 bytes
- docs/analysis/concepts/matt/model-invoked-reference.md — 1792 bytes
- docs/analysis/concepts/matt/interview.md — 2193 bytes
- docs/analysis/concepts/matt/_units/cc-matt-12.md — this report

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/design-an-interface.md docs/analysis/concepts/matt/interface-design.md docs/analysis/concepts/matt/harnesses.md docs/analysis/concepts/matt/connascence.md docs/analysis/concepts/matt/module-secrets.md docs/analysis/concepts/matt/progressive-disclosure.md docs/analysis/concepts/matt/vocabulary-layer.md docs/analysis/concepts/matt/regression-test.md docs/analysis/concepts/matt/tight.md docs/analysis/concepts/matt/feedback-loop.md docs/analysis/concepts/matt/bisection.md docs/analysis/concepts/matt/human-in-the-loop.md docs/analysis/concepts/matt/scripts-hitl-loop-template-sh.md docs/analysis/concepts/matt/reproduction-rate.md docs/analysis/concepts/matt/environment.md docs/analysis/concepts/matt/gates.md docs/analysis/concepts/matt/falsifiable-hypotheses.md docs/analysis/concepts/matt/debug-log.md docs/analysis/concepts/matt/correct-seam.md docs/analysis/concepts/matt/leak-secrets.md docs/analysis/concepts/matt/glossary.md docs/analysis/concepts/matt/models.md docs/analysis/concepts/matt/avoid.md docs/analysis/concepts/matt/all-three.md docs/analysis/concepts/matt/adr-s-three-tests.md docs/analysis/concepts/matt/three-tests.md docs/analysis/concepts/matt/bounded-area.md docs/analysis/concepts/matt/ddd.md docs/analysis/concepts/matt/model-invoked-reference.md docs/analysis/concepts/matt/interview.md — exit 0 (34 PASS, 0 FAIL)
- bun scripts/synthesis/concept-index.ts — exit 0 (regenerated docs/analysis/concepts/matt/_index.md)
- bun scripts/synthesis/coverage.ts — exit 0 (clean, 0 failures)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Debugging workflow concepts (`regression-test`, `tight`, `feedback-loop`, `bisection`, `human-in-the-loop`, `scripts-hitl-loop-template-sh`, `reproduction-rate`, `gates`, `falsifiable-hypotheses`, `debug-log`, `correct-seam`, `leak-secrets`) form an integrated methodology in `diagnosing-bugs.md` and `skills/engineering/diagnosing-bugs/SKILL.md`. `correct-seam` directly connects to `seam` from unit cc-matt-11.
- Domain modeling concepts (`glossary`, `models`, `avoid`, `all-three`, `adr-s-three-tests`, `three-tests`, `bounded-area`, `ddd`, `model-invoked-reference`, `vocabulary-layer`) establish criteria for documentation design. The "three tests" rule (bounded area, clear glossary terms, model-invoked reference) is captured under both `adr-s-three-tests` and `three-tests`, and summarized in `all-three`.
- `progressive-disclosure` spans both engineering (`codebase-design.md`) and documentation authoring (`writing-for-agents.md`), defining tiered disclosure between root context and reference documents.
- `scripts-hitl-loop-template-sh` is an internal script template reference cited in `diagnosing-bugs.md:36` and is recorded with `kind: name-only`.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~135,000 tokens (across 21 source files including external HTML snapshots).
Approximate output written: ~12,500 tokens across 30 concept cards and this unit report.
