---
package: rjm
path: .claude/skills/ai-agents-docs-of-record/SKILL.md
type: skill
bytes: 16688
unit: inv-rjm-83
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-docs-of-record/SKILL.md

## Purpose — required, verbatim
> "Runbook for this repo's documents of record. Session logs, ADRs, retrospectives, Serena memories, per-issue handoffs, plus the templates, validators, naming rules, and house prose style that bind them." — .claude/skills/ai-agents-docs-of-record/SKILL.md:5

## Design intent — required
Establishes the authoritative repository runbook and operational taxonomy for all documents of record across session logs, architectural decision records (ADRs), retrospectives, Serena memories, and issue handoffs. It resolves historical governance failures (such as ADR number collisions, lost retrospective lessons, unmaintained index catalogs, and PR merge conflicts on monolithic dashboards) by specifying exact file locations, generation tools, validation scripts, lifecycle frontmatter, and strict prose rules (including prohibition of dashes and unverified mirror claims). Without it, autonomous agents across separate sessions diverge on record locations, fail to preserve critical cold-start context, or revive discontinued document formats.

## Phase — required
cross-phase

## Inputs — required
- User trigger phrases: `write the session log`, `create an ADR`, `fill the retro`, `save this to memory`, `which document of record does this go in` (.claude/skills/ai-agents-docs-of-record/SKILL.md:18-22)
- Historical session logs in `.agents/sessions/*.json` and schema `.agents/schemas/session-log.schema.json` (.claude/skills/ai-agents-docs-of-record/SKILL.md:54-56)
- ADR template `.agents/architecture/ADR-TEMPLATE.md` (.claude/skills/ai-agents-docs-of-record/SKILL.md:98)
- Existing architectural decision records under `.agents/architecture/` (.claude/skills/ai-agents-docs-of-record/SKILL.md:97)
- Retrospective skeleton files marked `<!-- RETRO-STATE: skeleton-pending-fill -->` in `.agents/retrospective/` (.claude/skills/ai-agents-docs-of-record/SKILL.md:117)
- Handoff template `.agents/templates/HANDOFF.md` (.claude/skills/ai-agents-docs-of-record/SKILL.md:29)
- Serena memory write conventions and index files (`skills-*-index.md`) under `.serena/memories/` (.claude/skills/ai-agents-docs-of-record/SKILL.md:134-145)
- House style constraints and rules in `.claude/rules/voice.md`, `.claude/rules/universal.md`, and `.agents/governance/PROJECT-CONSTRAINTS.md` (.claude/skills/ai-agents-docs-of-record/SKILL.md:178-189)

## Outputs — required
- Per-issue handoffs: `.agents/sessions/handoffs/{YYYY-MM-DD}-{ISSUE}-handoff.md` (.claude/skills/ai-agents-docs-of-record/SKILL.md:29)
- Per-branch handoffs: `.agents/handoffs/{branch}/{session}.md` (.claude/skills/ai-agents-docs-of-record/SKILL.md:165)
- Architectural Decision Records: `.agents/architecture/ADR-NNN-slug.md` (.claude/skills/ai-agents-docs-of-record/SKILL.md:30)
- Retrospective documents: `.agents/retrospective/` (.claude/skills/ai-agents-docs-of-record/SKILL.md:31)
- Serena memory files: `.serena/memories/[domain]-[name].md` (.claude/skills/ai-agents-docs-of-record/SKILL.md:32)
- Multi-agent debate records from `adr-review` gate and validation checks from `check_adr_uniqueness.py` and `validate_session_json.py` (.claude/skills/ai-agents-docs-of-record/SKILL.md:28-30)

## Invokes — required
- script scripts/validate_session_json.py — .claude/skills/ai-agents-docs-of-record/SKILL.md:28
- template HANDOFF.md — .claude/skills/ai-agents-docs-of-record/SKILL.md:29
- skill adr-generator — .claude/skills/ai-agents-docs-of-record/SKILL.md:30
- script scripts/validation/check_adr_uniqueness.py — .claude/skills/ai-agents-docs-of-record/SKILL.md:30
- agent adr-review — .claude/skills/ai-agents-docs-of-record/SKILL.md:30
- skill retrospective — .claude/skills/ai-agents-docs-of-record/SKILL.md:31
- skill curating-memories — .claude/skills/ai-agents-docs-of-record/SKILL.md:32
- skill ai-agents-failure-archaeology — .claude/skills/ai-agents-docs-of-record/SKILL.md:42
- skill reflect — .claude/skills/ai-agents-docs-of-record/SKILL.md:44
- template ADR-TEMPLATE.md — .claude/skills/ai-agents-docs-of-record/SKILL.md:98
- skill memory-search — .claude/skills/ai-agents-docs-of-record/SKILL.md:148
- skill prose-self-check — .claude/skills/ai-agents-docs-of-record/SKILL.md:191
- script scripts/validation/check_canonical_citations.py — .claude/skills/ai-agents-docs-of-record/SKILL.md:205
- skill doc-accuracy — .claude/skills/ai-agents-docs-of-record/SKILL.md:214
- command retro — .claude/skills/ai-agents-docs-of-record/SKILL.md:255

