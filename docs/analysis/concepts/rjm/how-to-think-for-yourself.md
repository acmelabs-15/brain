---
package: rjm
name: How to Think for Yourself
slug: how-to-think-for-yourself
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# How to Think for Yourself

## Definition — verbatim
(used, not defined)
> "Source concept: Paul Graham" — .claude/agents/independent-thinker.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/independent-thinker.md | 82 | applies | Section heading citing Paul Graham's essay and foundational critical thinking principles. |
| templates/agents/independent-thinker.shared.md | 71 | applies | Shared template reference establishing independent inquiry rules. |
| templates/agents/retrospective.shared.md | 165 | applies | Retrospective bias guard combining identity management with independent thinking. |

## Consumes
External philosophical and critical thinking methodology (Paul Graham, 2020).

## Produces
Cognitive guardrails against conventional wisdom, conformity pressure, and unexamined consensus.

## When applied
Referenced during agent prompt engineering to ground critical thinking protocols in published methodology.

## Sub-concepts
is-that-true

## Part of
independent-thinker, retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Grounds rjm's critical thinking agent architecture in Paul Graham's essay on intellectual non-conformity. It provides the intellectual scaffolding for refusing to frame problems within the crowd's assumptions and cultivating deliberate reflexes to question obvious-sounding claims.
