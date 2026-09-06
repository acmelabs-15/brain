---
package: addy
name: Artifact Review
slug: artifact-review
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/antigravity-setup.md, sha256: 2fc07de1373ccf06eaa1ea84943cd1b4492f0e1d21dc311eda9538ab0702002d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Artifact Review

## Definition — verbatim
> "When agents execute complex refactoring tasks using these skills, use `Ctrl+r` to enter the **Artifact Review** screen to review, edit, or approve code before it is committed." — docs/antigravity-setup.md:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/antigravity-setup.md | 124 | defines | Interactive gate screen enabling developers to inspect, edit, or approve generated changes prior to commit |

## Consumes
Generated code, refactor diffs, or artifacts produced by agent execution.

## Produces
Human verification approval or manual edit adjustments before git commit.

## When applied
Following complex refactorings or code generation tasks prior to committing changes.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Artifact Review acts as an interactive human-in-the-loop checkpoint, allowing developers to review and sanitize agent modifications before committing them to source control.
