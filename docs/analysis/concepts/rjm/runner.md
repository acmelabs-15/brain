---
package: rjm
name: Runner
slug: runner
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Runner

## Definition — verbatim
> "Runner**: Invokes the LLM with prompt text plus scenario input, parses the verdict" — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 84 | defined here | Defines the runner component as the executor invoking the LLM with prompt text and scenario input. |
| scripts/eval/eval-model-panel.py | 59 | defined here | Callable type definition representing model panel evaluation runners. |

## Consumes
Prompt text, scenario inputs, model provider configurations, and authentication credentials.

## Produces
Execution results, raw model responses, parsed verdicts, and performance metrics.

## When applied
Executed during behavioral evaluation runs to dispatch scenario prompts to LLM endpoints and record responses.

## Sub-concepts
none

## Part of
scenario-based-llm-evaluation

## Implementation status
clean

## Design notes
The execution engine abstraction in rjm responsible for sending formatted prompts and test scenario inputs to target LLM providers and parsing the resulting output into structured verdicts. It standardizes API interactions, handles rate limiting, and normalizes output evaluation across evaluation scripts and model panels.
