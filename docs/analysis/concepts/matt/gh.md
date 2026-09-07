---
package: matt
name: gh
slug: gh
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md, sha256: afd6852a80185217bd28aa5cbe456bef1e85be25be7bd1fba382d5b8ee428325}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# gh

## Definition — verbatim
(used, not defined)

> "Issues and specs for this repo live as GitHub issues. Use the `gh` CLI for all operations." — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wizard.md | 33 | used here | Used by generated wizards to write GitHub secrets and variables directly from the terminal. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md | 3 | used here | Establishes the GitHub CLI as the mandatory interface for issue and PR operations. |

## Consumes
Authenticated GitHub user session and repository remote context.

## Produces
Programmatic manipulation of issues, pull requests, labels, secrets, and variables.

## When applied
Required whenever agents or scripts interact with GitHub issue tracking or secret management.

## Sub-concepts
none

## Part of
setup-matt-pocock-skills

## Implementation status
clean

## Design notes
`gh` is GitHub's official command-line interface. In Matt's skills, it is the standard mechanism for both headless agent interaction with issue trackers (reading, creating, and updating tickets and PRs) and automated secret provisioning in setup wizards.
