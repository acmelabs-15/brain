---
package: rjm
name: output envelope
slug: output-envelope
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-028-powershell-output-schema-consistency.md, sha256: 9470b04b02f666ddf7eed434937a28f6495aae7dcdc8eaf96d4616a2ab65851b}
  - {path: .agents/architecture/ADR-063-memory-skill-decomposition.md, sha256: f2d854c1e297dcca3e517498ab92b225ec28b5b60baecaaba73b8d166e2606c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# output envelope

## Definition — verbatim
(used, not defined)

> "sub-skill emits the standard output envelope (ADR-056)." — .agents/architecture/ADR-063-memory-skill-decomposition.md:123

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-028-powershell-output-schema-consistency.md | 22 | used here | Describes migration of output consistency onto the Python skill-output envelope. |
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 123 | used here | Mandates that every decomposed memory sub-skill emit the standard output envelope. |

## Consumes
Raw script execution output and telemetry.

## Produces
Structured JSON or formatted console output wrapping operation results.

## When applied
Applied to all skill outputs returned to calling agents or terminal users.

## Sub-concepts
Success, Data, Error, Metadata

## Part of
rjm skill execution architecture

## Implementation status
defects: missing-path

## Design notes
A standardized container structure for all skill execution responses, encapsulating execution status, payload data, error information, and execution metadata. By establishing a uniform envelope contract across all sub-skills and tools, invoking agents can reliably parse results and handle errors deterministically.
