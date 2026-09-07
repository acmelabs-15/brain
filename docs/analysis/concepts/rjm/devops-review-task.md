---
package: rjm
name: DevOps Review Task
slug: devops-review-task
kind: role
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

# DevOps Review Task

## Definition — verbatim
> "# DevOps Review Task" — .claude/skills/review/references/devops.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 8 | defined here | Document title and role prompt heading defining the review task for CI/CD, build pipelines, and infrastructure. |

## Consumes
Pull request diff touching GitHub Actions workflows, build scripts, composite actions, or deployment configurations.

## Produces
DevOps review findings, scope classifications, build impact assessments, and a review verdict (PASS, WARN, CRITICAL_FAIL).

## When applied
During Stage-2 pull request review whenever changes alter CI/CD workflows, build pipelines, shell scripts, or infrastructure definitions.

## Sub-concepts
pr-scope-detection, build-pipeline-impact, ci-cd-configuration

## Part of
review

## Implementation status
clean

## Design notes
A Stage-2 canonical review axis in rjm evaluating CI/CD workflows, build pipelines, and automation infrastructure for risks that deterministic linters (actionlint, shellcheck) cannot detect.
