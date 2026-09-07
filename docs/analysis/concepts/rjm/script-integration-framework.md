---
package: rjm
name: Script Integration Framework
slug: script-integration-framework
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/changelog.md, sha256: a4efff27d10d1dd1c5f0a82b98808f6204659a295f2edd5e119d04021799ae42}
  - {path: .claude/skills/skillforge/references/degrees-of-freedom.md, sha256: 3d5311e2c2241676e4ae91d497de9e930061f02a45127c14560cb12cb2f9b99c}
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
  - {path: .claude/skills/skillforge/references/script-patterns-catalog.md, sha256: ac036d192b627a7bda2c87286360e16e693123d268f4af6aacc98c5ea7a21733}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Script Integration Framework

## Definition — verbatim
> "# Script Integration Framework" — .claude/skills/skillforge/references/script-integration-framework.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/changelog.md | 25 | used here | Changelog v3.2.0 entry recording the introduction of the framework for building agentic skills. |
| .claude/skills/skillforge/references/degrees-of-freedom.md | 121 | used here | Related reference link identifying scripts as the primary tool for low-freedom deterministic skill sections. |
| .claude/skills/skillforge/references/script-integration-framework.md | 1 | defined here | Main reference guide heading providing guidelines, decision criteria, and patterns for integrating Python scripts into skills. |
| .claude/skills/skillforge/references/script-patterns-catalog.md | 830 | used here | Related reference link directing users to framework criteria for deciding when to use scripts. |

## Consumes
Skill requirements requiring deterministic execution, verification, state caching, or low degrees of freedom.

## Produces
Architectural guidelines, integration patterns, and template structures for embedding Python scripts into skills.

## When applied
Consulted when determining whether a skill requires executable automation and how to design script interfaces.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
clean

## Design notes
The Script Integration Framework establishes engineering standards for equipping LLM skills with deterministic, self-verifying helper scripts, shifting repetitive computations and strict validations into reliable Python code while reserving agent context for higher-level reasoning.
