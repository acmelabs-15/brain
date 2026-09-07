---
unit: cc-rjm-23
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-23

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md
- [x] sources/rjm/.agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md
- [x] sources/rjm/.agents/architecture/ADR-046-planning-agent-rename.md
- [x] sources/rjm/.agents/architecture/ADR-047-plugin-mode-hook-behavior.md
- [x] sources/rjm/.agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md
- [x] sources/rjm/.agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md
- [x] sources/rjm/.agents/critique/ADR-045-debate-log.md
- [x] sources/rjm/.agents/projects/v0.3.1/PowerShell-migration.md
- [x] sources/rjm/.agents/projects/v0.4.0/PLAN.md
- [x] sources/rjm/.agents/security/ADR-045-framework-extraction-security-review.md
- [x] sources/rjm/.claude/agents/implementer.md
- [x] sources/rjm/.claude/commands/context-hub-setup.md
- [x] sources/rjm/.claude/skills/cva-analysis/scripts/validate-cva-matrix.py
- [x] sources/rjm/.claude/skills/reflect/SKILL.md
- [x] sources/rjm/.claude/skills/reflect/references/integration-and-design.md
- [x] sources/rjm/.claude/skills/review/SKILL.md
- [x] sources/rjm/.claude/skills/security-scan/SKILL.md
- [x] sources/rjm/.claude/skills/security-scan/references/vulnerability-patterns.md
- [x] sources/rjm/.claude/skills/skillforge/scripts/package_skill.py
- [x] sources/rjm/.github/scripts/assert_guard_jobs_succeeded.py
- [x] sources/rjm/.github/scripts/parse_pr_standards.py
- [x] sources/rjm/.github/scripts/test_rate_limit.py
- [x] sources/rjm/.github/workflows/drift-detection.yml
- [x] sources/rjm/.github/workflows/validate-generated-agents.yml
- [x] sources/rjm/AGENTS.md
- [x] sources/rjm/CONTRIBUTING.md
- [x] sources/rjm/README.md
- [x] sources/rjm/docs/agent-catalog.md
- [x] sources/rjm/docs/architecture.md
- [x] sources/rjm/docs/search-dont-load.md
- [x] sources/rjm/scripts/README.md
- [x] sources/rjm/scripts/ci/adr006_run_block_scanner.py
- [x] sources/rjm/scripts/ci/apply_ai_conflict_resolution.py
- [x] sources/rjm/scripts/ci/artifact_build_context.py
- [x] sources/rjm/scripts/ci/artifact_collect.py
- [x] sources/rjm/scripts/ci/artifact_create_issues.py
- [x] sources/rjm/scripts/ci/artifact_write_summary.py
- [x] sources/rjm/scripts/ci/build_ai_review_context.py
- [x] sources/rjm/scripts/ci/check_ai_review_infra_gate.py
- [x] sources/rjm/scripts/ci/check_claude_authorization.py
- [x] sources/rjm/scripts/ci/check_codeql_sarif.py
- [x] sources/rjm/scripts/ci/classify_semantic_title_result.py
- [x] sources/rjm/scripts/ci/cli_exit_contract_ratchet.py
- [x] sources/rjm/scripts/ci/collect_ai_metrics.py
- [x] sources/rjm/scripts/ci/commit_and_push.py
- [x] sources/rjm/scripts/ci/detect_human_changes_requested.py
- [x] sources/rjm/scripts/ci/diagnose_copilot_cli.py
- [x] sources/rjm/scripts/ci/drift_collect_details.py
- [x] sources/rjm/scripts/ci/drift_create_alert_issue.py
- [x] sources/rjm/scripts/ci/drift_run_detection.py
- [x] sources/rjm/scripts/ci/drift_write_summary.py
- [x] sources/rjm/scripts/ci/execute_ai_review_post_script.py
- [x] sources/rjm/scripts/ci/find_copilot_ready_issues.py
- [x] sources/rjm/scripts/ci/install_copilot_cli.py
- [x] sources/rjm/scripts/ci/invoke_copilot_cli.py
- [x] sources/rjm/scripts/ci/load_ai_review_prompt.py
- [x] sources/rjm/scripts/ci/materialize_installed_plugin.py
- [x] sources/rjm/scripts/ci/parse_ai_review_output.py
- [x] sources/rjm/scripts/ci/parse_drift_results.py
- [x] sources/rjm/scripts/ci/parse_hook_bypass_results.py
- [x] sources/rjm/scripts/ci/parse_memory_health_results.py
- [x] sources/rjm/scripts/ci/parse_memory_validation_results.py
- [x] sources/rjm/scripts/ci/prepare_conflict_context.py
- [x] sources/rjm/scripts/ci/require_job_results.py
- [x] sources/rjm/scripts/ci/run_copilot_synthesis.py
- [x] sources/rjm/scripts/ci/spec_extract_refs.py
- [x] sources/rjm/scripts/ci/spec_load_content.py
- [x] sources/rjm/scripts/ci/spec_prepare_context.py
- [x] sources/rjm/scripts/ci/sweep_copilot_synthesis.py
- [x] sources/rjm/scripts/ci/test_installed_plugin_hooks.py
- [x] sources/rjm/scripts/ci/validate_ai_review_budgets.py
- [x] sources/rjm/scripts/ci/vanilla_hook_guard.py
- [x] sources/rjm/scripts/ci/verify_code_env.py
- [x] sources/rjm/scripts/ci/verify_github_auth.py
- [x] sources/rjm/scripts/ci/write_copilot_synthesis_summary.py
- [x] sources/rjm/scripts/ci/write_pr_discovery_summary.py
- [x] sources/rjm/scripts/ci/write_pr_maintenance_summary.py
- [x] sources/rjm/scripts/ci/write_synthesis_sweep_summary.py
- [x] sources/rjm/scripts/gh_retry_helpers.py
- [x] sources/rjm/scripts/modules/slash_command_validator.py
- [x] sources/rjm/scripts/quality_gate/__init__.py
- [x] sources/rjm/scripts/quality_gate/check_critical_failures.py
- [x] sources/rjm/scripts/quality_gate/run_pytest.py
- [x] sources/rjm/scripts/skill_description_budget.py
- [x] sources/rjm/scripts/validate_workflows.py
- [x] sources/rjm/scripts/validation/assert_trusted_smoke_context.py
- [x] sources/rjm/scripts/validation/check_adr_links_baseline.txt
- [x] sources/rjm/scripts/validation/check_agent_skill_discriminator.py
- [x] sources/rjm/scripts/validation/check_ci_dependency_pins.py
- [x] sources/rjm/scripts/validation/check_copilot_version_pin.py
- [x] sources/rjm/scripts/validation/check_skill_md_portability.py
- [x] sources/rjm/scripts/validation/pr_commit_count.py
- [x] sources/rjm/scripts/validation/pre_pr.py
- [x] sources/rjm/scripts/validation/pre_pr_sequence.py
- [x] sources/rjm/scripts/validation/run_install_parity_ci.py
- [x] sources/rjm/scripts/validation/run_plugin_version_bump_ci.py
- [x] sources/rjm/scripts/validation/run_workflow_local_test.py
- [x] sources/rjm/src/claude/AGENTS.md
- [x] sources/rjm/templates/AGENTS.md
- [x] sources/rjm/templates/agents/architect.shared.md
- [x] sources/rjm/templates/agents/implementer.shared.md

