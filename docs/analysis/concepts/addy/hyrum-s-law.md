---
package: addy
name: Hyrum's Law
slug: hyrum-s-law
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: docs/adoption-guide.md, sha256: d36695c393ebad379282c090b13f44a7a851ca0ec7c9453883e2fa3307924495}
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
  - {path: skills/api-and-interface-design/SKILL.md, sha256: 5dafd0c44a3aabf11cae5bcb34f6fcc24dfa5c01ba6e0d3176bce997f4d68bc8}
  - {path: skills/deprecation-and-migration/SKILL.md, sha256: 92d9846321fab624eded7ac55d19a7738cfd2321c2be2e35eb153dcacf7359de}
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Hyrum's Law

## Definition — verbatim
> "With a sufficient number of users of an API, all observable behaviors of your system will be depended on by somebody, regardless of what you promise in the contract." — skills/api-and-interface-design/SKILL.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/adoption-guide.md | 99 | applies | Cautions that in brownfield codebases any observable behavior, including bugs, is depended on by legacy consumers |
| external/api-and-interface-design.md | 1 | references | Web documentation metadata highlights Hyrum's Law as a core principle |
| README.md | 255 | references | Catalog summary lists Hyrum's Law as a primary principle of api-and-interface-design |
| skills/api-and-interface-design/SKILL.md | 22 | defines | Defines the principle that all observable behaviors become depended on regardless of contract promises |
| skills/deprecation-and-migration/SKILL.md | 29 | applies | Explains why removing code requires active migration rather than simple announcements |
| skills/git-workflow-and-versioning/SKILL.md | 284 | applies | Applies Hyrum's Law to semver releases, noting that changing depended-on behavior is a major breaking change |

## Consumes
Public API endpoints, contracts, or module interfaces with active consumers.

## Produces
Design constraints and migration strategies preventing silent breaking changes.

## When applied
When designing new interfaces, modifying existing APIs, or planning deprecations and version bumps.

## Sub-concepts
none

## Part of
api-and-interface-design

## Implementation status
clean in skills/api-and-interface-design/SKILL.md, skills/deprecation-and-migration/SKILL.md, and docs/adoption-guide.md; defects: doc-drift, cross-file-contradiction in skills/git-workflow-and-versioning/SKILL.md; defects: doc-drift, orphan in external documentation; defects: doc-drift in README.md

## Design notes
Hyrum's Law forces agents to treat all observable behavior — including timing quirks and undocumented bugs — as contractually binding in mature systems, mandating active migration paths rather than optimistic assumption of contract purity.
