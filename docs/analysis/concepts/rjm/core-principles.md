---
package: rjm
name: Core Principles
slug: core-principles
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Core Principles

## Definition — verbatim
> "## Core Principles" — .claude/agents/silent-failure-hunter.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/silent-failure-hunter.md | 14 | defined here | Section heading outlining non-negotiable rules for surfacing and diagnosing failures without leaking secrets. |
| templates/agents/silent-failure-hunter.shared.md | 24 | defined here | Shared agent template section defining foundational operational rules for error auditing. |

## Consumes
silent-failure-hunter-agent

## Produces
auditing-standards

## When applied
> "You operate under these non-negotiable rules:" — .claude/agents/silent-failure-hunter.md:16

## Sub-concepts
none

## Part of
silent-failure-hunter-agent

## Implementation status
defects: other

## Design notes
A foundational set of operating principles governing the Silent Failure Hunter Agent, enforcing rules such as zero tolerance for hidden failures, required diagnostic context, and strict protection against secret leakage. In rjm, it establishes absolute criteria for error handling audits across all reviewed pull requests.
