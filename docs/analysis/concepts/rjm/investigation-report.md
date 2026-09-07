---
package: rjm
name: investigation report
slug: investigation-report
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ASSESSMENT-session-qa-validation-options.md, sha256: aa0addafd86d94a96103609af0a4d8879cbe3b4ef76eb51d8d89b36ae6d138c4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# investigation report

## Definition — verbatim
> "Expands QA agent to produce \"investigation report\" instead of \"validation report\"." — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ASSESSMENT-session-qa-validation-options.md | 76 | defined here | Proposed as a candidate QA deliverable for research-only sessions under Option 4. |

## Consumes
Research notes, spike findings, and architectural analyses.

## Produces
Documented summary of research outcomes formatted as a QA deliverable.

## When applied
Evaluated during session protocol assessment as an alternative to exempting non-code sessions.

## Sub-concepts
none

## Part of
qa-report-categories

## Implementation status
defects: orphan, missing-path

## Design notes
An investigation report was a hypothetical artifact considered in rjm's architectural assessments that would have required the QA agent to review and summarize research and documentation findings. The proposal was rejected because research documentation falls under the analyst agent's domain, making QA investigation reports an unnecessary role distortion.
