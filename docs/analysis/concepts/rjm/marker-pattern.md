---
package: rjm
name: _MARKER_PATTERN
slug: marker-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_drift.py, sha256: 6b40fae460dc8dfe9dcc290ea47974ca5af1f625d54bcd0d897c62e4d6d41155}
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _MARKER_PATTERN

## Definition — verbatim
(used, not defined)

> "_MARKER_PATTERN = re.compile(" — scripts/validation/check_skill_md_drift.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 39 | defined here | Regex matching vendor-portability HTML comment markers in prose documentation. |
| scripts/validation/check_skill_md_exec_portability.py | 77 | defined here | Regex matching vendor-portability-exec HTML comment markers for executable invocations. |

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
defects: doc-drift, other

## Design notes
A compiled regular expression constant matching vendor portability suppression comments, classified as `name-only` per D-023.
