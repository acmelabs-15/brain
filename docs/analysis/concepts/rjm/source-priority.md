---
package: rjm
name: Source priority
slug: source-priority
kind: reference
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Source priority

## Definition — verbatim
> "## Source priority" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 8 | defined here | Section heading establishing the ranked five-level hierarchy of evidentiary sources for hook contracts. |

## Consumes
Vendor reference pages, vendor commits, changelog entries, empirical local probes, and secondary indexes.

## Produces
Ranked precedence determining authoritative evidentiary weight for disputed or evolving runtime behaviors.

## When applied
Consulted whenever researching or verifying agent harness behavior, hook contracts, or platform capabilities.

## Sub-concepts
none

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
An epistemic hierarchy in rjm establishing vendor reference documentation, pinned commits, and versioned local probes as authoritative over secondary summaries or informal memory when resolving harness contract discrepancies.
