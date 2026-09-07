---
package: rjm
name: Redundancy
slug: redundancy
kind: pattern
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-legacy-code.md, sha256: d99de8d31d31be7e7fed8d46f5f1c203e5a2ca6a83ec54b65fffa6ccff072274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Redundancy

## Definition — verbatim
> "| 4 | Redundancy | DRY: single authoritative representation |" — .claude/skills/analyze/references/design-legacy-code.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-legacy-code.md | 24 | defined here | Level 4 in the Software Hierarchy of Needs representing the DRY principle. |

## Consumes
Code across classes, functions, and modules.

## Produces
Extraction of duplicate logic into a single authoritative representation (DRY).

## When applied
Evaluated during legacy code analysis when duplicate logic or multiple sources of truth are detected.

## Sub-concepts
none

## Part of
bottom-up-approach

## Implementation status
defects: missing-path

## Design notes
Redundancy occupies Level 4 of the Software Hierarchy of Needs in rjm, reflecting the core principle of Don't Repeat Yourself (DRY). Eliminating redundant logic ensures every concept has a single authoritative representation, preventing bugs where one copy of logic is updated while another is forgotten.
