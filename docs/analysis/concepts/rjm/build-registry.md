---
package: rjm
name: build_registry
slug: build-registry
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/skill_registry.py, sha256: b59dee7092a05da94f9dca83da5ee0b2372eadda816aadb43cc58e02e1f6c786}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# build_registry

## Definition — verbatim
(used, not defined)

> "def build_registry(skills_dir: Path, project_root: Path) -> list[SkillMetadata]:" — scripts/skill_registry.py:219

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skill_registry.py | 219 | defined here | Iterates through all skill directories to compile a list of SkillMetadata objects. |

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
defects: orphan, doc-drift

## Design notes
build_registry is a Python function identifier aggregating metadata across skills into a registry list rather than an SDLC lifecycle concept, classified as name-only per D-023.
