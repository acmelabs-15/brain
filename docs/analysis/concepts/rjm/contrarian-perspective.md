---
package: rjm
name: Contrarian Perspective
slug: contrarian-perspective
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

# Contrarian Perspective

## Definition — verbatim
(used, not defined)

> "\"step_title\": \"Contrarian Perspective\"," — .claude/skills/decision-critic/scripts/decision-critic.py:219

## Also called — verbatim
`Contrarian Perspectives` — .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md:58

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/scripts/decision-critic.py | 219 | defined here | Step 5 title and prompt guidance directing the generation of the strongest adversarial case against the decision. |

## Consumes
Verification results from Step 4 (FAILED premises, UNCERTAIN risks) and decision context.

## Produces
Contrarian position statement, steel-manned 2-3 paragraph opposition case, and enumerated key risks.

## When applied
Executed as Step 5 in the challenge phase of the structured decision-critic workflow.

## Sub-concepts
steel-manning

## Part of
decision-critic

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
The adversarial challenge technique in decision critique that steel-mans the strongest possible counter-argument against a proposal, building upon verified defects and uncertainties to expose critical vulnerabilities and blind spots before commitment.
