---
package: rjm
name: priority
slug: priority
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/steering-matcher/get_applicable_steering.py, sha256: 15f73361277478c085d40035d5f99242107d46f25f493fce2a26c5870a6835b8}
  - {path: .claude/skills/steering-matcher/scripts/get_applicable_steering.py, sha256: 8c5e992f69084b1f8530605061fcee606e41fd8d9bc17905d1930950764f6a53}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# priority

## Definition — verbatim
(used, not defined)

> "## Priority" — templates/agents/roadmap.shared.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/steering-matcher/get_applicable_steering.py | 102 | used here | Extracts integer priority from steering frontmatter to rank applicable steering guidance. |
| .claude/skills/steering-matcher/scripts/get_applicable_steering.py | 115 | used here | Parses priority frontmatter key with default value of 5 for descending priority sort. |
| templates/agents/roadmap.shared.md | 110 | defined here | Section heading in the epic roadmap template specifying P0-P3 priority with RICE score. |

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
defects: doc-drift, orphan, other, script-bug, exit-code-mismatch

## Design notes
`priority` is a metadata field in steering file frontmatter and a section heading in roadmap templates used for ordering and triage rather than an autonomous lifecycle concept, classified as `kind: name-only` per D-023.
