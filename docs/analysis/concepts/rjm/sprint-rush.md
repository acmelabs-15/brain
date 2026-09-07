---
package: rjm
name: Sprint/Rush
slug: sprint-rush
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Sprint/Rush

## Definition — verbatim
> "Only one option considered, only short-term effects" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:114

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 114 | defines | Tabulated under Time Dimension anti-patterns as considering only a single option focused exclusively on short-term sprint effects. |

## Consumes
Decision context, timeline constraints, and scope of evaluated technical options.

## Produces
Anti-pattern warning flagging short-sighted decisions driven by immediate delivery deadlines.

## When applied
Identified during architectural review when a decision bypasses alternative exploration under transient sprint pressure.

## Sub-concepts
none

## Part of
adr-creation-anti-patterns

## Implementation status
clean

## Design notes
Sprint/Rush identifies decisions made in haste under transient schedule pressure, where authors grasp the quickest implementation without evaluating alternative designs or long-term system consequences. In rjm, architectural decisions have persistent ramifications; flagging Sprint/Rush ensures that temporary deadline constraints do not permanently degrade repository architecture.
