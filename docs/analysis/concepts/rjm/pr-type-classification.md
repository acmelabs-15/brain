---
package: rjm
name: PR Type Classification
slug: pr-type-classification
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PR Type Classification

## Definition — verbatim
> "### PR Type Classification (REQUIRED)" — .claude/skills/review/references/qa.md:159

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/qa.md | 159 | defined here | Mandatory output section declaring the detected pull request type (CODE, WORKFLOW, CONFIG, DOCS, or MIXED) and changed files. |

## Consumes
Pull request diffs and file categorization patterns (CODE, WORKFLOW, CONFIG, DOCS, MIXED).

## Produces
A standardized Markdown block declaring `PR TYPE: [category]` and `FILES: [list of changed files by category]`.

## When applied
Emitted as the first required section of analysis output in every QA review report.

## Sub-concepts
none

## Part of
qa-review

## Implementation status
clean

## Design notes
A mandatory output artifact in rjm's QA review reports that records the explicit categorization of a pull request, ensuring transparent scoping of which quality gates and testing requirements apply to the diff.
