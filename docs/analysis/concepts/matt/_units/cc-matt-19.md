---
unit: cc-matt-19
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-19

## Files assigned
- [x] sources/matt-external/diagnosing-bugs.md
- [x] sources/matt-external/domain-modeling.md
- [x] sources/matt-external/grill-with-docs.md
- [x] sources/matt-external/implement.md
- [x] sources/matt-external/prototype.md
- [x] sources/matt-external/resolving-merge-conflicts.md
- [x] sources/matt-external/to-questionnaire.md
- [x] sources/matt-external/triage.md
- [x] sources/matt-external/wizard.md
- [x] sources/matt/skills/engineering/diagnosing-bugs/SKILL.md
- [x] sources/matt/skills/engineering/domain-modeling/ADR-FORMAT.md
- [x] sources/matt/skills/engineering/domain-modeling/SKILL.md
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/SKILL.md
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/domain.md
- [x] sources/matt/skills/productivity/teach/GLOSSARY-FORMAT.md
- [x] sources/matt/skills/productivity/teach/LEARNING-RECORD-FORMAT.md

## Outputs produced
- docs/analysis/concepts/matt/instrumentation.md — 1394 bytes
- docs/analysis/concepts/matt/phase-1.md — 1473 bytes
- docs/analysis/concepts/matt/failing-test.md — 1275 bytes
- docs/analysis/concepts/matt/snapshot.md — 1245 bytes
- docs/analysis/concepts/matt/replayed-capture.md — 1295 bytes
- docs/analysis/concepts/matt/throwaway-harness.md — 1238 bytes
- docs/analysis/concepts/matt/fuzz-loop.md — 1484 bytes
- docs/analysis/concepts/matt/bisection-harness.md — 1491 bytes
- docs/analysis/concepts/matt/git-bisect-run.md — 1215 bytes
- docs/analysis/concepts/matt/differential-loop.md — 1464 bytes
- docs/analysis/concepts/matt/temporary-instrumentation.md — 1336 bytes
- docs/analysis/concepts/matt/phase-2.md — 1192 bytes
- docs/analysis/concepts/matt/phase-3.md — 1419 bytes
- docs/analysis/concepts/matt/phase-4.md — 1377 bytes
- docs/analysis/concepts/matt/phase-5.md — 1473 bytes
- docs/analysis/concepts/matt/load-bearing.md — 1348 bytes
- docs/analysis/concepts/matt/commit-message.md — 1551 bytes
- docs/analysis/concepts/matt/performance-branch.md — 1450 bytes
- docs/analysis/concepts/matt/human-checkpoint.md — 1315 bytes
- docs/analysis/concepts/matt/root-cause.md — 1488 bytes
- docs/analysis/concepts/matt/redaction-guardrail.md — 1778 bytes
- docs/analysis/concepts/matt/hitl-loop-template-sh.md — 1139 bytes
- docs/analysis/concepts/matt/standalone.md — 2003 bytes
- docs/analysis/concepts/matt/when-to-reach-for-it.md — 1388 bytes
- docs/analysis/concepts/matt/docs-adr.md — 1735 bytes
- docs/analysis/concepts/matt/two-artifacts-two-bars.md — 1114 bytes
- docs/analysis/concepts/matt/scratch-pad.md — 1282 bytes
- docs/analysis/concepts/matt/cross-referencing-and-where-it-stops.md — 1240 bytes
- docs/analysis/concepts/matt/docs-agents-domain-md.md — 1412 bytes
- docs/analysis/concepts/matt/glossary-md.md — 1950 bytes
- docs/analysis/concepts/matt/_units/cc-matt-19.md — 6877 bytes

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/instrumentation.md docs/analysis/concepts/matt/phase-1.md docs/analysis/concepts/matt/failing-test.md docs/analysis/concepts/matt/snapshot.md docs/analysis/concepts/matt/replayed-capture.md docs/analysis/concepts/matt/throwaway-harness.md docs/analysis/concepts/matt/fuzz-loop.md docs/analysis/concepts/matt/bisection-harness.md docs/analysis/concepts/matt/git-bisect-run.md docs/analysis/concepts/matt/differential-loop.md docs/analysis/concepts/matt/temporary-instrumentation.md docs/analysis/concepts/matt/phase-2.md docs/analysis/concepts/matt/phase-3.md docs/analysis/concepts/matt/phase-4.md docs/analysis/concepts/matt/phase-5.md docs/analysis/concepts/matt/load-bearing.md docs/analysis/concepts/matt/commit-message.md docs/analysis/concepts/matt/performance-branch.md docs/analysis/concepts/matt/human-checkpoint.md docs/analysis/concepts/matt/root-cause.md docs/analysis/concepts/matt/redaction-guardrail.md docs/analysis/concepts/matt/hitl-loop-template-sh.md docs/analysis/concepts/matt/standalone.md docs/analysis/concepts/matt/when-to-reach-for-it.md docs/analysis/concepts/matt/docs-adr.md docs/analysis/concepts/matt/two-artifacts-two-bars.md docs/analysis/concepts/matt/scratch-pad.md docs/analysis/concepts/matt/cross-referencing-and-where-it-stops.md docs/analysis/concepts/matt/docs-agents-domain-md.md docs/analysis/concepts/matt/glossary-md.md` — exit 0 (31 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Diagnostic gate hierarchy (`phase-1`, `phase-2`, `phase-3`, `phase-4`, `phase-5`, `load-bearing`, `human-checkpoint`, `root-cause`, `performance-branch`, `redaction-guardrail`): Matt's `diagnosing-bugs` workflow structures debugging as a strict progression of gates rather than an open-ended checklist. Phase 1 requires an automated red-capable reproducer; Phase 2 minimizes the test case until all remaining elements are load-bearing; Phase 3 presents 3–5 ranked falsifiable hypotheses at a human checkpoint; Phase 4 executes targeted probing with tagged logs; Phase 5 implements the fix with a regression test at a true seam, cleans up instrumentation, and commits the confirmed hypothesis.
- Standalone skill architecture (`standalone`): A foundational taxonomic concept across Matt's ecosystem connecting `diagnosing-bugs`, `resolving-merge-conflicts`, `to-questionnaire`, and `wizard`. Standalone skills hold no state, require no prerequisite setup, and are invoked on-demand when specific trigger conditions occur.
- Domain modeling and documentation governance (`docs-adr`, `two-artifacts-two-bars`, `scratch-pad`, `cross-referencing-and-where-it-stops`, `docs-agents-domain-md`, `glossary-md`): Establishes strict separation of concerns between ubiquitous vocabulary (`CONTEXT.md` / `GLOSSARY.md`) and architectural decisions (`docs/adr/`). `scratch pad` is an explicitly forbidden anti-pattern for glossaries.
- Documentation headings and file references (`When to reach for it`, `Two artifacts, two bars`, `Cross-referencing, and where it stops`, `hitl-loop.template.sh`, `docs/agents/domain.md`, `docs/adr/`): Classified with `kind: name-only` per D-023 to preserve mechanical coverage without polluting lifecycle concordance.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~140,000 tokens (across 16 source files including external HTML doc snapshots).
Approximate output written: ~12,800 tokens across 30 concept cards and this unit report.
