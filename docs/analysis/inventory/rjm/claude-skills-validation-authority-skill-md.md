---
package: rjm
path: .claude/skills/validation-authority/SKILL.md
type: skill
bytes: 5434
unit: inv-rjm-179
in_scope_via: .claude/rules/ci-scripts.md
aliases: []
memo_inputs:
  - {path: .claude/skills/validation-authority/SKILL.md, sha256: 0b8799627fe980eeb0ca75f7e04440cdadc66e19a715e92c10cc31598282ae9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/validation-authority/SKILL.md

## Purpose — required, verbatim
> "When integrating external validators (PSScriptAnalyzer, markdownlint, ESLint, etc.), respect upstream defaults. Modify local configuration to match upstream behavior. Do not modify upstream tool code." — .claude/skills/validation-authority/SKILL.md:13

## Design intent — required
Prevents divergence from upstream tooling and minimizes ongoing maintenance burden by establishing that external linters and static analysis validators are authoritative. When validation failures occur, agents and engineers must adjust local repository configuration or document explicit suppression rationales rather than patching tool source code or disabling entire rule categories.

## Phase — required
rjm:cross-phase

## Inputs — required
- External validator failure messages or unexpected warnings (.claude/skills/validation-authority/SKILL.md:19)
- Upstream validator documentation and tool defaults (.claude/skills/validation-authority/SKILL.md:48)
- Local project configuration files: `.psscriptanalyzerrc.psd1`, `.markdownlint.yaml`, `.eslintrc`, `pyproject.toml` (.claude/skills/validation-authority/SKILL.md:56-58, 131)

## Outputs — required
- Updated local configuration files with documented override rationales (.claude/skills/validation-authority/SKILL.md:49-50)
- Upstream bug reports and pinned version workarounds (.claude/skills/validation-authority/SKILL.md:59)
- Validator process exit status line (`echo "exit=$?"`) confirming passing status (.claude/skills/validation-authority/SKILL.md:80)

## Invokes — required
- skill style-enforcement — .claude/skills/validation-authority/SKILL.md:137
- skill code-qualities-assessment — .claude/skills/validation-authority/SKILL.md:138
- skill doc-accuracy — .claude/skills/validation-authority/SKILL.md:139

## Invoked by — required
- doc .claude/rules/ci-scripts.md — .claude/rules/ci-scripts.md:152

## Concepts named — required, verbatim
- `Validation Authority` — .claude/skills/validation-authority/SKILL.md:11 — defined here
- `PSScriptAnalyzer` — .claude/skills/validation-authority/SKILL.md:13 — used here
- `markdownlint` — .claude/skills/validation-authority/SKILL.md:13 — used here
- `ESLint` — .claude/skills/validation-authority/SKILL.md:13 — used here
- `PSAvoidUsingWriteHost` — .claude/skills/validation-authority/SKILL.md:56 — used here
- `MD013` — .claude/skills/validation-authority/SKILL.md:57 — used here
- `no-console` — .claude/skills/validation-authority/SKILL.md:58 — used here
- `ruff` — .claude/skills/validation-authority/SKILL.md:122 — used here
- `style-enforcement` — .claude/skills/validation-authority/SKILL.md:137 — used here
- `code-qualities-assessment` — .claude/skills/validation-authority/SKILL.md:138 — used here
- `doc-accuracy` — .claude/skills/validation-authority/SKILL.md:139 — used here
- `Timelessness` — .claude/skills/validation-authority/SKILL.md:141 — defined here

## Structure
- # Validation Authority — .claude/skills/validation-authority/SKILL.md:11
- ## Triggers — .claude/skills/validation-authority/SKILL.md:15
- ## Decision Tree — .claude/skills/validation-authority/SKILL.md:25
- ## Process — .claude/skills/validation-authority/SKILL.md:44
- ## Trigger Table — .claude/skills/validation-authority/SKILL.md:52
- ## Anti-Patterns — .claude/skills/validation-authority/SKILL.md:62
- ## Verification — .claude/skills/validation-authority/SKILL.md:72
- ## Examples — .claude/skills/validation-authority/SKILL.md:82
- ### Example 1: PSScriptAnalyzer Rule Failure — .claude/skills/validation-authority/SKILL.md:84
- ### Example 2: markdownlint Conflict — .claude/skills/validation-authority/SKILL.md:104
- ### Example 3: New Tool Integration — .claude/skills/validation-authority/SKILL.md:120
- ## Related Skills — .claude/skills/validation-authority/SKILL.md:133
- ## Timelessness: 9/10 — .claude/skills/validation-authority/SKILL.md:141

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Frontmatter includes metadata tracking provenance (`source: Session 366 retrospective`, `id: Validation-Authority-001`). Step 5 of the verification checklist sets a strict evidence bar requiring verification by pasting the validator command's exit status line (`echo "exit=$?"`) rather than accepting unverified natural language claims of success.

## Context cost
5434 bytes (approx. 1350 tokens).
