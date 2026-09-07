---
package: rjm
name: Authority Order
slug: authority-order
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/SKILL.md, sha256: 14891e17feb0fc88842a48f8d44b570badb38861a40292484adeb6854d22f372}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Authority Order

## Definition — verbatim
> "If two sources disagree, use the official contract for authored behavior. Keep the conflicting probe as versioned evidence. Do not erase either side." — .claude/skills/agent-harness-reference/SKILL.md:40-41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 31 | defines | Defines the precedence hierarchy governing official contracts, repository decisions, and empirical runtime probe observations. |

## Consumes
Official vendor contracts, repository ADRs, and versioned runtime probe evidence.

## Produces
Conflict resolution verdicts when vendor documentation and observed behavior disagree.

## When applied
Applied whenever evaluating contradictory claims or authored behaviors across agent harness sources.

## Sub-concepts
docs-silent

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift

## Design notes
Authority Order establishes a strict evidentiary hierarchy within rjm: pinned official vendor contracts override repository decisions, which in turn override empirical probe observations. By mandating that conflicting probes be preserved as versioned evidence rather than erased, it ensures authored behavior remains aligned with vendor guarantees while tracking live harness divergence.
