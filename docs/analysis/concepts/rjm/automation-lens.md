---
package: rjm
name: Automation Lens
slug: automation-lens
kind: technique
package_phase: rjm:Phase 1: Deep Analysis
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Automation Lens

## Definition — verbatim
> "During Deep Analysis, apply the **Automation Lens** (Lens 12) to identify script opportunities." — .claude/skills/skillforge/references/script-integration-framework.md:278

## Also called — verbatim
> "Lens 12" — .claude/skills/skillforge/references/script-integration-framework.md:278

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-integration-framework.md | 278 | used here | Applied during Phase 1 Deep Analysis to identify deterministic operations suited for script automation. |

## Consumes
Skill workflows, manual task steps, and repetitive command sequences.

## Produces
Identified script requirements and automation candidates documented in skill specifications.

## When applied
During Phase 1 Deep Analysis when evaluating which operations in a skill should be automated via scripts.

## Sub-concepts
none

## Part of
script-discovery-process

## Implementation status
clean

## Design notes
Serves as an analytical perspective (Lens 12) to interrogate a skill's procedures for repetitive, error-prone, or stateful steps that should be converted into deterministic, self-verifying scripts rather than left as prose instructions.
