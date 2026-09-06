---
package: rjm
path: scripts/validation/git_hook_policy.py
type: script
bytes: 338521
unit: inv-rjm-295
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/git_hook_policy.py, sha256: 43137253ce418f1bb7e76d0eeddf685cbc9041c84c49e2b38395d0605bdf5ada}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/git_hook_policy.py

## Purpose — required, verbatim
> "Narrow Git policies that Lefthook cannot express declaratively." — scripts/validation/git_hook_policy.py:4

## Design intent — required
Centralized Git policy enforcement engine and hook multiplexer for the repository, implementing complex verification logic that cannot be declared cleanly in static Lefthook YAML configurations. It unifies dozens of guardrails: preventing direct commits or pushes to protected branches (`main`), blocking root-level scratch files (`ROOT_SCRATCH_ALLOWLIST`), enforcing ASCII dash conventions (`PROHIBITED_DASHES`), stopping tracked or staged merge conflict markers, verifying GitHub Actions SHA pinning, blocking unreviewed ADR changes (`check_adr_review_policy`), validating commit message formatting and session metadata, and orchestrating targeted test selection and static analysis (`pytest`, `mypy`, `yamllint`, `semgrep`). Crucially, it manages process lifecycle timeouts and execution budgets, wrapping test runs in watchdog timers (`_arm_container_watchdog`) to prevent unmonitored hangs and silent job kills in managed container environments. Without this script, the repository would either rely on an unmaintainable sprawl of disparate shell scripts lacking unified error handling and timeout budgets, or suffer from silent policy bypasses and git hook timeouts during critical developer workflows.

## Phase — required
cross-phase

## Inputs — required
- CLI arguments and subcommands (`argv`, `--repo-root`, subcommands including `root-hygiene`, `session`, `staged-dashes`, `staged-action-pins`, `root-scratch`, `staged-conflict-markers`, `tracked-conflict-markers`, `github-bash`, `security-suppressions`, `mypy`, `yamllint`, `skillforge`, `taste`, `memory-cross-reference`, `workflow-local`, `sessions`, `observations`, `extract-episodes`, `adr-review`, `retrospective`, `pytest`, `branch`, `branch-context`, `planning`, `generate-mcp`, `generate-agents`, `memory-token-update`, `memory-size`, `memory-sync`, `placeholder-identity`, `additions`, `bot-cascade`, `semgrep`, `semgrep-push`, `security-suppressions-push`, `observations-push`, `security-suppressions-staged`, `pre-push`, `atomic-commit`, `cli-hook-e2e`, `cli-plugin-e2e`, `commit-message`, `stage-generated`, `security-suppressions-range`, `security-suppressions-diff` — scripts/validation/git_hook_policy.py:8390-8465)
- Standard input (`sys.stdin` in `check_push_refs` — scripts/validation/git_hook_policy.py:8383)
- Standard input (`sys.stdin` in `check_placeholder_identities` — scripts/validation/git_hook_policy.py:8138)
- Staged git index, repository trees, commit objects, and diffs via `git` subprocess commands — scripts/validation/git_hook_policy.py:1103
- Environment variables: `AI_AGENTS_PYTEST_FULL_SUITE_LOCALLY` (scripts/validation/git_hook_policy.py:65), `AI_AGENTS_PYTEST_WORKERS` (scripts/validation/git_hook_policy.py:66), `CONTAINER_PROCESS_CEILING_SECONDS` (scripts/validation/git_hook_policy.py:8514,8525), `MYPY_RATCHET_BASE_REF_ENV` (scripts/validation/git_hook_policy.py:3419), `RUFF_COUNT_RATCHET` (scripts/validation/git_hook_policy.py:272)
- Target repository filesystem structure and configuration files (`lefthook.yml`, `ROOT_SCRATCH_ALLOWLIST`, `.agents/sessions/`, `.claude/skills/`, `ADR-*` documents — scripts/validation/git_hook_policy.py:66-85)

