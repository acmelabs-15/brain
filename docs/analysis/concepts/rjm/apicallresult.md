---
package: rjm
name: APICallResult
slug: apicallresult
kind: artifact
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: scripts/eval/_eval_api_adapter.py, sha256: 314efe9e10fd6ff6a07b9955b2eb647bfb54cbf9afb869ceb9a690ec0f8587e0}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# APICallResult

## Definition — verbatim
> "Outcome of one (possibly-retried) API call. DESIGN-004 §5.4." — scripts/eval/_eval_api_adapter.py:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 205 | defined here | Specified as the interface representing API invocation outcomes, latency, tokens, and errors. |
| scripts/eval/_eval_api_adapter.py | 67 | defined here | Defined as a frozen dataclass encapsulating API responses, retry attempts, and token metrics. |
| scripts/eval/eval-agent-vs-baseline.py | 48 | used here | Imported and received from `AnthropicAPIAdapter.call_model()` to assemble run records. |

## Consumes
Model prompt string, model identifier, retry configuration, and HTTP API response.

## Produces
An immutable record of model execution including outcome, raw response text, token usage, latency in milliseconds, and error category.

## When applied
Produced by `AnthropicAPIAdapter.call_model()` upon completing an API request or exhausting allowed retries.

## Sub-concepts
none

## Part of
anthropicapiadapter, eval-agent-vs-baseline

## Implementation status
clean

## Design notes
`APICallResult` is the immutable data transfer artifact returned by `AnthropicAPIAdapter` in rjm's evaluation harness. It encapsulates the outcome of individual model invocations, recording whether the call succeeded or failed, attempt counts, latency in milliseconds, token counts, and structured error categories to feed downstream run record assembly.
