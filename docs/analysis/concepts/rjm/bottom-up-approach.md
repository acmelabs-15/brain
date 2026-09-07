---
package: rjm
name: Bottom-Up Approach
slug: bottom-up-approach
kind: technique
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

# Bottom-Up Approach

## Definition — verbatim
> "## Bottom-Up Approach" — .claude/skills/analyze/references/design-legacy-code.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-legacy-code.md | 15 | defined here | Defines the strategy of evaluating legacy code starting from the base of the Software Hierarchy of Needs. |

## Consumes
Unfamiliar or unmanaged legacy code lacking comprehensive tests.

## Produces
Step-by-step refactoring sequence ascending the Software Hierarchy of Needs.

## When applied
Applied during legacy code analysis prior to attempting major structural reorganizations.

## Sub-concepts
redundancy

## Part of
design-legacy-code

## Implementation status
defects: missing-path

## Design notes
The Bottom-Up Approach guides legacy code remediation by starting at the foundational base of the Software Hierarchy of Needs (syntax, testability, cohesion) before moving to coupling, redundancy, and design patterns. This bottom-up progression prevents agents from attempting high-level pattern refactoring on code that lacks basic test isolation and stability.
