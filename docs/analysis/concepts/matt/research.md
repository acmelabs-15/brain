---
package: matt
name: research
slug: research
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/research.md, sha256: f3d352a6fb31997c84b0f1ba771e78230985ac4b640c1f0e6fa87ef049dfdf49}
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/research/SKILL.md, sha256: 985569f15739c713d6784887c3d186d4ef9ac85bec5ad9c068d25bf0739928e4}
  - {path: skills/engineering/research/agents/openai.yaml, sha256: 9b4c470d63221c1f68f22df70b83e2f12401b317babe0d1b7b5f24a974474d0d}
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# research

## Definition — verbatim
> "`research` answers a question by reading the sources that own the answer, then leaves a cited Markdown file in the repo. It works only from **[primary sources](https://www.aihero.dev/ai-coding-dictionary/primary-source)**: official docs, source code, specs, first-party APIs." — docs/engineering/research.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/research.md | 3 | defined here | Defines research as investigating questions against primary sources and generating cited Markdown reports. |
| docs/engineering/wayfinder.md | 50 | used here | Defines research tickets in wayfinder as AFK tasks for surfacing external facts. |
| docs/productivity/teach.md | 19 | used here | Mentions research subagents reading primary sources to leave cited documents for learning. |
| external/improve-codebase-architecture.md | 77 | used here | Lists research alongside other engineering investigation skills. |
| external/research.md | 28 | defined here | Explains the mission of the research skill in gathering evidence from high-trust sources. |
| external/teach.md | 74 | used here | Recommends research subagents for background primary source exploration. |
| external/wayfinder.md | 47 | used here | Categorizes research as an AFK decision ticket resolved by subagents on dedicated branches. |
| skills/engineering/research/agents/openai.yaml | 2 | used here | Metadata declaring the Research agent interface. |
| skills/engineering/research/SKILL.md | 2 | defined here | Frontmatter declaration naming the research skill. |
| skills/engineering/wayfinder/SKILL.md | 65 | defined here | Names research as one of the four wayfinder ticket type labels. |
| skills/engineering/wayfinder/SKILL.md | 77 | defined here | Details the execution mechanics of AFK research tickets using subagents. |

## Consumes
A factual or technical question blocking a decision, requiring information outside the current repository.

## Produces
A cited Markdown findings document saved in the repository.

## When applied
When an external fact (API contract, official documentation, third-party library behavior) must be settled before deciding an architectural path.

## Sub-concepts
none

## Part of
wayfinder

## Implementation status
clean

## Design notes
research is an AFK investigation skill dedicated to uncovering external facts from primary sources. By delegating documentation and API verification to a background subagent, it prevents the primary conversational agent from hallucinating or guessing at external technical constraints.
