---
package: rjm
name: CI-feedback sub-loop
slug: ci-feedback-sub-loop
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a872352c2c57ff59c7db1238910b6685b800ab8a3e8fa9e37a76418d467df471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CI-feedback sub-loop

## Definition — verbatim
> "|CI-feedback sub-loop: cluster, ladder build->test->review->ship. See `.agents/governance/CI-FEEDBACK-SUBLOOP.md`" — AGENTS.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 38 | defined here | Policy instructing agents to triage and cluster CI failures into a staged progression across build, test, review, and ship. |

## Consumes
Continuous integration failure logs, test error reports, and workflow failure summaries.

## Produces
Clustered error groupings and sequential remediation passes through the lifecycle phases.

## When applied
Triggered when automated CI checks or workflow runs fail on a pull request.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An error recovery pattern in rjm that organizes CI failure resolution into a structured sequence (clustering failures, then addressing them through the build->test->review->ship phases) to prevent fragmented, thrashing remediation attempts.
