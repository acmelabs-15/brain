---
package: rjm
name: backlog-generator
slug: backlog-generator
kind: role
package_phase: rjm:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-046-planning-agent-rename.md, sha256: 4aa83f97ec94c728eb5b073562a55bf21866880e747688943abecacb6c5cd0fa}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# backlog-generator

## Definition — verbatim
> "Autonomous backlog generator that analyzes project state (open issues, PRs, code health) when agent slots are idle and creates 3-5 sized, actionable tasks." — docs/agent-catalog.md:18

## Also called — verbatim
`task-planner` — .agents/architecture/ADR-046-planning-agent-rename.md:42

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-046-planning-agent-rename.md | 42 | defined here | Defined in rename decision mapping former task-planner to backlog-generator for proactive discovery |
| docs/agent-catalog.md | 18 | used here | Listed in agent catalog as support role creating 3-5 sized actionable tasks when agent slots are idle |
| README.md | 419 | defined here | Summarized in lifecycle agent catalog table as proactive task discovery agent for Copilot CLI |
| src/claude/AGENTS.md | 144 | used here | Cataloged under coordination agents providing proactive task discovery capabilities |
| templates/AGENTS.md | 182 | used here | Listed in core agent catalog template under backlog generation |

## Consumes
Project repository state, open issues, pull requests, and codebase health signals.

## Produces
3-5 sized, actionable task definitions ready for assignment when agent slots become available.

## When applied
Invoked when agent slots are idle or during backlog grooming to proactively discover and structure pending project tasks.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
backlog-generator is an autonomous support agent role designed to monitor project state, open issues, and code health when agent slots are idle to discover and specify actionable tasks, complementing reactive task decomposition.
