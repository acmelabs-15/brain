---
package: rjm
path: CONTRIBUTING.md
type: doc
bytes: 44216
unit: inv-rjm-187
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# CONTRIBUTING.md

## Purpose — required, verbatim
> "This guide explains how to contribute effectively, with special attention to the agent template system." — CONTRIBUTING.md:6

## Design intent — required
Primary contributor and developer onboarding guide for the repository. It documents development prerequisites (Python 3.14.x, uv), cross-platform Git line-ending configuration, the multi-platform agent template architecture and generation workflows, lifecycle hook development and test requirements (ADR-047, ADR-084, ADR-097), behavioral evaluation for prompts and agents (ADR-057), automated quality gates and CI drift detection, Copilot CLI version management and frontmatter validation, pull request guidelines (including advisory commit-count thresholds and PR description validation), Forgetful MCP integration, Claude Router configuration, third-party license attribution policies, and local Semgrep security scanning (ADR-054). Without this document, contributors and coding agents would lack authoritative instructions for regenerating cross-platform agent definitions, developing lifecycle hooks within architectural boundaries, and satisfying automated quality gates.

## Phase — required
cross-phase

## Inputs — required
- Prerequisites: Python 3.14.x (CONTRIBUTING.md:33) and UV package manager (CONTRIBUTING.md:34).
- Configurations: `.gitattributes` (CONTRIBUTING.md:79), `uv.lock` (CONTRIBUTING.md:41), `templates/platforms/vscode.yaml` (CONTRIBUTING.md:140), `templates/platforms/copilot-cli.yaml` (CONTRIBUTING.md:141), `lefthook.yml` (CONTRIBUTING.md:549), `.claude/settings.json` (CONTRIBUTING.md:567), `.github/actions/ai-review/action.yml` (CONTRIBUTING.md:766), `.mcp.json` (CONTRIBUTING.md:936).
- Templates: Shared agent templates in `templates/agents/*.shared.md` (CONTRIBUTING.md:134, 158).
- Architectural Decision Records: ADR-042 (CONTRIBUTING.md:33), ADR-083 (CONTRIBUTING.md:74), ADR-047 (CONTRIBUTING.md:306), ADR-084 (CONTRIBUTING.md:323), ADR-097 (CONTRIBUTING.md:325), ADR-057 (CONTRIBUTING.md:335), ADR-023 (CONTRIBUTING.md:350), ADR-080 (CONTRIBUTING.md:461), ADR-008 (CONTRIBUTING.md:589), ADR-034 (CONTRIBUTING.md:722), ADR-094 (CONTRIBUTING.md:768), ADR-054 (CONTRIBUTING.md:1121).
- Context and memory data: `.agents/sessions/` (CONTRIBUTING.md:701), `.serena/memories/` (CONTRIBUTING.md:696, 719), `.forgetful/exports/` (CONTRIBUTING.md:980).

## Outputs — required
- Generated platform-specific agent files: `src/vs-code-agents/*.agent.md` (CONTRIBUTING.md:145, 426, 467) and `src/copilot-cli/agents/*.agent.md` (CONTRIBUTING.md:148, 202, 440, 507).
- Claude Code lifecycle hooks: `.claude/hooks/<EventName>/invoke_<purpose>.py` (CONTRIBUTING.md:598, 682) and corresponding tests `tests/test_<purpose>.py` (CONTRIBUTING.md:690).
- Optional committed session logs: `.agents/sessions/YYYY-MM-DD-session-NN.json` (CONTRIBUTING.md:701).
- PR split analysis reports: `.agents/retrospective/PR-[number]-needs-split-analysis.md` (CONTRIBUTING.md:877).
- Attribution updates: `THIRD-PARTY-NOTICES.TXT` (CONTRIBUTING.md:1089, 1108).
- Dogfood plugin copies under `~/.copilot/installed-plugins/ai-agents/project-toolkit` or `$COPILOT_HOME` (CONTRIBUTING.md:60, 72).
- Pull requests formatted with conventional commit messages and approved contextual reference sections (CONTRIBUTING.md:837, 884).

