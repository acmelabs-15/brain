---
package: rjm
path: scripts/validation/pre_pr_sequence.py
type: script
bytes: 23593
unit: inv-rjm-301
in_scope_via: scripts/validation/pre_pr.py
aliases: []
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/pre_pr_sequence.py

## Purpose — required, verbatim
> "Ordered pre-PR validation sequence (extracted from ``pre_pr.py``, Issue #3073)." — scripts/validation/pre_pr_sequence.py:11

## Design intent — required
Provides an ordered, table-driven registry defining the execution sequence and gate configurations for the repository's shift-left pre-PR validation suite. Originally inlined as procedural calls within `pre_pr.py`, this module was extracted (Issues #3073 and #4285) to satisfy file-size lint constraints while enabling new governance gates to be registered declaratively. By encapsulating each check as a `_Gate` dataclass row within the immutable `_SEQUENCE` tuple, it separates the ordering and conditional execution policies (e.g. `--quick` via `skip_when_quick`, `--skip-tests` via `skip_flag`, and pre-push fast-stage deduplication via `already_run_by` and `AI_AGENTS_PRE_PR_FAST_STAGE_RAN`) from CLI parsing and reporting. Furthermore, it employs a late-binding dynamic adapter (`_root_only`) so that consumer wiring tests can mock or rebind validators on the module without freezing imported function objects.

## Phase — required
rjm:ship

## Inputs — required
- Arguments passed to `run_all_validations`:
  - `repo_root: Path` (filesystem path to the repository root — scripts/validation/pre_pr_sequence.py:424)
  - `args: argparse.Namespace` (CLI flag namespace providing `quick`, `skip_tests`, and `verbose` options — scripts/validation/pre_pr_sequence.py:425, 434)
  - `state: _ValidationStateLike` (protocol tracking `total` and `skipped` counts — scripts/validation/pre_pr_sequence.py:119-130, 426)
  - `run_validation: Callable[..., bool]` (runner callback injected by caller — scripts/validation/pre_pr_sequence.py:427)
- Environment variables:
  - `FAST_STAGE_RAN_ENV` (`"AI_AGENTS_PRE_PR_FAST_STAGE_RAN"`: skips whole-tree gates already passed in pre-push jobs — scripts/validation/pre_pr_sequence.py:131, 437)
  - `GH_REPO` (optional repository override for orphaned build deferrals gate — scripts/validation/pre_pr_sequence.py:188)
- Upstream sibling modules:
  - Validations imported from `checks_*` and `check_*` modules under `scripts/validation/`.

## Outputs — required
- Injected state mutations:
  - Increments `state.total` and `state.skipped` when gates are bypassed (scripts/validation/pre_pr_sequence.py:441-442, 450-451).
- Formatted stdout notices:
  - `[SKIP] {gate.name} ({gate.skip_note})` for flag-skipped gates (scripts/validation/pre_pr_sequence.py:440).
  - `[SKIP] {gate.name} (already passed as the unconditional pre-push job {gate.already_run_by})` for fast-stage skipped gates (scripts/validation/pre_pr_sequence.py:446-449).
- Gate execution calls:
  - Calls `run_validation(gate.name, state, lambda g=gate: g.run(repo_root, args), skip=gate.skip_when_quick and args.quick)` for each gate in `_SEQUENCE` (scripts/validation/pre_pr_sequence.py:454-459).

