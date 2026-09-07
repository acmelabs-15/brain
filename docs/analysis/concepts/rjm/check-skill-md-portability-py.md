---
package: rjm
name: check_skill_md_portability.py
slug: check-skill-md-portability-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/utils/markdown_parser.py, sha256: 5aa5af0430c9e30e1cb4683113bce9a0f6e6d8e4fb59322f908efea72dce6f44}
  - {path: scripts/validation/check_plugin_frontmatter_self_containment.py, sha256: 80c17e1875128b3805186d2139dc90218d179594a7098af3a1823e8027d8004c}
  - {path: scripts/validation/skill_md_portability_baseline.json, sha256: 7e99a765356aaf635637c80c183a5c9200b7029a2917227b0580683be941d97f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_skill_md_portability.py

## Definition — verbatim
(used, not defined)

> "Why this exists separately from ``check_skill_md_portability.py``:" — scripts/validation/check_plugin_frontmatter_self_containment.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 122 | used here | Cited in comments as the validator whose code-stripping logic relies on visible HTML block tags. |
| scripts/validation/check_plugin_frontmatter_self_containment.py | 15 | used here | Cited in docstring explaining architectural separation between frontmatter and body prose validation. |
| scripts/validation/skill_md_portability_baseline.json | 2 | used here | Named in comment header as the script generating and enforcing the vendor portability baseline. |

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
`check_skill_md_portability.py` is the file name of a python validation gate script checking vendor portability in skill markdown files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
