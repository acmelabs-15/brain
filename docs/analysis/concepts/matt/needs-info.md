---
package: matt
name: needs-info
slug: needs-info
kind: role
package_phase: matt:Triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: skills/engineering/setup-matt-pocock-skills/triage-labels.md, sha256: 4f53c9b40ce2651e3611aa090eaedbd6dbc9b71ef8c5f7e65eac0d8263190d0d}
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# needs-info

## Definition — verbatim
> "- `needs-info`: waiting on reporter for more information" — skills/engineering/triage/SKILL.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/triage.md | 34 | defined here | State role defining an issue waiting on input from the reporter before triage can proceed. |
| external/setup-matt-pocock-skills.md | 37 | defined here | Setup table defining needs-info as one of five standard triage state labels. |
| external/triage.md | 36 | defined here | External guide documentation defining the needs-info state role. |
| skills/engineering/setup-matt-pocock-skills/triage-labels.md | 8 | used here | Maps canonical role needs-info to the repository issue tracker label string. |
| skills/engineering/triage/SKILL.md | 34 | defined here | Core skill definition of the needs-info state role. |

## Consumes
An issue with missing reproduction details, incomplete diagnostic data, or ambiguous scope.

## Produces
A specific inquiry posted to the reporter and an issue labeled with needs-info.

## When applied
Applied during triage when incoming reports lack sufficient detail to verify or brief.

## Sub-concepts
none

## Part of
triage-roles, triage

## Implementation status
clean

## Design notes
`needs-info` represents a pause state in Matt's triage workflow. When an incoming issue or PR cannot be reproduced or lacks essential context, triage drafts a targeted question, labels the issue `needs-info`, and halts until the reporter responds, automatically transitioning back to `needs-triage` upon reply.
