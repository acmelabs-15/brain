---
package: rjm
name: Ask First
slug: ask-first
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-063-memory-skill-decomposition.md, sha256: f2d854c1e297dcca3e517498ab92b225ec28b5b60baecaaba73b8d166e2606c1}
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
  - {path: AGENTS.md, sha256: a872352c2c57ff59c7db1238910b6685b800ab8a3e8fa9e37a76418d467df471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Ask First

## Definition — verbatim
> "**Ask First**: Architecture|New ADRs|Breaking|Security" — AGENTS.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 76 | used here | Cited as the AGENTS.md rule requiring user confirmation before undertaking major architectural changes or ADR authoring. |
| .claude/skills/autoplan/SKILL.md | 172 | used here | Defined in routing logic as the list of high-stakes domains that require stopping and asking the user. |
| AGENTS.md | 25 | defined here | Formulated in root repository rules as a mandatory pause rule across Architecture, New ADRs, Breaking changes, and Security. |

## Consumes
Proposed agent actions in high-stakes areas (architecture modifications, new ADRs, breaking changes, security changes).

## Produces
A mandatory user prompt presenting options and trade-offs, pausing autonomous execution until human authorization is received.

## When applied
Enforced whenever an agent proposes actions touching architecture, new ADRs, breaking changes, or security posture.

## Sub-concepts
autonomy-guardrail

## Part of
user-sovereignty, agent-governance

## Implementation status
defects: missing-path, doc-drift

## Design notes
Ask First is rjm's primary human-in-the-loop safety boundary. It explicitly enumerates the architectural and governance domains where agents are strictly forbidden from acting autonomously. By requiring human confirmation before altering architecture, creating new ADRs, introducing breaking changes, or touching security policies, Ask First prevents autonomous drift and ensures that high-impact decisions remain strictly governed by human operators.
