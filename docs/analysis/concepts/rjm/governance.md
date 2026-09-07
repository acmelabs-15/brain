---
package: rjm
name: Governance
slug: governance
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/quality-checklist.md, sha256: 8a66e192b59dcb7663bf3a054a57c2655d4d2aaf8c60429ae8ca15c2fa961cf4}
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Governance

## Definition — verbatim
> "Governance ensures agents remain focused, non-overlapping, and effective as the system evolves." — docs/agent-governance.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/quality-checklist.md | 29 | defines | Section in ADR quality checklist verifying non-duplication, correct destination directory, active voice, and absence of AI sycophancy. |
| docs/agent-governance.md | 5 | defines | High-level framework establishing agent lifecycle policies, design principles, steering committee oversight, and consolidation triggers. |

## Consumes
Architectural decision proposals, agent capability definitions, and system usage metrics.

## Produces
Lifecycle state transitions, consolidation directives, and quality gate enforcement across agents and ADRs.

## When applied
Applied continuously across agent design, decision generation, and system evolution.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The overarching framework in rjm governing agent boundaries, decision integrity, and architectural evolution. It prevents system degradation by enforcing non-overlapping agent specializations, steering committee oversight, quantitative consolidation triggers, and strict ADR creation rules (such as non-duplication and anti-sycophancy).
