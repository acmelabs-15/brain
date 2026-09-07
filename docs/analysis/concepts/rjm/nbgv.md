---
package: rjm
name: NBGV
slug: nbgv
kind: reference
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# NBGV

## Definition — verbatim
(used, not defined)

> "- **NBGV (Nerdbank.GitVersioning)**: stamps version at build time, never checks it in." — .agents/architecture/ADR-091-post-merge-version-bot.md:209

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 209 | used here | Prior art tool evaluated in ADR-091 for stamping versions dynamically at build time. |

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
clean

## Design notes
External tooling reference to Nerdbank.GitVersioning analyzed during architectural investigation, rejected because the host plugins lack a compilation/build phase and read directly from git HEAD.
