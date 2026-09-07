---
package: rjm
name: Temporal decomposition
slug: temporal-decomposition
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Temporal decomposition

## Definition — verbatim
(used, not defined)

> "Temporal decomposition leaks information. Splitting a module by \"first do A, then do B\" tends to expose B's data structure to A. Split by what changes together, not by execution order." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 68 | used here | Cited as a design pitfall where modules are split by execution order rather than cohesive information-hiding boundaries. |

## Consumes
Execution sequence steps.

## Produces
Information leakage and shared intermediate data representations across modules.

## When applied
Identified and avoided when structuring multi-step agent workflows, pipeline stages, and module decompositions.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An architectural anti-pattern in rjm where components are separated chronologically rather than by information ownership. This temporal coupling forces intermediate data structures to leak across boundaries, undermining modular depth.
