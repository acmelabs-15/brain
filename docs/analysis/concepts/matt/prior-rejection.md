---
package: matt
name: prior rejection
slug: prior-rejection
kind: pattern
package_phase: matt:Triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# prior rejection

## Definition — verbatim
> "**prior rejection** (does `.out-of-scope/` already say no?)" — docs/engineering/triage.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/triage.md | 55 | defined here | Step 4 triage instruction to check knowledge base records for previously rejected enhancements. |
| external/triage.md | 43 | defined here | External guide instruction to verify whether an incoming request re-opens settled product decisions. |
| skills/engineering/triage/SKILL.md | 70 | defined here | Core triage directive to check .out-of-scope/ for previously rejected feature requests. |

## Consumes
An incoming feature request and durable rejection records stored under .out-of-scope/.

## Produces
A fast-path wontfix closure referencing the prior recorded rejection reasoning.

## When applied
Applied during triage verification when an enhancement request matches a previously declined proposal.

## Sub-concepts
none

## Part of
triage

## Implementation status
clean

## Design notes
`prior rejection` is a core triage defense mechanism against product design erosion. By maintaining durable records in `.out-of-scope/`, maintainers ensure that previously considered and rejected ideas are not endlessly re-debated when new users or agents encounter the project.
