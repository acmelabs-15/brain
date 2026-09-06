---
unit: inv-rjm-233
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-233

## Files assigned
- [x] `scripts/eval/eval-skill-overlap.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-eval-eval-skill-overlap-py.md` — 13951 bytes
- `docs/analysis/inventory/rjm/_units/inv-rjm-233.md` — 2838 bytes

## Scripts executed
- `scripts/eval/eval-skill-overlap.py`: `python3 scripts/eval/eval-skill-overlap.py --help` (exit code: 0)
- `scripts/eval/eval-skill-overlap.py`: `python3 scripts/eval/eval-skill-overlap.py --pairs scripts/eval/examples/example-overlap-pairs.json --dry-run` (exit code: 0)
- `scripts/eval/eval-skill-overlap.py`: `python3 scripts/eval/eval-skill-overlap.py --pairs <missing-dir-fixture> --dry-run` (exit code: 1)
- `scripts/eval/eval-skill-overlap.py`: `python3 scripts/eval/eval-skill-overlap.py --pairs <empty-prompts-fixture> --dry-run` (exit code: 2)
- `scripts/eval/eval-skill-overlap.py`: `python3 scripts/eval/eval-skill-overlap.py --pairs scripts/eval/examples/example-overlap-pairs.json` (exit code: 3)
- `tests/test_eval_skill_overlap.py` and `tests/test_eval_skill_overlap_verdict_guard.py`: `.venv/bin/pytest tests/test_eval_skill_overlap.py tests/test_eval_skill_overlap_verdict_guard.py` (exit code: 0, 79 passed)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/eval-skill-overlap.py` provides pairwise redundancy evaluation (DISTINCT, OVERLAP, SUBSUMED) specifically designed for `.claude/skills/` catalog pruning. It complements `eval-knowledge-integration.py` (which only tests skill vs baseline LLM) and `eval-skill-router.py` (which evaluates intent routing and SKIP clause disambiguation).
- The script incorporates the retirement-claim guard mechanism (`emit_retirement_claim`, `validate_retirement_claim`, Issue #2676) that requires follow-up issue generators to validate claimed retire/fold verdicts against machine-readable evaluation reports (`matrix.json`), dropping claims if a pair was actually scored `DISTINCT`.
- `eval-skill-overlap.py` is intentionally not hooked into `eval-suite.py` automated sweep pipelines because an unconstrained N^2 sweep over 70 skills with 6 calls per prompt would require ~145k API calls; it is only executed via explicit pair lists (`--pairs cluster.json`).

## Blocked or uncertain
none

## Time and size
Approx. 10,500 tokens of source read (37,191 bytes source code plus imports, tests, and examples); approx. 3,500 tokens of output written.
