---
package: addy
name: migration guide
slug: migration-guide
kind: artifact
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/deprecation-and-migration/api-inventory.md, sha256: ac739ed01a61c7dea2e9ce570948cfe5443fce471fe8e3d894bb42c82a7ca6c2}
  - {path: skills/deprecation-and-migration/SKILL.md, sha256: 92d9846321fab624eded7ac55d19a7738cfd2321c2be2e35eb153dcacf7359de}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# migration guide

## Definition — verbatim
> "### Migration Guide" — skills/deprecation-and-migration/SKILL.md:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/deprecation-and-migration/api-inventory.md | 9 | references | Identifies the absence of a migration guide as an operational risk for consumers. |
| skills/deprecation-and-migration/SKILL.md | 88 | defines | Documents step-by-step instructions for consumers migrating from a deprecated service. |

## Consumes
Deprecated system interfaces, replacement system APIs, breaking changes list, and verification tooling.

## Produces
Documentation artifact outlining replacement imports, configuration updates, and verification commands.

## When applied
> "Step 2: Announce and Document" — skills/deprecation-and-migration/SKILL.md:77

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
A migration guide is a documentation artifact produced during API or component deprecation. It provides explicit, verifiable step-by-step instructions and code examples for consumers to transition from the deprecated system to its replacement.
