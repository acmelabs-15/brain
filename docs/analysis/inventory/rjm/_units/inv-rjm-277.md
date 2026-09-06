---
unit: inv-rjm-277
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-277

## Files assigned
- [x] sources/rjm/scripts/validation/check_canonical_citations.py
- [x] sources/rjm/scripts/validation/check_ci_dependency_pins.py
- [x] sources/rjm/scripts/validation/check_citation_freshness.py
- [x] sources/rjm/scripts/validation/check_colocated_skill_tests.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-validation-check-canonical-citations-py.md (9810 bytes)
- docs/analysis/inventory/rjm/scripts-validation-check-ci-dependency-pins-py.md (9203 bytes)
- docs/analysis/inventory/rjm/scripts-validation-check-citation-freshness-py.md (11753 bytes)
- docs/analysis/inventory/rjm/scripts-validation-check-colocated-skill-tests-py.md (6742 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-277.md (2450 bytes)

## Scripts executed
- `scripts/validation/check_canonical_citations.py`: `python3 sources/rjm/scripts/validation/check_canonical_citations.py --repo-root sources/rjm`, exit code 0
- `scripts/validation/check_canonical_citations.py`: `STRICT_CANONICAL_CHECK=1 python3 sources/rjm/scripts/validation/check_canonical_citations.py --repo-root sources/rjm`, exit code 1
- `scripts/validation/check_ci_dependency_pins.py`: `sources/rjm/.venv/bin/python3 sources/rjm/scripts/validation/check_ci_dependency_pins.py`, exit code 0
- `scripts/validation/check_ci_dependency_pins.py`: `sources/rjm/.venv/bin/python3 sources/rjm/scripts/validation/check_ci_dependency_pins.py --root non_existent`, exit code 2
- `scripts/validation/check_citation_freshness.py`: `sources/rjm/.venv/bin/python3 sources/rjm/scripts/validation/check_citation_freshness.py --repo-root sources/rjm`, exit code 0
- `scripts/validation/check_citation_freshness.py`: `sources/rjm/.venv/bin/python3 sources/rjm/scripts/validation/check_citation_freshness.py --repo-root /tmp`, exit code 2
- `scripts/validation/check_colocated_skill_tests.py`: `python3 sources/rjm/scripts/validation/check_colocated_skill_tests.py --repo-root sources/rjm`, exit code 0
- `scripts/validation/check_colocated_skill_tests.py`: `python3 sources/rjm/scripts/validation/check_colocated_skill_tests.py --repo-root sources/rjm .claude/skills/foo/tests/test_bar.py`, exit code 1

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
This unit covers four validation gates in rjm's test and CI infrastructure:
1. `check_canonical_citations.py` enforces citation discipline for mirror assertions across docstrings and top-level comments under hooks, skills, and validation scripts, tolerating soft warnings by default and failing under `STRICT_CANONICAL_CHECK=1`. Invoked by `checks_spec.py`.
2. `check_ci_dependency_pins.py` validates that hand-written `pkg==version` literals in `.github/**/*.yml` satisfy `pyproject.toml` dependency constraints across main dependencies, optional dependencies, and PEP 735 groups. Invoked by `checks_tooling.py`.
3. `check_citation_freshness.py` inspects `path:line` citations on lines added since the base ref, verifying that paths and line ranges exist at HEAD and match citing anchors (backticks, quotes, identifiers), providing relocation hints when lines shift. Factored into sibling modules `citation_head_state.py` and `citation_anchors.py`. Invoked by `pre_pr.py` and `pre_pr_sequence.py`.
4. `check_colocated_skill_tests.py` ensures test files are placed under `tests/skills/<name>/` rather than inside customer-shipped skill directories (`.claude/skills/`, `src/copilot-cli/skills/`, `src/claude/skills/`), with legacy allowances for pre-existing tests. Invoked by `checks_plugin.py` and `lefthook.yml`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,000 tokens (43,713 bytes across 4 files).
Approximate tokens of output written: ~10,000 tokens (~39,950 bytes across 5 files).
