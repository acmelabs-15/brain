---
package: rjm
name: Version-bump gate
slug: version-bump-gate
kind: gate
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

# Version-bump gate

## Definition — verbatim
(used, not defined)

> "1. **Version-bump gate** (`build/scripts/validate_plugin_version_bump.py`, enforced by `.github/workflows/validate-plugin-version-bump.yml`). When any content file under a packaged plugin's source directory changes in the diff, that plugin's `version` MUST be strictly greater than the version at the base ref." — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-079-merge-time-plugin-version-bump.md | 40 | used here | Describes the CI validation gate requiring monotonic version increases for changed plugin directories. |

## Consumes
Base ref plugin manifest version, current PR plugin manifest version, modified file paths in PR diff.

## Produces
Pass or fail verification verdict requiring that plugin versions increment strictly when plugin content is altered.

## When applied
Enforced by CI on every pull request that modifies files under packaged plugin directories.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An automated release engineering gate executed in CI workflows that verifies that any pull request altering files within packaged plugin directories includes a strictly greater version number than the base branch. Prevents silent staleness bugs where client hosts fail to detect and reload updated plugins.
