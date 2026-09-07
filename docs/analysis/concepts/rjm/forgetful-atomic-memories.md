---
package: rjm
name: Forgetful Atomic Memories
slug: forgetful-atomic-memories
kind: artifact
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Forgetful Atomic Memories

## Definition — verbatim
> "### 4B: Forgetful Atomic Memories" — .claude/skills/research-and-incorporate/references/workflow.md:352

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 352 | defined here | Defined in Sub-phase 4B as a mandatory batch of 5-10 fine-grained memories created in Forgetful vector database conforming to RULE 0. |

## Consumes
Categorized concepts, frameworks, patterns, failure modes, and examples from research analysis.

## Produces
5 to 10 atomic, constrained, actionable, and linked memory entries in Forgetful.

## When applied
Created during Sub-phase 4B of Phase 4 in research-and-incorporate.

## Sub-concepts
atomic, constrained, actionable, linked

## Part of
phase-4-memory-integration, research-and-incorporate

## Implementation status
out-of-scope

## Design notes
A set of fine-grained, standalone knowledge representations stored in the Forgetful vector database, adhering to strict atomicity, length (<2000 chars), and linking constraints to prevent knowledge graph pollution. Implementation is out of scope per METHOD §1.2 due to Forgetful exclusion.
