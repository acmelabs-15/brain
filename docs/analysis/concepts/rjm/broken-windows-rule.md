---
package: rjm
name: Broken-windows rule
slug: broken-windows-rule
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Broken-windows rule

## Definition — verbatim
> "| A doc you touched is stale | Fix on contact (Phase 7) | Broken-windows rule |" — .claude/skills/ai-agents-docs-of-record/SKILL.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 45 | defined here | Cited as the governance rationale underlying the fix-on-contact requirement for keeping documentation accurate. |

## Consumes
Identified defects, drifted documentation, and minor code inconsistencies.

## Produces
Immediate localized fixes that prevent compound repository degradation.

## When applied
Applied continuously whenever minor defects, formatting flaws, or doc drifts are encountered.

## Sub-concepts
fix-on-contact

## Part of
ai-agents-docs-of-record

## Implementation status
defects: missing-path, doc-drift

## Design notes
The organizational principle that tolerating small, visible defects (such as drifted comments or stale documentation) encourages further deterioration across the codebase. Enforcing the rule ensures minor flaws are rectified immediately upon discovery.
