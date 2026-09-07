---
package: rjm
name: GitHub Templates
slug: github-templates
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

# GitHub Templates

## Definition — verbatim
> "### 9. GitHub Templates" — .claude/skills/review/references/devops.md:173

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 173 | defined here | Focus area checklist reviewing pull request and issue templates for actionable guidance, contributor context, triage clarity, and convention consistency. |

## Consumes
Pull request templates (`.github/PULL_REQUEST_TEMPLATE.md`) and issue templates under `.github/ISSUE_TEMPLATE/`.

## Produces
Evaluations and improvement recommendations ensuring templates provide clear contributor guidance and capture required triage context without becoming overwhelming.

## When applied
Applied during DevOps review when contributor guidance or issue/PR templates are introduced or modified.

## Sub-concepts
none

## Part of
devops

## Implementation status
clean

## Design notes
A review checklist governing GitHub issue and pull request templates, ensuring that templates guide contributors to provide necessary reproduction and design context while maintaining manageable, actionable checklist structures.
