---
unit: inv-rjm-280
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-280

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/check_model_pins.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/check_nested_tests.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/check_orchestrator_citations.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/check_placeholder_identity.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-check-model-pins-py.md (8148 bytes)
- docs/analysis/inventory/rjm/scripts-validation-check-nested-tests-py.md (5741 bytes)
- docs/analysis/inventory/rjm/scripts-validation-check-orchestrator-citations-py.md (5221 bytes)
- docs/analysis/inventory/rjm/scripts-validation-check-placeholder-identity-py.md (6192 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-280.md (this file)

## Scripts executed
- scripts/validation/check_model_pins.py: `.venv/bin/python scripts/validation/check_model_pins.py --mode enforce` (exit code 0)
- scripts/validation/check_nested_tests.py: `python3 scripts/validation/check_nested_tests.py` (exit code 0)
- scripts/validation/check_orchestrator_citations.py: `python3 scripts/validation/check_orchestrator_citations.py` (exit code 0)
- scripts/validation/check_placeholder_identity.py: `python3 scripts/validation/check_placeholder_identity.py --push-range HEAD~1..HEAD` (exit code 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/check_model_pins.py`: Enforces ADR-080 model pin policy via a draining ratchet against `scripts/validation/model_pin_baseline.json` and `.agents/governance/model-pin-evidence.json`. Invoked in warn mode by `scripts/validation/checks_spec.py`.
- `scripts/validation/check_nested_tests.py`: Prevents uncollectable test functions enclosed in other functions (issue #3879, PR #3688); called by `scripts/validation/pre_pr.py` and `scripts/validation/pre_pr_sequence.py`.
- `scripts/validation/check_orchestrator_citations.py`: Validates backtick path citations in `.claude/commands/pr-quality/all.md` to prevent documentation drift; wrapped by `scripts/validation/checks_spec.py`.
- `scripts/validation/check_placeholder_identity.py`: Pre-push git hook gate preventing mock identity leaks (`test@test.com`, issue #2466); invoked via `scripts/validation/git_hook_policy.py`.

## Blocked or uncertain
none

## Time and size
- Approximate source read: 42,074 bytes (~10,500 tokens)
- Approximate output written: 25,302 bytes for cards + 2,100 bytes for unit report (~6,850 tokens)
