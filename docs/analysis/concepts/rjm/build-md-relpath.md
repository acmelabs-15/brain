---
package: rjm
name: _BUILD_MD_RELPATH
slug: build-md-relpath
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_build_gates.py, sha256: df1360e6ff865be7eecb97ece1f78d0979415b85c87ea4e19cf9b693ee511102}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _BUILD_MD_RELPATH

## Definition — verbatim
(used, not defined)

> "_BUILD_MD_RELPATH = Path(\".claude/commands/build.md\")" — scripts/validation/check_build_gates.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 61 | defined here | Constant path pointing to the slash command definition for /build. |

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
defects: missing-path

## Design notes
`_BUILD_MD_RELPATH` is an internal Python Path constant identifier defining the repository-relative path to `.claude/commands/build.md` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
