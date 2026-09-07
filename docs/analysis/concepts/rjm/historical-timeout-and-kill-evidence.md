---
package: rjm
name: Historical timeout and kill evidence
slug: historical-timeout-and-kill-evidence
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/references/probe-evidence.md, sha256: 4f51c58a5c559556cf9521e7d4887e065d7557204a3ab1ecd981b4fa923e0284}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Historical timeout and kill evidence

## Definition — verbatim
(used, not defined)

> "## 3. Historical timeout and kill evidence" — .claude/skills/agent-harness-reference/references/probe-evidence.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/references/probe-evidence.md | 70 | defined here | Section heading recording empirical probe data on hook cold start times, host kill intervals, and SIGTERM exit 143 behavior. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
`Historical timeout and kill evidence` is an empirical probe section heading in `probe-evidence.md` preserving Issue #2295 performance data that motivated dispatcher consolidation, classified as `kind: name-only` per D-023.
