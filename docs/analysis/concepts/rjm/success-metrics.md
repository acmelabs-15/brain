---
package: rjm
name: Success Metrics
slug: success-metrics
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-032-ears-requirements-syntax.md, sha256: 79bb927602d0d6a3a0811765074ccded5e07b0533cdcb408691a3a9c0296c2eb}
  - {path: .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md, sha256: 21223deef2b27e1961fbf9f2c04cb9d97eb086e088ae58ab38e73644c61b5139}
  - {path: .agents/architecture/ADR-TEMPLATE.md, sha256: 9d9ce626ffb06bbe993eacd08dac582853969da5fb9a491680a5c4bf45f87fe1}
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Success Metrics

## Definition — verbatim
(used, not defined)

> "Success Metrics" — .agents/architecture/ADR-032-ears-requirements-syntax.md:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 117 | defined here | Section heading introducing target metric thresholds for EARS adoption and defect rates. |
| .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md | 260 | used here | Sub-section heading defining routing latency, plan accuracy, and enforcement targets. |
| .agents/architecture/ADR-TEMPLATE.md | 152 | defined here | Template section heading prescribing measurable target outcomes for architectural decisions. |
| .claude/skills/adr-generator/references/adr-template.md | 197 | defined here | Template reference section heading defining metric, target, and measurement tables for ADRs. |
| templates/agents/roadmap.shared.md | 99 | defined here | Shared template section heading specifying primary and secondary measurable user outcomes. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
A standard template and document section heading used across ADRs and roadmap templates to structure measurable target criteria rather than a standalone lifecycle concept.
