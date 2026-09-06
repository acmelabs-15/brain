---
package: rjm
path: .github/workflows/validate-generated-agents.yml
type: config
bytes: 11662
unit: inv-rjm-186
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: .github/workflows/validate-generated-agents.yml, sha256: bfec11e4e278d7959a9341743431c53b8f4c68ee7d453a25390ec6e58777e6ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/workflows/validate-generated-agents.yml

## Purpose — required, verbatim
> "Ensures generated agent files haven't been edited directly." — .github/workflows/validate-generated-agents.yml:3

## Design intent — required
Continuous integration workflow that automates drift detection and validation for generated agent definitions and platform manifests. It regenerates agent files from shared templates (`build/generate_agents.py --validate`), enforces build-all artifact freshness (`build_all.py --check`), checks review-axes alignment (`run_drift_check_ci.py`), validates platform template schemas (`validate_templates_schema.py`), verifies plugin frontmatter self-containment, maintains sibling install parity between `.claude/`, `.github/`, and `src/` (`run_install_parity_ci.py`), ensures plugin library synchronization (`sync_plugin_lib.py --check`), forbids component counts in plugin descriptions (`check_plugin_manifest_parity.py`), and validates GitHub Actions SHA pinning and Copilot frontmatter syntax. Without it, developers and automated agents could manually edit generated artifacts or allow platform mirrors to silently desynchronize.

## Phase — required
cross-phase

## Inputs — required
- Push events to `main` branch — .github/workflows/validate-generated-agents.yml:12
- Pull request events targeting `main` branch — .github/workflows/validate-generated-agents.yml:16
- Merge group events targeting `main` branch — .github/workflows/validate-generated-agents.yml:20
- Manual workflow dispatch triggers — .github/workflows/validate-generated-agents.yml:22
- Repository paths evaluated via `dorny/paths-filter@ceb8a2b8f2d89434be7ff52d3de7ec3738c5cc9d` — .github/workflows/validate-generated-agents.yml:44
- Environment variables for filter evaluation (`GH_EVENT_NAME`, `FILTER_OUTPUTS`, `FILTER_KEYS`, `FORCE_RUN_EVENTS`, `OUTPUT_NAME`) — .github/workflows/validate-generated-agents.yml:78-82
- Environment variables for install parity (`PR_BASE_REF`, `PUSH_BEFORE_SHA`) — .github/workflows/validate-generated-agents.yml:204-205

## Outputs — required
- CI job execution status for `check-paths` job — .github/workflows/validate-generated-agents.yml:30
- Step output `should-run-agents` indicating whether validation is required — .github/workflows/validate-generated-agents.yml:37
- CI job execution status for `validate` job — .github/workflows/validate-generated-agents.yml:85
- Terminal validation logs, stdout summary of generator checks, or diff display on failure via `scripts/ci/show_generated_agent_diff.py` — .github/workflows/validate-generated-agents.yml:255

## Invokes — required
- script scripts/workflows/determine_should_run_from_filters.py — .github/workflows/validate-generated-agents.yml:83
- script tests/ci/test_validation_scripts_are_reachable.py — .github/workflows/validate-generated-agents.yml:126
- script tests/ci/test_frontmatter_gate_paths_filter.py — .github/workflows/validate-generated-agents.yml:139
- script build/scripts/validate_agent_matrix_refs.py — .github/workflows/validate-generated-agents.yml:143
- script build/generate_agents.py — .github/workflows/validate-generated-agents.yml:149
- script build/scripts/build_all.py — .github/workflows/validate-generated-agents.yml:158
- script build/scripts/run_drift_check_ci.py — .github/workflows/validate-generated-agents.yml:169
- script build/scripts/validate_templates_schema.py — .github/workflows/validate-generated-agents.yml:173
- script scripts/validation/check_plugin_frontmatter_self_containment.py — .github/workflows/validate-generated-agents.yml:182
- script scripts/validation/run_install_parity_ci.py — .github/workflows/validate-generated-agents.yml:207
- script scripts/sync_plugin_lib.py — .github/workflows/validate-generated-agents.yml:220
- script build/scripts/check_plugin_manifest_parity.py — .github/workflows/validate-generated-agents.yml:232
- script scripts/validation/sha_pinning.py — .github/workflows/validate-generated-agents.yml:239
- script scripts/validation/validate_copilot_agent_frontmatter.py — .github/workflows/validate-generated-agents.yml:249
- script scripts/validation/validate_argument_hint.py — .github/workflows/validate-generated-agents.yml:250
- script scripts/validation/agent_registry.py — .github/workflows/validate-generated-agents.yml:251
- script scripts/ci/show_generated_agent_diff.py — .github/workflows/validate-generated-agents.yml:255

## Invoked by — required
- doc templates/README.md — templates/README.md:254
- doc templates/AGENTS.md — templates/AGENTS.md:309
- doc .github/AGENTS.md — .github/AGENTS.md:166
- script scripts/validation/run_install_parity_ci.py — scripts/validation/run_install_parity_ci.py:4
- script build/scripts/run_drift_check_ci.py — build/scripts/run_drift_check_ci.py:5

