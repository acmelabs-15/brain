---
package: rjm
path: .agents/architecture/ADR-050-adr-protocol-sync.md
type: agent
bytes: 4391
unit: inv-rjm-18
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-050-adr-protocol-sync.md, sha256: b19f1dcefa7f4fc2b5d2ca4e8f5e0c0c8407ae4c803857418a2621ce744bc9ab}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-050-adr-protocol-sync.md

## Purpose — required, verbatim
> "Establish a two-tier ADR-to-Protocol sync process: an automated audit script and a manual integration checklist." — .agents/architecture/ADR-050-adr-protocol-sync.md:32

## Design intent — required
Architecture decision record creating a two-tier synchronization mechanism (an automated Python audit script and a manual integration checklist) to bridge the governance gap between RFC 2119 architectural mandates and active operational session enforcement in `SESSION-PROTOCOL.md`. Ensures that architecturally approved MUST requirements actually propagate to agent execution prompts.

## Phase — required
cross-phase

## Inputs — required
- RFC 2119 requirement keywords (MUST, MUST NOT, SHOULD, SHOULD NOT, MAY) parsed from ADR files — .agents/architecture/ADR-050-adr-protocol-sync.md:36
- Reference citations in SESSION-PROTOCOL.md — .agents/architecture/ADR-050-adr-protocol-sync.md:36-38

## Outputs — required
- Optional "Protocol Integration" sections in ADR templates and automated sync coverage reports — .agents/architecture/ADR-050-adr-protocol-sync.md:40-53

## Invokes — required
- reference ADR-035 — .agents/architecture/ADR-050-adr-protocol-sync.md:108
- reference ADR-042 — .agents/architecture/ADR-050-adr-protocol-sync.md:109
- reference ADR-043 — .agents/architecture/ADR-050-adr-protocol-sync.md:110

## Invoked by — required
- doc readme — .agents/architecture/README.md:124

## Concepts named — required, verbatim
- `ADR-to-Protocol Sync Process` — .agents/architecture/ADR-050-adr-protocol-sync.md:12 — defined here
- `RFC 2119` — .agents/architecture/ADR-050-adr-protocol-sync.md:24 — used here
- `SESSION-PROTOCOL.md` — .agents/architecture/ADR-050-adr-protocol-sync.md:24 — used here
- `two-tier ADR-to-Protocol sync process` — .agents/architecture/ADR-050-adr-protocol-sync.md:32 — defined here
- `Automated Audit Script` — .agents/architecture/ADR-050-adr-protocol-sync.md:34 — defined here
- `Manual Integration Checklist` — .agents/architecture/ADR-050-adr-protocol-sync.md:42 — defined here
- `ADR Template Update` — .agents/architecture/ADR-050-adr-protocol-sync.md:51 — defined here
- `Protocol Integration` — .agents/architecture/ADR-050-adr-protocol-sync.md:53 — defined here
- `Single source of truth principle` — .agents/architecture/ADR-050-adr-protocol-sync.md:63 — used here

## Structure
- # ADR-050: ADR-to-Protocol Sync Process
- ## Status
- ## Date
- ## Context
- ## Decision
- ### Automated Audit Script
- ### Manual Integration Checklist
- ### ADR Template Update
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Implementation Notes
- ### Script Location
- ### CI Integration
- ### Exit Codes
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · `.agents/architecture/ADR-050-adr-protocol-sync.md:92` · References `scripts/sync_adr_protocol.py` which is absent from repository despite frontmatter marking `implemented: true`.
- `missing-path` · `.agents/architecture/ADR-050-adr-protocol-sync.md:116` · References `.agents/SESSION-PROTOCOL.md` which does not exist in repository.

## Observations
Diagnoses the core organizational vulnerability of governance repositories: decisions documented in architectural records remain unenforced unless actively transcribed into the operational prompt files that autonomous agents consult during execution.

## Context cost
4391 bytes (~1098 tokens). Architecture decision record specifying ADR-to-protocol synchronization.
