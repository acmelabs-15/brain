---
package: rjm
name: "Quick tier"
slug: quick-tier
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Quick tier

## Definition — verbatim
> "Quick tier gate first (AGENTS.md Skill-First section)" — .claude/skills/ai-agents-research-frontier/SKILL.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 60 | used here | Mandatory preliminary gate required before pursuing new capability ideas outside open research programs. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 58 | used here | Decision tool table listing Quick tier as a 1-2 hour required gate for strategic build/buy decisions. |

## Consumes
New capability proposal, initial scope definition, and high-level market scan.

## Produces
Rapid 1-2 hour preliminary determination whether to proceed, conduct full TCO, or discard.

## When applied
Triggered as a mandatory initial gate before writing specifications or baselines for new capabilities.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A lightweight, time-boxed (1-2 hours) preliminary evaluation gate within the buy-vs-build framework. By filtering unviable build projects early before deep architectural or financial modeling occurs, the Quick tier minimizes analysis paralysis while ensuring major investments receive appropriate scrutiny.
