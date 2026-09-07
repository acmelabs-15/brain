---
package: rjm
name: git height
slug: git-height
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-079-merge-time-plugin-version-bump.md, sha256: b317b3a12963681bd925bbe44f1233471c97de08730385744caff8aea3b93604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# git height

## Definition — verbatim
(used, not defined)

> "Derived version from git height (NBGV-style)" — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-079-merge-time-plugin-version-bump.md | 104 | used here | Evaluated and rejected versioning mechanism due to shallow-clone hazards and lack of build-time stamping. |

## Consumes
Git commit history and commit counter queries (`git rev-list --count`).

## Produces
Monotonically increasing version integers derived from commit graph depth.

## When applied
Evaluated during versioning strategy reviews as an automated counter alternative.

## Sub-concepts
none

## Part of
versioning-strategy

## Implementation status
clean

## Design notes
Git height (deriving version numbers from commit count, similar to Nerdbank.GitVersioning) was evaluated to automate version increments. It was rejected because in this repository, hosts consume manifest files directly from raw git HEAD without an intermediate build step, meaning the derived value would still have to be written and committed, reintroducing either PR collisions or torn-main states (plus shallow-clone hazards).
