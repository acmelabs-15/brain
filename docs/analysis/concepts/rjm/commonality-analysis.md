---
package: rjm
name: Commonality analysis
slug: commonality-analysis
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md, sha256: 4a86a3ee91148a5880b2869964e16797165c46953558c23a4d197f96bd467903}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Commonality analysis

## Definition — verbatim
> "Commonality analysis discovers the natural abstractions in a domain." — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md | 14 | defined here | Defined as the discovery of natural domain abstractions across problem requirements. |

## Consumes
Multiple concrete use cases and requirements.

## Produces
Abstract types and domain concepts that form the rows of the CVA matrix.

## When applied
Conducted first in CVA before variability analysis to establish the domain frame of reference.

## Sub-concepts
none

## Part of
multi-paradigm-design

## Implementation status
defects: missing-path

## Design notes
Commonality analysis is the foundational step of CVA that identifies what remains constant across different requirements, deriving abstract domain types that form the basis for pattern discovery.
