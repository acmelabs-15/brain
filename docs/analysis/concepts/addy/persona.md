---
package: addy
name: Persona
slug: persona
kind: role
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

# Persona

## Definition — verbatim
> "A role with a perspective and an output format" — docs/agents.md:19

## Also called — verbatim
> "Agent Personas" — docs/agents.md:1

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agents.md | 19 | defines | Defines persona as a specialized agent role with a specific viewpoint and report format |

## Consumes
Code diffs, artifacts, or project context submitted for specialized review or evaluation.

## Produces
Specialized reports and evaluations adhering to the persona's defined output format.

## When applied
When a task requires an independent, single-perspective evaluation (e.g. code review, security audit, QA).

## Sub-concepts
none

## Part of
agent-skills

## Implementation status
clean

## Design notes
Personas represent the 'who' layer in addy's architecture, adopting strict specialist perspectives (security, review, QA, webperf) and outputting standardized reports without invoking other personas.
