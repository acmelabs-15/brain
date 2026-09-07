---
package: rjm
name: Domain Violations
slug: domain-violations
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Domain Violations

## Definition — verbatim
> "Technology convention violations (OTel, Prometheus)" — .claude/skills/doc-accuracy/SKILL.md:195

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 195 | defines | Defined as Class 4 of the documentation issue taxonomy detecting violations of external technology domain conventions. |

## Consumes
Technical documentation, configuration files, and architectural guidelines referencing external standards.

## Produces
Taxonomy findings classifying discrepancies where documentation contravenes established domain specifications or convention guidelines.

## When applied
Applied during Phase 4 behavioral verification and domain plugin evaluations within the doc-accuracy audit pipeline.

## Sub-concepts
none

## Part of
doc-accuracy

## Implementation status
defects: doc-drift

## Design notes
Class 4 in rjm's documentation accuracy taxonomy identifies cases where documentation presents architectural or configuration examples that violate external technology conventions (such as OpenTelemetry semantic conventions or Prometheus metric naming standards). It prevents packages from publishing guidance that contradicts upstream ecosystem norms.
