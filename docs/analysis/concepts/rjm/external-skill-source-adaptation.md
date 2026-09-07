---
package: rjm
name: External Skill Source Adaptation
slug: external-skill-source-adaptation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/external-skill-source-adaptation.md, sha256: d1bfe692aa70bcf7515f3849cc45814365dbd7e23605c0b1058dbb125f43ec79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# External Skill Source Adaptation

## Definition — verbatim
> "# External Skill Source Adaptation" — .claude/skills/skillforge/references/external-skill-source-adaptation.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/external-skill-source-adaptation.md | 1 | defined here | Defines the discipline for importing ideas from third-party catalogs without duplicating capability or coupling to products. |

## Consumes
External skill catalogs, foreign prompts, or vendor skill packs.

## Produces
Cited decision table mapping each source skill to keep, augment, compose, create, or reject.

## When applied
Applied when analyzing an external or third-party skill catalog to adapt into the local repository.

## Sub-concepts
gate-1-source-identity-first, gate-2-reuse-over-duplication, gate-3-reject-product-coupling

## Part of
skillforge

## Implementation status
clean

## Design notes
A decision discipline layered onto Phase 0 triage that screens foreign skill catalogs through three ordered gates (source identity, reuse over duplication, product decoupling) to safely absorb useful patterns without polluting the local catalog.
