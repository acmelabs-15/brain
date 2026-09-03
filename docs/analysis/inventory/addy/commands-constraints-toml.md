---
package: addy
path: commands/constraints.toml
type: command
bytes: 2775
unit: inv-addy-11
---

# commands/constraints.toml

## Purpose — required, verbatim
> "Define and enforce this project's quality bar — interview, sane defaults, CONSTRAINTS.md" — commands/constraints.toml:1

## Design intent — required
Establishes an automated, tiered quality engineering standard for a repository by detecting existing tooling, conducting a brief (at most 4-question) interview, generating a canonical `CONSTRAINTS.md` file, and wiring enforcement tools into cost-tiered commands (`check:fast`, `check:task`, `check:full`). It prevents agents from silently weakening quality standards or deleting tests by establishing explicit threshold baselines and providing sub-commands to inspect git diffs (`/constraints guard`), re-baseline metrics (`/constraints ratchet`), and evaluate the branch (`/constraints check`).

## Phase — required
`addy:Define`

## Inputs — required
- Repository configuration files: `package.json`, `pyproject.toml`, `go.mod`, test runner configurations, lint configs, coverage outputs, CI workflows — commands/constraints.toml:10
- User responses to interview questions (dimensions beyond floor, block vs warn, target numbers vs hold, slowest tolerable check) — commands/constraints.toml:12-16
- Sub-command argument via `$ARGUMENTS`: `check`, `guard`, or `ratchet` — commands/constraints.toml:6, 28-31
- Git branch diff (for `/constraints guard` and edit-loop scoped checks) — commands/constraints.toml:22, 30

## Outputs — required
- `CONSTRAINTS.md` at repo root — commands/constraints.toml:18
- Tiered npm scripts in `package.json`: `check:fast`, `check:task`, `check:full` — commands/constraints.toml:21
- Enforcement instruction lines appended to `AGENTS.md` and `CLAUDE.md` — commands/constraints.toml:24
- Diagnostic reports for `/constraints check`, `/constraints guard`, and `/constraints ratchet` — commands/constraints.toml:29-31

## Invokes — required
- skill constraint-driven-development — commands/constraints.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `constraint-driven-development` — commands/constraints.toml:4 — used here
- `$ARGUMENTS` — commands/constraints.toml:6 — used here
- `CONSTRAINTS.md` — commands/constraints.toml:1, 18, 20, 24 — defined here
- `Floor section` — commands/constraints.toml:18 — defined here
- `exceptions table` — commands/constraints.toml:18 — defined here
- `check:fast` — commands/constraints.toml:21 — defined here
- `check:task` — commands/constraints.toml:21 — defined here
- `check:full` — commands/constraints.toml:21 — defined here
- `edit loop` — commands/constraints.toml:22 — used here
- `AGENTS.md` — commands/constraints.toml:24 — used here
- `CLAUDE.md` — commands/constraints.toml:24 — used here
- `/constraints check` — commands/constraints.toml:29 — defined here
- `/constraints guard` — commands/constraints.toml:30 — defined here
- `/constraints ratchet` — commands/constraints.toml:31 — defined here

## Structure
- `description = "..."` — commands/constraints.toml:1
- `prompt = """` — commands/constraints.toml:3
  - Skill invocation statement — commands/constraints.toml:4
  - `$ARGUMENTS` placeholder — commands/constraints.toml:6
  - Default behavior: 7 numbered process steps — commands/constraints.toml:8-26
    - 1. **Detect first.** — commands/constraints.toml:10
    - 2. **Interview, at most four questions.** — commands/constraints.toml:12-17
    - 3. **Write CONSTRAINTS.md** — commands/constraints.toml:18
    - 4. **Install what each picked dimension needs.** — commands/constraints.toml:20-21
    - 5. **Place each check by cost.** — commands/constraints.toml:22
    - 6. **Point the agent at it.** — commands/constraints.toml:24
    - 7. **Verify.** — commands/constraints.toml:26
  - `Sub-commands:` listing 3 sub-commands (`check`, `guard`, `ratchet`) — commands/constraints.toml:28-31

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · docs/antigravity-setup.md:48-60 · `docs/antigravity-setup.md` states "The plugin registers 8 custom slash commands" and omits `/constraints` from its table, despite `commands/constraints.toml` being present.
- `cross-file-contradiction` · commands/constraints.toml:24 · Line 24 instructs "Add a line to AGENTS.md and CLAUDE.md telling agents to read CONSTRAINTS.md", leaking a Claude Code file reference (`CLAUDE.md`) into an Antigravity CLI command (which relies on `AGENTS.md`).

## Observations
- Recommends concrete de facto tooling for each quality dimension: Semgrep (code scanning), gitleaks with `--redact` (secrets), osv-scanner (dependencies), axe-core (accessibility), Lighthouse (web vitals), size-limit (bundles), dependency-cruiser (architectural boundaries), and Stryker (mutation/assertion quality).
- Explicit cost-tier placement: edit loop (seconds) for types/lint/secrets; task end (<90s) for related tests and changed-line coverage; CI/review for full scans.
- Pragmatic URL requirement: instructs agents to drop accessibility and performance checks if no live running URL exists, explicitly prohibiting fabricated checks.

## Context cost
2,775 bytes (~694 tokens). Transitive cost: loads `skills/constraint-driven-development/SKILL.md` (20,880 bytes) and `references/floor-guard.md` (5,851 bytes), totaling 29,506 bytes (~7,376 tokens).
