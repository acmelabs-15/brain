---
package: rjm
name: Major Incidents Table
slug: major-incidents-table
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Major Incidents Table

## Definition — verbatim
> "### Phase 1: Check the Major Incidents Table" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 33 | defined here | Phase 1 catalog mapping the eight core repo incidents to summaries, retrospectives, and resolution statuses. |

## Consumes
Inquiries concerning hooks, generators, drift, review iteration, escape hatches, or silent defaults.

## Produces
Direct navigation pointers to relevant retrospective analyses, failure modes, and binding gates.

## When applied
Triggered as the primary triage step in failure archaeology workflows.

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
defects: doc-drift

## Design notes
The `Major Incidents Table` is a structured index in `ai-agents-failure-archaeology` that maps recurring problem categories to their anchor incidents and retrospectives. It enables rapid lookup of historical precedents, ensuring agents understand past failures before modifying related code.