## Invokes — required
- script active_plan_closeout — scripts/validation/pre_pr_sequence.py:42
- script check_adr_lifecycle — scripts/validation/pre_pr_sequence.py:43
- script check_adr_links — scripts/validation/pre_pr_sequence.py:44
- script check_citation_freshness — scripts/validation/pre_pr_sequence.py:45
- script check_doc_interpreter_portability — scripts/validation/pre_pr_sequence.py:46
- script check_duplicate_test_helpers — scripts/validation/pre_pr_sequence.py:49
- script check_generated_staleness — scripts/validation/pre_pr_sequence.py:50
- script check_git_hook_health — scripts/validation/pre_pr_sequence.py:51
- script check_nested_tests — scripts/validation/pre_pr_sequence.py:52
- script check_push_lock_paths — scripts/validation/pre_pr_sequence.py:53
- script check_subprocess_encoding — scripts/validation/pre_pr_sequence.py:54
- script check_test_tree_writes — scripts/validation/pre_pr_sequence.py:55
- script check_tmp_worktrees — scripts/validation/pre_pr_sequence.py:56
- script check_unreachable_code — scripts/validation/pre_pr_sequence.py:57
- script check_worktree_recipes — scripts/validation/pre_pr_sequence.py:58
- script checks_coverage — scripts/validation/pre_pr_sequence.py:59
- script checks_dash — scripts/validation/pre_pr_sequence.py:62
- script checks_mypy — scripts/validation/pre_pr_sequence.py:63
- script checks_plugin — scripts/validation/pre_pr_sequence.py:64
- script checks_ratchet — scripts/validation/pre_pr_sequence.py:75
- script checks_spec — scripts/validation/pre_pr_sequence.py:76
- script checks_tooling — scripts/validation/pre_pr_sequence.py:93
- script stale_script_refs — scripts/validation/pre_pr_sequence.py:106
- script validate_argument_hint — scripts/validation/pre_pr_sequence.py:107
- script validate_design_review — scripts/validation/pre_pr_sequence.py:108
- script validate_no_orphaned_build_deferrals — scripts/validation/pre_pr_sequence.py:109
- script validate_python_syntax — scripts/validation/pre_pr_sequence.py:112
- script checks_copilot — scripts/validation/pre_pr_sequence.py:206

## Invoked by — required
- script pre_pr — scripts/validation/pre_pr.py:140

