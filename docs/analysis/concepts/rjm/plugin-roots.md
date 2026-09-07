---
package: rjm
name: plugin_roots
slug: plugin-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_plugin_frontmatter_self_containment.py, sha256: 80c17e1875128b3805186d2139dc90218d179594a7098af3a1823e8027d8004c}
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# plugin_roots

## Definition — verbatim
(used, not defined)

> "def plugin_roots(repo_root: Path) -> tuple[str, ...]:" — scripts/validation/check_plugin_frontmatter_self_containment.py:194

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 194 | defined here | Function resolving and validating plugin source directories declared by marketplace manifests. |
| scripts/validation/check_plugin_frontmatter_self_containment.py | 210 | defined here | Module constant storing resolved plugin roots for the repository. |
| scripts/validation/check_skill_md_portability.py | 46 | defined here | Docstring reference to plugin root directories scanned for skill portability compliance. |

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
`plugin_roots` is a Python function identifier and configuration constant resolving plugin roots in validation scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
