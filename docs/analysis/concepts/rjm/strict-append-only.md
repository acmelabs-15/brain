---
package: rjm
name: Strict append-only
slug: strict-append-only
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-best-practices.md, sha256: 62f0e939ebf8455bdf6f0ff1d882d21e551b1d1bcfc532a863ef80f68a0675f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Strict append-only

## Definition — verbatim
> "Accepted (and rejected) ADRs are immutable; any change is a new superseding ADR; only the old ADR's status field changes." — .claude/skills/adr-generator/references/adr-best-practices.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-best-practices.md | 31 | defined here | Compared in the ADR mutability table as the school treating accepted records as completely immutable ledgers. |

## Consumes
none

## Produces
An append-only decision ledger where every modification spawns a new superseding record.

## When applied
Evaluated during architectural governance design when selecting an ADR mutability standard.

## Sub-concepts
none

## Part of
adr-lifecycle

## Implementation status
clean

## Design notes
An industry ADR mutability philosophy (advocated by AWS and Azure Well-Architected frameworks) evaluated in rjm's best practices reference. While rejected in rjm in favor of bounded in-place edits, it represents the absolute immutability model where records cannot be modified in place once accepted, enforcing append-only traceability.
