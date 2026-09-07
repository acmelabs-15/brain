---
package: matt
name: native issue dependencies
slug: native-issue-dependencies
kind: technique
package_phase: matt:wayfinder
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md, sha256: afd6852a80185217bd28aa5cbe456bef1e85be25be7bd1fba382d5b8ee428325}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# native issue dependencies

## Definition — verbatim
> "GitHub's **native issue dependencies**, the canonical, UI-visible representation." — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md | 42 | used here | Specified as the canonical mechanism for recording blocking relationships between child tickets in GitHub. |

## Consumes
GitHub child issues and their dependency relationships.

## Produces
Directed blocking edges between GitHub issues visible in the GitHub UI and queryable via API.

## When applied
When establishing blocking prerequisites between wayfinder tickets in a GitHub-backed repository.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
GitHub's built-in issue dependency relationship mechanism, leveraged by wayfinder to establish canonical blocking edges between tickets and enable automated frontier queries.
