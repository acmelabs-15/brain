---
package: matt
name: needs-triage
slug: needs-triage
kind: role
package_phase: matt:Triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
  - {path: skills/engineering/setup-matt-pocock-skills/triage-labels.md, sha256: 4f53c9b40ce2651e3611aa090eaedbd6dbc9b71ef8c5f7e65eac0d8263190d0d}
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# needs-triage

## Definition — verbatim
> "- `needs-triage`: maintainer needs to evaluate" — skills/engineering/triage/SKILL.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 19 | used here | Mentions needs-triage as an example triage role applied to an Issue. |
| docs/engineering/triage.md | 33 | defined here | Defines needs-triage as the initial state where an unlabelled issue normally lands. |
| external/setup-matt-pocock-skills.md | 37 | defined here | References needs-triage in the canonical triage label mapping. |
| external/triage.md | 36 | defined here | Explains that needs-triage indicates an issue requires evaluation by a maintainer. |
| skills/engineering/setup-matt-pocock-skills/triage-labels.md | 7 | used here | Maps canonical role needs-triage to the tracker label string. |
| skills/engineering/triage/SKILL.md | 33 | defined here | Lists needs-triage as the state role meaning maintainer needs to evaluate. |

## Consumes
Newly created or unlabelled issues submitted to an issue tracker.

## Produces
Initial status marker prioritizing the issue for evaluation by maintainers.

## When applied
Applied by default to incoming issues or when an issue returns from `needs-info`.

## Sub-concepts
none

## Part of
triage-role, triage

## Implementation status
clean

## Design notes
The default entry state role in the triage state machine assigned to issues requiring evaluation before further specification or assignment to agents.
