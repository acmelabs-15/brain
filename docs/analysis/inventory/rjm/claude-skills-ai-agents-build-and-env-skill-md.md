---
package: rjm
path: .claude/skills/ai-agents-build-and-env/SKILL.md
type: skill
bytes: 13707
unit: inv-rjm-80
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-build-and-env/SKILL.md, sha256: 7f33da3504e95cb7d1c4013e86096750b5e5f0b6acd22fbaec4f1185a9caeb48}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-build-and-env/SKILL.md

## Purpose — required, verbatim
> "Runbook to recreate the ai-agents dev environment from scratch and survive its traps, including the uv-pinned Python 3.14.6, git hooks install, MCP layer setup, contributor commands, and PEP 668." — .claude/skills/ai-agents-build-and-env/SKILL.md:5-7

## Design intent — required
Serves as an authoritative runbook for bootstrapping a development environment from a fresh clone. Pinpoints critical environment traps: python interpreter pinning (`.python-version`), uv-managed dependency management and PEP 668 enforcement, Lefthook git shims, MCP server setup (Serena, Forgetful, DeepWiki), and the distinction between the development Python floor (3.14) and hook portability floor (3.10). Without this skill, contributors and agents would struggle with missing dependencies, failed git hooks, or broken virtual environments.

## Phase — required
cross-phase

## Inputs — required
Repository configuration files: `.python-version`, `pyproject.toml`, `uv.lock`, `lefthook.yml`, `.mcp.json`, `.env.example`, `.gitattributes`, and environment variables (`ANTHROPIC_API_KEY`, `PERPLEXITY_API_KEY`, `TAVILY_API_KEY`, etc.).

## Outputs — required
Fully functional local virtual environment (`.venv/`), installed Git hook shims (`lefthook install`), local untracked `.env` configuration.

## Invokes — required
- skill ai-agents-generation-and-release — .claude/skills/ai-agents-build-and-env/SKILL.md:39
- skill ai-agents-validation-and-qa — .claude/skills/ai-agents-build-and-env/SKILL.md:40
- skill ai-agents-config-catalog — .claude/skills/ai-agents-build-and-env/SKILL.md:41
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-build-and-env/SKILL.md:42
- skill ai-agents-failure-archaeology — .claude/skills/ai-agents-build-and-env/SKILL.md:140

## Invoked by — required
- skill ai-agents-generation-and-release — .claude/skills/ai-agents-generation-and-release/SKILL.md:3
- skill ai-agents-validation-and-qa — .claude/skills/ai-agents-validation-and-qa/SKILL.md:80

## Concepts named — required, verbatim
`ai-agents-build-and-env` — .claude/skills/ai-agents-build-and-env/SKILL.md:2 — defined here
`uv-pinned` — .claude/skills/ai-agents-build-and-env/SKILL.md:6 — used here
`git hooks` — .claude/skills/ai-agents-build-and-env/SKILL.md:6 — used here
`MCP layer` — .claude/skills/ai-agents-build-and-env/SKILL.md:6-7 — used here
`PEP 668` — .claude/skills/ai-agents-build-and-env/SKILL.md:7 — used here
`fresh clone` — .claude/skills/ai-agents-build-and-env/SKILL.md:18 — used here
`.python-version` — .claude/skills/ai-agents-build-and-env/SKILL.md:48 — used here
`astral.sh standalone installer` — .claude/skills/ai-agents-build-and-env/SKILL.md:53 — used here
`Node.js` — .claude/skills/ai-agents-build-and-env/SKILL.md:55 — used here
`PowerShell` — .claude/skills/ai-agents-build-and-env/SKILL.md:56 — used here
`gh CLI` — .claude/skills/ai-agents-build-and-env/SKILL.md:57 — used here
`bootstrap-vm.sh` — .claude/skills/ai-agents-build-and-env/SKILL.md:60 — used here
`uv sync --frozen --extra dev` — .claude/skills/ai-agents-build-and-env/SKILL.md:77 — used here
`lefthook install` — .claude/skills/ai-agents-build-and-env/SKILL.md:78 — used here
`check-install` — .claude/skills/ai-agents-build-and-env/SKILL.md:79 — used here
`lefthook.yml` — .claude/skills/ai-agents-build-and-env/SKILL.md:88 — used here
`Canonical memory` — .claude/skills/ai-agents-build-and-env/SKILL.md:119 — used here
`Graceful degradation` — .claude/skills/ai-agents-build-and-env/SKILL.md:120 — used here
`UV_SYSTEM_CERTS` — .claude/skills/ai-agents-build-and-env/SKILL.md:126 — used here
`LSP-first navigation` — .claude/skills/ai-agents-build-and-env/SKILL.md:131 — used here
`static steering` — .claude/skills/ai-agents-build-and-env/SKILL.md:132 — used here
`CONTRIBUTING.md build commands` — .claude/skills/ai-agents-build-and-env/SKILL.md:144 — defined here
`repair_worktree_venv.py` — .claude/skills/ai-agents-build-and-env/SKILL.md:147 — used here
`hook-portability floor` — .claude/skills/ai-agents-build-and-env/SKILL.md:148 — defined here
`LF line endings enforced` — .claude/skills/ai-agents-build-and-env/SKILL.md:149 — defined here
`15-minute smoke checklist` — .claude/skills/ai-agents-build-and-env/SKILL.md:155 — defined here
`Maintenance rule` — .claude/skills/ai-agents-build-and-env/SKILL.md:209 — defined here

## Structure
# ai-agents Build and Environment Runbook — .claude/skills/ai-agents-build-and-env/SKILL.md:15
## Triggers — .claude/skills/ai-agents-build-and-env/SKILL.md:24
## Scope — .claude/skills/ai-agents-build-and-env/SKILL.md:32
## Process — .claude/skills/ai-agents-build-and-env/SKILL.md:44
### Phase 1: Prerequisites — .claude/skills/ai-agents-build-and-env/SKILL.md:46
### Phase 2: Core Install — .claude/skills/ai-agents-build-and-env/SKILL.md:72
### Phase 3: Verify the Install — .claude/skills/ai-agents-build-and-env/SKILL.md:92
### Phase 4: MCP Layer — .claude/skills/ai-agents-build-and-env/SKILL.md:110
### Phase 5: Editor and LSP Reality — .claude/skills/ai-agents-build-and-env/SKILL.md:129
## Known Traps — .claude/skills/ai-agents-build-and-env/SKILL.md:137
## Verification — .claude/skills/ai-agents-build-and-env/SKILL.md:153
## Anti-Patterns — .claude/skills/ai-agents-build-and-env/SKILL.md:167
## Provenance and Maintenance — .claude/skills/ai-agents-build-and-env/SKILL.md:184

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .claude/skills/ai-agents-build-and-env/SKILL.md:48 · Documents Python pin as 3.14.6 as of 2026-07-03, but repository `.python-version` in the pinned commit has updated to 3.14.7.

## Observations
Contains practical operational runbook knowledge, including the critical trap where moving a worktree leaves uv shebangs stale in `.venv/bin/*`, and the hook-portability floor difference where CI checks syntax down to Python 3.10 even though the install floor is >=3.14.

## Context cost
13707 bytes, ~3500 tokens.
