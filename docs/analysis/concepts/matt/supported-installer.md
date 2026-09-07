---
package: matt
name: supported installer
slug: supported-installer
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/link-skills.sh, sha256: f1ffdc620769e7703d4d6365b05b981e01175bfabd92e0f8e17b05301805cabe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# supported installer

## Definition — verbatim
(used, not defined)

> "It is not a supported installer. Modifications to it, or requests for" — scripts/link-skills.sh:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/link-skills.sh | 5 | used here | Contrasted against dev-only script to indicate link-skills.sh is not an official installation tool. |

## Consumes
none

## Produces
none

## When applied
When installing or updating repository skills using public tooling such as Claude Code's plugin manager or `npx skills-latest add`.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Represents supported end-user distribution and installation mechanisms (such as official plugin marketplace commands or CLI installers) in contrast to internal maintenance scripts.
