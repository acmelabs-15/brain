---
unit: inv-rjm-286
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-286

## Files assigned
- [x] `sources/rjm/scripts/validation/check_skill_md_portability.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-check-skill-md-portability-py.md` (22775 bytes)

## Scripts executed
- `sources/rjm/scripts/validation/check_skill_md_portability.py`, `uv run python scripts/validation/check_skill_md_portability.py`, exit code 0
- `sources/rjm/scripts/validation/check_skill_md_portability.py`, `uv run python scripts/validation/check_skill_md_portability.py --help`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Companion to `check_skill_portability.py` (scripts) and delegator to `check_skill_md_drift.py` (marker path drift extracted to respect the 500-line size limit).
- Shares parser logic with `scripts/utils/markdown_parser.py` (`blank_code_block_lines`) and ratchet common utilities with `scripts/validation/portability_common.py`.
- Invoked in CI by `.github/workflows/validate-vendor-portability.yml` and in validation suites by `scripts/validation/checks_spec.py:validate_skill_md_portability`.
- Connects to `src/copilot-cli/instructions/plugin-self-containment.instructions.md` which documents the prose portability contract.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~16,000 tokens (62,742 bytes source + dependencies); approximate tokens of output written: ~5,700 tokens (22,775 bytes).
