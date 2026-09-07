---
unit: cc-rjm-307
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-307

## Files assigned
- [x] sources/rjm/scripts/modules/investigation_allowlist.py
- [x] sources/rjm/scripts/modules/slash_command_validator.py
- [x] sources/rjm/scripts/mutation_test_proc_group.py
- [x] sources/rjm/scripts/new_validated_pr.py
- [x] sources/rjm/scripts/normalize_line_endings.py
- [x] sources/rjm/scripts/openclaw_bridge.py
- [x] sources/rjm/scripts/testing/mutation_workspace.py
- [x] sources/rjm/scripts/validation/test_investigation_eligibility.py
- [x] sources/rjm/scripts/validation/validate_copilot_agent_frontmatter.py
- [x] docs/analysis/inventory/rjm/scripts-modules-investigation-allowlist-py.md
- [x] docs/analysis/inventory/rjm/scripts-modules-slash-command-validator-py.md
- [x] docs/analysis/inventory/rjm/scripts-mutation-test-proc-group-py.md
- [x] docs/analysis/inventory/rjm/scripts-new-validated-pr-py.md
- [x] docs/analysis/inventory/rjm/scripts-normalize-line-endings-py.md
- [x] docs/analysis/inventory/rjm/scripts-openclaw-bridge-py.md
- [x] docs/analysis/inventory/rjm/scripts-testing-mutation-workspace-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-test-investigation-eligibility-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-copilot-agent-frontmatter-py.md

## Outputs produced
- docs/analysis/concepts/rjm/get-investigation-allowlist-display.md (1106 bytes)
- docs/analysis/concepts/rjm/test-file-matches-allowlist.md (947 bytes)
- docs/analysis/concepts/rjm/slash-command-validation.md (1140 bytes)
- docs/analysis/concepts/rjm/invoke-slash-command-validation.md (955 bytes)
- docs/analysis/concepts/rjm/commands-dir.md (889 bytes)
- docs/analysis/concepts/rjm/catalog-files.md (946 bytes)
- docs/analysis/concepts/rjm/failed-files.md (885 bytes)
- docs/analysis/concepts/rjm/process-group-timeout-fix.md (907 bytes)
- docs/analysis/concepts/rjm/inverted-control.md (1132 bytes)
- docs/analysis/concepts/rjm/purge-bytecode.md (1018 bytes)
- docs/analysis/concepts/rjm/run-tests.md (801 bytes)
- docs/analysis/concepts/rjm/assert-red.md (933 bytes)
- docs/analysis/concepts/rjm/assert-green.md (905 bytes)
- docs/analysis/concepts/rjm/mutate.md (893 bytes)
- docs/analysis/concepts/rjm/restore.md (884 bytes)
- docs/analysis/concepts/rjm/run-mutations.md (873 bytes)
- docs/analysis/concepts/rjm/new-pr.md (869 bytes)
- docs/analysis/concepts/rjm/skill-relpath.md (893 bytes)
- docs/analysis/concepts/rjm/run-web-mode.md (873 bytes)
- docs/analysis/concepts/rjm/build-skill-args.md (932 bytes)
- docs/analysis/concepts/rjm/copy-body-to-prepared-path.md (901 bytes)
- docs/analysis/concepts/rjm/prepare-pr-body.md (875 bytes)
- docs/analysis/concepts/rjm/lf.md (804 bytes)
- docs/analysis/concepts/rjm/renormalizing-line-endings.md (1150 bytes)
- docs/analysis/concepts/rjm/gitattributes.md (891 bytes)
- docs/analysis/concepts/rjm/is-git-repository.md (879 bytes)
- docs/analysis/concepts/rjm/get-line-ending-stats.md (914 bytes)
- docs/analysis/concepts/rjm/save-line-ending-audit.md (901 bytes)
- docs/analysis/concepts/rjm/validate-path-component.md (941 bytes)
- docs/analysis/concepts/rjm/known-roles.md (1179 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-307.md (4626 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- 27 concepts in this unit represent code identifiers (functions, variables, constants, bugfix names, filenames) and are classified as `kind: name-only` per METHOD.md R6 and D-023.
- 3 concepts represent functional techniques or quality gates: `slash-command-validation` (kind: gate, package_phase: rjm:test), `inverted-control` (kind: technique, package_phase: rjm:test), and `renormalizing-line-endings` (kind: technique, package_phase: cross-phase).
- All 30 concept cards pass byte-exact quotation verification via `bun scripts/synthesis/quote-check.ts` with zero failures (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 9 source files and 9 citing inventory cards; approximate tokens of output written: ~7,500 tokens across 30 concept cards and this unit report.
