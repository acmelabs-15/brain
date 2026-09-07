---
package: rjm
name: Pattern-First Design
slug: pattern-first-design
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pattern-First Design

## Definition — verbatim
> "<description>Pattern-First Design (selecting Strategy or Abstract Factory BEFORE running CVA)</description>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:433

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 433 | defined here | Defined as a critical anti-pattern where developers choose patterns before analyzing requirements. |
| .claude/skills/cva-analysis/SKILL.md | 328 | defined here | Listed in the CVA anti-patterns table warning that patterns must emerge from analysis rather than being imposed. |

## Consumes
Preconceptions about architecture, unverified developer intuition, premature technical decisions.

## Produces
Inappropriate abstractions, rigid structures, high refactoring costs, distorted domain models.

## When applied
Flagged and prevented during architectural review and specification development.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path

## Design notes
Pattern-First Design is classified as a critical anti-pattern in rjm's CVA skill. It describes the common malpractice of committing to a design pattern (e.g., deciding "we need Strategy") prior to systematically analyzing commonalities and variabilities across use cases. This forces requirements into ill-fitting structures and leads to expensive rework. CVA exists specifically to counteract this anti-pattern by ensuring pattern selection is empirically derived from matrix geometry.
