---
package: rjm
name: Three Perspectives
slug: three-perspectives
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/gof-pattern-selection.md, sha256: 34cc2ef5cd7eac203c23dca08b88810c37bf3dad586cbc5fddb859ea7ff50fb8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Three Perspectives

## Definition — verbatim
> "## Three Perspectives (Fowler)" — .claude/skills/cva-analysis/references/gof-pattern-selection.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 34 | defined here | Heading and framework separating Conceptual, Specification, and Implementation perspectives during CVA analysis. |

## Consumes
CVA matrix analysis and domain requirements.

## Produces
Mapping of Conceptual concerns to matrix rows, Specification concerns to interfaces, and Implementation concerns to matrix cells.

## When applied
Applied when analyzing CVA matrix results to prevent mixing abstraction levels across domain, interface, and code tiers.

## Sub-concepts
conceptual, specification, implementation

## Part of
gof-pattern-selection-from-cva-results

## Implementation status
defects: missing-path

## Design notes
The methodological doctrine in rjm's CVA framework that maps Fowler's three perspectives directly to CVA artifacts: matrix rows capture conceptual requirements (what you want), interfaces capture specifications (type contracts), and matrix cells capture concrete implementations (how it is coded).
