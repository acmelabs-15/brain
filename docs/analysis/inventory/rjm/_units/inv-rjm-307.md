---
unit: inv-rjm-307
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-307

## Files assigned
- [x] sources/rjm/scripts/validation/stale_script_refs.py
- [x] sources/rjm/scripts/validation/subprocess_runner.py
- [x] sources/rjm/scripts/validation/test_docs_only_eligibility.py
- [x] sources/rjm/scripts/validation/test_investigation_eligibility.py
- [x] sources/rjm/scripts/validation/token_budget.py
- [x] sources/rjm/scripts/validation/traceability.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-stale-script-refs-py.md (6846 bytes)
- docs/analysis/inventory/rjm/scripts-validation-subprocess-runner-py.md (4590 bytes)
- docs/analysis/inventory/rjm/scripts-validation-test-docs-only-eligibility-py.md (6640 bytes)
- docs/analysis/inventory/rjm/scripts-validation-test-investigation-eligibility-py.md (7139 bytes)
- docs/analysis/inventory/rjm/scripts-validation-token-budget-py.md (5622 bytes)
- docs/analysis/inventory/rjm/scripts-validation-traceability-py.md (9290 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-307.md (2674 bytes)

## Scripts executed
- `scripts/validation/stale_script_refs.py`: `python3 sources/rjm/scripts/validation/stale_script_refs.py --repo-root sources/rjm`, exit code 0
- `scripts/validation/subprocess_runner.py`: `PYTHONPATH=sources/rjm python3 -c "from scripts.validation.subprocess_runner import _run_subprocess; print(_run_subprocess(['echo', 'hello']))"`, exit code 0
- `scripts/validation/test_docs_only_eligibility.py`: `python3 scripts/validation/test_docs_only_eligibility.py --base-ref ef34453af203206cc69e0aa4ab4ff8c3c86395b9 --head-ref 2abef31dc6812b62696297bd1065b58727a35786`, exit code 0
- `scripts/validation/test_investigation_eligibility.py`: `python3 scripts/validation/test_investigation_eligibility.py --base-ref ef34453af203206cc69e0aa4ab4ff8c3c86395b9 --head-ref 2abef31dc6812b62696297bd1065b58727a35786`, exit code 0
- `scripts/validation/token_budget.py`: `python3 scripts/validation/token_budget.py --path .`, exit code 0
- `scripts/validation/traceability.py`: `python3 scripts/validation/traceability.py`, exit code 0
- `scripts/validation/traceability.py`: `python3 scripts/validation/traceability.py --ci --strict`, exit code 1

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/stale_script_refs.py` defines `HISTORICAL_ROOTS`, which is imported and shared across multiple validators in `rjm` including `scripts/validation/check_adr_links.py` (unit `inv-rjm-275`) and `scripts/validation/check_citation_freshness.py`.
- `scripts/validation/subprocess_runner.py` is imported by `scripts/validation/checks_common.py` and re-exported to all pre-PR check modules to capture partial stdout/stderr on `TimeoutExpired`.
- `scripts/validation/test_docs_only_eligibility.py` and `scripts/validation/test_investigation_eligibility.py` provide deterministic pre-checks for QA skip eligibility consumed by `scripts/validate_session_json.py` and follow the ADR-035 convention of always returning exit code 0 with structured eligibility in JSON.
- `scripts/validation/token_budget.py` exports `estimate_token_count`, which is imported by `scripts/validation/instruction_budget.py` and `scripts/validation/passive_context_budget.py`.
- `scripts/validation/traceability.py` validates the three-tier specification hierarchy (`REQ` -> `DESIGN` -> `TASK`) defined in `.agents/governance/traceability-schema.md` and is wired into `pre_pr_sequence.py` as the `Traceability` gate. On the default branch of `sources/rjm`, it exits 1 under `--ci --strict` due to 9 orphaned specification warnings.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,305 tokens (49,220 bytes across 6 files).
Approximate tokens of output written: ~10,700 tokens (~42,800 bytes across 6 cards + unit report).
