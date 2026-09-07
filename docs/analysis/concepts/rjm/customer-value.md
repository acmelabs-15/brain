---
package: rjm
name: Customer value:
slug: customer-value
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-084-vendored-hook-roi-bar.md, sha256: f803b402a803541adf9820344cedaec80e4287c68685834b8cdd175081bdf196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Customer value:

## Definition — verbatim
(used, not defined)

> "`Customer value:` so the check is a presence grep, not a semantic judge." — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-084-vendored-hook-roi-bar.md | 113 | defined here | Defined as a required docstring prefix for one-line customer value justifications in vendored hooks. |

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
A standardized docstring prefix and grep token used in hook module docstrings to mechanically assert consumer value presence, not an operational lifecycle concept.
