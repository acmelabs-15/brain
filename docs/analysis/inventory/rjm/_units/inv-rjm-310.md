---
unit: inv-rjm-310
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-310

## Files assigned
- [x] sources/rjm/scripts/validation/validate_skill_shells.py
- [x] sources/rjm/scripts/validation/validate_skillbook.py
- [x] sources/rjm/scripts/validation/validate_sync_registry.py
- [x] sources/rjm/scripts/validation/vendor_portability_baseline.txt
- [x] sources/rjm/scripts/validation/yaml_utils.py
- [x] sources/rjm/scripts/workflow/__init__.py
- [x] sources/rjm/scripts/workflow/coordinator.py
- [x] sources/rjm/scripts/workflow/executor.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-validate-skill-shells-py.md (5449 bytes)
- docs/analysis/inventory/rjm/scripts-validation-validate-skillbook-py.md (5858 bytes)
- docs/analysis/inventory/rjm/scripts-validation-validate-sync-registry-py.md (5688 bytes)
- docs/analysis/inventory/rjm/scripts-validation-vendor-portability-baseline-txt.md (3766 bytes)
- docs/analysis/inventory/rjm/scripts-validation-yaml-utils-py.md (3170 bytes)
- docs/analysis/inventory/rjm/scripts-workflow---init---py.md (3707 bytes)
- docs/analysis/inventory/rjm/scripts-workflow-coordinator-py.md (5060 bytes)
- docs/analysis/inventory/rjm/scripts-workflow-executor-py.md (4571 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-310.md (4370 bytes)

## Scripts executed
- `scripts/validation/validate_skill_shells.py`: `python3 scripts/validation/validate_skill_shells.py`, exit code 0
- `scripts/validation/validate_skillbook.py`: `python3 scripts/validation/validate_skillbook.py`, exit code 0
- `scripts/validation/validate_sync_registry.py`: `python3 scripts/validation/validate_sync_registry.py`, exit code 0
- `scripts/validation/vendor_portability_baseline.txt`: `python3 scripts/validation/check_vendor_portability.py`, exit code 0
- `scripts/validation/yaml_utils.py`: `uv run python scripts/validation/yaml_utils.py`, exit code 0
- `scripts/workflow/__init__.py`: `uv run python scripts/workflow/__init__.py`, exit code 0
- `scripts/workflow/coordinator.py`: `uv run python scripts/workflow/coordinator.py`, exit code 0
- `scripts/workflow/executor.py`: `uv run python scripts/workflow/executor.py`, exit code 0
- Unit tests: `uv run pytest tests/test_workflow_coordinator.py tests/test_workflow_executor.py tests/validation/test_validate_skill_shells.py tests/validation/test_validate_sync_registry.py`, exit code 0 (91 passed)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/validate_skill_shells.py` and `scripts/validation/validate_sync_registry.py` are part of the core pre-PR validation gate suite wrapped by `scripts/validation/checks_spec.py` and run in `scripts/validation/pre_pr.py` / `scripts/validation/pre_pr_sequence.py`.
- `scripts/validation/vendor_portability_baseline.txt` is consumed directly by `scripts/validation/check_vendor_portability.py` (which tracks 18 known legacy path violations).
- `scripts/validation/validate_skillbook.py` implements an embedded draft-07 JSON Schema checker defending against directory traversal (CWE-22) when resolving `$ref` files across `.agents/schemas/` and `.agents/skillbook/`. It is invoked by `.github/workflows/skillbook-validation.yml:16`, making it an orphan within the in-scope lifecycle manifest graph.
- The `scripts/workflow` package (`__init__.py`, `coordinator.py`, `executor.py`) provides workflow execution orchestration across three coordination strategies (`Centralized`, `Hierarchical`, `Mesh`). While thoroughly tested in `tests/test_workflow_coordinator.py` and `tests/test_workflow_executor.py`, it is not imported by any in-scope lifecycle commands/agents, and both `coordinator.py` and `executor.py` document ADR-035 exit codes in docstrings despite having no standalone CLI entry points.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,488 tokens (49,950 bytes across 8 source files).
Approximate tokens of output written: ~9,317 tokens (37,269 bytes across 8 cards and 1 unit report).
