---
package: rjm
name: Claude lifecycle hook
slug: claude-lifecycle-hook
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Claude lifecycle hook

## Definition — verbatim
> "| Claude lifecycle hook | `.claude/hooks/**`, hook generators | Dual-registration sync; runtime-contract tests; `scripts/validation/validate_hook_anchoring.py` |" — .claude/skills/ai-agents-change-control/SKILL.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/SKILL.md | 37 | defined here | Classification table row mandating dual-registration sync, runtime-contract tests, and hook anchoring checks. |

## Consumes
Lifecycle hook scripts under .claude/hooks/ and hook registration metadata.

## Produces
Runtime-contract test suites and validated hook anchoring reports.

## When applied
Applied whenever adding or modifying Claude lifecycle hooks.

## Sub-concepts
none

## Part of
change-control

## Implementation status
clean

## Design notes
Claude lifecycle hooks intercept agent actions (e.g. PreToolUse, SessionStart) to enforce repository boundaries. Change control mandates dual-registration sync and anchoring validation to prevent broken hook configurations.
