---
package: matt
name: Merge requests
slug: merge-requests
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md, sha256: ea175f73d193b3f55819c0ed9bbccf6ee0e70ad8f928e3d7607596c53380acd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Merge requests

## Definition — verbatim
> "- **Merge requests**: GitLab calls PRs" — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md | 13 | used here | Introduces GitLab merge requests as the platform equivalent to GitHub pull requests. |

## Consumes
Proposed code branches in GitLab repositories.

## Produces
Code reviews, automated pipeline results, discussions, and merged branch history.

## When applied
When contributing code changes or evaluating external contributions in GitLab repositories.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
GitLab's code review and branch integration artifact, equivalent to GitHub pull requests, optionally included in triage when configured as an external request surface.
