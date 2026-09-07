---
package: rjm
name: Preprocessor or build seam
slug: preprocessor-or-build-seam
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Preprocessor or build seam

## Definition — verbatim
> "**Preprocessor or build seam**: build-time substitution. Almost never the right answer at this layer; raise a flag in review if you find yourself reaching for it." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 74 | defined here | Defined as build-time or compile-time substitution to alter behavior without changing source files. |

## Consumes
Build configurations, preprocessor directives, or packaging scripts.

## Produces
Build-time binary or module substitution.

## When applied
Almost never applied at the application layer; flagged as an anti-pattern during code review if reached for.

## Sub-concepts
none

## Part of
working-with-legacy-code

## Implementation status
clean

## Design notes
A compile-time or build-time substitution seam noted by Feathers as a rarely appropriate mechanism at the application layer, treated as an anti-pattern to flag in review.
