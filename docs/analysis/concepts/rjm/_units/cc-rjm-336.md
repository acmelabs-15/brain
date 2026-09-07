---
unit: cc-rjm-336
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-336

## Files assigned
- [x] `sources/rjm/scripts/validation/check_git_hook_health.py`
- [x] `sources/rjm/scripts/validation/check_model_pins.py`
- [x] `sources/rjm/scripts/validation/check_nested_tests.py`
- [x] `sources/rjm/scripts/validation/check_orchestrator_citations.py`
- [x] `sources/rjm/scripts/validation/check_placeholder_identity.py`
- [x] `sources/rjm/scripts/validation/check_plugin_frontmatter_self_containment.py`
- [x] `sources/rjm/scripts/validation/check_repo_health.py`
- [x] `sources/rjm/scripts/validation/check_skill_md_portability.py`
- [x] `sources/rjm/scripts/validation/model_pin_baseline.json`
- [x] `docs/analysis/inventory/rjm/scripts-validation-check-git-hook-health-py.md`
- [x] `docs/analysis/inventory/rjm/scripts-validation-check-repo-health-py.md`
- [x] `docs/analysis/inventory/rjm/scripts-validation-check-model-pins-py.md`
- [x] `docs/analysis/inventory/rjm/scripts-validation-model-pin-baseline-json.md`
- [x] `docs/analysis/inventory/rjm/scripts-validation-check-nested-tests-py.md`
- [x] `docs/analysis/inventory/rjm/scripts-validation-check-orchestrator-citations-py.md`
- [x] `docs/analysis/inventory/rjm/scripts-validation-check-placeholder-identity-py.md`
- [x] `docs/analysis/inventory/rjm/scripts-validation-check-plugin-frontmatter-self-containment-py.md`
- [x] `docs/analysis/inventory/rjm/scripts-validation-check-skill-md-portability-py.md`

## Outputs produced
- `docs/analysis/concepts/rjm/diagnose-hooks-dir.md` (1000 bytes)
- `docs/analysis/concepts/rjm/diagnose.md` (1109 bytes)
- `docs/analysis/concepts/rjm/validate-git-hook-health.md` (1028 bytes)
- `docs/analysis/concepts/rjm/draining-ratchet.md` (1643 bytes)
- `docs/analysis/concepts/rjm/rolling-aliases.md` (931 bytes)
- `docs/analysis/concepts/rjm/manifest-max-age-days.md` (956 bytes)
- `docs/analysis/concepts/rjm/unit.md` (860 bytes)
- `docs/analysis/concepts/rjm/checkreport.md` (895 bytes)
- `docs/analysis/concepts/rjm/functiondef.md` (956 bytes)
- `docs/analysis/concepts/rjm/ast.md` (915 bytes)
- `docs/analysis/concepts/rjm/nestedtestfinder.md` (938 bytes)
- `docs/analysis/concepts/rjm/asyncfunctiondef.md` (946 bytes)
- `docs/analysis/concepts/rjm/classdef.md` (950 bytes)
- `docs/analysis/concepts/rjm/check-canonical-citations-py.md` (963 bytes)
- `docs/analysis/concepts/rjm/target-files.md` (985 bytes)
- `docs/analysis/concepts/rjm/path-citation.md` (922 bytes)
- `docs/analysis/concepts/rjm/brokencitation.md` (939 bytes)
- `docs/analysis/concepts/rjm/commitidentity.md` (938 bytes)
- `docs/analysis/concepts/rjm/must-2.md` (983 bytes)
- `docs/analysis/concepts/rjm/must-3.md` (993 bytes)
- `docs/analysis/concepts/rjm/marketplace-manifests.md` (1067 bytes)
- `docs/analysis/concepts/rjm/frontmatterparseerror.md` (974 bytes)
- `docs/analysis/concepts/rjm/plugin-roots.md` (1312 bytes)
- `docs/analysis/concepts/rjm/upstream-only.md` (1000 bytes)
- `docs/analysis/concepts/rjm/should-2.md` (990 bytes)
- `docs/analysis/concepts/rjm/remote-uri.md` (952 bytes)
- `docs/analysis/concepts/rjm/opaque-uri.md` (959 bytes)
- `docs/analysis/concepts/rjm/local-uri.md` (918 bytes)
- `docs/analysis/concepts/rjm/outward-file.md` (974 bytes)
- `docs/analysis/concepts/rjm/checked-keys.md` (990 bytes)

## Scripts executed
- `scripts/synthesis/quote-check.ts`: `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/<slug>.md`, exit code 0 (30 PASS, 0 FAIL)
- `scripts/synthesis/coverage.ts`: `bun scripts/synthesis/coverage.ts`, exit code 1 (repo-wide index updates pending, but 0 orphan cards and 0 empty required sections)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `plugin_roots` aggregates occurrences across `check_plugin_frontmatter_self_containment.py` and `check_skill_md_portability.py`. Defect `doc-drift` from `check_skill_md_portability.py` was recorded in `Implementation status`.
- `draining ratchet` is recorded as a lifecycle technique linked to the broader `ratchet` concept family, capturing the grandfathered technical debt burn-down pattern under ADR-080.
- All other 29 concepts in this unit are script internals, AST structures, rule clauses, constants, or validator function names and are classified as `kind: name-only` per D-023.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens
Approximate tokens of output written: ~12,000 tokens
