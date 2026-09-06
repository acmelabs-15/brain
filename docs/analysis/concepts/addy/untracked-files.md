---
package: addy
name: untracked files
slug: untracked-files
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/constraint-driven-development/references/floor-guard.md, sha256: dba15dad8f5a5cbae464ec8457e6dd014a7bcb3ad13a360a6908d54991a5415e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# untracked files

## Definition — verbatim
(used, not defined)
> "the diff between the merge base and the working tree (added *and* removed lines, plus untracked files). A guard that reads only `git diff` misses new files and staged-but-uncommitted work." — skills/constraint-driven-development/references/floor-guard.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 9 | used here | Highlights newly created files not yet tracked in git that must be included in diff evaluation. |

## Consumes
File listings discovered via `git ls-files --others --exclude-standard`.

## Produces
Synthetic file diffs generated through `git diff --no-index /dev/null <file>` for floor inspection.

## When applied
During the diff-gathering phase of floor-guard execution.

## Sub-concepts
none

## Part of
working-tree, floor-guard

## Implementation status
clean

## Design notes
Newly created files present in the filesystem but not yet staged or committed to git, which floor-guard explicitly ingests into the diff stream to close the vulnerability where agents hide suppressions or stub implementations in uncommitted files.
