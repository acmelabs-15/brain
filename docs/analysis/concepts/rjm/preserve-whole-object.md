---
package: rjm
name: Preserve Whole Object
slug: preserve-whole-object
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

# Preserve Whole Object

## Definition — verbatim
(used, not defined)

> "Suggests Introduce Parameter Object or Preserve Whole Object." — .claude/skills/software-engineering-library/references/refactoring.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 53 | used here | Suggested as a refactoring transformation to resolve Long Parameter List smells. |

## Consumes
Method calls where multiple individual fields are extracted from an existing object and passed separately.

## Produces
Simplified method calls accepting the whole object directly instead of its disassembled parts.

## When applied
Applied when multiple parameters passed to a method are derived from the same source object.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Preserve Whole Object is a refactoring technique in rjm that simplifies parameter lists. Instead of extracting multiple individual properties from an existing domain object and passing them into a function as separate primitive arguments, the caller passes the whole object. This eliminates redundant parameter unpacking, tightens caller code, and ensures future changes to the required object fields do not break the method signature.
