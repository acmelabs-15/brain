---
unit: cc-addy-29
phase: 2
package: addy
session: 015
subagent_returned: complete
---

# Unit cc-addy-29

## Files assigned
- [x] sources/addy/scripts/lib/skill-lint-test.js
- [x] sources/addy/scripts/lib/skill-lint.js
- [x] sources/addy/scripts/run-evals-test.js
- [x] sources/addy/scripts/run-evals.js
- [x] sources/addy/scripts/validate-artifact-paths-test.js
- [x] sources/addy/scripts/validate-commands-test.js
- [x] docs/analysis/inventory/addy/scripts-lib-skill-lint-test-js.md
- [x] docs/analysis/inventory/addy/scripts-lib-skill-lint-js.md
- [x] docs/analysis/inventory/addy/scripts-run-evals-test-js.md
- [x] docs/analysis/inventory/addy/scripts-run-evals-js.md
- [x] docs/analysis/inventory/addy/scripts-validate-artifact-paths-test-js.md
- [x] docs/analysis/inventory/addy/scripts-validate-commands-test-js.md

## Outputs produced
- docs/analysis/concepts/addy/a-skill-claiming-its-own-exemption-without-being-allowlisted-fails-loud.md (1149 bytes)
- docs/analysis/concepts/addy/a-fully-valid-skill-produces-no-errors.md (981 bytes)
- docs/analysis/concepts/addy/reports-a-description-with-no-trigger-clause.md (996 bytes)
- docs/analysis/concepts/addy/reports-frontmatter-name-that-disagrees-with-the-directory.md (1053 bytes)
- docs/analysis/concepts/addy/reports-a-workflow-step-declared-without-a-matching-process-section.md (1075 bytes)
- docs/analysis/concepts/addy/reports-a-missing-frontmatter-block.md (949 bytes)
- docs/analysis/concepts/addy/max-description-length.md (857 bytes)
- docs/analysis/concepts/addy/kebab-case.md (834 bytes)
- docs/analysis/concepts/addy/description-trigger.md (895 bytes)
- docs/analysis/concepts/addy/description-trigger-negate.md (942 bytes)
- docs/analysis/concepts/addy/required-sections.md (844 bytes)
- docs/analysis/concepts/addy/skill-ref-patterns.md (843 bytes)
- docs/analysis/concepts/addy/stripfencedcodeblocks.md (879 bytes)
- docs/analysis/concepts/addy/parsefrontmatter.md (836 bytes)
- docs/analysis/concepts/addy/extractskillreferences.md (857 bytes)
- docs/analysis/concepts/addy/lintskill.md (858 bytes)
- docs/analysis/concepts/addy/scripts-validate-skills-js.md (887 bytes)
- docs/analysis/concepts/addy/materializeworkspace.md (994 bytes)
- docs/analysis/concepts/addy/parsegrading.md (962 bytes)
- docs/analysis/concepts/addy/runner.md (813 bytes)
- docs/analysis/concepts/addy/writejson.md (782 bytes)
- docs/analysis/concepts/addy/writeskill.md (844 bytes)
- docs/analysis/concepts/addy/behavioraleval.md (843 bytes)
- docs/analysis/concepts/addy/completecase.md (869 bytes)
- docs/analysis/concepts/addy/makesandbox.md (1141 bytes)
- docs/analysis/concepts/addy/accepts-a-complete-and-consistent-grader-result.md (978 bytes)
- docs/analysis/concepts/addy/rejects-grader-results-that-omit-expectations.md (978 bytes)
- docs/analysis/concepts/addy/rejects-incomplete-or-inconsistent-grader-summaries.md (1011 bytes)
- docs/analysis/concepts/addy/fails-when-a-skill-has-no-eval-case-file.md (968 bytes)
- docs/analysis/concepts/addy/fails-when-an-eval-case-is-below-the-required-minimums.md (1032 bytes)
- docs/analysis/concepts/addy/_units/cc-addy-29.md (this file)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts docs/analysis/concepts/addy/<slug>.md, exit 0 (30 PASS, 0 FAIL)
- scripts/synthesis/concept-index.ts, bun scripts/synthesis/concept-index.ts, exit 0
- scripts/synthesis/coverage.ts, bun scripts/synthesis/coverage.ts, exit 0 for package addy (0 empty required, 0 orphan cards, 0 addy index problems)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts assigned to unit cc-addy-29 originate from test suites (`scripts/lib/skill-lint-test.js`, `scripts/run-evals-test.js`, `scripts/validate-artifact-paths-test.js`, `scripts/validate-commands-test.js`) and tool implementation libraries (`scripts/lib/skill-lint.js`, `scripts/run-evals.js`). In accordance with METHOD.md R6, D-023, and prompt instructions, these were generated as `kind: name-only`, with `(used, not defined)` verbatim definitions quoting the most definitional usage, all occurrence rows recorded in `Where used`, defects mapped from inventory cards, and concise design notes explaining their implementation role rather than a lifecycle concept.
- Multiple test files share identical utility function names: `makeSandbox` is defined and used across `scripts/run-evals-test.js`, `scripts/validate-artifact-paths-test.js`, and `scripts/validate-commands-test.js`. All 3 occurrences are tracked on the single `makesandbox.md` card.
- `materializeWorkspace` and `parseGrading` are defined in `scripts/run-evals.js` and imported/tested in `scripts/run-evals-test.js`; both occurrences are captured on their respective cards.
- CommonJS module defects (`require()` in `.js` files when root package.json specifies `"type": "module"`) and test file omission from CI workflows (`orphan` defect in `scripts/lib/skill-lint-test.js`) are recorded in the `Implementation status` section of relevant cards.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~23,700 tokens (~94.8 KB across 6 source files and 6 inventory cards).
Approximate tokens of output written: ~7,500 tokens (30 concept cards: 27,950 bytes; 1 unit report).
