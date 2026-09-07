---
package: rjm
name: Verification Question Design
slug: verification-question-design
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Verification Question Design

## Definition — verbatim
> "We find that yes/no type questions perform worse for the factored version of CoVe." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:320

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 316 | defined here | Section specifying design guidelines for verification questions (open questions vs yes/no, LLM-generated vs rule-based). |

## Consumes
Draft baseline generation and identified factual claims needing verification.

## Produces
Open-ended, factual verification questions tailored by the model to target specific assertions.

## When applied
Applied during the verification planning turn of Chain-of-Verification.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
A prompt engineering technique for crafting verification questions in CoVe pipelines. It mandates open questions expecting factual answers rather than yes/no confirmations (which trigger agreement bias) and favors model-generated questions over rigid heuristics to achieve higher precision.
