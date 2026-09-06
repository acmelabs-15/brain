---
package: matt
name: ADR
slug: adr
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/domain-modeling-trigger-context-adr.md, sha256: ec97502246b5d9cfc3aeea3ed584ca8ac0b43c82ec8389ff2ed96c231b76062d}
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: docs/engineering/prototype.md, sha256: dba351ad5a0c4763e295b8c01b72bf57e2a757c1b642c18305939f0ad0090871}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: skills/engineering/domain-modeling/ADR-FORMAT.md, sha256: 944c92aa790e8fbdc9199640b170979abb8a34ba8d0fe18c2a01a63bce140ca0}
  - {path: skills/engineering/domain-modeling/SKILL.md, sha256: 327a2b50620e2fd70abc6893cd6965e76b20f8d0adb0dc2c8d5eb3845efb643e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# ADR

## Definition — verbatim
> "An ADR can be a single paragraph. The value is in recording *that* a decision was made and *why*, not in filling out sections." — skills/engineering/domain-modeling/ADR-FORMAT.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/domain-modeling-trigger-context-adr.md | 5 | used here | Cited as a direct trigger for the domain-modeling skill when creating or editing architectural decision records. |
| docs/engineering/domain-modeling.md | 17 | used here | Describes domain-modeling offering an ADR when a hard-to-reverse architectural choice passes three qualification criteria. |
| docs/engineering/grill-with-docs.md | 5 | used here | Notes that grill-with-docs persists learned architecture and domain decisions into CONTEXT.md and ADRs. |
| docs/engineering/improve-codebase-architecture.md | 32 | used here | Identifies ADRs as inputs to inspect for previously agreed architectural constraints and decisions. |
| docs/engineering/prototype.md | 28 | used here | Recommends recording architectural conclusions in an ADR after prototype experiments resolve structural uncertainties. |
| external/domain-modeling.md | 30 | used here | Explains when to offer an ADR for hard-to-reverse architectural choices in the situation matrix. |
| external/grill-with-docs.md | 26 | used here | Explains that grilling sessions record significant architectural decisions as ADRs. |
| external/grilling.md | 39 | used here | Mentions that ADRs capture decisions and trade-offs that emerge from architectural grilling sessions. |
| external/prototype.md | 40 | used here | Notes that prototyping sessions feed architectural decision records once options are evaluated. |
| external/research.md | 31 | used here | Highlights documenting findings and architecture choices in an ADR after exploratory research. |
| skills/engineering/domain-modeling/ADR-FORMAT.md | 3 | defined here | Defines storage directory docs/adr/, sequential numbering scheme, template, and qualifying rules. |
| skills/engineering/domain-modeling/SKILL.md | 3 | used here | Names recording or editing an ADR as an explicit model trigger for domain-modeling. |

## Consumes
An architectural choice that is hard to reverse, surprising without context, and the result of a real trade-off.

## Produces
A sequentially numbered markdown file in docs/adr/ (0001-slug.md) recording context, decision, and rationale.

## When applied
All three tests must pass: hard to reverse, surprising without context, and the result of a real trade-off.

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
defects: missing-path, other, internal-contradiction (coupling ADR and glossary guidance into a single skill creates convention conflicts in repos with existing ADR setups)

## Design notes
An ADR in Matt's design is an intentionally lean, low-friction record of a high-impact architectural choice. Rather than requiring comprehensive bureaucratic sections, it can be a single paragraph capturing context, decision, and trade-offs. The high barrier to creation (passing all three qualification tests) prevents documentation bloat while ensuring non-obvious compromises are permanently recorded.
