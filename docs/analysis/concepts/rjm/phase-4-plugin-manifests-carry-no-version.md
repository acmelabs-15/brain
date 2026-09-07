---
package: rjm
name: "Phase 4: Plugin Manifests Carry No Version"
slug: phase-4-plugin-manifests-carry-no-version
kind: phase
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-generation-and-release/SKILL.md, sha256: f21f81ca99b028e049733f4a75da58c62b2603d0c74e74bfd6a88459ae76272d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 4: Plugin Manifests Carry No Version

## Definition — verbatim
> "### Phase 4: Plugin Manifests Carry No Version" — .claude/skills/ai-agents-generation-and-release/SKILL.md:138

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 138 | defined here | Release and generation phase establishing that plugin manifests must omit version fields per ADR-092. |

## Consumes
Generated and canonical plugin manifests across `.claude/` and `src/copilot-cli/`.

## Produces
Version-free manifest files ensuring Git commit SHAs govern freshness.

## When applied
Executed during release preparation and manifest generation workflows.

## Sub-concepts
adr-092, plugin-version-field-present

## Part of
ai-agents-generation-and-release

## Implementation status
defects: doc-drift, unfailable-gate

## Design notes
Phase 4 of the release process mandates the complete omission of version fields in plugin manifests and marketplace catalogs. Introduced after observing frequent Git merge conflicts on version strings, this phase standardizes Git commit SHAs as the authoritative freshness signal across harnesses.
