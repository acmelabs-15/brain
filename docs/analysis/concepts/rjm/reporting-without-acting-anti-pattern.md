---
package: rjm
name: Reporting-Without-Acting Anti-Pattern
slug: reporting-without-acting-anti-pattern
kind: pattern
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md, sha256: ee5cb9a3172bd724519fa305997ae2d7cff5bc6b983194995c5651bb50d21d3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Reporting-Without-Acting Anti-Pattern

## Definition — verbatim
(used, not defined)

> "Reporting-Without-Acting Anti-Pattern" — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md | 29 | used here | Identifies the failure mode where audit outputs assert state rather than executing tools to measure it |

## Consumes
Agent execution traces, audit reports, and completion checklists.

## Produces
False-positive completion assertions that repeat identical unverified results across retries.

## When applied
Relevant during review gate analysis and retrospective reviews of automated agent workflows.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, other

## Design notes
The Reporting-Without-Acting Anti-Pattern occurs when an agent generates reports claiming a desired state has been achieved instead of executing verification tools to measure reality. In rjm's governance, recognizing this failure mode led to the mandatory requirement for executable verification gates.
