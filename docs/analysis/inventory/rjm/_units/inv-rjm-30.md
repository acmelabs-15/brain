---
unit: inv-rjm-30
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-30

## Files assigned
- [x] `.agents/architecture/ADR-075-form-factor-eval-methodology.md` (14757 bytes, 153 lines, sha256 1354265b364c96bc)

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-075-form-factor-eval-methodology-md.md (10643 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-30.md (1998 bytes)


## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-075 directly resolves the form-factor evaluation question left open by ADR-058 (`.agents/architecture/ADR-058-agent-eval-discipline.md:107-109`). Note that `.agents/architecture/ADR-058-agent-eval-discipline.md:121` contains a cross-file defect: it still cites the superseded first verdict (`prefer-skill-form for the security domain`), whereas ADR-075 records that the content-controlled confirmatory rerun (#2936) corrected this to `inconclusive` (no measurable form effect once content is byte-controlled).
- ADR-075 interfaces with the evaluation runner in `scripts/eval/eval-agent-vs-baseline.py` (issue #1875, flags `--include-skill` and `--skill-path`) and prompt parity unit test `tests/evals/test_form_factor_eval.py::TestContentControlledPromptParity`.
- Mentions Lefthook hook orchestration (`ADR-086` / `skillforge` job) exempting `evals/` fixtures from structural validation because the content-controlled skill fixture intentionally reuses the agent body without SkillForge sections.

## Blocked or uncertain
none

## Time and size
Source read: 14757 bytes (~3700 tokens). Output written: ~12500 bytes (~3100 tokens).
