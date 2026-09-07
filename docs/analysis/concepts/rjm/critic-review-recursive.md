---
package: rjm
name: Critic Review (Recursive)
slug: critic-review-recursive
kind: gate
package_phase: rjm:verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Critic Review (Recursive)

## Definition — verbatim
> "- The critic evaluates completeness, correctness, and alignment with requirements" — docs/autonomous-issue-development.md:41

## Also called — verbatim
> "| 4a. Critic Review | Validate completeness | Critic | Approval or feedback |" — docs/autonomous-issue-development.md:146

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-issue-development.md | 39 | defined here | Sub-phase 4a specifying iterative review by the critic agent until full approval is achieved. |

## Consumes
Code implementation, issue description, acceptance criteria, and plan specification.

## Produces
Critic findings, required corrections, and final critic sign-off on completeness and correctness.

## When applied
First review stage in Phase 4 of autonomous issue development, preceding QA and Security reviews.

## Sub-concepts
none

## Part of
recursive-review-cycles

## Implementation status
defects: missing-path

## Design notes
The first gate in the recursive review cycle where an adversarial critic evaluates implementation completeness, logic correctness, and alignment with requirements, iterating until all concerns are resolved.
