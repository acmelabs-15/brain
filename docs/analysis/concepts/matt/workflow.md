---
package: matt
name: workflow
slug: workflow
kind: artifact
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/loop-me/SKILL.md, sha256: e44d1cc3e760fb86ac42964c2a5f1fcac511715db50fb375f3f7be814de1eaa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# workflow

## Definition — verbatim
> "Run a stateful `/grilling` session whose only output is **workflow** specs." — skills/in-progress/loop-me/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/loop-me/SKILL.md | 8 | defined here | Identifies workflow specs as the exclusive deliverable produced by the grilling session. |

## Consumes
An identified recurring loop and answers elicited during grilling rounds.

## Produces
A markdown specification file in workflows/*.md defining execution steps and checkpoints.

## When applied
Constructed and refined during loop-me grilling sessions.

## Sub-concepts
trigger, checkpoint, push-right, brief, definition-of-done

## Part of
loop-me

## Implementation status
clean

## Design notes
A workflow specification in loop-me represents the concrete, actionable implementation of a recurring loop. Stored in workflows/*.md as the source of truth, it specifies the triggers, autonomous actions, and human checkpoints needed for an implementer agent to execute the process reliably without ambiguity.
