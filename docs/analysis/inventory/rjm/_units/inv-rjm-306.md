---
unit: inv-rjm-306
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-306

## Files assigned
- [x] `sources/rjm/scripts/validation/skill_size.py`
- [x] `sources/rjm/scripts/validation/spec_contradiction.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-skill-size-py.md` (10136 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-spec-contradiction-py.md` (9134 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-306.md`

## Scripts executed
- `sources/rjm/scripts/validation/skill_size.py`, `python3 sources/rjm/scripts/validation/skill_size.py`, exit code 0
- `sources/rjm/scripts/validation/spec_contradiction.py`, `python3 sources/rjm/scripts/validation/spec_contradiction.py`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/skill_size.py` couples with `.claude/skills/skillforge/scripts/frontmatter.py` for parsing `size-exception: true` frontmatter and enforces progressive disclosure requirements into `references/`. It is cited by `CLAUDE.md`, `context-optimizer`, and `ai-agents-diagnostics-toolkit`.
- `scripts/validation/spec_contradiction.py` is an advisory shift-left check invoked by `scripts/validation/checks_spec.py` as part of `pre_pr_sequence.py` and referenced by `spec-generator`. It parses GitHub PR descriptions and issue bodies to ensure consistency with agent frontmatter (`model` tier and numeric thresholds).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,000 tokens (48,382 bytes across 2 source files).
Approximate tokens of output written: ~5,000 tokens (19,270 bytes across 2 inventory cards).
