---
package: rjm
name: Runtime AI Response Tests
slug: runtime-ai-response-tests
kind: technique
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-023-quality-gate-prompt-testing.md, sha256: 322d7c82f609f03ec83b27f780338a015a2cc551d5f0a566cf4c6da6abe6530d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Runtime AI Response Tests

## Definition — verbatim
> "### Option 3: Runtime AI Response Tests" — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-023-quality-gate-prompt-testing.md | 62 | defined here | Evaluated testing approach that executes prompts against sample PRs with live AI models. |

## Consumes
Sample PR fixtures, live AI model APIs, and expected response validation schemas.

## Produces
Empirical validation of runtime model interpretation and verdict accuracy.

## When applied
Considered when evaluating prompt behavioral changes; deferred from standard CI due to cost and latency.

## Sub-concepts
golden-corpus-testing

## Part of
ai-pr-quality-gate

## Implementation status
defects: missing-path

## Design notes
A testing approach that validates AI prompt quality by invoking live models against sample PR inputs and evaluating output verdicts. In ADR-023, it was rejected as a CI gate due to high API costs, execution latency, and nondeterministic outputs, in favor of fast structural testing.
