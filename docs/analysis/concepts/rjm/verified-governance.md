---
package: rjm
name: Verified governance
slug: verified-governance
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

# Verified governance

## Definition — verbatim
> "Three ranked open research programs for this repo, each with honest current-state evidence, first concrete steps, and a falsifiable milestone. Verified governance (ADR-069, proposed), cross-harness abstraction (ADR-072 proposed, ADR-068 accepted), and the self-improving loop (issue #1345)." — .claude/skills/ai-agents-research-frontier/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 3 | defined here | Ranked as research program 1 focusing on evaluating rule activation and prompt governance empirically. |

## Consumes
Empirical evaluation scenarios, rule activation datasets, and prompt governance metrics.

## Produces
Statistically defended evaluation results comparing gated-corpus against ungated sessions.

## When applied
Invoked during governance research to validate whether prompt rules and architectural constraints measurably improve agent task performance.

## Sub-concepts
adr-069

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An empirical research program designed to transform agent governance from subjective prompt guidelines into measurable, falsifiable engineering constraints. Utilizing controlled evaluation harnesses, verified governance quantifies whether enforcing specific rules improves agent adherence and task completion.
