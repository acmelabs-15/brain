---
package: rjm
name: User docs
slug: user-docs
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# User docs

## Definition — verbatim
> "| **User docs** | `src/claude/`, `src/copilot-cli/`, `src/vs-code-agents/` | Consumers who install the agents | How to *use* the agents, available commands, workflows |" — docs/customization.md:213

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/customization.md | 213 | defined here | Defined in a table establishing audience separation, located in `src/` and focusing on how to use agents. |

## Consumes
Shipped agent definitions, commands, hooks, and operational workflows.

## Produces
End-user documentation files and usage instructions distributed within agent packages.

## When applied
Applied when authoring or packaging documentation directed to end users who install and run agents.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
User docs represent distributed documentation artifacts (located in `src/claude/`, `src/copilot-cli/`, `src/vs-code-agents/`) strictly targeted at consumers who install and use the agents. Under rjm conventions, user docs must never mix with contributor docs to prevent internal development details from leaking into end-user runtime instructions.
