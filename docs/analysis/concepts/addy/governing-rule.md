---
package: addy
name: governing rule
slug: governing-rule
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# governing rule

## Definition — verbatim
> "The governing rule: **the user (or a slash command) is the orchestrator. Personas do not invoke other personas.**" — references/orchestration-patterns.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 5 | defined here | Architectural rule establishing that only users or slash commands orchestrate, and personas never invoke other personas |

## Consumes
Agent workflow design, persona compositions, slash command implementations

## Produces
Flat, single-hop agent coordination architectures that prevent context bloat and runaway invocation loops

## When applied
When designing, implementing, or evaluating any agent persona, slash command, or multi-agent workflow

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
The governing rule is the foundational architectural constraint in addy's multi-agent design: the user or a slash command is the sole orchestrator, and personas are strictly forbidden from calling other personas. By requiring flat orchestration where personas remain focused specialists reporting findings back to the top-level session, it prevents cascading context loss, conflicting personas, runaway token expenditure, and opaque multi-layer debugging.
