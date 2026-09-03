# Explorer 2 Investigation Report: `skills/code-simplification/SKILL.md`

**Work Unit**: inv-addy-18  
**Agent**: Explorer 2 (`teamwork_preview_explorer`)  
**Target File**: `sources/addy/skills/code-simplification/SKILL.md` (13,545 bytes, 332 lines)  
**Output Draft**: `docs/analysis/inventory/addy/skills-code-simplification-skill-md.md`  

---

## 1. Executive Summary

`sources/addy/skills/code-simplification/SKILL.md` defines a model-agnostic, process-driven skill for reducing unnecessary code complexity while preserving exact program behavior. Adapted from the Anthropic Claude Code Simplifier plugin agent, it establishes five foundational principles (Preserve Behavior Exactly, Follow Project Conventions, Prefer Clarity Over Cleverness, Maintain Balance, Scope to What Changed) and a 4-step workflow governed by **Chesterton's Fence** (understand why code exists before modifying it) and **The Rule of 500** (automate changes touching >500 lines).

The skill is tightly integrated into the `addy` ecosystem: it is invoked via `/code-simplify` commands (`.claude/commands/code-simplify.md` and `commands/code-simplify.toml`), protected by block-level hooks (`hooks/simplify-ignore.sh`), validated by evaluation suites (`evals/cases/code-simplification.json`), and classified under the `addy:Review` lifecycle phase.

---

## 2. Comprehensive §4 Checklist Analysis

### 2.1 Existence
All referenced files and companion paths were checked with filesystem tools:
- `CLAUDE.md`: Referenced at `skills/code-simplification/SKILL.md:49, 328`. Exists at `sources/addy/CLAUDE.md` (4,094 bytes).
- External upstream reference: `https://github.com/anthropics/claude-plugins-official/blob/main/plugins/code-simplifier/agents/code-simplifier.md` referenced at `skills/code-simplification/SKILL.md:8`.
- Invoking commands: `sources/addy/commands/code-simplify.toml` (1,066 bytes) and `sources/addy/.claude/commands/code-simplify.md` (1,068 bytes) exist.
- Block protection hook: `sources/addy/hooks/SIMPLIFY-IGNORE.md` (3,863 bytes), `sources/addy/hooks/simplify-ignore.sh` (12,173 bytes), and test script `sources/addy/hooks/simplify-ignore-test.sh` (8,709 bytes) exist.
- Evaluation files: `sources/addy/evals/cases/code-simplification.json` (1,330 bytes), `sources/addy/evals/fixtures/code-simplification/config-parser.js` (1,592 bytes), and test `sources/addy/evals/fixtures/code-simplification/config-parser.test.js` (452 bytes) exist.
- External documentation: `sources/addy-external/code-simplification.md` (26,320 bytes) exists.
No missing paths or broken local links were detected within `SKILL.md`.

### 2.2 Execution
While `sources/addy/skills/code-simplification/` contains no scripts of its own (it consists solely of `SKILL.md`), its companion tooling was executed:
1. `hooks/simplify-ignore-test.sh`:
   - Command: `bash hooks/simplify-ignore-test.sh` (in `sources/addy`)
   - Exit code: `0`
   - Output: 21 test assertions passed (single-line blocks, multi-line blocks, multiple blocks, reasons, newline preservation, malformed JSON handling, etc.).
2. Documented crash recovery command (`hooks/SIMPLIFY-IGNORE.md:76`):
   - Command: `echo '{}' | bash hooks/simplify-ignore.sh` (in `sources/addy`)
   - Exit code: `0`
   - Output: cleanly terminated with empty output.
3. Eval fixture test (`evals/fixtures/code-simplification/config-parser.test.js`):
   - Command: `bun test evals/fixtures/code-simplification/config-parser.test.js` (in `sources/addy`)
   - Exit code: `0`
   - Output: 1 test passed in 17ms.

### 2.3 Documentation Drift
1. **Side-card command discrepancy in external documentation**: On `skills.addy.ie` (`sources/addy-external/code-simplification.md:5`), the side-card for the Review phase lists `Command: /review` instead of `/code-simplify`, even though the top badge on the same page correctly displays `/code-simplify`.
2. **Lifecycle sequencing drift**: `skills/using-agent-skills/SKILL.md:137` describes the sequential lifecycle pipeline as `... -> test-driven-development -> code-review-and-quality -> code-simplification -> shipping-and-launch` (placing review before simplification). However, both `/code-simplify` command specifications (`commands/code-simplify.toml:21` and `.claude/commands/code-simplify.md:22`) mandate running `code-review-and-quality` *after* simplification to catch any issues introduced by refactoring.

