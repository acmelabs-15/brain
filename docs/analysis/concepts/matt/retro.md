---
package: matt
name: retro
slug: retro
kind: technique
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
  - {path: skills/in-progress/retro/SKILL.md, sha256: 264f3330f1e2382af89610ed048ba0ed6d08883eb69f596a8f1df3f1e1a4c6a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# retro

## Definition — verbatim
> "Suggest improvements to the coding agent's environment (steering files, coding standards, automated checks, tooling) after a session." — skills/in-progress/README.md:18

## Also called — verbatim
`retrospective` — skills/in-progress/retro/SKILL.md:7

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/README.md | 18 | used here | Introduces retro as a post-session environment improvement skill, flagged as a STUB. |
| skills/in-progress/retro/SKILL.md | 2 | defined here | Frontmatter declaration naming the retro skill for session retrospectives. |

## Consumes
Coding session logs and repository steering files (CLAUDE.md, AGENTS.md, CODING_STANDARDS.md).

## Produces
Ordered list of candidate environment improvements categorized by severity.

## When applied
Invoked by the user following a coding session to reflect on agent behavior and enhance working environment.

## Sub-concepts
retrospective, navigation, navigation-pointer, coding-standards, reviewer-agent, global-agents-md, tool-economy

## Part of
none

## Implementation status
clean in concept definition; not-implemented in execution (marked as STUB in skills/in-progress/README.md:18)

## Design notes
A retrospective analysis skill designed to inspect completed coding session logs and recommend actionable refinements to the agent's environment. It addresses the root causes of agent mistakes by improving navigation pointers, automated checks, coding standards, or tooling efficiency.
