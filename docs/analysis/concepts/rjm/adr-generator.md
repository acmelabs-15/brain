---
package: rjm
name: adr-generator
slug: adr-generator
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
  - {path: scripts/validation/rule_activation_coverage_baseline.json, sha256: e22e8410c9691d388ec6b977c3e4670fac9662a56149a43849834d3e6b4cba3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# adr-generator

## Definition — verbatim
(used, not defined)

> "Do NOT use to author a new ADR (use adr-generator)." — .claude/skills/adr-review/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/SKILL.md | 4 | used here | Description notes that adr-review should not be used to author a new ADR, directing users to adr-generator instead. |
| .claude/skills/ai-agents-research-frontier/SKILL.md | 128 | used here | Recommends routing publishable methodology documentation through adr-generator or governance docs. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 143 | used here | Prescribes writing new ADRs with adr-generator when research results alter architecture, policy, or public contracts. |
| scripts/eval/eval-knowledge-integration.py | 220 | used here | Configuration key in EVAL_PROMPTS testing LLM adherence to adr-generator five-phase authoring workflow. |
| scripts/validation/rule_activation_coverage_baseline.json | 25 | used here | Listed in uncovered_skills tracking test coverage for repository skills. |

## Consumes
Architectural proposals, technical context, alternatives, stakeholders, and repository ADR templates.

## Produces
Structured Architecture Decision Record documents adhering to project conventions.

## When applied
Applied when authoring a new Architecture Decision Record before triggering multi-agent debate review.

## Sub-concepts
none

## Part of
adr-review

## Implementation status
defects: doc-drift, missing-path

## Design notes
A skill in rjm dedicated to scaffolding, generating, and validating Architecture Decision Records across supported templates (Nygard, MADR) prior to multi-agent debate and governance sign-off.
