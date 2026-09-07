---
package: rjm
name: load_fixtures
slug: load-fixtures
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_e2e_delivery_core.py, sha256: f7aeb40a86977036c93513fb424b27e9249ddcde90e7e4dc92fdd0097340ccab}
  - {path: scripts/eval/_oneshot_bench_core.py, sha256: ca0711a16c6783ec1ee13ffd37a3eae9dcc589eeb8dd2d79f2101029e9bb876a}
  - {path: scripts/eval/_runtime_parity.py, sha256: a5f463e3d9e5a1b7792aee049f05a40b8f2c14ca3188fbc0f6dab8534d5b1308}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
  - {path: scripts/eval/eval_skill_router.py, sha256: 3aa5d1334db711e7d16cda841dd34bdde659def740f1f217a3ee4055d8a30b70}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# load_fixtures

## Definition — verbatim
(used, not defined)

> "def load_fixtures(raw: str) -> list[dict[str, Any]]:" — scripts/eval/_e2e_delivery_core.py:122

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_e2e_delivery_core.py | 122 | defined here | Function parsing and validating raw JSON strings into delivery evaluation fixture lists. |
| scripts/eval/_oneshot_bench_core.py | 114 | defined here | Function loading and validating all JSON fixture files from a directory into Fixture instances. |
| scripts/eval/_runtime_parity.py | 135 | defined here | Function loading and validating runtime parity test fixture corpora from a JSON file. |
| scripts/eval/eval_skill_router.py | 91 | defined here | Function loading and verifying skill router disambiguation fixtures from disk. |
| scripts/eval/eval-oneshot-vs-shipped.py | 41 | used here | Imported fixture loading helper executed during oneshot benchmarking. |

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
defects: doc-drift, orphan

## Design notes
A recurring Python helper function identifier across evaluation modules for deserializing and validating fixture data files, classified as `name-only` per D-023.