## Invokes — required
- script scripts/bootstrap-vm.sh — CONTRIBUTING.md:41
- script scripts/dev/dogfood_copilot_plugin.py — CONTRIBUTING.md:61
- config vscode.yaml — CONTRIBUTING.md:422
- config copilot-cli.yaml — CONTRIBUTING.md:436
- script build/generate_agents.py — CONTRIBUTING.md:180
- template templates/agents/analyst.shared.md — CONTRIBUTING.md:255
- doc .agents/architecture/ADR-047-plugin-mode-hook-behavior.md — CONTRIBUTING.md:306
- doc .claude/lib/bootstrap.py — CONTRIBUTING.md:312
- doc .claude/rules/tool-use-hook-bar.md — CONTRIBUTING.md:319
- script .claude/hooks/SessionStart/invoke_context_loader.py — CONTRIBUTING.md:320
- script .claude/hooks/SessionEnd/invoke_memory_reflection.py — CONTRIBUTING.md:321
- script build/scripts/build_all.py — CONTRIBUTING.md:329
- script scripts/eval/eval-suite.py — CONTRIBUTING.md:359
- script scripts/eval/eval-prompt-change.py — CONTRIBUTING.md:363
- doc scripts/eval/README.md — CONTRIBUTING.md:416
- doc .agents/architecture/ADR-057-prompt-behavioral-evaluation.md — CONTRIBUTING.md:414
- doc .agents/architecture/ADR-023-quality-gate-prompt-testing.md — CONTRIBUTING.md:415
- doc templates/README.md — CONTRIBUTING.md:534
- config lefthook.yml — CONTRIBUTING.md:549
- script pre_pr.py — CONTRIBUTING.md:552
- config .claude/settings.json — CONTRIBUTING.md:567
- script invoke_context_loader.py — CONTRIBUTING.md:573
- script invoke_checkout_freshness_check.py — CONTRIBUTING.md:574
- script invoke_memory_recall.py — CONTRIBUTING.md:575
- script invoke_memory_reflection.py — CONTRIBUTING.md:576
- script invoke_compact_checkpoint.py — CONTRIBUTING.md:577
- script invoke_observation_sync.py — CONTRIBUTING.md:581
- doc .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md — CONTRIBUTING.md:589
- script scripts/validate_session_json.py — CONTRIBUTING.md:703
- doc .agents/architecture/ADR-034-investigation-session-qa-exemption.md — CONTRIBUTING.md:722
- config .github/actions/ai-review/action.yml — CONTRIBUTING.md:766
- script scripts/ci/install_copilot_cli.py — CONTRIBUTING.md:766
- script scripts/validation/check_copilot_version_pin.py — CONTRIBUTING.md:768
- doc .agents/architecture/ADR-094-govern-copilot-cli-compatibility.md — CONTRIBUTING.md:768
- doc .serena/memories/copilot/copilot-cli-frontmatter-regression-runbook.md — CONTRIBUTING.md:828
- script scripts/validation/pr_description.py — CONTRIBUTING.md:881
- script scripts/forgetful/import_forgetful_memories.py — CONTRIBUTING.md:982
- doc scripts/forgetful/README.md — CONTRIBUTING.md:987
- doc .claude-plugin/marketplace.json — CONTRIBUTING.md:1087
- doc THIRD-PARTY-NOTICES.TXT — CONTRIBUTING.md:1089
- doc docs/third-party-license-attribution.md — CONTRIBUTING.md:1104
- script scripts/generate_third_party_notices.py — CONTRIBUTING.md:1106
- doc .agents/architecture/ADR-054-local-security-scanning.md — CONTRIBUTING.md:1121
- script scripts/validation/git_hook_policy.py — CONTRIBUTING.md:1141

## Invoked by — required
- doc README.md — README.md:540

