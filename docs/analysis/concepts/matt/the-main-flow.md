---
package: matt
name: The Main Flow
slug: the-main-flow
kind: pattern
package_phase: matt:The Main Flow
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
  - {path: external/to-spec.md, sha256: 41628409b39e15d59b669342fc26a9416c89af7eb2295fed324138e7e3dba8fd}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The Main Flow

## Definition — verbatim
(used, not defined)
> "The Main Flow" — external/code-review.md:5

## Also called — verbatim
`main flow` — skills/engineering/ask-matt/SKILL.md:11

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review.md | 5 | used here | Series navigation section linking to the core skills of the main flow. |
| external/grill-with-docs.md | 5 | used here | Series navigation section linking to the core skills of the main flow. |
| external/grilling.md | 5 | used here | Series navigation section linking to the core skills of the main flow. |
| external/handoff.md | 68 | used here | Navigation breadcrumb locating handoff relative to the main flow. |
| external/implement.md | 5 | used here | Series navigation section linking to the core skills of the main flow. |
| external/prototype.md | 5 | used here | Series navigation section linking to the core skills of the main flow. |
| external/research.md | 5 | used here | Series navigation section linking to the core skills of the main flow. |
| external/tdd.md | 5 | used here | Series navigation section linking to the core skills of the main flow. |
| external/to-questionnaire.md | 74 | used here | Navigation breadcrumb locating questionnaire relative to the main flow. |
| external/to-spec.md | 5 | used here | Series navigation section linking to the core skills of the main flow. |
| external/to-tickets.md | 79 | used here | Navigation breadcrumb locating ticket generation in the main flow. |
| external/wayfinder.md | 5 | used here | Series navigation section linking to the core skills of the main flow. |
| external/writing-for-agents.md | 5 | used here | Series navigation section linking to the core skills of the main flow. |

## Consumes
A raw feature requirement, specification, or idea initiated by the user.

## Produces
Shipped, tested, and reviewed code changes committed to the repository.

## When applied
When building a feature from conception to shipping through the primary sequence of engineering skills.

## Sub-concepts
grill-with-docs, to-spec, to-tickets, implement, code-review

## Part of
none

## Implementation status
defects: doc-drift, other (router map lag, sub-agent delegation loops, harness skill shadowing)

## Design notes
The primary sequential lifecycle pipeline in Matt Pocock's engineering skill suite connecting initial problem clarification to finished, verified code. The flow passes through grill-with-docs (concept grilling), to-spec (specification), to-tickets (ticket breakdown), implement (test-driven execution), and code-review (two-axis quality gate), providing a repeatable structure from idea to ship.
