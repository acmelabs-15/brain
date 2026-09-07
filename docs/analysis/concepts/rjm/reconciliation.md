---
package: rjm
name: Reconciliation
slug: reconciliation
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
  - {path: .claude/skills/pipeline-validator/SKILL.md, sha256: e2f8fd7386caf66807b65a69ac0decff9289c4f6ff2d6421a278345a0aea5e8c}
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Reconciliation

## Definition — verbatim
> "### Reconciliation (Interactive)" — .claude/skills/doc-accuracy/SKILL.md:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 177 | defined here | Defines the interactive reconciliation phase where proposed documentation fixes are presented for user approval. |
| .claude/skills/pipeline-validator/SKILL.md | 122 | used here | Checklist step reconciling detected repository name, branch name, and active PR status against expectations. |
| .claude/skills/planner/scripts/executor.py | 7 | defined here | Defines conditional Step 2 workflow phase validating existing code implementation against plan objectives. |
| .claude/skills/planner/SKILL.md | 208 | defined here | Outlines Step 2 conditional execution phase reconciling existing codebase reality when prior work is signaled. |

## Consumes
Scan findings, execution plan, detected repository state, or user feedback.

## Produces
Approved documentation patches, reconciled codebase baseline, or confirmed execution parameters.

## When applied
Executed interactively after verification scans complete or conditionally during execution planning when prior work exists.

## Sub-concepts
none

## Part of
cross-phase

## Implementation status
defects: doc-drift, missing-path, internal-contradiction, exit-code-mismatch

## Design notes
Reconciliation is a cross-phase governance checkpoint used across planning, validation, and documentation accuracy. Rather than allowing automated tools to unilaterally overwrite files or plunge ahead with planned changes, Reconciliation stops to align actual codebase state with documentation or plans, requiring confirmation before mutations are applied.
