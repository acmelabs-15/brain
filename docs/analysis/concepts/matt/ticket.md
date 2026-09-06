---
package: matt
name: ticket
slug: ticket
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: docs/engineering/research.md, sha256: f3d352a6fb31997c84b0f1ba771e78230985ac4b640c1f0e6fa87ef049dfdf49}
  - {path: docs/engineering/triage.md, sha256: 7bdab6379baf24a6617db8349b53f332f1837227add23144d61ba9245eb15d14}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: docs/productivity/to-questionnaire.md, sha256: 875abaef1ed5842ca5f008956288192341b48e4e71904ef4151a56560c3c58eb}
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# ticket

## Definition — verbatim
> "_Avoid_: ticket (use only when quoting external systems that call them tickets, or for a **Decision ticket**, see below)" — CONTEXT.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 13 | defined here | Directs developers to avoid ticket except when quoting external systems or for Decision tickets. |
| docs/engineering/code-review.md | 5 | used here | References tickets alongside specs and branches as inputs to code review. |
| docs/engineering/domain-modeling.md | 86 | used here | Mentions tickets when discussing domain model boundaries in planning. |
| docs/engineering/implement.md | 3 | used here | Explains that implement builds decided work pointed at a ticket, spec, or plan. |
| docs/engineering/research.md | 49 | used here | Describes research tickets created during wayfinding. |
| docs/engineering/triage.md | 5 | used here | Discusses triaging incoming tickets and issues from external sources. |
| docs/engineering/wayfinder.md | 5 | used here | Explains that wayfinder breaks multi-session efforts into child decision tickets. |
| docs/productivity/to-questionnaire.md | 58 | used here | Mentions ticket requirements when generating structured questionnaires. |
| docs/productivity/writing-for-agents.md | 13 | used here | Recommends editing tickets and specs against writing-for-agents principles. |
| external/ask-matt.md | 29 | used here | Notes that self-generated tickets do not belong on the inbound triage on-ramp. |
| external/code-review.md | 26 | used here | References tickets as inputs containing acceptance criteria for reviews. |
| external/implement.md | 25 | used here | Describes implement executing work defined in a ticket. |
| external/research.md | 45 | used here | Discusses resolving research tickets through parallel subagents. |
| external/tdd.md | 30 | used here | Explains verifying acceptance criteria defined in implementation tickets. |
| external/to-questionnaire.md | 59 | used here | Mentions decomposing questionnaire responses into action tickets. |
| external/wayfinder.md | 26 | used here | Details the structure of child decision tickets in a wayfinder map. |

## Consumes
Requirements, problem statements, or questions surfaced during planning and specification.

## Produces
Tracked work items or decision records holding questions, criteria, and resolution details.

## When applied
Referenced widely across implementation, planning, and review workflows; specifically authorized for wayfinder decision tickets.

## Sub-concepts
decision-ticket

## Part of
issue-tracker, wayfinder

## Implementation status
defects: missing-path, other, doc-drift (proscribed by CONTEXT.md in favor of Issue yet pervasive across skill documentation and wayfinder terminology)

## Design notes
A pervasive term across documentation denoting an individual work item, formally restricted by CONTEXT.md in favor of 'Issue' to prevent ambiguity, except when specifically denoting wayfinder decision tickets or quoting external systems.
