---
package: rjm
name: KISS
slug: kiss
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/references/kiss-principle.md, sha256: 2d5d660a123359f0ec19b8715124fd6df9e1fc7bdfcfffba5c61f35c92d3a9d5}
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# KISS

## Definition — verbatim
> "| KISS | How you build it (simplicity of implementation) |" — .claude/skills/quality-grades/references/kiss-principle.md:45

## Also called — verbatim
> "Keep It Simple, Stupid" — .claude/skills/quality-grades/references/kiss-principle.md:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/references/kiss-principle.md | 45 | defined here | Defined in comparison table as focusing on how code is built (simplicity of implementation). |
| .claude/skills/review/references/architect.md | 59 | used here | Cited as an established design pattern to evaluate during architectural pull request reviews. |

## Consumes
Pull request diffs, software design proposals, component interfaces.

## Produces
Minimal, maintainable implementations without unnecessary abstractions or custom frameworks.

## When applied
Applied during architectural design and reviewed during pull request evaluation stages.

## Sub-concepts
kiss-principle, principles-of-simplicity

## Part of
quality-grades

## Implementation status
defects: missing-path, doc-drift, other

## Design notes
KISS is a foundational design pattern in rjm evaluated during code and architectural reviews to prevent cognitive load and maintenance burden resulting from over-engineering.
