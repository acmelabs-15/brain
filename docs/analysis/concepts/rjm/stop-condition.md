---
package: rjm
name: Stop Condition
slug: stop-condition
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/context-hub-setup.md, sha256: df6e2fd17f0cae46d889f77dc4c7169422c86095ece9aace0c584738b429522f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Stop Condition

## Definition — verbatim
> "### Stop Condition" — .claude/commands/context-hub-setup.md:178

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/context-hub-setup.md | 178 | defined here | Mandates immediate command termination after emitting the status block to prevent continuous polling. |

## Consumes
Completed workflow status blocks and satisfaction of all setup completion criteria.

## Produces
Definitive cessation of agent execution and prevention of unnecessary background polling.

## When applied
Immediately following the emission of final status summaries in command workflows.

## Sub-concepts
none

## Part of
context-hub-setup

## Implementation status
defects: doc-drift (.claude/commands/context-hub-setup.md:120)

## Design notes
Stop Condition provides a critical behavioral control for autonomous agents, establishing an unambiguous terminal state for a workflow. By explicitly forbidding further polling, re-checking, or unsolicited followup steps once the final status block is delivered, it halts runaway execution loops and minimizes token consumption.
