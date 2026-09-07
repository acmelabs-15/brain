---
package: rjm
name: SPARC Methodology
slug: sparc-methodology
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-flow-architecture-analysis.md, sha256: dedfb8e1eb8418c8ffcc60cecc4947e4fe5c913d95f2b49bc81b06edef6aadb5}
  - {path: .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md, sha256: 82e2ecb7c8ae53abc174de2e100a947a9d28c0bafb8bcc7fc9861eda5547a846}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SPARC Methodology

## Definition — verbatim
> "SPARC (Specification, Pseudocode, Architecture, Refinement, Completion)" — .agents/analysis/claude-flow-architecture-analysis.md:80

## Also called — verbatim
> "Research into [ruvnet/claude-flow](https://github.com/ruvnet/claude-flow) revealed the SPARC methodology:" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:31

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-flow-architecture-analysis.md | 15 | defined here | Identified as a structured 5-phase development methodology with 17 specialized development modes. |
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 31 | used here | Cites SPARC as the external architectural inspiration for establishing explicit quality gates between phases. |

## Consumes
User requirements, system constraints, and software specifications.

## Produces
Staged development outputs across Specification, Pseudocode, Architecture, Refinement, and Completion phases.

## When applied
Applied across the software development lifecycle to govern phased progression and enforce automated evaluation gates.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
A structured 5-phase development methodology (Specification, Pseudocode, Architecture, Refinement, Completion) researched from claude-flow that inspired rjm's evaluator-optimizer quality gates and bounded refinement cycles in ADR-010.