## Concepts named — required, verbatim
- `taste-lint` — scripts/validation/pre_pr_sequence.py:2 — used here
- `file-size` — scripts/validation/pre_pr_sequence.py:2 — used here
- `run_all_validations` — scripts/validation/pre_pr_sequence.py:13 — defined here
- `_SEQUENCE` — scripts/validation/pre_pr_sequence.py:17 — defined here
- `_Gate` — scripts/validation/pre_pr_sequence.py:17 — defined here
- `_ValidationStateLike` — scripts/validation/pre_pr_sequence.py:119 — defined here
- `FAST_STAGE_RAN_ENV` — scripts/validation/pre_pr_sequence.py:131 — defined here
- `_root_only` — scripts/validation/pre_pr_sequence.py:162 — defined here
- `_run_orphaned_build_deferrals` — scripts/validation/pre_pr_sequence.py:182 — defined here
- `_run_copilot_routing_exclusions` — scripts/validation/pre_pr_sequence.py:197 — defined here
-- `Python Syntax (compile gate)` — scripts/validation/pre_pr_sequence.py:217 — defined here
- `Count Ratchets` — scripts/validation/pre_pr_sequence.py:221 — defined here
- `Nested Test Detection` — scripts/validation/pre_pr_sequence.py:225 — defined here
- `Duplicate Test Helper Detection` — scripts/validation/pre_pr_sequence.py:226 — defined here
- `Unreachable Code Detection` — scripts/validation/pre_pr_sequence.py:228 — defined here
- `Subprocess Encoding Convention` — scripts/validation/pre_pr_sequence.py:232 — defined here
- `Test Working Tree Writes` — scripts/validation/pre_pr_sequence.py:233 — defined here
- `Push Lock Path Agreement` — scripts/validation/pre_pr_sequence.py:234 — defined here
- `Worktree Recipe Destinations` — scripts/validation/pre_pr_sequence.py:240 — defined here
- `Temp-filesystem Worktrees (advisory)` — scripts/validation/pre_pr_sequence.py:246 — defined here
- `Session End Validation` — scripts/validation/pre_pr_sequence.py:247 — defined here
- `Mypy Changed Files (ratchet)` — scripts/validation/pre_pr_sequence.py:250 — defined here
- `Markdown Linting` — scripts/validation/pre_pr_sequence.py:251 — defined here
- `Workflow YAML Validation` — scripts/validation/pre_pr_sequence.py:252 — defined here
- `Copilot CLI Version Pin` — scripts/validation/pre_pr_sequence.py:255 — defined here
- `CI Dependency Pins` — scripts/validation/pre_pr_sequence.py:260 — defined here
- `ADR Lifecycle Frontmatter (ratchet)` — scripts/validation/pre_pr_sequence.py:264 — defined here
- `ADR Link Resolution` — scripts/validation/pre_pr_sequence.py:268 — defined here
- `Design Review Frontmatter` — scripts/validation/pre_pr_sequence.py:269 — defined here
- `Build Command Exit Gates` — scripts/validation/pre_pr_sequence.py:271 — defined here
- `Stale Script References` — scripts/validation/pre_pr_sequence.py:274 — defined here
- `Citation Freshness (added lines)` — scripts/validation/pre_pr_sequence.py:281 — defined here
- `Documented Interpreter Portability` — scripts/validation/pre_pr_sequence.py:285 — defined here
- `Orphaned Build Deferrals` — scripts/validation/pre_pr_sequence.py:289 — defined here
- `Generated Artifact Staleness` — scripts/validation/pre_pr_sequence.py:297 — defined here
- `Spec ID Uniqueness` — scripts/validation/pre_pr_sequence.py:298 — defined here
- `Traceability` — scripts/validation/pre_pr_sequence.py:299 — defined here
- `Vendor Portability` — scripts/validation/pre_pr_sequence.py:301 — defined here
- `Skill Markdown Portability` — scripts/validation/pre_pr_sequence.py:303 — defined here
- `Skill Shell Detection` — scripts/validation/pre_pr_sequence.py:307 — defined here
- `Skill SKIP Clause Routing` — scripts/validation/pre_pr_sequence.py:310 — defined here
- `Skill Memory References` — scripts/validation/pre_pr_sequence.py:315 — defined here
- `Colocated Skill Tests` — scripts/validation/pre_pr_sequence.py:317 — defined here
- `Rule Activation Coverage` — scripts/validation/pre_pr_sequence.py:322 — defined here
- `Copilot Routing Exclusions` — scripts/validation/pre_pr_sequence.py:325 — defined here
- `Sync Registry Provenance` — scripts/validation/pre_pr_sequence.py:326 — defined here
- `Agent Catalog Drift` — scripts/validation/pre_pr_sequence.py:328 — defined here
- `Shipped Skill Routes` — scripts/validation/pre_pr_sequence.py:331 — defined here
- `Canonical Citation Check` — scripts/validation/pre_pr_sequence.py:334 — defined here
- `Orchestrator Citation Check` — scripts/validation/pre_pr_sequence.py:337 — defined here
- `Em/en-dash Prohibition` — scripts/validation/pre_pr_sequence.py:339 — defined here
- `Spec Contradiction Check` — scripts/validation/pre_pr_sequence.py:343 — defined here
- `Model Pin Governance (warn)` — scripts/validation/pre_pr_sequence.py:348 — defined here
- `Active Plan Closeout Advisory` — scripts/validation/pre_pr_sequence.py:352 — defined here
- `YAML Style Validation` — scripts/validation/pre_pr_sequence.py:353 — defined here
- `Path Normalization` — scripts/validation/pre_pr_sequence.py:355 — defined here
- `Planning Artifacts` — scripts/validation/pre_pr_sequence.py:361 — defined here
- `Agent Drift Detection` — scripts/validation/pre_pr_sequence.py:366 — defined here
- `Install Parity (agents and rules)` — scripts/validation/pre_pr_sequence.py:368 — defined here
- `Agent Content Parity (.claude/agents vs src/claude)` — scripts/validation/pre_pr_sequence.py:373 — defined here
- `Plugin Version Bump` — scripts/validation/pre_pr_sequence.py:377 — defined here
- `Hook Anchoring (Claude + Copilot)` — scripts/validation/pre_pr_sequence.py:380 — defined here
- `Copilot Agent Frontmatter` — scripts/validation/pre_pr_sequence.py:384 — defined here
- `Argument-Hint Frontmatter` — scripts/validation/pre_pr_sequence.py:393 — defined here
- `Git Hook Health (core.hooksPath)` — scripts/validation/pre_pr_sequence.py:401 — defined here
- `Lefthook Installed` — scripts/validation/pre_pr_sequence.py:404 — defined here
- `Workflow Local Run` — scripts/validation/pre_pr_sequence.py:406 — defined here
- `Review Marker (SHA-bound /review)` — scripts/validation/pre_pr_sequence.py:409 — defined here
- `Instruction Budget (always-on)` — scripts/validation/pre_pr_sequence.py:413 — defined here
- `Always-on Corpus Claims` — scripts/validation/pre_pr_sequence.py:419 — defined here

