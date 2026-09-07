---
package: rjm
name: Resolution Report
slug: resolution-report
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/merge-resolver.md, sha256: 86e3616bd8f081ebb1d343da98a60df28413592427c10d9ce95f992eab3e738b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Resolution Report

## Definition — verbatim
> "After shell-backed conflict resolution completes, generate a report documenting each resolution:" — .claude/agents/merge-resolver.md:180

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/merge-resolver.md | 178 | defined here | Phase 6 output artifact documenting PR context, conflict strategies, confidence scores, and rationales. |

## Consumes
Completed shell-executed merge actions, verification outputs, and confidence ratings.

## Produces
Structured markdown report detailing PR context, resolved conflicts table, file-by-file decision rationale, and manual review flags.

## When applied
Generated immediately after shell-backed conflict resolution and staging verification complete.

## Sub-concepts
none

## Part of
resolution-workflow

## Implementation status
defects: doc-drift

## Design notes
A structured audit document emitted by the merge-resolver agent upon completing conflict resolution. It provides transparency into every automated and manual decision made during the merge, detailing commit hashes, applied strategies, and confidence levels, while highlighting any low-confidence resolutions requiring human inspection.
