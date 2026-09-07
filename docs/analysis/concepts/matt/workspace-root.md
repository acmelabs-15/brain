---
package: matt
name: workspace root
slug: workspace-root
kind: name-only
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/MISSION-FORMAT.md, sha256: 8cacbb3c0644d3ae0ea4965564797099401a6930a23f7cf462918576587f2418}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# workspace root

## Definition — verbatim
(used, not defined)

> "`MISSION.md` lives at the workspace root." — skills/productivity/teach/MISSION-FORMAT.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/MISSION-FORMAT.md | 3 | used here | Designates the required top-level filesystem location for MISSION.md within the teaching workspace. |

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
Top-level filesystem location of the teaching workspace where core configuration and mission artifacts reside, classified as name-only because it is an environment directory path rather than an agent lifecycle concept.
