---
package: rjm
name: PatternOccurrence
slug: patternoccurrence
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/consolidate_skills.py, sha256: 14ba13d8d34815bfa54c2286f6383f005cba9ed1aae7c57810f669bd8399bfc9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PatternOccurrence

## Definition — verbatim
(used, not defined)

> "class PatternOccurrence:" — scripts/consolidate_skills.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/consolidate_skills.py | 38 | defined here | Dataclass representing an individual occurrence of an action pattern in an agent session log. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
PatternOccurrence is a Python dataclass identifier in scripts/consolidate_skills.py capturing single action instances rather than an operational lifecycle concept.
