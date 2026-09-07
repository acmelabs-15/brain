---
package: rjm
name: build_default_engine
slug: build-default-engine
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_scoring_engine.py, sha256: f19eb353dc46e0c76c0a93c21866c66ec297781c644286cb9dcf8f5bf2537fd8}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# build_default_engine

## Definition — verbatim
(used, not defined)

> "def build_default_engine() -> ScoringEngine:" — scripts/eval/_scoring_engine.py:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_scoring_engine.py | 84 | defined here | Factory function instantiating a ScoringEngine pre-configured with REGEX and VERDICT scorers. |
| scripts/eval/eval-agent-vs-baseline.py | 66 | used here | Imported to initialize the default scoring engine for offline benchmark evaluation runs. |

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
A factory function in the evaluation harness that initializes a `ScoringEngine` with standard assertion scorers (`RegexScorer` and `VerdictScorer`), classified as name-only per D-023.
