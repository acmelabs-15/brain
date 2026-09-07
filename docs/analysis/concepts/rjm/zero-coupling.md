---
package: rjm
name: zero coupling
slug: zero-coupling
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-feasibility-analysis.md, sha256: fabe8278f52716f18b7a1e30350ec8ff0c55d155dcc91000ec5ab6940cdebfab}
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# zero coupling

## Definition — verbatim
(used, not defined)

> "Evidence verification for key claims (65% split, zero coupling, session estimates)" — .agents/analysis/adr-045-feasibility-analysis.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-feasibility-analysis.md | 8 | used here | Investigated as a core claim of ADR-045 that was challenged due to hardcoded output paths. |
| .agents/critique/ADR-045-debate-log.md | 53 | defined here | Challenged as false under P0-8 critique because 14 of 18 agent templates contain hardcoded paths. |

## Consumes
Modular component interfaces and abstract path contracts.

## Produces
Portable plugins completely free from host-repository path dependencies.

## When applied
Required during framework extraction to guarantee plugins can function in arbitrary consumer repositories.

## Sub-concepts
path-parameterization

## Part of
framework-extraction

## Implementation status
defects: missing-path, cross-file-contradiction

## Design notes
Zero coupling is an architectural ideal asserting that extracted framework components must possess no hardcoded assumptions about the consumer repository's layout, directory names, or configuration paths. In rjm, audit findings revealed that zero coupling was initially claimed prematurely, requiring substantial path parameterization work before components could operate independently.
