---
package: rjm
name: Conceptual
slug: conceptual
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

# Conceptual

## Definition — verbatim
(used, not defined)

> "| Conceptual | What do you want? | Matrix rows (abstractions) |" — .claude/skills/cva-analysis/references/gof-pattern-selection.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 40 | used here | Perspective answering "What do you want?" mapped directly to CVA matrix rows (abstractions). |

## Consumes
Problem domain statements, business requirements, and operational goals.

## Produces
Domain abstractions and candidate commonality rows in a CVA matrix.

## When applied
Applied at the start of domain analysis to establish what the system needs to accomplish without referencing class structures or programming language idioms.

## Sub-concepts
none

## Part of
three-perspectives

## Implementation status
defects: missing-path

## Design notes
The highest perspective in Fowler's three-tier model, representing the pure domain understanding of what the business or system requires; in CVA analysis, it maps to commonality rows before any programmatic interfaces or concrete types are designed.
