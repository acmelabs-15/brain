---
package: rjm
name: ADR review enforcement
slug: adr-review-enforcement
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-047-plugin-mode-hook-behavior.md, sha256: 3434f27ef9056e9a72836805fcc30dbb43f5447d14e4fe406330014c02503491}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR review enforcement

## Definition — verbatim
(used, not defined)

> "Hooks like ADR review enforcement, skill-first guards, session protocol, and QA validation are the product." — .agents/architecture/ADR-047-plugin-mode-hook-behavior.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-047-plugin-mode-hook-behavior.md | 38 | used here | Cited as an essential lifecycle hook enforcement gate that must run in consumer plugin mode |

## Consumes
Architectural modifications, design changes, and proposed ADR documents.

## Produces
Review verdicts verifying that changes touching system architecture comply with documented decision records.

## When applied
Triggered via lifecycle hooks when changes impact architectural boundaries or decision records.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
ADR review enforcement is an architectural governance gate implemented via lifecycle hooks to ensure that changes modifying architectural decisions undergo rigorous review and adhere to project standards.
