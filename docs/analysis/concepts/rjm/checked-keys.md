---
package: rjm
name: CHECKED_KEYS
slug: checked-keys
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

# CHECKED_KEYS

## Definition — verbatim
(used, not defined)

> "CHECKED_KEYS = (\"description\", \"name\")" — scripts/validation/check_plugin_frontmatter_self_containment.py:348

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 348 | defined here | Module constant specifying frontmatter keys (description, name) inspected for outward path references. |

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
`CHECKED_KEYS` is a Python module constant tuple in `check_plugin_frontmatter_self_containment.py` specifying evaluated metadata keys rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
