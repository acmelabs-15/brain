---
package: rjm
name: Target Resolution
slug: target-resolution
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

# Target Resolution

## Definition — verbatim
> "1. Target Resolution<br/>Resolve paths, check exists" — .claude/skills/analysis-provenance/SKILL.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analysis-provenance/SKILL.md | 64 | defined here | Flowchart node defining Step 1 of provenance analysis: resolve paths and check existence. |

## Consumes
Target file or directory path arguments provided to provenance tools.

## Produces
Resolved absolute and relative filesystem paths confirmed to exist on disk.

## When applied
Step 1 of the 5-step provenance analysis workflow.

## Sub-concepts
none

## Part of
analysis-provenance

## Implementation status
defects: doc-drift, missing-path

## Design notes
The initial stage of the provenance workflow that canonicalizes input paths and verifies their presence on disk. Without robust target resolution, downstream provenance checks could evaluate nonexistent files or misinterpret relative path traversals.
