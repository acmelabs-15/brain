---
package: rjm
name: candidate roots
slug: candidate-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_resolver_anchoring.py, sha256: 8013b916e0028b1191d0d6f89083dfc8030d317c22fc705a4fb159522f950e46}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# candidate roots

## Definition — verbatim
(used, not defined)

> "Skills that shell out to helper scripts embed a resolver that walks candidate roots until one contains the scripts directory." — scripts/validation/check_skill_resolver_anchoring.py:4-5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_resolver_anchoring.py | 4 | defined here | Describes the sequence of directory roots probed by a script-path resolver to find helper scripts. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
A descriptive phrase in `check_skill_resolver_anchoring.py` describing directory probe targets iterated by script-path resolvers, classified as name-only per D-023.
