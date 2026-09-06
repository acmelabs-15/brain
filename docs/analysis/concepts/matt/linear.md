---
package: matt
name: Linear
slug: linear
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Linear

## Definition — verbatim
(used, not defined)
> "The tool that hosts a repo's issues: GitHub Issues, Linear, a local `.scratch/` markdown convention, or similar." — CONTEXT.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 8 | used here | Lists Linear as an example issue tracker tool that hosts a repository's issues. |
| external/setup-matt-pocock-skills.md | 41 | used here | Explains that Linear is supported via the "Other" tracker setup option. |
| external/triage.md | 62 | used here | Notes that users operate triage against Linear via the linear CLI. |

## Consumes
A Linear workspace and configured CLI or API access integration.

## Produces
Project issue management, status synchronization, and team backlog organization.

## When applied
Configured as an issue tracking backend via custom documentation during repository setup.

## Sub-concepts
none

## Part of
issue-tracker

## Implementation status
clean

## Design notes
A supported third-party issue tracking platform commonly paired with GitHub (Linear for planning and issues, GitHub for PRs and git history), integrated into skills via custom prose in issue-tracker.md.
