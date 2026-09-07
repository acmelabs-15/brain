---
package: rjm
name: mode=contributor
slug: mode-contributor
kind: role
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/ship.md, sha256: a48916b477bcd72450de9594242e726b876b09389b0774a465785d70e92074a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# mode=contributor

## Definition — verbatim
> "If an open PR exists AND you are not its author (you are pushing onto a colleague's branch), `mode=contributor`." — .claude/commands/ship.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/ship.md | 51 | defined here | Operational mode selected when pushing onto an open PR authored by another contributor, prohibiting branch mutation and PR creation. |

## Consumes
An existing pull request on GitHub or Azure DevOps where the current user is not the PR author.

## Produces
An advisory ship report containing `RESULT: VALIDATED` and the recorded `/review` attestation.

## When applied
Applied by `/ship` during mode detection when an open PR exists for the current branch and the current operator is not the PR author.

## Sub-concepts
none

## Part of
ship

## Implementation status
clean

## Design notes
`mode=contributor` is an operational guardrail in rjm designed to prevent collaborative branch pollution. When an engineer collaborates on a branch owned by a colleague, writing an empty review marker commit or opening an additional pull request creates repository clutter and disrupts the primary owner's review flow. In contributor mode, `/ship` acts purely as an advisory pre-flight validator, running the `/review` axes and health checks to confirm correctness without mutating git history or repository state.
