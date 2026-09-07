---
package: rjm
name: agent quality assessment
slug: agent-quality-assessment
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-suite.py, sha256: 65acc521915f252268c5eefda9c61ced62776d29003d88a7ffd851ec44343290}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# agent quality assessment

## Definition — verbatim
> "Run agent quality assessment via eval-agents.py." — scripts/eval/eval-suite.py:319

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-suite.py | 319 | defined here | Function docstring defines the quality assessment technique for agent definitions dispatched via eval-agents.py. |

## Consumes
Modified agent definition markdown files and target LLM evaluation model.

## Produces
Agent evaluation metrics, per-agent pass/fail status, and structured JSON assessment results.

## When applied
Triggered when files under `.claude/agents/` or agent prompt templates are modified.

## Sub-concepts
none

## Part of
eval-suite

## Implementation status
defects: missing-path

## Design notes
A specialized evaluation technique that verifies the quality and performance of modified agent definitions by executing domain-specific prompts through eval-agents.py. It ensures changes to agent prompts or tools maintain expected capability standards before code review or deployment.
