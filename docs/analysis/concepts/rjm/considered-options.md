---
package: rjm
name: Considered Options
slug: considered-options
kind: template
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-023-debate-log.md, sha256: f199ea3783f0e058dc4704243dd7f91d0f4a44c0437d4bff41bf2731a65f9013}
  - {path: .claude/skills/adr-generator/references/adr-templates-catalog.md, sha256: f239c5d7707d6906f22a240fa99de6825bec6b64aff057c31a75a4e152ebabaa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Considered Options

## Definition — verbatim
(used, not defined)

> "## Considered Options" — .claude/skills/adr-generator/references/adr-templates-catalog.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-023-debate-log.md | 28 | used here | Flagged by Architect as a missing P0 section in draft ADR-023. |
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 59 | defined here | Heading for the MADR 4.0 template section enumerating evaluated architectural alternatives. |

## Consumes
Problem statement, decision drivers, candidate technical architectures.

## Produces
Documented list of alternative architectural solutions with comparative trade-off analysis.

## When applied
Mandatory section in all MADR 4.0 architecture decision records created during the review phase.

## Sub-concepts
none

## Part of
madr-4-0

## Implementation status
defects: internal-contradiction

## Design notes
Considered Options is a required structural section in MADR 4.0 architectural decision records. It prevents single-solution bias by obligating decision authors to document and evaluate multiple viable technical alternatives against explicit decision drivers prior to selection.
