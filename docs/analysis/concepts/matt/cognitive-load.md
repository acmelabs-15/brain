---
package: matt
name: cognitive load
slug: cognitive-load
kind: reference
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# cognitive load

## Definition — verbatim
> "Most of these skills are **user-invoked**: the agent will never fire them for you, so *you* are the index that has to remember they exist and when to reach for them. That memory is **cognitive load**." — .agents/writing-docs.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 5 | used here | Identifies the user's mental effort of indexing skills as cognitive load that documentation must relieve. |
| docs/productivity/writing-for-agents.md | 20 | defined here | Defines cognitive load as the practitioner's indexing budget alongside agent context load. |
| external/writing-for-agents.md | 35 | defined here | Defines cognitive load as the practitioner's indexing budget alongside agent context load. |
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 10 | used here | Weighs developer cognitive load against agent window load when choosing disclosure levels. |
| skills/productivity/writing-for-agents/SKILL.md | 25 | defined here | Defines cognitive load as the practitioner's indexing budget alongside agent context load. |

## Consumes
Catalog size, skill complexity, and documentation volume.

## Produces
Architectural constraints guiding documentation clarity, naming brevity, and disclosure depth.

## When applied
Considered during skill authoring and documentation design to prevent overwhelming practitioners.

## Sub-concepts
none

## Part of
writing-for-agents

## Implementation status
defects: orphan, doc-drift

## Design notes
The mental burden placed on a developer who must remember which skills exist, what they do, and when to invoke them. Matt's package treats cognitive load as a finite budget to be conserved through crisp naming, fixed-frame documentation, and clear trigger boundaries.
