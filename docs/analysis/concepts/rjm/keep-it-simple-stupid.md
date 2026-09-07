---
package: rjm
name: Keep It Simple, Stupid
slug: keep-it-simple-stupid
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/references/kiss-principle.md, sha256: 2d5d660a123359f0ec19b8715124fd6df9e1fc7bdfcfffba5c61f35c92d3a9d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Keep It Simple, Stupid

## Definition — verbatim
> "Keep It Simple, Stupid" — .claude/skills/quality-grades/references/kiss-principle.md:9

## Also called — verbatim
> "# KISS Principle" — .claude/skills/quality-grades/references/kiss-principle.md:7

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/references/kiss-principle.md | 9 | defined here | Full expansion and historical phrasing of the KISS design principle. |

## Consumes
Proposed code changes, system abstractions, architectural decisions.

## Produces
Straightforward, debuggable software designs with minimal moving parts.

## When applied
When reviewing architecture, implementing features, or evaluating system maintainability.

## Sub-concepts
none

## Part of
kiss-principle

## Implementation status
defects: missing-path

## Design notes
The historical expanded aphorism behind the KISS principle in rjm, emphasizing that unnecessary complexity makes software harder to understand, debug, test, and change.
