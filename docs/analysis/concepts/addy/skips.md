---
package: addy
name: SKIPS
slug: skips
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

# SKIPS

## Definition — verbatim
(used, not defined)
> "const SKIPS = " — skills/constraint-driven-development/references/floor-guard.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/references/floor-guard.md | 61 | defined here | Constant regular expression matching test skip directives and disabled test invocations. |

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
This is an internal constant identifier in `floor-guard.mjs` matching test skipping directives across various test frameworks rather than an independent lifecycle concept.
