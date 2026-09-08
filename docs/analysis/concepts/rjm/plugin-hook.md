---
package: rjm
name: plugin hook
slug: plugin-hook
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_hook_anchoring.py, sha256: 0ffb67131b3c2a02efe52fdae23e3d439235a2be9c07ee4e95e44a4acbce99f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# plugin hook

## Definition — verbatim
(used, not defined)

> "Gate: every plugin hook artifact anchors its scripts to the plugin root." — scripts/validation/validate_hook_anchoring.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_hook_anchoring.py | 2 | used here | Gate docstring stating anchoring requirement across plugin hook artifacts. |

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
A platform extension mechanism in validate_hook_anchoring.py representing Claude and Copilot plugin hooks rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
