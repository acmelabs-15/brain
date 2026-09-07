---
package: rjm
name: All Variability (Reconsider Scope)
slug: all-variability-reconsider-scope
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/matrix-building-examples.md, sha256: b35b45be548e503e2ead370599be57167c7ff1d6100a3eef5378be3977052b69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# All Variability (Reconsider Scope)

## Definition — verbatim
> "## Edge Case: All Variability (Reconsider Scope)" — .claude/skills/cva-analysis/references/matrix-building-examples.md:364

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/matrix-building-examples.md | 364 | defined here | Edge case analysis showing that when every cell in a CVA matrix varies, no commonality exists and scope must be re-evaluated. |

## Consumes
CVA matrices where every cell differs across use cases (zero commonality).

## Produces
Scope re-evaluation decision directing the partitioning of the problem into separate bounded contexts or independent workflows.

## When applied
Encountered when attempting to analyze disparate use cases within a single matrix and finding no shared behavior.

## Sub-concepts
none

## Part of
cva-matrix-building-examples-net-focus

## Implementation status
clean

## Design notes
An edge-case diagnostic boundary in rjm's CVA methodology: if an analysis results in a matrix where every cell varies across columns, there is no shared commonality to support an abstraction; attempting to force an abstraction creates an artificial and brittle hierarchy, so the scope must be split instead.
