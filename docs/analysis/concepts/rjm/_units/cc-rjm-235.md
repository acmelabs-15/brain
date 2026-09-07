---
unit: cc-rjm-235
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-235

## Files assigned
- [x] sources/rjm/AGENTS.md
- [x] sources/rjm/CLAUDE.md
- [x] sources/rjm/CONTRIBUTING.md
- [x] sources/rjm/docs/architecture.md
- [x] sources/rjm/docs/when-to-use.md
- [x] sources/rjm/docs/workflow-commands.md
- [x] sources/rjm/scripts/validation/check_shipped_skill_routes.py
- [x] sources/rjm/templates/AGENTS.md
- [x] sources/rjm/templates/README.md
- [x] docs/analysis/inventory/rjm/agents-md.md
- [x] docs/analysis/inventory/rjm/claude-md.md
- [x] docs/analysis/inventory/rjm/docs-when-to-use-md.md
- [x] docs/analysis/inventory/rjm/docs-workflow-commands-md.md
- [x] docs/analysis/inventory/rjm/contributing-md.md
- [x] docs/analysis/inventory/rjm/templates-readme-md.md
- [x] docs/analysis/inventory/rjm/docs-architecture-md.md
- [x] docs/analysis/inventory/rjm/scripts-validation-check-shipped-skill-routes-py.md
- [x] docs/analysis/inventory/rjm/templates-agents-md.md

