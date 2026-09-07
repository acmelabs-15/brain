---
package: rjm
name: Threat Matrix Summary
slug: threat-matrix-summary
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Threat Matrix Summary

## Definition — verbatim
(used, not defined)

> "## 4. Threat Matrix Summary" — .claude/skills/threat-modeling/templates/threat-model-template.md:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/templates/threat-model-template.md | 154 | used here | Section heading and summary table aggregating all identified threats, ratings, and mitigation statuses. |

## Consumes
Detailed STRIDE analysis findings, likelihood scores, impact assessments, and mitigation assignments.

## Produces
Consolidated high-level security status dashboard table enabling executive and engineering review.

## When applied
Applied in Phase 4 (Validation) and document generation to summarize all threats and tracking states in one view.

## Sub-concepts
none

## Part of
threat-model-template

## Implementation status
clean

## Design notes
`Threat Matrix Summary` is an architectural reporting artifact in `rjm` that compiles all enumerated threats, their STRIDE categories, risk scores, and current resolution states into a single reference table.
