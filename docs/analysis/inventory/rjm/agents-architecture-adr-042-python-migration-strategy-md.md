---
package: rjm
path: .agents/architecture/ADR-042-python-migration-strategy.md
type: agent
bytes: 10752
unit: inv-rjm-16
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-042-python-migration-strategy.md, sha256: cfab3df343cee127a80f7dc1fb5e9cedc7052c9abe8e684d5f1f9693c0a45e2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-042-python-migration-strategy.md

## Purpose — required, verbatim
> "**Migrate the ai-agents project from PowerShell to Python as the primary scripting language over a 12-24 month phased migration period.**" — .agents/architecture/ADR-042-python-migration-strategy.md:60

## Design intent — required
Defines the architectural strategy for transitioning the repository from PowerShell-only scripting (ADR-005) to Python 3.10+ with `uv` as the primary standard for internal automation, while permitting TypeScript for user-facing distribution surfaces (Amendment 1). Resolves the ecosystem mismatch with AI/ML tooling (Anthropic SDK, LangChain, MCP) and installer prerequisites while managing a multi-year migration across 235 legacy scripts.

## Phase — required
none

## Inputs — required
Existing 235 PowerShell scripts and Pester test suites, external package manager requirements from `skill-installer` (Python 3.10+ and `uv`), AI/ML ecosystem requirements (Anthropic Python SDK, LangChain, MCP protocol), and six-role adr-review critique and debate consensus records.

## Outputs — required
Decision superseding ADR-005 and adopting Python 3.10+ with `uv` for internal automation, migration roadmap and guidance for converting `.ps1` scripts and Pester tests to Python and pytest, and Amendment 1 permitting TypeScript for user-facing npm package distribution surfaces.

## Invokes — required
- doc ADR-042-debate-log.md — .agents/architecture/ADR-042-python-migration-strategy.md:17
- doc ADR-042-independent-review.md — .agents/architecture/ADR-042-python-migration-strategy.md:19
- doc ADR-042-security-review.md — .agents/architecture/ADR-042-python-migration-strategy.md:19
- doc ADR-042-strategic-advisory.md — .agents/architecture/ADR-042-python-migration-strategy.md:20
- doc ADR-042-python-migration-critique.md — .agents/architecture/ADR-042-python-migration-strategy.md:20
- doc build/ — .agents/architecture/ADR-042-python-migration-strategy.md:138
- doc ADR-005 — .agents/architecture/ADR-042-python-migration-strategy.md:152
- doc ADR-006 — .agents/architecture/ADR-042-python-migration-strategy.md:153
- doc ADR-031 — .agents/architecture/ADR-042-python-migration-strategy.md:154
- doc ADR-028 — .agents/architecture/ADR-042-python-migration-strategy.md:154
- doc ADR-056 — .agents/architecture/ADR-042-python-migration-strategy.md:154

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:119
- doc .agents/steering/claude-skills.md — .agents/steering/claude-skills.md:191
- doc docs/codeql-architecture.md — docs/codeql-architecture.md:698
- doc docs/codeql-integration.md — docs/codeql-integration.md:504
- doc docs/codeql-rollout-checklist.md — docs/codeql-rollout-checklist.md:389
- doc ADR-042 — .agents/critique/ADR-042-strategic-advisory.md:1
- doc ADR-042 — .agents/critique/ADR-042-python-migration-critique.md:1
- doc ADR-042 — .agents/critique/ADR-042-debate-log.md:1

