---
package: rjm
name: first-class artifacts
slug: first-class-artifacts
kind: pattern
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/execution-plans/SKILL.md, sha256: 5fce18066fe388549f310b14e86f36e023853679c1954c76d5b4400fe0c1c472}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# first-class artifacts

## Definition — verbatim
> "Treat execution plans as first-class artifacts, versioned in the repository." — .claude/skills/execution-plans/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/execution-plans/SKILL.md | 10 | defined here | Foundational architectural pattern declaring that execution plans must be committed repository files. |

## Consumes
Repository file system structure and version control management under `.agents/plans/`.

## Produces
Trackable, reviewable, and version-controlled execution plan markdown files.

## When applied
Governs all execution plan authoring, modification, and archiving throughout the software lifecycle.

## Sub-concepts
none

## Part of
execution-plans

## Implementation status
clean

## Design notes
The first-class artifacts pattern elevates execution plans from ephemeral conversational context to durable repository assets. This ensures plans are reviewed, version-controlled, diffable, and retained in repository history alongside the code they describe.
