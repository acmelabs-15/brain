---
package: rjm
name: External-Signal Gating
slug: external-signal-gating
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/design/external-signal-gating.md, sha256: e2205c9c37e1690af881f70be4867634ecb367f1cbda26948b66209b18e8fa25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# External-Signal Gating

## Definition — verbatim
> "# External-Signal Gating for AI Quality Workflows" — docs/design/external-signal-gating.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/design/external-signal-gating.md | 1 | defined here | Title and architectural design document defining the external-signal gating contract. |

## Consumes
Deterministic tool outputs (test exit codes, linter findings, diff verifiers, security scans).

## Produces
Grounded block/allow decisions preventing closed-loop model self-evaluation.

## When applied
Applied across all automated quality gates in CI/CD and lifecycle testing workflows.

## Sub-concepts
externally-grounded-signal

## Part of
none

## Implementation status
defects: missing-path

## Design notes
External-Signal Gating is an architectural contract in rjm requiring that every automated quality gate base its block/allow verdict on at least one deterministic tool whose outcome does not depend on a language model. While LLM reviews may provide explanatory commentary, pure model-on-model evaluation ("a ghost grading a ghost") is explicitly barred from granting a PASS verdict.
