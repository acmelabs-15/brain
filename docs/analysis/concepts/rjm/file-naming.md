---
package: rjm
name: File Naming
slug: file-naming
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# File Naming

## Definition — verbatim
(used, not defined)

> "### Rule 3: File Naming" — .claude/agents/AGENTS.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/AGENTS.md | 92 | defined here | Section heading introducing the file extension and naming pattern conventions across Claude, Templates, VS Code, and Copilot CLI environments. |

## Consumes
none

## Produces
none

## When applied
> "| Environment | Pattern | Example |" — .claude/agents/AGENTS.md:94

## Sub-concepts
none

## Part of
claude-code-agents

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
A documentation section heading in AGENTS.md specifying file extension and naming patterns across target environments (`.md`, `.shared.md`, `.agent.md`). Classified as name-only per D-023 as it describes structural formatting conventions rather than an active lifecycle concept.
