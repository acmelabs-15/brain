---
package: rjm
name: kill budgets
slug: kill-budgets
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-frontier/SKILL.md, sha256: 4b7a7e015d377a63efb5d544e3b1658754c0056e223d5483fcde67625ae2de3f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# kill budgets

## Definition — verbatim
(used, not defined)

> "on matchers, hook cwd, payload field casing, env anchors, and kill budgets" — .claude/skills/ai-agents-research-frontier/SKILL.md:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 145 | used here | Identified as one of five key semantic divergence points between Claude Code and Copilot CLI harnesses. |

## Consumes
Hook invocation parameters, harness process limits, and runtime timing constraints.

## Produces
Terminated hook processes when execution duration exceeds the host harness timeout allowance.

## When applied
When executing preToolUse or lifecycle hooks within host agent harnesses subject to strict runtime duration ceilings.

## Sub-concepts
none

## Part of
cross-harness-abstraction

## Implementation status
defects: missing-path

## Design notes
Kill budgets represent the strict execution timeouts imposed by agent harness platforms on plugin hooks, terminating processes that fail to return within allocated thresholds (such as 2 to 3 seconds). In rjm, differences in kill budgets across harnesses (Claude Code vs. Copilot CLI) combined with Python cold-start latency led to hook kills, requiring multi-target runtime contract tests and tight execution budgets to guarantee cross-harness reliability.
