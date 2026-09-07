---
package: rjm
name: "cross-harness abstraction"
slug: cross-harness-abstraction
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

# cross-harness abstraction

## Definition — verbatim
> "Three ranked open research programs for this repo, each with honest current-state evidence, first concrete steps, and a falsifiable milestone. Verified governance (ADR-069, proposed), cross-harness abstraction (ADR-072 proposed, ADR-068 accepted), and the self-improving loop (issue #1345)." — .claude/skills/ai-agents-research-frontier/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-frontier/SKILL.md | 3 | defined here | Research program 2 developing single-source abstractions for generating multi-agent harness configurations. |

## Consumes
Generator architectures (`build/generate_agents.py`), contract test suites, and multi-harness specifications (ADR-068, ADR-072).

## Produces
Multi-platform agent outputs with zero manual hand-edits across target harness distributions.

## When applied
Applied when designing cross-platform architectures for Claude Code, Copilot CLI, and future agent runtimes.

## Sub-concepts
ai-agents-portability-campaign

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An architectural research program aimed at unifying agent definition surfaces across divergent developer platforms. By treating agent configurations, instructions, and hooks as canonical models that compile down to vendor-specific layouts, it eliminates manual porting overhead and prevents drift.
