---
package: addy
name: Quick Reference
slug: quick-reference
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/using-agent-skills/SKILL.md, sha256: 8bdbecb2f98cff2dbb70b3852c67d8dca179b27d2b1042aac040866d258ad471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Quick Reference

## Definition — verbatim
> "| Phase | Skill | One-Line Summary |" — skills/using-agent-skills/SKILL.md:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/using-agent-skills/SKILL.md | 166 | defined here | Summary lookup table indexing all 24 skills by lifecycle phase (Define, Plan, Build, Verify, Review, Ship) with one-line descriptions. |

## Consumes
Full 24-skill catalog and phase taxonomies.

## Produces
Fast lookup index mapping development phases and needs to specific skills.

## When applied
Used during session initialization or skill selection for quick phase-to-skill lookup.

## Sub-concepts
none

## Part of
using-agent-skills

## Implementation status
defects: cross-file-contradiction, internal-contradiction, doc-drift

## Design notes
A tabular quick-reference catalog in the meta-skill mapping each of the six development phases (Define, Plan, Build, Verify, Review, Ship) to its constituent skills and one-line summaries.
