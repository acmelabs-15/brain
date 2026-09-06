---
package: addy
name: code-as-liability mindset
slug: code-as-liability-mindset
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# code-as-liability mindset

## Definition — verbatim
(used, not defined)

> "Code-as-liability mindset, compulsory vs advisory deprecation, zombie-code removal." — external/documentation-and-adrs.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/documentation-and-adrs.md | 12 | used here | Listed as a key pillar of deprecation-and-migration in the Ship phase skills grid. |
| external/git-workflow-and-versioning.md | 12 | used here | Listed as a key pillar of deprecation-and-migration in the Ship phase skills grid. |
| external/observability-and-instrumentation.md | 12 | used here | Listed as a key pillar of deprecation-and-migration in the Ship phase skills grid. |
| external/shipping-and-launch.md | 12 | used here | Listed as a key pillar of deprecation-and-migration in the Ship phase skills grid. |

## Consumes
Codebase maintenance overhead, unused features, and redundant dependencies.

## Produces
Aggressive code pruning, simplified architectures, and proactive deprecation.

## When applied
> "Removing old systems, migrating users, or sunsetting features." — external/documentation-and-adrs.md:12

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
defects: doc-drift, orphan

## Design notes
An engineering mindset treating all existing code not as an asset but as ongoing maintenance liability and attack surface. It encourages minimal solutions, proactive removal of zombie code, and retiring obsolete systems as soon as replacements stabilize.
