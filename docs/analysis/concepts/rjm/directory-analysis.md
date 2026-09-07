---
package: rjm
name: Directory Analysis
slug: directory-analysis
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

# Directory Analysis

## Definition — verbatim
> "2. Directory Analysis<br/>node_modules, .venv, vendor,<br/>.gitmodules" — .claude/skills/analysis-provenance/SKILL.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analysis-provenance/SKILL.md | 65 | defined here | Flowchart node defining Step 2 of provenance analysis: inspect directory paths for dependency indicators. |

## Consumes
Resolved target filesystem paths and directory hierarchy.

## Produces
Ownership classifications based on directory path patterns such as `node_modules`, `.venv`, `vendor`, or `.gitmodules`.

## When applied
Step 2 of the 5-step provenance analysis workflow.

## Sub-concepts
none

## Part of
analysis-provenance

## Implementation status
defects: doc-drift, missing-path

## Design notes
Evaluates the directory path of a target against known third-party and dependency locations (e.g. `node_modules`, `.venv`, `vendor`). This rapid heuristic provides early detection of external or vendored files before inspecting file contents.
