---
unit: inv-rjm-194
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-194

## Files assigned
- [x] sources/rjm/docs/technical-guardrails.md (8466 bytes) — read in full
- [x] sources/rjm/docs/third-party-license-attribution.md (4463 bytes) — read in full
- [x] sources/rjm/docs/when-to-use.md (7161 bytes) — read in full
- [x] sources/rjm/docs/workflow-commands.md (7471 bytes) — read in full
- [x] sources/rjm/docs/WORKFLOW-VALIDATION.md (5052 bytes) — read in full
- [x] sources/rjm/pyproject.toml (12299 bytes) — read in full

## Outputs produced
- docs/analysis/inventory/rjm/docs-technical-guardrails-md.md (6328 bytes)
- docs/analysis/inventory/rjm/docs-third-party-license-attribution-md.md (4157 bytes)
- docs/analysis/inventory/rjm/docs-when-to-use-md.md (4509 bytes)
- docs/analysis/inventory/rjm/docs-workflow-commands-md.md (5790 bytes)
- docs/analysis/inventory/rjm/docs-workflow-validation-md.md (4802 bytes)
- docs/analysis/inventory/rjm/pyproject-toml.md (4886 bytes)

## Scripts executed
- scripts/generate_third_party_notices.py: `python3 scripts/generate_third_party_notices.py --check` — exit 0
- scripts/validate_workflows.py: `uv run python scripts/validate_workflows.py .github/workflows/pytest.yml` — exit 0
- tests/test_pyproject_dev_deps_parity.py: `uv run pytest tests/test_pyproject_dev_deps_parity.py` — exit 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `docs/when-to-use.md:30` identifies an intentional divergence in `docs/workflow-commands.md:28-34`, where Quick Fix Workflow shows `/build → /test → /ship` without `/review`, whereas `/ship` at line 196 strictly enforces a blocking pre-flight check requiring `/review` to have run with zero unresolved Critical findings.
- `docs/technical-guardrails.md:124` references a repo-root `HANDOFF.md` that does not exist in the working tree.
- `docs/technical-guardrails.md:202-205` cites obsolete PowerShell test files (`Detect-SkillViolation.Tests.ps1`, `Detect-TestCoverageGaps.Tests.ps1`, `New-ValidatedPR.Tests.ps1`, `Validate-PRDescription.ps1`) that were removed during ADR-042 Python migration.
- `pyproject.toml` pins `tool.ruff.target-version = "py310"` to preserve Python 3.10 interpreter syntax portability across Git hook scripts, despite `requires-python = ">=3.14"`.

## Blocked or uncertain
none

## Time and size
Source read: 44,912 bytes (~11,228 tokens). Outputs written: 30,472 bytes (~7,618 tokens).
