---
package: rjm
path: .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md
type: agent
bytes: 16279
unit: inv-rjm-17
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md, sha256: 9010d2ac17b09423f0d984afeafdbbbc5144f1a5b43452dcd80d9936ac6dab5d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md

## Purpose — required, verbatim
> "Extract the reusable multi-agent framework from `rjmurillo/ai-agents` into a new repository `rjmurillo/awesome-ai`, published as a Claude Code plugin marketplace with 4 plugins." — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:73

## Design intent — required
Documents the architectural decision to extract the reusable multi-agent framework from `rjmurillo/ai-agents` into a new standalone repository (`rjmurillo/awesome-ai`), published as a Claude Code plugin marketplace comprising 4 granular plugins (`core-agents`, `framework-skills`, `session-protocol`, `quality-gates`). It decouples reusable framework infrastructure (~55%) from domain-specific code (~8%) and parameterizes hybrid components (~37%) to facilitate an organizational distribution to ~400 users within 30 days via one-command installation (`claude plugin marketplace add`). It establishes path abstraction standards (`safe_resolve()` containment check, `${CLAUDE_PLUGIN_ROOT}`), prerequisites (completion of Python migration ADR-042), and security guardrails for hook execution. Without this decision, framework code would remain coupled to local project paths, preventing modular distribution and clean maintenance boundaries.

## Phase — required
none

## Inputs — required
- Inventory audit of 168 files: `[Inventory Audit](../analysis/adr-045-inventory-audit.md)` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:48
- Plugin marketplace research: `session 1180, documented in `.agents/analysis/claude-code-plugin-marketplaces.md`` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:58
- Multi-agent debate log: `[6-Agent Review Debate Log](../critique/ADR-045-debate-log.md)` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:264
- Security review: `[Security Review](../security/ADR-045-framework-extraction-security-review.md)` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:265
- Feasibility analysis: `[Feasibility Analysis](../analysis/adr-045-feasibility-analysis.md)` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:266

## Outputs — required
- Standalone plugin marketplace: `rjmurillo/awesome-ai` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:73
- Four distinct plugins: `core-agents` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:79, `framework-skills` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:80, `session-protocol` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:81, and `quality-gates` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:82
- Safe path resolution function: `safe_resolve` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:120
- Phased implementation plan: `.agents/projects/v0.4.0/PLAN.md` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:252

## Invokes — required
- doc ADR-042-python-migration-strategy.md — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:256
- doc ADR-005-powershell-only-scripting.md — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:257
- doc ADR-006-thin-workflows-testable-modules.md — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:258
- doc .agents/projects/v0.4.0/PLAN.md — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:252
- doc .agents/analysis/claude-code-plugin-marketplaces.md — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:58

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:121

## Concepts named — required, verbatim
- `plugin marketplace` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:24 — used here
- `core-agents` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:79 — defined here
- `framework-skills` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:80 — defined here
- `session-protocol` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:81 — defined here
- `quality-gates` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:82 — defined here
- `safe_resolve` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:120 — defined here
- `expand-contract` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:203 — used here
- `ADR-045` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:2 — defined here
- `ADR-042` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:27 — used here
- `ADR-005` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:257 — used here
- `ADR-006` — .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md:258 — used here

## Structure
- # ADR-045: Framework Extraction via Plugin Marketplace
- ## Status
- ## Date
- ## Decision Drivers
- ## Stakeholders
- ## Context
- ### Prerequisites
- ## Decision
- ## Rationale
- ### Alternatives Considered
- ### Path Abstraction
- ### Namespace Impact
- ### Versioning Strategy
- ## Inventory Verification
- ## Security Model
- ### Plugin Integrity
- ### Hook Execution
- ### Secret Exposure
- ## Reversibility
- ## Risks
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Confirmation
- ## Implementation
- ## Related Decisions
- ## References
- ## Amendment Log

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Demonstrates formal architecture evaluation with a multi-agent review panel (6-agent review panel with debate logs and critique rounds), including a formal inventory audit of 168 files classifying components as framework (55%), domain (8%), or hybrid (37%). Defines containment validation (safe_resolve) with realpath against directory traversal when executing plugins from isolated cache directories. Highlights security trade-offs of plugin hooks running with consumer process privileges without runtime sandboxing or secret masking.

## Context cost
16279 bytes (~4070 tokens). References analysis audits, critique logs, and project plan files.
