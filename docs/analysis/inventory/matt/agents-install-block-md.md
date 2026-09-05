---
package: matt
path: .agents/install-block.md
type: agent
bytes: 2780
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .agents/install-block.md, sha256: 23f776c69d4b8688e18fd2a29d51ed4f2cb40132f0c3acb3a1ca6d45c1d18f65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/install-block.md

## Purpose — required, verbatim
> "One install story, one wording. `README.md`, `.changeset/*`, and every page under `docs/` must say **this** and nothing else. Change it here first, then propagate." — .agents/install-block.md:3

## Design intent — required
Defines the single source of truth for installation instructions across the repository, ensuring aligned and canonical wording between Claude Code plugin installation (`claude plugins install mattpocock-skills`) and skills.sh installation (`npx skills@latest add mattpocock/skills`). Emphasizes that the two distribution mechanisms are mutually exclusive, warns against double installation, and mandates that individual docs pages omit install blocks in favor of the dynamic ai-hero web widget.

## Phase — required
cross-phase

## Inputs — required
Anthropic official marketplace listing details (`claude-plugins-official`), `skills.sh` CLI syntax (`skills@latest`), and multi-agent deployment patterns.

## Outputs — required
Standardized `<canonical-block>` markdown snippets for Claude Code plugin CLI and session commands, skills.sh whole-set command, and single-skill update commands.

## Invokes — required
- doc writing-docs.md — .agents/install-block.md:39

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:11
- agent .agents/adr/0002-ship-as-a-claude-code-plugin.md — .agents/adr/0002-ship-as-a-claude-code-plugin.md:32
- agent .agents/writing-docs.md — .agents/writing-docs.md:19

## Concepts named — required, verbatim
- `canonical install block` — .agents/install-block.md:1 — defined here
- `claude-plugins-official` — .agents/install-block.md:5 — used here
- `auto-update` — .agents/install-block.md:5 — used here
- `canonical-block` — .agents/install-block.md:9 — defined here
- `skills.sh` — .agents/install-block.md:27 — used here
- `single-plugin marketplace` — .agents/install-block.md:61 — used here

## Structure
- The canonical install block — .agents/install-block.md:1
- Claude Code: the plugin — .agents/install-block.md:7
- Codex, and other agents: skills.sh — .agents/install-block.md:25
- The two routes are exclusive — .agents/install-block.md:55
- Not the install story — .agents/install-block.md:59

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Mandates that `docs/` pages omit install commands because the web frontend (ai-hero) renders the install widget dynamically. Also warns that installing both the plugin and skills.sh duplicates skills in the project.

## Context cost
2780 bytes, ~650 tokens. Loads `.agents/writing-docs.md` (12688 bytes).
