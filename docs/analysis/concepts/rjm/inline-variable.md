---
package: rjm
name: Inline Variable
slug: inline-variable
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Inline Variable

## Definition — verbatim
(used, not defined)

> "**Transformation**: one named, mechanical step (Extract Function, Inline Variable, Move Method). Each step has a known shape and a known safety check." — .claude/skills/software-engineering-library/references/refactoring.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 15 | used here | Cited as an example of a named, mechanical transformation step with a known shape and safety check. |

## Consumes
A redundant or non-communicative local variable assignment and its usages.

## Produces
Refactored code where variable usages are replaced directly with the assigned expression.

## When applied
Applied during refactoring when an intermediate variable does not add clarifying semantic value or impedes further extractions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction

## Design notes
A canonical Fowler refactoring transformation cited in rjm. It replaces a temporary variable with its underlying expression when the variable name provides no additional documentation value, simplifying local scope and preparing code for function extraction.