## Concepts named — required, verbatim
- `Python Migration Strategy` — .agents/architecture/ADR-042-python-migration-strategy.md:12 — defined here
- `Acceptance Evidence` — .agents/architecture/ADR-042-python-migration-strategy.md:14 — defined here
- `adr-review` — .agents/architecture/ADR-042-python-migration-strategy.md:16 — used here
- `skill-installer` — .agents/architecture/ADR-042-python-migration-strategy.md:39 — used here
- `Anthropic SDK` — .agents/architecture/ADR-042-python-migration-strategy.md:42 — used here
- `LangChain` — .agents/architecture/ADR-042-python-migration-strategy.md:43 — used here
- `LlamaIndex` — .agents/architecture/ADR-042-python-migration-strategy.md:43 — used here
- `MCP` — .agents/architecture/ADR-042-python-migration-strategy.md:45 — used here
- `Token Efficiency Inversion` — .agents/architecture/ADR-042-python-migration-strategy.md:56 — defined here
- `Python 3.10+` — .agents/architecture/ADR-042-python-migration-strategy.md:65 — defined here
- `UV` — .agents/architecture/ADR-042-python-migration-strategy.md:67 — defined here
- `pytest` — .agents/architecture/ADR-042-python-migration-strategy.md:76 — used here
- `Pester` — .agents/architecture/ADR-042-python-migration-strategy.md:76 — used here
- `Internal automation` — .agents/architecture/ADR-042-python-migration-strategy.md:188 — defined here
- `User-facing distribution surfaces` — .agents/architecture/ADR-042-python-migration-strategy.md:197 — defined here
- `Pit of Success` — .agents/architecture/ADR-042-python-migration-strategy.md:212 — used here

## Structure
- `# ADR-042: Python Migration Strategy` — .agents/architecture/ADR-042-python-migration-strategy.md:12
- `## Acceptance Evidence` — .agents/architecture/ADR-042-python-migration-strategy.md:14
- `## Date` — .agents/architecture/ADR-042-python-migration-strategy.md:25
- `## Context` — .agents/architecture/ADR-042-python-migration-strategy.md:29
- `## Decision` — .agents/architecture/ADR-042-python-migration-strategy.md:58
- `## Rationale` — .agents/architecture/ADR-042-python-migration-strategy.md:69
- `### Alternatives Considered` — .agents/architecture/ADR-042-python-migration-strategy.md:71
- `### Trade-offs` — .agents/architecture/ADR-042-python-migration-strategy.md:79
- `## Consequences` — .agents/architecture/ADR-042-python-migration-strategy.md:88
- `### Positive` — .agents/architecture/ADR-042-python-migration-strategy.md:90
- `### Negative` — .agents/architecture/ADR-042-python-migration-strategy.md:99
- `### Neutral` — .agents/architecture/ADR-042-python-migration-strategy.md:108
- `## Implementation Notes` — .agents/architecture/ADR-042-python-migration-strategy.md:114
- `### Phase 1: Foundation (Current)` — .agents/architecture/ADR-042-python-migration-strategy.md:116
- `### Phase 2: New Development` — .agents/architecture/ADR-042-python-migration-strategy.md:124
- `### Phase 3: Migration (Future)` — .agents/architecture/ADR-042-python-migration-strategy.md:131
- `### Migration Guidance` — .agents/architecture/ADR-042-python-migration-strategy.md:140
- `## Related Decisions` — .agents/architecture/ADR-042-python-migration-strategy.md:150
- `## References` — .agents/architecture/ADR-042-python-migration-strategy.md:157
- `## Amendment 1: Scope Python-First to Internal Automation` — .agents/architecture/ADR-042-python-migration-strategy.md:166
- `### Date` — .agents/architecture/ADR-042-python-migration-strategy.md:168
- `### Status` — .agents/architecture/ADR-042-python-migration-strategy.md:172
- `### Context` — .agents/architecture/ADR-042-python-migration-strategy.md:176
- `### Decision` — .agents/architecture/ADR-042-python-migration-strategy.md:184
- `### Rationale` — .agents/architecture/ADR-042-python-migration-strategy.md:203
- `### Consequences` — .agents/architecture/ADR-042-python-migration-strategy.md:214
- `### What Does Not Change` — .agents/architecture/ADR-042-python-migration-strategy.md:221
- `## Amendment Log` — .agents/architecture/ADR-042-python-migration-strategy.md:230

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents the strategic shift from PowerShell to Python driven by ecosystem momentum (AI/ML libraries, official Anthropic SDK, MCP standard) and installer prerequisites (`skill-installer`). Introduces the "Token Efficiency Inversion" rationale and pragmatically scopes the Python mandate to internal automation while allowing TypeScript for external npm distribution surfaces (Amendment 1).

## Context cost
10752 bytes, ~2700 tokens. Loads no external files directly when read as a decision record.
