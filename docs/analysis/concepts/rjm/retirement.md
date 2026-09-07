---
package: rjm
name: Retirement
slug: retirement
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md, sha256: 664b46f110094bbed7c45aab168811441cde25fb9bfc05eaae862beca4c4e09c}
  - {path: .agents/governance/agent-consolidation-process.md, sha256: 56aef84724d26f5b712b22f668fc779d18122670dd14a11d000aa196751c8691}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Retirement

## Definition — verbatim
> "Step 4: Retirement" — .agents/governance/agent-consolidation-process.md:195

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md | 30 | defined here | Terminal disposition state for retired hooks where source, registrations, generated artifacts, and tests are removed. |
| .agents/governance/agent-consolidation-process.md | 195 | defined here | Step 4 of the agent consolidation execution phase removing deprecated agents, routing references, and updating documentation. |

## Consumes
Deprecated agent or hook artifacts, completed parallel operation monitoring, and an authoritative retirement decision.

## Produces
Complete removal of deprecated files, updated orchestrator routing configurations, archived documentation, and catalog updates.

## When applied
Applied at the conclusion of the agent consolidation workflow or upon architectural decision to decommission an agent or hook component.

## Sub-concepts
none

## Part of
agent-consolidation-process

## Implementation status
defects: missing-path, doc-drift

## Design notes
Retirement is the terminal lifecycle phase for agents and hooks in rjm. It enforces rigorous decommissioning discipline by ensuring that deprecated agent files, orchestrator routing references, tests, and catalog entries are completely removed or archived rather than left abandoned in the codebase.
