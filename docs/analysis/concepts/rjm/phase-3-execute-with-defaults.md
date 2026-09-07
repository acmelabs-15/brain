---
package: rjm
name: Phase 3: Execute with defaults
slug: phase-3-execute-with-defaults
kind: phase
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

# Phase 3: Execute with defaults

## Definition — verbatim
> "### Phase 3: Execute with defaults" — .claude/skills/autoplan/SKILL.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 148 | defined here | Section heading defining the execution phase applying engineering defaults silently and classifying decisions. |

## Consumes
Selected route, classified size tier, and execution context.

## Produces
Executed changes, applied engineering defaults, and decision classifications logged for final gate review.

## When applied
During the active execution phase of an autoplan-routed task.

## Sub-concepts
run-the-checks, bias-to-action, mirrors-and-gates, mechanical, taste, sovereignty

## Part of
autoplan

## Implementation status
clean

## Design notes
Phase 3: Execute with defaults provides autoplan's operational execution protocol. It instructs agents to proceed autonomously by applying non-negotiable engineering defaults (Completeness, Run the checks, DRY, Bias to action, Mirrors and gates) without interrupting the developer, while cataloging all mechanical choices and taste rationales for batched review in Phase 4.
