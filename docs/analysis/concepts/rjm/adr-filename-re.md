---
package: rjm
name: ADR_FILENAME_RE
slug: adr-filename-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/check_adr_uniqueness.py, sha256: 3edae483b4be86c2960b172be8a075d30959d47c1552eadc093b43e1fe2b0a4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR_FILENAME_RE

## Definition — verbatim
(used, not defined)

> "ADR_FILENAME_RE = re.compile(r\"^ADR-(\d{2,})-[^/]+\.md$\")" — scripts/validation/check_adr_lifecycle.py:161

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 161 | defined here | Regular expression constant defining standard ADR filename pattern matching. |
| scripts/validation/check_adr_uniqueness.py | 38 | defined here | Regular expression constant matching ADR filenames to extract numeric identifiers for uniqueness checking. |

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
A compiled regular expression constant identifier defining the filename pattern for ADR documents, classified as `name-only` per D-023 because it is a code constant rather than a development lifecycle concept.
