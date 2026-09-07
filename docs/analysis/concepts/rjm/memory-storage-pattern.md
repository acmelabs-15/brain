---
package: rjm
name: Memory Storage Pattern
slug: memory-storage-pattern
kind: pattern
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Memory Storage Pattern

## Definition — verbatim
> "### Memory Storage Pattern" — .claude/skills/retrospective/references/diagnosis-and-actions.md:262

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 262 | defined here | Standard pattern and template for writing diagnosed root causes to persistent memory. |

## Consumes
Diagnosed root cause categories, impact assessments, detection rules, and prevention actions.

## Produces
Structured memory document written via `mcp__serena__write_memory` with key metadata fields.

## When applied
Applied during Phase 2 root cause pattern management after Five Whys analysis identifies root causes to store for future prevention.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Memory Storage Pattern defines the canonical entity structure for persisting root-cause diagnoses into durable agent memory. By prescribing specific fields (Description, Frequency, Impact, Detection, Prevention, Source), it ensures consistent schema design so future agent sessions can retrieve and match historical failure patterns.
