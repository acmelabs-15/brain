---
package: rjm
name: Scenarios
slug: scenarios
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
  - {path: scripts/eval/examples/example-scenarios.json, sha256: af2f596dbc4bd88d619b6969bca3830063a2d8b6f37a372504d86d7d896d12e7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Scenarios

## Definition — verbatim
> "Scenarios**: Named input conditions with expected verdicts and reason-contains assertions" — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 83 | defined here | Defines scenarios as named input conditions with expected verdicts and assertions. |
| scripts/eval/examples/example-scenarios.json | 3 | defined here | Top-level JSON key containing evaluation test scenario definitions. |

## Consumes
Prompt specifications and test cases designed to exercise specific capabilities or edge cases.

## Produces
JSON-formatted scenario test fixtures containing scenario identifiers, input payloads, expected verdicts, and string assertion criteria.

## When applied
Authored alongside prompts or prompt updates to provide reproducible test inputs for behavioral evaluation.

## Sub-concepts
none

## Part of
scenario-based-llm-evaluation

## Implementation status
clean

## Design notes
Structured test fixtures in rjm that define specific evaluation inputs, expected verdicts (pass/fail), and keyword substring assertions. Scenarios serve as the ground-truth test suite against which prompts are evaluated, providing consistent, repeatable input conditions that expose whether prompt changes alter model behavior or break expected outputs.
