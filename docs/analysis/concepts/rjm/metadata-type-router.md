---
package: rjm
name: metadata.type: router
slug: metadata-type-router
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md, sha256: 21223deef2b27e1961fbf9f2c04cb9d97eb086e088ae58ab38e73644c61b5139}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# metadata.type: router

## Definition — verbatim
(used, not defined)

> "- `.claude/skills/autoplan/SKILL.md` is a skill (`metadata.type: router`," — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md | 41 | used here | Skill frontmatter metadata attribute classifying autoplan as a routing skill. |

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
defects: doc-drift

## Design notes
A skill frontmatter metadata attribute designating a skill as a request router, representing a metadata classification label rather than an independent lifecycle concept.
