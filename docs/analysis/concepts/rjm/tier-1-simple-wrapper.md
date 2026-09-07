---
package: rjm
name: Tier 1: Simple Wrapper
slug: tier-1-simple-wrapper
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-CREATION-CRITERIA.md, sha256: 27241f09bb7441e7cf128ddc9721db0c2ce7d3497721cafee4e0871c57f1586a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tier 1: Simple Wrapper

## Definition — verbatim
(used, not defined)

> "### Tier 1: Simple Wrapper" — .agents/governance/SKILL-CREATION-CRITERIA.md:179

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-CREATION-CRITERIA.md | 179 | defined here | Defines the simplest skill complexity tier for single-step executions without phase gates. |

## Consumes
Deterministic single-step command or CLI execution task.

## Produces
Lightweight skill specification and SKILL.md without phase gates.

## When applied
Applied when the task is a simple command wrapper or tool invocation that does not require sequential gates.

## Sub-concepts
none

## Part of
skill-complexity-tiers

## Implementation status
defects: doc-drift

## Design notes
The lowest complexity tier in rjm's skill taxonomy, representing single-step deterministic wrappers around existing CLI tools (such as markdown fence fixers). Tier 1 skills require minimal ceremony and no phase gates, providing quick standardized tool execution.
