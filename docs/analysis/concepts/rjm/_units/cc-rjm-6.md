---
unit: cc-rjm-6
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-6

## Files assigned
### Source files
- [x] sources/rjm/.agents/analysis/claude-code-plugin-marketplaces.md
- [x] sources/rjm/.agents/analysis/claude-flow-architecture-analysis.md
- [x] sources/rjm/.agents/architecture/ADR-007-memory-first-architecture.md
- [x] sources/rjm/.agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md
- [x] sources/rjm/.agents/architecture/ADR-009-parallel-safe-multi-agent-design.md
- [x] sources/rjm/.agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md
- [x] sources/rjm/.agents/architecture/ADR-021-model-routing-strategy.md
- [x] sources/rjm/.agents/architecture/ADR-037-memory-router-architecture.md
- [x] sources/rjm/.agents/architecture/ADR-041-codeql-integration.md
- [x] sources/rjm/.agents/architecture/ADR-047-plugin-mode-hook-behavior.md
- [x] sources/rjm/.agents/architecture/ADR-068-consolidated-hook-dispatcher.md
- [x] sources/rjm/.agents/architecture/ADR-069-context-corpus-is-the-product.md
- [x] sources/rjm/.agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md
- [x] sources/rjm/.agents/architecture/ADR-084-vendored-hook-roi-bar.md
- [x] sources/rjm/.agents/architecture/ADR-097-zero-tool-use-hooks.md
- [x] sources/rjm/.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md
- [x] sources/rjm/.agents/specs/requirements/REQ-003-multi-tool-artifact-build.md
- [x] sources/rjm/.claude/skills/agent-harness-reference/references/official-hook-contracts.md
- [x] sources/rjm/.claude/skills/ai-agents-portability-campaign/SKILL.md
- [x] sources/rjm/.claude/skills/analyze/references/context-budget-management.md
- [x] sources/rjm/.claude/skills/skillforge/references/evolution-scoring.md
- [x] sources/rjm/.claude/skills/skillforge/references/output-structure.md
- [x] sources/rjm/.claude/skills/skillforge/references/script-integration-framework.md
- [x] sources/rjm/.claude/skills/skillforge/scripts/validate-skill.py
- [x] sources/rjm/.claude/skills/slashcommandcreator/SKILL.md
- [x] sources/rjm/.claude/skills/software-engineering-library/SKILL.md
- [x] sources/rjm/.claude/skills/software-engineering-library/references/release-it.md
- [x] sources/rjm/.claude/skills/threat-modeling/scripts/validate_threat_model.py
- [x] sources/rjm/.codeql/scripts/test_codeql_rollout.py
- [x] sources/rjm/docs/customization.md
- [x] sources/rjm/scripts/ci/test_installed_plugin_hooks.py
- [x] sources/rjm/scripts/hook_utilities/bootstrap.py
- [x] sources/rjm/scripts/migrations/req003_inline_plugin_root_bootstrap.py
- [x] sources/rjm/scripts/validation/hook_contracts.py
- [x] sources/rjm/scripts/validation/skill_md_exec_portability_baseline.json
- [x] sources/rjm/scripts/validation/validate_hook_anchoring.py

### Inventory cards
- [x] docs/analysis/inventory/rjm/agents-analysis-claude-code-plugin-marketplaces-md.md
- [x] docs/analysis/inventory/rjm/agents-analysis-claude-flow-architecture-analysis-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-007-memory-first-architecture-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-008-protocol-automation-lifecycle-hooks-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-009-parallel-safe-multi-agent-design-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-010-quality-gates-evaluator-optimizer-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-021-model-routing-strategy-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-037-memory-router-architecture-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-041-codeql-integration-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-047-plugin-mode-hook-behavior-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-068-consolidated-hook-dispatcher-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-069-context-corpus-is-the-product-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-071-plugin-hook-runtime-contract-verification-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-084-vendored-hook-roi-bar-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-097-zero-tool-use-hooks-md.md
- [x] docs/analysis/inventory/rjm/agents-specs-design-design-004-agent-eval-harness-spike-md.md
- [x] docs/analysis/inventory/rjm/agents-specs-requirements-req-003-multi-tool-artifact-build-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-agent-harness-reference-references-official-hook-contracts-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-ai-agents-portability-campaign-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-analyze-references-context-budget-management-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-references-evolution-scoring-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-references-output-structure-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-references-script-integration-framework-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-scripts-validate-skill-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-slashcommandcreator-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-release-it-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-software-engineering-library-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-scripts-validate-threat-model-py.md
- [x] docs/analysis/inventory/rjm/codeql-scripts-test-codeql-rollout-py.md
- [x] docs/analysis/inventory/rjm/docs-customization-md.md
- [x] docs/analysis/inventory/rjm/scripts-ci-test-installed-plugin-hooks-py.md
- [x] docs/analysis/inventory/rjm/scripts-hook-utilities-bootstrap-py.md
- [x] docs/analysis/inventory/rjm/scripts-migrations-req003-inline-plugin-root-bootstrap-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-hook-contracts-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-skill-md-exec-portability-baseline-json.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-hook-anchoring-py.md

