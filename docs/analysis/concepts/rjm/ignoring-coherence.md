---
package: rjm
name: Ignoring Coherence
slug: ignoring-coherence
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/pattern-mapping-guide.md, sha256: cbc82064f5e347105b11ee8eed31b6f2e1898088c0b52f8723177d2101c339ad}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Ignoring Coherence

## Definition — verbatim
> "### Ignoring Coherence" — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:258

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/pattern-mapping-guide.md | 258 | defined here | Anti-pattern subsection warning against decomposing coherent column families into multiple fragmented Strategy patterns. |

## Consumes
CVA matrices containing coherent product families across columns.

## Produces
Architectural guidance to utilize Abstract Factory instead of multiple isolated Strategy patterns to preserve domain cohesion.

## When applied
When reviewing pattern candidates for coherent column families to prevent fragmented multi-strategy architectures.

## Sub-concepts
none

## Part of
cva-matrix-pattern-mapping-guide

## Implementation status
clean

## Design notes
An architectural design mistake in CVA analysis where an architect breaks a tightly coherent family of operations into isolated Strategy patterns, losing domain cohesion and complicating client coordination when an Abstract Factory would preserve family integrity.
