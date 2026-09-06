---
unit: inv-rjm-295
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-295

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/validation/git_hook_policy.py` (338521 bytes) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-git-hook-policy-py.md` (15874 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-295.md` (unit report)

## Scripts executed
- `scripts/validation/git_hook_policy.py`:
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.venv/bin/python scripts/validation/git_hook_policy.py --help` — exit 0
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.venv/bin/python scripts/validation/git_hook_policy.py branch` — exit 1 (`ERROR: cannot commit or push directly to 'main'`)
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.venv/bin/python scripts/validation/git_hook_policy.py branch-context` — exit 0
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.venv/bin/python scripts/validation/git_hook_policy.py root-hygiene` — exit 0
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.venv/bin/python scripts/validation/git_hook_policy.py root-scratch README.md` — exit 0
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.venv/bin/python scripts/validation/git_hook_policy.py root-scratch temp.txt` — exit 1 (`ERROR: new repository-root files look like scratch`)
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.venv/bin/python scripts/validation/git_hook_policy.py tracked-conflict-markers` — exit 0
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.venv/bin/python scripts/validation/git_hook_policy.py atomic-commit` — exit 0
  - `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.venv/bin/python scripts/validation/git_hook_policy.py planning` — exit 0
- Verification scripts executed in repo root:
  - `bun scripts/synthesis/quote-check.ts docs/analysis/inventory/rjm/scripts-validation-git-hook-policy-py.md` — exit 0 (89 PASS, 0 FAIL)
  - `bun scripts/synthesis/coverage.ts` — exit 0 (clean, 0 failures)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `git_hook_policy.py` is the centralized Git policy enforcement engine and hook multiplexer for `rjm`, multiplexing pre-commit, pre-push, and commit-msg checks configured in `lefthook.yml`.
- It directly imports and invokes several validation modules (`diff_line_scope.py`, `utilities.py`, `select_tests.py`, `object_id.py`, `pr_commit_count.py`, `session_scope.py`, `sha_pinning.py`) and launches numerous sub-validators and generators via subprocess (`validate_session_json.py`, `extract_session_episode.py`, `run_semgrep.py`, `validate_review_marker.py`, `validate_plugin_version_bump.py`, `validate-skill.py`, `validate_planning_artifacts.py`, `taste_lints.py`, `sync_mcp_config.py`, `generate_agents.py`, `update_memory_index_tokens.py`, `test_memory_size.py`, `invoke_memory_cross_reference.py`, `run_workflow_local_test.py`, `check_placeholder_identity.py`, `import_observations_to_forgetful.py`, `get_unresolved_review_threads.py`, `generate_hooks.py`, `validate_hook_anchoring.py`, `test_cli_hook_e2e.py`, `copilot_hook_probe.py`, `generate_commands.py`, `generate_skills.py`, and `test_plugin_load_smoke.py`). Units handling those files should record `git_hook_policy.py` in their `Invoked by` section.
- Test execution utilizes `select_tests.py` to isolate changed tests based on import graph differences, while enforcing hardcoded serial execution for process-sensitive test suites (`tests/mutation/`, `tests/test_safe_push_pr_branch.py`, `tests/test_mutation_workspace_signals.py`, and `tests/test_pr_autofix_late_live_state_gate.py`).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~85,000 tokens (338,521 bytes across 8,553 lines)
- Approximate tokens of output written: ~3,200 tokens
