---
package: rjm
name: --force-with-lease
slug: force-with-lease
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/git-advanced-workflows/SKILL.md, sha256: f47de2380592b3c3bc098f7f3683406968b1df7aadd981c57f79315205659161}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# --force-with-lease

## Definition — verbatim
(used, not defined)

> "Always `--force-with-lease`" — .claude/skills/git-advanced-workflows/SKILL.md:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 171 | used here | Mandated as the required push discipline to prevent overwriting teammates' remote commits. |

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
defects: orphan

## Design notes
--force-with-lease is a Git command-line option enforcing lease checks during remote push operations rather than an independent SDLC lifecycle concept, classified as kind: name-only per D-023.
