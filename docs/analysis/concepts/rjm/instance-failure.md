---
package: rjm
name: Instance failure
slug: instance-failure
kind: pattern
package_phase: rjm:chaos-experiment
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/chaos-engineering-principles.md, sha256: 349f7d0a141a8b6b34a2318666baf0e1f662f08d57d3f139ed50ceba80ecd581}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Instance failure

## Definition — verbatim
> "| Instance failure | Kill process, terminate VM, evict pod |" — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 23 | used here | Common experiment category injecting compute node, process, VM, or pod terminations. |

## Consumes
Target compute node, container pod, or operating system process.

## Produces
Simulated sudden host or process termination to validate failover, supervisor restart, and traffic draining.

## When applied
Applied when validating compute-level resilience, auto-recovery mechanisms, and load balancer failover policies.

## Sub-concepts
none

## Part of
chaos-engineering

## Implementation status
defects: missing-path

## Design notes
Instance failure evaluates whether application clusters withstand abrupt host, container, or process termination without dropped requests. RJM structures instance failure as a baseline chaos category to verify horizontal redundancy and automated orchestration recovery before testing more complex distributed failures.
