---
package: rjm
name: description
slug: description
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
  - {path: .claude/skills/slashcommandcreator/scripts/new_slash_command.py, sha256: 3fb96b32fd77e3d8207d3e3e276e2a34f2627b0d39c6ab10db8baa15cb0d46af}
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
  - {path: scripts/validation/adr_lifecycle_baseline.json, sha256: cd19b2354ac9855f1658fe2d56233b96ff6dc7f32fcdde0a0dd0e10376fc2f73}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# description

## Definition — verbatim
(used, not defined)

> "- Only two fields mandatory: `name` (lowercase alphanumeric + hyphens, max 64 chars) and `description` (max 1024 chars, primary trigger mechanism)" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 44 | defined here | Defined as a mandatory frontmatter property serving as the primary trigger mechanism for skills. |
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 145 | used here | Evaluated as an isolated loading mechanism to test whether frontmatter description alone triggers model compliance. |
| .claude/skills/slashcommandcreator/scripts/new_slash_command.py | 91 | used here | Generated in slash command frontmatter templates as the required invocation description field. |
| scripts/eval/eval-rule-activation.py | 9 | defined here | Defined as an activation evaluation treatment condition presenting only the description or catalog front door. |
| scripts/eval/README.md | 208 | defined here | Documented as an experimental evaluation mechanism exposing only frontmatter descriptions to mimic progressive disclosure. |
| scripts/validation/adr_lifecycle_baseline.json | 3 | defined here | Schema property in baseline JSON describing the ratchet violation ceiling definition. |

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
`description` is a YAML frontmatter property name and JSON schema field used across skills, slash commands, and evaluation harnesses for routing and invocation rather than an autonomous lifecycle stage, classified as `name-only` per D-023.
