---
package: rjm
name: validate_references_directory
slug: validate-references-directory
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_references_directory

## Definition — verbatim
(used, not defined)

> "def validate_references_directory(self):" — .claude/skills/skillforge/scripts/validate-skill.py:597

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/validate-skill.py | 597 | defined here | Checks whether complex skills (>200 lines) supply a references/ directory for progressive disclosure. |

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
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
validate_references_directory is a Python method identifier in validate-skill.py enforcing progressive-disclosure reference directory conventions for complex skills, classified as name-only per D-023.
