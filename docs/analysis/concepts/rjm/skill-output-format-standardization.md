---
package: rjm
name: Skill Output Format Standardization
slug: skill-output-format-standardization
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Output Format Standardization

## Definition — verbatim
> "Skill Output Format Standardization" — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 12 | defined here | Named in the title of ADR-103 as the overarching output architecture standard being corrected. |

## Consumes
Raw skill script execution results, error states, and diagnostic metadata.

## Produces
Standardized JSON envelopes wrapping execution results in `Success`, `Data`, `Error`, and `Metadata` fields.

## When applied
Across all skill scripts generating output for automated consumption or interactive display.

## Sub-concepts
valid-error-types, validate-envelope, write-skill-error

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Architectural pattern originating in ADR-056 and refined in ADR-103 establishing uniform JSON envelope contracts (`Success`, `Data`, `Error`, `Metadata`) for all skill scripts to enable composable multi-agent tooling.
