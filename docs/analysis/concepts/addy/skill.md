---
package: addy
name: Skill
slug: skill
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agents.md, sha256: e03481592a725146ed48ee22010086dcfebd1faf1373cb99e7f2ed4d2100275c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Skill

## Definition — verbatim
> "A workflow with steps and exit criteria" — docs/agents.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agents.md | 18 | defines | Defines skill as the workflow layer containing steps and exit criteria invoked by personas or commands |

## Consumes
Developer intent, slash commands, or persona invocations.

## Produces
Structured guidance and step-by-step workflow execution leading to verified deliverables.

## When applied
When an agent executes a specific engineering task across any lifecycle phase.

## Sub-concepts
none

## Part of
agent-skills

## Implementation status
clean

## Design notes
A skill in the addy package represents the executable procedural layer ('the how') defining concrete workflow steps, anti-rationalization rules, and exit criteria, decoupled from user entry points and agent perspectives.
