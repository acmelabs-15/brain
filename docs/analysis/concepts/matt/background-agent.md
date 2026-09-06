---
package: matt
name: background agent
slug: background-agent
kind: role
package_phase: matt:research
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/engineering/research.md, sha256: f3d352a6fb31997c84b0f1ba771e78230985ac4b640c1f0e6fa87ef049dfdf49}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: skills/engineering/research/SKILL.md, sha256: 985569f15739c713d6784887c3d186d4ef9ac85bec5ad9c068d25bf0739928e4}
  - {path: skills/in-progress/claude-handoff/SKILL.md, sha256: 6738e8b7c7899ea0038fb7a5c859ca1b90c7b1eb40123dcdbe94c51b5b119f12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# background agent

## Definition — verbatim
> "The defining move is that the reading runs as a **background agent**. You keep working; it goes off, follows each claim to its primary source, writes one Markdown file, and reports back." — docs/engineering/research.md:25

## Also called — verbatim
`subagent` — external/research.md:51

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 177 | defined here | Explains research delegation to background agents in changelog |
| docs/engineering/research.md | 25 | defined here | Defines background agent as an asynchronous worker doing research legwork |
| external/research.md | 33 | defined here | External doc detailing background execution keeping the main session clean |
| skills/engineering/research/SKILL.md | 6 | used here | Instruction to spin up a background agent for documentation reading |
| skills/in-progress/claude-handoff/SKILL.md | 8 | defined here | Explains handoff between primary and background execution contexts |

## Consumes
A research query or reading task with specified focus areas

## Produces
A standalone markdown document containing cited findings from primary sources

## When applied
When an active session requires documentation lookup or API investigation that would otherwise pollute main session context

## Sub-concepts
none

## Part of
research

## Implementation status
defects: script-bug (skills/engineering/research/SKILL.md:6 spawning general-purpose subagents causing recursive invocations; issue #530)

## Design notes
A background agent performs delegated investigative legwork asynchronously in a separate context window, preserving the human operator's active session for continued thinking and avoiding context bloat.
