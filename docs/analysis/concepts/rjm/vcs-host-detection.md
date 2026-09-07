---
package: rjm
name: VCS host detection
slug: vcs-host-detection
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

# VCS host detection

## Definition — verbatim
> "### 1. VCS host detection" — .claude/commands/ship.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/ship.md | 17 | defined here | Sub-step parsing `git remote get-url origin` to determine whether the remote is GitHub or Azure DevOps. |

## Consumes
Git remote URL string from `origin`.

## Produces
Detected host identifier (`github` or `ado`).

## When applied
During Mode Detection in `/ship` before interacting with remote repository APIs.

## Sub-concepts
none

## Part of
mode-detection, ship-command

## Implementation status
clean

## Design notes
A parsing routine that inspects the repository's origin remote URL to identify the host platform (GitHub vs ADO SSH/HTTPS patterns). It provides the foundational branching variable required to select appropriate CLI tools (`gh` or `az`) for pull request inspection and creation.
