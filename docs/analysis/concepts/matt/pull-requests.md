---
package: matt
name: Pull requests
slug: pull-requests
kind: artifact
package_phase: matt:triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md, sha256: afd6852a80185217bd28aa5cbe456bef1e85be25be7bd1fba382d5b8ee428325}
  - {path: skills/engineering/triage/SKILL.md, sha256: 623a2ed692bdc77d2090e2a3dea3b627dd722ad3bbaca0be83aada75292c8fc4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pull requests

## Definition — verbatim
> "**a PR is an issue with attached code**, using the same roles, same states, and same machine" — skills/engineering/triage/SKILL.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md | 16 | used here | Heading introducing pull requests as an optional triage request surface. |
| skills/engineering/triage/SKILL.md | 11 | used here | Establishes the core triage definition that external pull requests are treated as issues with attached code. |

## Consumes
External contributor code branches proposed against the repository.

## Produces
Triage labels, verification comments, review notes, or merged/closed status.

## When applied
When pull requests are configured as an incoming triage request surface for a repository.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Code contribution artifacts submitted via GitHub. In Matt's triage design, external pull requests are unified with issues under a common triage state machine, treating code review as an extension of issue triage rather than an isolated silo.
