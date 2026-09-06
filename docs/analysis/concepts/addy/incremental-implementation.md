---
package: addy
name: incremental-implementation
slug: incremental-implementation
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/incremental-implementation.json, sha256: 3f40c3955e0cccd725711818da2c4e3eac5c6eff0129afadea5cf8b74e558813}
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
  - {path: external/context-engineering.md, sha256: a765b30399df4aeb3358a50d0a6cac1d95853e82426e003908aabc75111b56b0}
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
  - {path: external/test-driven-development.md, sha256: bbfc367718b154ec8a68864f5e0756cb6df62844ab22a8cdf9248789f3f8bf9f}
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
  - {path: skills/deprecation-and-migration/SKILL.md, sha256: 92d9846321fab624eded7ac55d19a7738cfd2321c2be2e35eb153dcacf7359de}
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# incremental-implementation

## Definition — verbatim
> "Thin vertical slices - implement, test, verify, commit. Feature flags, safe defaults, rollback-friendly changes" — README.md:249

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/incremental-implementation.json | 2 | used here | Identifies the evaluated skill in the eval test case configuration. |
| external/api-and-interface-design.md | 12 | used here | Cross-references incremental implementation in related skills navigation. |
| external/context-engineering.md | 12 | used here | Links to incremental implementation in the Build phase skills list. |
| external/doubt-driven-development.md | 12 | used here | Lists incremental implementation as a companion Build phase skill. |
| external/frontend-ui-engineering.md | 12 | used here | Cross-references incremental implementation in Build phase related skills. |
| external/source-driven-development.md | 12 | used here | Cites incremental implementation in related skills documentation. |
| external/test-driven-development.md | 12 | used here | Links to incremental implementation as a related core execution skill. |
| README.md | 249 | used here | Catalogs the skill in the Build phase table of the README. |
| references/definition-of-done.md | 3 | used here | Cites incremental implementation alongside the definition of done reference. |
| skills/deprecation-and-migration/SKILL.md | 183 | used here | Recommends applying incremental implementation when executing migration steps. |
| skills/spec-driven-development/SKILL.md | 202 | used here | Links spec authoring to incremental implementation as the subsequent build workflow. |

## Consumes
A task breakdown, technical specification, or multi-file architectural change.

## Produces
Sequenced thin vertical slices, test proofs, atomic commits, feature flags, and safe rollback boundaries.

## When applied
> "Any change touching more than one file" — README.md:249

## Sub-concepts
- vertical-slices
- verifiable-slice
- working-increment
- feature-flag
- safe-defaults
- rollback-friendly

## Part of
- addy:Build

## Implementation status
clean

## Design notes
Incremental implementation provides the execution discipline that makes large software features manageable. By constraining development to thin, end-to-end vertical slices that are verified and committed individually, it prevents the cognitive overload and unmergeable batches typical of unconstrained agent generation.
