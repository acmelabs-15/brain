---
package: addy
name: CONTRACT
slug: contract
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/deprecation-and-migration/SKILL.md, sha256: 92d9846321fab624eded7ac55d19a7738cfd2321c2be2e35eb153dcacf7359de}
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CONTRACT

## Definition — verbatim
> "EXPAND ──────────────→ MIGRATE ──────────────→ CONTRACT" — skills/deprecation-and-migration/SKILL.md:169
> "5. **Contract.** Stop writing `name`, then — in a *separate, later* deploy — drop the column." — skills/deprecation-and-migration/SKILL.md:181
> "A fresh-context reviewer needs the **artifact** and the **contract**, not the journey." — skills/doubt-driven-development/SKILL.md:77
> "CONTRACT: <paste contract>" — skills/doubt-driven-development/SKILL.md:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 169 | defines | Phase 3 of Expand/Contract database migration dropping the obsolete schema structure in a separate deploy. |
| skills/doubt-driven-development/SKILL.md | 77 | defines | Defines contract as the required specification against which an artifact is evaluated during adversarial review. |
| skills/doubt-driven-development/SKILL.md | 103 | defines | Input parameter label in the adversarial prompt template: `CONTRACT: <paste contract>`. |

## Consumes
In schema migration: fully migrated data with zero active references to old column. In doubt-driven review: formal interface/functional constraints.

## Produces
In schema migration: clean database schema with legacy columns dropped. In doubt review: verified alignment of artifact with contract.

## When applied
In database migrations: the final destructive cleanup phase. In doubt-driven development: passed with the artifact to the fresh-context reviewer.

## Sub-concepts
none

## Part of
expand-contract, doubt-driven-development

## Implementation status
clean

## Design notes
A cross-phase concept with two distinct applications in Addy: in database migration (Ship phase), CONTRACT represents the final phase where legacy columns are dropped after all reads and writes have transitioned; in doubt-driven development (Build phase), CONTRACT denotes the explicit behavioral boundaries and constraints passed to a reviewer to verify an artifact.
