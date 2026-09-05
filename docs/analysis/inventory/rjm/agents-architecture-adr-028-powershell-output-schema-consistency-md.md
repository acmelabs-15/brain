---
package: rjm
path: .agents/architecture/ADR-028-powershell-output-schema-consistency.md
type: agent
bytes: 4643
unit: inv-rjm-11
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-028-powershell-output-schema-consistency.md, sha256: 9470b04b02f666ddf7eed434937a28f6495aae7dcdc8eaf96d4616a2ab65851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-028-powershell-output-schema-consistency.md

## Purpose — required, verbatim
> "When designing PowerShell cmdlets and scripts that return structured data, a decision must be made about how to handle optional or conditional properties in output objects." — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:37

## Design intent — required
Mandates schema consistency in script output objects: all properties must always be present (populated with `null`, `0`, or empty collections) rather than conditionally omitted from output shapes when optional features or switches are unused. While originally formulated for PowerShell cmdlets (`Get-PRReviewComments.ps1`), the record documents its own supersession by ADR-056 / ADR-103, which re-platforms this envelope consistency rule into Python (`scripts/github_core/output.py`, `.agents/schemas/skill-output.schema.json`).

## Phase — required
none

## Inputs — required
Output properties from GitHub querying scripts, such as `Get-PRReviewComments.ps1` with or without `-IncludeIssueComments`.

## Outputs — required
Predictable, fixed-schema PSCustomObject and JSON object contracts where all properties (such as `IssueCommentCount` and `ReviewCommentCount`) are guaranteed to exist.

## Invokes — required
- doc ADR-056 — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:16
- script scripts/github_core/output.py — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:23
- config .agents/schemas/skill-output.schema.json — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:23
- script Get-PRReviewComments.ps1 — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:39

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:202

## Concepts named — required, verbatim
- `schema consistency` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:52 — defined here
- `envelope level` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:21 — used here
- `output envelope` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:22 — used here
- `skill-output.schema.json` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:23 — used here
- `PSCustomObject` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:99 — used here
- `Add-Member` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:19 — used here

## Structure
- `# ADR-028: PowerShell Output Schema Consistency` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:12
- `## Status` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:14
- `## Date` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:31
- `## Context` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:35
- `## Decision` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:46
- `## Rationale` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:50
- `### Schema Consistency` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:52
- `### Backward Compatibility` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:66
- `### PowerShell Cmdlet Conventions` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:72
- `### Pipeline Friendliness` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:82
- `### Alternatives Considered` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:94
- `## Consequences` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:115
- `## Compliance` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:129
- `## References` — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:138

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:39 — Referenced PowerShell script `Get-PRReviewComments.ps1` no longer exists in repository (all `.ps1` scripts were removed).

## Observations
- Clarifies the lifecycle distinction between superseded and deprecated: "ADR-056 still cites it in present tense as a live, enforced dependency, and marking the source of an active rule `deprecated` reproduces the exact status-contradiction bug issue #5201 exists to fix." — .agents/architecture/ADR-028-powershell-output-schema-consistency.md:24-27
- The schema-consistency pattern was ported from PowerShell object properties to a Python JSON schema validation envelope.

## Context cost
4643 bytes, ~1200 tokens.
