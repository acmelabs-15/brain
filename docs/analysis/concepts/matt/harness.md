---
package: matt
name: harness
slug: harness
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: docs/engineering/research.md, sha256: f3d352a6fb31997c84b0f1ba771e78230985ac4b640c1f0e6fa87ef049dfdf49}
  - {path: docs/engineering/setup-matt-pocock-skills.md, sha256: 4a4129edb23d9ba1491e2ef9ccba964ebc3d85830b013c089f0b8b4dd58ebbe6}
  - {path: docs/engineering/wizard.md, sha256: d9936487d804e953412f0f932dd5d273c29643b1995e1a5d443624b3f9059210}
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# harness

## Definition — verbatim
(used, not defined)

> "You need a file only when the work has to *travel*: to a new [harness](https://www.aihero.dev/ai-coding-dictionary/harness), a new directory, a colleague, or a side task you want to fork off." — docs/productivity/handoff.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 77 | used here | Referenced as an AI Coding Dictionary house vocabulary term. |
| docs/engineering/ask-matt.md | 42 | used here | Discusses harness-swapping scenarios where context portability is required. |
| docs/engineering/code-review.md | 52 | used here | Explains how different harnesses handle diff displays and review commands. |
| docs/engineering/diagnosing-bugs.md | 32 | used here | Mentions a throwaway test harness as step 6 in the tight reproduction loop ladder. |
| docs/engineering/improve-codebase-architecture.md | 84 | used here | Notes harness limitations when inspecting complex multi-package repositories. |
| docs/engineering/research.md | 53 | used here | Discusses background execution support across different agent harnesses. |
| docs/engineering/setup-matt-pocock-skills.md | 63 | used here | Explains configuration across different agent harnesses such as Claude Code and Codex. |
| docs/engineering/wizard.md | 77 | used here | Describes interactive setup flows tailored to the user's active harness. |
| docs/productivity/handoff.md | 5 | used here | States that handoff files are specifically designed for portability when switching harnesses. |
| docs/productivity/teach.md | 80 | used here | Mentions harness environment assumptions when generating instructional guides. |
| external/ask-matt.md | 43 | used here | Discusses managing phase boundaries when swapping between agent harnesses. |
| external/code-review.md | 47 | used here | Compares harness review integrations with native CLI review skills. |
| external/handoff.md | 26 | used here | Explains harness transitions as a primary justification for generating handoff files. |
| external/improve-codebase-architecture.md | 64 | used here | Outlines harness context budgeting for codebase refactoring. |
| external/research.md | 47 | used here | Details background agent capabilities across different commercial harnesses. |
| external/setup-matt-pocock-skills.md | 48 | used here | Covers tool registration across varying agent execution harnesses. |
| external/teach.md | 60 | used here | Examines harness prompt injection techniques for interactive learning. |

## Consumes
Skills, configuration templates, shell commands, LLM APIs.

## Produces
The execution runtime, context manager, and user interaction shell for AI coding agents.

## When applied
Governs the execution environment; specifically evaluated when swapping tools or authoring portable handoffs.

## Sub-concepts
none

## Part of
ai-coding-dictionary

## Implementation status
clean

## Design notes
The host platform or execution environment (e.g., Claude Code, Codex, Cursor) providing tool-calling capabilities, file system access, and context window management to AI coding agents. Skills use portable artifacts like handoffs specifically to bridge gaps across different harnesses.
