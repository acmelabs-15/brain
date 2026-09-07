---
package: rjm
name: Single Source of Truth
slug: single-source-of-truth
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
  - {path: .agents/governance/PROJECT-CONSTRAINTS.md, sha256: b992b592ba20b20faca1f1a120ff4068e3d5197e07ca22bb39b33135d4ec4686}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Single Source of Truth

## Definition — verbatim
> "Single source of truth for project constraints. Index-style document pointing to authoritative sources." — .agents/governance/PROJECT-CONSTRAINTS.md:9

## Also called — verbatim
`SSOT` — .agents/analysis/002-project-constraints-consolidation.md:48

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 118 | used here | Evaluated as an industry best practice for consolidating project rules while preventing documentation drift. |
| .agents/governance/PROJECT-CONSTRAINTS.md | 9 | defined here | Governs the document's role as the authoritative index-style single source of truth for repository constraints. |

## Consumes
Dispersed architectural decisions, coding rules, skill policies, and workflow constraints.

## Produces
A centralized index-style document (.agents/governance/PROJECT-CONSTRAINTS.md) pointing to authoritative sources.

## When applied
When establishing or updating project constraints, governance rules, and session startup checklists to eliminate contradictory documentation.

## Sub-concepts
ssot

## Part of
architecture-governance

## Implementation status
defects: missing-path, cross-file-contradiction

## Design notes
An architectural documentation pattern mandating that every project rule, constraint, and convention has exactly one authoritative representation, with other documents referencing rather than duplicating it. In rjm, PROJECT-CONSTRAINTS.md acts as this single source of truth for agent behavior, preventing documentation drift and agent compliance failures.
