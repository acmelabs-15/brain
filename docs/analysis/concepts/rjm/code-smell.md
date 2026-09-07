---
package: rjm
name: Code smell
slug: code-smell
kind: pattern
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

# Code smell

## Definition — verbatim
> "**Code smell**: a surface symptom in the code that suggests a deeper structural problem. Smells are hints, not verdicts." — .claude/skills/software-engineering-library/references/refactoring.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 14 | defined here | Defined in refactoring definitions as a surface symptom in the code suggesting a deeper structural problem. |

## Consumes
none

## Produces
none

## When applied
Identified during code inspection and review to locate candidates for structural refactoring.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction

## Design notes
Diagnostic indicators in rjm's refactoring library indicating potential design weaknesses (such as Long Function, Primitive Obsession, or Feature Envy). Smells serve as triggers for targeted investigation and mechanical transformations rather than automatic mandates.
