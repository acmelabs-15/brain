---
package: matt
name: git mv
slug: git-mv
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/scaffold-exercises/SKILL.md, sha256: 75f5c9d771606fb9762f16522efc954df11c324f87148d8ff069bce166257de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# git mv

## Definition — verbatim
(used, not defined)

> "1. Use `git mv` (not `mv`) to rename directories - preserves git history" — skills/misc/scaffold-exercises/SKILL.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/scaffold-exercises/SKILL.md | 69 | used here | Recommended command for renumbering or moving exercise directories to preserve commit history. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
scaffold-exercises

## Implementation status
clean

## Design notes
A standard Git CLI command invocation for renaming files or directories while preserving version control history; recorded as a name-only card representing a shell command rather than an engineering lifecycle concept.
