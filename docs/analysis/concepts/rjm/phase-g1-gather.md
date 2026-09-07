---
package: rjm
name: Phase G1: Gather
slug: phase-g1-gather
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase G1: Gather

## Definition — verbatim
(used, not defined)

> "### Phase G1: Gather" — .claude/skills/adr-generator/SKILL.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/SKILL.md | 60 | defines | Initial phase in ADR generator workflow gathering decision title, context, chosen decision, alternatives, and stakeholders. |

## Consumes
User prompt, decision parameters, and architectural motivation.

## Produces
Collected decision facts, significance assessment via ASR test, and readiness verification via START Definition of Ready.

## When applied
Triggered at the start of the adr-generator skill execution.

## Sub-concepts
start-definition-of-ready

## Part of
adr-generator

## Implementation status
clean

## Design notes
The intake phase of the ADR generation process responsible for collecting essential decision parameters from the user (title, context, choice, alternatives, stakeholders), performing significance checks using the ASR test to avoid unnecessary ADRs, and validating readiness via the START criteria before initiating research.
