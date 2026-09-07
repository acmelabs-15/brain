---
package: rjm
name: patch_fingerprint
slug: patch-fingerprint
kind: technique
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

# patch_fingerprint

## Definition — verbatim
> "Return a stable identity for a proposed edit." — scripts/eval/_optimizer_core.py:842

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_core.py | 841 | defined here | Computes a canonical SHA-256 hash representing the exact sequential content of a proposed patch set. |

## Consumes
A non-empty sequence of `Patch` objects.

## Produces
A deterministic SHA-256 hex string uniquely identifying the sequence of edit operations.

## When applied
Called when generating patch proposals to query or record rejected edits in rejection buffers.

## Sub-concepts
none

## Part of
buffer-contains

## Implementation status
clean

## Design notes
`patch_fingerprint` computes a deterministic, order-sensitive hash of a sequence of prompt edits. By normalizing line endings while preserving exact whitespace and sequential order, it provides an immutable identifier used to track and reject previously failed edits in optimization memory buffers.
