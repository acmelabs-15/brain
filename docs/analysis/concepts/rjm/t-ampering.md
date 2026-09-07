---
package: rjm
name: **T**ampering
slug: t-ampering
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# **T**ampering

## Definition — verbatim
> "| **T**ampering | Modifying data or code | Processes, data stores, data flows | Can data be modified in transit/at rest? |" — .claude/skills/threat-modeling/SKILL.md:166

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 166 | defined here | STRIDE threat category defined as modifying data or code, applying to processes, data stores, and data flows. |

## Consumes
Data flow payloads, persistent storage objects, and process execution code.

## Produces
Data manipulation threat scenarios and integrity controls (checksums, input validation, HMACs, TLS).

## When applied
Applied during Phase 2 (Threat Identification) across processes, data stores, and data flows.

## Sub-concepts
none

## Part of
stride, threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`**T**ampering` is the STRIDE threat category addressing unauthorized alteration of data in transit or at rest, requiring cryptographic integrity controls, parameterized queries, and strict input validation.
