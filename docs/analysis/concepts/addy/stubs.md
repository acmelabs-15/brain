---
package: addy
name: STUBS
slug: stubs
kind: name-only
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/constraint-driven-development/references/floor-guard.md, sha256: dba15dad8f5a5cbae464ec8457e6dd014a7bcb3ad13a360a6908d54991a5415e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# STUBS

## Definition — verbatim
(used, not defined)
> "const STUBS = /throw new (Error|NotImplemented).*[Nn]ot implemented" — skills/constraint-driven-development/references/floor-guard.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 59 | defined here | Constant regular expression matching stubbed error throws, empty catches, and placeholder TODO comments. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
floor-guard-mjs

## Implementation status
clean

## Design notes
This is an internal regular expression constant in `floor-guard.mjs` matching stub and incomplete work signatures rather than an independent lifecycle concept.
