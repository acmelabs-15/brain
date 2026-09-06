---
package: rjm
path: .claude/skills/work-operating-model/references/entry-contract.md
type: reference
bytes: 3983
unit: inv-rjm-179
in_scope_via: .claude/skills/work-operating-model/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/work-operating-model/references/entry-contract.md, sha256: 9bfe97c38efab32e56ef728c65d413db8603c60d9e0042d1e4cd6e29871fbab7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/work-operating-model/references/entry-contract.md

## Purpose — required, verbatim
> "The skill emits a single canonical JSON document. The optional markdown views (`USER.md`, `SOUL.md`, `HEARTBEAT.md`) are projections of this document; the JSON is the source of truth." — .claude/skills/work-operating-model/references/entry-contract.md:3

## Design intent — required
Specifies the canonical JSON data contract, key schemas, required fields, and enum vocabularies for team operating models produced by `work-operating-model`. It establishes the single source of truth for the five organizational layers (rhythms, decisions, dependencies, institutional knowledge, friction) plus team and interview metadata, allowing validation scripts and downstream consumer agents to reliably parse the elicited model.

## Phase — required
rjm:cross-phase

## Inputs — required
none

## Outputs — required
- Canonical JSON schema specification for `operating-model.json` (.claude/skills/work-operating-model/references/entry-contract.md:5-20)

## Invokes — required
- script scripts/validate_operating_model.py — .claude/skills/work-operating-model/references/entry-contract.md:145

## Invoked by — required
- skill work-operating-model — .claude/skills/work-operating-model/SKILL.md:57

## Concepts named — required, verbatim
- `USER.md` — .claude/skills/work-operating-model/references/entry-contract.md:3 — used here
- `SOUL.md` — .claude/skills/work-operating-model/references/entry-contract.md:3 — used here
- `HEARTBEAT.md` — .claude/skills/work-operating-model/references/entry-contract.md:3 — used here
- `schema_version` — .claude/skills/work-operating-model/references/entry-contract.md:9 — defined here
- `rhythms` — .claude/skills/work-operating-model/references/entry-contract.md:11 — defined here
- `decisions` — .claude/skills/work-operating-model/references/entry-contract.md:12 — defined here
- `dependencies` — .claude/skills/work-operating-model/references/entry-contract.md:13 — defined here
- `institutional_knowledge` — .claude/skills/work-operating-model/references/entry-contract.md:14 — defined here
- `friction` — .claude/skills/work-operating-model/references/entry-contract.md:15 — defined here
- `metadata` — .claude/skills/work-operating-model/references/entry-contract.md:16 — defined here

## Structure
- # Entry Contract: Output JSON Schema — .claude/skills/work-operating-model/references/entry-contract.md:1
- ## Top-Level Shape — .claude/skills/work-operating-model/references/entry-contract.md:5
- ## `schema_version` — .claude/skills/work-operating-model/references/entry-contract.md:22
- ## `team` — .claude/skills/work-operating-model/references/entry-contract.md:26
- ## `rhythms` — .claude/skills/work-operating-model/references/entry-contract.md:38
- ## `decisions` — .claude/skills/work-operating-model/references/entry-contract.md:62
- ## `dependencies` — .claude/skills/work-operating-model/references/entry-contract.md:81
- ## `institutional_knowledge` — .claude/skills/work-operating-model/references/entry-contract.md:99
- ## `friction` — .claude/skills/work-operating-model/references/entry-contract.md:115
- ## `metadata` — .claude/skills/work-operating-model/references/entry-contract.md:129
- ## Validation — .claude/skills/work-operating-model/references/entry-contract.md:143

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces a strict boundary between documented and tacit knowledge: line 113 mandates that only knowledge with documentation status of `none` or `partial` belongs in the operating model, as fully documented items belong in project documentation.

## Context cost
3983 bytes (approx. 1000 tokens).
