---
package: matt
name: tokens
slug: tokens
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: docs/engineering/research.md, sha256: f3d352a6fb31997c84b0f1ba771e78230985ac4b640c1f0e6fa87ef049dfdf49}
  - {path: docs/productivity/wait-what.md, sha256: 5523a8be6520dc2aa09e1aab9ea3e5e59e6f0d41ffefa5130c3404dd2e34c677}
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# tokens

## Definition — verbatim
(used, not defined)

> "Finding the word that packs the most behaviour into the fewest [tokens](https://www.aihero.dev/ai-coding-dictionary/token) is work the reference does for you." — docs/productivity/writing-for-agents.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 54 | used here | Used in troubleshooting question discussing excessive token spend during unconstrained agent exploration. |
| docs/engineering/implement.md | 71 | used here | Cited when discussing token budgets for tickets and avoiding blowing past context windows. |
| docs/engineering/research.md | 35 | used here | Used to describe the computational cost of runaway background research agents. |
| docs/productivity/wait-what.md | 23 | used here | Discussed in connection with leading words and concise prompt tokens. |
| docs/productivity/writing-for-agents.md | 59 | used here | Framed as the economy of packing maximal agent behavior into minimal tokens. |
| external/implement.md | 59 | used here | Mentioned in web docs addressing token burn for large tickets. |
| external/prototype.md | 54 | used here | Discussed in comparison to building the wrong state model without prototyping. |
| external/writing-for-agents.md | 64 | used here | Described in web docs as the unit of language efficiency when writing agent steering instructions. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
tokens is a computational and context-accounting metric of language models rather than a software development lifecycle concept.
