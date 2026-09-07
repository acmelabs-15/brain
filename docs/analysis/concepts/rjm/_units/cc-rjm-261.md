---
unit: cc-rjm-261
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-261

## Files assigned
- [x] sources/rjm/scripts/ci/taste_count_ratchet.py
- [x] sources/rjm/scripts/ci/test_installed_plugin_hooks.py
- [x] sources/rjm/scripts/ci/type_ignore_count_ratchet.py
- [x] sources/rjm/scripts/ci/update_needs_split_label.py
- [x] sources/rjm/scripts/ci/validate_ai_review_budgets.py
- [x] sources/rjm/scripts/eval/panels/owner-copilot-cli.json
- [x] sources/rjm/scripts/eval/software_engineering_library_activation_ci.py
- [x] docs/analysis/inventory/rjm/scripts-ci-taste-count-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-test-installed-plugin-hooks-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-type-ignore-count-ratchet-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-update-needs-split-label-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-validate-ai-review-budgets-py.md
- [x] docs/analysis/inventory/rjm/scripts-eval-panels-owner-copilot-cli-json.md
- [x] docs/analysis/inventory/rjm/scripts-eval-software-engineering-library-activation-ci-py.md

## Outputs produced
- docs/analysis/concepts/rjm/issue-3902.md (918 bytes)
- docs/analysis/concepts/rjm/violation-fields.md (916 bytes)
- docs/analysis/concepts/rjm/list-violations.md (846 bytes)
- docs/analysis/concepts/rjm/issue-4746.md (867 bytes)
- docs/analysis/concepts/rjm/issue-4672.md (865 bytes)
- docs/analysis/concepts/rjm/customer-wedge-property.md (1351 bytes)
- docs/analysis/concepts/rjm/issue-2205.md (920 bytes)
- docs/analysis/concepts/rjm/issue-5154.md (913 bytes)
- docs/analysis/concepts/rjm/materialize-plugin.md (913 bytes)
- docs/analysis/concepts/rjm/bash-payload.md (841 bytes)
- docs/analysis/concepts/rjm/run-hook.md (812 bytes)
- docs/analysis/concepts/rjm/registered-events.md (891 bytes)
- docs/analysis/concepts/rjm/manifest-is-readable.md (920 bytes)
- docs/analysis/concepts/rjm/shipped-dispatchers.md (908 bytes)
- docs/analysis/concepts/rjm/find-dispatcher.md (1031 bytes)
- docs/analysis/concepts/rjm/security-suppression-re.md (975 bytes)
- docs/analysis/concepts/rjm/issue-4039.md (991 bytes)
- docs/analysis/concepts/rjm/type-ignore-re.md (907 bytes)
- docs/analysis/concepts/rjm/self-referential-files.md (975 bytes)
- docs/analysis/concepts/rjm/label.md (1178 bytes)
- docs/analysis/concepts/rjm/label-endpoint.md (936 bytes)
- docs/analysis/concepts/rjm/existing-labels.md (969 bytes)
- docs/analysis/concepts/rjm/add-label.md (912 bytes)
- docs/analysis/concepts/rjm/remove-label.md (929 bytes)
- docs/analysis/concepts/rjm/default-overhead-seconds.md (971 bytes)
- docs/analysis/concepts/rjm/default-ai-review-timeout-minutes.md (998 bytes)
- docs/analysis/concepts/rjm/context-retry-budget-seconds.md (984 bytes)
- docs/analysis/concepts/rjm/minimum-model-process-budget-seconds.md (1014 bytes)
- docs/analysis/concepts/rjm/budgetfinding.md (926 bytes)
- docs/analysis/concepts/rjm/as-int.md (902 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-261.md (2698 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, `bun scripts/synthesis/quote-check.ts <30 cards>`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `LABEL` occurs across three distinct files in rjm CI and evaluation scripts: `scripts/ci/update_needs_split_label.py:12` (PR label name), `scripts/eval/panels/owner-copilot-cli.json:17` (panel tier label), and `scripts/eval/software_engineering_library_activation_ci.py:29` (activation issue label). It was unified into a single concept card `docs/analysis/concepts/rjm/label.md` capturing all three usage occurrences.
- `customer-wedge property` is classified as `kind: pattern` representing the testability pattern from issue #2205 ensuring non-matching payloads allow execution without wedging consumer workflows; the remaining 29 concepts are classified as `kind: name-only` per D-023.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~24,000 tokens (51,302 bytes source code across 7 files + ~45,000 bytes across 7 citing inventory cards).
Approximate tokens of output written: ~7,700 tokens (30 concept cards totaling 28,479 bytes + work unit report).
