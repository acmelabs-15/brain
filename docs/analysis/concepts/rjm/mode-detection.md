---
package: rjm
name: Mode Detection
slug: mode-detection
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

# Mode Detection

## Definition — verbatim
> "## Mode Detection" — .claude/commands/ship.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/ship.md | 13 | defined here | Initial execution step in `/ship` deriving `host` and `mode` variables that branch all subsequent shipping actions. |

## Consumes
Git remote URLs, current branch metadata, and hosting provider CLI outputs.

## Produces
Target environment configuration (`host` = github|ado, `mode` = owner|contributor|direct).

## When applied
Executed as the first block of the `/ship` command before any pre-flight checks or commit pushes.

## Sub-concepts
vcs-host-detection, pr-ownership-and-existence-detection, branch-ownership

## Part of
ship-command

## Implementation status
clean

## Design notes
A deterministic reconnaissance step executed at the start of `/ship`. It discovers the hosting environment (GitHub vs Azure DevOps) and branch relationship (author vs collaborator), allowing the shipping workflow to dynamically adapt commands (e.g. `gh` vs `az repos`) and authorization flows without hardcoded assumptions.
