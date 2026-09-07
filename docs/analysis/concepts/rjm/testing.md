---
package: rjm
name: Testing
slug: testing
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: .claude/skills/cynefin-classifier/references/software-applications.md, sha256: f7e15c1b5144a4af053fd201bf675d5648e67d04787b8e4b24dad09104cdebdc}
  - {path: .claude/skills/programming-advisor/references/common-solutions.md, sha256: 3577dd2865763e902d1d075f8e753a02cb50cca084f394adc473b139343bb0fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Testing

## Definition — verbatim
(used, not defined)

> "## Testing" — .claude/skills/CLAUDE.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/CLAUDE.md | 112 | defined here | Section heading outlining test isolation, directory conventions, and CI integration requirements. |
| .claude/skills/cynefin-classifier/references/software-applications.md | 37 | defined here | Reference heading classifying software testing situations into Cynefin complexity domains. |
| .claude/skills/programming-advisor/references/common-solutions.md | 59 | defined here | Reference heading cataloging established testing frameworks and why not to build custom testing solutions. |

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
`Testing` is a section heading appearing across documentation guidelines, Cynefin classification references, and solution catalogs, classified as `kind: name-only` per D-023.
