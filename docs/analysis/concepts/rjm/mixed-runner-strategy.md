---
package: rjm
name: Mixed runner strategy
slug: mixed-runner-strategy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/devops/arm-runner-migration-analysis.md, sha256: c627ff100a42c17095b24e52adc39572afcf3cb52527d55a5114ab0cdba43530}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Mixed runner strategy

## Definition — verbatim
(used, not defined)

> "# Mixed runner strategy (if needed)" — .agents/devops/arm-runner-migration-analysis.md:216

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/devops/arm-runner-migration-analysis.md | 216 | used here | Proposed as a targeted rollback configuration allowing individual workflow jobs to execute on x64 while others run on ARM. |

## Consumes
Workflow job definitions with divergent platform requirements.

## Produces
Heterogeneous workflow runner configurations balancing cost optimization and architecture-specific compatibility.

## When applied
Applied when specific jobs within a multi-job workflow require legacy x64 dependencies while the remainder can execute on cost-effective ARM runners.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A CI/CD architectural pattern in rjm enabling granular, job-level runner selection within GitHub Actions workflows. It prevents all-or-nothing runner migrations by allowing compatible jobs to reap 37.5% ARM cost savings while preserving x64 runners for jobs with strict architecture constraints.
