---
package: rjm
name: verbatim-duplication noise pattern
slug: verbatim-duplication-noise-pattern
kind: pattern
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

# verbatim-duplication noise pattern

## Definition — verbatim
> "verbatim-duplication noise pattern (Issue #2480)." — .claude/skills/review/references/analyst.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/analyst.md | 70 | defined here | Defines the noise pattern caused by multiple review axes reporting the same issues. |

## Consumes
Multi-agent review outputs across parallel review axes.

## Produces
Strict non-overlap discipline and empty findings lists when no domain-specific defects exist.

## When applied
Applied during multi-axis PR review to prevent cross-axis duplication.

## Sub-concepts
none

## Part of
scope-and-non-overlap

## Implementation status
clean

## Design notes
An anti-pattern in multi-agent code reviews where parallel review personas emit redundant or verbatim identical findings on the same underlying code changes, addressed in rjm via strict non-overlap boundary rules.
