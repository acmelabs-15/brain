---
package: rjm
name: CatalogError
slug: catalogerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-052-template-strategy.md, sha256: 433fb13708f3c0aa05adb61e9aa7db0a03838df12299715b44eff00cc47ca6dd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CatalogError

## Definition — verbatim
(used, not defined)

> "; `generate_agent_catalog.py:159-172` raises `CatalogError` on a missing top-level `role`." — .agents/architecture/ADR-052-template-strategy.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-052-template-strategy.md | 144 | used here | Exception raised by generate_agent_catalog.py when agent source files lack a top-level role frontmatter field. |

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
defects: internal-contradiction, missing-path

## Design notes
CatalogError is a Python exception class raised by build tooling during documentation generation, classified as name-only per D-023.
