---
package: rjm
name: mode=owner
slug: mode-owner
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

# mode=owner

## Definition — verbatim
> "Otherwise `mode=owner`." — .claude/commands/ship.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/ship.md | 52 | defined here | Standard operational mode selected when the operator owns the branch or no open PR exists yet. |

## Consumes
A local feature branch where the current operator is the branch author or no pull request has been opened.

## Produces
A SHA-bound marker commit, an open pull request via `/push-pr` or `az repos pr create`, and automated merge execution.

## When applied
Applied by `/ship` during mode detection when no open PR exists for the branch or when the operator is the confirmed author of the open PR.

## Sub-concepts
marker-commit

## Part of
ship

## Implementation status
clean

## Design notes
`mode=owner` represents the authoritative shipping path in rjm, granting the invoking engineer full execution rights to advance the repository lifecycle. Unlike contributor mode, owner mode enforces the creation and verification of a SHA-bound `/review` marker commit on top of the branch tip, authorizes opening pull requests on GitHub or Azure DevOps, manages the discharge of deferred pipeline checks, and executes branch merges upon verification.
