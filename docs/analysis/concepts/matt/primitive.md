---
package: matt
name: primitive
slug: primitive
kind: pattern
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# primitive

## Definition — verbatim
> "`grilling` is a **primitive**, not a step you schedule: the single source of truth for the interview technique, kept in one place so every skill that needs an interview reaches for it instead of inventing one." — docs/productivity/grilling.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/grilling.md | 87 | defined here | Defines grilling as an architectural primitive reused across multiple specialized front-end skills. |
| external/grill-me.md | 69 | defined here | References the grilling primitive as the common foundation shared with grill-with-docs. |
| external/grilling.md | 70 | defined here | Characterizes grilling as an unscheduled interview primitive that other skills invoke. |

## Consumes
Underlying interview heuristics, question formatting rules, and frontier traversal algorithms.

## Produces
A reusable capability leveraged by domain-specific wrappers (grill-me, grill-with-docs, triage, wayfinder).

## When applied
Applied when designing reusable agent capabilities that should not duplicate common behavioral loops.

## Sub-concepts
none

## Part of
grilling

## Implementation status
clean

## Design notes
A primitive in Matt's design is an foundational, non-scheduled capability that encapsulates a reusable behavioral loop (such as the interview technique). By centralizing interview mechanics in a primitive rather than in user-facing command wrappers, multiple workflows can compose and invoke identical questioning behavior without divergent logic.
