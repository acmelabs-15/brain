---
package: matt
name: Triage Notes
slug: triage-notes
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Triage Notes

## Definition — verbatim
> "## Triage Notes" — skills/engineering/triage/SKILL.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/triage/SKILL.md | 95 | defined here | Defines the structured markdown comment template posted when an issue moves to needs-info. |

## Consumes
Facts established during initial triage or grilling, alongside unresolved questions for the issue reporter.

## Produces
A structured issue comment clearly demarcating established facts from outstanding questions.

## When applied
Applied when transitioning an issue or pull request into the `needs-info` state.

## Sub-concepts
none

## Part of
triage

## Implementation status
defects: missing-path

## Design notes
A structured comment template used by the triage skill when moving an item to `needs-info`. It cleanly separates what has already been established from what is still required from the reporter, preventing duplicated investigative effort and ensuring questions are specific and actionable.