## Concepts named — required, verbatim
- `Agent Template System` — CONTRIBUTING.md:126 — defined here
- `Python 3.14.x` — CONTRIBUTING.md:33 — used here
- `UV` — CONTRIBUTING.md:34 — used here
- `Pre-Commit Hooks` — CONTRIBUTING.md:539 — used here
- `Pre-Push Hooks` — CONTRIBUTING.md:559 — used here
- `Dogfood` — CONTRIBUTING.md:49 — defined here
- `LF line endings` — CONTRIBUTING.md:79 — used here
- `core.autocrlf` — CONTRIBUTING.md:84 — used here
- `template-based generation system` — CONTRIBUTING.md:128 — defined here
- `Shared Templates` — CONTRIBUTING.md:158 — defined here
- `Platform Configs` — CONTRIBUTING.md:159 — defined here
- `Generated Files` — CONTRIBUTING.md:160 — defined here
- `analyst.shared.md` — CONTRIBUTING.md:255 — used here
- `reviewer.shared.md` — CONTRIBUTING.md:214 — used here
- `Required Frontmatter` — CONTRIBUTING.md:221 — defined here
- `Required Sections` — CONTRIBUTING.md:244 — defined here
- `tools_vscode` — CONTRIBUTING.md:227 — defined here
- `tools_copilot` — CONTRIBUTING.md:232 — defined here
- `argument-hint` — CONTRIBUTING.md:226 — used here
- `Memory Protocol` — CONTRIBUTING.md:251 — used here
- `Handoff Protocol` — CONTRIBUTING.md:253 — used here
- `ADR-047` — CONTRIBUTING.md:306 — used here
- `ADR-084` — CONTRIBUTING.md:323 — used here
- `ADR-097` — CONTRIBUTING.md:325 — used here
- `ADR-057` — CONTRIBUTING.md:335 — used here
- `ADR-023` — CONTRIBUTING.md:350 — used here
- `Behavioral Evaluation` — CONTRIBUTING.md:335 — defined here
- `Scenario Files` — CONTRIBUTING.md:375 — defined here
- `Acceptance Gate` — CONTRIBUTING.md:399 — defined here
- `Platform Configuration` — CONTRIBUTING.md:418 — defined here
- `vscode.yaml` — CONTRIBUTING.md:422 — used here
- `copilot-cli.yaml` — CONTRIBUTING.md:436 — used here
- `handoffSyntax` — CONTRIBUTING.md:433 — defined here
- `CI Drift Detection` — CONTRIBUTING.md:497 — defined here
- `Content drift` — CONTRIBUTING.md:509 — defined here
- `Frontmatter drift` — CONTRIBUTING.md:510 — defined here
- `Intentional divergence` — CONTRIBUTING.md:528 — defined here
- `[skip-drift-check]` — CONTRIBUTING.md:532 — defined here
- `Lefthook` — CONTRIBUTING.md:548 — used here
- `Lifecycle Hooks` — CONTRIBUTING.md:565 — defined here
- `SessionStart` — CONTRIBUTING.md:573 — used here
- `UserPromptSubmit` — CONTRIBUTING.md:575 — used here
- `SessionEnd` — CONTRIBUTING.md:576 — used here
- `PreCompact` — CONTRIBUTING.md:577 — used here
- `Stop` — CONTRIBUTING.md:596 — used here
- `Session Protocol` — CONTRIBUTING.md:694 — used here
- `Session Logs` — CONTRIBUTING.md:699 — defined here
- `QA Validation` — CONTRIBUTING.md:705 — defined here
- `SKIPPED: docs-only` — CONTRIBUTING.md:711 — defined here
- `SKIPPED: investigation-only` — CONTRIBUTING.md:712 — defined here
- `Investigation artifacts` — CONTRIBUTING.md:714 — defined here
- `ADR-034` — CONTRIBUTING.md:722 — used here
- `Automated Quality Gates` — CONTRIBUTING.md:726 — defined here
- `Shift Left` — CONTRIBUTING.md:726 — used here
- `Copilot CLI Version Management` — CONTRIBUTING.md:760 — defined here
- `COPILOT_VERSION` — CONTRIBUTING.md:766 — used here
- `ADR-094` — CONTRIBUTING.md:768 — used here
- `Validating Agent Frontmatter` — CONTRIBUTING.md:774 — defined here
- `gh act` — CONTRIBUTING.md:791 — used here
- `Pull Request Guidelines` — CONTRIBUTING.md:830 — defined here
- `conventional commit format` — CONTRIBUTING.md:837 — used here
- `Commit Count Thresholds` — CONTRIBUTING.md:839 — defined here
- `needs-split` — CONTRIBUTING.md:845 — defined here
- `PR Description Validation` — CONTRIBUTING.md:879 — defined here
- `Contextual Reference Sections` — CONTRIBUTING.md:883 — defined here
- `description-validation-bypass` — CONTRIBUTING.md:902 — defined here
- `Spec Reference Best Practices` — CONTRIBUTING.md:910 — defined here
- `Forgetful MCP Server` — CONTRIBUTING.md:928 — defined here
- `Claude Router Plugin` — CONTRIBUTING.md:989 — defined here
- `Third-Party License Attribution` — CONTRIBUTING.md:1085 — defined here
- `THIRD-PARTY-NOTICES.TXT` — CONTRIBUTING.md:1089 — used here
- `Security Scanning` — CONTRIBUTING.md:1116 — defined here
- `Semgrep` — CONTRIBUTING.md:1119 — used here
- `ADR-054` — CONTRIBUTING.md:1121 — used here