### 2.4 Internal Consistency
`SKILL.md` is internally consistent across all 332 lines. Key rules—such as strict behavioral preservation, never modifying tests to make them pass, prioritizing human comprehension over line count, and scoping edits strictly to what changed—are reiterated consistently in the Principles, Process, Rationalizations, Red Flags, and Verification checklist.

### 2.5 Cross-File Consistency
1. **Phase taxonomy divergence**: `CLAUDE.md:25`, `README.md:368`, `skills/using-agent-skills/SKILL.md:184`, and `sources/addy-external/code-simplification.md:5` unanimously assign `code-simplification` to the `Review` phase (`addy:Review`). However, the earlier inventory entries for its command wrappers (`docs/analysis/inventory/addy/commands-code-simplify-toml.md:18` and `claude-commands-code-simplify-md.md:18`) recorded `addy:Build`. The authoritative repository classification places the skill in `addy:Review`.
2. **Rule naming and formulation**: Chesterton's Fence and the Rule of 500 are referenced identically in `SKILL.md`, `README.md:269`, and `docs/adoption-guide.md:91`.

### 2.6 Composition
- **Inputs**: Target code scope (recent changes or user-designated files), existing test suite, project conventions (`CLAUDE.md` / `AGENTS.md`), and git history (`git blame`).
- **Outputs**: Simplified source code files preserving exact behavior, clean scoped git diffs, passing unmodified tests.
- **Invokes**: `CLAUDE.md` / project conventions (`skills/code-simplification/SKILL.md:49, 328`), references upstream Claude Code Simplifier agent (`skills/code-simplification/SKILL.md:8`).
- **Invoked by**: `commands/code-simplify.toml:4`, `.claude/commands/code-simplify.md:5`, `skills/using-agent-skills/SKILL.md:34, 137, 157, 184`, `references/definition-of-done.md:35`, `CLAUDE.md:25`, `README.md:35, 269, 368`, `docs/antigravity-setup.md:57`, `docs/cursor-setup.md:160`, `docs/getting-started.md:117`, `docs/adoption-guide.md:91`, `docs/opencode-setup.md:120`, `hooks/SIMPLIFY-IGNORE.md:3, 45`, `evals/cases/code-simplification.json:2, 34`.

### 2.7 Context Cost
- Target file size: 13,545 bytes (~3,386 tokens).
- Standalone load: 13,545 bytes (loads no internal references or templates).
- Invocation via slash command (`.claude/commands/code-simplify.md` or `commands/code-simplify.toml`): ~14,611 bytes (~3,653 tokens).
- Combined with post-simplification review (`skills/code-review-and-quality/SKILL.md`): ~35,166 bytes (~8,792 tokens).

### 2.8 Design Intent
Incidental complexity inevitably accumulates when code is authored or modified under time pressure: deep nesting, dense nested ternaries, vague variable names, premature or redundant abstractions, and duplicated logic. While tests may pass, such code poses high cognitive load for future maintainers and agent iterations. `code-simplification` provides a structured, fail-safe protocol to refactor working code for clarity and maintainability without altering external behavior. By grounding every change in Chesterton's Fence (requiring comprehension before modification), enforcing strict test invariance (reverting any edit that breaks unmodified tests), enforcing atomic incremental edits, scoping strictly to recent changes, and forbidding mixed refactoring/feature PRs, the skill eliminates the common failure mode where an agent "improves" code by rewriting it, breaking subtle edge cases, or creating unbounded diff churn.

---

## 3. Full Inventory Entry Draft

```markdown
---
package: addy
path: skills/code-simplification/SKILL.md
type: skill
bytes: 13545
unit: inv-addy-18
---

# skills/code-simplification/SKILL.md

## Purpose — required, verbatim
> "Simplifies code for clarity. Use when refactoring code for clarity without changing behavior. Use when code works but is harder to read, maintain, or extend than it should be. Use when reviewing code that has accumulated unnecessary complexity." — skills/code-simplification/SKILL.md:3

> "Simplify code by reducing complexity while preserving exact behavior. The goal is not fewer lines — it's code that is easier to read, understand, modify, and debug. Every simplification must pass a simple test: \"Would a new team member understand this faster than the original?\"" — skills/code-simplification/SKILL.md:12

## Design intent — required
Prevents the accumulation of incidental complexity and cognitive debt in functional code by providing a disciplined, behavior-preserving refactoring procedure. It eliminates the frequent failure modes of autonomous agent refactoring—such as rewriting code from scratch, introducing regression bugs in edge cases, altering tests to fit modified code, or producing massive unstructured diffs—by establishing Chesterton's Fence as a gate to comprehension, requiring that all existing tests pass unmodified, mandating incremental atomic changes with immediate test verification, enforcing project-local conventions over external stylistic dogma, and restricting simplification strictly to recently modified code.

## Phase — required
`addy:Review`

## Inputs — required
- Target source code: recently modified changes or user-designated files/modules — skills/code-simplification/SKILL.md:16-21, 101-103
- Existing test suite (serves as behavior preservation oracle) — skills/code-simplification/SKILL.md:41, 116, 164-167, 323
- Project conventions from `CLAUDE.md` / codebase patterns — skills/code-simplification/SKILL.md:49-57, 328
- Git history / `git blame` (for understanding original context and constraints) — skills/code-simplification/SKILL.md:118, 306

## Outputs — required
- Refactored source code with reduced structural complexity and preserved behavior — skills/code-simplification/SKILL.md:12, 34, 157-169
- Clean, focused git diffs separate from feature or bugfix changes — skills/code-simplification/SKILL.md:159, 181, 327
- Passing verification suite without test modifications — skills/code-simplification/SKILL.md:41, 164-167, 323-332

## Invokes — required
- doc `CLAUDE.md` / project conventions — skills/code-simplification/SKILL.md:49, 328
- reference upstream Claude Code Simplifier plugin (`https://github.com/anthropics/claude-plugins-official/blob/main/plugins/code-simplifier/agents/code-simplifier.md`) — skills/code-simplification/SKILL.md:8

