---
package: rjm
name: Escalation Paths
slug: escalation-paths
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Escalation Paths

## Definition — verbatim
> "6. **Escalation Paths**: When to stop, when to pass to human, how to communicate uncertainty" — .claude/skills/analyze/references/agent-architecture-patterns.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/agent-architecture-patterns.md | 22 | defined here | Step 6 of the 6-step prompt design detailing stop conditions and escalation mechanisms. |

## Consumes
Error thresholds, confidence boundaries, and out-of-scope conditions.

## Produces
Structured escalation notifications halting automated execution and requesting human intervention.

## When applied
Triggered whenever an agent encounters irrecoverable errors, high ambiguity, or exceeds its authority limits.

## Sub-concepts
none

## Part of
6-step-structured-prompt-design

## Implementation status
defects: missing-path

## Design notes
Escalation Paths formalize when and how an autonomous agent must disengage and defer to human review. In rjm, autonomous agents are strictly forbidden from guessing when instructions conflict or execution encounters unexpected state; explicit escalation protocols protect system integrity by bounding agent autonomy.
