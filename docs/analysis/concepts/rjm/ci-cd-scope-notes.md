---
package: rjm
name: CI/CD Scope Notes
slug: ci-cd-scope-notes
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

# CI/CD Scope Notes

## Definition — verbatim
> "### CI/CD Scope Notes" — .claude/skills/review/references/devops.md:212

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 212 | defined here | Output section format recording build- and pipeline-specific risks that are not owned by other Stage-2 review axes or deterministic CI gates. |

## Consumes
Identified pipeline-specific risks, file and line citations, and risk impact descriptions.

## Produces
A structured table documenting unowned pipeline risks with columns for Area, Evidence (`file:line`), and Risk.

## When applied
Emitted in DevOps review reports when build/pipeline risks not covered by other axes or deterministic gates are identified; omitted when no such risks exist.

## Sub-concepts
none

## Part of
devops

## Implementation status
clean

## Design notes
A dedicated reporting section in rjm's DevOps review output that records pipeline-specific risks (such as composite action bugs or runner-specific path leaks) that are strictly outside the scope of general security and QA linters, enforcing non-overlapping review responsibilities.
