---
package: rjm
name: iter_markdown
slug: iter-markdown
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_plugin_frontmatter_self_containment.py, sha256: 80c17e1875128b3805186d2139dc90218d179594a7098af3a1823e8027d8004c}
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# iter_markdown

## Definition — verbatim
(used, not defined)

> "def iter_markdown(root: Path, plugin_roots_: tuple[str, ...] | None = None) -> list[Path]:" — scripts/validation/check_plugin_frontmatter_self_containment.py:615

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 615 | defined here | Helper function yielding sorted tracked or walked markdown files under plugin roots for frontmatter validation. |
| scripts/validation/check_shipped_skill_routes.py | 402 | defined here | Generator function yielding markdown files under a root while pruning nested working copies and caches. |

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
`iter_markdown` is a Python utility function identifier used across validation scripts to discover repository Markdown files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
