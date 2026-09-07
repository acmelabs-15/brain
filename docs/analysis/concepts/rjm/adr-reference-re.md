---
package: rjm
name: _ADR_REFERENCE_RE
slug: adr-reference-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _ADR_REFERENCE_RE

## Definition — verbatim
(used, not defined)

> "_ADR_REFERENCE_RE = re.compile(r\"^ADR[-_ ]?(\d{1,4})$\", re.IGNORECASE)" — scripts/validation/check_adr_lifecycle.py:164

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 164 | defined here | Regular expression constant for parsing ADR ID references inside frontmatter. |

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
A compiled regular expression constant identifier for parsing ADR identifier references in frontmatter, classified as `name-only` per D-023 because it is a code constant rather than a development lifecycle concept.