## Outputs — required
- Exit code: 0 (success/clean), 1 (policy violation/check failure), 2 (configuration/usage error), 3 (system/git query failure or container watchdog timeout `os._exit(3)`) — scripts/validation/git_hook_policy.py:8533,8545
- Policy violation error diagnostics (`sys.stderr` — scripts/validation/git_hook_policy.py:8523)
- Standard output reports and findings (`sys.stdout` — scripts/validation/git_hook_policy.py:7988)
- Staged generated files when invoked with `stage-generated` (`git add` on generated MCP, agent, or memory artifacts) — scripts/validation/git_hook_policy.py:8452-8454

## Invokes — required
- script scripts/validate_session_json.py — scripts/validation/git_hook_policy.py:2630
- script .claude/skills/memory/scripts/extract_session_episode.py — scripts/validation/git_hook_policy.py:3123
- script scripts/security/run_semgrep.py — scripts/validation/git_hook_policy.py:6274
- script scripts/validation/validate_review_marker.py — scripts/validation/git_hook_policy.py:6779
- script build/scripts/validate_plugin_version_bump.py — scripts/validation/git_hook_policy.py:6796
- script .claude/skills/skillforge/scripts/validate-skill.py — scripts/validation/git_hook_policy.py:6841
- script build/scripts/validate_planning_artifacts.py — scripts/validation/git_hook_policy.py:6879
- script .claude/skills/taste-lints/scripts/taste_lints.py — scripts/validation/git_hook_policy.py:6912
- script scripts/sync_mcp_config.py — scripts/validation/git_hook_policy.py:6937
- script build/generate_agents.py — scripts/validation/git_hook_policy.py:6953
- script scripts/update_memory_index_tokens.py — scripts/validation/git_hook_policy.py:6964
- script .claude/skills/memory/scripts/test_memory_size.py — scripts/validation/git_hook_policy.py:6974
- script .claude/skills/memory/scripts/invoke_memory_cross_reference.py — scripts/validation/git_hook_policy.py:7060
- script scripts/validation/run_workflow_local_test.py — scripts/validation/git_hook_policy.py:7677
- script scripts/validation/check_placeholder_identity.py — scripts/validation/git_hook_policy.py:7711
- script .serena/scripts/import_observations_to_forgetful.py — scripts/validation/git_hook_policy.py:7896
- script .claude/skills/github/scripts/pr/get_unresolved_review_threads.py — scripts/validation/git_hook_policy.py:7932
- script build/scripts/generate_hooks.py — scripts/validation/git_hook_policy.py:8238
- script scripts/validation/validate_hook_anchoring.py — scripts/validation/git_hook_policy.py:8242
- script tests/e2e/test_cli_hook_e2e.py — scripts/validation/git_hook_policy.py:8243
- script tests/e2e/copilot_hook_probe.py — scripts/validation/git_hook_policy.py:8244
- script build/scripts/generate_commands.py — scripts/validation/git_hook_policy.py:8262
- script build/scripts/generate_skills.py — scripts/validation/git_hook_policy.py:8263
- script tests/e2e/test_plugin_load_smoke.py — scripts/validation/git_hook_policy.py:8265

## Invoked by — required
- skill ai-agents-change-control — .claude/skills/ai-agents-change-control/SKILL.md:68
- skill ai-agents-config-catalog — .claude/skills/ai-agents-config-catalog/SKILL.md:65
- skill security-detection — .claude/skills/security-detection/SKILL.md:94
- doc session-logs — .claude/rules/session-logs.md:32
- agent security — .claude/agents/security.md:382
- agent implementer — .claude/agents/implementer.md:705

