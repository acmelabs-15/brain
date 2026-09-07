---
package: rjm
name: Pipeline Impact Assessment
slug: pipeline-impact-assessment
kind: artifact
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

# Pipeline Impact Assessment

## Definition — verbatim
> "### Pipeline Impact Assessment" — .claude/skills/review/references/devops.md:203

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 203 | defined here | Output section format providing a structured impact table evaluating changes across Build, Test, Deploy, and Cost on a None/Low/Medium/High scale. |

## Consumes
DevOps review findings, pull request diffs, and pipeline configuration changes.

## Produces
A structured Markdown summary table rating the operational and cost impacts of changes on Build, Test, Deploy, and Cost with accompanying notes.

## When applied
Emitted as a mandatory output section in DevOps review reports.

## Sub-concepts
none

## Part of
devops

## Implementation status
clean

## Design notes
A structured review deliverable in rjm that quantifies the operational impact of proposed code and workflow modifications across build stability, test execution duration, deployment velocity, and runner infrastructure costs.
