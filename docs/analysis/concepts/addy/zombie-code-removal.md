---
package: addy
name: zombie-code removal
slug: zombie-code-removal
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
  - {path: external/deprecation-and-migration.md, sha256: a1d9b5a8d3237126b624e386d75e89e29bc5112edd61057bfa2fa97003050a23}
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

# zombie-code removal

## Definition — verbatim
> "Zombie code is code that nobody owns but everybody depends on." — skills/deprecation-and-migration/SKILL.md:194

## Also called — verbatim
> "Zombie Code" — skills/deprecation-and-migration/SKILL.md:192
> "zombie-code removal" — external/deprecation-and-migration.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/ci-cd-and-automation.md | 12 | used here | Highlighted in the deprecation-and-migration card under the related Ship skills grid |
| external/deprecation-and-migration.md | 5 | used here | Summarized on the landing page as a core capability of deprecation and migration |
| external/documentation-and-adrs.md | 12 | used here | Listed in the related skills grid for deprecation-and-migration |
| external/git-workflow-and-versioning.md | 12 | used here | Cited in the deprecation-and-migration summary card |
| external/observability-and-instrumentation.md | 12 | used here | Referenced in the Ship-phase related skills section |
| external/shipping-and-launch.md | 12 | used here | Mentioned under the deprecation-and-migration card in the Ship skills grid |

## Consumes
Codebase inventory, usage metrics, deprecation notices, dead code detection tools.

## Produces
Deleted dead code paths, removed unused feature flags, cleaned repository dependencies.

## When applied
When sunsetting deprecated features, removing obsolete APIs, or cleaning up abandoned code paths in the Ship phase.

## Sub-concepts
none

## Part of
`none`

## Implementation status
clean

## Design notes
Zombie-code removal actively identifies and eliminates unmaintained or abandoned code paths that create cognitive drag, maintenance overhead, and security liabilities across the codebase.