## Concepts named — required, verbatim
- `root-hygiene` — scripts/validation/git_hook_policy.py:8391 — defined here
- `session` — scripts/validation/git_hook_policy.py:8392 — defined here
- `staged-dashes` — scripts/validation/git_hook_policy.py:8393 — defined here
- `staged-action-pins` — scripts/validation/git_hook_policy.py:8394 — defined here
- `root-scratch` — scripts/validation/git_hook_policy.py:8395 — defined here
- `staged-conflict-markers` — scripts/validation/git_hook_policy.py:8396 — defined here
- `github-bash` — scripts/validation/git_hook_policy.py:8397 — defined here
- `security-suppressions` — scripts/validation/git_hook_policy.py:8398 — defined here
- `mypy` — scripts/validation/git_hook_policy.py:8399 — defined here
- `yamllint` — scripts/validation/git_hook_policy.py:8400 — defined here
- `skillforge` — scripts/validation/git_hook_policy.py:8401 — defined here
- `taste` — scripts/validation/git_hook_policy.py:8402 — defined here
- `memory-cross-reference` — scripts/validation/git_hook_policy.py:8403 — defined here
- `workflow-local` — scripts/validation/git_hook_policy.py:8404 — defined here
- `sessions` — scripts/validation/git_hook_policy.py:8405 — defined here
- `observations` — scripts/validation/git_hook_policy.py:8406 — defined here
- `extract-episodes` — scripts/validation/git_hook_policy.py:8407 — defined here
- `adr-review` — scripts/validation/git_hook_policy.py:8408 — defined here
- `retrospective` — scripts/validation/git_hook_policy.py:8409 — defined here
- `pytest` — scripts/validation/git_hook_policy.py:8410 — defined here
- `branch` — scripts/validation/git_hook_policy.py:8413 — defined here
- `branch-context` — scripts/validation/git_hook_policy.py:8414 — defined here
- `planning` — scripts/validation/git_hook_policy.py:8415 — defined here
- `generate-mcp` — scripts/validation/git_hook_policy.py:8416 — defined here
- `generate-agents` — scripts/validation/git_hook_policy.py:8417 — defined here
- `memory-token-update` — scripts/validation/git_hook_policy.py:8418 — defined here
- `memory-size` — scripts/validation/git_hook_policy.py:8419 — defined here
- `memory-sync` — scripts/validation/git_hook_policy.py:8420 — defined here
- `placeholder-identity` — scripts/validation/git_hook_policy.py:8421 — defined here
- `additions` — scripts/validation/git_hook_policy.py:8422 — defined here
- `bot-cascade` — scripts/validation/git_hook_policy.py:8423 — defined here
- `semgrep` — scripts/validation/git_hook_policy.py:8424 — defined here
- `semgrep-push` — scripts/validation/git_hook_policy.py:8425 — defined here
- `security-suppressions-push` — scripts/validation/git_hook_policy.py:8426 — defined here
- `observations-push` — scripts/validation/git_hook_policy.py:8427 — defined here
- `security-suppressions-staged` — scripts/validation/git_hook_policy.py:8428 — defined here
- `pre-push` — scripts/validation/git_hook_policy.py:8429 — defined here
- `tracked-conflict-markers` — scripts/validation/git_hook_policy.py:8430 — defined here
- `atomic-commit` — scripts/validation/git_hook_policy.py:8431 — defined here
- `cli-hook-e2e` — scripts/validation/git_hook_policy.py:8438 — defined here
- `cli-plugin-e2e` — scripts/validation/git_hook_policy.py:8439 — defined here
- `commit-message` — scripts/validation/git_hook_policy.py:8449 — defined here
- `stage-generated` — scripts/validation/git_hook_policy.py:8452 — defined here
- `security-suppressions-range` — scripts/validation/git_hook_policy.py:8455 — defined here
- `security-suppressions-diff` — scripts/validation/git_hook_policy.py:8460 — defined here
- `Lefthook` — scripts/validation/git_hook_policy.py:4 — used here
- `ROOT_SCRATCH_ALLOWLIST` — scripts/validation/git_hook_policy.py:66 — defined here
- `PROHIBITED_DASHES` — scripts/validation/git_hook_policy.py:61 — defined here
- `ADR-104` — scripts/validation/git_hook_policy.py:568 — used here
- `ADR-042` — scripts/validation/git_hook_policy.py:1603 — used here

