---
package: rjm
name: Vercel extract-and-index pattern
slug: vercel-extract-and-index-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/extract_and_index.py, sha256: 6d3e638453dc07f7586b49315c8539b2d9eaa0aad91b14e53cac345e8a0fcde4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Vercel extract-and-index pattern

## Definition — verbatim
> "Implements the Vercel extract-and-index pattern for 60-80% token reduction." — .claude/skills/context-optimizer/scripts/extract_and_index.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/extract_and_index.py | 4 | defined here | Referenced in module docstring as the structural extraction pattern splitting markdown into sections and generating a pipe-delimited index. |

## Consumes
Monolithic markdown documentation or lengthy context reference files.

## Produces
Modular markdown detail files per section and a compact pipe-delimited master index.

## When applied
Applied when large reference documents exceed agent context limits, partitioning content into on-demand chunks.

## Sub-concepts
section, build-index, write-detail-files

## Part of
context-optimizer

## Implementation status
defects: doc-drift, script-bug

## Design notes
An architectural context-management pattern derived from Vercel research that decomposes comprehensive documents into discrete section files while creating a minimal pipe-delimited table of contents, allowing agents to load high-level indices initially and fetch detail files only when relevant.
