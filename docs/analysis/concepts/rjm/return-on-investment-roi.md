---
package: rjm
name: Return on Investment (ROI)
slug: return-on-investment-roi
kind: technique
package_phase: rjm:spec
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

# Return on Investment (ROI)

## Definition — verbatim
(used, not defined)

> "- Return on Investment (ROI): Consider effort required vs. value delivered" — docs/autonomous-issue-development.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-issue-development.md | 22 | used here | Specified as a key evaluation criterion during issue discovery to weigh implementation effort against value delivered. |

## Consumes
Candidate backlog issues, estimated implementation effort, and expected project value.

## Produces
Prioritization scoring used to select the single highest-value issue for autonomous implementation.

## When applied
Applied during Phase 1 (Issue Discovery and Prioritization) when triaging priority-labeled issues.

## Sub-concepts
none

## Part of
autonomous-issue-development-prompt

## Implementation status
defects: missing-path

## Design notes
Return on Investment (ROI) serves as a selection heuristic during autonomous issue discovery, guiding agents to pick backlog items that maximize value delivery relative to estimated implementation effort.
