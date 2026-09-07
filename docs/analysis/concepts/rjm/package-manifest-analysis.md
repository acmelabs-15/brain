---
package: rjm
name: Package Manifest Analysis
slug: package-manifest-analysis
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

# Package Manifest Analysis

## Definition — verbatim
> "3. Package Manifest Analysis<br/>package.json, requirements,<br/>lockfiles" — .claude/skills/analysis-provenance/SKILL.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analysis-provenance/SKILL.md | 66 | defined here | Flowchart node defining Step 3 of provenance analysis: inspect package manifests and lockfiles. |

## Consumes
Target file paths and repository dependency manifests (`package.json`, `requirements.txt`, lockfiles).

## Produces
Ownership signals confirming whether a target file corresponds to a declared external dependency.

## When applied
Step 3 of the 5-step provenance analysis workflow.

## Sub-concepts
none

## Part of
analysis-provenance

## Implementation status
defects: doc-drift, missing-path

## Design notes
Cross-references target files with project dependency manifests (e.g., `package.json`, `pyproject.toml`, lockfiles). It determines whether the component is tracked as an official dependency, clarifying code boundaries.
