---
package: rjm
name: Disagree and Commit Protocol
slug: disagree-and-commit-protocol
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Disagree and Commit Protocol

## Definition — verbatim
> "1. All specialists present positions with data" — .agents/AGENT-SYSTEM.md:1054

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1053 | defined here | Four-step conflict resolution protocol embedded in the Impact Analysis Flow. |

## Consumes
Competing specialist perspectives, data-backed disagreements, or architectural impasses.

## Produces
Structured debate facilitation, high-level-advisor final decision, and unified alignment on execution.

## When applied
> "3. High-level-advisor makes final call if needed" — .agents/AGENT-SYSTEM.md:1056

## Sub-concepts
none

## Part of
- impact-analysis-flow
- multi-agent-orchestration-system

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
The Disagree and Commit Protocol ensures that multi-agent deliberations resolve swiftly into decisive action. When specialists disagree during impact analysis, they present data-supported arguments while the critic facilitates debate; if consensus cannot be reached, high-level-advisor issues the definitive verdict, and all agents immediately commit to executing the decision without continued resistance.
