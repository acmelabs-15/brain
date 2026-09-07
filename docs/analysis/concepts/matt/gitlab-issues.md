---
package: matt
name: GitLab issues
slug: gitlab-issues
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

# GitLab issues

## Definition — verbatim
> "Issues and specs for this repo live as GitLab issues." — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md | 3 | used here | Configured as the issue and specification tracking backend for GitLab repositories. |

## Consumes
User feature requests, bug reports, wayfinding child tasks, and specifications.

## Produces
Tracked tickets, discussion threads, and resolved state within GitLab.

## When applied
When a repository is configured to use GitLab as its primary issue tracker.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
GitLab platform work items that serve as the remote tracking backend for issues, specifications, and wayfinding tasks when operating within GitLab-hosted repositories.
