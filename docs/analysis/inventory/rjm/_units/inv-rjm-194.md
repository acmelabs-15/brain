---
unit: inv-rjm-194
phase: 1
package: rjm
session: 011
subagent_returned: complete
---

# Unit inv-rjm-194

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/technical-guardrails.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/third-party-license-attribution.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/when-to-use.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/workflow-commands.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/WORKFLOW-VALIDATION.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/pyproject.toml

## Outputs produced
- docs/analysis/inventory/rjm/docs-technical-guardrails-md.md — 7354 bytes
- docs/analysis/inventory/rjm/docs-third-party-license-attribution-md.md — 5523 bytes
- docs/analysis/inventory/rjm/docs-when-to-use-md.md — 5290 bytes
- docs/analysis/inventory/rjm/docs-workflow-commands-md.md — 8317 bytes
- docs/analysis/inventory/rjm/docs-workflow-validation-md.md — 5884 bytes
- docs/analysis/inventory/rjm/pyproject-toml.md — 5103 bytes

## Scripts executed
none (no assigned file has type `script` or ships executable scripts; syntax validation `python3 -c "import tomllib..."` executed on `sources/rjm/pyproject.toml` exited 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `docs/workflow-commands.md` addresses all Phase 1V findings from `docs/analysis/inventory/rjm/_verification.md`: added `agent decision-critic` (line 59) and five invoked skills (`execution-plans`, `code-qualities-assessment`, `security-scan`, `golden-principles`, `taste-lints`) to Invokes, and added finding severities (`Critical`, `Important`, `Suggestion`), PR types (`CODE`, `WORKFLOW`, `CONFIG`, `DOCS`, `MIXED`), and legacy numbered commands (`/0-init` through `/4-security`) to Concepts named.
- `docs/technical-guardrails.md` and `docs/WORKFLOW-VALIDATION.md` reference pre-ADR-042 PowerShell tooling (Pester tests in `tests/*.Tests.ps1`, PowerShell 7+ installation, and `.psm1` modules) which represent documentation drift since the repository migrated to Python.
- `pyproject.toml` demonstrates intentional dual maintenance of dev dependencies in `[project.optional-dependencies].dev` and `[dependency-groups].dev` to support both `uv pip install` and `uv sync`, as well as setting ruff `target-version = "py310"` to preserve compatibility with the Git hook runtime floor despite `requires-python = ">=3.14"`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,228 tokens (44,912 bytes across 6 files); approximate tokens of output written: ~9,368 tokens (37,471 bytes across 6 cards + unit report).