## Structure
- `class _ValidationStateLike(Protocol):` — scripts/validation/pre_pr_sequence.py:119
- `class _Gate:` — scripts/validation/pre_pr_sequence.py:135
- `def _root_only(validator: Callable[[Path], bool]) -> Callable[[Path, argparse.Namespace], bool]:` — scripts/validation/pre_pr_sequence.py:162
- `def _run_orphaned_build_deferrals(repo_root: Path, _args: argparse.Namespace) -> bool:` — scripts/validation/pre_pr_sequence.py:182
- `def _run_copilot_routing_exclusions(repo_root: Path, _args: argparse.Namespace) -> bool:` — scripts/validation/pre_pr_sequence.py:197
- `def run_all_validations(` — scripts/validation/pre_pr_sequence.py:423

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/pre_pr_sequence.py`
- **language:** Python 3
- **lines:** 460
- **documented invocation:**
  - `#!/usr/bin/env python3` — scripts/validation/pre_pr_sequence.py:1
- **executed:** yes
- **actual command run:** `uv run --directory sources/rjm python scripts/validation/pre_pr_sequence.py`
- **abridged stdout:** ``
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths:**
  - documented: none (registry module without direct CLI entrypoint)
  - actual exit paths: runs module-level imports and definitions; when executed directly as a Python script, completes module evaluation without error and exits 0
- **for validators/gates:**
  - Can it exit non-zero: no directly as a standalone script (does not define a `main()` function); individual gates registered in `_SEQUENCE` exit non-zero when run through `pre_pr.py`
  - Verified on repository default branch: exits 0
- **does the output match what the documentation claims:** yes (serves as a pure validation sequence registry)

## Defects — required
none

## Observations
- Table-driven architecture: Replaces over 400 lines of procedural `run_validation()` calls with an immutable sequence `_SEQUENCE` of `_Gate` records, making validation ordering inspectable as data.
- Late-binding function resolution: Employs `_root_only` with dynamic `globals().get(name, validator)` lookup at invocation time, allowing consumer wiring tests to mock or rebind validator functions on the module without encountering frozen closures.
- Circular dependency avoidance: Implements `_ValidationStateLike` structural typing protocol instead of importing `ValidationState` from `pre_pr.py`, avoiding circular import issues when `pre_pr.py` runs as `__main__` (Issue #3073).
- Pre-push optimization: Honors `AI_AGENTS_PRE_PR_FAST_STAGE_RAN` environment variable and `already_run_by` gate attributes to bypass whole-tree validations that have already succeeded in fast-stage pre-push hook execution.

## Context cost
23593 bytes source file, 460 lines, ~5900 tokens.
