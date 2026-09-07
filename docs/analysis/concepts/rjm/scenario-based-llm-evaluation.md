---
package: rjm
name: scenario-based LLM evaluation
slug: scenario-based-llm-evaluation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# scenario-based LLM evaluation

## Definition — verbatim
> "Adopt scenario-based LLM evaluation as the standard method for validating behavioral correctness of prompt changes." — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 64 | defined here | Establishes the standard architectural methodology for verifying prompt changes via behavioral test scenarios. |

## Consumes
Prompt definitions, scenario test fixtures, and target LLM execution environments.

## Produces
Pass/fail verdicts, score deltas, and regression reports for modified prompts.

## When applied
Mandatory before merging any modifications to prompt files, slash commands, or agent instructions in rjm.

## Sub-concepts
scenarios, runner, before-after-comparison, acceptance-gate

## Part of
prompt-behavioral-evaluation

## Implementation status
defects: missing-path

## Design notes
The core testing discipline established by ADR-057 in rjm that treats prompt modifications as code changes requiring empirical behavioral validation. Rather than relying on human visual inspection ("reads better"), this technique executes structured input scenarios against both before and after versions of a prompt to ensure behavioral correctness and block regressions automatically.
