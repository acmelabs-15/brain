---
package: rjm
name: Fallbacks
slug: fallbacks
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Fallbacks

## Definition — verbatim
> "2. **Fallbacks**: Graceful degradation with cached/default data" — .claude/skills/slo-designer/references/slo-design-patterns.md:198

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 198 | used here | Listed as a dependency mitigation strategy enabling graceful degradation using cached or default data during outages. |

## Consumes
Cached payloads, static defaults, or degraded response handlers.

## Produces
Degraded yet acceptable user responses when primary dependency calls fail or time out.

## When applied
When a service dependency is unavailable but partial functionality or cached data can satisfy the user request.

## Sub-concepts
none

## Part of
dependency-chain-patterns

## Implementation status
defects: orphan

## Design notes
Fallbacks enable graceful degradation when dependencies fail, substituting cached or static default data to preserve user-facing availability at the cost of partial freshness or functionality.
