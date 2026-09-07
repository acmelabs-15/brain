---
package: rjm
name: "Error rate"
slug: error-rate
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

# Error rate

## Definition — verbatim
> "### Error Rate" — .claude/skills/slo-designer/SKILL.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md | 34 | used here | Common SLI row measuring percentage of failed requests as direct reflection of customer impact. |
| .claude/skills/slo-designer/references/slo-design-patterns.md | 31 | used here | Recommended pattern target specifying error rate below 0.1%. |
| .claude/skills/slo-designer/SKILL.md | 84 | defined here | SLI category section defining error rate as percentage of 5xx HTTP responses. |
| .claude/skills/slo-designer/templates/slo-config-template.yaml | 37 | used here | YAML configuration template SLI definition for HTTP 5xx error rate measurement. |

## Consumes
Total request counts and HTTP 5xx response or unhandled exception totals.

## Produces
Error percentage ratios and error budget consumption rates.

## When applied
Tracked continuously across batch systems, APIs, and background processing pipelines.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift, exit-code-mismatch, internal-contradiction, missing-path, orphan

## Design notes
Error rate measures the proportion of requests resulting in failures. In RJM, error rate directly quantifies negative customer impact and serves as the primary metric for calculating error budget burn rates during deployments and experiments.
