---
package: rjm
name: File Header Analysis
slug: file-header-analysis
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analysis-provenance/SKILL.md, sha256: da8d7cfd6e7333bb7a893e589bc58588386cd6eb9c73c555be2e3b1757de7c27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# File Header Analysis

## Definition — verbatim
> "4. File Header Analysis<br/>First 20 lines: generated<br/>markers, copyright notices" — .claude/skills/analysis-provenance/SKILL.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analysis-provenance/SKILL.md | 67 | defined here | Flowchart node defining Step 4 of provenance analysis: inspect the first 20 lines for generator markers and copyright notices. |

## Consumes
The first 20 lines of the target file's content.

## Produces
Attribution signals identifying generator signatures, "DO NOT EDIT" notices, or third-party copyrights.

## When applied
Step 4 of the 5-step provenance analysis workflow.

## Sub-concepts
none

## Part of
analysis-provenance

## Implementation status
defects: doc-drift, missing-path

## Design notes
Inspects the first 20 lines of a source file for generated markers, tool attribution comments, or third-party copyright headers. This detects generated or vendored code residing in ostensibly local directories.
