---
package: rjm
name: Conflict Classification
slug: conflict-classification
kind: technique
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

# Conflict Classification

## Definition — verbatim
> "For each conflicted file, classify as auto-resolvable, rename-both, or manual:" — .claude/agents/merge-resolver.md:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/merge-resolver.md | 94 | defined here | Phase 2 of the resolution workflow categorizing conflicted files into resolution tiers. |

## Consumes
List of conflicted file paths from Phase 1.

## Produces
Triaged classification of each conflict: auto-resolvable (safe scripted patterns), rename-both (append-only evidence files), or manual resolution.

## When applied
Applied to all conflicted files prior to executing scripts or manual edits.

## Sub-concepts
auto-resolvable, rename-never-content-merge

## Part of
resolution-workflow

## Implementation status
defects: doc-drift

## Design notes
Phase 2 triage mechanism that routes conflicted files to appropriate resolution strategies. By classifying files into auto-resolvable, rename-both, or manual buckets, it safely automates mechanical file updates (lockfiles, generated agent definitions) while reserving detailed intent analysis for substantive source code.
