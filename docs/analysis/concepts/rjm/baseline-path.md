---
package: rjm
name: _BASELINE_PATH
slug: baseline-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/check_ruleset_params_drift.py, sha256: f0bfa925f0d2aa397f3f5aefe435c5b1fecdb0fcce928444332a4fbcb8b93c56}
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _BASELINE_PATH

## Definition — verbatim
(used, not defined)

> "_BASELINE_PATH = Path(__file__).with_name(\"adr_lifecycle_baseline.json\")" — scripts/validation/check_adr_lifecycle.py:185

## Also called — verbatim
`BASELINE_PATH` — scripts/validation/check_ruleset_params_drift.py:34
`baseline_path` — scripts/validation/check_vendor_portability.py:157

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 185 | defined here | Path constant locating the ADR lifecycle baseline JSON file. |
| scripts/validation/check_ruleset_params_drift.py | 34 | defined here | Path constant locating the ruleset parameter baseline JSON file. |
| scripts/validation/check_vendor_portability.py | 157 | defined here | Function returning the baseline path for vendor portability checks. |

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
defects: exit-code-mismatch, orphan, doc-drift

## Design notes
A configuration constant and helper function identifier across validation scripts pointing to baseline data files, classified as `name-only` per D-023 because it is a code identifier rather than a development lifecycle concept.
