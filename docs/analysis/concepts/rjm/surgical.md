---
package: rjm
name: Surgical
slug: surgical
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md, sha256: ead8316b739c0e6a848e73e870d9f16e13f02da7768edf171c5ac50ac6e90633}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Surgical

## Definition — verbatim
> "| Surgical | nav_count >= nav_required (2) | ALLOW all reads for the session | any Read, nav_count 2 -> exit 0 |" — .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md:208

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 208 | defined here | Defined as the terminal tier of the graduated Read gate permitting unrestricted file reads once navigation threshold is satisfied. |

## Consumes
Runtime session state showing `nav_count` meeting or exceeding the required navigation count (`nav_required = 2`).

## Produces
Exit code 0 allowing all subsequent `Read` tool invocations for the remainder of the session.

## When applied
Applied when an agent has executed at least two symbolic navigation operations within the current session.

## Sub-concepts
none

## Part of
graduated-read-gate, conditional-lsp-first-navigation-enforcement

## Implementation status
defects: missing-path, doc-drift

## Design notes
Surgical represents the unlocked terminal state of rjm's graduated Read gate. Once an agent demonstrates that it is navigating codebase symbols intelligently via LSP or Serena tools (reaching `nav_count >= 2`), the enforcement layer steps out of the way and permits unrestricted file reads. This design balances strict early-session steering against developer friction, ensuring agents are not permanently obstructed once initial orientation is complete.
