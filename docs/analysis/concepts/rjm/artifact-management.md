---
package: rjm
name: Artifact Management
slug: artifact-management
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Artifact Management

## Definition — verbatim
> "### 5. Artifact Management" — .claude/skills/review/references/devops.md:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 136 | defined here | Focus area checklist verifying correct artifact upload/download mechanisms, appropriate retention periods, collision prevention, and exclusion of sensitive data. |

## Consumes
Pipeline workflow definitions executing artifact upload (`actions/upload-artifact`) and download (`actions/download-artifact`) actions.

## Produces
Review assessments and defect findings addressing artifact retention, storage consumption, naming collisions, and credential leakage risks.

## When applied
Applied during DevOps review of workflow PRs that upload, download, or manage CI/CD build and test artifacts.

## Sub-concepts
none

## Part of
devops

## Implementation status
clean

## Design notes
A review checklist in rjm dedicated to verifying that CI/CD pipelines handle build and test artifacts securely and efficiently, ensuring retention limits prevent storage cost overruns and preventing accidental leakage of sensitive files or environment dumps.
