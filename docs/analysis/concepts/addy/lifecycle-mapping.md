---
package: addy
name: Lifecycle Mapping
slug: lifecycle-mapping
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/opencode-setup.md, sha256: 77a6bd91ef2837acb96feea4ae60f3bfea2c4155864c197394dd2166f49de864}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Lifecycle Mapping

## Definition — verbatim
(used, not defined)

> "### 3. Lifecycle Mapping (Implicit Commands)" — docs/opencode-setup.md:164

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/opencode-setup.md | 164 | defined here | Section heading mapping SDLC phases (DEFINE to SHIP) directly to specific skill pairs in agent-driven mode. |

## Consumes
Developer requests categorized by lifecycle stage.

## Produces
Direct association of lifecycle phases (DEFINE, PLAN, BUILD, VERIFY, REVIEW, SHIP) to corresponding skill workflows.

## When applied
In agent-driven environments lacking slash commands, mapping conceptual phases to underlying skills.

## Sub-concepts
implicit-commands

## Part of
none

## Implementation status
defects: [missing-path] in docs/opencode-setup.md

## Design notes
Lifecycle Mapping establishes the canonical correspondence between high-level SDLC phases (DEFINE, PLAN, BUILD, VERIFY, REVIEW, SHIP) and concrete skill workflows, ensuring consistent phase behaviors across different agent harnesses.
