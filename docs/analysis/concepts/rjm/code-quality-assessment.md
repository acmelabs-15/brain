---
package: rjm
name: Code Quality Assessment
slug: code-quality-assessment
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

# Code Quality Assessment

## Definition — verbatim
> "### 1. Code Quality Assessment" — .claude/skills/review/references/analyst.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/analyst.md | 76 | defined here | Focus area evaluating readability, consistency, and simplicity in code changes. |

## Consumes
Pull request code changes and local module contexts.

## Produces
Assessment of readability, pattern consistency, and implementation simplicity.

## When applied
Applied during analyst review to evaluate code readability and maintainability.

## Sub-concepts
none

## Part of
analyst

## Implementation status
clean

## Design notes
An analyst review focus area in rjm evaluating whether changed code is easy to read, consistent with repository idioms, and represents the simplest workable implementation.
