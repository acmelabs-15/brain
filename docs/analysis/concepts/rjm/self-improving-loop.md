---
package: rjm
name: self-improving loop
slug: self-improving-loop
kind: pattern
package_phase: rjm:research
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

# self-improving loop

## Definition — verbatim
> "A correction observed once auto-proposes a guard that survives calibration" — .claude/skills/ai-agents-research-frontier/SKILL.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 3 | defined here | Highlighted as research program 3 investigating automated correction capture and guard generation. |
| .claude/skills/ai-agents-research-frontier/SKILL.md | 35 | defined here | Summary table entry outlining status, anchor artifacts, and falsifiable milestone for automated guard synthesis. |

## Consumes
Telemetry logs, user corrections, failure modes, and calibration test suites.

## Produces
Auto-proposed guard rules that prevent observed errors without inducing regressions.

## When applied
Invoked in retrospective and autonomous learning cycles when analyzing agent error traces.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A long-term research architecture that closes the loop between agent errors and preventative system rules. When an agent deviates or receives a user correction, the self-improving loop automatically synthesizes a candidate rule, tests it against calibration benchmarks, and proposes it for inclusion.
