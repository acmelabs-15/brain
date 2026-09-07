---
package: rjm
name: Pattern Forcing
slug: pattern-forcing
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

# Pattern Forcing

## Definition — verbatim
> "### Pattern Forcing" — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:248

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/pattern-mapping-guide.md | 248 | defined here | Anti-pattern subsection warning against deciding on a design pattern before analyzing the CVA matrix. |

## Consumes
Architectural proposals and design discussions where patterns are pre-selected prior to empirical domain analysis.

## Produces
Analysis corrective action mandating construction of the CVA matrix first so that pattern selection emerges from domain evidence.

## When applied
Identified during architecture reviews when engineers attempt to impose pre-chosen design patterns without matrix justification.

## Sub-concepts
none

## Part of
cva-matrix-pattern-mapping-guide

## Implementation status
clean

## Design notes
An architectural anti-pattern in rjm where an engineering team selects and commits to a design pattern before analyzing domain requirements, violating the principle that design patterns must emerge from the structural facts of a CVA matrix.
