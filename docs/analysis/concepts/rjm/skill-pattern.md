---
package: rjm
name: SKILL_PATTERN
slug: skill-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/split_bundled_skills.py, sha256: 984becd29092df0d723645aa4250697a65d743f72cab46212c1934501d747257}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SKILL_PATTERN

## Definition — verbatim
(used, not defined)

> "SKILL_PATTERN = re.compile(" — scripts/split_bundled_skills.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/split_bundled_skills.py | 61 | defined here | Regular expression compiling pattern used to identify skill headings within bundled memory files. |

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
defects: exit-code-mismatch, orphan

## Design notes
`SKILL_PATTERN` is a compiled regular expression constant identifier parsing markdown skill headers rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
