---
package: rjm
name: Agent Safety Assessment
slug: agent-safety-assessment
kind: template
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Safety Assessment

## Definition — verbatim
> "### Agent Safety Assessment" — .claude/skills/review/references/agent-safety.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 92 | defined here | Output format specification defining the structured 1-5 rating table for agent safety. |

## Consumes
Evaluation findings across tool scope, command safety, guardrail integrity, prompt integrity, and threat surface.

## Produces
Markdown table rating five safety dimensions from 1 to 5 with explanatory notes.

## When applied
Applied when formatting review results for the agent-safety review axis.

## Sub-concepts
overall-agent-safety-score

## Part of
agent-safety

## Implementation status
defects: doc-drift, other

## Design notes
The structured assessment table artifact produced by the agent-safety review axis scoring five core safety dimensions on a 1-5 scale before emitting detailed findings and verdicts.
