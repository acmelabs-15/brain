---
package: rjm
name: packaging
slug: packaging
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/.skillignore, sha256: e90aea4eb3a8bf9cb3eb27da6c7645e58b87153d49204bfe5d4c9babb2b501c3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# packaging

## Definition — verbatim
(used, not defined)

> "# Files excluded from skill packaging and installation." — .claude/skills/skillforge/.skillignore:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/.skillignore | 1 | used here | Mentioned in header comment identifying repository files excluded when packaging skills for distribution archives. |

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
`packaging` is an operational comment term in `.claude/skills/skillforge/.skillignore` referring to archive bundle creation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
