---
package: addy
name: Official blog / changelog
slug: official-blog-changelog
kind: reference
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/source-driven-development/SKILL.md, sha256: 719d4e54083c90ded62112fb41df3dbc4619309118ee0e6aa4d846f92d8204af}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Official blog / changelog

## Definition — verbatim
> "| 2 | Official blog / changelog | react.dev/blog, nextjs.org/blog |" — skills/source-driven-development/SKILL.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/source-driven-development/SKILL.md | 72 | defined here | Priority 2 documentation source in the source hierarchy for release notes and recent API changes. |

## Consumes
Knowledge of recent releases, version increments, or migration requirements.

## Produces
Context on recent architectural changes, deprecation announcements, and migration guidance.

## When applied
When official reference documentation lacks sufficient details on recent version transitions or feature updates.

## Sub-concepts
none

## Part of
source-hierarchy

## Implementation status
defects: orphan, missing-path, doc-drift

## Design notes
Priority-two documentation tier capturing official release announcements and changelogs directly from framework maintainers, providing migration context and rationale for newly introduced or modified APIs.
