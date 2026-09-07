---
package: rjm
name: Admission
slug: admission
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/analyze_skill_placement.py, sha256: 7073083f4b28fca148890b3a7149ef41098af111ded727c1350dac89b3857383}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Admission

## Definition — verbatim
> "Admission (whether content belongs always-on at all) is decided by the Decision" — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/analyze_skill_placement.py | 10 | defined here | Principle in skill placement analysis governing whether content belongs in always-on prompt context. |

## Consumes
Candidate content, model pre-training knowledge baseline, and token cost evaluation.

## Produces
Admission verdict (always-on, on-demand skill, or rejected).

## When applied
Evaluated before placing any instruction into always-on memory or system prompts.

## Sub-concepts
decision-framework

## Part of
context-optimizer

## Implementation status
clean

## Design notes
The governing threshold question in context optimization determining whether information warrants permanent inclusion in always-on agent context based on whether the model lacks pre-trained knowledge of it, rather than based on simple text heuristics.
