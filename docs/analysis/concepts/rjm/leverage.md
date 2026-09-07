---
package: rjm
name: Leverage
slug: leverage
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Leverage

## Definition — verbatim
> "If an internal implementation exists, recommend **Leverage** (use as-is) or **Extend** (adapt it) before proposing a build or an external buy. Internal reuse beats both a new dependency and a rewrite." — .claude/skills/programming-advisor/SKILL.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/SKILL.md | 49 | defined here | Directs engineers to use existing internal implementations as-is before considering building or buying. |

## Consumes
Internal codebase search results identifying matching capabilities and symbols.

## Produces
Recommendation to adopt existing internal code as-is with zero new dependencies and zero custom code lines.

## When applied
Applied when internal prior-art search discovers an implementation that satisfies the feature requirements as-is.

## Sub-concepts
none

## Part of
leverage-extend

## Implementation status
clean

## Design notes
`Leverage` is the primary reuse strategy in `programming-advisor` advocating direct, unmodified adoption of existing internal codebase assets. By verifying that internal solutions take precedence over new external dependencies or greenfield vibe coding, it maximizes code reuse, eliminates duplicate maintenance overhead, and saves LLM token burn.
