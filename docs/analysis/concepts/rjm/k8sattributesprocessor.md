---
package: rjm
name: k8sattributesprocessor
slug: k8sattributesprocessor
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/observability/references/otel-migration-reference.md, sha256: 9fb61670c70cb6839e200e0ca0e19771a0d1eab3ed5292345a86f8c490811bbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# k8sattributesprocessor

## Definition — verbatim
> "Kubernetes enrichment: Use `k8sattributesprocessor` + `resourcedetection` for `k8s.cluster.name`, `k8s.namespace.name`, `host.arch`" — .claude/skills/observability/references/otel-migration-reference.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/observability/references/otel-migration-reference.md | 53 | used here | Referenced and applied in otel-migration-reference.md during verification and operational workflows. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
An operational technique or artifact (k8sattributesprocessor) utilized within the rjm ecosystem to ensure consistency and systematic execution.
