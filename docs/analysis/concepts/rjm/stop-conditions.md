---
package: rjm
name: Stop Conditions
slug: stop-conditions
kind: checklist
package_phase: rjm:research
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/research.md, sha256: a08ee89a1f75b86ad11d4044ef5ae0757629420384900a2f9ff2d38deeaeeda4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Stop Conditions

## Definition — verbatim
> "## Stop Conditions" — .claude/commands/research.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/research.md | 65 | defined here | Section heading enumerating criteria that trigger an immediate, graceful conclusion of research. |

## Consumes
Execution metrics including token consumption, search iteration counts, and goal achievement status.

## Produces
Decision to halt further tool execution and finalize output artifacts.

## When applied
Monitored continuously across all phases of the `/research` command.

## Sub-concepts
none

## Part of
research-and-incorporate-command

## Implementation status
defects: doc-drift

## Design notes
Explicit operational boundary conditions preventing runaway execution loops in research tasks. They mandate stopping when the topic questions are fully answered, when budget thresholds are approached, or when search queries yield diminishing returns, ensuring predictable token expenditure.
