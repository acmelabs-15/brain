---
package: rjm
name: SDD (Spec-Driven Development)
slug: sdd-spec-driven-development
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md, sha256: eeb775c6904eb47c22737939b10273f902cc3477c7daef2815f3a810a0be320b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SDD (Spec-Driven Development)

## Definition — verbatim
> "Treat Claude like a junior dev needing a spec, not a magic box." — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 58 | defined here | Defined as a planning pattern treating the AI agent like a junior developer requiring explicit specifications. |

## Consumes
Feature requirements, user intent, and architectural constraints.

## Produces
Structured specifications that guide task planning and implementation.

## When applied
Applied during the planning stage before implementation to prevent ambiguous or unconstrained code generation.

## Sub-concepts
none

## Part of
context-optimizer

## Implementation status
defects: missing-path

## Design notes
A core development pattern in Claude Code productivity workflows that mandates treating the AI agent like a junior engineer requiring explicit specifications rather than an autonomous magic box, ensuring changes are grounded in structured requirements.
