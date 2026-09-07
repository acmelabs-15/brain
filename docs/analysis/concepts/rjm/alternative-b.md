---
package: rjm
name: Alternative B
slug: alternative-b
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md, sha256: 14474578a6089b011c08d942a1df83bce2ec03802b99f5f91a2b98a3e10555cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Alternative B

## Definition — verbatim
(used, not defined)

> "2. **Alternative B is a 2-hour fix.** Deterministic full-tree regeneration" — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 39 | defined here | Procedural solution chosen over structural refactoring: full-tree hook generation plus CI diff check |

## Consumes
Canonical hooks, generate_hooks.py, CI pipeline runner.

## Produces
Deterministically generated shims, CI verification gate checking for uncommitted drift.

## When applied
Applied during build generation and continuous integration verification of generated hooks.

## Sub-concepts
none

## Part of
ADR-061

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Alternative B was the pragmatic procedural solution adopted in place of ADR-061's complex structural delegation refactoring. It eliminates hook shim drift by enforcing deterministic full-tree regeneration on every generation run combined with an automated CI gate (git diff --exit-code) that verifies no manual or partial edits have been made to generated shims.
