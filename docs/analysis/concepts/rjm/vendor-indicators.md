---
package: rjm
name: Vendor Indicators
slug: vendor-indicators
kind: checklist
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analysis-provenance/SKILL.md, sha256: da8d7cfd6e7333bb7a893e589bc58588386cd6eb9c73c555be2e3b1757de7c27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Vendor Indicators

## Definition — verbatim
> "### Vendor Indicators" — .claude/skills/analysis-provenance/SKILL.md:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analysis-provenance/SKILL.md | 171 | defined here | Heading introducing the classification signals and locations used to identify third-party vendored assets. |

## Consumes
Repository directory hierarchy, file path conventions, and source file headers.

## Produces
Classification signals identifying third-party or vendored code assets.

## When applied
Applied during provenance verification to distinguish upstream or vendored dependencies from project-owned code.

## Sub-concepts
none

## Part of
analysis-provenance

## Implementation status
defects: doc-drift, missing-path, unfailable-gate

## Design notes
Vendor Indicators establish concrete filesystem and metadata heuristics—such as vendor directory paths, header comments citing upstream URLs, and local VENDORED.md documentation—to unambiguously identify third-party code. In rjm, these indicators protect external code from erroneous automated refactorings, style lints, or project-specific copyright insertions.
