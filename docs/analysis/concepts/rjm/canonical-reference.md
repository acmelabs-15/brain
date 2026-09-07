---
package: rjm
name: CANONICAL REFERENCE
slug: canonical-reference
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/SKILL-STANDARDS-RECONCILED.md, sha256: 519c3146eb8bc63670a8219a2b2beb598d871658825c757990b0715cc12de505}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CANONICAL REFERENCE

## Definition — verbatim
(used, not defined)
> "**Status**: CANONICAL REFERENCE" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 4 | defined here | Document status header establishing the file as the authoritative single source of truth for skill standards. |

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
defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession)

## Design notes
A document status header designating SKILL-STANDARDS-RECONCILED.md as the authoritative architectural baseline rather than an independent development lifecycle concept.
