---
package: rjm
name: Ownership first
slug: ownership-first
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Ownership first

## Definition — verbatim
> "1. **Ownership first (`analysis-provenance`)**. Before the spec proposes changing any validator, linter, hook, or shared infrastructure component, invoke Skill(skill="analysis-provenance") to identify who owns it." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:188

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 188 | defined here | Requires checking component provenance and owner before proposing changes to shared infra, halting if provenance is UNKNOWN. |

## Consumes
Proposed changes to validators, linters, hooks, or shared infrastructure.

## Produces
Component ownership block (`provenance <UPSTREAM|LOCAL|VENDOR|UNKNOWN>; owner <name>`) in the PRD, or a blocking halt on unowned shared components.

## When applied
Applied in Step 4 before the buy-vs-build gate (Step 4a).

## Sub-concepts
none

## Part of
step-4-provenance-and-dependency-gates

## Implementation status
defects: missing-path, doc-drift

## Design notes
An architectural gate mandating that an agent ascertain who owns a component and its provenance before deciding to modify it, preventing uncoordinated changes to upstream or vendor-managed code.
