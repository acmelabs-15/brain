---
package: rjm
name: Expected Patterns (Do NOT Flag)
slug: expected-patterns-do-not-flag
kind: name-only
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Expected Patterns (Do NOT Flag)

## Definition — verbatim
(used, not defined)

> "## Expected Patterns (Do NOT Flag)" — .claude/skills/review/references/security.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/security.md | 58 | defined here | Section heading enumerating acceptable code patterns that must not trigger security warnings. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
security

## Implementation status
defects: internal-contradiction (.claude/skills/review/references/security.md:233)

## Design notes
`Expected Patterns (Do NOT Flag)` is a section heading in the security review reference detailing acceptable code patterns (such as mock credentials in tests) that should be exempted from warnings, classified as `kind: name-only` per D-023.
