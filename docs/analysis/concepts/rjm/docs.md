---
package: rjm
name: DOCS
slug: docs
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DOCS

## Definition — verbatim
(used, not defined)

> "| DOCS |" — .claude/skills/review/references/devops.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 54 | defined here | PR scope category for non-GitHub markdown and text files indicating no DevOps review is required. |
| .claude/skills/review/references/qa.md | 59 | defined here | PR type category designating documentation files exempt from test coverage requirements. |
| docs/workflow-commands.md | 122 | defined here | PR classification category in /test command specifying documentation-only pull requests. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
A pull request scope categorization label designating documentation-only modifications exempt from executable test and CI review gates, classified as `kind: name-only` per D-023.
