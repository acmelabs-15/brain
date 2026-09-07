---
package: rjm
name: snake_case
slug: snake-case
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# snake_case

## Definition — verbatim
(used, not defined)

> "Python files, functions, variables" — .claude/skills/taste-lints/SKILL.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 45 | used here | Contract specification requiring event payloads to use snake_case keys. |
| .claude/skills/taste-lints/scripts/taste_lints.py | 637 | defined here | Lint validation check verifying Python filenames conform to snake_case. |
| .claude/skills/taste-lints/SKILL.md | 53 | defined here | Taste lints naming convention assigning snake_case to Python files, functions, and variables. |

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
defects: doc-drift, missing-path, other

## Design notes
A lexical naming convention for identifiers and filenames enforced across Python codebase components and event payloads, classified as name-only per D-023.
