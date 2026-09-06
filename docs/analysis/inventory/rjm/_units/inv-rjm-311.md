---
unit: inv-rjm-311
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-311

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/workflow/loader.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/workflow/parallel.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/workflow/schema.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/workflows/determine_should_run_from_filters.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/workflows/resolve_dispatch_input.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/src/claude/AGENTS.md

## Outputs produced
- docs/analysis/inventory/rjm/scripts-workflow-loader-py.md (4121 bytes)
- docs/analysis/inventory/rjm/scripts-workflow-parallel-py.md (4829 bytes)
- docs/analysis/inventory/rjm/scripts-workflow-schema-py.md (3759 bytes)
- docs/analysis/inventory/rjm/scripts-workflows-determine-should-run-from-filters-py.md (4533 bytes)
- docs/analysis/inventory/rjm/scripts-workflows-resolve-dispatch-input-py.md (4323 bytes)
- docs/analysis/inventory/rjm/src-claude-agents-md.md (7315 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-311.md

## Scripts executed
- `scripts/workflow/loader.py`: `uv run python3 scripts/workflow/loader.py` — exit 0
- `scripts/workflow/parallel.py`: `uv run python3 scripts/workflow/parallel.py` — exit 0
- `scripts/workflow/schema.py`: `uv run python3 scripts/workflow/schema.py` — exit 0
- `scripts/workflows/determine_should_run_from_filters.py`: `GH_EVENT_NAME="pull_request" FILTER_OUTPUTS='{"paths":"true"}' FILTER_KEYS="paths" FORCE_RUN_EVENTS="merge_group" OUTPUT_NAME="should-run-validation" GITHUB_OUTPUT="/tmp/test_gh_output_run.txt" python3 scripts/workflows/determine_should_run_from_filters.py` — exit 0
- `scripts/workflows/determine_should_run_from_filters.py`: `python3 scripts/workflows/determine_should_run_from_filters.py` — exit 2
- `scripts/workflows/resolve_dispatch_input.py`: `GITHUB_OUTPUT=/tmp/test_resolve.txt OUTPUT_NAME=days INPUT_VALUE="7" VALUE_KIND=integer python3 scripts/workflows/resolve_dispatch_input.py` — exit 0
- `scripts/workflows/resolve_dispatch_input.py`: `GITHUB_OUTPUT=/tmp/test_resolve.txt OUTPUT_NAME=days INPUT_VALUE="0" VALUE_KIND=integer python3 scripts/workflows/resolve_dispatch_input.py` — exit 1
- `scripts/workflows/resolve_dispatch_input.py`: `python3 scripts/workflows/resolve_dispatch_input.py` — exit 2
- `build/generate_agents.py` (referenced by `src/claude/AGENTS.md`): `uv run python build/generate_agents.py --validate` — exit 0
- `build/scripts/detect_agent_drift.py` (referenced by `src/claude/AGENTS.md`): `python3 build/scripts/detect_agent_drift.py` — exit 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/workflow/loader.py`, `scripts/workflow/parallel.py`, and `scripts/workflow/schema.py` all contain docstring references to ADR-035 exit codes (0, 1, 2) despite being non-CLI library modules with no CLI entry points (`__main__`) or exit handlers.
- `src/claude/AGENTS.md` satisfies EXACT duplicate group 4 with `.claude/agents/AGENTS.md` (11687 bytes, SHA-256 `a7373badc34caabb`). It documents the two-source synchronization procedure between Claude Code agents and cross-platform shared templates.
- `scripts/workflows/determine_should_run_from_filters.py` documents an important CI design rationale regarding whole-tree vs. diff-scoped checks, detailing the 2026-08-02 incident where `main` bypassed instruction budgets unnoticed due to companion skip jobs.

## Blocked or uncertain
none

## Time and size
Source read: 41,181 bytes (~10,295 tokens). Output written: ~28,880 bytes (~7,220 tokens).
