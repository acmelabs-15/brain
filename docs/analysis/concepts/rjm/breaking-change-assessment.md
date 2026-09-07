---
package: rjm
name: Breaking Change Assessment
slug: breaking-change-assessment
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Breaking Change Assessment

## Definition — verbatim
> "### Breaking Change Assessment" — .claude/skills/review/references/architect.md:138

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/architect.md | 138 | defined here | Output section header providing structured evaluation of breaking changes, impact scope, and migration paths. |

## Consumes
Analysis of changes to public APIs, shared contracts, and consumer impact.

## Produces
Structured metadata documenting breaking change presence (Yes/No), impact scope (None/Minor/Major), migration requirements, and migration paths.

## When applied
When outputting architectural review results for changes affecting public interfaces or contracts.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: doc-drift, missing-path, other

## Design notes
A structured section of the architectural review output report in rjm that classifies breaking interface changes by impact scope and explicitly documents required migration paths.
