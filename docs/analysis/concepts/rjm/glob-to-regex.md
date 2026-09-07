---
package: rjm
name: glob_to_regex
slug: glob-to-regex
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/steering-matcher/get_applicable_steering.py, sha256: 15f73361277478c085d40035d5f99242107d46f25f493fce2a26c5870a6835b8}
  - {path: .claude/skills/steering-matcher/scripts/get_applicable_steering.py, sha256: 8c5e992f69084b1f8530605061fcee606e41fd8d9bc17905d1930950764f6a53}
  - {path: scripts/validation/instruction_budget_globs.py, sha256: 988a5b5ad39b3ed1644bcd5eeeae7b0f22ae5660a085a17205dda1cfc594a0d1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# glob_to_regex

## Definition — verbatim
(used, not defined)

> "def glob_to_regex(pattern: str) -> str:" — .claude/skills/steering-matcher/get_applicable_steering.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/steering-matcher/get_applicable_steering.py | 19 | defined here | Converts a glob pattern to a regular expression for matching file paths against steering rules. |
| .claude/skills/steering-matcher/scripts/get_applicable_steering.py | 21 | defined here | Converts a glob pattern with globstar placeholders to a compiled regular expression. |
| scripts/validation/instruction_budget_globs.py | 274 | defined here | Compiles an applyTo glob pattern into an anchored regex following VS Code pattern rules. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, other, script-bug, exit-code-mismatch

## Design notes
`glob_to_regex` is a Python utility function implemented across multiple scripts to convert filesystem glob patterns into regular expressions rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
