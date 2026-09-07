---
package: matt
name: tracer-bullet tickets
slug: tracer-bullet-tickets
kind: artifact
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 4079d981bc2ac0a52aaf2c76d1c1476f4297937a8ff3a2e2322b6b730dc2d4f6}
  - {path: skills/engineering/ask-matt/SKILL.md, sha256: b25d86fb36b1d294eeead5d7db529f86135f9671f2afcd607579a63bb2213769}
  - {path: skills/engineering/to-tickets/agents/openai.yaml, sha256: 21bc6215fffcd7614e9f772bb1760e87cc5fc7dcc707e7d282bc9414267a6090}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tracer-bullet tickets

## Definition — verbatim
> "tracer-bullet tickets, each declaring its blocking edges, written as text in a local file, or as native blocking links on a real tracker." — README.md:200
> "tracer-bullet tickets, each declaring its **blocking edges**." — skills/engineering/ask-matt/SKILL.md:23

## Also called — verbatim
> "Split a plan into tracer-bullet tickets" — skills/engineering/to-tickets/agents/openai.yaml:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| README.md | 200 | defined here | Reference catalog summary of to-tickets breaking plans into tracer-bullet tickets with blocking edges |
| skills/engineering/ask-matt/SKILL.md | 23 | defined here | Router flow step splitting multi-session specs into self-contained tracer-bullet tickets |
| skills/engineering/to-tickets/agents/openai.yaml | 3 | used here | Agent tool configuration short description stating to split plans into tracer-bullet tickets |

## Consumes
A feature specification, plan, or conversational design produced during earlier exploration or grilling phases.

## Produces
Discrete, self-contained ticket files or issue tracker tasks specifying end-to-end functionality and dependency blockers.

## When applied
When transitioning from specification to implementation in multi-session builds via `/to-tickets`.

## Sub-concepts
none

## Part of
to-tickets

## Implementation status
clean

## Design notes
Tracer-bullet tickets represent thin, full-stack vertical slices through an application that establish an end-to-end path from input to outcome. Unlike layer-by-layer task breakdowns, each ticket exercises the complete architecture early. They are designed to be strictly self-contained with explicit blocking edges so that context windows can be safely cleared between individual ticket implementations.
