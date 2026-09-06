---
unit: inv-rjm-305
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-305

## Files assigned
- [x] `scripts/validation/skill_md_exec_portability_baseline.json`
- [x] `scripts/validation/skill_md_portability_baseline.json`
- [x] `scripts/validation/skill_portability_baseline.json`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-skill-md-exec-portability-baseline-json.md` (6597 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-skill-md-portability-baseline-json.md` (6759 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-skill-portability-baseline-json.md` (5188 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-305.md` (2958 bytes)

## Scripts executed
- `scripts/validation/skill_md_exec_portability_baseline.json`: direct `python3 sources/rjm/scripts/validation/skill_md_exec_portability_baseline.json`, exit code 0; validator `python3 sources/rjm/scripts/validation/check_skill_md_exec_portability.py --repo-root sources/rjm`, exit code 0
- `scripts/validation/skill_md_portability_baseline.json`: direct `python3 sources/rjm/scripts/validation/skill_md_portability_baseline.json`, exit code 0; validator `uv run --directory sources/rjm python scripts/validation/check_skill_md_portability.py`, exit code 0
- `scripts/validation/skill_portability_baseline.json`: direct `python3 sources/rjm/scripts/validation/skill_portability_baseline.json`, exit code 0; validator `python3 sources/rjm/scripts/validation/check_skill_portability.py --repo-root sources/rjm`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The three JSON baseline files in unit inv-rjm-305 together comprise the vendor-portability ratchet baseline suite in rjm:
  1. `skill_portability_baseline.json`: Ratchets hardcoded upstream repository paths (`.agents/`, `.claude/lib/`, `.claude/review-axes/`, `.claude/skills/`) across skill scripts (`*.py`, `*.sh`, `*.ps1`), consumed by `scripts/validation/check_skill_portability.py`.
  2. `skill_md_portability_baseline.json`: Ratchets prose upstream path references across Markdown files in skills, commands, instructions, and templates, consumed by `scripts/validation/check_skill_md_portability.py`.
  3. `skill_md_exec_portability_baseline.json`: Ratchets bare executable invocations (`.claude/skills/...`, `build/...`, `scripts/...`) across skill Markdown files, consumed by `scripts/validation/check_skill_md_exec_portability.py`.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~44,790 bytes (~11,197 tokens); approximate output written: ~20,264 bytes (~5,066 tokens).
