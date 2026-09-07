---
package: rjm
name: Conflict audit
slug: conflict-audit
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-procedure.md, sha256: 410c727ad2802a3cd5dd5d32009daf60016a6b3eb02947b0bd0693d068007b4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Conflict audit

## Definition — verbatim
> "## Step 0b. Conflict audit" — .claude/skills/context-optimizer/references/rule-audit-procedure.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-procedure.md | 72 | defined here | Step 0b of the Rule Audit Procedure checking for contradictions against existing rules across all skills. |

## Consumes
Proposed rule text and corpus of all active skill instructions and system prompts.

## Produces
Conflict assessment distinguishing genuine contradiction from complementary altitude or scope graduation.

## When applied
Run this when Step 0 shows the corpus near its ceiling, or when proposing new rules that touch domains covered by existing skills.

## Sub-concepts
complementary-altitude, scope-graduation

## Part of
rule-audit-procedure

## Implementation status
clean

## Design notes
A structured audit step in the Rule Audit Procedure that analyzes proposed rules against the entire active corpus of prompt instructions to detect mutual exclusivity, contradictions, or uncoordinated overlaps, preventing conflicting guidance to autonomous agents.
