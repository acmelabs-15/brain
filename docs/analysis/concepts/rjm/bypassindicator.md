---
package: rjm
name: BypassIndicator
slug: bypassindicator
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/detect_hook_bypass.py, sha256: 75ac8dd432b365b4d7934e216897ccd03b44a366b92d5e8245bb6795e4dd6e0c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BypassIndicator

## Definition — verbatim
(used, not defined)

> "class BypassIndicator:" — scripts/detect_hook_bypass.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/detect_hook_bypass.py | 38 | defined here | Dataclass representing a detected pre-commit hook bypass indicator in a commit. |

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
defects: doc-drift

## Design notes
BypassIndicator is a Python dataclass identifier in scripts/detect_hook_bypass.py representing audit findings rather than an operational lifecycle concept.
