---
package: rjm
path: .claude/skills/skillforge/scripts/init_skill.py
type: script
bytes: 10511
unit: inv-rjm-163
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/init_skill.py, sha256: 7f9eceac1dd1780fb8c052d8a694477ef10cc5754a07ef0b8a7a2131abee35c3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/scripts/init_skill.py

## Purpose — required, verbatim
> "init_skill.py - Scaffold a new agent skill (Claude Code/Codex)" — .claude/skills/skillforge/scripts/init_skill.py:3

The script's docstring further specifies:
"Creates a complete skill directory with SKILL.md template, references/, scripts/, and assets/ subdirectories pre-populated with starter files." — .claude/skills/skillforge/scripts/init_skill.py:5-6

## Design intent — required
Automates scaffolding of standard Claude Code and Codex skill directories with a complete starter structure. By creating `SKILL.md`, `references/`, `scripts/`, and `assets/` subdirectories with populated starter templates and README files, and validating skill names against kebab-case naming rules and length constraints, it prevents structural fragmentation and establishes consistent progressive disclosure from creation time. Without it, authors would manually create inconsistent layouts, omit essential subdirectories, or produce invalid frontmatter.

## Phase — required
rjm:Phase 3: Generation

## Inputs — required
- Positional CLI argument `name`: Skill name in kebab-case — .claude/skills/skillforge/scripts/init_skill.py:359-361
- Optional CLI argument `--path`: Parent directory for the new skill (default: current working directory) — .claude/skills/skillforge/scripts/init_skill.py:364-368

## Outputs — required
Creates a new directory `<parent-directory>/<skill-name>/` containing:
- `SKILL.md`: Pre-populated from template with frontmatter, triggers, process phases, anti-patterns, and verification — .claude/skills/skillforge/scripts/init_skill.py:278-280
- `references/README.md`: Guidelines for supporting domain documentation — .claude/skills/skillforge/scripts/init_skill.py:283-285
- `references/domain-knowledge.md`: Starter template for domain-specific reference material — .claude/skills/skillforge/scripts/init_skill.py:294-296
- `scripts/README.md`: Guidelines for automation scripts — .claude/skills/skillforge/scripts/init_skill.py:286-288
- `scripts/example.py`: Starter template for argparse CLI automation script — .claude/skills/skillforge/scripts/init_skill.py:297-299
- `assets/README.md`: Guidelines for static templates and non-code assets — .claude/skills/skillforge/scripts/init_skill.py:289-291
- Standard output instructions outlining directory layout, next steps, authoring tips, and organizational patterns — .claude/skills/skillforge/scripts/init_skill.py:306-339

## Invokes — required
none

## Invoked by — required
- doc .claude/skills/skillforge/SKILL.md — .claude/skills/skillforge/SKILL.md:280

## Concepts named — required, verbatim
- `Claude Code` — .claude/skills/skillforge/scripts/init_skill.py:3 — used here
- `Codex` — .claude/skills/skillforge/scripts/init_skill.py:3 — used here
- `Result dataclass pattern` — .claude/skills/skillforge/scripts/init_skill.py:120 — used here
- `Workflow-Based` — .claude/skills/skillforge/scripts/init_skill.py:214 — defined here
- `Task-Based` — .claude/skills/skillforge/scripts/init_skill.py:219 — defined here
- `Reference/Guidelines` — .claude/skills/skillforge/scripts/init_skill.py:224 — defined here
- `Capabilities-Based` — .claude/skills/skillforge/scripts/init_skill.py:229 — defined here
- `kebab-case` — .claude/skills/skillforge/scripts/init_skill.py:245 — defined here
- `Title Case` — .claude/skills/skillforge/scripts/init_skill.py:254 — defined here

## Structure
- Constants and embedded templates (`SKILL_MD_TEMPLATE`, `README_REFERENCES`, `README_SCRIPTS`, `README_ASSETS`, `EXAMPLE_REFERENCE`, `EXAMPLE_SCRIPT`) — .claude/skills/skillforge/scripts/init_skill.py:28
- Organizational pattern suggestions (`PATTERNS_GUIDE`) — .claude/skills/skillforge/scripts/init_skill.py:206
- Core logic (`validate_name`, `to_title`, `create_skill`, `print_next_steps`) — .claude/skills/skillforge/scripts/init_skill.py:236
- CLI entrypoint (`main`) — .claude/skills/skillforge/scripts/init_skill.py:342

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/skillforge/scripts/init_skill.py`
- language: Python (python3)
- lines: 393
- documented invocation:
  - `python init_skill.py code-reviewer` — .claude/skills/skillforge/scripts/init_skill.py:12
  - `python init_skill.py deploy-helper --path ~/my-skills` — .claude/skills/skillforge/scripts/init_skill.py:13
  - `python init_skill.py test-generator --path ~/.codex/skills` — .claude/skills/skillforge/scripts/init_skill.py:14
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/skillforge/scripts/init_skill.py code-reviewer --path /tmp/skill_test`
- abridged stdout:
  ```text
  Skill scaffolded: /private/tmp/skill_test/code-reviewer

  Directory structure:
    code-reviewer/
      SKILL.md              <- Main skill definition (edit this first)
      references/
        README.md
        domain-knowledge.md <- Example reference file
      scripts/
        README.md
        example.py          <- Example automation script
      assets/
        README.md
  ...
  ```
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented in docstring (.claude/skills/skillforge/scripts/init_skill.py:16-20):
    - "0  - Success" — .claude/skills/skillforge/scripts/init_skill.py:17
    - "1  - General failure" — .claude/skills/skillforge/scripts/init_skill.py:18
    - "2  - Invalid arguments" — .claude/skills/skillforge/scripts/init_skill.py:19
  - Actual exit paths in code:
    - `sys.exit(0)` — .claude/skills/skillforge/scripts/init_skill.py:388 (success after scaffolding)
    - `sys.exit(1)` — .claude/skills/skillforge/scripts/init_skill.py:265 (skill directory already exists)
    - `sys.exit(2)` — .claude/skills/skillforge/scripts/init_skill.py:376 (invalid skill name)
    - `sys.exit(2)` — .claude/skills/skillforge/scripts/init_skill.py:382 (parent directory not found)
    - argparse default exit 2 on invalid CLI arguments
- for validators/gates: not a validator or gate (scaffolding tool)
- does the output match what the documentation claims: yes, creates the requested directories and starter files, and prints the documented next steps and organization pattern guide

## Defects — required
- `doc-drift`: In .claude/skills/skillforge/scripts/init_skill.py:329, printed next steps instruct the user to run `python validate-skill.py {skill_dir}`, but `validate-skill.py` is located in SkillForge's scripts directory rather than the newly scaffolded skill directory or standard search path.

## Observations
- Embedded guidance in `PATTERNS_GUIDE` categorizes skills into four distinct architectural styles: Workflow-Based, Task-Based, Reference/Guidelines, and Capabilities-Based (.claude/skills/skillforge/scripts/init_skill.py:214-233).
- Implements strict kebab-case regex validation (`^[a-z][a-z0-9-]*$`), forbidding trailing hyphens, double hyphens, and lengths exceeding 64 characters (.claude/skills/skillforge/scripts/init_skill.py:244-249).
- Hard limit recommendation: "Keep SKILL.md under 500 lines (hard limit: 1000)" — .claude/skills/skillforge/scripts/init_skill.py:335.

## Context cost
10,511 bytes (approx. 2,600 tokens). Standalone script without external dependencies.
