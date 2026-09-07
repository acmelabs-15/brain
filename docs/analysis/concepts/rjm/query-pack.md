---
package: rjm
name: Query pack
slug: query-pack
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .codeql/scripts/test_codeql_config.py, sha256: 686013d8db319e839f7650cf0fa7eb5503b03c78ed917288c1ecb6db5b4b3aef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Query pack

## Definition — verbatim
(used, not defined)

> "3. Query pack format verification" — .codeql/scripts/test_codeql_config.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .codeql/scripts/test_codeql_config.py | 7 | used here | Documented validation step verifying query pack specifications in CodeQL configuration. |

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
defects: exit-code-mismatch, script-bug

## Design notes
Query pack is an external CodeQL packaging format identifier for bundled query suites referenced during configuration validation rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
