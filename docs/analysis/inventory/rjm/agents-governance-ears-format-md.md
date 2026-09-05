---
package: rjm
path: .agents/governance/ears-format.md
type: agent
bytes: 7339
unit: inv-rjm-54
in_scope_via: .agents/architecture/ADR-032-ears-requirements-syntax.md
aliases: []
memo_inputs:
  - {path: .agents/governance/ears-format.md, sha256: 846910c14494b7c3c1a4ed80a46287e611e6a62725e02e4f175f93096e1151fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/governance/ears-format.md

## Purpose — required, verbatim
> "EARS (Easy Approach to Requirements Syntax) is a structured syntax for writing testable, unambiguous requirements. This document defines the EARS format used in the ai-agents specification layer." — .agents/governance/ears-format.md:15

## Design intent — required
Standardized requirements syntax specification implementing the Easy Approach to Requirements Syntax (EARS) for the `rjm` specification and planning layer. Addresses ambiguity, missing testability, and vague triggers in requirements authoring by establishing a canonical tripartite structure (`WHEN [precondition/trigger] THE SYSTEM SHALL [action/behavior] SO THAT [rationale/value]`) and six formal grammar patterns: Ubiquitous (`THE SYSTEM SHALL ... SO THAT ...`), Event-Driven (`WHEN ... THE SYSTEM SHALL ... SO THAT ...`), State-Driven (`WHILE ... THE SYSTEM SHALL ... SO THAT ...`), Optional Feature (`WHERE ... THE SYSTEM SHALL ... SO THAT ...`), Unwanted Behavior (`IF ... THEN THE SYSTEM SHALL ... SO THAT ...`), and Complex (`WHEN ... AND ... THE SYSTEM SHALL ... UNLESS ... SO THAT ...`). Defines a strict YAML frontmatter schema for atomic requirements (`type: requirement`, `id: REQ-NNN`, `status: draft|review|approved|implemented|rejected`), concrete DO/DO NOT authoring rules, 3-way traceability model (upstream, downstream, lateral), and a critic agent validation checklist.

## Phase — required
rjm:spec

## Inputs — required
- Business goals, epics, and user stories
- Technical constraints and architectural decisions (e.g. ADR-005, ADR-011, ADR-012)
- Original EARS requirements engineering methodology by Mavin et al.

## Outputs — required
- Structured EARS requirement statements adhering to the 6 grammar patterns
- Requirement artifacts with mandatory YAML frontmatter schema
- Traceability links connecting requirements to design documents and tasks
- Critic agent validation checklist

## Invokes — required
- agent ADR-005 — .agents/governance/ears-format.md:64
- agent ADR-011 — .agents/governance/ears-format.md:244
- agent ADR-012 — .agents/governance/ears-format.md:267
- doc AGENT-SYSTEM.md — .agents/governance/ears-format.md:332
- doc enhancement-PROJECT-PLAN.md — .agents/governance/ears-format.md:331

## Invoked by — required
- doc .agents/AGENT-SYSTEM.md — .agents/AGENT-SYSTEM.md:1142
- agent .agents/architecture/ADR-032-ears-requirements-syntax.md — .agents/architecture/ADR-032-ears-requirements-syntax.md:138
- doc .agents/governance/traceability-protocol.md — .agents/governance/traceability-protocol.md:358
- doc .agents/governance/spec-schemas.md — .agents/governance/spec-schemas.md:8

## Concepts named — required, verbatim
- `EARS` — .agents/governance/ears-format.md:15 — defined here
- `Easy Approach to Requirements Syntax` — .agents/governance/ears-format.md:15 — defined here
- `Basic Syntax` — .agents/governance/ears-format.md:31 — defined here
- `WHEN` — .agents/governance/ears-format.md:43 — defined here
- `THE SYSTEM SHALL` — .agents/governance/ears-format.md:44 — defined here
- `SO THAT` — .agents/governance/ears-format.md:45 — defined here
- `Ubiquitous Requirements` — .agents/governance/ears-format.md:49 — defined here
- `Event-Driven Requirements` — .agents/governance/ears-format.md:67 — defined here
- `State-Driven Requirements` — .agents/governance/ears-format.md:87 — defined here
- `Optional Feature Requirements` — .agents/governance/ears-format.md:107 — defined here
- `Unwanted Behavior Requirements` — .agents/governance/ears-format.md:127 — defined here
- `Complex Requirements` — .agents/governance/ears-format.md:147 — defined here
- `YAML Front Matter Schema` — .agents/governance/ears-format.md:171 — defined here
- `Traceability` — .agents/governance/ears-format.md:300 — defined here
- `critic agent` — .agents/governance/ears-format.md:320 — used here

## Structure
- # EARS Requirements Format
- ## Overview
- ## Why EARS?
- ## Basic Syntax
- ### Components
- ## EARS Patterns
- ### 1. Ubiquitous Requirements
- ### 2. Event-Driven Requirements
- ### 3. State-Driven Requirements
- ### 4. Optional Feature Requirements
- ### 5. Unwanted Behavior Requirements
- ### 6. Complex Requirements
- ## YAML Front Matter Schema
- ### Field Definitions
- ### Status Transitions
- ## Writing Guidelines
- ### DO
- ### DO NOT
- ## Examples
- ### Functional Requirement
- ### Non-Functional Requirement
- ### Constraint Requirement
- ## Traceability
- ## Validation
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/governance/ears-format.md:331 · Relative link to "../planning/enhancement-PROJECT-PLAN.md" fails because the file was archived to .agents/archive/planning/enhancement-PROJECT-PLAN.md.

## Observations
- Canonical specification of the EARS requirements grammar in rjm, formally adopted in ADR-032.
- Enforces an explicit rationalization clause (`SO THAT`) for every requirement pattern to preserve business value intent.
- Distinguishes three status transitions (draft → review → approved → implemented, or rejected as terminal state).

## Context cost
7339 bytes, 336 lines, ~1850 tokens.
