---
package: rjm
name: Patch
slug: patch
kind: artifact
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_optimizer_core.py, sha256: bc511efa2aba8108b3ba293bb61fa007a323c0c9c78baae7b5e6abcce808b53f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Patch

## Definition — verbatim
> "One atomic edit." — scripts/eval/_optimizer_core.py:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_core.py | 118 | defined here | Dataclass representing an atomic document edit operation (append, delete, replace, insert_after) with anchor and text. |

## Consumes
Edit proposals specifying operation type, target anchor line, and replacement or inserted text.

## Produces
A validated atomic patch specification ready for sequential application by `apply_patches`.

## When applied
Constructed when proposing localized modifications to agent instructions or prompt files during optimization loops.

## Sub-concepts
none

## Part of
apply-patches

## Implementation status
clean

## Design notes
`Patch` is the atomic edit data structure used by rjm's prompt and artifact optimization system. It formalizes line-level modifications as structured operations with explicit anchor references, preventing free-form text rewrites and ensuring that modifications can be bounded, validated against protected fences, and deduplicated in rejection buffers.
