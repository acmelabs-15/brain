---
unit: inv-rjm-230
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-230

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/eval/eval-prompt-change.py (30975 bytes, 826 lines)

## Outputs produced
- docs/analysis/inventory/rjm/scripts-eval-eval-prompt-change-py.md (14532 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-230.md (1860 bytes)

## Scripts executed
- scripts/eval/eval-prompt-change.py: `python3 scripts/eval/eval-prompt-change.py --help` (exit code: 0)
- scripts/eval/eval-prompt-change.py: `python3 scripts/eval/eval-prompt-change.py --before .claude/commands/spec.md --after .claude/commands/spec.md --scenarios tests/evals/spec-scenarios.json --dry-run` (exit code: 0)
- scripts/eval/eval-prompt-change.py: `python3 scripts/eval/eval-prompt-change.py --prompt .claude/commands/spec.md --scenarios tests/evals/spec-scenarios.json --dry-run` (exit code: 0)
- scripts/eval/eval-prompt-change.py: `python3 scripts/eval/eval-prompt-change.py --prompt .claude/commands/spec.md --scenarios tests/evals/spec-scenarios.json --dry-run --security-critical` (exit code: 0)
- scripts/eval/eval-prompt-change.py: `python3 scripts/eval/eval-prompt-change.py --prompt .claude/commands/spec.md --scenarios nonexistent.json --dry-run` (exit code: 2)
- scripts/eval/eval-prompt-change.py: `python3 scripts/eval/eval-prompt-change.py --prompt .claude/commands/spec.md --scenarios tests/evals/spec-scenarios.json --runs 2` (exit code: 2)
- tests/eval/test_eval_prompt_change.py: `uv run pytest tests/eval/test_eval_prompt_change.py` (110 passed, exit code: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `eval-prompt-change.py` is the canonical behavioral before/after evaluator specified in ADR-057.
- It is invoked by `scripts/eval/eval-suite.py` (line 274) as part of the overall evaluation suite.
- It imports sibling modules `_anthropic_api.py`, `_eval_common.py`, and `_providers.py`.
- It enforces transport provider symmetry per ADR-058 (`EVAL_PROVIDER`), ensuring both arms are tested on the exact same provider adapter.
- Multiple docstring examples reference `tests/evals/research-scenarios.json`, `tests/evals/security-review-scenarios.json`, and `.agents/security/prompts/security-review.md`, which do not exist at those paths in the repository (recorded as defects on the card).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~8,000 tokens (30,975 bytes source file)
- Approximate tokens of output written: ~3,500 tokens (inventory card and unit report)
