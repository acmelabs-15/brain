---
package: rjm
name: Required Checklist
slug: required-checklist
kind: checklist
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Required Checklist

## Definition — verbatim
> "Before marking complete:" — templates/agents/implementer.shared.md:780

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/implementer.shared.md | 778 | defines | Mandatory 7-point checklist that implementers must satisfy before marking work complete and handing off. |

## Consumes
Completed code, test execution results, commit history.

## Produces
Verified completion status across design goals, patterns, qualities, principles, unit tests, performance, and conventional commits.

## When applied
Evaluated immediately before an implementer marks a task complete.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
A mandatory verification checklist covering design goals, problem patterns, quality attributes, architectural principles, passing unit tests, performance documentation, and conventional commits, preventing premature completion claims.
