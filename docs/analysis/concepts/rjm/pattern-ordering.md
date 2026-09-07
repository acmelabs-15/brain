---
package: rjm
name: Pattern Ordering
slug: pattern-ordering
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

# Pattern Ordering

## Definition — verbatim
> "## Pattern Ordering (instantiation is a late decision)" — .claude/skills/cva-analysis/references/gof-pattern-selection.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 24 | defined here | Prescribes pattern selection sequence: Bridge first, Strategy next, Adapter/Facade as needed, Factory last. |

## Consumes
Identified GoF pattern candidates from CVA matrix analysis.

## Produces
Sequenced architecture implementation plan resolving structural hierarchy and algorithm encapsulation before deciding instantiation mechanisms.

## When applied
When transitioning from CVA findings to system architecture and object design.

## Sub-concepts
none

## Part of
gof-pattern-selection-from-cva-results

## Implementation status
defects: missing-path

## Design notes
An architectural sequencing rule rooted in Christopher Alexander's principle that instantiation is a late decision; developers must first define and decouple structural hierarchies (Bridge) and varying algorithms (Strategy) before designing creational mechanisms (Factory), avoiding premature object lifecycle binding.
