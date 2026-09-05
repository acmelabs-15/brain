---
package: rjm
path: .agents/architecture/ADR-053-adr-exception-criteria.md
type: agent
bytes: 5290
unit: inv-rjm-19
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-053-adr-exception-criteria.md, sha256: 9bd6a784d02e1fad5ea86eb815d46114decc3c000e4f0fa9be3842620fce1183}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-053-adr-exception-criteria.md

## Purpose — required, verbatim
> "ADR exceptions MUST include a Chesterton's Fence analysis before approval." — .agents/architecture/ADR-053-adr-exception-criteria.md:39

## Design intent — required
Architectural governance decision mandating that any proposed exception to an Architectural Decision Record must include a Chesterton's Fence analysis answering why the rule exists (quoting the original ADR rationale), the impact if removed, and at least two alternatives attempted. This solves the structural asymmetry where exceptions are easier to introduce than challenge, introducing intentional friction to prevent informal precedent creep (such as PR #908's unreasoned exception to ADR-005) and ensure decision rationale survives maintainer turnover.

## Phase — required
none

## Inputs — required
- Motivating unreasoned exception to ADR-005 in PR #908 (Claude Code Hooks PowerShell-only exception)
- ADR-005 (`.agents/architecture/ADR-005-powershell-only-scripting.md`)
- ADR-022 (`.agents/architecture/ADR-022-architecture-governance-split-criteria.md`)
- Historical exception precedents (PR #760 SkillForge, PR #908 Anthropic SDK)

## Outputs — required
- Policy requiring Chesterton's Fence analysis for all ADR exception proposals
- Template and rejection criteria specified in `.agents/governance/ADR-EXCEPTION-CRITERIA.md`
- Exception validation checklist for the architect agent review gate in `src/claude/architect.md`

## Invokes — required
- agent architect — .agents/architecture/ADR-053-adr-exception-criteria.md:47
- doc .agents/governance/ADR-EXCEPTION-CRITERIA.md — .agents/architecture/ADR-053-adr-exception-criteria.md:49
- agent src/claude/architect.md — .agents/architecture/ADR-053-adr-exception-criteria.md:90
- agent ADR-005 — .agents/architecture/ADR-053-adr-exception-criteria.md:95
- agent ADR-022 — .agents/architecture/ADR-053-adr-exception-criteria.md:96

## Invoked by — required
- doc README.md — .agents/architecture/README.md:127

## Concepts named — required, verbatim
- `Chesterton's Fence` — .agents/architecture/ADR-053-adr-exception-criteria.md:12 — defined here
- `Chesterton's Fence analysis` — .agents/architecture/ADR-053-adr-exception-criteria.md:35 — defined here
- `ADR exceptions` — .agents/architecture/ADR-053-adr-exception-criteria.md:35 — used here
- `architect agent` — .agents/architecture/ADR-053-adr-exception-criteria.md:47 — used here
- `CRITICAL_FAIL` — .agents/architecture/ADR-053-adr-exception-criteria.md:100 — used here
- `review gate` — .agents/architecture/ADR-053-adr-exception-criteria.md:100 — used here

## Structure
- "ADR-053: ADR Exception Criteria (Chesterton's Fence)" — .agents/architecture/ADR-053-adr-exception-criteria.md:12
- "Status" — .agents/architecture/ADR-053-adr-exception-criteria.md:14
- "Date" — .agents/architecture/ADR-053-adr-exception-criteria.md:18
- "Decision Makers" — .agents/architecture/ADR-053-adr-exception-criteria.md:22
- "Context" — .agents/architecture/ADR-053-adr-exception-criteria.md:26
- "Decision" — .agents/architecture/ADR-053-adr-exception-criteria.md:37
- "Rationale" — .agents/architecture/ADR-053-adr-exception-criteria.md:51
- "Alternatives Considered" — .agents/architecture/ADR-053-adr-exception-criteria.md:53
- "Trade-offs" — .agents/architecture/ADR-053-adr-exception-criteria.md:62
- "Consequences" — .agents/architecture/ADR-053-adr-exception-criteria.md:68
- "Positive" — .agents/architecture/ADR-053-adr-exception-criteria.md:70
- "Negative" — .agents/architecture/ADR-053-adr-exception-criteria.md:77
- "Neutral" — .agents/architecture/ADR-053-adr-exception-criteria.md:83
- "Implementation Notes" — .agents/architecture/ADR-053-adr-exception-criteria.md:87
- "Related Decisions" — .agents/architecture/ADR-053-adr-exception-criteria.md:93
- "Confirmation" — .agents/architecture/ADR-053-adr-exception-criteria.md:98
- "References" — .agents/architecture/ADR-053-adr-exception-criteria.md:102

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- ADR-053 operationalizes the concept of intentional friction: requiring exact verbatim quotation of the original ADR rationale forces exception proposers to read and understand the rule before requesting an override.
- Exceptions failing the analysis template receive a CRITICAL_FAIL from the architect agent review gate in CI, blocking pull request merge.

## Context cost
5290 bytes, ~1200 tokens. Loads no external files.