## Structure
(script; module-level imports, path constants, regex patterns, allowlists; utility helpers for git execution, process timeouts, container watchdog threading; check functions for git policies: check_generated_paths, check_branch, check_adr_review_policy, check_retrospective_evidence, check_branch_context, check_root_hygiene, check_active_git_operation, check_sessions, check_commit_message, check_root_scratch, check_staged_dashes, check_staged_conflict_markers, check_tracked_conflict_markers, check_staged_action_pins, check_github_bash_scripts, check_security_suppressions, check_atomic_commit, check_pushed_suppressions, check_range_suppressions, check_staged_suppressions, check_suppression_diff, check_push_refs, check_placeholder_identities; subcommand runners and advisories: run_mypy, run_yamllint, run_skillforge, run_planning_advisory, run_taste_advisory, run_pytest, run_workflow_local; handler functions _handle_*; argument parser builder build_parser; process watchdog _arm_container_watchdog; and main entry point main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/git_hook_policy.py`, language: Python, lines: 8553
- documented invocation: "run: uv run --frozen python scripts/validation/git_hook_policy.py branch" — lefthook.yml:50
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python scripts/validation/git_hook_policy.py --help`
    Stdout: `usage: git_hook_policy.py [-h] [--repo-root REPO_ROOT] ... Narrow Git policies that Lefthook cannot express declaratively.`
    Exit code: 0
  - Command: `python scripts/validation/git_hook_policy.py branch`
    Stdout: `ERROR: cannot commit or push directly to 'main'`
    Exit code: 1
  - Command: `python scripts/validation/git_hook_policy.py root-scratch temp.txt`
    Stdout: `ERROR: new repository-root files look like scratch (AGENTS.md Never list: no scratch in tree): temp.txt`
    Exit code: 1
  - Command: `python scripts/validation/git_hook_policy.py planning`
    Stdout: `=== Planning Artifact Validation === ... SUCCESS: All validations passed`
    Exit code: 0
- documented exit codes vs. actual exit paths:
  - Documented: "logic violation and 3 for an external failure." — scripts/validation/git_hook_policy.py:2048
  - Documented: "that is a judgement about staged evidence rather than about git." — scripts/validation/git_hook_policy.py:2054
  - Actual exit paths:
    - line 8533: `os._exit(3)`
    - line 8552: `raise SystemExit(main())`
    - line 1188: `return 1`
    - line 1140: `return 2`
    - line 2055: `return 3`
    - line 4259: `return 0`
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Yes, it exits non-zero (1, 2, or 3) on policy violations, configuration errors, or git failures. On the default branch (`main`), running `scripts/validation/git_hook_policy.py branch` fails with exit code 1 (`ERROR: cannot commit or push directly to 'main'`), which is expected by design to prevent unreviewed direct commits to protected branches. Other subcommands (`branch-context`, `root-hygiene`, `tracked-conflict-markers`, `atomic-commit`, `planning`) pass with exit code 0 on the clean default branch.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
Massive centralized gatekeeper: At 338,521 bytes and 8,553 lines, `git_hook_policy.py` is one of the largest single files in `rjm`, consolidating policy enforcement that would otherwise require dozens of disparate hook scripts. It employs a dedicated background watchdog thread (`_arm_container_watchdog`, lines 8487–8539) with `CONTAINER_PROCESS_CEILING_SECONDS` and abrupt termination (`os._exit(3)`) to prevent unmonitored CI container job reclamation when subprocesses or import-graph traversals hang. It strictly differentiates between policy/evidence failures (exit code 1), configuration/invocation errors (exit code 2), and underlying git command or environment failures (exit code 3), preventing git query errors from being misinterpreted as evidence rejections. It also enforces ASCII-only dashes (`PROHIBITED_DASHES`), blocking Unicode en-dash and em-dash characters in staged source files, and coordinates test selection and partitioning with `select_tests.py` while maintaining hardcoded serialization rules for process-sensitive test suites.

## Context cost
338,521 bytes (~85,000 tokens) standalone; ~390,000 bytes (~98,000 tokens) when including directly imported validation modules (`diff_line_scope.py`, `utilities.py`, `select_tests.py`, `object_id.py`, `pr_commit_count.py`, `session_scope.py`, `sha_pinning.py`).