## Structure
- Contributing to AI Agent System
- Table of Contents
- Getting Started
- Prerequisites
- Setup Steps
- Dogfood the shipped Copilot base
- Git Configuration
- Windows
- Linux/macOS
- Why This Matters
- Agent Template System
- Architecture Overview
- Key Concepts
- How to Modify an Agent
- Step 1: Edit the Shared Template
- Step 2: Regenerate Platform Files
- Step 3: Verify the Changes
- Step 4: Commit Both Files
- How to Add a New Agent
- Step 1: Create the Shared Template
- Step 2: Define the Template Structure
- Step 3: Configure Platform-Specific Tools
- Step 4: Generate and Verify
- Step 5: Update Documentation
- Writing a New Hook
- Validating Prompt, Skill, and Agent Changes (ADR-057)
- What Requires Behavioral Evaluation
- When to Run Evals
- How to Run
- Writing Scenario Files
- Acceptance Gate
- Enforcement
- References
- Platform Configuration
- VS Code Configuration (`vscode.yaml`)
- Copilot CLI Configuration (`copilot-cli.yaml`)
- Key Differences Between Platforms
- Important: Do Not Edit Generated Files
- Useful Commands
- CI Drift Detection
- What counts as drift?
- When CI fails: how to fix
- Intentional divergence (bypass procedure)
- Pre-Commit Hooks
- Pre-Push Hooks
- Lifecycle Hooks (Claude Code)
- Adding a New Lifecycle Hook
- Session Protocol
- Session Logs
- QA Validation
- Running Tests
- Automated Quality Gates (Shift Left)
- Manual Testing (Optional)
- Agent Generation Tests
- Copilot CLI Version Management
- Current Pin
- Why Version Pinning
- Validating Agent Frontmatter
- Local Workflow Testing with gh act
- Upgrading the Required Review Pin
- Pull Request Guidelines
- Commit Count Thresholds
- What This Means
- Handling needs-split Labels
- PR Description Validation
- Contextual Reference Sections
- Bypassing Description Validation
- Spec Reference Best Practices
- Forgetful MCP Server
- Setup
- Forgetful Installation Prerequisites
- Verifying Connection
- Importing Shared Memories
- Claude Router Plugin
- What is Claude Router?
- How It Works
- Installation
- Configuration
- Usage
- Notes
- Third-Party License Attribution
- What Requires Attribution
- Adding a New Third-Party Component
- Full Policy
- Security Scanning
- Restoring the Pinned Scanner
- Security Scan Process
- Security Scan Findings
- Resolving Security Scan Findings
- Questions?

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · CONTRIBUTING.md:423-450 · Shows simplified/stale platform configs for `vscode.yaml` and `copilot-cli.yaml` (using top-level `platform:`, `outputDir: src/copilot-cli`, and top-level `frontmatter.model`) that drift from actual configurations in `templates/platforms/vscode.yaml` and `templates/platforms/copilot-cli.yaml` (`schemaVersion: "1.0"`, `provider:`, `artifacts:`, and nested `legacy:` blocks with model tier maps).
- internal-contradiction · CONTRIBUTING.md:148 · Architecture overview table lists generated Copilot CLI agent directory as `src/copilot-cli/`, contradicting lines 202 and 507 which specify `src/copilot-cli/agents/`.
- missing-path · CONTRIBUTING.md:343 · Lists `.agents/security/prompts/*.md` in the behavioral evaluation table, but `.agents/security/prompts/` does not exist in the repository.
- missing-path · CONTRIBUTING.md:365 · References non-existent scenario file `tests/evals/research-scenarios.json` in example evaluation command.
- missing-path · CONTRIBUTING.md:370 · References non-existent prompt `.agents/security/prompts/security-review.md` and non-existent scenario file `tests/evals/security-review-scenarios.json` in security evaluation command.
- missing-path · CONTRIBUTING.md:552 · References `pre_pr.py` without directory qualification; the script is located at `scripts/validation/pre_pr.py`.
- missing-path · CONTRIBUTING.md:214 · Cites `templates/agents/reviewer.shared.md` as an example to edit, but this file does not exist on disk (tutorial example only).

## Observations
- Canonical contributor guide that establishes the agent template generation architecture (`templates/agents/*.shared.md` as source of truth generating `src/vs-code-agents/` and `src/copilot-cli/`).
- Details prompt behavioral evaluation requirements (ADR-057) to guard against LLM regression during prompt or agent updates, complementing structural testing (ADR-023).
- Implements shift-left quality gates via Lefthook for pre-commit (ruff, markdownlint) and pre-push (pytest, Semgrep security scans, drift detection).
- Documents advisory commit count thresholds (10 commits = warning notice, 15 commits = alert notice with `needs-split` label) while explicitly removing hard blocking commit limits (issue #5233).
- Enforces strict PR description validation (`scripts/validation/pr_description.py`) with an allowlist of contextual reference sections (e.g. `## Test Plan`, `## References`) to prevent false-positive change claims.

## Context cost
44216 bytes (~11000 tokens). Comprehensive standalone developer guide; provides reference architecture and workflows across templates, hooks, quality gates, and platform configurations.
