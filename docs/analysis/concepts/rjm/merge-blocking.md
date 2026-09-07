---
package: rjm
name: MERGE BLOCKING
slug: merge-blocking
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MERGE BLOCKING

## Definition — verbatim
> "> **Decision Point**: MERGE BLOCKING" — .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 6 | defined here | Defined as the definitive review verdict indicating that PR #60 must not merge due to critical vulnerabilities and test gaps. |

## Consumes
Agent review verdicts, unresolved vulnerability reports, and unfulfilled prerequisites.

## Produces
A binding rejection signal blocking PR integration into the target repository branch.

## When applied
Triggered whenever any specialized review agent identifies critical vulnerabilities, broken contracts, or missing verification gates.

## Sub-concepts
none

## Part of
review-verdicts

## Implementation status
defects: cross-file-contradiction, internal-contradiction (.agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:56, 94)

## Design notes
`MERGE BLOCKING` serves as an unbypassable gate status in rjm review workflows, guaranteeing that pull requests containing severe architectural, security, or testing defects cannot proceed until all mandatory conditions are resolved.
