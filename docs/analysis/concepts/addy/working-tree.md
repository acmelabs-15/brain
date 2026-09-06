---
package: addy
name: working tree
slug: working-tree
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

# working tree

## Definition — verbatim
(used, not defined)
> "the diff between the merge base and the working tree (added *and* removed lines, plus untracked files)." — skills/constraint-driven-development/references/floor-guard.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 9 | used here | Specified as the live state of tracked and untracked files compared against merge base. |

## Consumes
Local files on disk, including staged, unstaged, and untracked modifications.

## Produces
The complete current state of project files analyzed for diff violations against the merge base.

## When applied
During every floor-guard run to capture uncommitted or in-flight agent edits.

## Sub-concepts
untracked-files

## Part of
floor-guard

## Implementation status
clean

## Design notes
The live filesystem state of a repository containing all uncommitted and work-in-progress modifications, which floor-guard inspects directly to prevent agents from hiding constraint violations in uncommitted local files.
