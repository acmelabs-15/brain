---
package: rjm
name: Adapting an external skill source
slug: adapting-an-external-skill-source
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Adapting an external skill source

## Definition — verbatim
> "### Adapting an external skill source" — .claude/skills/skillforge/SKILL.md:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/SKILL.md | 131 | defined here | Upfront triage protocol applying three mandatory gates before incorporating external skill catalogs. |

## Consumes
External or third-party skill catalog, repository URL, or external skill documentation.

## Produces
Gated decision either rejecting external content or routing retained generic ideas into local skills.

## When applied
When the input to SkillForge is an external or third-party skill catalog rather than a local task prompt.

## Sub-concepts
source-identity-first, reuse-over-duplication, reject-product-coupling

## Part of
skillforge

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
Adapting an external skill source is an rjm technique ensuring that third-party skill collections are vetted for source pinning, deduplicated against local skills, and stripped of product-specific coupling before adoption.
