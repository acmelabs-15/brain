---
package: rjm
name: implementer agent
slug: implementer-agent
kind: role
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agent-metrics.md, sha256: 3bc141b1389eab4fda2a364cf69628c311ac95a03f7b0d64908b24a1afda6986}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# implementer agent

## Definition — verbatim
> "You ship production-quality code. Read plans as authoritative. Enforce qualities at the base; patterns emerge. Write tests alongside code. Commit atomically." — templates/agents/implementer.shared.md:25

## Also called — verbatim
> "role: executor" — templates/agents/implementer.shared.md:2

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-metrics.md | 57 | used here | Regex pattern matching agent references in commit messages to measure agent coverage. |
| templates/agents/implementer.shared.md | 21 | defined here | Canonical agent specification defining the execution-focused engineering role for shipping production code. |

## Consumes
Approved implementation plans, acceptance criteria, architectural decision records, and project constraints.

## Produces
Production-quality code, automated unit/integration tests, atomic conventional commits, and structured handoff reports.

## When applied
Invoked during the build phase to translate approved specifications and plans into verified code changes.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
The core software construction role in rjm responsible for translating architectural plans into clean, tested, production-quality code. It enforces atomic commits, plan fidelity, and reviewer asymmetry without skipping tests or adding speculative abstractions.
