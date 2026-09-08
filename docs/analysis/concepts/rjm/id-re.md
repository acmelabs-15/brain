---
package: rjm
name: ID_RE
slug: id-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_spec_id_uniqueness.py, sha256: 3423d17958f2be14d7d061d2172e3818165520ca8603b9374b446c32c95b36fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ID_RE

## Definition — verbatim
(used, not defined)

> "ID_RE = re.compile(" — scripts/validation/check_spec_id_uniqueness.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_spec_id_uniqueness.py | 29 | defined here | Regular expression matching the top-level 'id:' key in spec YAML frontmatter. |

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
defects: doc-drift

## Design notes
A module-level regular expression constant identifier in `check_spec_id_uniqueness.py`, classified as name-only per D-023.
