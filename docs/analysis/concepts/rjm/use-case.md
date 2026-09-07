---
package: rjm
name: use case
slug: use-case
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# use case

## Definition — verbatim
> "A use case is one named operation the application performs: `OpenSession`, `RecordHandoff`, `ApproveAgentRun`, `MergeReviewedPullRequest`. Each use case is a thin orchestrator that loads entities, calls their methods, and persists the result." — .claude/skills/software-engineering-library/references/clean-architecture.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 69 | defined here | Single named application operation orchestrating entities, abstract ports, and transaction boundaries. |

## Consumes
Domain entities, abstract ports, input requests.

## Produces
Orchestrated entity operations, transactional commits, and business outcomes.

## When applied
Applied when a request crosses multiple entities, requires transaction boundaries, or is invoked across multiple entry points.

## Sub-concepts
unit-of-work, abstract-ports

## Part of
use-cases

## Implementation status
clean

## Design notes
A use case represents an individual, named business operation executed on behalf of a user or agent. In rjm, structuring workflows into explicit use cases ensures operations like session opening and run approval are transactional, testable without frameworks, and shared across CLI and agent entry points.
