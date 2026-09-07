---
package: rjm
name: Behavioral Evaluation
slug: behavioral-evaluation
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Behavioral Evaluation

## Definition — verbatim
> "Changes to prompts, skills, and agent definitions can alter LLM behavior. ADR-057 requires behavioral evaluation before merging changes to these files." — CONTRIBUTING.md:335

## Also called — verbatim
> "## Validating Prompt, Skill, and Agent Changes (ADR-057)" — CONTRIBUTING.md:333

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 335 | defined here | Mandatory testing procedure executing scenario-based evaluations against modified prompts, skills, and agents. |

## Consumes
Scenario test cases, baseline model responses, and modified prompt instructions.

## Produces
Comparative score evaluating regressions across target LLM decision branches.

## When applied
Required before merging any changes to commands, skills, or agent prompts under ADR-057.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: missing-path

## Design notes
Quality gate methodology complementing structural tests by empirically measuring LLM behavioral shifts across simulated operational scenarios before merging prompt modifications.
