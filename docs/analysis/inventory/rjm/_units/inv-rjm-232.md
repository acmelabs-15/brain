---
unit: inv-rjm-232
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-232

## Files assigned
- [x] `sources/rjm/scripts/eval/eval-rule-activation.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-eval-eval-rule-activation-py.md` (17513 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-232.md`

## Scripts executed
- `sources/rjm/scripts/eval/eval-rule-activation.py`:
  - `python3 scripts/eval/eval-rule-activation.py --scenarios tests/evals/rule-scenarios/working-with-legacy-code.json --dry-run`, exit code 0
  - `python3 scripts/eval/eval-rule-activation.py --help`, exit code 0
  - `python3 scripts/eval/eval-rule-activation.py --scenarios tests/evals/rule-scenarios/working-with-legacy-code.json`, exit code 4 (auth error: missing ANTHROPIC_API_KEY)
  - `python3 scripts/eval/eval-rule-activation.py --scenarios non-existent.json --dry-run`, exit code 2 (config error: scenario file not found)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/eval-rule-activation.py` imports sibling helper modules `_anthropic_api.py` and `_eval_common.py` in `scripts/eval/` (both in unit `inv-rjm-227`).
- The script is invoked by `.claude/skills/context-optimizer/references/rule-audit-procedure.md:131` (in unit `inv-rjm-77`), `scripts/eval/README.md:25` (in unit `inv-rjm-235`), and `scripts/eval/software_engineering_library_activation_ci.py:70` (in unit `inv-rjm-235`).
- It measures both always-on rules (`.claude/rules/*.md`) and progressive-disclosure skill references (`.claude/skills/*/references/*.md`), implementing a two-hop routing prompt for skills where the router first selects a skill and reference before injecting reference content.
- Negative test scenarios use the sentinel `expected_gate = "skip-rule-not-applicable"` and are scored on an inverted rubric with `MIN_RESTRAINT_SCORE = 3.5` to guard against over-activation.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~27,734 tokens (110,937 bytes across 1 file)
- Approximate tokens of output written: ~4,600 tokens (17,513 bytes across 1 card + unit report)
