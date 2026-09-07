---
package: rjm
name: Integration
slug: integration
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Integration

## Definition — verbatim
> "Interface with external tools" — .claude/skills/skillforge/references/script-integration-framework.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 35 | used here | Foundational support tier in the retired four-tier agent hierarchy, migrated to the support role. |
| .claude/skills/skillforge/references/script-integration-framework.md | 81 | defined here | Defined as one of seven core script categories interfacing with external tools and API services. |

## Consumes
External tool interfaces, API definitions, and integration requirements.

## Produces
Integration scripts, external API connectors, and tool orchestration adapters.

## When applied
When agents or skills need to interface with external CLIs, APIs, or subprocess services.

## Sub-concepts
none

## Part of
four-tier-agent-hierarchy

## Implementation status
defects: doc-drift

## Design notes
Refers to both a script category in the skillforge automation framework for interfacing with external tools and the legacy foundational tier in the agent hierarchy (migrated to support).
