---
package: rjm
name: The Scope-Creep Cascade
slug: the-scope-creep-cascade
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/references/agent-memory-inference-leakage.md, sha256: 83b83209ca6c21d8a0a459fb4b087cc23dd0a5e24f51c35bb23238da505fabbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The Scope-Creep Cascade

## Definition — verbatim
> "## The Scope-Creep Cascade" — .claude/skills/security-scan/references/agent-memory-inference-leakage.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/agent-memory-inference-leakage.md | 34 | defined here | Failure pattern where passive template references are misinterpreted by agents as continuous standing orders. |

## Consumes
Templates, documents, or reference files containing passive contextual references.

## Produces
Unprompted recurring background tasks or expanded autonomous monitoring.

## When applied
Analyzed during prompt and template review to prevent ambiguous instructional leakage.

## Sub-concepts
none

## Part of
agent-unauthorized-memory-inference

## Implementation status
clean

## Design notes
An instruction-ambiguity failure pattern where an agent misinterprets a passive contextual reference inside a document or template as an ongoing standing order. This pattern highlights why document references must never be conflated with active execution directives.
