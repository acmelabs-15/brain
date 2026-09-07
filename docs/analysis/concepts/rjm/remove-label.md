---
package: rjm
name: remove_label
slug: remove-label
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/update_needs_split_label.py, sha256: 3d780d84f7cfe2159df2510cb32a9f3f547d69615c5f073d678d5fb3e174dd03}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# remove_label

## Definition — verbatim
(used, not defined)

> "def remove_label(repository: str, pr_number: str) -> int:" — scripts/ci/update_needs_split_label.py:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/update_needs_split_label.py | 81 | defined here | Function removing the advisory `needs-split` label from a pull request if currently present. |

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
defects: orphan, other

## Design notes
`remove_label` is an internal Python function managing pull request label deletions via the GitHub API rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
