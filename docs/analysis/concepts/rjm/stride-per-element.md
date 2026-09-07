---
package: rjm
name: STRIDE per Element
slug: stride-per-element
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/stride-methodology.md, sha256: 62b62c288dc96d275f6b835cc75809816cb1acc3cb8d53da48c7499a36192a0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# STRIDE per Element

## Definition — verbatim
> "## STRIDE per Element" — .claude/skills/threat-modeling/references/stride-methodology.md:182

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/stride-methodology.md | 182 | defined here | Matrix mapping each STRIDE threat category to applicable architectural element types. |

## Consumes
Data flow diagram element categorizations (External Entity, Process, Data Store, Data Flow).

## Produces
Applicable threat categories per architecture component type.

## When applied
Applied during threat identification to filter irrelevant STRIDE categories for each component type.

## Sub-concepts
none

## Part of
stride

## Implementation status
clean

## Design notes
STRIDE per Element is a classification matrix that reduces analysis overhead by restricting threat evaluation to categories relevant to each element type (e.g. External Entities only face Spoofing, while Processes face all six).
