---
package: rjm
name: Reducing False Positives
slug: reducing-false-positives
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Reducing False Positives

## Definition — verbatim
> "## Reducing False Positives" — .claude/agents/silent-failure-hunter.md:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/silent-failure-hunter.md | 145 | defined here | Section defining legitimate exemption categories for broad catches and unlogged fallbacks. |
| templates/agents/silent-failure-hunter.shared.md | 155 | defined here | Shared template section defining false-positive reduction criteria. |

## Consumes
Candidate defect findings generated during silent failure audits.

## Produces
Filtering of invalid defect flags by validating legitimate engineering exemptions before reporting findings.

## When applied
Applied prior to finalizing review output to verify that flagged error handlers do not qualify for valid operational exemptions.

## Sub-concepts
cleanup-best-effort-paths, explicitly-optional-operations, boundary-translation

## Part of
review-process

## Implementation status
defects: other

## Design notes
Reducing False Positives is an analytical framework providing explicit criteria to distinguish legitimate engineering exemptions (cleanup paths, optional operations, boundary translations) from genuine silent failures, preventing reviewer noise.
