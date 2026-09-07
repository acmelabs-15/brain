---
package: rjm
name: MIXED
slug: mixed
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MIXED

## Definition — verbatim
> "| MIXED | Combination of above | Apply per-file rules |" — .claude/skills/review/references/qa.md:60

## Also called — verbatim
> "1. Classifies the PR type (CODE, WORKFLOW, CONFIG, DOCS, MIXED)" — docs/workflow-commands.md:122

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/qa.md | 60 | defined here | PR category classification representing a combination of file types requiring per-file test coverage rules. |
| docs/workflow-commands.md | 122 | defined here | Lifecycle PR type classification for `/test` command dispatching applicable review gates based on changed files. |

## Consumes
Pull request diffs containing files spanning multiple categories (code, workflows, configuration, documentation).

## Produces
Granular review routing that applies category-specific quality and testing rules individually to each changed file.

## When applied
Applied during initial PR type detection in `/test` and QA review when modified files belong to multiple distinct categories.

## Sub-concepts
none

## Part of
pr-type-detection

## Implementation status
defects: doc-drift

## Design notes
A composite pull request classification in rjm's test and review workflows that handles multi-category changes by applying targeted quality and testing standards on a per-file basis rather than forcing a single uniform policy across disparate file types.
