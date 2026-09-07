---
package: rjm
name: Practical Checklist
slug: practical-checklist
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md, sha256: b604165fbc46652b120ab5875ca67002000b87a7c7a39651224cdde9c93b11a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Practical Checklist

## Definition — verbatim
> "## Practical Checklist" — .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/requirements-interview/references/mental-models-circle-of-competence.md | 54 | defined here | Verification checklist required before marking any interview decision as CONFIRMED. |

## Consumes
Design decision under consideration, recommended answer, and supporting verification evidence.

## Produces
Confirmation readiness verdict indicating whether the decision can be marked `CONFIRMED`.

## When applied
Applied before marking any decision leaf in the requirements interview design tree as `CONFIRMED`.

## Sub-concepts
none

## Part of
circle-of-competence

## Implementation status
clean

## Design notes
Practical Checklist serves as the final quality gate before an interview decision is confirmed, verifying that the choice has been mapped against competence boundaries and backed by tested sources rather than unverified assumptions.
