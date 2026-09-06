---
package: addy
path: docs/antigravity-setup.md
type: doc
bytes: 5041
unit: inv-addy-4
aliases: []
memo_inputs:
  - {path: docs/antigravity-setup.md, sha256: 2fc07de1373ccf06eaa1ea84943cd1b4492f0e1d21dc311eda9538ab0702002d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# docs/antigravity-setup.md

## Purpose — required, verbatim
> "The `agent-skills` package can be installed as a native plugin in the Antigravity CLI (`agy`), giving the agent access to structured workflows, personas, and custom slash commands." — docs/antigravity-setup.md:3

## Design intent — required
Documents installation, discovery, configuration, and operation of `agent-skills` within the Google Antigravity CLI (`agy`). Describes native plugin installation, slash command mappings, on-demand skill intent discovery, subagent persona registration, project enforcement rules via `AGENTS.md`, and execution flags (`--sandbox`, `--dangerously-skip-permissions`).

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill spec-driven-development — docs/antigravity-setup.md:52
- skill planning-and-task-breakdown — docs/antigravity-setup.md:53
- skill incremental-implementation — docs/antigravity-setup.md:54
- skill test-driven-development — docs/antigravity-setup.md:55
- skill code-review-and-quality — docs/antigravity-setup.md:56
- skill code-simplification — docs/antigravity-setup.md:57
- skill shipping-and-launch — docs/antigravity-setup.md:58
- agent web-performance-auditor — docs/antigravity-setup.md:59
- skill debugging-and-error-recovery — docs/antigravity-setup.md:92
- agent code-reviewer — docs/antigravity-setup.md:96
- agent security-auditor — docs/antigravity-setup.md:97
- agent test-engineer — docs/antigravity-setup.md:98

## Invoked by — required
- doc README.md — README.md:110

## Concepts named — required, verbatim
- `Antigravity CLI` — docs/antigravity-setup.md:1, 3 — defined here
- `agy` — docs/antigravity-setup.md:1, 3 — defined here
- `Core Web Vitals` — docs/antigravity-setup.md:59 — used here
- `On-Demand Skill Activation` — docs/antigravity-setup.md:86 — defined here
- `Specialized Agent Personas` — docs/antigravity-setup.md:94 — defined here
- `Sandbox Mode` — docs/antigravity-setup.md:109 — defined here
- `Artifact Review` — docs/antigravity-setup.md:124 — defined here

## Structure
- `# Using agent-skills with Antigravity CLI (agy)` — docs/antigravity-setup.md:1
- `## Setup` — docs/antigravity-setup.md:5
- `### Option 1: Native Plugin Installation (Recommended)` — docs/antigravity-setup.md:7
- `### Option 2: Import from Gemini CLI` — docs/antigravity-setup.md:32
- `## Slash Commands` — docs/antigravity-setup.md:46
- `## Skills & Discovery` — docs/antigravity-setup.md:67
- `## Verification & Validation` — docs/antigravity-setup.md:75
- `## How It Works` — docs/antigravity-setup.md:84
- `### 1. On-Demand Skill Activation` — docs/antigravity-setup.md:86
- `### 2. Specialized Agent Personas` — docs/antigravity-setup.md:94
- `## Configuration & Customization` — docs/antigravity-setup.md:104
- "### Project-Specific Enforcements (`AGENTS.md`)" — docs/antigravity-setup.md:106
- `### Sandbox Mode` — docs/antigravity-setup.md:109
- `## Usage Tips` — docs/antigravity-setup.md:118

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents naming nuance: `/planning` is used instead of `/plan` to prevent conflicts with Antigravity's internal planning commands (line 63). Explains installation into the global directory `~/.gemini/config/plugins/agent-skills/`.

## Context cost
5041 bytes, approximately 1260 tokens.
