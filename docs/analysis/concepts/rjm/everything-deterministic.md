---
package: rjm
name: Everything Deterministic
slug: everything-deterministic
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Everything Deterministic

## Definition — verbatim
> "LLMs should orchestrate deterministic programs, not interact directly with the environment" — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 53 | used here | Cited as the core architectural principle requiring deterministic program orchestration over direct LLM environment modification. |

## Consumes
System design patterns, tool execution boundaries, and autonomous agent workflows.

## Produces
Deterministic script execution, automated quality gates, and mechanical constraint enforcement.

## When applied
Applied across repository architecture to separate probabilistic LLM planning from deterministic command execution.

## Sub-concepts
none

## Part of
vexjoy-principles

## Implementation status
defects: doc-drift, missing-path

## Design notes
"Everything Deterministic" is a core architectural principle in rjm asserting that LLMs should orchestrate deterministic programs rather than interacting directly and unpredictably with the environment. In ADR-033, this principle motivates routing-level enforcement gates: rather than relying on LLM self-discipline to follow documentation, system integrity is enforced mechanically through deterministic hook scripts.
