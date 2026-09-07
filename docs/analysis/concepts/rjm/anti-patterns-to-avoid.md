---
package: rjm
name: Anti-Patterns to Avoid
slug: anti-patterns-to-avoid
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Anti-Patterns to Avoid

## Definition — verbatim
> "## Anti-Patterns to Avoid" — .claude/skills/slo-designer/references/slo-design-patterns.md:202

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 202 | defined here | Reference section cataloging five common SLO design mistakes (unrealistic targets, too many SLOs, target higher than dependencies, no error budget policy, SLO equal to SLA). |

## Consumes
Proposed SLO targets, candidate SLI lists, and dependency availability limits.

## Produces
Identification and corrective fixes for flawed reliability targets and metric proliferation.

## When applied
When validating drafted SLO configurations during review before putting them into production.

## Sub-concepts
none

## Part of
slo-design-patterns

## Implementation status
defects: orphan

## Design notes
Anti-Patterns to Avoid provides a five-point checklist of common reliability design mistakes (such as targeting 100% uptime or matching SLOs to legal SLAs), steering teams toward defensible, maintainable reliability goals.
