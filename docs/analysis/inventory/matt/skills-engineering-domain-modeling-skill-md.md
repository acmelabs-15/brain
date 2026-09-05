---
package: matt
path: skills/engineering/domain-modeling/SKILL.md
type: skill
bytes: 3331
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/domain-modeling/SKILL.md, sha256: 327a2b50620e2fd70abc6893cd6965e76b20f8d0adb0dc2c8d5eb3845efb643e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/domain-modeling/SKILL.md

## Purpose — required, verbatim
> "Build and sharpen a project's domain model. Use when discussing codebase terminology, writing or editing a CONTEXT.md, or recording or editing an ADR." — skills/engineering/domain-modeling/SKILL.md:3

## Design intent — required
Active conversational and architectural discipline for evolving a project's domain model during engineering sessions. Distinguishes passive vocabulary lookup from active model creation: proactively challenges term usage against existing glossaries, sharpens fuzzy or vague language, invents concrete edge-case scenarios to stress-test concept boundaries, cross-references claims against actual code behavior, updates `CONTEXT.md` inline immediately when terms crystallize, and offers ADRs sparingly under strict criteria.

## Phase — required
cross-phase

## Inputs — required
Conversation discussions, requirements, domain terminology, existing code, existing `CONTEXT.md` or `CONTEXT-MAP.md`, existing ADRs in `docs/adr/`.

## Outputs — required
Updated or newly created `CONTEXT.md`, `CONTEXT-MAP.md`, and ADRs in `docs/adr/`.

## Invokes — required
- doc CONTEXT-FORMAT.md — skills/engineering/domain-modeling/SKILL.md:62
- doc ADR-FORMAT.md — skills/engineering/domain-modeling/SKILL.md:74

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `domain-modeling` — skills/engineering/domain-modeling/SKILL.md:2 — defined here
- `domain model` — skills/engineering/domain-modeling/SKILL.md:8 — defined here
- `CONTEXT.md` — skills/engineering/domain-modeling/SKILL.md:8 — used here
- `CONTEXT-MAP.md` — skills/engineering/domain-modeling/SKILL.md:28 — used here
- `docs/adr/` — skills/engineering/domain-modeling/SKILL.md:40 — used here
- `ADR` — skills/engineering/domain-modeling/SKILL.md:40 — used here
- `Hard to reverse` — skills/engineering/domain-modeling/SKILL.md:70 — used here
- `Surprising without context` — skills/engineering/domain-modeling/SKILL.md:71 — used here
- `result of a real trade-off` — skills/engineering/domain-modeling/SKILL.md:72 — used here

## Structure
- # Domain Modeling — skills/engineering/domain-modeling/SKILL.md:6
- ## File structure — skills/engineering/domain-modeling/SKILL.md:10
- ## During the session — skills/engineering/domain-modeling/SKILL.md:42
- ### Challenge against the glossary — skills/engineering/domain-modeling/SKILL.md:44
- ### Sharpen fuzzy language — skills/engineering/domain-modeling/SKILL.md:48
- ### Discuss concrete scenarios — skills/engineering/domain-modeling/SKILL.md:52
- ### Cross-reference with code — skills/engineering/domain-modeling/SKILL.md:56
- ### Update CONTEXT.md inline — skills/engineering/domain-modeling/SKILL.md:60
- ### Offer ADRs sparingly — skills/engineering/domain-modeling/SKILL.md:66

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces strict scope separation: "`CONTEXT.md` should be totally devoid of implementation details. Do not treat `CONTEXT.md` as a spec, a scratch pad, or a repository for implementation decisions. It is a glossary and nothing else." (lines 64–65). Emphasizes lazy file creation (line 40).

## Context cost
3331 bytes, 75 lines, ~800 tokens. Loads CONTEXT-FORMAT.md (2290 bytes) and ADR-FORMAT.md (2733 bytes) on demand. Total cluster: 8354 bytes (~2000 tokens).
