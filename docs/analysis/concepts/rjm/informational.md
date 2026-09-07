---
package: rjm
name: INFORMATIONAL
slug: informational
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/technical-guardrails.md, sha256: 16099b0af1bf37a012414b8430666217cbbc6e88c05a45ffc3c2e3f5d14b900d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# INFORMATIONAL

## Definition — verbatim
> "3. **Review Comment Status** (INFORMATIONAL)" — docs/technical-guardrails.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/technical-guardrails.md | 110 | defined here | Non-blocking PR validation category providing thread counts and security flags in PR review comments. |

## Consumes
Pull request review comment threads and status data.

## Produces
Non-blocking informational messages posted to PR comments summarizing unresolved review threads.

## When applied
Evaluated during CI PR validation workflow execution on pull request events.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
The lowest-severity CI PR validation tier in rjm, reporting informational diagnostics (such as review thread counts) that guide developers without blocking merges or triggering non-zero exit codes.
