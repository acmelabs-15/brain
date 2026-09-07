---
package: rjm
name: agent
slug: agent
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-075-form-factor-eval-methodology.md, sha256: 1354265b364c96bc78dc198932ba51ed1a53db825a41c0b24e086c4e48ff8fe8}
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
  - {path: .claude/skills/observability/schema.json, sha256: 1ace8993f809a4b99066c54b6612555cd89aaae0de1af9585a317fdb3b370632}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: scripts/validation/check_agent_skill_discriminator.py, sha256: fb835dbd3148f58de0a6befdf83d9365975869f178def8624ab3e2b1832db6ce}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# agent

## Definition — verbatim
> "| **Agent** | A specialized AI persona with a defined role (analyst, implementer, security, etc.) |" — README.md:142

## Also called — verbatim
`2. `agent`: the agent's `templates/agents/<name>.shared.md` as a subagent system prompt.` — .agents/architecture/ADR-075-form-factor-eval-methodology.md:44

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 44 | used here | Evaluated as the second delivery variant, configured as a subagent system prompt. |
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 49 | used here | Required run record variant in the evaluation harness spike. |
| .claude/skills/observability/schema.json | 33 | defined here | Schema field definition for the agent name emitting observability events. |
| README.md | 142 | defined here | Top-level definition of an agent as a specialized AI persona with a defined role. |
| scripts/validation/check_agent_skill_discriminator.py | 2 | used here | Phase 3 CI check detecting agents misclassified in skill form. |

## Consumes
Role specification, task instructions, and tool access permissions.

## Produces
Autonomous execution outputs, structured handoffs, and verification verdicts.

## When applied
Dispatched by an orchestrator to execute specialized lifecycle tasks requiring isolation.

## Sub-concepts
orchestrator, handoff

## Part of
agent-architecture

## Implementation status
defects: internal-contradiction, cross-file-contradiction, doc-drift, missing-path, other

## Design notes
An agent is a specialized AI persona possessing a dedicated role, isolated context, and specific tool capabilities. In rjm, agents execute structured lifecycle phases under orchestrator governance, passing verified state via explicit handoffs.
