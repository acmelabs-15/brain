---
package: addy
name: Persona that calls another persona
slug: persona-that-calls-another-persona
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Persona that calls another persona

## Definition — verbatim
> "A `code-reviewer` that internally invokes `security-auditor` when it sees auth code." — references/orchestration-patterns.md:304

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 302 | defines | Cataloged as an orchestration anti-pattern where one persona internally invokes another persona directly |

## Consumes
User prompts or tasks where multi-perspective domain audits might be needed

## Produces
Architectural guidance requiring personas to recommend follow-up reviews instead of invoking them directly

## When applied
When designing agent personas, slash commands, or multi-agent workflows

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
An orchestration anti-pattern in addy forbidding personas from directly calling other personas. Chaining personas compromises single-perspective specialization, causes loss of context through intermediate summaries, multiplies conflicting output formats, and hides execution costs from the user.
