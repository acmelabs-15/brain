---
package: rjm
path: .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md
type: agent
bytes: 10711
unit: inv-rjm-18
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md, sha256: 456c2b45675af44c0b9b0ab432e98a4f33d1b5b3d57a0fa91fccb9ae5e4ca239}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md

## Purpose — required, verbatim
> "All DESIGN-REVIEW documents MUST include YAML frontmatter with structured metadata." — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:41

## Design intent — required
Architecture decision record establishing a mandatory YAML frontmatter schema (`status`, `priority`, `reviewer`, `date`, and optional `pr-branch`/`scope`) for all architect DESIGN-REVIEW synthesis panel documents. Enables automated CI gate enforcement to block pull request merges whenever a review document contains non-approved statuses (`NEEDS_CHANGES` or `BLOCKED`) at `P0` or `P1` priority, directly preventing recurrence of the PR #908 bypass incident.

## Phase — required
cross-phase

## Inputs — required
- Architect DESIGN-REVIEW prose evaluations and synthesis panel verdicts — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:28-35
- Incident analysis of PR #908 unblocked merge — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:249

## Outputs — required
- Machine-readable YAML frontmatter specification and deterministic CI merge-blocking signals for P0/P1 non-approved reviews — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:45-80

## Invokes — required
- template DESIGN-REVIEW-template.md — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:187
- script validate_design_review.py — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:193
- reference ADR-042 — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:222
- reference ADR-006 — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:223
- reference ADR-010 — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:224
- reference ADR-040 — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:225
- reference ADR-043 — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:226
- doc 2026-01-15-pr-908-comprehensive-retrospective.md — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:249

## Invoked by — required
- doc readme — .agents/architecture/README.md:125

## Concepts named — required, verbatim
- `Synthesis Panel Frontmatter Standard` — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:12 — defined here
- `DESIGN-REVIEW` — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:28 — used here
- `architect synthesis panels` — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:28 — used here
- `quality gates` — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:37 — used here
- `Frontmatter Schema` — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:43 — defined here
- `Field Semantics` — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:56 — defined here
- `CI Gate Logic` — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:67 — defined here
- `gate-override` — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:152 — defined here
- `CODEOWNERS` — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:152 — used here

## Structure
- # ADR-051: Synthesis Panel Frontmatter Standard
- ## Status
- ## Author
- ## Date
- ## Context
- ## Decision
- ### Frontmatter Schema
- ### Field Semantics
- ### CI Gate Logic
- ### Deviation from Original Proposal
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Reversibility Assessment
- ## Security Considerations
- ## Confirmation
- ## Implementation Status
- ## Implementation Notes
- ### Phase 1: Schema & Template Definition
- ### Phase 2: Validation Script
- ### Phase 3: CI Gate Workflow
- ### Phase 4: Architect Agent Update
- ### Phase 5: Migration (Optional, Non-Blocking)
- ## Convergence with Related ADRs
- ## Related Decisions
- ## Related Issues
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · `.agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:198` · References `tests/test_validate_design_review.py` which does not exist in repository.
- `missing-path` · `.agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:202` · References `.github/workflows/architect-review-gate.yml` which does not exist in repository.
- `missing-path` · `.agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:250` · References `.agents/SESSION-PROTOCOL.md` which does not exist in repository.
- `missing-path` · `.agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:252` · References `.github/workflows/ai-session-protocol.yml` which does not exist in repository.

## Observations
Replaces an independent `blocking: true|false` boolean toggle with a compound condition on (`status`, `priority`), preventing contradictory metadata states where a document might claim `blocking: false` despite a high-severity `P0 BLOCKED` verdict.

## Context cost
10711 bytes (~2678 tokens). Architecture decision record detailing frontmatter schema and CI gating logic for synthesis panels.
