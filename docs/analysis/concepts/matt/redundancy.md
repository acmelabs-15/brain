---
package: matt
name: redundancy
slug: redundancy
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

# redundancy

## Definition — verbatim
> "**redundancy** (is this already implemented, searched by domain concept rather than by the reporter's wording?)" — docs/engineering/triage.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/triage.md | 55 | defined here | Step 4 instruction to search open issues and PRs for duplicates before drafting briefs. |
| external/triage.md | 43 | defined here | External guide instruction to verify whether incoming issues duplicate existing work. |
| skills/engineering/triage/SKILL.md | 70 | defined here | Core triage step directing agents to search open issues and PRs for duplicate reports. |

## Consumes
Incoming issue tracker items and the current index of open issues, PRs, and .out-of-scope/ files.

## Produces
A deduplication verdict linking duplicate items or closing redundant submissions.

## When applied
Applied during the verification step of triage prior to drafting an agent brief.

## Sub-concepts
none

## Part of
triage

## Implementation status
clean

## Design notes
`redundancy` checks in triage prevent wasted effort and fragmented discussion by proactively identifying duplicate issues and overlapping PRs. Identifying redundancy before drafting an agent brief ensures that agents do not generate redundant implementation work.
