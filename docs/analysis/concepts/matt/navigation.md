---
package: matt
name: Navigation
slug: navigation
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

# Navigation

## Definition — verbatim
> "- **Navigation**: how easy was it for the agent to find the right files? Are there hidden dependencies between files? Would a **navigation pointer** make it easier? _Use when_ the session took a long time to find a piece of information." — skills/in-progress/retro/SKILL.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/retro/SKILL.md | 17 | defined here | Category of retrospective analysis examining file discovery efficiency and hidden dependencies. |

## Consumes
Session traces showing file discovery paths, search commands, and time spent locating information.

## Produces
Recommendations for repository navigation pointers or dependency clarifications.

## When applied
Evaluated during a retrospective when the session took a long time to find a piece of information.

## Sub-concepts
navigation-pointer

## Part of
retro

## Implementation status
clean

## Design notes
An audit category in retro evaluating repository navigability for AI agents. When agents waste context or time locating files due to hidden dependencies or obscure layouts, navigation recommendations introduce explicit pointers to streamline discovery.