## Invoked by — required
- command `commands/code-simplify.toml` — commands/code-simplify.toml:4
- command `.claude/commands/code-simplify.md` — .claude/commands/code-simplify.md:5
- skill `skills/using-agent-skills/SKILL.md` — skills/using-agent-skills/SKILL.md:34, 137, 157, 184
- reference `references/definition-of-done.md` — references/definition-of-done.md:35
- doc `CLAUDE.md` — CLAUDE.md:25
- doc `README.md` — README.md:35, 269, 368
- doc `docs/antigravity-setup.md` — docs/antigravity-setup.md:57
- doc `docs/cursor-setup.md` — docs/cursor-setup.md:160
- doc `docs/getting-started.md` — docs/getting-started.md:117
- doc `docs/adoption-guide.md` — docs/adoption-guide.md:91
- doc `docs/opencode-setup.md` — docs/opencode-setup.md:120
- hook `hooks/SIMPLIFY-IGNORE.md` — hooks/SIMPLIFY-IGNORE.md:3, 45
- eval `evals/cases/code-simplification.json` — evals/cases/code-simplification.json:2, 34

## Concepts named — required, verbatim
- `code-simplification` — skills/code-simplification/SKILL.md:2 — defined here
- `Claude Code Simplifier plugin` — skills/code-simplification/SKILL.md:8 — used here
- `Preserve Behavior Exactly` — skills/code-simplification/SKILL.md:32 — defined here
- `Follow Project Conventions` — skills/code-simplification/SKILL.md:44 — defined here
- `CLAUDE.md` — skills/code-simplification/SKILL.md:49 — used here
- `Prefer Clarity Over Cleverness` — skills/code-simplification/SKILL.md:61 — defined here
- `Maintain Balance` — skills/code-simplification/SKILL.md:92 — defined here
- `over-simplification` — skills/code-simplification/SKILL.md:94 — defined here
- `Scope to What Changed` — skills/code-simplification/SKILL.md:101 — defined here
- `The Simplification Process` — skills/code-simplification/SKILL.md:105 — defined here
- `Chesterton's Fence` — skills/code-simplification/SKILL.md:107 — defined here
- `git blame` — skills/code-simplification/SKILL.md:118 — used here
- `Structural complexity` — skills/code-simplification/SKILL.md:127 — defined here
- `Deep nesting` — skills/code-simplification/SKILL.md:131 — used here
- `guard clauses` — skills/code-simplification/SKILL.md:131 — used here
- `Long functions` — skills/code-simplification/SKILL.md:132 — used here
- `Nested ternaries` — skills/code-simplification/SKILL.md:133 — used here
- `Boolean parameter flags` — skills/code-simplification/SKILL.md:134 — used here
- `Repeated conditionals` — skills/code-simplification/SKILL.md:135 — used here
- `predicate function` — skills/code-simplification/SKILL.md:135 — used here
- `Naming and readability` — skills/code-simplification/SKILL.md:137 — defined here
- `Generic names` — skills/code-simplification/SKILL.md:141 — used here
- `Abbreviated names` — skills/code-simplification/SKILL.md:142 — used here
- `Misleading names` — skills/code-simplification/SKILL.md:143 — used here
- `Redundancy` — skills/code-simplification/SKILL.md:147 — defined here
- `Duplicated logic` — skills/code-simplification/SKILL.md:151 — used here
- `Dead code` — skills/code-simplification/SKILL.md:152 — used here
- `Unnecessary abstractions` — skills/code-simplification/SKILL.md:153 — used here
- `Over-engineered patterns` — skills/code-simplification/SKILL.md:154 — used here
- `Redundant type assertions` — skills/code-simplification/SKILL.md:155 — used here
- `Apply Changes Incrementally` — skills/code-simplification/SKILL.md:157 — defined here
- `The Rule of 500` — skills/code-simplification/SKILL.md:171 — defined here
- `codemods` — skills/code-simplification/SKILL.md:171 — used here
- `AST transforms` — skills/code-simplification/SKILL.md:171 — used here
- `early return` — skills/code-simplification/SKILL.md:249 — used here
- `Prop drilling` — skills/code-simplification/SKILL.md:292 — used here
- `Common Rationalizations` — skills/code-simplification/SKILL.md:297 — defined here
- `Red Flags` — skills/code-simplification/SKILL.md:309 — defined here
- `Verification` — skills/code-simplification/SKILL.md:319 — defined here

