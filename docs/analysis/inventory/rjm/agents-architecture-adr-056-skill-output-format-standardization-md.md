---
package: rjm
path: .agents/architecture/ADR-056-skill-output-format-standardization.md
type: agent
bytes: 4227
unit: inv-rjm-20
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-056-skill-output-format-standardization.md, sha256: a71c3a7799d1aa2952609e6dea6236962c0902ec6d5a6b452d303cef3e209c9d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-056-skill-output-format-standardization.md

## Purpose — required, verbatim
> "This ADR standardizes the output envelope and format switching." — .agents/architecture/ADR-056-skill-output-format-standardization.md:44

## Design intent — required
Standardizes skill script outputs across the repository into a structured four-field envelope (`Success`, `Data`, `Error`, `Metadata`) with automatic format switching between machine-readable JSON and human-readable terminal summaries. Without it, scripts mix diagnostic logging with JSON payloads across stdout/stderr, breaking agent JSON deserialization (such as `ConvertFrom-Json`) and leaving downstream agents unable to reliably parse skill execution results or error codes.

## Phase — required
none

## Inputs — required
- Diagnostic and data outputs from skill scripts, such as `Get-PRChecks` mixing JSON with `Write-Host` human output — .agents/architecture/ADR-056-skill-output-format-standardization.md:40
- Output format parameter `-OutputFormat` accepting `JSON`, `Human`, or `Auto` — .agents/architecture/ADR-056-skill-output-format-standardization.md:49
- Schema consistency principles from ADR-028 and exit code standards from ADR-035 — .agents/architecture/ADR-056-skill-output-format-standardization.md:44

## Outputs — required
- Standardized output envelope with `Success`, `Data`, `Error`, and `Metadata` fields — .agents/architecture/ADR-056-skill-output-format-standardization.md:48
- Valid JSON on the success output stream in non-interactive/redirected/CI mode — .agents/architecture/ADR-056-skill-output-format-standardization.md:50-51
- Compact summary written to host with color-coded status in human interactive mode — .agents/architecture/ADR-056-skill-output-format-standardization.md:52
- Standard error responses with `ErrorCode` enum values aligned to ADR-035 exit codes — .agents/architecture/ADR-056-skill-output-format-standardization.md:53
- Output helpers library in `scripts/github_core/output.py`, JSON schema in `.agents/schemas/skill-output.schema.json`, and validator at `scripts/validate_skill_output.py` — .agents/architecture/ADR-056-skill-output-format-standardization.md:87-89

## Invokes — required
- script scripts/github_core/output.py — .agents/architecture/ADR-056-skill-output-format-standardization.md:24
- reference .claude/skills/adr-generator/references/adr-best-practices.md — .agents/architecture/ADR-056-skill-output-format-standardization.md:26
- config .agents/schemas/skill-output.schema.json — .agents/architecture/ADR-056-skill-output-format-standardization.md:88
- script scripts/validate_skill_output.py — .agents/architecture/ADR-056-skill-output-format-standardization.md:89
- doc ADR-028 — .agents/architecture/ADR-056-skill-output-format-standardization.md:6
- doc ADR-103 — .agents/architecture/ADR-056-skill-output-format-standardization.md:7
- doc ADR-035 — .agents/architecture/ADR-056-skill-output-format-standardization.md:44
- doc ADR-042 — .agents/architecture/ADR-056-skill-output-format-standardization.md:87

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:206

## Concepts named — required, verbatim
- `schema-consistency principle` — .agents/architecture/ADR-056-skill-output-format-standardization.md:17 — used here
- `envelope level` — .agents/architecture/ADR-056-skill-output-format-standardization.md:18 — used here
- `PowerShell parameter style` — .agents/architecture/ADR-056-skill-output-format-standardization.md:22 — used here
- `-OutputFormat` — .agents/architecture/ADR-056-skill-output-format-standardization.md:22 — defined here
- `ErrorCode` — .agents/architecture/ADR-056-skill-output-format-standardization.md:23 — defined here
- `--output-format` — .agents/architecture/ADR-056-skill-output-format-standardization.md:24 — used here
- `Error.Code` — .agents/architecture/ADR-056-skill-output-format-standardization.md:25 — used here
- `Error.Type` — .agents/architecture/ADR-056-skill-output-format-standardization.md:25 — used here
- `Get-PRChecks` — .agents/architecture/ADR-056-skill-output-format-standardization.md:40 — used here
- `Write-Host` — .agents/architecture/ADR-056-skill-output-format-standardization.md:40 — used here
- `Write-Output` — .agents/architecture/ADR-056-skill-output-format-standardization.md:42 — used here
- `ConvertFrom-Json` — .agents/architecture/ADR-056-skill-output-format-standardization.md:42 — used here
- `standard envelope` — .agents/architecture/ADR-056-skill-output-format-standardization.md:48 — defined here
- `Success` — .agents/architecture/ADR-056-skill-output-format-standardization.md:48 — defined here
- `Data` — .agents/architecture/ADR-056-skill-output-format-standardization.md:48 — defined here
- `Error` — .agents/architecture/ADR-056-skill-output-format-standardization.md:48 — defined here
- `Metadata` — .agents/architecture/ADR-056-skill-output-format-standardization.md:48 — defined here
- `JSON` — .agents/architecture/ADR-056-skill-output-format-standardization.md:49 — defined here
- `Human` — .agents/architecture/ADR-056-skill-output-format-standardization.md:49 — defined here
- `Auto` — .agents/architecture/ADR-056-skill-output-format-standardization.md:49 — defined here
- `output helpers` — .agents/architecture/ADR-056-skill-output-format-standardization.md:87 — defined here
- `skill-output.schema.json` — .agents/architecture/ADR-056-skill-output-format-standardization.md:88 — defined here

## Structure
- # ADR-056: Skill Output Format Standardization
- ## Status
- ## Date
- ## Context
- ## Decision
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ## Consequences
- ### Positive
- ### Negative
- ## Implementation Notes
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/architecture/ADR-056-skill-output-format-standardization.md:21 · Decision items 2 and 6 specify PowerShell-style parameter -OutputFormat and flat ErrorCode, whereas shipped Python implementation uses --output-format and nested Error.Code/Error.Type, formally superseded by ADR-103 under the GDS Way bounded rule.

## Observations
Enforces the "GDS Way bounded rule" from `.claude/skills/adr-generator/references/adr-best-practices.md`: once an architectural decision record carries `implemented: true`, any subsequent modification to the decision contract requires a new superseding ADR (ADR-103) rather than an in-place edit, preserving historical decision integrity.

## Context cost
4227 bytes, ~1000 tokens. When fully invoked with referenced files: `scripts/github_core/output.py` (11470 bytes) and `.agents/schemas/skill-output.schema.json` (2453 bytes), total context cost is ~18150 bytes (~4500 tokens).
