---
package: rjm
name: Maintainability Assessment
slug: maintainability-assessment
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Maintainability Assessment

## Definition — verbatim
> "### Maintainability Assessment" — .claude/skills/review/references/code-quality.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/code-quality.md | 94 | defined here | Section heading for the 1-5 rating table evaluating cohesion, coupling, encapsulation, testability, non-redundancy, and scoped cleanup. |

## Consumes
Code quality inspection of changed files across structural quality dimensions.

## Produces
A structured markdown table evaluating six maintainability qualities on a 1-5 scale with qualitative notes.

## When applied
When structuring the output report of a code quality review.

## Sub-concepts
overall-maintainability-score

## Part of
code-quality

## Implementation status
defects: doc-drift, other

## Design notes
A structured evaluation table in rjm's code quality review that scores six maintainability qualities on a 1-5 scale, systematically quantifying codebase maintainability and Boy Scout cleanup.
