---
package: rjm
name: SkillForge Configuration
slug: skillforge-configuration
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/configuration.md, sha256: 73fa64c70668a0942abb7d2c48f4d049464cda36ae9224c6e667dc3e36fa8e59}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SkillForge Configuration

## Definition — verbatim
> "# SkillForge Configuration" — .claude/skills/skillforge/references/configuration.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/configuration.md | 1 | defined here | Reference document heading defining runtime YAML configuration settings and default thresholds for SkillForge. |

## Consumes
Skill execution policies, model allocations, and quality gate threshold parameters.

## Produces
YAML configuration schema governing autonomous depth, questioning rounds, panel sizes, and score limits.

## When applied
Applied throughout SkillForge execution to parameterize analysis, synthesis, and evolution thresholds.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift

## Design notes
SkillForge Configuration defines the global operational defaults, questioning depth boundaries, synthesis panel sizes, and quality gate thresholds that govern autonomous skill generation workflows.
