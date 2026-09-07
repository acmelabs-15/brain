---
package: rjm
name: status
slug: status
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/scripts/detect_adr_changes.py, sha256: f8916b967a34d2834a234f6223be04d1b04a925ea682850c7b65f2bd63c41805}
  - {path: scripts/validation/check_generated_staleness.py, sha256: 1be3095eed20c44cb26605bb6632317cdaf00ab7551f9eef44d94386b0979e5b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# status

## Definition — verbatim
(used, not defined)

> "class _Status(IntEnum):" — scripts/validation/check_generated_staleness.py:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/scripts/detect_adr_changes.py | 89 | used here | Identifies the frontmatter `status` governance key whose modification requires adr-review validation. |
| scripts/validation/check_generated_staleness.py | 136 | defined here | Defines the internal `_Status` integer enum representing validation gate exit codes (OK, DRIFT, CONFIG, EXTERNAL). |

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
defects: exit-code-mismatch, missing-dependency

## Design notes
A generic programming identifier representing YAML frontmatter lifecycle keys in ADRs and an internal IntEnum in Python validation scripts rather than an independent lifecycle concept.
