---
package: rjm
name: Template Assessment
slug: template-assessment
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

# Template Assessment

## Definition — verbatim
> "### Template Assessment" — .claude/skills/review/references/devops.md:227

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 227 | defined here | Output section evaluating PR templates and issue templates as Adequate, Needs improvement, or Missing, and detailing specific template problems. |

## Consumes
Analysis of PR templates (`PULL_REQUEST_TEMPLATE.md`) and issue templates (`ISSUE_TEMPLATE/*`) changed in a pull request.

## Produces
A structured assessment block rating template adequacy and listing concrete structural or convention defects.

## When applied
Emitted in DevOps review reports when changes touch repository issue or pull request templates.

## Sub-concepts
none

## Part of
devops

## Implementation status
clean

## Design notes
A standardized output section in rjm's DevOps review reports that tracks the clarity and completeness of project templates, ensuring repository guidelines effectively direct contributors during issue creation and pull request submission.
