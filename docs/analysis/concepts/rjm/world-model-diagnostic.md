---
package: rjm
name: world-model-diagnostic
slug: world-model-diagnostic
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# world-model-diagnostic

## Definition — verbatim
> "description: Twenty-minute diagnostic mapping a team to a world-model paradigm (vector DB, structured ontology, signal-fidelity)." — .claude/skills/world-model-diagnostic/SKILL.md:4

## Also called — verbatim
> "name: world-model-diagnostic" — .claude/skills/world-model-diagnostic/SKILL.md:2

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/world-model-diagnostic/SKILL.md | 2 | defined here | Frontmatter declaration defining the 20-minute diagnostic skill for architecture and judgment audits. |
| scripts/eval/eval-knowledge-integration.py | 272 | used here | Key in evaluation suite defining knowledge integration test scenarios for diagnostic paradigm classification. |

## Consumes
Team interview inputs on information flow, data sources ranked by fidelity, and organizational decision boundaries.

## Produces
Intake summary, boundary audit summary, and final recommendation artifact with paradigm fit and build sequences.

## When applied
> "run the world model diagnostic" — .claude/skills/world-model-diagnostic/SKILL.md:28

## Sub-concepts
boundary-audit, boundary-layer, editorial-judgment, earned-structure, firm-finding, inference, open-question, organizational-resistance, outcome-encoding, signal-fidelity, simulated-judgment, time-in-system, vector-database, structured-ontology

## Part of
none

## Implementation status
defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2); doc-drift (scripts/eval/eval-knowledge-integration.py:86, 612)

## Design notes
A structured diagnostic process in rjm designed to map an organization's reality to an appropriate world-model paradigm and expose where automated information routing ends and editorial human judgment begins. By rejecting superficial numeric readiness scores in favor of rigorous boundary audits and explicit fact/inference labeling, it prevents premature automation of critical decisions.
