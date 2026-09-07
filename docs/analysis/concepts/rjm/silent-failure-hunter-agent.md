---
package: rjm
name: Silent Failure Hunter Agent
slug: silent-failure-hunter-agent
kind: role
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

# Silent Failure Hunter Agent

## Definition — verbatim
> "# Silent Failure Hunter Agent" — .claude/agents/silent-failure-hunter.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/silent-failure-hunter.md | 10 | defined here | Agent heading and definition defining the persona, mission, and scope of the silent failure reviewer. |
| templates/agents/silent-failure-hunter.shared.md | 20 | defined here | Canonical agent template defining the silent failure audit role across execution platforms. |

## Consumes
pull-request-diff, code-changes

## Produces
error-handling-audit-report

## When applied
> "You review and report. You do not modify code; the implementer or PR author applies your recommendations." — .claude/agents/silent-failure-hunter.md:12

## Sub-concepts
core-principles

## Part of
rjm-review-system

## Implementation status
defects: other

## Design notes
A specialized review agent role dedicated to auditing code changes for unhandled exceptions, swallowed errors, empty catch blocks, and missing context in error reporting. In rjm, it prevents silent degradation and ensures system failures remain observable and actionable.