## Outputs produced
- docs/analysis/concepts/rjm/generate-agents-common-psm1.md (1006 bytes)
- docs/analysis/concepts/rjm/generate-agents-py.md (1257 bytes)
- docs/analysis/concepts/rjm/ai-review.md (2415 bytes)
- docs/analysis/concepts/rjm/adr-044.md (902 bytes)
- docs/analysis/concepts/rjm/adr-094.md (1194 bytes)
- docs/analysis/concepts/rjm/adr-040.md (1122 bytes)
- docs/analysis/concepts/rjm/safe-resolve.md (1139 bytes)
- docs/analysis/concepts/rjm/expand-contract.md (1735 bytes)
- docs/analysis/concepts/rjm/adr-006.md (9451 bytes)
- docs/analysis/concepts/rjm/backlog-generator.md (1922 bytes)
- docs/analysis/concepts/rjm/action-object-pattern.md (1277 bytes)
- docs/analysis/concepts/rjm/adr-046.md (851 bytes)
- docs/analysis/concepts/rjm/plugin-mode-hook-behavior.md (984 bytes)
- docs/analysis/concepts/rjm/marketplace-plugin.md (1340 bytes)
- docs/analysis/concepts/rjm/claude-project-dir.md (981 bytes)
- docs/analysis/concepts/rjm/adr-review-enforcement.md (1327 bytes)
- docs/analysis/concepts/rjm/skill-first-guards.md (1299 bytes)
- docs/analysis/concepts/rjm/path-resolution.md (1567 bytes)
- docs/analysis/concepts/rjm/project-directory-resolution.md (1331 bytes)
- docs/analysis/concepts/rjm/standard-import-boilerplate.md (1276 bytes)
- docs/analysis/concepts/rjm/path-normalization.md (1739 bytes)
- docs/analysis/concepts/rjm/containment-validation.md (1276 bytes)
- docs/analysis/concepts/rjm/pre-validation.md (1259 bytes)
- docs/analysis/concepts/rjm/path-traversal.md (2368 bytes)
- docs/analysis/concepts/rjm/untrusted-search-path.md (1044 bytes)
- docs/analysis/concepts/rjm/mcp-tool-ecosystem-expansion.md (985 bytes)
- docs/analysis/concepts/rjm/model-context-protocol.md (1221 bytes)
- docs/analysis/concepts/rjm/serena-mcp.md (1356 bytes)
- docs/analysis/concepts/rjm/deepwiki-mcp.md (950 bytes)
- docs/analysis/concepts/rjm/forgetful-mcp.md (1051 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-23.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/generate-agents-common-psm1.md docs/analysis/concepts/rjm/generate-agents-py.md docs/analysis/concepts/rjm/ai-review.md docs/analysis/concepts/rjm/adr-044.md docs/analysis/concepts/rjm/adr-094.md docs/analysis/concepts/rjm/adr-040.md docs/analysis/concepts/rjm/safe-resolve.md docs/analysis/concepts/rjm/expand-contract.md docs/analysis/concepts/rjm/adr-006.md docs/analysis/concepts/rjm/backlog-generator.md docs/analysis/concepts/rjm/action-object-pattern.md docs/analysis/concepts/rjm/adr-046.md docs/analysis/concepts/rjm/plugin-mode-hook-behavior.md docs/analysis/concepts/rjm/marketplace-plugin.md docs/analysis/concepts/rjm/claude-project-dir.md docs/analysis/concepts/rjm/adr-review-enforcement.md docs/analysis/concepts/rjm/skill-first-guards.md docs/analysis/concepts/rjm/path-resolution.md docs/analysis/concepts/rjm/project-directory-resolution.md docs/analysis/concepts/rjm/standard-import-boilerplate.md docs/analysis/concepts/rjm/path-normalization.md docs/analysis/concepts/rjm/containment-validation.md docs/analysis/concepts/rjm/pre-validation.md docs/analysis/concepts/rjm/path-traversal.md docs/analysis/concepts/rjm/untrusted-search-path.md docs/analysis/concepts/rjm/mcp-tool-ecosystem-expansion.md docs/analysis/concepts/rjm/model-context-protocol.md docs/analysis/concepts/rjm/serena-mcp.md docs/analysis/concepts/rjm/deepwiki-mcp.md docs/analysis/concepts/rjm/forgetful-mcp.md` (exit code 0, 35 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-23 covers 30 concept cards spanning build scripts (`Generate-Agents.Common.psm1`, `generate_agents.py`), CI actions and standards (`ai-review`, `ADR-006` with 63 occurrences), architectural decision records (`ADR-044`, `ADR-094`, `ADR-040`, `ADR-046`), agent nomenclature and roles (`action-object pattern`, `backlog-generator`), marketplace plugin runtime patterns and hook security (`Plugin-Mode Hook Behavior`, `marketplace plugin`, `CLAUDE_PROJECT_DIR`, `ADR review enforcement`, `skill-first guards`, `Path Resolution`, `Project Directory Resolution`, `Standard Import Boilerplate`, `Path Normalization`, `Containment Validation`, `Pre-Validation`, `Path Traversal`, `Untrusted Search Path`), and external MCP ecosystem tools (`MCP Tool Ecosystem Expansion`, `Model Context Protocol`, `Serena MCP`, `DeepWiki MCP`, `Forgetful MCP`).
- All 30 cards were authored from scratch to satisfy unit-facts cc-rjm-23.
- Concept `ADR-006` carries 63 occurrences across 63 distinct source files in the repository, representing the thin workflows and testable script extraction architectural standard. Every occurrence has been recorded in the card's Where used table.
- Concepts referring to excluded memory infrastructure per METHOD §1.2 (`Serena MCP`, `Forgetful MCP`, `DeepWiki MCP`) have been flagged with `implementation_in_scope: false` and `Implementation status: out-of-scope`.
- Non-lifecycle concepts (ADR identifiers, script filenames, environment variables, action names) have been categorized as `kind: name-only` per D-023.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~50,000 tokens across 101 source files and cited inventory cards.
Approximate tokens of output written: ~16,000 tokens across 30 concept cards and 1 unit report.
