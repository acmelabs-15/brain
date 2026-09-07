---
package: rjm
name: Complexity Sizing
slug: complexity-sizing
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/SKILL.md, sha256: 08f84b382679ed61ac10f81382ea6e67e33218cbf4ab38c9412548f64cb46d0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Complexity Sizing

## Definition — verbatim
> "## Complexity Sizing (for Tasks)" — .claude/skills/spec-generator/SKILL.md:170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/SKILL.md | 170 | defined here | Defines the complexity rubric (XS to XL) and hour ranges for sizing decomposed tasks. |

## Consumes
Task scope, technical implementation notes, and expected file touch counts.

## Produces
Calibrated complexity ratings (`XS`, `S`, `M`, `L`, `XL`) mapped to estimated working hour bounds.

## When applied
Applied when sizing tasks during specification decomposition in `spec-generator`.

## Sub-concepts
none

## Part of
task-structure

## Implementation status
clean

## Design notes
Complexity Sizing provides a calibrated rubric (XS 1-2h, S 2-4h, M 4-8h, L 8-16h, XL 16+h) that enforces breaking down oversized work items before implementation begins.
