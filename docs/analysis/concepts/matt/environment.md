---
package: matt
name: environment
slug: environment
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
  - {path: skills/in-progress/retro/SKILL.md, sha256: 264f3330f1e2382af89610ed048ba0ed6d08883eb69f596a8f1df3f1e1a4c6a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# environment

## Definition — verbatim
> "The user has asked for a **retrospective**. You are suggesting improvements to the coding agent's **environment** to improve future runs." — skills/in-progress/retro/SKILL.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/diagnosing-bugs.md | 40 | used here | Cited as permissions, credentials, or host runtime access needed when the agent cannot build a repro autonomously. |
| docs/productivity/grilling.md | 29 | used here | Referenced as the system context that answers fact-finding questions autonomously via subagents. |
| skills/in-progress/retro/SKILL.md | 7 | defined here | Primary definition of the coding agent's configuration, rules, tooling, and context that retrospectives improve. |

## Consumes
Agent configuration files (`CLAUDE.md`, `AGENTS.md`), navigation pointers, automated checks, and system permissions.

## Produces
Optimized runtime conditions and automated tooling setups for future agent sessions.

## When applied
During retrospectives to analyze agent mistakes or during fact-finding passes when querying system facts.

## Sub-concepts
none

## Part of
retro

## Implementation status
clean in retro/SKILL.md:7; associated with tool access constraints in diagnosing-bugs.md:40 and grilling.md:29

## Design notes
The collective configuration, automated checks, coding standards, and tooling that surround the coding agent. In Matt's retrospective pattern, agent errors are addressed not by blaming the model, but by improving the environment (navigation pointers, automated linters, or clearer context) to prevent recurrence.
