---
package: rjm
name: tier:
slug: tier
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tier:

## Definition — verbatim
(used, not defined)

> "`tier:` frontmatter key naming its rank" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 37 | used here | Frontmatter key on agent definitions naming hierarchical rank, retired by ADR-098 in favor of role:. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 6 | used here | XML metadata tag declaring the complexity and strategic tier of the buy-vs-build skill. |

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
defects: doc-drift, missing-path

## Design notes
A frontmatter and XML configuration key indicating hierarchical rank or skill complexity level, classified as name-only per D-023.
