---
package: rjm
name: QA Report Categories
slug: qa-report-categories
kind: technique
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

# QA Report Categories

## Definition — verbatim
> "Option 4: QA Report Categories" — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ASSESSMENT-session-qa-validation-options.md | 74 | defined here | Evaluated and rejected as Option 4 in architectural assessment due to agent single-responsibility violations. |

## Consumes
Candidate QA evidence schemas and agent role definitions.

## Produces
Taxonomy of distinct report types tailored to different session intents.

## When applied
Considered during session protocol design to distinguish between code validation and research documentation.

## Sub-concepts
investigation-report, validation-report

## Part of
qa-validation

## Implementation status
defects: orphan, missing-path

## Design notes
QA Report Categories was a proposed mechanism in rjm to bifurcate QA outputs into specialized classes (e.g. "investigation reports" vs. "validation reports") so all sessions would produce QA artifacts. It was rejected in favor of explicit skip markers because asking the QA agent to evaluate research documentation diluted its primary focus on code quality and test execution.
