---
package: rjm
name: Separate Use from Creation Rule
slug: separate-use-from-creation-rule
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

# Separate Use from Creation Rule

## Definition — verbatim
> "## The Separate Use from Creation Rule" — .claude/skills/cva-analysis/references/gof-pattern-selection.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 46 | defined here | Core object-oriented design rule stating that a class either creates an object or uses it, never both. |

## Consumes
Object-oriented class structures, dependency graphs, factory and client architectures.

## Produces
Strict architectural boundary between Factory classes (creational perspective) and client consumers (usage perspective).

## When applied
Applied whenever designing classes that depend on polymorphic components or families of related objects.

## Sub-concepts
none

## Part of
gof-pattern-selection-from-cva-results

## Implementation status
defects: missing-path

## Design notes
A fundamental object-oriented design rule in rjm stating "A makes B, or A uses B. Never both." Conflating object creation with business logic couples consumers to concrete instantiations, undermining dependency injection, unit testing, and polymorphic flexibility.
