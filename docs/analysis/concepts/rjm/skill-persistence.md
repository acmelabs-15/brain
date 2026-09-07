---
package: rjm
name: Skill Persistence
slug: skill-persistence
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

# Skill Persistence

## Definition — verbatim
> "Skills extracted from retrospectives are stored with:" — .agents/AGENT-SYSTEM.md:1251

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1249 | defines | Defines the required metadata schema for persisting procedural skills extracted from retrospectives. |

## Consumes
Procedural insights, execution evidence, and candidate strategies identified during retrospectives or learning extraction flows.

## Produces
Persisted skill definitions under `.agents/skills/` containing atomic statements, application contexts, evidence references, atomicity quality scores, and classification tags.

## When applied
When saving procedural skills derived from post-session retrospectives to ensure quality and reusability.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A structured metadata specification ensuring that operational lessons extracted during retrospectives are formalized into durable, high-quality skill artifacts. By enforcing explicit fields (an atomic strategy statement of max 15 words, application context, execution evidence, 70%+ atomicity threshold, and utility tag), it prevents vague advice from polluting the repository skillbook.
