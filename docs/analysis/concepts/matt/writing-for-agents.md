---
package: matt
name: writing-for-agents
slug: writing-for-agents
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/in-progress/retro/SKILL.md, sha256: 264f3330f1e2382af89610ed048ba0ed6d08883eb69f596a8f1df3f1e1a4c6a1}
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# writing-for-agents

## Definition — verbatim
> "`writing-for-agents` is the reference you write agent-facing documents against: a skill, an `AGENTS.md` / `CLAUDE.md`, a [spec](https://www.aihero.dev/ai-coding-dictionary/spec), a runtime prompt, a README, any doc an [agent](https://www.aihero.dev/ai-coding-dictionary/agent) reads." — docs/productivity/writing-for-agents.md:3

## Also called — verbatim
`writing-great-skills` — docs/productivity/writing-for-agents.md:7

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/ask-matt.md | 76 | used here | Lists writing-for-agents as the authoritative reference for authoring agent-facing documents. |
| docs/productivity/writing-for-agents.md | 3 | defined here | Canonical definition of the reference document governing how agent-facing instructions are written. |
| external/ask-matt.md | 59 | used here | External catalog documentation detailing the writing-for-agents reference. |
| external/writing-for-agents.md | 24 | defined here | External catalog definition of writing-for-agents. |
| external/writing-for-agents.md | 29 | defined here | External documentation describing principles for authoring skills and agent instructions. |
| skills/in-progress/retro/SKILL.md | 11 | used here | Cites writing-for-agents guidance for formatting retrospective skills. |
| skills/productivity/README.md | 20 | used here | Directory README listing writing-for-agents under reference skills. |
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 3 | used here | References skill-specific mechanics and frontmatter rules. |
| skills/productivity/writing-for-agents/SKILL.md | 2 | defined here | Frontmatter definition of the writing-for-agents skill. |

## Consumes
Candidate documentation, skills, specifications, or prompts intended for agent consumption.

## Produces
Concise, high-leverage agent instructions stripped of no-op explanations and optimized for context efficiency.

## When applied
When authoring or modifying skills, AGENTS.md, CLAUDE.md, specs, tickets, or system prompts.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The authoritative reference in matt defining how to author documents intended for agent interpretation. Its primary operating rule is aggressive deletion of extraneous prose that explains what foundation models already know, keeping documents compact and focused on repository-specific invariants, ubiquitous language definitions, and verifiable process steps.
