---
package: matt
path: CLAUDE.md
type: doc
bytes: 3703
unit: inv-matt-3
deprecated: false
aliases:
  - AGENTS.md
memo_inputs:
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# CLAUDE.md

## Purpose — required, verbatim
> "Skills are organized into bucket folders under `skills/`:" — CLAUDE.md:1 (no explicit purpose statement)

## Design intent — required
Defines the repository instructions and authoring conventions for `mattpocock-skills` (also serving as the canonical source for `AGENTS.md` via symlink). Governs skill bucket organization, promotion gates to the Claude Code plugin manifest and root README, documentation mirroring rules to `docs/` and `aihero.dev`, dual-harness invocation contracts across Claude Code and Codex, router synchronization obligations in `ask-matt`, local harness symlink management, and repository-wide prose style standards forbidding em-dashes.

## Phase — required
cross-phase

## Inputs — required
- Skills added, renamed, or modified across `skills/` bucket directories
- Plugin manifests: `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`
- Public documentation files in `docs/engineering/` and `docs/productivity/`
- Local harness installation directories: `~/.claude/skills`, `~/.agents/skills`

## Outputs — required
- Repository maintenance rules, promotion gates, and documentation contracts
- Local skill harness symlinks maintained via `scripts/link-skills.sh`
- Plugin validation requirements via `claude plugin validate . --strict`

## Invokes — required
- config .claude-plugin/plugin.json — CLAUDE.md:9
- doc .agents/install-block.md — CLAUDE.md:11
- config .claude-plugin/marketplace.json — CLAUDE.md:11
- doc .agents/adr/0002-ship-as-a-claude-code-plugin.md — CLAUDE.md:11
- doc .agents/writing-docs.md — CLAUDE.md:17
- doc .agents/invocation.md — CLAUDE.md:19
- skill ./skills/engineering/ask-matt/SKILL.md — CLAUDE.md:21
- script scripts/link-skills.sh — CLAUDE.md:23

## Invoked by — required
- skill skills/engineering/setup-matt-pocock-skills/SKILL.md — skills/engineering/setup-matt-pocock-skills/SKILL.md:24
- skill skills/productivity/writing-for-agents/SKILL.md — skills/productivity/writing-for-agents/SKILL.md:3
- doc README.md — README.md:231
- doc docs/productivity/writing-for-agents.md — docs/productivity/writing-for-agents.md:11

## Concepts named — required, verbatim
- `skills/` — CLAUDE.md:1 — defined here
- `engineering/` — CLAUDE.md:3 — defined here
- `productivity/` — CLAUDE.md:4 — defined here
- `misc/` — CLAUDE.md:5 — defined here
- `in-progress/` — CLAUDE.md:6 — defined here
- `deprecated/` — CLAUDE.md:7 — defined here
- `promoted` — CLAUDE.md:9 — defined here
- `README.md` — CLAUDE.md:9 — used here
- `.claude-plugin/plugin.json` — CLAUDE.md:9 — used here
- `.agents/install-block.md` — CLAUDE.md:11 — used here
- `.claude-plugin/marketplace.json` — CLAUDE.md:11 — used here
- `claude plugin validate` — CLAUDE.md:11 — used here
- `.agents/adr/0002-ship-as-a-claude-code-plugin.md` — CLAUDE.md:11 — used here
- `SKILL.md` — CLAUDE.md:13 — used here
- `User-invoked` — CLAUDE.md:15 — defined here
- `Model-invoked` — CLAUDE.md:15 — defined here
- `.agents/writing-docs.md` — CLAUDE.md:17 — used here
- `What it does` — CLAUDE.md:17 — used here
- `When to reach for it` — CLAUDE.md:17 — used here
- `Common questions` — CLAUDE.md:17 — used here
- `It's working if` — CLAUDE.md:17 — used here
- `disable-model-invocation: true` — CLAUDE.md:19 — used here
- `policy.allow_implicit_invocation: false` — CLAUDE.md:19 — used here
- `agents/openai.yaml` — CLAUDE.md:19 — used here
- `.agents/invocation.md` — CLAUDE.md:19 — used here
- `ask-matt` — CLAUDE.md:21 — used here
- `scripts/link-skills.sh` — CLAUDE.md:23 — used here
- `em-dashes` — CLAUDE.md:25 — defined here

## Structure
Prose list and instructions organized across 8 operational domains:
1. Bucket folder organization (`skills/{engineering,productivity,misc,in-progress,deprecated}/`)
2. Promotion gates (`engineering/` and `productivity/` required in `README.md` and `.claude-plugin/plugin.json`)
3. Installation copy rules and manifest validation commands
4. Top-level and bucket-level README linking conventions
5. Documentation page mirroring to `docs/` and public URLs at `aihero.dev/skills-<skill-name>`
6. Dual-harness invocation contracts (`disable-model-invocation: true` and `policy.allow_implicit_invocation: false`)
7. Central router synchronization trigger (`ask-matt`)
8. Symlink maintenance script (`scripts/link-skills.sh`) and prose style constraint (no em-dashes)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Canonical source for `AGENTS.md`, which is a byte-exact symlink in `sources/matt/`. Under METHOD §2.4 and R11(a), `AGENTS.md` is claimed under `aliases:` in this card.
- Mandates a strict style rule against em-dashes across all repo prose (`SKILL.md`, docs, README, CHANGELOG, ADRs, changesets, code comments).
- Establishes that `ask-matt` is a router that must be updated whenever any user-reachable skill changes.

## Context cost
3703 bytes (~925 tokens). Unconditionally loaded into every Claude Code / Codex session in the repository.
