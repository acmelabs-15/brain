---
package: rjm
name: NAME_MAX_LENGTH
slug: name-max-length
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/_constants.py, sha256: 7d95cd0e323d528ee16098e199af1dbf91434ae1e8cd7e2e312e1acecca669b6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# NAME_MAX_LENGTH

## Definition — verbatim
(used, not defined)

> "NAME_MAX_LENGTH = 64" — .claude/skills/skillforge/scripts/_constants.py:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/_constants.py | 64 | defined here | Integer constant setting the maximum length of 64 characters for skill identifiers. |

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
NAME_MAX_LENGTH is an integer constant defining the maximum allowable character length for skill names rather than an operational lifecycle concept, classified as name-only per D-023.
