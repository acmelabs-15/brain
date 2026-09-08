---
package: rjm
name: VERSION_TAG_PATTERN
slug: version-tag-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/sha_pinning.py, sha256: 669f66344294caa22d3a4bb6ec0948f1147277258be166b8a90a4eebf930c06f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# VERSION_TAG_PATTERN

## Definition — verbatim
(used, not defined)

> "VERSION_TAG_PATTERN: re.Pattern[str] = re.compile(" — scripts/validation/sha_pinning.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/sha_pinning.py | 31 | defined here | Compiled regular expression matching GitHub Action references that use SemVer version tags instead of commit SHAs. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A module-level regex pattern in `sha_pinning.py` identifying unpinned action version tags, classified as name-only per D-023.
