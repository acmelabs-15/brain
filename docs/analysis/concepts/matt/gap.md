---
package: matt
name: gap
slug: gap
kind: pattern
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/to-questionnaire.md, sha256: 875abaef1ed5842ca5f008956288192341b48e4e71904ef4151a56560c3c58eb}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: skills/productivity/to-questionnaire/SKILL.md, sha256: b5eb929842ee0e93d867c5e906d183d350f2f2d149eaeaa86967d94d8eda1d3b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# gap

## Definition — verbatim
> "The questions in the document then target the **gap** between what the recipient knows and what the user needs." — skills/productivity/to-questionnaire/SKILL.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/to-questionnaire.md | 5 | defined here | Specifies that every question in the generated document aims at the gap between who it goes to and what is needed back. |
| external/to-questionnaire.md | 26 | defined here | Describes aiming every question in the questionnaire at the gap between recipient context and needed information. |
| skills/productivity/to-questionnaire/SKILL.md | 9 | defined here | Defines the gap between what the recipient knows and what the user needs as the target for drafted questions. |

## Consumes
Recipient profile (role, expertise) and the user's checklist of required answers.

## Produces
Questions tailored specifically to span the informational divergence.

## When applied
During question drafting in `to-questionnaire`.

## Sub-concepts
none

## Part of
to-questionnaire, questionnaire

## Implementation status
clean

## Design notes
The informational delta between a recipient's domain knowledge and the user's immediate decision blockage. Focusing questionnaire drafting precisely on this boundary ensures questions ask only for missing facts without burdening the recipient with irrelevant queries or uncontextualized requests.
