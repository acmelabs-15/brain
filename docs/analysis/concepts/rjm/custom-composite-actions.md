---
package: rjm
name: Custom Composite Actions
slug: custom-composite-actions
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

# Custom Composite Actions

## Definition — verbatim
> "### 8. Custom Composite Actions" — .claude/skills/review/references/devops.md:162

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 162 | defined here | Focus area checklist reviewing changes under `.github/actions/` for YAML validity, required keys (`name`, `description`, `runs`), documentation, input validation, and reuse. |

## Consumes
Composite action YAML definitions (`action.yml`) in `.github/actions/` and workflow consumer contracts.

## Produces
Review findings on structural correctness, missing schema properties, input validation gaps, and reusability opportunities.

## When applied
Applied during DevOps review whenever files under `.github/actions/` are created, updated, or refactored.

## Sub-concepts
none

## Part of
devops

## Implementation status
clean

## Design notes
A dedicated review checklist in rjm filling a critical tooling gap where external linters like actionlint exclude composite actions, ensuring custom composite actions have valid schemas, documented inputs/outputs, robust error handling, and high reusability across workflows.
