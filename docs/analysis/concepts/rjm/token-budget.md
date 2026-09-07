---
package: rjm
name: Token Budget
slug: token-budget
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-CREATION-CRITERIA.md, sha256: 27241f09bb7441e7cf128ddc9721db0c2ce7d3497721cafee4e0871c57f1586a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Token Budget

## Definition — verbatim
> "### Token Budget" — .agents/governance/SKILL-CREATION-CRITERIA.md:300

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-CREATION-CRITERIA.md | 300 | defined here | Establishes token budgets (2,000 for AGENTS.md, 4,000 for memory-index.md) and compression targets enforced by CI. |

## Consumes
Passive context files (`AGENTS.md`, `memory-index.md`, `CLAUDE.md`).

## Produces
Pass/fail validation of file size and compression compliance.

## When applied
Validated during CI runs and before committing changes to passive context files.

## Sub-concepts
none

## Part of
skill-creation-criteria, passive-context

## Implementation status
defects: doc-drift

## Design notes
Explicit quantitative limits placed on always-on context files to prevent token bloat and latency degradation. Enforced by automated CI validation (`passive_context_budget.py`), it ensures passive context remains lean by establishing strict caps (e.g. 2,000 tokens for AGENTS.md).
