---
package: rjm
name: Code Qualities
slug: code-qualities
kind: reference
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/golden-principles/SKILL.md, sha256: a7aaeeabf10383fdbee167c8b0ca013789173907695cae91958202cafcea1e12}
  - {path: .claude/skills/golden-principles/references/design-code-qualities.md, sha256: 3f725917bb08c6f90372aa8e213ca67b77c85509e21932dffb1059c8fe8119ac}
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Code Qualities

## Definition — verbatim
> "Five foundational qualities that make code maintainable, debuggable, and adaptable. Focus on defect discoverability and ease of integrating change." — .claude/skills/golden-principles/references/design-code-qualities.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 79 | defined here | Listed in Problem Domain Cross-Reference table as a Tier 1 (Entry) design fundamental paired with SOLID. |
| .claude/skills/golden-principles/references/design-code-qualities.md | 7 | defined here | Document title and comprehensive reference guide defining cohesion, coupling, non-redundancy, encapsulation, and testability. |
| .claude/skills/golden-principles/SKILL.md | 130 | used here | Referenced in skill documentation as the reference defining the five foundational code qualities. |
| .claude/skills/quality-grades/references/code-qualities.md | 7 | defined here | Reference document in quality-grades skill detailing the five code qualities for rubric evaluations. |

## Consumes
Source code artifacts, PR diffs, refactoring proposals.

## Produces
Quality assessments across cohesion, coupling, non-redundancy, encapsulation, and testability.

## When applied
Applied during code review, static analysis, and design evaluation to detect code smells and ensure maintainability.

## Sub-concepts
none

## Part of
golden-principles

## Implementation status
defects: missing-path, doc-drift

## Design notes
Code Qualities establishes the foundational five dimensions (cohesion, coupling, non-redundancy, encapsulation, testability) evaluated across rjm's golden principles and quality grading systems, providing objective criteria for maintainability and change safety.
