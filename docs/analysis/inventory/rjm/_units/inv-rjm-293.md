---
unit: inv-rjm-293
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-293

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/checks_spec.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/checks_tooling.py`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/checks_workflow_targets.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-checks-spec-py.md` (10,696 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-checks-tooling-py.md` (12,109 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-checks-workflow-targets-py.md` (6,359 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-293.md` (unit report)

## Scripts executed
- `scripts/validation/checks_spec.py`, `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/checks_spec.py`, exit code 1 (fails with `ModuleNotFoundError: No module named 'scripts'`; with `PYTHONPATH=.`, exits 0)
- `scripts/validation/checks_tooling.py`, `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/checks_tooling.py`, exit code 0
- `scripts/validation/checks_workflow_targets.py`, `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/checks_workflow_targets.py`, exit code 1 (fails with `ModuleNotFoundError: No module named 'scripts'`; with `PYTHONPATH=.`, exits 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/checks_spec.py` and `scripts/validation/checks_tooling.py` were extracted from `scripts/validation/pre_pr.py` (issue #2223) to decompose pre-PR validation gates and manage module line ceilings. They are orchestrated by `scripts/validation/pre_pr_sequence.py` and re-exported by `scripts/validation/pre_pr.py`.
- `scripts/validation/checks_workflow_targets.py` calculates GitHub Actions workflow target sets for `validate_workflow_yaml` in `checks_tooling.py`. It implements automatic expansion of target workflows whenever composite action metadata under `.github/actions/` is modified or deleted.
- Both `checks_spec.py` and `checks_workflow_targets.py` contain shebangs `#!/usr/bin/env python3` but do not add `_PROJECT_ROOT` to `sys.path` (unlike `checks_tooling.py` lines 25-29), so running them directly fails on imports that expect the repository root on `sys.path`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~11,050 tokens (44,236 bytes across 3 assigned files).
- Approximate tokens of output written: ~7,300 tokens (29,164 bytes across 3 cards + unit report).
