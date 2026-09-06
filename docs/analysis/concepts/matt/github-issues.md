---
package: matt
name: GitHub Issues
slug: github-issues
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md, sha256: afd6852a80185217bd28aa5cbe456bef1e85be25be7bd1fba382d5b8ee428325}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# GitHub Issues

## Definition — verbatim
> "Issues and specs for this repo live as GitHub issues. Use the `gh` CLI for all operations." — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 8 | used here | Lists GitHub Issues as one of the supported issue tracker host options. |
| external/implement.md | 50 | used here | Mentions GitHub Issues when clarifying that implement does not close issues on completion. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md | 3 | used here | Establishes GitHub Issues as the issue tracking backend operated via the gh CLI. |

## Consumes
A GitHub repository with issue tracking enabled and authenticated `gh` CLI access.

## Produces
Remote issue management, label synchronization, and comments tracked via GitHub.

## When applied
Selected as the repository's issue tracker backend during `/setup-matt-pocock-skills`.

## Sub-concepts
none

## Part of
issue-tracker

## Implementation status
defects: script-bug, orphan (setup does not create labels in tracker per #616; unreferenced external doc snapshot)

## Design notes
The default remote issue tracking integration in matt's skills, using the official gh CLI to read, create, comment on, and transition issues and specs.
