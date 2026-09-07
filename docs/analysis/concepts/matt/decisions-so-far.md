---
package: matt
name: Decisions so far
slug: decisions-so-far
kind: pattern
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Decisions so far

## Definition — verbatim
> "- **Decisions so far**: one line per closed ticket, each linking to where the detail actually lives." — docs/engineering/wayfinder.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/wayfinder.md | 36 | defined here | Wayfinder map section recording closed decision tickets and links to settled detail. |
| external/wayfinder.md | 40 | defined here | External documentation describing the closed decision index section of the map. |
| skills/engineering/wayfinder/SKILL.md | 40 | defined here | Template section heading in wayfinder maps serving as an index of closed decisions. |

## Consumes
Resolved and closed wayfinder decision tickets containing posted resolution comments.

## Produces
A running summary index on the wayfinder map linking to closed tickets and settled architectural records.

## When applied
Updated at the conclusion of each wayfinder session after closing a decision ticket.

## Sub-concepts
none

## Part of
wayfinder, wayfinder-map

## Implementation status
clean

## Design notes
`Decisions so far` serves as the historical index of a wayfinder map. By maintaining a concise one-line link for every resolved decision, it provides subsequent agent sessions with immediate visibility into previously settled questions, preventing regression and redundant deliberation.
