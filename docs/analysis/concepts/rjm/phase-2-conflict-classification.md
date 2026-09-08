---
package: rjm
name: Phase 2: Conflict Classification
slug: phase-2-conflict-classification
kind: phase
package_phase: rjm:executor
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/merge-resolver.shared.md, sha256: 9783a32baa9d4e4ee8a5b0d597e6a15d1c192d9c7b0d3b364c9698e408db223e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 2: Conflict Classification

## Definition — verbatim
> "Classify each conflicted file as auto-resolvable, rename-both, or manual:" — templates/agents/merge-resolver.shared.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/merge-resolver.shared.md | 56 | defines | Systematic categorization phase triaging conflicts into auto-resolvable, append-only rename, or manual resolution. |

## Consumes
List of conflicted files identified during Phase 1 context gathering.

## Produces
Triaged conflict inventory categorizing each file as auto-resolvable, rename-both, or manual resolution.

## When applied
Applied during merge conflict resolution prior to attempting code or metadata resolutions.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Triages merge conflicts into three distinct handling classes: auto-resolvable files (accept base), append-only evidence artifacts (rename head file to prevent collision without merging content), and manual semantic resolutions.