## Concepts named — required, verbatim
- `Validate Generated Agents` — .github/workflows/validate-generated-agents.yml:9 — defined here
- `Check Paths` — .github/workflows/validate-generated-agents.yml:31 — defined here
- `ADR-025` — .github/workflows/validate-generated-agents.yml:32 — used here
- `Validate Generated Files` — .github/workflows/validate-generated-agents.yml:86 — defined here
- `Validate script reachability` — .github/workflows/validate-generated-agents.yml:124 — defined here
- `Validate frontmatter gate paths filter` — .github/workflows/validate-generated-agents.yml:137 — defined here
- `Validate capability matrix references` — .github/workflows/validate-generated-agents.yml:141 — defined here
- `Regenerate and validate agent files` — .github/workflows/validate-generated-agents.yml:145 — defined here
- `Build-all staleness check` — .github/workflows/validate-generated-agents.yml:151 — defined here
- `REQ-003-005` — .github/workflows/validate-generated-agents.yml:151 — used here
- `Review-axes drift check` — .github/workflows/validate-generated-agents.yml:160 — defined here
- `REQ-008-03` — .github/workflows/validate-generated-agents.yml:160 — used here
- `Validate platform template schema` — .github/workflows/validate-generated-agents.yml:171 — defined here
- `REQ-003-002` — .github/workflows/validate-generated-agents.yml:171 — used here
- `Validate plugin frontmatter self-containment` — .github/workflows/validate-generated-agents.yml:175 — defined here
- `Validate agent capability matrix references` — .github/workflows/validate-generated-agents.yml:184 — defined here
- `Install-parity check` — .github/workflows/validate-generated-agents.yml:190 — defined here
- `ADR-006` — .github/workflows/validate-generated-agents.yml:199 — used here
- `Plugin lib sync check` — .github/workflows/validate-generated-agents.yml:209 — defined here
- `Plugin manifest description count check` — .github/workflows/validate-generated-agents.yml:222 — defined here
- `ADR-092` — .github/workflows/validate-generated-agents.yml:227 — used here
- `Validate GitHub Actions SHA Pinning` — .github/workflows/validate-generated-agents.yml:234 — defined here
- `Validate Copilot agent frontmatter` — .github/workflows/validate-generated-agents.yml:241 — defined here
- `Show diff on failure` — .github/workflows/validate-generated-agents.yml:253 — defined here

## Structure
- `name: Validate Generated Agents` — .github/workflows/validate-generated-agents.yml:9
- `on:` — .github/workflows/validate-generated-agents.yml:11
- `concurrency:` — .github/workflows/validate-generated-agents.yml:24
- `jobs:` — .github/workflows/validate-generated-agents.yml:28
- `check-paths:` — .github/workflows/validate-generated-agents.yml:30
- `validate:` — .github/workflows/validate-generated-agents.yml:85

## Scripts — required if type is script or the skill ships scripts
The file is a CI workflow configuration (type `config`), not a script itself. It documents a local command in header comments:
- path: `build/generate_agents.py`
- language: Python
- documented invocation: `uv run python build/generate_agents.py --validate` — .github/workflows/validate-generated-agents.yml:7
- executed: yes
- actual command run: `uv run python build/generate_agents.py --validate` (cwd: `sources/rjm`)
- actual exit code: 0
- abridged stdout: "Loaded 3 platform configuration(s)\nLoaded 9 toolset definition(s)\nFound 31 shared source file(s)\n...\nVALIDATION PASSED: All generated files match committed files"
- documented exit codes: Exits non-zero if committed files differ from generated templates (line 4); exits 0 on match. Actual exit code was 0.
- validators/gates: Yes, exits non-zero on template drift; clean on current default checkout.
- output match claim: Matches claim that validation passes when committed files match templates.

## Defects — required
- internal-contradiction · .github/workflows/validate-generated-agents.yml:141,184 · The validation step `uv run python build/scripts/validate_agent_matrix_refs.py` is duplicated twice in the `validate` job under two slightly different step names (`Validate capability matrix references` at line 141 and `Validate agent capability matrix references` at line 184).

## Observations
- Adheres strictly to ADR-006 ("Thin Workflows, Testable Modules") by keeping YAML steps minimal and delegating validation logic to testable Python modules.
- Uses ARM runners (`ubuntu-24.04-arm`) per ADR-025 for 37.5% cost savings over x64.
- Employs a paths-filter step (`dorny/paths-filter`) to conditionally skip execution when non-agent paths are modified.
- Full git clone (`fetch-depth: 0`) is configured on line 112 so `run_install_parity_ci.py` can resolve `PR_BASE_REF` and `PUSH_BEFORE_SHA` git revisions.

## Context cost
11662 bytes (~2900 tokens). Loads Python scripts during execution in CI.
