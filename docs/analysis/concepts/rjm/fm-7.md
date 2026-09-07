---
package: rjm
name: FM-7
slug: fm-7
kind: pattern
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

# FM-7

## Definition — verbatim
> "Self-contained agent delegation failure" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 89 | used here | Mapped as failure mode FM-7 representing self-contained agent delegation failure anchored by the 2025-12-19 incident. |

## Consumes
Subagent dispatch instructions, delegation boundaries, context envelopes.

## Produces
Subagent idle hangs, missing outputs, or execution across unbounded directories.

## When applied
When investigating failures in multi-agent systems where subagents stalled, drifted, or failed to complete delegated goals.

## Sub-concepts
none

## Part of
failure-mode-catalog

## Implementation status
defects: doc-drift

## Design notes
FM-7 identifies breakdowns where an orchestrator delegates tasks to subagents without providing sufficient self-contained context, inputs, or execution boundaries, resulting in subagent drift or failure to report back. In rjm, addressing FM-7 established strict handoff protocols, structured dispatch briefs, and bounded execution scopes.
