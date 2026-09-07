---
package: rjm
name: Conflict Resolution Decision Matrix
slug: conflict-resolution-decision-matrix
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/SKILL-STANDARDS-RECONCILED.md, sha256: 519c3146eb8bc63670a8219a2b2beb598d871658825c757990b0715cc12de505}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Conflict Resolution Decision Matrix

## Definition — verbatim
> "## 10. Conflict Resolution Decision Matrix" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:692

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 692 | defined here | Priority ranking framework resolving contradictions among standards, ADRs, validators, and memory systems. |

## Consumes
Conflicting documentation, architectural decision records, or tool implementations

## Produces
Authoritative precedence determinations ranking official specifications above local ADRs, validators, and memory systems.

## When applied
Applied whenever architectural contradictions or specification ambiguities emerge across the agent platform.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession)

## Design notes
A structured prioritization matrix establishing that official platform specifications take precedence over internal ADRs, which in turn override validator heuristics, existing implementations, and historical memory systems.
