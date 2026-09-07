---
unit: cc-rjm-334
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-334

## Files assigned
- [x] sources/rjm/scripts/validation/check_copilot_routing_exclusions.py
- [x] sources/rjm/scripts/validation/check_copilot_version_pin.py
- [x] sources/rjm/scripts/validation/check_doc_interpreter_portability.py
- [x] sources/rjm/scripts/validation/check_dual_priority_labels.py
- [x] sources/rjm/scripts/validation/check_duplicate_test_helpers.py
- [x] sources/rjm/scripts/validation/check_plugin_frontmatter_self_containment.py
- [x] sources/rjm/scripts/validation/check_python3_entrypoints.py
- [x] sources/rjm/scripts/validation/check_skill_md_exec_portability.py
- [x] sources/rjm/scripts/validation/check_skill_md_portability.py
- [x] sources/rjm/scripts/validation/check_skill_portability.py
- [x] sources/rjm/scripts/validation/check_subprocess_encoding.py
- [x] sources/rjm/scripts/validation/check_unreachable_code.py
- [x] sources/rjm/scripts/validation/checks_copilot.py
- [x] sources/rjm/scripts/validation/portability_common.py
- [x] sources/rjm/scripts/validation/validate_design_review.py

## Outputs produced
- docs/analysis/concepts/rjm/sourcedir.md (899 bytes)
- docs/analysis/concepts/rjm/load-excluded-skill-names.md (967 bytes)
- docs/analysis/concepts/rjm/scan-copilot-skill-files.md (949 bytes)
- docs/analysis/concepts/rjm/validate-copilot-routing-exclusions.md (1209 bytes)
- docs/analysis/concepts/rjm/known-bad-versions.md (879 bytes)
- docs/analysis/concepts/rjm/versionpinerror.md (853 bytes)
- docs/analysis/concepts/rjm/is-parseable.md (835 bytes)
- docs/analysis/concepts/rjm/is-known-bad.md (859 bytes)
- docs/analysis/concepts/rjm/extract-pinned-version.md (904 bytes)
- docs/analysis/concepts/rjm/check-action.md (879 bytes)
- docs/analysis/concepts/rjm/doc-interpreter-portability.md (1285 bytes)
- docs/analysis/concepts/rjm/modulenotfounderror.md (939 bytes)
- docs/analysis/concepts/rjm/scanstats.md (817 bytes)
- docs/analysis/concepts/rjm/scanerror.md (1280 bytes)
- docs/analysis/concepts/rjm/generated-roots.md (906 bytes)
- docs/analysis/concepts/rjm/generated-prompt-prefix.md (944 bytes)
- docs/analysis/concepts/rjm/fixture-roots.md (919 bytes)
- docs/analysis/concepts/rjm/declaration.md (1065 bytes)
- docs/analysis/concepts/rjm/invocation-pattern.md (894 bytes)
- docs/analysis/concepts/rjm/token-pattern.md (862 bytes)
- docs/analysis/concepts/rjm/is-in-scope.md (893 bytes)
- docs/analysis/concepts/rjm/is-declared.md (894 bytes)
- docs/analysis/concepts/rjm/third-party-imports.md (1020 bytes)
- docs/analysis/concepts/rjm/find-offenses.md (960 bytes)
- docs/analysis/concepts/rjm/diff-against-baseline.md (1519 bytes)
- docs/analysis/concepts/rjm/validate-doc-interpreter-portability.md (1004 bytes)
- docs/analysis/concepts/rjm/valid-priorities.md (997 bytes)
- docs/analysis/concepts/rjm/priority-prefix.md (848 bytes)
- docs/analysis/concepts/rjm/exit-dual.md (836 bytes)
- docs/analysis/concepts/rjm/find-priority-labels.md (906 bytes)

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/<30 cards>: exit 0 (30 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
none

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens; approximate tokens of output written: ~6,800 tokens.
