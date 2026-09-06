---
package: rjm
path: .claude/skills/slashcommandcreator/SKILL.md
type: skill
bytes: 10780
unit: inv-rjm-167
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/slashcommandcreator/SKILL.md

## Purpose — required, verbatim
> "Create production-ready custom slash commands following ai-agents quality standards." — .claude/skills/slashcommandcreator/SKILL.md:12

The frontmatter description states:
"Autonomous meta-skill for creating high-quality custom slash commands using 5-phase workflow with multi-agent validation and quality gates." — .claude/skills/slashcommandcreator/SKILL.md:3

## Design intent — required
Defines an autonomous meta-skill governing the end-to-end authoring lifecycle of Claude Code slash commands via a structured 5-phase pipeline (Discovery & Analysis, Design, Multi-Agent Validation, Implementation, and Quality Gates). It establishes explicit boundaries separating lightweight slash commands from heavyweight skills (enforcing a 200-line ceiling, prohibiting multi-agent orchestration or external script chains inside commands), requires four-agent unanimous consensus (Security, Architect, Independent-Thinker, Critic) to prevent duplicate or insecure commands, enforces progressive disclosure principles against repeating pre-trained engineering knowledge in command bodies, and mandates portable script invocation syntax using `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}` to guarantee cross-harness compatibility across Claude Code and Copilot CLI. Without this skill, slash commands would be created ad hoc without quality gates, resulting in duplicate commands, bloated prompt tokens, insecure wildcard tool permissions, and environment-dependent script path failures.

## Phase — required
none

## Inputs — required
- User trigger queries: `create slash command for {purpose}`, `SlashCommandCreator: {description}`, or `design slash command that {does something}` — .claude/skills/slashcommandcreator/SKILL.md:16-18
- Existing command catalog: Listing from `ls .claude/commands/**/*.md` — .claude/skills/slashcommandcreator/SKILL.md:36
- Architectural guidelines: Decision matrix in `CLAUDE.md` — .claude/skills/slashcommandcreator/SKILL.md:37
- Framework heuristics: 11 thinking models from `skillcreator` framework — .claude/skills/slashcommandcreator/SKILL.md:38
- Doctrine reference: `../context-optimizer/references/model-context-doctrine.md` — .claude/skills/slashcommandcreator/SKILL.md:223

## Outputs — required
- Analysis document: `.agents/analysis/slashcommand-[name]-analysis.md` — .claude/skills/slashcommandcreator/SKILL.md:39
- Design specification: Frontmatter definition and prompt body draft — .claude/skills/slashcommandcreator/SKILL.md:66
- Multi-agent review verdict: Validation report with approvals or revision requests — .claude/skills/slashcommandcreator/SKILL.md:116
- Generated slash command file: `.claude/commands/[namespace]/[command].md` — .claude/skills/slashcommandcreator/SKILL.md:125
- Version control artifact: Git commit with conventional commit message — .claude/skills/slashcommandcreator/SKILL.md:153

## Invokes — required
- agent security — .claude/skills/slashcommandcreator/SKILL.md:104
- agent architect — .claude/skills/slashcommandcreator/SKILL.md:107
- agent independent-thinker — .claude/skills/slashcommandcreator/SKILL.md:110
- agent critic — .claude/skills/slashcommandcreator/SKILL.md:113
- script new_slash_command.py — .claude/skills/slashcommandcreator/SKILL.md:124
- script validate_slash_command.py — .claude/skills/slashcommandcreator/SKILL.md:150
- script new_slash_command.py — .claude/skills/slashcommandcreator/SKILL.md:256
- script validate_slash_command.py — .claude/skills/slashcommandcreator/SKILL.md:265
- reference custom-slash-commands-research.md — .claude/skills/slashcommandcreator/SKILL.md:270
- reference slashcommandcreator-skill-spec.md — .claude/skills/slashcommandcreator/SKILL.md:271
- reference slashcommand-best-practices.md — .claude/skills/slashcommandcreator/SKILL.md:272
- reference model-context-doctrine.md — .claude/skills/slashcommandcreator/SKILL.md:223
- doc docs/SKILL-AUTHORING.md — .claude/skills/slashcommandcreator/SKILL.md:140
- doc CLAUDE.md — .claude/skills/slashcommandcreator/SKILL.md:37

## Invoked by — required
- doc .claude/skills/book-to-skill/SKILL.md — .claude/skills/book-to-skill/SKILL.md:34
- doc .claude/skills/book-to-skill/SKILL.md — .claude/skills/book-to-skill/SKILL.md:125
- doc .claude/skills/skillforge/SKILL.md — .claude/skills/skillforge/SKILL.md:3

