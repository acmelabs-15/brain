---
package: rjm
name: Drift gates as measurements
slug: drift-gates-as-measurements
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md, sha256: be47542008b1aef449e2366ade2f13b336d8de6f05a426d4234572a8e97a6f7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Drift gates as measurements

## Definition — verbatim
> "### Drift gates as measurements" — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md | 70 | defined here | Section heading introducing the three separate drift surfaces as quantitative measurements rather than opaque binary blocks. |

## Consumes
The three canonical generated surfaces: agent definitions, platform mirror trees, and shared library modules.

## Produces
Numerical drift diagnostics and mismatch verification reports across generated surfaces.

## When applied
Applied whenever a code generation failure is suspected or during shift-left verification runs.

## Sub-concepts
none

## Part of
ai-agents-diagnostics-toolkit

## Implementation status
defects: unfailable-gate, other

## Design notes
A measurement paradigm in rjm that treats drift detection across generated trees (agents, mirrors, libraries) as quantitative diagnostic readings rather than merely opaque pass/fail CI blocks. Running the three measurement commands allows developers to observe the exact extent and direction of drift between canonical sources and generated artifacts.
