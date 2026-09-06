---
unit: cc-addy-17
phase: 2
package: addy
session: 015
subagent_returned: complete
---

# Unit cc-addy-17

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/README.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/README.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/spec-driven-development/billing-brief.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/test-driven-development-ecosystem/README.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/test-driven-development-ecosystem/ledger.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/test-driven-development-ecosystem/test_ledger.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/test-driven-development/BUG.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/test-driven-development/README.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/test-driven-development/package.json
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/test-driven-development/src/split.js
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/evals/fixtures/using-agent-skills/incident.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/idea-refine.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/interview-me.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/spec-driven-development.md

## Outputs produced
- docs/analysis/concepts/addy/spec.md (1930 bytes)
- docs/analysis/concepts/addy/apply-entries.md (1007 bytes)
- docs/analysis/concepts/addy/credit.md (1008 bytes)
- docs/analysis/concepts/addy/ledger.md (762 bytes)
- docs/analysis/concepts/addy/applyentriestest.md (838 bytes)
- docs/analysis/concepts/addy/unittest-testcase.md (870 bytes)
- docs/analysis/concepts/addy/bug-report.md (842 bytes)
- docs/analysis/concepts/addy/reconciliation.md (843 bytes)
- docs/analysis/concepts/addy/split-payment.md (949 bytes)
- docs/analysis/concepts/addy/totalcents.md (949 bytes)
- docs/analysis/concepts/addy/exactness.md (851 bytes)
- docs/analysis/concepts/addy/fairness.md (863 bytes)
- docs/analysis/concepts/addy/npm-test.md (779 bytes)
- docs/analysis/concepts/addy/share.md (799 bytes)
- docs/analysis/concepts/addy/login-regression-report.md (817 bytes)
- docs/analysis/concepts/addy/http-500.md (826 bytes)
- docs/analysis/concepts/addy/authentication-callback.md (887 bytes)
- docs/analysis/concepts/addy/session-cookie.md (871 bytes)
- docs/analysis/concepts/addy/skill-evals.md (1492 bytes)
- docs/analysis/concepts/addy/skill-creator.md (1165 bytes)
- docs/analysis/concepts/addy/evals-json.md (1135 bytes)
- docs/analysis/concepts/addy/superpowers.md (950 bytes)
- docs/analysis/concepts/addy/the-three-tiers.md (764 bytes)
- docs/analysis/concepts/addy/structural.md (893 bytes)
- docs/analysis/concepts/addy/validate-skills-js.md (879 bytes)
- docs/analysis/concepts/addy/validate-commands-js.md (875 bytes)
- docs/analysis/concepts/addy/trigger-routing.md (937 bytes)
- docs/analysis/concepts/addy/run-evals-js.md (879 bytes)
- docs/analysis/concepts/addy/behavioral.md (866 bytes)
- docs/analysis/concepts/addy/execution.md (1102 bytes)
- docs/analysis/concepts/addy/_units/cc-addy-17.md (4914 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts docs/analysis/concepts/addy/<30 cards>, exit code 0
- scripts/synthesis/coverage.ts, bun scripts/synthesis/coverage.ts, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- 28 of the 30 concepts in this unit originate from eval fixtures (`evals/fixtures/*`) or the eval harness guide (`evals/README.md`). Per D-023 and template rules, these names (identifiers, test fixture file names, fixture headings, and eval tier labels) are classified as `kind: name-only` with `(used, not defined)` definitions and explanations in Design notes so that Phase 3 concordance filtering can exclude them from application lifecycle comparisons.
- `spec` is the primary core lifecycle artifact in this unit, belonging to `addy:Define` with aliases in PRD.
- `skill-evals` is cataloged as a `technique` representing the repository-level evaluation methodology.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~19,000 tokens across 14 source files and 14 inventory cards. Approximate tokens of output written: ~7,500 tokens across 30 concept cards and 1 unit report.
