---
unit: inv-rjm-11
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-11

## Files assigned
- [x] `.agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md`
- [x] `.agents/architecture/ADR-027-github-mcp-agent-isolation.md`
- [x] `.agents/architecture/ADR-028-powershell-output-schema-consistency.md`
- [x] `.agents/architecture/ADR-029-skill-file-line-ending-normalization.md`
- [x] `.agents/architecture/ADR-030-skills-pattern-superiority.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-026-pr-automation-concurrency-and-safety-md.md` (6790 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-027-github-mcp-agent-isolation-md.md` (6373 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-028-powershell-output-schema-consistency-md.md` (5037 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-029-skill-file-line-ending-normalization-md.md` (5174 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-030-skills-pattern-superiority-md.md` (5017 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-11.md` (this report)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-026 documents best-effort run coalescing in GitHub Actions concurrency groups and introduces a 10s debouncing action (`.github/actions/workflow-debounce/action.yml`), which interacts with overall workflow orchestration patterns.
- ADR-027 and ADR-030 form a linked progression regarding tool isolation vs subagents: ADR-027 proposes delegating GitHub MCP tools to a dedicated subagent (`github-agent`) to prevent root context pollution (~10,000 tokens), while ADR-030 argues that invoking skills with `allowed-tools` directly provides dynamic tool binding with lower latency (5-20ms vs 100-200ms). While ADR-030 is marked `rejected` because `.claude/skills/github/SKILL.md` was built wrapping Python scripts instead of direct MCP, the architectural concepts are foundational to context management.
- ADR-028 establishes schema consistency (always populating optional fields with null/0/empty array) originally for PowerShell, which was subsequently superseded and re-platformed to Python JSON schema validation by ADR-056 and ADR-103.
- Across all 5 ADRs, references to `.ps1` files (`Invoke-PRMaintenance.ps1`, `Measure-WorkflowCoalescing.ps1`, `Get-PRReviewComments.ps1`, `Generate-Skills.ps1`) reflect an earlier codebase state before the complete migration to Python scripts under `.venv` and `scripts/`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~11,300 tokens (44,338 bytes across 5 source files)
- Approximate tokens of output written: ~7,600 tokens across 5 inventory cards and unit report
