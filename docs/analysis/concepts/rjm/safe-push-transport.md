---
package: rjm
name: safe_push_transport
slug: safe-push-transport
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-validation-and-qa/SKILL.md, sha256: 9d6ab64f7789e319bf479ef96c96b85ca34f2b4c01c7b408cd413e0b23be90eb}
  - {path: pyproject.toml, sha256: f9db8bb8535798521c2dc821da3cfc7ae4440d2d42b0290a4ea45e70a31dd1fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# safe_push_transport

## Definition — verbatim
> "safe_push_transport: Safe-push tests that touch a non-local transport and are excluded from pre-push." — pyproject.toml:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 80 | used here | Documented as a pytest marker indicating tests touching non-local transports that are excluded from pre-push hooks. |
| pyproject.toml | 76 | defined here | Registered in pytest marker configuration for non-local transport tests. |

## Consumes
Test suites that invoke network sockets, remote APIs, or distributed transport layers.

## Produces
Exclusion filters applied during local pre-push validation hook execution.

## When applied
Applied as a pytest marker to any test interacting with non-local external transports.

## Sub-concepts
none

## Part of
testing-rigor

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
A test classification marker that identifies test cases touching non-local transports. Tests marked with `safe_push_transport` are excluded from local pre-push validation to keep developer push latency low and isolate network flakiness to CI.
