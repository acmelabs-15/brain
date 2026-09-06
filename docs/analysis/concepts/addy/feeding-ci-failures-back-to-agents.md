---
package: addy
name: Feeding CI Failures Back to Agents
slug: feeding-ci-failures-back-to-agents
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Feeding CI Failures Back to Agents

## Definition — verbatim
> "The power of CI with AI agents is the feedback loop. When CI fails:" — skills/ci-cd-and-automation/SKILL.md:166

## Also called — verbatim
`Feeding CI Failures Back to Agents` — skills/ci-cd-and-automation/SKILL.md:164

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 164 | defined here | Section heading defining the feedback loop capturing CI failure output for automated agent remediation |

## Consumes
CI failure logs (compiler errors, lint violations, test failure stack traces, build errors).

## Produces
Structured agent repair prompts, local fix commits, and automated re-push verification cycles.

## When applied
Whenever a remote CI job fails on a branch authored or maintained by an AI agent.

## Sub-concepts
none

## Part of
ci-cd-and-automation

## Implementation status
clean

## Design notes
In addy, Feeding CI Failures Back to Agents defines a key agent-automation loop. By feeding raw CI failure diagnostics directly back into an agent's prompt context, the agent maps lint failures to autofix commands, type errors to code repairs, test failures to debugging workflows, and build errors to configuration fixes, enabling autonomous self-healing pipelines.
