---
package: matt
name: symlink
slug: symlink
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# symlink

## Definition — verbatim
(used, not defined)
> "Each entry is a symlink into this repo, so a `git pull` keeps installed skills current; re-run the script after adding, removing, or renaming a skill." — CLAUDE.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CLAUDE.md | 23 | used here | Explains that link-skills.sh creates symlinks from harness skill directories to this repo. |

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
defects: doc-drift (CLAUDE.md em-dash prohibition drift across repo files)

## Design notes
This name refers to the operating system filesystem symbolic link mechanism used by repository installation scripts to link skills into local agent harness directories rather than a development lifecycle concept.
