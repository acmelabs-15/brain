---
package: rjm
name: is_git_push_command
slug: is-git-push-command
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/hook_utilities/__init__.py, sha256: 6da956883f74db3b17a744d1a96adfc5810f5fe26d04265957dd16aed6688967}
  - {path: scripts/hook_utilities/utilities.py, sha256: c8cf18762a2a055c323142ee77d0eeaeb7f4fe66e8d296787e3e6fdf75661060}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# is_git_push_command

## Definition — verbatim
(used, not defined)

> "def is_git_push_command(" — scripts/hook_utilities/utilities.py:134

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/__init__.py | 21 | used here | Re-exported symbol in hook utilities package public interface. |
| scripts/hook_utilities/utilities.py | 134 | defined here | Checks whether an intercepted command string executes git push via regex matching. |

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
A Python utility function matching git push CLI commands in hook scripts, classified as name-only per D-023.
