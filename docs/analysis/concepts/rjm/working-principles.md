---
package: rjm
name: Working Principles
slug: working-principles
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/explainer.md, sha256: ce937234dc5604132840cbd7837d41f214c02ab70f6b0af4dd56c6dcb5d65351}
  - {path: templates/agents/explainer.shared.md, sha256: 8e17580db6644e5a5966cd2256957a569f0415a5bcc5c536d8900746276f3916}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Working Principles

## Definition — verbatim
> "- **Produce when you can; flag assumptions explicitly.** Default to direct output with inline assumptions rather than gating on clarifications. Only ask when essential information is missing." — .claude/agents/explainer.md:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/explainer.md | 107 | defined here | Core operational heuristics governing agent execution: produce output over gating on questions, explicit beats clever, relative paths, and canonical examples. |
| templates/agents/explainer.shared.md | 113 | defined here | Core operational heuristics governing agent execution across shared templates. |

## Consumes
Task inputs, domain context, agent decision points.

## Produces
Actionable artifacts with transparent assumptions rather than interactive paralysis.

## When applied
Continuously applied during agent execution when choosing between direct action and interactive questioning.

## Sub-concepts
none

## Part of
explainer

## Implementation status
defects: missing-path

## Design notes
Working Principles provides behavioral constraints designed to combat agent passivity and over-engineering. By mandating direct output with visible assumptions over speculative clarification rounds, using relative paths, and preferring concrete examples over abstract rules, agents remain productive and predictable.
