---
package: rjm
path: .agents/architecture/ADR-064-commands-to-skills-migration.md
type: agent
bytes: 17145
unit: inv-rjm-24
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-064-commands-to-skills-migration.md, sha256: aeea5baa429974dd9980d1e659f39aa10d472d794e644a158bac7eb8f1bd44fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-064-commands-to-skills-migration.md

## Purpose — required, verbatim
> "It records the decision to retire `.claude/commands/` as a canonical authoring surface and to make skills the single user-invocable surface." — .agents/architecture/ADR-064-commands-to-skills-migration.md:40-42

## Design intent — required
Architectural decision record resolving information leakage and cross-harness parity failure where `.claude/commands/*.md` workflows were recognized natively by Claude Code but ignored by GitHub Copilot CLI terminal runtime, leaving 11 namespaced commands stranded. Establishes `.claude/skills/<name>/SKILL.md` (with `user-invocable: true`) as the single canonical authoring surface for all user-invocable workflows across supported harnesses. Resolves flat-namespace constraints in Copilot CLI by prefixing sub-directory namespaces (`pr-quality-<name>` and `forgetful-<name>`), prohibiting new command files, and sequencing migration across generation tooling, drift tests, and evals.

## Phase — required
cross-phase

## Inputs — required
- Existing command files in `.claude/commands/` (22 files across top-level and subdirectories `forgetful/`, `pr-quality/`) — .agents/architecture/ADR-064-commands-to-skills-migration.md:51-60
- Bridge script `build/scripts/generate_commands.py` (REQ-003-001) — .agents/architecture/ADR-064-commands-to-skills-migration.md:61-66
- Platform bridge declaration in `templates/platforms/copilot-cli.yaml` (`artifacts.commands`) — .agents/architecture/ADR-064-commands-to-skills-migration.md:67-71
- Upstream issues `github/copilot-cli#618` and `github/copilot-cli#1113` — .agents/architecture/ADR-064-commands-to-skills-migration.md:29-30

## Outputs — required
- Architectural policy mandating migration of 22 `.claude/commands/*.md` files to `.claude/skills/<name>/SKILL.md` with `user-invocable: true` — .agents/architecture/ADR-064-commands-to-skills-migration.md:130-134
- Prohibition rule blocking addition of new `.claude/commands/*.md` files — .agents/architecture/ADR-064-commands-to-skills-migration.md:135-138
- Flat hyphenated naming convention (`pr-quality-<name>`, `forgetful-<name>`, and bare names for top-level lifecycle commands) — .agents/architecture/ADR-064-commands-to-skills-migration.md:145-160
- Frontmatter specification carrying forward `$ARGUMENTS`, `argument-hint`, `allowed-tools`, and `@CLAUDE.md` import — .agents/architecture/ADR-064-commands-to-skills-migration.md:167-174

## Invokes — required
- script generate_commands.py — .agents/architecture/ADR-064-commands-to-skills-migration.md:61
- config copilot-cli.yaml — .agents/architecture/ADR-064-commands-to-skills-migration.md:67
- reference ADR-030 — .agents/architecture/ADR-064-commands-to-skills-migration.md:83
- reference ADR-044 — .agents/architecture/ADR-064-commands-to-skills-migration.md:84
- reference ADR-094 — .agents/architecture/ADR-064-commands-to-skills-migration.md:86
- reference ADR-012 — .agents/architecture/ADR-064-commands-to-skills-migration.md:87
- doc DESIGN-REVIEW-vscode-copilot-parity-plan.md — .agents/architecture/ADR-064-commands-to-skills-migration.md:88
- skill spec — .agents/architecture/ADR-064-commands-to-skills-migration.md:171
- script generate_skills.py — .agents/architecture/ADR-064-commands-to-skills-migration.md:256
- file test_lifecycle_command_drift.py — .agents/architecture/ADR-064-commands-to-skills-migration.md:260
- file spec-scenarios.json — .agents/architecture/ADR-064-commands-to-skills-migration.md:261
- doc AGENTS.md — .agents/architecture/ADR-064-commands-to-skills-migration.md:278
- skill adr-review — .agents/architecture/ADR-064-commands-to-skills-migration.md:278
- reference ADR-040 — .agents/architecture/ADR-064-commands-to-skills-migration.md:286

## Invoked by — required
- doc readme — .agents/architecture/README.md:172

## Concepts named — required, verbatim
- `user-invocable` — .agents/architecture/ADR-064-commands-to-skills-migration.md:33 — defined here
- `information leakage` — .agents/architecture/ADR-064-commands-to-skills-migration.md:36 — used here
- `canonical authoring surface` — .agents/architecture/ADR-064-commands-to-skills-migration.md:41 — defined here
- `command-to-skill` — .agents/architecture/ADR-064-commands-to-skills-migration.md:69 — used here
- `skills-pattern-superiority` — .agents/architecture/ADR-064-commands-to-skills-migration.md:83 — used here
- `copilot-cli-frontmatter-compatibility` — .agents/architecture/ADR-064-commands-to-skills-migration.md:85 — used here
- `skill-catalog-mcp` — .agents/architecture/ADR-064-commands-to-skills-migration.md:87 — used here
- `prohibition guard` — .agents/architecture/ADR-064-commands-to-skills-migration.md:136 — defined here
- `information hiding by naming` — .agents/architecture/ADR-064-commands-to-skills-migration.md:215 — defined here
- `atomic-commit` — .agents/architecture/ADR-064-commands-to-skills-migration.md:277 — used here
- `file-cap` — .agents/architecture/ADR-064-commands-to-skills-migration.md:277 — used here
- `adr-review` — .agents/architecture/ADR-064-commands-to-skills-migration.md:278 — used here
- `skill-frontmatter-standardization` — .agents/architecture/ADR-064-commands-to-skills-migration.md:286 — used here

## Structure
- # ADR-064: Retire `.claude/commands/` as a Canonical Authoring Surface; Skills Are the Single User-Invocable Surface
- ## Status
- ## Date
- ## Context
- ### What Currently Exists
- ### Historical Rationale
- ### Why Change Now
- ## Decision
- ## Prior Art Investigation
- ### What Currently Exists
- ### Historical Rationale
- ### Why Change Now
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Impact on Dependent Components
- ## Implementation Notes
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `.agents/architecture/ADR-064-commands-to-skills-migration.md:88` · References `DESIGN-REVIEW-vscode-copilot-parity-plan.md` without path qualification; file exists at `.agents/architecture/DESIGN-REVIEW-vscode-copilot-parity-plan.md`.
- `doc-drift` · `.agents/architecture/ADR-064-commands-to-skills-migration.md:84` · Mentions `ADR-044` as governing frontmatter compatibility, which was superseded by ADR-094 (acknowledged in line 86, but ADR-044 retained in prose).

## Observations
Critical inflection point in rjm repository architecture where dual authoring surfaces (`.claude/commands/` vs `.claude/skills/`) were recognized as an abstraction leak failing GitHub Copilot CLI parity. Documents why `/review` was already implemented as a skill while `/spec`, `/plan`, `/build`, `/test`, `/ship` were initially commands. Formalizes the transition to skills with flat hyphenated namespaces (`pr-quality-*`, `forgetful-*`) to resolve Copilot CLI limitations while keeping commands bare.

## Context cost
17145 bytes (~4286 tokens). Architecture decision record with rationale tables and dependency impact matrix.
