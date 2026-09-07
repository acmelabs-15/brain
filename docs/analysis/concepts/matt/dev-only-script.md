---
package: matt
name: dev-only script
slug: dev-only-script
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/link-skills.sh, sha256: f1ffdc620769e7703d4d6365b05b981e01175bfabd92e0f8e17b05301805cabe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# dev-only script

## Definition — verbatim
> "NOTE: This is a dev-only script, intended for use by maintainers of this repo." — scripts/link-skills.sh:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/link-skills.sh | 4 | defined here | Declares link-skills.sh as an internal maintainer script not intended for end users. |

## Consumes
none

## Produces
none

## When applied
When maintaining repository skills locally during development rather than distributing skills through supported user channels.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Designates internal developer utilities restricted to repository maintainers rather than supported end-user installation mechanisms. In Matt's repository, dev-only scripts explicitly decline community modification requests and serve only local development workflows.
