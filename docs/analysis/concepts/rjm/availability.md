---
package: rjm
name: "Availability"
slug: availability
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md, sha256: 6f709db1093b8f67931da79d032f5171bdf85aabad2deba67d29e9350156983f}
  - {path: .claude/skills/slo-designer/SKILL.md, sha256: 2025c0f10b197b62258b80667ebd80b1f0a11c7918bd35230ce63cabf6805f4e}
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
  - {path: .claude/skills/slo-designer/templates/slo-config-template.yaml, sha256: e7371ba6f5c2a36e647af72ee6d8bbc7121c4e1c0ccebbce160477e54506a38d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Availability

## Definition — verbatim
> "### Availability" — .claude/skills/slo-designer/SKILL.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md | 31 | used here | Common SLI table row identifying availability as percentage of successful requests and primary impact metric. |
| .claude/skills/slo-designer/references/slo-design-patterns.md | 28 | used here | Recommended consumer-facing SLI target specifying 99.9% uptime. |
| .claude/skills/slo-designer/SKILL.md | 54 | defined here | SLI category section defining availability as percentage of successful requests. |
| .claude/skills/slo-designer/templates/slo-config-template.yaml | 18 | used here | Configuration template declaration of availability SLI measured via Prometheus query. |

## Consumes
Aggregated counts of successful HTTP requests and total request traffic.

## Produces
Availability percentage metric and uptime-based error budget balance.

## When applied
Applied continuously across all customer-facing endpoints, APIs, and databases.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift, exit-code-mismatch, internal-contradiction, missing-path, orphan

## Design notes
Availability measures the percentage of requests that succeed without error, serving as the foundational SLI for service health in RJM. It directly reflects uptime and user accessibility, driving deployment gates and chaos experiment impact evaluations.
