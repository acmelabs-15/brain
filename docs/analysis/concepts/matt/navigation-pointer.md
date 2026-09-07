---
package: matt
name: navigation pointer
slug: navigation-pointer
kind: pattern
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/retro/SKILL.md, sha256: 264f3330f1e2382af89610ed048ba0ed6d08883eb69f596a8f1df3f1e1a4c6a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# navigation pointer

## Definition — verbatim
(used, not defined)
> "- **Navigation**: how easy was it for the agent to find the right files? Are there hidden dependencies between files? Would a **navigation pointer** make it easier? _Use when_ the session took a long time to find a piece of information." — skills/in-progress/retro/SKILL.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/retro/SKILL.md | 17 | defined here | Retrospective consideration suggesting pointers when sessions take excessive time finding files. |

## Consumes
Repository file layout and session traces of file search behavior.

## Produces
Concise path references embedded in root steering files directing agents to specialized documentation.

## When applied
> "_Use when_ the session took a long time to find a piece of information." — skills/in-progress/retro/SKILL.md:17

## Sub-concepts
none

## Part of
navigation, retro

## Implementation status
clean

## Design notes
A steering pattern that uses minimal path pointers in root configuration files (`CLAUDE.md`/`AGENTS.md`) or large standards files to direct coding agents to dedicated reference documentation. By isolating deep guidance into external files and relying on navigation pointers, repositories prevent context bloating while ensuring agents can locate critical conventions.