## Concepts named — required, verbatim
- `slashcommandcreator` — .claude/skills/slashcommandcreator/SKILL.md:2 — defined here
- `slash command` — .claude/skills/slashcommandcreator/SKILL.md:3 — used here
- `multi-agent validation` — .claude/skills/slashcommandcreator/SKILL.md:3 — defined here | used here
- `quality gates` — .claude/skills/slashcommandcreator/SKILL.md:3 — used here
- `5-Phase Workflow` — .claude/skills/slashcommandcreator/SKILL.md:27 — defined here
- `Discovery & Analysis` — .claude/skills/slashcommandcreator/SKILL.md:29 — defined here
- `Design` — .claude/skills/slashcommandcreator/SKILL.md:43 — defined here
- `Multi-Agent Validation` — .claude/skills/slashcommandcreator/SKILL.md:68 — defined here
- `Implementation` — .claude/skills/slashcommandcreator/SKILL.md:118 — defined here
- `Quality Gates (Automatic)` — .claude/skills/slashcommandcreator/SKILL.md:144 — defined here
- `skillcreator` — .claude/skills/slashcommandcreator/SKILL.md:38 — used here
- `$ARGUMENTS` — .claude/skills/slashcommandcreator/SKILL.md:51 — used here
- `argument-hint` — .claude/skills/slashcommandcreator/SKILL.md:55 — used here
- `allowed-tools` — .claude/skills/slashcommandcreator/SKILL.md:56 — used here
- `disable-model-invocation` — .claude/skills/slashcommandcreator/SKILL.md:58 — used here
- `ultrathink` — .claude/skills/slashcommandcreator/SKILL.md:63 — used here
- `Unanimous Approval Required` — .claude/skills/slashcommandcreator/SKILL.md:94 — defined here
- `Decision Matrix: Slash Command vs Skill` — .claude/skills/slashcommandcreator/SKILL.md:167 — defined here
- `markdownlint-cli2` — .claude/skills/slashcommandcreator/SKILL.md:194 — used here
- `validate_slash_command.py` — .claude/skills/slashcommandcreator/SKILL.md:195 — used here
- `creator-001` — .claude/skills/slashcommandcreator/SKILL.md:54 — used here
- `Portable Script Invocations` — .claude/skills/slashcommandcreator/SKILL.md:140 — used here
- `progressive disclosure` — .claude/skills/slashcommandcreator/SKILL.md:221 — used here
- `model-context-doctrine` — .claude/skills/slashcommandcreator/SKILL.md:223 — used here

## Structure
- Frontmatter metadata block — .claude/skills/slashcommandcreator/SKILL.md:1
- Skill heading `# SlashCommandCreator Skill` — .claude/skills/slashcommandcreator/SKILL.md:8
- `## Purpose` — .claude/skills/slashcommandcreator/SKILL.md:10
- `## Triggers` — .claude/skills/slashcommandcreator/SKILL.md:14
- `## When to Use` — .claude/skills/slashcommandcreator/SKILL.md:20
- `## 5-Phase Workflow` — .claude/skills/slashcommandcreator/SKILL.md:27
- `### Phase 1: Discovery & Analysis` — .claude/skills/slashcommandcreator/SKILL.md:29
- `### Phase 2: Design` — .claude/skills/slashcommandcreator/SKILL.md:43
- `### Phase 3: Multi-Agent Validation` — .claude/skills/slashcommandcreator/SKILL.md:68
- `### Phase 4: Implementation` — .claude/skills/slashcommandcreator/SKILL.md:118
- `### Phase 5: Quality Gates (Automatic)` — .claude/skills/slashcommandcreator/SKILL.md:144
- `## Invocation Examples` — .claude/skills/slashcommandcreator/SKILL.md:157
- `## Decision Matrix: Slash Command vs Skill` — .claude/skills/slashcommandcreator/SKILL.md:167
- `## Verification/Success Criteria` — .claude/skills/slashcommandcreator/SKILL.md:183
- `## Anti-Patterns` — .claude/skills/slashcommandcreator/SKILL.md:208
- `## Quality Gates Checklist` — .claude/skills/slashcommandcreator/SKILL.md:236
- `## Scripts` — .claude/skills/slashcommandcreator/SKILL.md:248
- `### new_slash_command.py` — .claude/skills/slashcommandcreator/SKILL.md:250
- `### validate_slash_command.py` — .claude/skills/slashcommandcreator/SKILL.md:259
- `## References` — .claude/skills/slashcommandcreator/SKILL.md:268

## Scripts — required if type is script or the skill ships scripts
The skill ships two utility scripts in its `scripts/` directory:

### Script 1: `new_slash_command.py`
- path: `.claude/skills/slashcommandcreator/scripts/new_slash_command.py`
- language: Python (python3)
- lines: 146
- documented invocation:
  - `python3 "$SCRIPTS_DIR/new_slash_command.py" --name <name> --description <desc>` — .claude/skills/slashcommandcreator/SKILL.md:256
