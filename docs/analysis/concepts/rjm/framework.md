---
package: rjm
name: Framework
slug: framework
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-inventory-audit.md, sha256: 22546fe4f4f7d789d03393c3f20a4d4991e3c0ec426c1539b9929e7405c87b11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Framework

## Definition — verbatim
> "Generic multi-agent infrastructure, no project-specific references" — .agents/analysis/adr-045-inventory-audit.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-inventory-audit.md | 15 | defined here | Summary table category classifying generic multi-agent infrastructure without project-specific references. |

## Consumes
Generic multi-agent agent definitions, reusable workflows, and domain-agnostic skills.

## Produces
Standalone, reusable multi-agent infrastructure suitable for packaging and distribution.

## When applied
Applied during codebase audits and modularization to identify components suitable for shared packaging.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
In rjm's architecture, Framework designates completely generic multi-agent assets that contain zero repository-specific or personal references, enabling direct extraction into reusable plugin distributions.
