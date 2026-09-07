---
package: rjm
name: prefer-agent-form
slug: prefer-agent-form
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-075-form-factor-eval-methodology.md, sha256: 1354265b364c96bc78dc198932ba51ed1a53db825a41c0b24e086c4e48ff8fe8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# prefer-agent-form

## Definition — verbatim
> "| prefer-agent-form | agent recall exceeds skill recall beyond overlapping confidence intervals | Keep the agent form; the isolation or dispatch buys real recall. |" — .agents/architecture/ADR-075-form-factor-eval-methodology.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 54 | defined here | Decision table verdict condition directing content to be retained in agent form. |

## Consumes
Evaluation metrics showing agent recall statistically superior to skill form.

## Produces
Architectural decision to retain subagent form due to proven recall advantage.

## When applied
Selected when subagent isolation or dedicated system prompt yields measurably higher recall.

## Sub-concepts
none

## Part of
form-factor-evaluation-methodology

## Implementation status
defects: internal-contradiction, cross-file-contradiction

## Design notes
prefer-agent-form justifies the operational complexity and token overhead of dedicated subagents by proving that subagent isolation produces higher recall than inline execution.
