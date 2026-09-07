---
package: rjm
name: Plugin Version Bump Stays at PR Time
slug: plugin-version-bump-stays-at-pr-time
kind: pattern
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-079-merge-time-plugin-version-bump.md, sha256: b317b3a12963681bd925bbe44f1233471c97de08730385744caff8aea3b93604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Plugin Version Bump Stays at PR Time

## Definition — verbatim
> "ADR-079: Plugin Version Bump Stays at PR Time (Reject Merge-Time Automation)" — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-079-merge-time-plugin-version-bump.md | 12 | defined here | Architectural decision title establishing policy that plugin version bumps must remain in PR commits. |

## Consumes
Plugin source modifications, pull request diffs, manifest version specifications.

## Produces
Monotonically incremented plugin manifest versions checked directly into the pull request commit.

## When applied
Enforced during pull request authoring and CI validation whenever packaged plugin sources are modified.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A release engineering policy and pattern rejecting post-merge automated version bump bots in favor of manual, PR-time version increments. Ensures that git history on the main branch never exists in a torn state where changed content is committed under an unbumped version before an automated follow-up lands.
