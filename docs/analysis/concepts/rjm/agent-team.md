---
package: rjm
name: agent-team
slug: agent-team
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-072-jtbd-plugin-architecture.md, sha256: dd3585a127093a7612362aaf1737c13379ef32d464af6f14b6151f87364c8052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# agent-team

## Definition — verbatim
> "| `agent-team` | Delegate to specialists | the specialist agents, routing, and the memory the agents share |" — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-072-jtbd-plugin-architecture.md | 88 | defined here | Defined in the plugin taxonomy table as the plugin packaging specialist agents, routing, and shared memory |

## Consumes
Specialist agent definitions, agent routing logic, and shared memory infrastructure.

## Produces
A standalone plugin enabling multi-agent delegation and collaboration.

## When applied
Installed by developers who need specialist agent delegation capabilities.

## Sub-concepts
none

## Part of
jtbd-based-plugin-architecture

## Implementation status
defects: missing-path

## Design notes
agent-team is a JTBD plugin package designed for the job of "delegating to specialists." It encapsulates the repository's specialist agent definitions (such as architect, security, critic), their inter-agent routing mechanisms, and the shared context/memory stores they rely on.
