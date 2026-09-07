---
package: rjm
name: Premature Strategy
slug: premature-strategy
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

# Premature Strategy

## Definition — verbatim
> "| Premature Strategy | Row has only 1 cell filled | Wait for more cases before abstracting |" — .claude/skills/cva-analysis/references/gof-pattern-selection.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 60 | defined here | Listed in Common Mistakes as applying the Strategy pattern when a matrix row has only 1 cell filled. |

## Consumes
CVA matrix drafts containing single-implementation commonality rows.

## Produces
Architecture feedback directing developers to remove premature interfaces and defer Strategy extraction until multiple variants emerge.

## When applied
When evaluating CVA matrices during pattern selection to prevent speculative algorithm encapsulation.

## Sub-concepts
none

## Part of
gof-pattern-selection-from-cva-results

## Implementation status
defects: missing-path

## Design notes
A design anti-pattern warned against in rjm where developers introduce an interface and Strategy pattern for a capability with only a single implementation, incurring architectural indirection and boilerplate without genuine variability.
