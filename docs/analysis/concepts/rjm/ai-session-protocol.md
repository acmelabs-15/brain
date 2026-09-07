---
package: rjm
name: ai-session-protocol
slug: ai-session-protocol
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/metrics/workflow-coalescing.md, sha256: 652beeb96b38bcfc8b9103ece1e6a599327303a9ee9778a60dda87ace3b3048d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ai-session-protocol

## Definition — verbatim
(used, not defined)
> "- `ai-session-protocol`" — .agents/metrics/workflow-coalescing.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/workflow-coalescing.md | 44 | used here | Listed in the coalescing metrics report as one of the monitored AI-powered GitHub Actions workflows. |

## Consumes
Agent session transcripts and CI trigger events.

## Produces
Verification of adherence to AI session protocol standards and commit metadata requirements.

## When applied
Triggered during pull request CI validation runs.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
ai-session-protocol is an automated CI workflow and gate that validates AI agent session transcripts and governance protocols on PR submissions, monitored for execution coalescing during rapid commit bursts.
