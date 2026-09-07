---
package: rjm
name: Intentional forward reference
slug: intentional-forward-reference
kind: pattern
package_phase: rjm:sync
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/sync.md, sha256: f6e8579a330acaa0c1fad9b84a0e10fae41cdd63122e9d9becd65564f3727019}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Intentional forward reference

## Definition — verbatim
> "- **Intentional forward reference**: the spec names a planned path that does not exist yet." — .claude/commands/sync.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/sync.md | 51 | defined here | Triage category in `/sync` for planned future paths, annotated with `<!-- sync-drift-ignore -->` to suppress false alarms. |

## Consumes
A specification citation naming a future module or file planned for development in a subsequent phase.

## Produces
A trailing comment annotation `<!-- sync-drift-ignore -->` in the specification text.

## When applied
Applied during Step 2 of `/sync` when forward-looking specifications legitimately reference planned components.

## Sub-concepts
none

## Part of
triage, sync

## Implementation status
defects: orphan, missing-path

## Design notes
Specifications frequently outline multi-phase roadmaps that reference files not yet created. The intentional forward reference pattern allows authors to annotate planned paths with `<!-- sync-drift-ignore -->`, enabling comprehensive future planning while preventing automated drift detection tools from raising false alarms on legitimately absent files.
