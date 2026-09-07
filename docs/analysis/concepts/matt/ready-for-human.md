---
package: matt
name: ready-for-human
slug: ready-for-human
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

# ready-for-human

## Definition — verbatim
> "- `ready-for-human`: needs human implementation" — skills/engineering/triage/SKILL.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/triage.md | 36 | defined here | State role defining an issue with an agent brief that requires human execution due to judgment or access. |
| external/setup-matt-pocock-skills.md | 37 | defined here | Setup table defining ready-for-human as one of five standard triage state labels. |
| external/triage.md | 36 | defined here | External guide documentation defining the ready-for-human state role. |
| skills/engineering/setup-matt-pocock-skills/triage-labels.md | 10 | used here | Maps canonical role ready-for-human to the repository issue tracker label string. |
| skills/engineering/triage/SKILL.md | 36 | defined here | Core skill definition of the ready-for-human state role. |

## Consumes
A fully specified issue or PR that requires human judgment, external access, or manual interaction.

## Produces
A structured brief explaining both the task requirements and why autonomous agent delegation is prohibited.

## When applied
Applied during triage when work is completely specified but unsuitable for an AFK coding agent.

## Sub-concepts
none

## Part of
triage-roles, triage

## Implementation status
clean

## Design notes
`ready-for-human` is a specialized terminal/hand-off state role in triage. Like `ready-for-agent`, it requires a fully articulated specification brief; however, it explicitly documents why autonomous AI delegation cannot occur (such as needing proprietary credentials, subjective design judgment, or physical device testing).