## Structure
- `---` (frontmatter: name, description) — skills/code-simplification/SKILL.md:1-4
- `# Code Simplification` — skills/code-simplification/SKILL.md:6
- `## Overview` — skills/code-simplification/SKILL.md:10
- `## When to Use` — skills/code-simplification/SKILL.md:14
- `## The Five Principles` — skills/code-simplification/SKILL.md:30
  - `### 1. Preserve Behavior Exactly` — skills/code-simplification/SKILL.md:32
  - `### 2. Follow Project Conventions` — skills/code-simplification/SKILL.md:44
  - `### 3. Prefer Clarity Over Cleverness` — skills/code-simplification/SKILL.md:61
  - `### 4. Maintain Balance` — skills/code-simplification/SKILL.md:92
  - `### 5. Scope to What Changed` — skills/code-simplification/SKILL.md:101
- `## The Simplification Process` — skills/code-simplification/SKILL.md:105
  - `### Step 1: Understand Before Touching (Chesterton's Fence)` — skills/code-simplification/SKILL.md:107
  - `### Step 2: Identify Simplification Opportunities` — skills/code-simplification/SKILL.md:123
  - `### Step 3: Apply Changes Incrementally` — skills/code-simplification/SKILL.md:157
  - `### Step 4: Verify the Result` — skills/code-simplification/SKILL.md:173
- `## Language-Specific Guidance` — skills/code-simplification/SKILL.md:187
  - `### TypeScript / JavaScript` — skills/code-simplification/SKILL.md:189
  - `### Python` — skills/code-simplification/SKILL.md:238
  - `### React / JSX` — skills/code-simplification/SKILL.md:273
- `## Common Rationalizations` — skills/code-simplification/SKILL.md:297
- `## Red Flags` — skills/code-simplification/SKILL.md:309
- `## Verification` — skills/code-simplification/SKILL.md:319

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `sources/addy-external/code-simplification.md:5` · External documentation page side-card for Review phase lists command `/review` instead of `/code-simplify`, conflicting with the page header badge and repository command definitions.
- `doc-drift` · `skills/using-agent-skills/SKILL.md:137` · Lifecycle sequencing lists `code-review-and-quality` prior to `code-simplification`, whereas `/code-simplify` command specifications (`commands/code-simplify.toml:21` and `.claude/commands/code-simplify.md:22`) mandate executing `code-review-and-quality` after simplification.
- `cross-file-contradiction` · `commands/code-simplify.toml:18` · Prior inventory entries for `/code-simplify` commands recorded phase as `addy:Build`, whereas `CLAUDE.md:25`, `README.md:368`, `skills/using-agent-skills/SKILL.md:184`, and `sources/addy-external/code-simplification.md:5` classify `code-simplification` under `addy:Review`.

## Observations
- Refactoring safety mechanism: Enforces strict behavioral invariance by treating any modification of tests as a red flag (`skills/code-simplification/SKILL.md:311`) and mandating immediate revert if tests fail (`skills/code-simplification/SKILL.md:166`).
- Separation of concerns in PRs: Explicitly instructs that refactoring changes must be submitted separately from features or bug fixes ("A PR that refactors and adds a feature is two PRs — split them", `skills/code-simplification/SKILL.md:159`).
- Threshold for automation: Establishes "The Rule of 500" (`skills/code-simplification/SKILL.md:171`) setting an upper bound of 500 lines for manual refactoring before mandating automated tooling (AST transforms, codemods).
- Companion hook protection: Supported by `hooks/simplify-ignore.sh` which allows developers to protect performance-critical blocks via comments (`/* simplify-ignore-start */`) during automated simplification passes.

## Context cost
13,545 bytes (~3,386 tokens). Loads no external files or reference documents directly when invoked. Transitive invocation via `/code-simplify` with a subsequent `code-review-and-quality` pass loads ~35,166 bytes (~8,792 tokens).
```
