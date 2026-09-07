---
package: rjm
name: Lightweight Process
slug: lightweight-process
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/workflow.md, sha256: ea1e77d662f8c4a12ffda0f422ecfffe351f582581aa20548657f26eef2e2fef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Lightweight Process

## Definition — verbatim
> "### Lightweight Process (Simple Prompts)" — .claude/skills/prompt-engineer/references/workflow.md:21
> "For simple prompts, skip section decomposition." — .claude/skills/prompt-engineer/references/workflow.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/workflow.md | 21 | defined here | Defined as an expedited five-step optimization path for simple, single-purpose prompts under 20 lines. |

## Consumes
Simple prompts (<20 lines, single purpose, no conditional branching or inter-section dependencies).

## Produces
Targeted prompt revisions with pattern attribution, delivered directly without formal section decomposition.

## When applied
During Phase 0 Triage when a prompt is determined to be simple, preventing unnecessary workflow overhead.

## Sub-concepts
none

## Part of
prompt-optimizer

## Implementation status
clean

## Design notes
Lightweight Process prevents over-engineering simple prompts. For prompts under 20 lines with straightforward single-purpose logic, it bypasses heavy section decomposition and visual card approval ceremonies in favor of direct pattern identification, targeted edits, and immediate delivery.
