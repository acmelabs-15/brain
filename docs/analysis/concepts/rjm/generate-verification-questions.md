---
package: rjm
name: Generate Verification Questions
slug: generate-verification-questions
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Generate Verification Questions

## Definition — verbatim
(used, not defined)

> "\"step_title\": \"Generate Verification Questions\"," — .claude/skills/decision-critic/scripts/decision-critic.py:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/scripts/decision-critic.py | 126 | defined here | Step 3 title and prompt guidance directing the generation of falsification questions for verifiable items. |

## Consumes
Tagged [V] verifiable items from Step 2 (`Classify Verifiability`).

## Produces
1-3 specific, independently answerable verification questions designed to falsify each verifiable assertion.

## When applied
Executed as Step 3 in the verification phase of the structured decision-critic workflow.

## Sub-concepts
falsification

## Part of
decision-critic

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
The question-formulation technique in Chain-of-Verification that generates open, falsification-focused queries for each verifiable claim before answering them, preventing confirmation bias by ensuring the questions do not assume the claim is true.
