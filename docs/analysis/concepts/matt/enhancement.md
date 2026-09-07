---
package: matt
name: enhancement
slug: enhancement
kind: role
package_phase: matt:Triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: skills/engineering/triage/OUT-OF-SCOPE.md, sha256: 1fbf9b432130c6380aa65813b55553cfda150309b27c595e183f8e335b8a190d}
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# enhancement

## Definition — verbatim
> "- `enhancement`: new feature or improvement" — skills/engineering/triage/SKILL.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/triage.md | 29 | defined here | Category role table entry defining enhancement as a new feature or improvement. |
| external/triage.md | 35 | defined here | External triage documentation defining the enhancement category role. |
| skills/engineering/triage/OUT-OF-SCOPE.md | 86 | used here | Explains that only rejected enhancements (not bugs) are recorded in out-of-scope files. |
| skills/engineering/triage/SKILL.md | 29 | defined here | Core skill definition of the enhancement category role. |

## Consumes
Incoming issue tracker feature requests or user suggestions for new functionality.

## Produces
A categorized issue or PR bearing the enhancement category label.

## When applied
Applied during triage when evaluating incoming work that proposes new capabilities rather than fixing defects.

## Sub-concepts
none

## Part of
triage-roles, triage

## Implementation status
clean

## Design notes
`enhancement` is one of two canonical category roles in Matt's triage taxonomy (alongside `bug`). It classifies feature requests, additions, and behavioral improvements. Rejected enhancements receive special governance through durable concept files in `.out-of-scope/` to prevent recurring debates.
