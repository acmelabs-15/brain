---
package: addy
name: plan mode
slug: plan-mode
kind: technique
package_phase: addy:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
  - {path: commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
  - {path: skills/planning-and-task-breakdown/SKILL.md, sha256: ed0f90cc5951ddd4bcab7f871f64efec93a49af9279ef93bc470da77ad8da3f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# plan mode

## Definition — verbatim
> "Enter plan mode — read only, no code changes" — .gemini/commands/planning.toml:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/planning.toml | 8 | defines | Step 1 requiring agent to operate in read-only mode without code changes |
| commands/planning.toml | 8 | defines | Step 1 requiring agent to operate in read-only mode without code changes |
| skills/planning-and-task-breakdown/SKILL.md | 24 | defines | Section heading for Step 1 establishing read-only planning protocol |

## Consumes
Existing spec document (`SPEC.md` or equivalent) and relevant codebase context.

## Produces
Strict read-only operating posture during planning.

## When applied
Step 1 of the planning process, before writing any code or modifying files.

## Sub-concepts
none

## Part of
planning-and-task-breakdown

## Implementation status
clean

## Design notes
`plan mode` is an operational constraint technique that enforces a strict read-only boundary during task analysis. By forbidding code modifications while mapping dependencies and architecting implementation slices, it prevents premature coding and ensures the agent focuses solely on producing a sound, verifiable execution plan.
