---
package: rjm
name: Documentation Audit
slug: documentation-audit
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Documentation Audit

## Definition — verbatim
> "Inspect documentation structure and quality:" — .claude/skills/dx-review/SKILL.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 119 | defines | Defined as Step 4 of the audit process assessing documentation quality, completeness, and searchability. |

## Consumes
Documentation websites, markdown files, search query results, code snippets, and language/framework guides.

## Produces
A Documentation dimension score (0-10), information architecture observations, and sample code completeness evaluations.

## When applied
Executed as Step 4 of dx-review to evaluate clarity, findability, and example validity across documentation.

## Sub-concepts
none

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
Step 4 of rjm's dx-review audit procedure that evaluates documentation usability. It tests search efficacy, verifies whether code examples can be copy-pasted and executed directly, and evaluates structural information architecture.
