---
package: rjm
name: INPUT CLASSIFICATION
slug: input-classification
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase0-triage.md, sha256: 628e380912aa067063d9fedfd0993b8e95080953861c288db7da44f34e8db952}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# INPUT CLASSIFICATION

## Definition — verbatim
> "Step 1: INPUT CLASSIFICATION" — .claude/skills/skillforge/references/phase0-triage.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase0-triage.md | 17 | defined here | Diagram box and procedure step categorizing incoming user input into one of six distinct categories. |

## Consumes
Raw user input text, task descriptions, code snippets, or error traces.

## Produces
Classified input category (explicit_create, explicit_improve, skill_question, task_request, error_message, code_snippet).

## When applied
Applied as Step 1 of Phase 0 triage upon receiving any input in SkillForge.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
clean

## Design notes
Input Classification is the initial parsing step in SkillForge's Phase 0 triage. By identifying whether an input represents an error trace, a task request, or an explicit skill creation goal, it determines the appropriate semantic matching strategy against the skill ecosystem.
