---
package: rjm
name: MUST-2
slug: must-2
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_plugin_frontmatter_self_containment.py, sha256: 80c17e1875128b3805186d2139dc90218d179594a7098af3a1823e8027d8004c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MUST-2

## Definition — verbatim
(used, not defined)

> "which the rule forbids twice over: MUST-2 bans the bare in-root form because" — scripts/validation/check_plugin_frontmatter_self_containment.py:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 83 | used here | Rule clause identifier cited as banning bare in-root paths that resolve only under matching working directories. |

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
`MUST-2` is a rule clause identifier from repository plugin governance rules cited in validation comments rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
