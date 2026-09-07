---
package: rjm
name: Degraded Mode Protocol
slug: degraded-mode-protocol
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: src/claude/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Degraded Mode Protocol

## Definition — verbatim
> "If a tool or service is unavailable, do not halt on first failure or retry indefinitely. Follow this protocol:" — .claude/agents/analyst.md:204

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/analyst.md | 202 | defined here | Protocol defining fallback actions and handoff logging when MCP tools or services fail. |
| .claude/agents/architect.md | 570 | defined here | Architect fallback procedure when memory systems or documentation lookup tools fail. |
| .claude/agents/critic.md | 223 | defined here | Critic fallback protocol handling tool unresponsiveness during plan reviews. |
| .claude/agents/implementer.md | 861 | defined here | Implementer resilience protocol for handling tool degradation during code generation. |
| .claude/agents/qa.md | 765 | defined here | QA agent protocol defining fallback behavior during test execution tool outages. |
| src/claude/analyst.md | 202 | defined here | Canonical definition of the degraded mode fallback protocol. |

## Consumes
Tool invocation exceptions, service timeouts, or unavailable MCP servers.

## Produces
Logged failure reports, executed fallback procedures, and documented caveats in session handoffs.

## When applied
Triggered immediately upon encountering an unrecoverable tool or service failure during execution.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
Degraded Mode Protocol provides systematic operational resilience across all rjm agents. Instead of stalling or retrying indefinitely when MCP tools fail, agents follow documented fallback pathways (such as direct file reading or reduced-scope analysis) and record all degraded behavior in the task handoff.
