---
package: addy
name: artifact-path drift
slug: artifact-path-drift
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate-artifact-paths.js, sha256: 689a1c9b12391bdfe92b0102fb0f09278f5e4f07b2340a694f443b139d20c0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# artifact-path drift

## Definition — verbatim
> "Guards the spec -> plan -> build pipeline against silent artifact-path drift." — scripts/validate-artifact-paths.js:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-artifact-paths.js | 5 | defined here | Identifies the failure mode where producer and consumer commands disagree on artifact file locations. |

## Consumes
Producer commands (/spec, /plan) and consumer commands/skills (/build, spec-driven-development)

## Produces
Disconnected file locations where produced artifacts cannot be discovered by downstream consumers

## When applied
Evaluated during CI validation of slash commands and skill instructions.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A failure mode where producer commands change their output artifact locations (such as moving into nested directories) without updating downstream consumer commands or skills that read those paths. This causes the autonomous pipeline to break silently.
