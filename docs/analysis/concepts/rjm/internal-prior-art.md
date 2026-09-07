---
package: rjm
name: Internal prior-art
slug: internal-prior-art
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Internal prior-art

## Definition — verbatim
(used, not defined)

> "#### 2a. Internal prior-art" — .claude/skills/programming-advisor/SKILL.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/SKILL.md | 41 | defined here | Procedural step heading mandating symbol, memory, and dependency searches before external package discovery. |

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
`Internal prior-art` is a procedural step heading in `SKILL.md` prescribing codebase and dependency inspection prior to external search, classified as `kind: name-only` per D-023.
