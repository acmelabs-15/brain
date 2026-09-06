---
package: addy
name: Out of scope
slug: out-of-scope
kind: pattern
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/interview-me/SKILL.md, sha256: 1d94741d10d2c826cd0c191aea3981ee94c8abb27ef2a166f6a372117d06448f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Out of scope

## Definition — verbatim
> "Including \"Out of scope\" is non-negotiable. Half of misalignment is silent disagreement about what is *not* being built." — skills/interview-me/SKILL.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/interview-me/SKILL.md | 106 | defined here | Mandatory boundary line in the intent restatement template enumerating explicit non-goals. |

## Consumes
Potential adjacent features and candidate requirements explicitly rejected or deferred during intent discovery.

## Produces
Explicit negative boundaries within intent statements and specifications.

## When applied
Mandatory in every intent restatement before requesting user confirmation.

## Sub-concepts
none

## Part of
- confirmed-statement-of-intent
- interview-me

## Implementation status
clean

## Design notes
A negative-boundary definition discipline that treats explicit exclusions as equal in importance to project goals, preventing silent misalignment on what is not being built.
