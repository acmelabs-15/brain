---
package: rjm
name: Read Project Documentation First
slug: read-project-documentation-first
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Read Project Documentation First

## Definition — verbatim
> "**Stop criteria** (apply when `.agents/` exists): Do NOT begin implementation until the files below are read AND you can answer, in one sentence each:" — templates/agents/implementer.shared.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/implementer.shared.md | 81 | defines | Blocking pre-implementation gate requiring agents to read root instructions, project constraints, and ADRs before writing code. |

## Consumes
`AGENTS.md`, `.agents/AGENT-INSTRUCTIONS.md`, `.agents/CLAUDE.md`, `.agents/architecture/ADR-*.md`.

## Produces
Three one-sentence statements answering project constraints, Claude-specific requirements, and binding ADRs.

## When applied
Evaluated at the start of any implementation task before touching any source code.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
A mandatory blocking gate created to stop agents from prematurely executing code changes without reading project context, style requirements, and binding architectural decisions, mitigating architectural drift and repeated mistakes documented in past retrospectives.
