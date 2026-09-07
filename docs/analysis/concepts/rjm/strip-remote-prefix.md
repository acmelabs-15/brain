---
package: rjm
name: strip_remote_prefix
slug: strip-remote-prefix
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/detect_scope_explosion.py, sha256: d7bfbd26d4d3d5afd838adcbee0815b32f7730ca41ef2f7ce98c686f5870bfa9}
  - {path: scripts/scope_pr_base.py, sha256: 76a9c6117162cb2952a23e156f446c41da4573183334115690e28da4a824364f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# strip_remote_prefix

## Definition — verbatim
(used, not defined)

> "def strip_remote_prefix(base: str) -> str:" — scripts/scope_pr_base.py:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/detect_scope_explosion.py | 41 | used here | Imported to strip origin/ prefix when normalizing remote PR base branches. |
| scripts/scope_pr_base.py | 62 | defined here | Function returning the base branch without a leading origin/ remote prefix. |

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
strip_remote_prefix is a Python helper function in scope_pr_base.py that strips leading origin/ prefixes from branch names during diff scope calculation rather than an SDLC lifecycle concept.
