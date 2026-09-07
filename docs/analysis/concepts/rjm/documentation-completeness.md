---
package: rjm
name: Documentation Completeness
slug: documentation-completeness
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/analyst.md, sha256: 8df3c3b39c6b4366fcc11dd6469ae406cc1883fa460ff846e20f9230866d8526}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Documentation Completeness

## Definition — verbatim
> "### 4. Documentation Completeness" — .claude/skills/review/references/analyst.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/analyst.md | 95 | defined here | Focus area evaluating PR descriptions, code comments, and documentation updates. |

## Consumes
PR description, inline code comments, and documentation files.

## Produces
Findings on missing comments, inadequate PR explanations, or out-of-date documentation.

## When applied
Applied during analyst review of pull requests.

## Sub-concepts
none

## Part of
analyst

## Implementation status
clean

## Design notes
An analyst review focus area in rjm checking whether a PR provides adequate explanatory descriptions, essential inline code comments, and necessary documentation updates.
