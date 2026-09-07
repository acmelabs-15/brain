---
package: rjm
name: DECLARATION
slug: declaration
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_doc_interpreter_portability.py, sha256: 62a3182550bff6eb7dfc04ce073fb53feb78bd52cde315062b3a2fe1543f8ac1}
  - {path: scripts/validation/check_plugin_frontmatter_self_containment.py, sha256: 80c17e1875128b3805186d2139dc90218d179594a7098af3a1823e8027d8004c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DECLARATION

## Definition — verbatim
(used, not defined)

> "DECLARATION = \"doc-interpreter-portability:\"" — scripts/validation/check_doc_interpreter_portability.py:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 186 | defined here | String constant matching line-scoped opt-out comment declarations for interpreter portability. |
| scripts/validation/check_plugin_frontmatter_self_containment.py | 345 | defined here | Regular expression matching vendor-portability HTML comment declarations in frontmatter. |

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
A Python constant representing suppression comment patterns across portability validation scripts, classified as name-only per D-023.
