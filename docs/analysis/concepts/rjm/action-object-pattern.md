---
package: rjm
name: action-object pattern
slug: action-object-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-046-planning-agent-rename.md, sha256: 4aa83f97ec94c728eb5b073562a55bf21866880e747688943abecacb6c5cd0fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# action-object pattern

## Definition — verbatim
> "Each name pairs what the agent does with what it produces." — .agents/architecture/ADR-046-planning-agent-rename.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-046-planning-agent-rename.md | 50 | defined here | Defined as the architectural naming principle pairing agent action verbs with produced artifact nouns |

## Consumes
Agent functional capability descriptions and produced artifact deliverables.

## Produces
Clear, self-documenting agent names that eliminate router collision.

## When applied
Applied when naming, authoring, or refactoring agent identities to clarify boundaries and prevent router ambiguity.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The action-object pattern is an architectural naming convention that pairs what an agent does with what it produces (e.g., milestone-planner, task-decomposer, backlog-generator) to make agent capabilities self-documenting and prevent router confusion.
