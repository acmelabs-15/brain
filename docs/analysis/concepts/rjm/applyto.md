---
package: rjm
name: applyTo:
slug: applyto
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .agents/steering/security-practices.md, sha256: de8c639a9cd6f34b9f787dc4c2b581ca5a1d314e8956cf87d6c0412e430a0d84}
  - {path: .claude/skills/steering-matcher/SKILL.md, sha256: 267193c275adf53f2f2401fd3018a07c37d19c20259acb2c6f40224b68b6dcf0}
  - {path: .claude/skills/steering-matcher/get_applicable_steering.py, sha256: 15f73361277478c085d40035d5f99242107d46f25f493fce2a26c5870a6835b8}
  - {path: .claude/skills/steering-matcher/scripts/get_applicable_steering.py, sha256: 8c5e992f69084b1f8530605061fcee606e41fd8d9bc17905d1930950764f6a53}
  - {path: scripts/validation/instruction_budget_globs.py, sha256: 988a5b5ad39b3ed1644bcd5eeeae7b0f22ae5660a085a17205dda1cfc594a0d1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# applyTo:

## Definition — verbatim
(used, not defined)

> "A frontmatter ``applyTo`` cannot be resolved to a concrete glob set." — scripts/validation/instruction_budget_globs.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 67 | used here | Documented as the frontmatter scoping key for path-specific instructions in Copilot CLI. |
| .agents/steering/security-practices.md | 3 | defined here | Specified in frontmatter to bind security practices to authentication and secret file globs. |
| .claude/skills/steering-matcher/get_applicable_steering.py | 96 | used here | Extracted via regular expressions from steering frontmatter to evaluate pattern matches. |
| .claude/skills/steering-matcher/scripts/get_applicable_steering.py | 105 | used here | Parsed from markdown frontmatter to determine which steering guidelines apply to files. |
| .claude/skills/steering-matcher/SKILL.md | 35 | used here | Documented as the frontmatter key containing target file glob patterns for steering. |
| scripts/validation/instruction_budget_globs.py | 15 | used here | Validated against schema rules to verify that frontmatter patterns resolve to valid file globs. |

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
clean

## Design notes
`applyTo:` is a frontmatter configuration attribute used in steering files and path-specific instruction documents to bind directives to file globs rather than an independent software lifecycle concept, classified as `name-only` per D-023.
