---
package: rjm
name: release-it.md
slug: release-it-md
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_run_rollup_core.py, sha256: 7b724d731f03e48a368c4833f20009d8afbd8265de0771c03c225831de8bcbe6}
  - {path: scripts/github_core/api.py, sha256: 32bed621828925af35788806e083f79b208596e77937dec1e9537ffd3ca38e0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# release-it.md

## Definition — verbatim
(used, not defined)

> "The module degrades gracefully (release-it.md): a malformed line, an unparseable" — scripts/eval/_run_rollup_core.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_run_rollup_core.py | 19 | used here | Cited for graceful degradation heuristics when parsing evaluation logs and tolerating unpriced models. |
| scripts/github_core/api.py | 732 | used here | Cited for the architectural principle that integration points are suspect, guiding bounded retries and backoff. |

## Consumes
none

## Produces
none

## When applied
Consulted when implementing system integration points, error handling, network retries, and data ingestion to ensure resilience and graceful degradation.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: exit-code-mismatch, doc-drift

## Design notes
release-it.md is an architectural reference document based on Michael Nygard's Release It! establishing resilience patterns, stability heuristics, circuit breakers, and graceful degradation practices across rjm.
