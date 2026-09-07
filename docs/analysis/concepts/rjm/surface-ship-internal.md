---
package: rjm
name: surface: ship|internal
slug: surface-ship-internal
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

# surface: ship|internal

## Definition — verbatim
(used, not defined)

> "1. **Per-item `surface: ship|internal` tag (D2).** Every skill, agent, and" — .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-083-copilot-dogfood-surface-separation.md | 115 | defined here | Frontmatter metadata schema specification requiring explicit declaration of component surface. |

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
`surface: ship|internal` is a frontmatter metadata schema specification governing artifact build and packaging routing rather than an independent lifecycle methodology concept.
