---
package: rjm
name: Multi-Expert Prompting
slug: multi-expert-prompting
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Multi-Expert Prompting

## Definition — verbatim
> "3. **Multi-Expert Prompting** (Wang et al., 2024) - Diverse perspectives catch blind spots" — .claude/skills/decision-critic/SKILL.md:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/scripts/decision-critic.py | 8 | used here | Cited in script docstring as theoretical foundation for contrarian and multi-perspective prompting. |
| .claude/skills/decision-critic/SKILL.md | 115 | used here | Academic grounding section citing Wang et al. for leveraging diverse expert viewpoints to surface blind spots. |

## Consumes
Decisions, designs, or complex prompts requiring multifaceted domain critique.

## Produces
Perspectives and critiques generated from distinct specialized personas (e.g. security, ops, contrarian).

## When applied
During Challenge and adversarial review steps to uncover blind spots that a homogenous prompt persona would miss.

## Sub-concepts
none

## Part of
decision-critic

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path

## Design notes
A prompt engineering technique that prompts the model to adopt multiple specialized domain expert perspectives, simulating a multidisciplinary review panel to catch subtle blind spots and unexamined risks.
