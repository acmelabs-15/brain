---
unit: inv-rjm-231
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-231

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/eval/eval-reviewer-asymmetry.py (23467 bytes, 676 lines)

## Outputs produced
- docs/analysis/inventory/rjm/scripts-eval-eval-reviewer-asymmetry-py.md (11757 bytes)

## Scripts executed
- scripts/eval/eval-reviewer-asymmetry.py: `python3 sources/rjm/scripts/eval/eval-reviewer-asymmetry.py --help` (exit code: 0)
- scripts/eval/eval-reviewer-asymmetry.py: `python3 sources/rjm/scripts/eval/eval-reviewer-asymmetry.py --dry-run` (exit code: 0)
- scripts/eval/eval-reviewer-asymmetry.py: `python3 sources/rjm/scripts/eval/eval-reviewer-asymmetry.py` (exit code: 2)
- scripts/eval/eval-reviewer-asymmetry.py: `python3 sources/rjm/scripts/eval/eval-reviewer-asymmetry.py --fixtures non_existent_dir` (exit code: 2)
- scripts/eval/eval-reviewer-asymmetry.py: `python3 sources/rjm/scripts/eval/eval-reviewer-asymmetry.py --base-ref invalid_ref_does_not_exist` (exit code: 2)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/eval/eval-reviewer-asymmetry.py` implements statistical significance testing for the reviewer-asymmetry framing in `templates/agents/{critic,qa,implementer}.shared.md` versus the `main` branch baseline.
- Uses one-sided Fisher's exact test + two-proportion z-test on categorical verdict pass rates and one-sided Mann-Whitney U test on continuous findings counts.
- Relies on shared eval utilities `scripts/eval/_anthropic_api.py` and `scripts/eval/_eval_common.py`.
- Referenced in `scripts/eval/README.md`, `evals/agent-triage.md`, `evals/reviewer-asymmetry-spike/README.md`, and reports under `evals/reviewer-asymmetry-spike/reports/`.
- Tested in `tests/eval/test_eval_prompt_change.py`, `tests/eval/test_eval_provider_provenance.py`, and `tests/eval/test_malformed_metadata_entrypoints.py`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~5,900 tokens (23,467 bytes of Python source)
- Approximate tokens of output written: ~2,500 tokens
