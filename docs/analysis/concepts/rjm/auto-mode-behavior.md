---
package: rjm
name: Auto-mode behavior
slug: auto-mode-behavior
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-step0-gates.md, sha256: 4a8aacb665f1475a6d2da319dcafb8c7cba55d6f65149bdefb6d682f7d1a1bb0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Auto-mode behavior

## Definition — verbatim
> "Auto-mode behavior" — .claude/skills/spec-generator/references/spec-step0-gates.md:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-step0-gates.md | 129 | defined here | Defines execution protocol when /spec runs in non-interactive autonomous mode. |

## Consumes
Autonomous invocation flag and initiating source artifacts (issue bodies, pull request descriptions).

## Produces
Execution halt with `STEP_0_REQUIRES_ELICITATION` or verbatim extraction of structured fields from source artifacts.

## When applied
> "under auto-mode invocation (no human elicitation possible), the agent MUST halt with reason `STEP_0_REQUIRES_ELICITATION`, list each unanswered question, and return to the orchestrator." — .claude/skills/spec-generator/references/spec-step0-gates.md:129

## Sub-concepts
none

## Part of
step-0-gate-logic

## Implementation status
defects: missing-path, doc-drift

## Design notes
Prevents autonomous agents operating without human interaction from fabricating or synthesizing speculative problem-framing answers, mandating that they either find structured fields verbatim in input artifacts or halt execution.