## Outputs produced
- docs/analysis/concepts/rjm/version-pinning.md (1640 bytes)
- docs/analysis/concepts/rjm/extraknownmarketplaces.md (994 bytes)
- docs/analysis/concepts/rjm/enabledplugins.md (964 bytes)
- docs/analysis/concepts/rjm/disable-model-invocation.md (1240 bytes)
- docs/analysis/concepts/rjm/posttooluse.md (4550 bytes)
- docs/analysis/concepts/rjm/claude-plugin-root.md (2423 bytes)
- docs/analysis/concepts/rjm/mcp-servers.md (884 bytes)
- docs/analysis/concepts/rjm/lsp-servers.md (914 bytes)
- docs/analysis/concepts/rjm/reserved-names.md (893 bytes)
- docs/analysis/concepts/rjm/plugin-caching.md (937 bytes)
- docs/analysis/concepts/rjm/claude-flow-architecture-analysis.md (954 bytes)
- docs/analysis/concepts/rjm/swarm-hive-mind-architecture.md (1433 bytes)
- docs/analysis/concepts/rjm/queen-worker-model.md (1427 bytes)
- docs/analysis/concepts/rjm/consensus-mechanisms.md (1711 bytes)
- docs/analysis/concepts/rjm/vector-memory-system.md (1278 bytes)
- docs/analysis/concepts/rjm/agentdb.md (1088 bytes)
- docs/analysis/concepts/rjm/sparc-methodology.md (1682 bytes)
- docs/analysis/concepts/rjm/advanced-hooks-system.md (1262 bytes)
- docs/analysis/concepts/rjm/neural-learning.md (1351 bytes)
- docs/analysis/concepts/rjm/reflexion-memory.md (1320 bytes)
- docs/analysis/concepts/rjm/skill-auto-consolidation.md (1406 bytes)
- docs/analysis/concepts/rjm/metrics-system.md (1286 bytes)
- docs/analysis/concepts/rjm/circuit-breaker.md (2296 bytes)
- docs/analysis/concepts/rjm/reasoningbank.md (1115 bytes)
- docs/analysis/concepts/rjm/mle-star.md (868 bytes)
- docs/analysis/concepts/rjm/tdd-integration.md (1215 bytes)
- docs/analysis/concepts/rjm/red-green-refactor.md (1241 bytes)
- docs/analysis/concepts/rjm/session-checkpointing.md (1643 bytes)
- docs/analysis/concepts/rjm/memory-first-architecture.md (1999 bytes)
- docs/analysis/concepts/rjm/current-state-amendment.md (963 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-6.md (this file)

## Scripts executed
- bun scripts/synthesis/quote-check.ts <30 cards> (exit code 0; 39 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-6 spans 30 concepts across 68 recorded occurrences in package `rjm`.
- 6 concept cards were previously written: `version-pinning`, `extraknownmarketplaces`, `enabledplugins`, `disable-model-invocation`, `posttooluse`, and `claude-plugin-root`.
- The 24 missing concept cards completed in this session cover:
  - Plugin specification sections and headings: `mcp-servers`, `lsp-servers`, `reserved-names`, `plugin-caching` (`kind: name-only` per D-023).
  - Multi-agent orchestration and coordination patterns from external research: `claude-flow-architecture-analysis` (`kind: name-only`), `swarm-hive-mind-architecture` (`kind: pattern`), `queen-worker-model` (`kind: pattern`), `consensus-mechanisms` (`kind: pattern`).
  - Memory architectures and external memory stores: `vector-memory-system` (`kind: pattern`), `agentdb` (`kind: name-only`), `reasoningbank` (`kind: name-only`), `memory-first-architecture` (`kind: pattern`), `current-state-amendment` (`kind: name-only`).
  - Development methodologies, testing, and lifecycle hooks: `sparc-methodology` (`kind: pattern`), `advanced-hooks-system` (`kind: pattern`), `tdd-integration` (`kind: technique`), `red-green-refactor` (`kind: technique`), `session-checkpointing` (`kind: technique`).
  - Agent learning, telemetry, and resilience: `neural-learning` (`kind: technique`), `reflexion-memory` (`kind: pattern`), `skill-auto-consolidation` (`kind: technique`), `metrics-system` (`kind: pattern`), `circuit-breaker` (`kind: pattern`), `mle-star` (`kind: name-only`).
- All 30 cards pass byte-exact verification via `bun scripts/synthesis/quote-check.ts` with 39 PASS, 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~135,000 tokens across 36 source files and 36 citing inventory cards.
Approximate tokens of output written: ~16,000 tokens across 30 concept cards and this work unit report.
