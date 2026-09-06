---
unit: cc-addy-44
phase: 2
package: addy
session: 015
subagent_returned: complete
---

# Unit cc-addy-44

## Files assigned
- [x] sources/addy/skills/test-driven-development/SKILL.md
- [x] sources/addy/skills/using-agent-skills/SKILL.md
- [x] docs/analysis/inventory/addy/skills-test-driven-development-skill-md.md
- [x] docs/analysis/inventory/addy/skills-using-agent-skills-skill-md.md

## Outputs produced
- docs/analysis/concepts/addy/integration-test.md (1439 bytes)
- docs/analysis/concepts/addy/e2e-test.md (1461 bytes)
- docs/analysis/concepts/addy/writing-good-tests.md (951 bytes)
- docs/analysis/concepts/addy/test-state-not-interactions.md (1450 bytes)
- docs/analysis/concepts/addy/damp-over-dry-in-tests.md (1498 bytes)
- docs/analysis/concepts/addy/prefer-real-implementations-over-mocks.md (1461 bytes)
- docs/analysis/concepts/addy/arrange-act-assert-pattern.md (1326 bytes)
- docs/analysis/concepts/addy/one-assertion-per-concept.md (1326 bytes)
- docs/analysis/concepts/addy/name-tests-descriptively.md (1241 bytes)
- docs/analysis/concepts/addy/test-anti-patterns-to-avoid.md (1334 bytes)
- docs/analysis/concepts/addy/when-to-use-subagents-for-testing.md (1355 bytes)
- docs/analysis/concepts/addy/skill-discovery.md (1301 bytes)
- docs/analysis/concepts/addy/core-operating-behaviors.md (1534 bytes)
- docs/analysis/concepts/addy/surface-assumptions.md (1362 bytes)
- docs/analysis/concepts/addy/manage-confusion-actively.md (1356 bytes)
- docs/analysis/concepts/addy/push-back-when-warranted.md (1457 bytes)
- docs/analysis/concepts/addy/enforce-simplicity.md (1282 bytes)
- docs/analysis/concepts/addy/maintain-scope-discipline.md (1244 bytes)
- docs/analysis/concepts/addy/verify-don-t-assume.md (1446 bytes)
- docs/analysis/concepts/addy/failure-modes-to-avoid.md (1310 bytes)
- docs/analysis/concepts/addy/skill-rules.md (1257 bytes)
- docs/analysis/concepts/addy/lifecycle-sequence.md (1250 bytes)
- docs/analysis/concepts/addy/quick-reference.md (1195 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <23 cards>, exit code 0 (23 PASS, 0 FAIL)
- scripts/synthesis/concept-index.ts, bun scripts/synthesis/concept-index.ts, exit code 0
- scripts/synthesis/coverage.ts, bun scripts/synthesis/coverage.ts, exit code 0 (all 23 unit concept cards verified clean)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `skills/test-driven-development/SKILL.md` exhibits a cross-file contradiction regarding lifecycle phase placement: classified under `Build` in `README.md:363` and `CLAUDE.md:23`, but classified under `Verify` in `skills/using-agent-skills/SKILL.md:180` and `commands/test.toml:4`. All cards sourced from this skill reflect `package_phase: cross-phase` and record `defects: cross-file-contradiction, doc-drift`.
- `skills/using-agent-skills/SKILL.md` exhibits contradictions regarding `observability-and-instrumentation` placement (line 153 places it at step 8 during Build, while line 191 places it under Ship) as well as the TDD phase contradiction. All cards sourced from this meta-skill record `package_phase: cross-phase` and `defects: cross-file-contradiction, internal-contradiction, doc-drift`.
- `Writing Good Tests` represents a section heading introducing testing sub-principles rather than an independent lifecycle artifact/technique; it has been classified as `kind: name-only` per D-023.
- The six core operating behaviors (`Surface Assumptions`, `Manage Confusion Actively`, `Push Back When Warranted`, `Enforce Simplicity`, `Maintain Scope Discipline`, `Verify, Don't Assume`) are cataloged as sub-concepts of `core-operating-behaviors` and as distinct techniques/gates.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 2 source files and 2 inventory cards; approximate tokens of output written: ~8,500 tokens across 23 concept cards and 1 unit report.
