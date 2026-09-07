---
package: matt
name: No-ops
slug: no-ops
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/retro/SKILL.md, sha256: 264f3330f1e2382af89610ed048ba0ed6d08883eb69f596a8f1df3f1e1a4c6a1}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# No-ops

## Definition — verbatim
> "**No-ops**: look for instructions in steering files that don't modify the agent's behavior. _Use when_ the steering files are large and unwieldy." — skills/in-progress/retro/SKILL.md:22

## Also called — verbatim
`no-ops` — skills/productivity/writing-for-agents/SKILL.md:81

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/retro/SKILL.md | 22 | defined here | Directs the retrospective to audit steering files for instructions that fail to alter agent behavior. |
| skills/productivity/writing-for-agents/SKILL.md | 81 | defined here | Establishes the model-relative no-op test to identify and prune instructions that models already obey by default. |

## Consumes
Steering instructions in repository agent files (`AGENTS.md`, `CLAUDE.md`, skills).

## Produces
Identification and removal of ineffective instructions from agent steering files.

## When applied
> "Hunt **no-ops** sentence by sentence: an instruction the model already obeys by default pays load to say nothing." — skills/productivity/writing-for-agents/SKILL.md:81

## Sub-concepts
none

## Part of
retro

## Implementation status
clean

## Design notes
A pruning technique that tests whether an instruction actually changes model behavior relative to default pre-trained behavior. If a model already follows the behavior by default, the instruction consumes valuable context window tokens and attention without altering output, and should be eliminated rather than edited.
