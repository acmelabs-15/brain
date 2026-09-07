---
package: matt
name: native blocking link
slug: native-blocking-link
kind: technique
package_phase: matt:wayfinder
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

# native blocking link

## Definition — verbatim
> "GitLab's **native blocking link**, the canonical, UI-visible representation." — skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md | 43 | used here | Designated as the canonical, UI-visible mechanism for linking blocking issues in GitLab. |

## Consumes
GitLab issues requiring sequential dependency management.

## Produces
Platform-enforced blocking relationships between GitLab issues.

## When applied
When defining prerequisite dependencies between child tickets in GitLab wayfinder operations.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
GitLab's platform feature for linking blocked issues to their blockers, used by wayfinder to establish machine-verifiable dependency graphs across tickets.
