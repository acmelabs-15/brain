---
package: rjm
name: silent-failure-hunter
slug: silent-failure-hunter
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/001-pr-60-review-gap-analysis.md, sha256: f92484a428624acb2a63ba01debe7986e783a7eb8a6a26e15e352b126f2d3202}
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# silent-failure-hunter

## Definition — verbatim
> "name: silent-failure-hunter" — .claude/agents/silent-failure-hunter.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/001-pr-60-review-gap-analysis.md | 22 | used here | Review agent deployed to identify silent failures, inadequate error handling, and logging gaps in PR-60. |
| .claude/agents/silent-failure-hunter.md | 2 | defined here | Agent definition declaring the silent failure hunter persona and review process. |
| docs/agent-catalog.md | 43 | used here | Catalog entry describing the silent failure hunter agent, its focus areas, and its core principles. |

## Consumes
Pull requests, diffs, exception handlers, fallback routines, and error logging logic.

## Produces
Audit reports cataloging suppressed errors, broad catch blocks, unhandled promise rejections, and silent failure vulnerabilities.

## When applied
Invoked after completing work involving error handling, catch blocks, fallback logic, or code that could suppress runtime errors.

## Sub-concepts
none

## Part of
pr-review-toolkit

## Implementation status
defects: other (lacks standard Handoff Protocol section, completion criteria, failure-mode contract, or explicit tool declaration block)

## Design notes
A specialized review agent role focused strictly on auditing error handling discipline to ensure that failures are never silently swallowed, exceptions provide actionable context, and fallback behaviors remain observable.
