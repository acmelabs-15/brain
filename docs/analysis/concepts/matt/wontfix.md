---
package: matt
name: wontfix
slug: wontfix
kind: role
package_phase: matt:Triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: skills/engineering/setup-matt-pocock-skills/triage-labels.md, sha256: 4f53c9b40ce2651e3611aa090eaedbd6dbc9b71ef8c5f7e65eac0d8263190d0d}
  - {path: skills/engineering/triage/AGENT-BRIEF.md, sha256: 7f5f87fed3033df1b06e083c480f3e847b1fbb0647746b8a4c6a50f9f26ef44f}
  - {path: skills/engineering/triage/OUT-OF-SCOPE.md, sha256: 1fbf9b432130c6380aa65813b55553cfda150309b27c595e183f8e335b8a190d}
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# wontfix

## Definition — verbatim
> "- `wontfix`: will not be actioned" — skills/engineering/triage/SKILL.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/triage.md | 37 | defined here | State role table entry defining wontfix as a closed item with a recorded rationale. |
| external/setup-matt-pocock-skills.md | 37 | defined here | Setup table defining wontfix as one of five standard triage state labels. |
| external/triage.md | 36 | defined here | External guide documentation defining the wontfix state role. |
| skills/engineering/setup-matt-pocock-skills/triage-labels.md | 11 | used here | Maps canonical role wontfix to the repository issue tracker label string. |
| skills/engineering/triage/AGENT-BRIEF.md | 116 | used here | Illustrates defect in unrecorded reasoning when closing feature requests with wontfix. |
| skills/engineering/triage/OUT-OF-SCOPE.md | 86 | used here | Details when rejected enhancement items closed as wontfix record out-of-scope notes. |
| skills/engineering/triage/SKILL.md | 37 | defined here | Core skill definition of the wontfix state role. |

## Consumes
An issue or PR that is rejected, out-of-scope, already implemented, or redundant.

## Produces
A closed tracker item with an explicit explanatory comment and optional .out-of-scope/ concept record.

## When applied
Applied during triage when an issue will not be actioned.

## Sub-concepts
none

## Part of
triage-roles, triage

## Implementation status
clean

## Design notes
`wontfix` is the terminal rejection state in Matt's triage workflow. Rather than closing issues silently or with vague dismissals, `wontfix` requires a documented rationale. For rejected enhancements, it triggers the creation of a durable file in `.out-of-scope/` so future deduplication checks can prevent identical feature proposals.
