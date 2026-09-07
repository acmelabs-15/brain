---
package: rjm
name: UPPER_CASE
slug: upper-case
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# UPPER_CASE

## Definition — verbatim
> "Constants, environment variables" — .claude/skills/taste-lints/SKILL.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/SKILL.md | 56 | defined here | Naming convention rule requiring constants and environment variables to use uppercase naming across all languages. |

## Consumes
Variable, constant, and environment variable declarations in source code.

## Produces
Standardized, visually distinct identifiers for immutable configuration values and environment variables.

## When applied
Applied when declaring constants or referencing environment variables across all programming languages.

## Sub-concepts
none

## Part of
taste-invariants

## Implementation status
defects: doc-drift

## Design notes
A naming convention pattern requiring uppercase snake case for constants and environment variables to distinguish global and immutable configuration elements from mutable local state.
