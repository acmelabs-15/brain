---
package: matt
name: ungrillable
slug: ungrillable
kind: pattern
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ungrillable

## Definition — verbatim
> "\"One long form or three pages?\" and \"how should this interaction feel?\" are **ungrillable**: they need something to react to." — docs/productivity/grill-me.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/grill-me.md | 35 | defined here | Identifies questions that cannot be resolved by dialogue and require building a prototype. |
| external/grill-me.md | 44 | defined here | Explains that questions about tactile feel or layout require something to react to. |

## Consumes
An open architectural, UX, or interaction question that cannot be resolved through abstract inquiry.

## Produces
A trigger to halt grilling and invoke a throwaway prototype instead.

## When applied
When questions require concrete feedback or sensory reaction rather than discursive reasoning.

## Sub-concepts
none

## Part of
grill-me

## Implementation status
clean

## Design notes
The concept of ungrillable questions establishes a boundary condition for conversational requirements discovery. Matt's model recognizes that certain UX and tactile design decisions cannot be argued into existence in the abstract; continuing to grill on ungrillable points causes conversations to balloon into speculative guessing, making prototyping the necessary exit valve.