- executed: yes
- actual command run: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/slashcommandcreator/scripts/new_slash_command.py --name test-cmd` (in temporary working directory)
- abridged stdout:
  ```text
  [PASS] Created: .claude/commands/test-cmd.md

  Next steps:
    1. Edit frontmatter (description, argument-hint, allowed-tools)
    2. Write prompt body
    3. Run: python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/slashcommandcreator/scripts/validate_slash_command.py --path .claude/commands/test-cmd.md
    4. Test: /test-cmd [arguments]
  ```
- actual exit code: 0
- documented exit codes vs. actual exit paths:
  - Documented in script header: 0 (success) and 1 (error).
  - Actual exit paths: 0 on successful template generation, 1 on invalid characters/existing file/OSError, and 2 on argparse error.
- for validators/gates: not a validator or gate (template scaffolding generator). Can exit non-zero (1 on error, 2 on argparse error).
- does the output match what the documentation claims: yes for generation and guidance, but documented invocation in `SKILL.md:256` claims `--description <desc>` which fails with exit code 2 because the script does not accept `--description`.

### Script 2: `validate_slash_command.py`
- path: `.claude/skills/slashcommandcreator/scripts/validate_slash_command.py`
- language: Python (python3)
- lines: 237
- documented invocation:
  - `python3 "$SCRIPTS_DIR/validate_slash_command.py" <skill-dir>` — .claude/skills/slashcommandcreator/SKILL.md:265
  - `python3 "${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/slashcommandcreator/scripts/validate_slash_command.py" --path [file]` — .claude/skills/slashcommandcreator/SKILL.md:150
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/slashcommandcreator/scripts/validate_slash_command.py --path sources/rjm/.claude/commands/plan.md --skip-lint`
- abridged stdout:
  ```text
  [FAIL] Validation FAILED: sources/rjm/.claude/commands/plan.md

  Violations (0 blocking, 1 warnings):
    - WARNING: Description should start with action verb or 'Use when...'

  [PASS] Validation PASSED with warnings: sources/rjm/.claude/commands/plan.md
  ```
- actual exit code: 0
- documented exit codes vs. actual exit paths:
  - Documented in script header: 0 (all validations passed) and 1 (blocking violations). In `SKILL.md:203`: "Exit code 0 from validate_slash_command.py".
  - Actual exit paths: 0 on clean pass or pass with warnings, 1 on missing file or blocking violations, 2 on argparse error (e.g. missing `--path`), and 3 on markdownlint subprocess timeout.
- for validators/gates: can exit non-zero (1 on blocking errors, 2 on argparse error, 3 on timeout). Tested on source repo's default branch: exits 0 with warnings on `sources/rjm/.claude/commands/plan.md`, `spec.md`, `build.md`, `test.md`, `ship.md`; exits 0 cleanly on `context-hub-setup.md`, `pr-review.md`, `research.md`; exits 1 on `CLAUDE.md` (missing YAML frontmatter block).
- does the output match what the documentation claims: mostly yes, but invocation in `SKILL.md:265` uses positional `<skill-dir>` which fails with exit code 2, and console output prints `[FAIL] Validation FAILED:` when warnings exist even when exiting 0.

## Defects — required
- `missing-path`: In .claude/skills/slashcommandcreator/SKILL.md:272, reference target `.serena/memories/slashcommand-best-practices.md` does not exist on disk.
- `doc-drift`: In .claude/skills/slashcommandcreator/SKILL.md:256, documented invocation specifies `python3 "$SCRIPTS_DIR/new_slash_command.py" --name <name> --description <desc>`, but `new_slash_command.py` does not define `--description` and fails with exit code 2 (`error: unrecognized arguments: --description`).
- `doc-drift`: In .claude/skills/slashcommandcreator/SKILL.md:265, documented invocation is `python3 "$SCRIPTS_DIR/validate_slash_command.py" <skill-dir>`, but `validate_slash_command.py` requires `--path PATH` (a command `.md` file, not a directory) and exits with code 2 (`error: the following arguments are required: --path`).
- `internal-contradiction`: Invocation in .claude/skills/slashcommandcreator/SKILL.md:150 correctly specifies `--path [file]`, which contradicts line 265 (`<skill-dir>`).

## Observations
- Rigorously applies progressive disclosure doctrine to command authoring (lines 221-235), cautioning authors that repeating pre-trained knowledge in command bodies consumes tokens unnecessarily on every invocation.
- Mandates multi-agent unanimous consensus across four distinct agent viewpoints (Security, Architect, Independent-Thinker, Critic) in Phase 3 before command implementation can proceed (.claude/skills/slashcommandcreator/SKILL.md:68-98).
- Implements cross-harness portability standards using `${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}` to ensure generated commands function in both Claude Code and Copilot CLI plugins (.claude/skills/slashcommandcreator/SKILL.md:130-141).

## Context cost
10780 bytes, 275 lines. Directly references two scripts (`new_slash_command.py` at 3836 bytes and `validate_slash_command.py` at 7549 bytes). Total direct skill size: ~2700 tokens; total loaded script context: ~22165 bytes (~5500 tokens).
