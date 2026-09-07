---
package: rjm
name: extract-and-index pattern
slug: extract-and-index-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# extract-and-index pattern

## Definition — verbatim
> "Implements the Vercel extract-and-index pattern for 60-80% token reduction. Splits markdown by headings into detail files, generates a compact pipe-delimited index." — .claude/skills/context-optimizer/SKILL.md:253

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/SKILL.md | 253 | defined here | Defined as the Vercel-derived pattern splitting markdown by headings into detail files and generating a compact index. |

## Consumes
Uncompressed markdown context files (such as `AGENTS.md` or large documentation documents).

## Produces
Extracted detail markdown files in a subdirectory and a compact pipe-delimited index file.

## When applied
Applied when large markdown files require 60-80% token reduction while preserving contextual retrievability via `@import`.

## Sub-concepts
none

## Part of
context-optimizer

## Implementation status
defects: doc-drift, missing-path

## Design notes
The extract-and-index pattern is a context-optimization design pattern that partitions large monolithic context files into individual topic files referenced by a lightweight pipe-delimited index, dramatically reducing baseline prompt token consumption without sacrificing deep context retrievability.