## Outputs produced
- docs/analysis/concepts/rjm/stack.md (768 bytes)
- docs/analysis/concepts/rjm/claude-code-specifics.md (850 bytes)
- docs/analysis/concepts/rjm/explore.md (1120 bytes)
- docs/analysis/concepts/rjm/installation-locations.md (874 bytes)
- docs/analysis/concepts/rjm/default-behavior.md (1162 bytes)
- docs/analysis/concepts/rjm/memory-interface-decision-matrix.md (1301 bytes)
- docs/analysis/concepts/rjm/path-scoped-instructions.md (1196 bytes)
- docs/analysis/concepts/rjm/skill-routing.md (1263 bytes)
- docs/analysis/concepts/rjm/lifecycle-commands.md (1686 bytes)
- docs/analysis/concepts/rjm/agent-template-system.md (1912 bytes)
- docs/analysis/concepts/rjm/python-3-14-x.md (853 bytes)
- docs/analysis/concepts/rjm/pre-commit-hooks.md (1276 bytes)
- docs/analysis/concepts/rjm/pre-push-hooks.md (1104 bytes)
- docs/analysis/concepts/rjm/dogfood.md (1206 bytes)
- docs/analysis/concepts/rjm/lf-line-endings.md (890 bytes)
- docs/analysis/concepts/rjm/core-autocrlf.md (886 bytes)
- docs/analysis/concepts/rjm/template-based-generation-system.md (1395 bytes)
- docs/analysis/concepts/rjm/platform-configs.md (1184 bytes)
- docs/analysis/concepts/rjm/generated-files.md (1082 bytes)
- docs/analysis/concepts/rjm/analyst-shared-md.md (881 bytes)
- docs/analysis/concepts/rjm/reviewer-shared-md.md (848 bytes)
- docs/analysis/concepts/rjm/required-frontmatter.md (1059 bytes)
- docs/analysis/concepts/rjm/tools-vscode.md (869 bytes)
- docs/analysis/concepts/rjm/tools-copilot.md (880 bytes)
- docs/analysis/concepts/rjm/behavioral-evaluation.md (1320 bytes)
- docs/analysis/concepts/rjm/platform-configuration.md (1336 bytes)
- docs/analysis/concepts/rjm/vscode-yaml.md (841 bytes)
- docs/analysis/concepts/rjm/copilot-cli-yaml.md (1173 bytes)
- docs/analysis/concepts/rjm/handoffsyntax.md (1396 bytes)
- docs/analysis/concepts/rjm/ci-drift-detection.md (1279 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-235.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/stack.md docs/analysis/concepts/rjm/claude-code-specifics.md docs/analysis/concepts/rjm/explore.md docs/analysis/concepts/rjm/installation-locations.md docs/analysis/concepts/rjm/default-behavior.md docs/analysis/concepts/rjm/memory-interface-decision-matrix.md docs/analysis/concepts/rjm/path-scoped-instructions.md docs/analysis/concepts/rjm/skill-routing.md docs/analysis/concepts/rjm/lifecycle-commands.md docs/analysis/concepts/rjm/agent-template-system.md docs/analysis/concepts/rjm/python-3-14-x.md docs/analysis/concepts/rjm/pre-commit-hooks.md docs/analysis/concepts/rjm/pre-push-hooks.md docs/analysis/concepts/rjm/dogfood.md docs/analysis/concepts/rjm/lf-line-endings.md docs/analysis/concepts/rjm/core-autocrlf.md docs/analysis/concepts/rjm/template-based-generation-system.md docs/analysis/concepts/rjm/platform-configs.md docs/analysis/concepts/rjm/generated-files.md docs/analysis/concepts/rjm/analyst-shared-md.md docs/analysis/concepts/rjm/reviewer-shared-md.md docs/analysis/concepts/rjm/required-frontmatter.md docs/analysis/concepts/rjm/tools-vscode.md docs/analysis/concepts/rjm/tools-copilot.md docs/analysis/concepts/rjm/behavioral-evaluation.md docs/analysis/concepts/rjm/platform-configuration.md docs/analysis/concepts/rjm/vscode-yaml.md docs/analysis/concepts/rjm/copilot-cli-yaml.md docs/analysis/concepts/rjm/handoffsyntax.md docs/analysis/concepts/rjm/ci-drift-detection.md` (exit code 0, 51 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-235 completes 30 concept cards spanning repository configuration, Claude Code runtime delegation patterns, the agent template generation system, and developer workflow quality gates:
  1. Repository configuration and runtime environment: `stack`, `python-3-14-x`, `lf-line-endings`, `core-autocrlf`, and `dogfood`.
  2. Claude Code delegation specifics and runtime patterns: `claude-code-specifics`, `explore`, `installation-locations`, `default-behavior`, `memory-interface-decision-matrix`, `path-scoped-instructions`, `skill-routing`, and `lifecycle-commands`.
  3. Multi-platform agent template generation system: `agent-template-system`, `template-based-generation-system`, `platform-configs`, `generated-files`, `analyst-shared-md`, `reviewer-shared-md`, `required-frontmatter`, `tools-vscode`, `tools-copilot`, `platform-configuration`, `vscode-yaml`, `copilot-cli-yaml`, and `handoffsyntax`.
  4. Quality gates and CI drift validation: `pre-commit-hooks`, `pre-push-hooks`, `behavioral-evaluation`, and `ci-drift-detection`.
- Non-lifecycle concepts representing headings, identifiers, configuration property names, and file names were classified as `kind: name-only` per D-023 (`stack`, `claude-code-specifics`, `installation-locations`, `python-3-14-x`, `lf-line-endings`, `core-autocrlf`, `analyst-shared-md`, `reviewer-shared-md`, `tools-vscode`, `tools-copilot`, `vscode-yaml`, `copilot-cli-yaml`).
- All 36 occurrences recorded in `facts/cc-rjm-235.txt` were mapped into the respective `Where used` tables.
- Inventory card defects were systematically checked and recorded under `Implementation status` (including `defects: missing-path`, `defects: doc-drift`, `defects: internal-contradiction`, `defects: cross-file-contradiction`, and `clean`).
- All 30 cards pass byte-exact verification via `bun scripts/synthesis/quote-check.ts` (51 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 9 source files and 9 inventory cards.
Approximate tokens of output written: ~12,500 tokens across 30 authored concept cards and 1 unit report.