## Invoked by — required
- skill ai-agents-research-methodology — .claude/skills/ai-agents-research-methodology/SKILL.md:225
- skill ai-agents-research-frontier — .claude/skills/ai-agents-research-frontier/SKILL.md:75

## Concepts named — required, verbatim
- `verification-based governance` — .claude/skills/ai-agents-docs-of-record/SKILL.md:11 — defined here | used here
- `per-issue handoffs` — .claude/skills/ai-agents-docs-of-record/SKILL.md:11-12 — defined here | used here
- `Serena memory` — .claude/skills/ai-agents-docs-of-record/SKILL.md:12 — defined here | used here
- `Session log` — .claude/skills/ai-agents-docs-of-record/SKILL.md:28 — defined here | used here
- `session-policy` — .claude/skills/ai-agents-docs-of-record/SKILL.md:28 — used here
- `resume-verification checklist` — .claude/skills/ai-agents-docs-of-record/SKILL.md:29 — defined here | used here
- `ADR` — .claude/skills/ai-agents-docs-of-record/SKILL.md:30 — defined here | used here
- `adr-review` — .claude/skills/ai-agents-docs-of-record/SKILL.md:30 — used here
- `Retrospective` — .claude/skills/ai-agents-docs-of-record/SKILL.md:31 — defined here | used here
- `failure canon` — .claude/skills/ai-agents-docs-of-record/SKILL.md:42 — defined here | used here
- `Fix on contact` — .claude/skills/ai-agents-docs-of-record/SKILL.md:45 — defined here | used here
- `Broken-windows rule` — .claude/skills/ai-agents-docs-of-record/SKILL.md:45 — defined here | used here
- `PreCompact` — .claude/skills/ai-agents-docs-of-record/SKILL.md:58 — used here
- `multi-agent debate` — .claude/skills/ai-agents-docs-of-record/SKILL.md:101 — defined here | used here
- `Five Whys` — .claude/skills/ai-agents-docs-of-record/SKILL.md:113 — used here
- `learning matrix` — .claude/skills/ai-agents-docs-of-record/SKILL.md:113 — used here
- `Post-PR Retrospective` — .claude/skills/ai-agents-docs-of-record/SKILL.md:115-116 — used here
- `Stop hook` — .claude/skills/ai-agents-docs-of-record/SKILL.md:116 — used here
- `Per-branch handoff` — .claude/skills/ai-agents-docs-of-record/SKILL.md:165 — defined here | used here
- `Verification on Resume` — .claude/skills/ai-agents-docs-of-record/SKILL.md:168 — defined here | used here
- `Mirror claims` — .claude/skills/ai-agents-docs-of-record/SKILL.md:200 — defined here | used here
- `FM-9` — .claude/skills/ai-agents-docs-of-record/SKILL.md:200 — used here
- `confident-incorrectness` — .claude/skills/ai-agents-docs-of-record/SKILL.md:207 — used here

## Structure
# ai-agents-docs-of-record
## Triggers
## The Record System Map
## Process
### Phase 1: Pick the right record
### Phase 2: Session logs (historical only)
### Phase 3: ADRs
### Phase 4: Retrospectives
### Phase 5: Serena memories
### Phase 6: Handoffs
### Phase 7: House style and stale docs
## Anti-Patterns
## Verification
## Provenance and Maintenance

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/ai-agents-docs-of-record/SKILL.md:128 references `.serena/memories/retrospective-accuracy.md` which is missing at that path (actual repository path is `.serena/memories/agent-behavior/retrospective-accuracy.md`).
- `doc-drift` · .claude/skills/ai-agents-docs-of-record/SKILL.md:120-121 reports that `INDEX.md` has only 5 rows against 95 retro files due to discontinuation of the auto-appending Stop hook, leaving catalog documentation drifted from disk reality.

## Observations
- Documents a strict separation between skill code changes and memory changes: `.claude/rules/claude-agents.md` MUST NOT item 2 forbids bundling skill code with memory edits in the same PR, citing the PR #908 incident where 53 memory files were inadvertently edited alongside a CI fix.
- Enforces house style rules prohibiting em-dashes and en-dashes anywhere in authored markdown text (`.claude/rules/universal.md` MUST NOT item 4) to avoid automated bot review threads.
- Context cost: 16688 bytes (~4172 tokens). Invoking file loads templates and schemas as needed for document creation.

## Context cost
16688 bytes (~4172 tokens) for SKILL.md. External templates and schemas loaded on demand during document generation add approximately 10-15KB (~3000 tokens).
