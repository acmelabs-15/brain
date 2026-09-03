---
package: addy
path: docs/getting-started.md
type: doc
bytes: 7104
unit: inv-addy-6
---

# docs/getting-started.md

## Purpose — required, verbatim
> "agent-skills works with any AI coding agent that accepts Markdown instructions. This guide covers the universal approach. For tool-specific setup, see the dedicated guides." — docs/getting-started.md:3

## Design intent — required
Universal end-user onboarding guide that introduces developers to the core principles of using Markdown-based skills with AI coding agents. Establishes the operational definition of a skill as a deterministic workflow with verification gates rather than a reference doc, details multi-channel loading strategies (system prompt, rules file, in-conversation invocation), provides tiered rollout pathways (Minimal 3-skill setup vs. Full 4-phase lifecycle vs. Context-Aware loading), and indexes the repository's agents, slash commands, references, and living spec/plan artifacts. Without it, users would treat skills as static documentation, overload agent context windows by loading all skills simultaneously, or lack clear mappings between commands, agent personas, and supplementary checklists.

## Phase — required
`cross-phase` (universal user onboarding and skill lifecycle introduction)

## Inputs — required
- AI coding agent supporting Markdown instructions (Claude Code, Cursor, Antigravity, Gemini CLI, etc.) (docs/getting-started.md:3, 30-36)
- Repository clone or selected skill directories (docs/getting-started.md:15, 143)
- Project rules file (`CLAUDE.md`, `.cursorrules`, etc.) (docs/getting-started.md:34, 48)
- Tool-specific setup guides: `docs/adoption-guide.md`, `docs/skill-anatomy.md`, per-tool setup guides (docs/getting-started.md:3, 44, 90)

## Outputs — required
- User loading configurations:
  - Minimal 3-skill setup: `spec-driven-development`, `test-driven-development`, `code-review-and-quality` (docs/getting-started.md:46-54)
  - Full lifecycle sequence: Starting a project → During development → Before merge → Before deploy (docs/getting-started.md:56-65)
  - Task-specific context-aware configurations (docs/getting-started.md:67-74)
- Working living document artifacts: `SPEC.md`, `tasks/plan.md`, `tasks/todo.md` (docs/getting-started.md:151-158)
- Operational guidelines and best practices (docs/getting-started.md:159-166)

## Invokes — required
- skill using-agent-skills — docs/getting-started.md:40
- doc adoption-guide.md — docs/getting-started.md:44
- skill spec-driven-development — docs/getting-started.md:50, 61, 111, 161
- skill test-driven-development — docs/getting-started.md:36, 51, 62, 113, 114, 115, 133, 162
- skill code-review-and-quality — docs/getting-started.md:52, 63, 116
- skill planning-and-task-breakdown — docs/getting-started.md:61, 112, 114
- skill incremental-implementation — docs/getting-started.md:62, 113, 114
- skill security-and-hardening — docs/getting-started.md:63, 135
- skill shipping-and-launch — docs/getting-started.md:64, 118
- skill frontend-ui-engineering — docs/getting-started.md:71, 136
- skill debugging-and-error-recovery — docs/getting-started.md:72
- skill ci-cd-and-automation — docs/getting-started.md:73
- doc skill-anatomy.md — docs/getting-started.md:90
- agent agents/code-reviewer.md — docs/getting-started.md:98, 103
- agent agents/test-engineer.md — docs/getting-started.md:99
- agent agents/security-auditor.md — docs/getting-started.md:100
- agent agents/web-performance-auditor.md — docs/getting-started.md:101, 119
- command .claude/commands/spec.md — docs/getting-started.md:111, 153
- command .claude/commands/plan.md — docs/getting-started.md:112, 153
- command .claude/commands/build.md — docs/getting-started.md:113, 114
- command .claude/commands/test.md — docs/getting-started.md:115
- command .claude/commands/review.md — docs/getting-started.md:116
- command .claude/commands/code-simplify.md — docs/getting-started.md:117
- skill code-simplification — docs/getting-started.md:117
- command .claude/commands/ship.md — docs/getting-started.md:118
- command .claude/commands/webperf.md — docs/getting-started.md:119
- reference references/testing-patterns.md — docs/getting-started.md:133
- reference references/performance-checklist.md — docs/getting-started.md:134
- skill performance-optimization — docs/getting-started.md:134
- reference references/security-checklist.md — docs/getting-started.md:135
- reference references/accessibility-checklist.md — docs/getting-started.md:136
- reference references/definition-of-done.md — docs/getting-started.md:137
- reference references/observability-checklist.md — docs/getting-started.md:138
- skill observability-and-instrumentation — docs/getting-started.md:138
- reference references/orchestration-patterns.md — docs/getting-started.md:139
- skill doubt-driven-development — docs/getting-started.md:139

