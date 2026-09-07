---
package: rjm
name: PR ownership and existence detection
slug: pr-ownership-and-existence-detection
kind: technique
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

# PR ownership and existence detection

## Definition — verbatim
> "### 2. PR ownership and existence detection" — .claude/commands/ship.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/ship.md | 40 | defined here | Sub-step querying the remote host to check for active PRs and identify branch authorship. |

## Consumes
Current git branch name and remote API response (`gh pr view` or `az repos pr list`).

## Produces
Discrete facts: whether an open PR exists, and whether the current session owns the branch.

## When applied
During Mode Detection in `/ship` immediately following VCS host identification.

## Sub-concepts
branch-ownership

## Part of
mode-detection, ship-command

## Implementation status
clean

## Design notes
A multi-factor query process in `/ship` that determines whether an active PR already exists for the current branch and distinguishes actual absence of a PR from API or network failures. This prevents destructive duplicate PR creation and ensures contributor permissions are respected.
