---
package: rjm
name: Mirrors and gates
slug: mirrors-and-gates
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Mirrors and gates

## Definition — verbatim
> "5. **Mirrors and gates.** Honor repo obligations without prompting: sync" — .claude/skills/autoplan/SKILL.md:160

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 160 | defined here | Default rule mandating automatic synchronization of generated mirrors and adherence to repo obligations. |

## Consumes
Generated files, mirror schemas, handoff artifacts, and git commit structure.

## Produces
Synchronized mirror files, current per-issue handoffs, and atomic commits.

## When applied
Continuously across task execution to fulfill repository maintenance obligations.

## Sub-concepts
none

## Part of
phase-3-execute-with-defaults

## Implementation status
clean

## Design notes
Mirrors and gates enforces automated repository stewardship. It requires agents to proactively honor repository maintenance invariants—such as synchronizing generated documentation and code mirrors, maintaining handoff documents, and ensuring commits remain atomic—without requiring reminders or prompting from the user.