## Invoked by — required
- doc docs/adoption-guide.md — docs/adoption-guide.md:5, 30
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:3
- doc docs/cursor-setup.md — docs/cursor-setup.md:223
- doc README.md — README.md:206
- script scripts/validate-artifact-paths.js — scripts/validate-artifact-paths.js:50

## Concepts named — required, verbatim
- `When to use` — docs/getting-started.md:22, 82 — defined here | used here
- `Process` — docs/getting-started.md:23 — defined here
- `Core Process` — docs/getting-started.md:83 — defined here
- `Verification` — docs/getting-started.md:24, 87, 163 — defined here | used here
- `Common rationalizations` — docs/getting-started.md:25, 85 — defined here | used here
- `Red flags` — docs/getting-started.md:26, 86 — defined here | used here
- `System prompt` — docs/getting-started.md:32 — used here
- `Rules file` — docs/getting-started.md:34, 48 — used here
- `Meta-skill` — docs/getting-started.md:38 — used here
- `Minimal setup` — docs/getting-started.md:46 — defined here
- `Full Lifecycle` — docs/getting-started.md:56 — defined here
- `Context-Aware Loading` — docs/getting-started.md:67 — defined here
- `Skill Anatomy` — docs/getting-started.md:75, 90 — defined here
- `YAML frontmatter` — docs/getting-started.md:80 — used here
- `Overview` — docs/getting-started.md:81 — defined here
- `Examples` — docs/getting-started.md:84 — defined here
- `Five-axis code review` — docs/getting-started.md:98 — used here
- `Core Web Vitals` — docs/getting-started.md:101 — used here
- `/build auto` — docs/getting-started.md:114 — defined here | used here
- `Living documents` — docs/getting-started.md:153 — defined here | used here
- `SPEC.md` — docs/getting-started.md:153 — used here
- `tasks/plan.md` — docs/getting-started.md:153 — used here
- `tasks/todo.md` — docs/getting-started.md:153 — used here
- `Definition of Done` — docs/getting-started.md:137 — used here

## Structure
- `# Getting Started with agent-skills` — docs/getting-started.md:1
- `## How Skills Work` — docs/getting-started.md:5
- `## Quick Start (Any Agent)` — docs/getting-started.md:11
- `### 1. Clone the repository` — docs/getting-started.md:13
- `### 2. Choose a skill` — docs/getting-started.md:19
- `### 3. Load the skill into your agent` — docs/getting-started.md:28
- `### 4. Use the meta-skill for discovery` — docs/getting-started.md:38
- `## Recommended Setup` — docs/getting-started.md:42
- `### Minimal (Start here)` — docs/getting-started.md:46
- `### Full Lifecycle` — docs/getting-started.md:56
- `### Context-Aware Loading` — docs/getting-started.md:67
- `## Skill Anatomy` — docs/getting-started.md:75
- `## Using Agents` — docs/getting-started.md:92
- `## Using Commands` — docs/getting-started.md:105
- `## Using References` — docs/getting-started.md:127
- `## Spec and task artifacts` — docs/getting-started.md:151
- `## Tips` — docs/getting-started.md:159

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift`: `docs/getting-started.md:107-120` slash commands table lists 8 core commands (plus `/build auto` as a variant), but omits `/constraints` (`.claude/commands/constraints.md`), which is one of the 9 validated commands actively checked by `scripts/validate-commands.js`.
- `doc-drift`: `docs/getting-started.md:143-149` documents that standalone skill installs via `npx skills add` lose access to repo-level `references/` (tracked in issue #361), and suggests copying checklists directly into individual skill directories as a workaround, directly contradicting the repository's core architectural rule against duplicating reference material across skills articulated in `docs/developer-onboarding.md:24` ("Don't duplicate, reference").

## Observations
- Establishes a foundational distinction: "Skills are not reference docs. They're step-by-step processes the agent follows."
- Defines the 3-skill "Minimal" baseline (`spec-driven-development`, `test-driven-development`, `code-review-and-quality`) addressing the highest-risk failure modes of AI coding.
- Enforces the "living document" lifecycle pattern for `SPEC.md`, `tasks/plan.md`, and `tasks/todo.md`, explicitly recommending committing them to version control during active implementation.
- Explains the command directory split between Claude Code (`.claude/commands/`) and Antigravity (`commands/`), resolving potential user confusion regarding plugin command registration warnings.

## Context cost
- File size: 7,104 bytes (~1,775 tokens).
- Transitive context cost: 0 static prompt overhead (user onboarding documentation).
