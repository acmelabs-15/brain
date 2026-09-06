---
unit: inv-rjm-300
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-300

## Files assigned
- [x] `scripts/validation/pr_description.py` (57443 bytes, 1314 lines)

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-pr-description-py.md` (15917 bytes)

## Scripts executed
- `scripts/validation/pr_description.py`: `python3 scripts/validation/pr_description.py --pr-number 226 --ci` (exit code: 0)
- `scripts/validation/pr_description.py`: `python3 scripts/validation/pr_description.py --help` (exit code: 0)
- `scripts/validation/pr_description.py`: `python3 scripts/validation/pr_description.py` (exit code: 2)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/pr_description.py` acts as the authoritative CI PR description gate enforcing diff congruence, CommonMark code fence handling, closing-keyword validation, em/en-dash bans, and GITHUB_OUTPUT/GITHUB_STEP_SUMMARY sanitization.
- Related files in other units include `docs/technical-guardrails.md`, `CONTRIBUTING.md`, `scripts/ci/map_pr_description_result.py`, and `.claude/skills/github/scripts/issue/check_existing_pr_for_issue.py`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~14360 tokens
- Approximate tokens of output written: ~3980 tokens
