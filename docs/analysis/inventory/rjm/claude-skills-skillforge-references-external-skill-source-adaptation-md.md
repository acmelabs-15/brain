---
package: rjm
path: .claude/skills/skillforge/references/external-skill-source-adaptation.md
type: reference
bytes: 3744
unit: inv-rjm-159
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/external-skill-source-adaptation.md, sha256: d1bfe692aa70bcf7515f3849cc45814365dbd7e23605c0b1058dbb125f43ec79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/external-skill-source-adaptation.md

## Purpose — required, verbatim
> "How to route ideas from an external or third-party skill catalog into a local catalog without duplicating capability, shipping product-specific operations, or acting on unverified content. This is a decision discipline layered on Phase 0 triage, not a new review framework." — .claude/skills/skillforge/references/external-skill-source-adaptation.md:3-6

## Design intent — required
Provides a structured three-gate decision discipline layered on top of Phase 0 triage for importing external or third-party skill catalogs (such as vendor skill packs or other teams' skill repositories) into a local catalog. It prevents capability duplication, stops the import of untrusted operational instructions, and filters out proprietary or product-specific tool coupling, ensuring that only verified, product-agnostic capability gaps result in new skills.

## Phase — required
rjm:Phase 0: Skill Triage

## Inputs — required
- Foreign skill catalog or prompts (external `skills/` directory, vendor skill pack, third-party prompts)
- Pinned commit SHA and enumerated file list with content hashes
- Local skill ecosystem index (skills, agents, commands)

## Outputs — required
- Cited decision rows per source skill (verdicts: `keep`, `augment`, `compose`, `create`, or `reject` with pinned source citation and one-line rationale) recorded in an analysis artifact

## Invokes — required
none

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:148
- skill skillforge — .claude/skills/skillforge/SKILL.md:299

## Concepts named — required, verbatim
- `External Skill Source Adaptation` — .claude/skills/skillforge/references/external-skill-source-adaptation.md:1 — defined here
- `Phase 0 triage` — .claude/skills/skillforge/references/external-skill-source-adaptation.md:5-6 — used here
- `Gate 1: Source identity first` — .claude/skills/skillforge/references/external-skill-source-adaptation.md:19 — defined here
- `Gate 2: Reuse over duplication` — .claude/skills/skillforge/references/external-skill-source-adaptation.md:31 — defined here
- `Gate 3: Reject product coupling` — .claude/skills/skillforge/references/external-skill-source-adaptation.md:42 — defined here

## Structure
- `# External Skill Source Adaptation` — .claude/skills/skillforge/references/external-skill-source-adaptation.md:1
- `## When this applies` — .claude/skills/skillforge/references/external-skill-source-adaptation.md:8
- `## The three gates` — .claude/skills/skillforge/references/external-skill-source-adaptation.md:15
- `### Gate 1: Source identity first` — .claude/skills/skillforge/references/external-skill-source-adaptation.md:19
- `### Gate 2: Reuse over duplication` — .claude/skills/skillforge/references/external-skill-source-adaptation.md:31
- `### Gate 3: Reject product coupling` — .claude/skills/skillforge/references/external-skill-source-adaptation.md:42
- `## Recording the decision` — .claude/skills/skillforge/references/external-skill-source-adaptation.md:53
- `## Worked example (inspiration)` — .claude/skills/skillforge/references/external-skill-source-adaptation.md:60

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- The worked example (.claude/skills/skillforge/references/external-skill-source-adaptation.md:60-72) documents the empirical review of the `microsoft/aspire` repository (23 skills at commit `d1c7add665f7e6582cdaa1b328c44172f0f96339`), which resulted in 0 new skills created, validating the guardrail's design.

## Context cost
3,744 bytes (~936 tokens).
