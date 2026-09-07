---
package: rjm
name: validate_slash_command.py
slug: validate-slash-command-py
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
  - {path: .claude/skills/slashcommandcreator/scripts/new_slash_command.py, sha256: 3fb96b32fd77e3d8207d3e3e276e2a34f2627b0d39c6ab10db8baa15cb0d46af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_slash_command.py

## Definition — verbatim
(used, not defined)

> "- [ ] Passes `validate_slash_command.py` validation" — .claude/skills/slashcommandcreator/SKILL.md:195

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/scripts/new_slash_command.py | 132 | used here | Printed next-step instruction directing author to run validation script against created command file. |
| .claude/skills/slashcommandcreator/SKILL.md | 195 | used here | Verification checklist item requiring command file to pass validation script before completion. |

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
defects: doc-drift, internal-contradiction, script-bug, exit-code-mismatch, missing-path

## Design notes
A Python validation script filename responsible for enforcing quality gates on slash command files rather than an agent lifecycle concept.
