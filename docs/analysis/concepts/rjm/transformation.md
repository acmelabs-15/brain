---
package: rjm
name: Transformation
slug: transformation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Transformation

## Definition — verbatim
> "Convert or process data" — .claude/skills/skillforge/references/script-integration-framework.md:80

## Also called — verbatim
> "one named, mechanical step (Extract Function, Inline Variable, Move Method). Each step has a known shape and a known safety check." — .claude/skills/software-engineering-library/references/refactoring.md:15

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-integration-framework.md | 80 | defined here | Defines Transformation as a script category for format conversion and data cleaning. |
| .claude/skills/software-engineering-library/references/refactoring.md | 15 | defined here | Defines Transformation as a single named, mechanical behavior-preserving refactoring step. |

## Consumes
Input data, raw formats, or unrefactored code units with characterization tests.

## Produces
Converted/cleaned data formats or restructured code units preserving observable behavior.

## When applied
When converting data formats (e.g. JSON to YAML), cleaning inputs, or executing discrete mechanical refactoring steps.

## Sub-concepts
none

## Part of
script-categories, refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Represents deterministic, rule-based restructuring of information or code without changing semantics or observable behavior, whether converting data payloads between formats in skill scripts or executing named mechanical steps in code refactoring.
