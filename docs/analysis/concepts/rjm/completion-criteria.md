---
package: rjm
name: Completion Criteria
slug: completion-criteria
kind: checklist
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

# Completion Criteria

## Definition — verbatim
> "## Completion Criteria" — .claude/commands/context-hub-setup.md:167

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/context-hub-setup.md | 167 | defined here | Defined as an auditable verification rubric mapping each setup requirement to an exact check command. |

## Consumes
Setup execution output, plugin status reports, and active MCP configuration queries.

## Produces
A verified boolean determination of whether environment configuration meets all required conditions.

## When applied
At the conclusion of setup operations to determine whether all prerequisites have been satisfied.

## Sub-concepts
none

## Part of
context-hub-setup

## Implementation status
defects: doc-drift (.claude/commands/context-hub-setup.md:120)

## Design notes
Completion Criteria replaces ambiguous "done" claims with concrete, machine-checkable assertions. In rjm's setup commands, pairing each required condition with an explicit verification command ensures that agents declare success only when real environment state matches specifications.
