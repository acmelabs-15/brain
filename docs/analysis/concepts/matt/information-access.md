---
package: matt
name: Information access
slug: information-access
kind: technique
package_phase: none
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

# Information access

## Definition — verbatim
> "**Information access**: look for opportunities to increase the agent's access to information. Teeing dev server logs, readonly access to third-party services. _Use when_ a crucial piece of information was not available to the agent." — skills/in-progress/retro/SKILL.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/retro/SKILL.md | 23 | defined here | Candidate category in retrospective analysis identifying opportunities to expand the agent's runtime data visibility. |

## Consumes
Session logs and debugging transcripts revealing missing information during execution.

## Produces
Recommendations to expand tooling, server log teeing, or service access for the agent.

## When applied
> "_Use when_ a crucial piece of information was not available to the agent." — skills/in-progress/retro/SKILL.md:23

## Sub-concepts
none

## Part of
retro

## Implementation status
clean

## Design notes
An environment improvement category in retrospectives that targets informational bottlenecks. Rather than compensating with complex prompts, this technique provides coding agents with direct runtime visibility (such as teeing background server logs or granting read-only service tokens) to eliminate blind spots.
