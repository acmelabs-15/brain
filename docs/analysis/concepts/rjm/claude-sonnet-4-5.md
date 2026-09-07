---
package: rjm
name: claude-sonnet-4.5
slug: claude-sonnet-4-5
kind: name-only
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-021-model-routing-strategy.md, sha256: 5d49be2ab0d07492878d0fc5c63a6f45c604052a7d3ad92aa170730b0b94ba0e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# claude-sonnet-4.5

## Definition — verbatim
(used, not defined)

> "- Primary: `claude-sonnet-4.5`" — .agents/architecture/ADR-021-model-routing-strategy.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-021-model-routing-strategy.md | 68 | used here | Designated as the primary model for general review and synthesis. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
tiered-model-routing-strategy

## Implementation status
defects: missing-path

## Design notes
An external model identifier denoting Anthropic's Claude Sonnet 4.5 model used as the primary engine for general code review and synthesis tasks, not a lifecycle concept.
