---
package: rjm
name: Inheritance instead of delegation
slug: inheritance-instead-of-delegation
kind: pattern
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

# Inheritance instead of delegation

## Definition — verbatim
> "| Inheritance instead of delegation | \"Is-a\" used for specialization | Use Strategy (delegation) for varying behavior |" — .claude/skills/cva-analysis/references/gof-pattern-selection.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 62 | defined here | Listed in Common Mistakes as misusing "is-a" subclassing for behavioral variation rather than delegating to a Strategy. |

## Consumes
Object hierarchy designs with deep or rigid inheritance trees modeling behavioral variations.

## Produces
Refactoring recommendations converting inheritance specialization into object composition and Strategy delegation.

## When applied
When code reviews uncover class hierarchies that extend base classes solely to vary execution algorithms or policy rules.

## Sub-concepts
none

## Part of
gof-pattern-selection-from-cva-results

## Implementation status
defects: missing-path

## Design notes
A classic anti-pattern flagged throughout rjm's engineering library where developers employ class inheritance to achieve behavioral variability; subclassing binds behavior statically at compile time, leading to combinatorial subclass explosion where runtime composition via Strategy delegation is required.
