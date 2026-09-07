---
package: rjm
name: Python-first
slug: python-first
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/PROJECT-CONSTRAINTS.md, sha256: b992b592ba20b20faca1f1a120ff4068e3d5197e07ca22bb39b33135d4ec4686}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Python-first

## Definition — verbatim
(used, not defined)

> "ADR-042 establishes Python-first development due to 70-second PowerShell startup times, CodeQL support, and AI/ML ecosystem alignment." — .agents/governance/PROJECT-CONSTRAINTS.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/PROJECT-CONSTRAINTS.md | 48 | used here | Cited in rationale summary as the foundational language policy established by ADR-042. |

## Consumes
Scripting requirements, language trade-off analyses, and execution benchmarks.

## Produces
Python implementations (.py) instead of PowerShell (.ps1) or bash (.sh).

## When applied
Applied when writing new automation scripts, validation gates, or evaluation utilities.

## Sub-concepts
none

## Part of
language-constraints

## Implementation status
defects: cross-file-contradiction

## Design notes
An architectural language policy in rjm mandating Python as the primary scripting language across all repository workflows. Motivated by severe PowerShell cold-start latency, superior CodeQL static analysis support, and broad AI/ML ecosystem tooling, this convention standardizes tooling and testing under pytest and uv.
