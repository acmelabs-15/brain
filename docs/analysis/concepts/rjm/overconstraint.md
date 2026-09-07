---
package: rjm
name: overconstraint
slug: overconstraint
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/model-context-doctrine.md, sha256: 5a2eaa014a39bd72096176f55872704d4ec5cb4a145785484cf6a615ae5b0be6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# overconstraint

## Definition — verbatim
> "The named failure mode is **overconstraint**: piling on always-on behavioral rules makes the model worse, not better." — .claude/skills/context-optimizer/references/model-context-doctrine.md:22-23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/model-context-doctrine.md | 22 | defined here | Named as the failure mode where accumulating always-on behavioral constraints degrades model performance on coding tasks. |

## Consumes
Always-on behavioral rules, system prompt instructions, and repetitive guidelines.

## Produces
Degraded model reasoning, instruction conflict, and reduced coding evaluation performance.

## When applied
Observed when excessive always-on behavioral rules are loaded into the system prompt.

## Sub-concepts
none

## Part of
model-context-doctrine

## Implementation status
clean

## Design notes
The empirical failure mode identified by Anthropic where loading numerous always-on behavioral guidelines harms model intelligence rather than improving it, justifying prompt minimization.
