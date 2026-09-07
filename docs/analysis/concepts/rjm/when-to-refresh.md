---
package: rjm
name: When to Refresh
slug: when-to-refresh
kind: checklist
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

# When to Refresh

## Definition — verbatim
> "Do not search the web for a settled row. Refresh only when one condition holds:" — .claude/skills/agent-harness-reference/SKILL.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/SKILL.md | 69 | defines | Defines the strict boundary conditions under which pinned harness contracts and empirical probe records may be re-researched. |

## Consumes
CLI version bump events, broken URL reports, and identified vendor contract deprecations.

## Produces
Targeted refresh updates across sidecars, probe evidence, ADRs, runtime tests, generated mirrors, and memory.

## When applied
Applied before initiating web research or updating harness contract documentation.

## Sub-concepts
none

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift

## Design notes
A change-control gate that prevents unnecessary and uncoordinated re-research into settled harness contracts. By limiting contract updates to concrete triggers (CLI version changes, dead URLs, changed vendor schemas), it eliminates churn and protects established architectural decisions from repetitive re-investigation.
