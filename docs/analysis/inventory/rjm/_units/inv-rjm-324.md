---
unit: inv-rjm-324
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-324

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/templates/README.md

## Outputs produced
- docs/analysis/inventory/rjm/templates-readme-md.md (12236 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-324.md (3514 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-324` covers `templates/README.md` (14,246 bytes, 380 lines), the central architectural and operational documentation guide for the `rjm` multi-platform agent template system.
- Cross-unit architecture & tooling connections:
  - Governed operationally by ADR-036 (`.agents/architecture/ADR-036-two-source-agent-template-architecture.md`), which is superseded in governance by ADR-052 (`.agents/architecture/ADR-052-template-strategy.md`), though the ADR-036 procedure remains the active implementation.
  - Documents generation flow via `build/generate_agents.py` using `templates/agents/*.shared.md` templates and `templates/platforms/*.yaml` configurations.
  - Documents toolset group definitions in `templates/toolsets.yaml` (`$toolset:name` expansion), aligning with GitHub MCP Server toolsets.
  - Establishes canonical agent delegation syntax `/agent [agent_name]` transformed into `#runSubagent with subagentType=[name]` for VS Code Copilot Chat, `/agent [name]` for GitHub Copilot CLI, and `Task(...)` for Claude Code.
  - Documents weekly drift monitoring via `.github/workflows/drift-detection.yml` and `build/scripts/detect_agent_drift.py` (comparing Core Identity, Responsibilities, Constraints, Handoff Options, Memory Protocol while ignoring platform syntax).
  - Documents the REQ-003 multi-tool platform configuration schema (`templates/platforms/*.yaml`) and schema validation script `build/scripts/validate_templates_schema.py` under ADR-006 Amendment (2026-04-28).
- Duplication ledger:
  - `templates/README.md` does not appear in `docs/analysis/manifest/rjm-duplicates.md`; no exact aliases or variant divergence cards are required.
- Defects and documentation drift:
  - `doc-drift` at `templates/README.md:5`: ADR-036 is superseded in governance by ADR-052, but ADR-036 procedure remains active and ADR-052 target state is not yet implemented.
  - `cross-file-contradiction` at `templates/README.md:115`: Recommends running `uv run python build/generate_agents.py`, but `src/copilot-cli/skills/ai-agents-build-and-env/SKILL.md:169-170` flags following `templates/README.md` build instructions as an anti-pattern (asserting it predates ADR-042, though README.md uses `uv run`).
  - `doc-drift` at `templates/README.md:188`: Cites `.github/workflows/drift-detection.yml` for drift detection, whereas `src/copilot-cli/skills/ai-agents-config-catalog/SKILL.md:76` cites `.github/workflows/agent-drift-detection.yml`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~3,600 tokens (14,246 bytes across 1 assigned file) plus ~5,000 tokens of referenced context.
- Approximate tokens of output written: ~3,900 tokens across 1 inventory card and 1 work-unit report.
