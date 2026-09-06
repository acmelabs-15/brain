---
package: addy
name: "divergent and convergent thinking"
slug: divergent-and-convergent-thinking
kind: technique
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/idea-refine.md, sha256: 25fd41be4f76578f192d00aa50488dc022f4229eefbd6f8ad3c866c034772b91}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# divergent and convergent thinking

## Definition — verbatim
(used, not defined)

> "structured divergent and convergent thinking. Stress-test assumptions and expand options before converging on one." — external/idea-refine.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/idea-refine.md | 5 | used here | Describes the core mental model of the idea-refine skill for expanding problem space before narrowing down to a focused concept. |

## Consumes
Raw ideas, initial feature requests, problem statements, and unexplored assumptions.

## Produces
Refined product concepts, stress-tested assumptions, and prioritized feature options.

## When applied
Used during the Define phase when exploring and refining vague ideas before committing to formal specifications.

## Sub-concepts
none

## Part of
idea-refine

## Implementation status
defects: doc-drift

## Design notes
In Addy's methodology, this technique prevents premature convergence on suboptimal initial ideas. By explicitly structuring the process into an expansive divergent phase followed by a rigorous convergent filter, the agent avoids anchoring on the first solution that comes to mind.
