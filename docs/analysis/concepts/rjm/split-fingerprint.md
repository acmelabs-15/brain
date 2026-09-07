---
package: rjm
name: split_fingerprint
slug: split-fingerprint
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

# split_fingerprint

## Definition — verbatim
> "Hash the inputs that determine a split." — scripts/eval/_optimizer_core.py:325

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_core.py | 318 | defined here | Cryptographic hashing function computing a canonical SHA-256 digest over task set, seed, and split ratios. |

## Consumes
An iterable of task IDs, seed string, selection ratio, and test ratio.

## Produces
A deterministic SHA-256 hex string uniquely identifying the split parameters and membership.

## When applied
Invoked when generating a `TaskSplit` and during gate pre-flight checks to verify that candidate evaluation datasets match the incumbent.

## Sub-concepts
none

## Part of
split-tasks

## Implementation status
clean

## Design notes
`split_fingerprint` calculates an order-insensitive cryptographic hash of all parameters defining a task partition. By making the partition verifiable from the split file's contents, it prevents eval tampering where task sets are subtly altered between runs to artificially boost benchmark scores.
