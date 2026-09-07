---
package: rjm
name: collect_violations
slug: collect-violations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_build_gates.py, sha256: df1360e6ff865be7eecb97ece1f78d0979415b85c87ea4e19cf9b693ee511102}
  - {path: scripts/validation/check_canonical_citations.py, sha256: e4e5b8b622488dcc368c7dea8195de353e5b8a3325a9a07da0b9c67bccef3dd5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# collect_violations

## Definition — verbatim
(used, not defined)

> "def collect_violations(repo_root: Path) -> list[GateViolation]:" — scripts/validation/check_build_gates.py:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 103 | defined here | Scans build.md to identify missing exit gates or required argument flags. |
| scripts/validation/check_canonical_citations.py | 224 | defined here | Scans Python files across configured roots to discover uncited mirror claims. |

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
defects: missing-path

## Design notes
`collect_violations` is a Python function identifier across validation scripts that traverses repository files to collect validation rule violations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
