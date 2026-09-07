---
package: rjm
name: renormalizing line endings
slug: renormalizing-line-endings
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/normalize_line_endings.py, sha256: 3d66a3ba4fefcb0c7308eb253b3e9432968e507b169a042ab0e45437e454059f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# renormalizing line endings

## Definition — verbatim
> "Applies .gitattributes rules to all existing files by renormalizing line endings." — scripts/normalize_line_endings.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/normalize_line_endings.py | 4 | defined here | used here | Enforces `.gitattributes` rules across tracked repository files using `git add --renormalize`. |

## Consumes
Git working tree and `.gitattributes` configuration file.

## Produces
Normalized text files conforming to repository line ending rules.

## When applied
Executed following changes to `.gitattributes` to update all existing tracked files.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
A repository maintenance technique enforcing uniform line endings across all files in git history and working trees to prevent false diffs across operating systems.
