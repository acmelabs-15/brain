---
package: rjm
name: surface: ship
slug: surface-ship
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md, sha256: 2e49561b59500f4a4b6d417dfc94da905bdb2eb57a996e3070193904150cd40d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# surface: ship

## Definition — verbatim
(used, not defined)

> "stay `surface: ship`, so the initial internal partition is" — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md | 24 | defined here | Frontmatter declaration routing components into the customer-facing plugin distribution. |

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
defects: missing-path, doc-drift

## Design notes
`surface: ship` is a frontmatter metadata classification tag that routes artifacts into the customer-facing plugin distribution rather than an independent lifecycle methodology concept.
