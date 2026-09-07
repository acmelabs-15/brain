---
package: rjm
name: installed plugin hook
slug: installed-plugin-hook
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/vanilla_hook_guard.py, sha256: bf86e44411bdcd580c983ff5b6e3fa94b03c519de7a92c20563d423bc2d6bd34}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# installed plugin hook

## Definition — verbatim
(used, not defined)

> "Drive the installed plugin hook on a machine with no Python interpreter." — scripts/ci/vanilla_hook_guard.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/vanilla_hook_guard.py | 2 | used here | Docstring describing the target under test: plugin hooks installed on consumer machines. |

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
`installed plugin hook` is a descriptive noun phrase designating plugin hook installations under test rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
