---
package: rjm
name: Janitor Agent
slug: janitor-agent
kind: role
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/janitor.md, sha256: 9de457fb6d9a8d9b380b4027b3ade8c089c44b4d09c9ff74293bc14a89889421}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Janitor Agent

## Definition — verbatim
> "# Janitor Agent" — .claude/agents/janitor.md:9

## Also called — verbatim
> "Tech Debt Remediation Specialist" — .claude/agents/janitor.md:30

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/janitor.md | 9 | defined here | Heading defining the support agent role dedicated to tech debt remediation and codebase cleanup. |

## Consumes
Codebase areas identified as carrying dead code, excessive complexity, outdated dependencies, obsolete tests, or stale documentation.

## Produces
Remediated codebases with deleted dead code, simplified abstractions, consolidated dependencies, and quantified debt removal metrics.

## When applied
When assigned codebase cleanup, simplification, dead-code pruning, or tech debt remediation tasks.

## Sub-concepts
tech-debt-remediation-specialist, less-code-less-debt, debt-removal-tasks, execution-strategy, analysis-priority

## Part of
none

## Implementation status
clean

## Design notes
The Janitor Agent is a specialized support role in rjm tasked with eliminating technical debt, pruning unused code, and aggressively simplifying codebase architecture. By operating under the principle that deletion is the most powerful refactoring, it counterbalances feature accumulation by continuously removing unnecessary code, dependencies, and stale documentation without introducing regressions.
