---
unit: cc-rjm-262
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-262

## Files assigned
- [x] sources/rjm/scripts/ci/validate_ai_review_budgets.py
- [x] sources/rjm/scripts/ci/validate_vendor_provenance.py
- [x] sources/rjm/scripts/ci/vanilla_hook_guard.py
- [x] docs/analysis/inventory/rjm/scripts-ci-validate-ai-review-budgets-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-validate-vendor-provenance-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-vanilla-hook-guard-py.md

## Outputs produced
- docs/analysis/concepts/rjm/uses-ai-review.md (931 bytes)
- docs/analysis/concepts/rjm/step-timeout.md (953 bytes)
- docs/analysis/concepts/rjm/required-job-timeout.md (1030 bytes)
- docs/analysis/concepts/rjm/ai-review-step-timeouts.md (987 bytes)
- docs/analysis/concepts/rjm/budget-finding.md (939 bytes)
- docs/analysis/concepts/rjm/inspect-workflow.md (914 bytes)
- docs/analysis/concepts/rjm/iter-workflows.md (894 bytes)
- docs/analysis/concepts/rjm/trusted-vendor-provenance-validator.md (1028 bytes)
- docs/analysis/concepts/rjm/lockfile.md (968 bytes)
- docs/analysis/concepts/rjm/registry-integrity.md (1012 bytes)
- docs/analysis/concepts/rjm/trust-anchor.md (963 bytes)
- docs/analysis/concepts/rjm/bootstrap-pr.md (946 bytes)
- docs/analysis/concepts/rjm/trust-anchors.md (968 bytes)
- docs/analysis/concepts/rjm/package-lock-json.md (903 bytes)
- docs/analysis/concepts/rjm/npmrc.md (897 bytes)
- docs/analysis/concepts/rjm/integrity-json.md (953 bytes)
- docs/analysis/concepts/rjm/mirror-parity.md (978 bytes)
- docs/analysis/concepts/rjm/symlink-containment.md (962 bytes)
- docs/analysis/concepts/rjm/markdownlint-verifier-py.md (991 bytes)
- docs/analysis/concepts/rjm/materialize-verified-copy.md (979 bytes)
- docs/analysis/concepts/rjm/npm-ci.md (907 bytes)
- docs/analysis/concepts/rjm/installed-plugin-hook.md (942 bytes)
- docs/analysis/concepts/rjm/vanilla.md (898 bytes)
- docs/analysis/concepts/rjm/project-toolkit-ai-agents.md (896 bytes)
- docs/analysis/concepts/rjm/guarderror.md (859 bytes)
- docs/analysis/concepts/rjm/environmentunavailableerror.md (960 bytes)
- docs/analysis/concepts/rjm/scrub-path.md (887 bytes)
- docs/analysis/concepts/rjm/assert-no-interpreter.md (914 bytes)
- docs/analysis/concepts/rjm/extract-hook-command.md (971 bytes)
- docs/analysis/concepts/rjm/event-is-registered.md (976 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-262.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/uses-ai-review.md docs/analysis/concepts/rjm/step-timeout.md docs/analysis/concepts/rjm/required-job-timeout.md docs/analysis/concepts/rjm/ai-review-step-timeouts.md docs/analysis/concepts/rjm/budget-finding.md docs/analysis/concepts/rjm/inspect-workflow.md docs/analysis/concepts/rjm/iter-workflows.md docs/analysis/concepts/rjm/trusted-vendor-provenance-validator.md docs/analysis/concepts/rjm/lockfile.md docs/analysis/concepts/rjm/registry-integrity.md docs/analysis/concepts/rjm/trust-anchor.md docs/analysis/concepts/rjm/bootstrap-pr.md docs/analysis/concepts/rjm/trust-anchors.md docs/analysis/concepts/rjm/package-lock-json.md docs/analysis/concepts/rjm/npmrc.md docs/analysis/concepts/rjm/integrity-json.md docs/analysis/concepts/rjm/mirror-parity.md docs/analysis/concepts/rjm/symlink-containment.md docs/analysis/concepts/rjm/markdownlint-verifier-py.md docs/analysis/concepts/rjm/materialize-verified-copy.md docs/analysis/concepts/rjm/npm-ci.md docs/analysis/concepts/rjm/installed-plugin-hook.md docs/analysis/concepts/rjm/vanilla.md docs/analysis/concepts/rjm/project-toolkit-ai-agents.md docs/analysis/concepts/rjm/guarderror.md docs/analysis/concepts/rjm/environmentunavailableerror.md docs/analysis/concepts/rjm/scrub-path.md docs/analysis/concepts/rjm/assert-no-interpreter.md docs/analysis/concepts/rjm/extract-hook-command.md docs/analysis/concepts/rjm/event-is-registered.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-262 authors 30 concept cards across 3 CI validation scripts:
  1. `scripts/ci/validate_ai_review_budgets.py`: 7 concepts covering AI review action timeout calculation and workflow parsing (`_uses_ai_review`, `_step_timeout`, `required_job_timeout`, `ai_review_step_timeouts`, `budget_finding`, `inspect_workflow`, `iter_workflows`).
  2. `scripts/ci/validate_vendor_provenance.py`: 14 concepts covering supply-chain provenance enforcement, lockfile verification, trust-anchor pins, symlink containment, mirror parity, and isolated npm reconstruction (`Trusted vendor provenance validator`, `lockfile`, `registry integrity`, `Trust-anchor`, `bootstrap PR`, `TRUST ANCHORS`, `package-lock.json`, `.npmrc`, `INTEGRITY.json`, `Mirror parity`, `Symlink containment`, `_markdownlint_verifier.py`, `_materialize_verified_copy`, `npm ci`).
  3. `scripts/ci/vanilla_hook_guard.py`: 9 concepts covering testing of installed plugin hooks in environments lacking a Python interpreter (`installed plugin hook`, `vanilla`, `project-toolkit@ai-agents`, `GuardError`, `EnvironmentUnavailableError`, `scrub_path`, `assert_no_interpreter`, `extract_hook_command`, `event_is_registered`).
- All 30 concepts are Python functions, classes, error types, constants, section headings, or configuration filenames rather than operational SDLC lifecycle concepts, and are classified with `kind: name-only`, `(used, not defined)` definitions, and one-sentence Design notes per D-023.
- Defect annotations from citing inventory cards (`defects: orphan` and `defects: missing-path, orphan`) were propagated to `Implementation status`.
- Verification passed with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source across 30 cards).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 3 source scripts and 3 inventory cards.
Approximate tokens of output written: ~8,500 tokens across 30 concept cards and 1 unit report.
