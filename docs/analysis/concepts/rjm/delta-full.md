---
package: rjm
name: delta-full
slug: delta-full
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-evidence.md, sha256: 70d527ebb420739aa099f7982f4dc28e44432b3fa91532ae93ed5e0fa78e34e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# delta-full

## Definition — verbatim
(used, not defined)

> "rows are also the rows carrying the large positive delta-full (+1.11, +1.22," — .claude/skills/context-optimizer/references/rule-audit-evidence.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-evidence.md | 26 | used here | Label for the performance score delta observed between the full rule body mechanism and baseline control in Opus evaluation runs. |

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
clean

## Design notes
`delta-full` is an evaluation metric score difference label denoting the performance increment of full rule prompt injection over baseline, classified as `kind: name-only` per D-023.
