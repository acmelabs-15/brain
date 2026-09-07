---
package: rjm
name: Tampering with Data
slug: tampering-with-data
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/stride-methodology.md, sha256: 62b62c288dc96d275f6b835cc75809816cb1acc3cb8d53da48c7499a36192a0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tampering with Data

## Definition — verbatim
> "**Definition**: Modifying data or code without proper authorization." — .claude/skills/threat-modeling/references/stride-methodology.md:38

## Also called — verbatim
> "### T - Tampering" — .claude/skills/threat-modeling/templates/threat-model-template.md:108

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/stride-methodology.md | 36 | defined here | Defines the Tampering threat category, questions, examples, and integrity mitigations. |

## Consumes
Data payloads, transit channels, storage volumes, code execution paths.

## Produces
Threat identification for unauthorized data modifications and required integrity controls.

## When applied
Evaluated against processes, data stores, and data flows crossing trust boundaries.

## Sub-concepts
none

## Part of
stride

## Implementation status
clean

## Design notes
Tampering with Data covers unauthorized alterations to persistent stores, in-flight network messages, or runtime binaries, addressed in system design through cryptographic hashes, digital signatures, and rigorous input validation.
