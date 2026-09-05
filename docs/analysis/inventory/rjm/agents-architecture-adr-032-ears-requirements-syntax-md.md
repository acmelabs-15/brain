---
package: rjm
path: .agents/architecture/ADR-032-ears-requirements-syntax.md
type: agent
bytes: 8441
unit: inv-rjm-12
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-032-ears-requirements-syntax.md, sha256: 79bb927602d0d6a3a0811765074ccded5e07b0533cdcb408691a3a9c0296c2eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-032-ears-requirements-syntax.md

## Purpose — required, verbatim
> "Adopt the EARS (Easy Approach to Requirements Syntax) format as the standard for all formal requirements in the ai-agents project." — .agents/architecture/ADR-032-ears-requirements-syntax.md:43

## Design intent — required
Architectural decision record standardizing requirements syntax using the EARS (Easy Approach to Requirements Syntax) framework across all formal specifications. Solves problems of ambiguity, untestable assertions, missing trigger conditions, and unstructured prose in natural language requirements by enforcing six distinct structural patterns (Ubiquitous, Event-driven, State-driven, Optional, Unwanted, Complex) and mandatory "SO THAT" rationale clauses, enabling automated parsing and programmatic verification by the critic agent.

## Phase — required
rjm:spec

## Inputs — required
Phase 1 Spec Layer implementation plan in Issue #193 (`.agents/architecture/ADR-032-ears-requirements-syntax.md:24, 197`), template creation issue #595 (`.agents/architecture/ADR-032-ears-requirements-syntax.md:196`), EARS industrial requirements research by Alistair Mavin et al. (`.agents/architecture/ADR-032-ears-requirements-syntax.md:62, 194`), RFC 2119 keywords specification (`.agents/architecture/ADR-032-ears-requirements-syntax.md:74`), and identified failure modes of unconstrained natural language requirements (`.agents/architecture/ADR-032-ears-requirements-syntax.md:24-33`).

## Outputs — required
Standardized adoption of six EARS requirement patterns for all formal specification documents (`.agents/architecture/ADR-032-ears-requirements-syntax.md:43-56`), mandatory "SO THAT" rationale clauses (`.agents/architecture/ADR-032-ears-requirements-syntax.md:56`), YAML frontmatter metadata schema (`.agents/architecture/ADR-032-ears-requirements-syntax.md:142-160`), critic agent validation checklist (`.agents/architecture/ADR-032-ears-requirements-syntax.md:162-170`), and evaluation metrics and rollback criteria (`.agents/architecture/ADR-032-ears-requirements-syntax.md:117-133`).

## Invokes — required
- template .agents/governance/ears-format.md — .agents/architecture/ADR-032-ears-requirements-syntax.md:138
- config ADR-005 — .agents/architecture/ADR-032-ears-requirements-syntax.md:188
- config ADR-010 — .agents/architecture/ADR-032-ears-requirements-syntax.md:189
- config ADR-017 — .agents/architecture/ADR-032-ears-requirements-syntax.md:190

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:112

## Concepts named — required, verbatim
- `EARS` — .agents/architecture/ADR-032-ears-requirements-syntax.md:43 — defined here
- `Easy Approach to Requirements Syntax` — .agents/architecture/ADR-032-ears-requirements-syntax.md:43 — defined here
- `Ubiquitous` — .agents/architecture/ADR-032-ears-requirements-syntax.md:49 — defined here
- `Event-driven` — .agents/architecture/ADR-032-ears-requirements-syntax.md:50 — defined here
- `State-driven` — .agents/architecture/ADR-032-ears-requirements-syntax.md:51 — defined here
- `Optional` — .agents/architecture/ADR-032-ears-requirements-syntax.md:52 — defined here
- `Unwanted` — .agents/architecture/ADR-032-ears-requirements-syntax.md:53 — defined here
- `Complex` — .agents/architecture/ADR-032-ears-requirements-syntax.md:54 — defined here
- `SO THAT` — .agents/architecture/ADR-032-ears-requirements-syntax.md:56 — defined here
- `critic agent` — .agents/architecture/ADR-032-ears-requirements-syntax.md:38 — used here
- `Gherkin` — .agents/architecture/ADR-032-ears-requirements-syntax.md:73 — used here
- `RFC 2119` — .agents/architecture/ADR-032-ears-requirements-syntax.md:74 — used here
- `Formal Methods` — .agents/architecture/ADR-032-ears-requirements-syntax.md:75 — used here
- `User Stories` — .agents/architecture/ADR-032-ears-requirements-syntax.md:77 — used here
- `YAML Front Matter Schema` — .agents/architecture/ADR-032-ears-requirements-syntax.md:142 — defined here
- `Validation Checklist` — .agents/architecture/ADR-032-ears-requirements-syntax.md:162 — defined here
- `Rollback Strategy` — .agents/architecture/ADR-032-ears-requirements-syntax.md:128 — defined here
- `Success Metrics` — .agents/architecture/ADR-032-ears-requirements-syntax.md:117 — defined here

## Structure
- ADR-032: EARS Requirements Syntax Standard — .agents/architecture/ADR-032-ears-requirements-syntax.md:12
- Status — .agents/architecture/ADR-032-ears-requirements-syntax.md:14
- Date — .agents/architecture/ADR-032-ears-requirements-syntax.md:18
- Context — .agents/architecture/ADR-032-ears-requirements-syntax.md:22
- Decision — .agents/architecture/ADR-032-ears-requirements-syntax.md:41
- Rationale — .agents/architecture/ADR-032-ears-requirements-syntax.md:58
- Why EARS Specifically — .agents/architecture/ADR-032-ears-requirements-syntax.md:60
- Alternatives Considered — .agents/architecture/ADR-032-ears-requirements-syntax.md:69
- Trade-offs — .agents/architecture/ADR-032-ears-requirements-syntax.md:79
- Consequences — .agents/architecture/ADR-032-ears-requirements-syntax.md:95
- Positive — .agents/architecture/ADR-032-ears-requirements-syntax.md:97
- Negative — .agents/architecture/ADR-032-ears-requirements-syntax.md:105
- Neutral — .agents/architecture/ADR-032-ears-requirements-syntax.md:111
- Success Metrics — .agents/architecture/ADR-032-ears-requirements-syntax.md:117
- Rollback Strategy — .agents/architecture/ADR-032-ears-requirements-syntax.md:128
- Implementation Notes — .agents/architecture/ADR-032-ears-requirements-syntax.md:134
- Required Artifacts — .agents/architecture/ADR-032-ears-requirements-syntax.md:136
- YAML Front Matter Schema — .agents/architecture/ADR-032-ears-requirements-syntax.md:142
- Validation Checklist (for Critic Agent) — .agents/architecture/ADR-032-ears-requirements-syntax.md:162
- Applicability Scope — .agents/architecture/ADR-032-ears-requirements-syntax.md:171
- Related Decisions — .agents/architecture/ADR-032-ears-requirements-syntax.md:186
- References — .agents/architecture/ADR-032-ears-requirements-syntax.md:192

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Standardizes specification syntax to enable automated downstream validation by critic agents. Defines six distinct EARS patterns (Ubiquitous, Event-driven, State-driven, Optional, Unwanted, Complex) and mandates a `SO THAT` clause for business value linkage, distinguishing formal specifications from session working notes.

## Context cost
8441 bytes, 204 lines, ~2100 tokens. Dynamically references `.agents/governance/ears-format.md` (~4KB).
