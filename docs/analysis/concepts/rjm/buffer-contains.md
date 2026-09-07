---
package: rjm
name: buffer_contains
slug: buffer-contains
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

# buffer_contains

## Definition — verbatim
> "Report whether this edit has already been rejected." — scripts/eval/_optimizer_core.py:890

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_core.py | 884 | defined here | Rejection buffer membership test checking whether a proposed patch fingerprint matches an existing entry under the same artifact state. |

## Consumes
An iterable of rejection buffer entry mappings, a sequence of `Patch` objects, and current artifact fingerprint.

## Produces
A boolean indicating whether the exact patch proposal was previously rejected on this artifact version.

## When applied
Invoked prior to launching candidate evaluations to filter out redundant proposals that have already failed.

## Sub-concepts
patch-fingerprint

## Part of
optimize-artifact

## Implementation status
clean

## Design notes
`buffer_contains` checks whether a candidate patch has previously been rejected on the current artifact version. By maintaining a history of failed modifications, it prevents optimization loops from cycling through identical unsuccessful prompt variations, conserving API budget and search time.
