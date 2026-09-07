---
package: rjm
name: efficacy testing
slug: efficacy-testing
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-023-debate-log.md, sha256: f199ea3783f0e058dc4704243dd7f91d0f4a44c0437d4bff41bf2731a65f9013}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# efficacy testing

## Definition — verbatim
> "| P1 | No efficacy testing (tests cannot verify AI detection works) |" — .agents/critique/ADR-023-debate-log.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-023-debate-log.md | 65 | defined here | Raised by Security agent as a P1 issue because static tests cannot verify AI detection capabilities. |

## Consumes
Prompt modifications, evaluation scenario datasets, ground-truth vulnerability samples.

## Produces
Empirical accuracy metrics and detection rates verifying whether an AI agent performs its intended task.

## When applied
Required when validating AI prompt behavioral changes (under ADR-057) to verify that changes actually catch target issues.

## Sub-concepts
golden-test-corpus

## Part of
adr-023

## Implementation status
defects: internal-contradiction

## Design notes
Efficacy testing is an AI evaluation technique in rjm that tests whether an agent or prompt instruction actually performs its intended detection or reasoning task at runtime. It stands in contrast to structural prompt testing by executing real inputs against LLMs and scoring output accuracy.
