---
package: rjm
name: silent-staleness bug
slug: silent-staleness-bug
kind: pattern
package_phase: cross-phase
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

# silent-staleness bug

## Definition — verbatim
> "Installed plugin caches key off that version: when the version does not change, existing installs never re-sync, so deletions and edits inside the source dir silently fail to reach consumers." This is the silent-staleness bug the gate prevents (PR #1942)." — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-079-merge-time-plugin-version-bump.md | 40 | used here | Cites failure mode where un-incremented plugin manifests prevent host runtimes from re-syncing changes to consumers. |

## Consumes
Client-side plugin caching mechanisms based on manifest version strings.

## Produces
Motivation and justification for strictly-greater version-bump gates in PR CI.

## When applied
Diagnosed during incident reviews (PR #1942) and guarded against in PR-time verification.

## Sub-concepts
none

## Part of
plugin-version-management

## Implementation status
clean

## Design notes
The silent-staleness bug occurs when plugin source files are modified or deleted in a repository without a corresponding manifest version increment. Because host tools only poll and compare version strings, existing consumer installations continue executing outdated cached code indefinitely without error or warning.
