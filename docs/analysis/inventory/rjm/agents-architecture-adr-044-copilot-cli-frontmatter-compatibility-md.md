---
package: rjm
path: .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md
type: agent
bytes: 16285
unit: inv-rjm-17
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md, sha256: fab4fd29cb1f15e766538ad34b57cf500baf6b46175233c0e265b28024a3e76a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md

## Purpose — required, verbatim
> "Superseded by ADR-094 (2026-08-15). ADR-094 replaces this record's version-pin and frontmatter policy with current executable sources." — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:16
(no explicit purpose statement)

## Design intent — required
Documents the architectural response to an upstream breaking regression in Copilot CLI 0.0.398+ that silently rejected custom agents declaring previously valid frontmatter fields (`argument-hint`, `model`, `handoffs`). The decision established a multi-layered defense strategy—pinning Copilot CLI to version 0.0.397 in CI, adding the `--no-auto-update` flag to bypass npm binary auto-updates, enforcing post-install version verification, and correcting model identifier formatting between VS Code and Copilot CLI—while preserving declarative agent metadata in templates. Without this record, the PR quality gate CI pipeline would remain broken across all parallel agent reviews, or agent definitions would have lost interactive prompt hints and model configuration.

## Phase — required
none

## Inputs — required
- Upstream Copilot CLI release: `Copilot CLI auto-updated from version 0.0.382 to 0.0.400` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:26
- Upstream bug report: `github/copilot-cli#1195` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:36
- CI workflow failures in `ai-pr-quality-gate.yml` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:26
- Debug log warnings from `copilot --log-level all` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:63
- Platform template configurations: `templates/platforms/vscode.yaml` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:50 and `templates/platforms/copilot-cli.yaml` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:78

## Outputs — required
- Version pin decision: `Pin Copilot CLI to 0.0.397` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:77
- CI action updates: `.github/actions/ai-review/action.yml` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:161
- Platform configuration: `templates/platforms/copilot-cli.yaml` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:165
- Build script updates: `build/Generate-Agents.Common.psm1` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:169
- Regenerated agent files: `src/copilot-cli/*.agent.md` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:177, `src/vs-code-agents/*.agent.md` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:178, and `.github/agents/*.agent.md` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:179

## Invokes — required
- config templates/platforms/copilot-cli.yaml — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:78
- config templates/platforms/vscode.yaml — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:50
- config .github/actions/ai-review/action.yml — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:161
- config .github/workflows/ai-pr-quality-gate.yml — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:266
- script build/generate_agents.py — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:151
- script build/Generate-Agents.Common.psm1 — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:169
- reference templates/agents/README.md — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:264
- reference build/README.md — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:265

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:205

## Concepts named — required, verbatim
- `ai-pr-quality-gate.yml` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:26 — used here
- `argument-hint` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:36 — used here
- `model` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:36 — used here
- `handoffs` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:36 — used here
- `custom agents` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:32 — used here
- `auto-update bypass` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:52 — defined here
- `version verification` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:80 — defined here
- `Generate-Agents.ps1` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:201 — used here
- `Generate-Agents.Common.psm1` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:169 — used here
- `generate_agents.py` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:151 — used here
- `ai-review` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:161 — used here
- `two-source agent template architecture` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:193 — used here
- `ADR-044` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:2 — defined here
- `ADR-094` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:7 — used here
- `ADR-036` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:193 — used here
- `ADR-040` — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:194 — used here

## Structure
- # ADR-044: Copilot CLI Frontmatter Compatibility
- ## Status
- ## Date
- ## Context
- ### Root Cause
- ### Origin of Removed Fields
- ### Auto-Update Bypass
- ### Reproduction
- ### Debug Log Evidence
- ## Decision
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ### Model Field Behavior (Validated)
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Reversibility Assessment
- ## Confirmation
- ## Implementation Notes
- ### Files Modified
- ### Monitoring Strategy
- ## Related Decisions
- ## Cross-Platform Frontmatter Reference
- ### GitHub Copilot Custom Agents (.github/agents/*.agent.md)
- ### Claude Code Subagents (.claude/agents/*.md)
- ### Platform Model Value Mapping
- ### Build System Field Handling
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · `.github/workflows/ai-pr-quality-gate.yml:26` — referenced workflow file does not exist in repository.
- `missing-path` · `build/Generate-Agents.Common.psm1:169` — referenced PowerShell build module does not exist (migrated to Python).
- `missing-path` · `templates/agents/README.md:264` — referenced template documentation file does not exist.
- `missing-path` · `build/README.md:265` — referenced build documentation file does not exist.
- `doc-drift` · `.agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:77` — decision pins Copilot CLI to 0.0.397, but the record was superseded in full by ADR-094.

## Observations
Illustrates how an upstream CLI regression in frontmatter schema validation can silently break multi-agent CI pipelines by falling back to built-in agents without stdout error logging. Demonstrates defense-in-depth against auto-updating npm binary delegates via CLI flags and post-install version verification. Shows multi-platform model identifier mapping between Claude Code, VS Code, and Copilot CLI.

## Context cost
16285 bytes (~4070 tokens). References build scripts, platform configs, and CI workflow files.
