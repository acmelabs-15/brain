---
package: addy
name: Direct invocation
slug: direct-invocation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/orchestration-patterns.md, sha256: 61e543d86f19f86b83074f8c1c769455c7085a2c72dd47b1da21a8c63785be4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Direct invocation

## Definition — verbatim
> "Single persona, single perspective, single artifact. The default and the cheapest option." — references/orchestration-patterns.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/orchestration-patterns.md | 11 | defined here | Baseline orchestration pattern catalog entry for invoking a single persona on a single artifact with no intermediary layers |

## Consumes
Single task prompt, single artifact (code diff, file, question)

## Produces
Single focused specialist report returned directly to the user

## When applied
When the work is one perspective on one artifact and can be described in a single sentence

## Sub-concepts
none

## Part of
orchestration-patterns

## Implementation status
clean

## Design notes
Direct invocation is addy's default and lowest-cost interaction pattern. By connecting the user directly to a specialist persona (e.g. asking code-reviewer to review a PR) without intermediate wrappers or routing layers, it minimizes token cost and latency to a single round-trip, establishing the baseline against which all other orchestration schemes must be justified.
