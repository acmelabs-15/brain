# Analysis & Draft Inventory Entries: Unit inv-addy-13 (Part 2)

This document contains complete, draft inventory entries for the two assigned files in unit `inv-addy-13` following the `docs/plan/templates/inventory-entry.md` schema:
1. `sources/addy/skills/test-driven-development/SKILL.md` (16,483 bytes)
2. `sources/addy/skills/planning-and-task-breakdown/SKILL.md` (10,564 bytes)

---

# Draft Inventory Entry 1: `skills/test-driven-development/SKILL.md`

```markdown
---
package: addy
path: skills/test-driven-development/SKILL.md
type: skill
bytes: 16483
unit: inv-addy-13
deprecated: false
---

# skills/test-driven-development/SKILL.md

## Purpose — required, verbatim
> "Write a failing test before writing the code that makes it pass. For bug fixes, reproduce the bug with a test before attempting a fix. Tests are proof — "seems right" is not done. A codebase with good tests is an AI agent's superpower; a codebase without tests is a liability." — skills/test-driven-development/SKILL.md:10

## Design intent — required
Establishes an empirical, test-first engineering discipline (RED-GREEN-REFACTOR) and the Prove-It pattern for bug reproduction to prevent AI agents from hallucinating correctness, claiming unverified completion, or introducing regressions. It structures test suites via the Test Pyramid (80% unit, 15% integration, 5% E2E) and resource sizing (Small/Medium/Large), enforces DAMP over DRY and state assertions over interaction testing, restrains over-mocking, integrates runtime browser verification via Chrome DevTools MCP, and prescribes subagent isolation for writing unbiased reproduction tests.

## Phase — required
`addy:Build`

## Inputs — required
- Codebase and test suite structure (build files, checked-in wrappers, test frameworks, naming conventions) — skills/test-driven-development/SKILL.md:26-32
- Bug reports or new feature specifications / behavioral requirements — skills/test-driven-development/SKILL.md:14-18, 98, 101
- Discovered repository commands (focused-test command for iteration, full-suite command for gating) — skills/test-driven-development/SKILL.md:34, 392
- Optional runtime browser state (DOM structure, console errors, network payloads, computed styles, performance traces) via Chrome DevTools MCP — skills/test-driven-development/SKILL.md:314-336

## Outputs — required
- Failing reproduction tests (RED / Prove-It step) — skills/test-driven-development/SKILL.md:49-65, 104-107, 125-131
- Minimal passing implementation code (GREEN step) — skills/test-driven-development/SKILL.md:67-83, 110-113, 134-139
- Refactored implementation code preserving passing test status (REFACTOR step) — skills/test-driven-development/SKILL.md:85-94
- Full test suite verification run confirming absence of regressions — skills/test-driven-development/SKILL.md:116, 392

## Invokes — required
- skill browser-testing-with-devtools — skills/test-driven-development/SKILL.md:22, 341
- reference ../../references/testing-patterns.md — skills/test-driven-development/SKILL.md:361
- tool Chrome DevTools MCP — skills/test-driven-development/SKILL.md:22, 314-336

## Invoked by — required
- .claude/commands/test.md:5
- commands/test.toml:4
- commands/build.toml:4
- skills/spec-driven-development/SKILL.md:202
- skills/incremental-implementation/SKILL.md:201
- skills/debugging-and-error-recovery/SKILL.md:75
- skills/using-agent-skills/SKILL.md:30, 137, 155, 164, 180
- skills/doubt-driven-development/SKILL.md:227
- skills/constraint-driven-development/SKILL.md:10, 309
- references/testing-patterns.md:3
- docs/getting-started.md:51, 62, 113, 114, 115, 133, 162
- docs/adoption-guide.md:41, 50, 90
- docs/gemini-cli-setup.md:54, 75, 103
- docs/opencode-setup.md:116, 159, 170
- docs/copilot-setup.md:10, 13
- docs/cursor-setup.md:23, 44, 83, 138, 158
- docs/windsurf-setup.md:11, 33
- docs/skill-anatomy.md:164
- CLAUDE.md:23
- AGENTS.md:26, 42
- README.md:58, 250, 363

## Concepts named — required, verbatim
- `test-driven-development` — skills/test-driven-development/SKILL.md:2 — defined here
- `Test-Driven Development` — skills/test-driven-development/SKILL.md:6 — defined here
- `Prove-It Pattern` — skills/test-driven-development/SKILL.md:15, 96 — defined here
- `Chrome DevTools MCP` — skills/test-driven-development/SKILL.md:22, 314, 320 — used here
- `Browser Testing` — skills/test-driven-development/SKILL.md:22, 312 — defined here
- `Discover the Stack First` — skills/test-driven-development/SKILL.md:24 — defined here
- `TDD Cycle` — skills/test-driven-development/SKILL.md:38 — defined here
- `RED` — skills/test-driven-development/SKILL.md:41, 46, 49, 54 — defined here
- `GREEN` — skills/test-driven-development/SKILL.md:41, 46, 67, 72 — defined here
- `REFACTOR` — skills/test-driven-development/SKILL.md:41, 85 — defined here
- `Test Pyramid` — skills/test-driven-development/SKILL.md:144, 146 — defined here
- `E2E Tests` — skills/test-driven-development/SKILL.md:150, 171, 185 — defined here
- `Integration Tests` — skills/test-driven-development/SKILL.md:153, 182 — defined here
- `Unit Tests` — skills/test-driven-development/SKILL.md:156, 179 — defined here
- `Beyonce Rule` — skills/test-driven-development/SKILL.md:161 — defined here
- `Test Sizes` — skills/test-driven-development/SKILL.md:163 — defined here
- `Resource Model` — skills/test-driven-development/SKILL.md:163 — defined here
- `Small` — skills/test-driven-development/SKILL.md:169, 173, 179 — defined here
- `Medium` — skills/test-driven-development/SKILL.md:170, 182 — defined here
- `Large` — skills/test-driven-development/SKILL.md:171, 185 — defined here
- `Test State, Not Interactions` — skills/test-driven-development/SKILL.md:190 — defined here
- `state-based` — skills/test-driven-development/SKILL.md:195 — defined here
- `interaction-based` — skills/test-driven-development/SKILL.md:202 — defined here
- `DAMP Over DRY in Tests` — skills/test-driven-development/SKILL.md:211 — defined here
- `DRY` — skills/test-driven-development/SKILL.md:212 — used here
- `DAMP` — skills/test-driven-development/SKILL.md:212, 216 — defined here
- `Prefer Real Implementations Over Mocks` — skills/test-driven-development/SKILL.md:234 — defined here
- `test double` — skills/test-driven-development/SKILL.md:235 — defined here
- `Real implementation` — skills/test-driven-development/SKILL.md:240 — defined here
- `Fake` — skills/test-driven-development/SKILL.md:241 — defined here
- `Stub` — skills/test-driven-development/SKILL.md:242 — defined here
- `Mock (interaction)` — skills/test-driven-development/SKILL.md:243 — defined here
- `Arrange-Act-Assert Pattern` — skills/test-driven-development/SKILL.md:248 — defined here
- `One Assertion Per Concept` — skills/test-driven-development/SKILL.md:266 — defined here
- `Name Tests Descriptively` — skills/test-driven-development/SKILL.md:282 — defined here
- `Test Anti-Patterns to Avoid` — skills/test-driven-development/SKILL.md:301 — defined here
- `Testing implementation details` — skills/test-driven-development/SKILL.md:305 — defined here
- `Flaky tests` — skills/test-driven-development/SKILL.md:306 — defined here
- `Testing framework code` — skills/test-driven-development/SKILL.md:307 — defined here
- `Snapshot abuse` — skills/test-driven-development/SKILL.md:308 — defined here
- `No test isolation` — skills/test-driven-development/SKILL.md:309 — defined here
- `Mocking everything` — skills/test-driven-development/SKILL.md:310 — defined here
- `DevTools Debugging Workflow` — skills/test-driven-development/SKILL.md:316 — defined here
- `browser-testing-with-devtools` — skills/test-driven-development/SKILL.md:341 — used here
- `Subagents for Testing` — skills/test-driven-development/SKILL.md:343 — defined here
- `testing-patterns.md` — skills/test-driven-development/SKILL.md:361 — used here
- `Common Rationalizations` — skills/test-driven-development/SKILL.md:363 — defined here
- `test debt` — skills/test-driven-development/SKILL.md:372 — defined here
- `Red Flags` — skills/test-driven-development/SKILL.md:375 — defined here
- `Verification` — skills/test-driven-development/SKILL.md:387 — defined here

## Structure
- `---` (frontmatter: name, description) — skills/test-driven-development/SKILL.md:1-4
- `# Test-Driven Development` — skills/test-driven-development/SKILL.md:6
- `## Overview` — skills/test-driven-development/SKILL.md:8
- `## When to Use` — skills/test-driven-development/SKILL.md:12
- `## Discover the Stack First` — skills/test-driven-development/SKILL.md:24
- `## The TDD Cycle` — skills/test-driven-development/SKILL.md:38
  - `### Step 1: RED — Write a Failing Test` — skills/test-driven-development/SKILL.md:49
  - `### Step 2: GREEN — Make It Pass` — skills/test-driven-development/SKILL.md:67
  - `### Step 3: REFACTOR — Clean Up` — skills/test-driven-development/SKILL.md:85
- `## The Prove-It Pattern (Bug Fixes)` — skills/test-driven-development/SKILL.md:96
- `## The Test Pyramid` — skills/test-driven-development/SKILL.md:144
  - `### Test Sizes (Resource Model)` — skills/test-driven-development/SKILL.md:163
  - `### Decision Guide` — skills/test-driven-development/SKILL.md:175
- `## Writing Good Tests` — skills/test-driven-development/SKILL.md:188
  - `### Test State, Not Interactions` — skills/test-driven-development/SKILL.md:190
  - `### DAMP Over DRY in Tests` — skills/test-driven-development/SKILL.md:211
  - `### Prefer Real Implementations Over Mocks` — skills/test-driven-development/SKILL.md:234
  - `### Use the Arrange-Act-Assert Pattern` — skills/test-driven-development/SKILL.md:248
  - `### One Assertion Per Concept` — skills/test-driven-development/SKILL.md:266
  - `### Name Tests Descriptively` — skills/test-driven-development/SKILL.md:282
- `## Test Anti-Patterns to Avoid` — skills/test-driven-development/SKILL.md:301
- `## Browser Testing with DevTools` — skills/test-driven-development/SKILL.md:312
  - `### The DevTools Debugging Workflow` — skills/test-driven-development/SKILL.md:316
  - `### What to Check` — skills/test-driven-development/SKILL.md:327
  - `### Security Boundaries` — skills/test-driven-development/SKILL.md:337
- `## When to Use Subagents for Testing` — skills/test-driven-development/SKILL.md:343
- `## See Also` — skills/test-driven-development/SKILL.md:359
- `## Common Rationalizations` — skills/test-driven-development/SKILL.md:363
- `## Red Flags` — skills/test-driven-development/SKILL.md:375
- `## Verification` — skills/test-driven-development/SKILL.md:387

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- **Subagent Separation for Test Writing (Line 343):** Introduces an architectural separation of concerns where a fresh subagent writes reproduction tests without knowledge of the fix, preventing confirmation bias and ensuring tests fail on genuine defects.
- **Resource Model Test Sizing (Lines 163-174):** Uses execution environment and boundary constraints (process, I/O, network, multi-machine) to classify Small, Medium, and Large tests rather than arbitrary line counts.
- **Browser Security Boundary (Line 337):** Treats all runtime browser DOM, console, and network content as untrusted input to defend against prompt-injection attacks.
- **Prohibition Against Superfluous Re-runs (Lines 373, 385, 398):** Directly tackles the agent anti-pattern of running clean test suites multiple times in a row without code changes.

## Context cost
- File size: 16,483 bytes (~4,120 tokens).
- Transitive cost when loaded with referenced reference `references/testing-patterns.md` (7,460 bytes): 23,943 bytes (~5,985 tokens).
- Transitive cost if additionally loading `browser-testing-with-devtools` (14,539 bytes): 38,482 bytes (~9,620 tokens).
```

---

# Draft Inventory Entry 2: `skills/planning-and-task-breakdown/SKILL.md`

```markdown
---
package: addy
path: skills/planning-and-task-breakdown/SKILL.md
type: skill
bytes: 10564
unit: inv-addy-13
deprecated: false
---

# skills/planning-and-task-breakdown/SKILL.md

## Purpose — required, verbatim
> "Decompose work into small, verifiable tasks with explicit acceptance criteria. Good task breakdown is the difference between an agent that completes work reliably and one that produces a tangled mess. Every task should be small enough to implement, test, and verify in a single focused session." — skills/planning-and-task-breakdown/SKILL.md:10

## Design intent — required
Bridges the gap between high-level architectural specifications and granular implementation by decomposing complex features into small, vertically sliced, dependency-ordered tasks with unambiguous acceptance criteria and verification commands. It prevents agents from sprawling across disjointed subsystems, protects existing incomplete work through strict plan-overwrite guardrails, unifies local markdown (`tasks/todo.md`) and external tracker workflows under a single abstraction, and inserts periodic verification checkpoints to catch compounding integration errors early.

## Phase — required
`addy:Plan`

## Inputs — required
- Specification document or clear requirements (e.g. from `spec-driven-development`) — skills/planning-and-task-breakdown/SKILL.md:3, 14, 28
- Codebase structure and existing conventions — skills/planning-and-task-breakdown/SKILL.md:28-29
- Component dependency graph, risks, and unknowns — skills/planning-and-task-breakdown/SKILL.md:30-31
- Existing `tasks/plan.md` and `tasks/todo.md` (or external tracker items) to inspect for incomplete work — skills/planning-and-task-breakdown/SKILL.md:150-155

## Outputs — required
- Implementation plan document saved to `tasks/plan.md` — skills/planning-and-task-breakdown/SKILL.md:33, 145, 168-209
- Task list recorded in the task list target (default `tasks/todo.md` or external issue tracker) — skills/planning-and-task-breakdown/SKILL.md:33, 80-104, 146, 157-165
- Checkpoints embedded after every 2-3 tasks — skills/planning-and-task-breakdown/SKILL.md:112-123, 184, 191, 198

## Invokes — required
- reference ../../references/definition-of-done.md — skills/planning-and-task-breakdown/SKILL.md:257

## Invoked by — required
- .claude/commands/plan.md:5
- commands/planning.toml:4
- commands/build.toml:32
- skills/spec-driven-development/SKILL.md:174, 176, 190
- skills/interview-me/SKILL.md:184
- skills/using-agent-skills/SKILL.md:23, 137, 149, 173
- references/definition-of-done.md:3
- docs/getting-started.md:61, 112, 114
- docs/adoption-guide.md:40
- docs/antigravity-setup.md:53
- docs/cursor-setup.md:156
- docs/opencode-setup.md:117, 169, 193
- CLAUDE.md:22
- AGENTS.md:27, 41
- README.md:243, 357

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — skills/planning-and-task-breakdown/SKILL.md:2 — defined here
- `Planning and Task Breakdown` — skills/planning-and-task-breakdown/SKILL.md:6 — defined here
- `Plan Mode` — skills/planning-and-task-breakdown/SKILL.md:24 — defined here
- `Dependency Graph` — skills/planning-and-task-breakdown/SKILL.md:35 — defined here
- `Slice Vertically` — skills/planning-and-task-breakdown/SKILL.md:57 — defined here
- `horizontal slicing` — skills/planning-and-task-breakdown/SKILL.md:61 — defined here
- `vertical slicing` — skills/planning-and-task-breakdown/SKILL.md:69 — defined here
- `Acceptance criteria` — skills/planning-and-task-breakdown/SKILL.md:88, 256 — defined here
- `Verification` — skills/planning-and-task-breakdown/SKILL.md:92, 242 — defined here
- `Dependencies` — skills/planning-and-task-breakdown/SKILL.md:97 — defined here
- `Estimated scope` — skills/planning-and-task-breakdown/SKILL.md:103 — defined here
- `Checkpoint` — skills/planning-and-task-breakdown/SKILL.md:106, 118, 184, 191, 198 — defined here
- `Task Sizing Guidelines` — skills/planning-and-task-breakdown/SKILL.md:125 — defined here
- `XS` — skills/planning-and-task-breakdown/SKILL.md:129 — defined here
- `S` — skills/planning-and-task-breakdown/SKILL.md:130, 135 — defined here
- `M` — skills/planning-and-task-breakdown/SKILL.md:131, 135 — defined here
- `L` — skills/planning-and-task-breakdown/SKILL.md:132, 135 — defined here
- `XL` — skills/planning-and-task-breakdown/SKILL.md:133 — defined here
- `tasks/plan.md` — skills/planning-and-task-breakdown/SKILL.md:33, 145, 150, 164, 229, 234 — defined here
- `tasks/todo.md` — skills/planning-and-task-breakdown/SKILL.md:33, 150, 161, 234, 249 — defined here
- `tasks/` — skills/planning-and-task-breakdown/SKILL.md:148 — defined here
- `Never overwrite an incomplete plan` — skills/planning-and-task-breakdown/SKILL.md:150 — defined here
- `Task List Target` — skills/planning-and-task-breakdown/SKILL.md:157 — defined here
- `external tracker` — skills/planning-and-task-breakdown/SKILL.md:155, 162, 211, 235 — defined here
- `Plan Document Template` — skills/planning-and-task-breakdown/SKILL.md:166 — defined here
- `Parallelization Opportunities` — skills/planning-and-task-breakdown/SKILL.md:213 — defined here
- `Common Rationalizations` — skills/planning-and-task-breakdown/SKILL.md:222 — defined here
- `Red Flags` — skills/planning-and-task-breakdown/SKILL.md:231 — defined here
- `Definition of Done` — skills/planning-and-task-breakdown/SKILL.md:256 — used here
- `definition-of-done.md` — skills/planning-and-task-breakdown/SKILL.md:257 — used here

## Structure
- `---` (frontmatter: name, description) — skills/planning-and-task-breakdown/SKILL.md:1-4
- `# Planning and Task Breakdown` — skills/planning-and-task-breakdown/SKILL.md:6
- `## Overview` — skills/planning-and-task-breakdown/SKILL.md:8
- `## When to Use` — skills/planning-and-task-breakdown/SKILL.md:12
- `## The Planning Process` — skills/planning-and-task-breakdown/SKILL.md:22
  - `### Step 1: Enter Plan Mode` — skills/planning-and-task-breakdown/SKILL.md:24
  - `### Step 2: Identify the Dependency Graph` — skills/planning-and-task-breakdown/SKILL.md:35
  - `### Step 3: Slice Vertically` — skills/planning-and-task-breakdown/SKILL.md:57
  - `### Step 4: Write Tasks` — skills/planning-and-task-breakdown/SKILL.md:79
  - `### Step 5: Order and Checkpoint` — skills/planning-and-task-breakdown/SKILL.md:106
- `## Task Sizing Guidelines` — skills/planning-and-task-breakdown/SKILL.md:125
- `## Output Files` — skills/planning-and-task-breakdown/SKILL.md:143
  - `### Task List Target` — skills/planning-and-task-breakdown/SKILL.md:157
- `## Plan Document Template` — skills/planning-and-task-breakdown/SKILL.md:166
- `## Parallelization Opportunities` — skills/planning-and-task-breakdown/SKILL.md:213
- `## Common Rationalizations` — skills/planning-and-task-breakdown/SKILL.md:222
- `## Red Flags` — skills/planning-and-task-breakdown/SKILL.md:231
- `## Verification` — skills/planning-and-task-breakdown/SKILL.md:242
- `## See Also` — skills/planning-and-task-breakdown/SKILL.md:255

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- **Canonical Authority on Task Decomposition:** `spec-driven-development/SKILL.md:174, 190` explicitly assigns precedence to `planning-and-task-breakdown` for dependency mapping, vertical slicing, and task sizing over its own inline summaries.
- **Incomplete Plan Overwrite Guardrail (Lines 150-156):** Enforces an explicit "stop and ask" gate before overwriting existing plan documents containing unchecked tasks, mitigating multi-session state destruction.
- **Task List Target Polymorphism (Lines 157-165):** Unifies local markdown (`tasks/todo.md`) and external tracker (GitHub Issues, Linear, Jira, beads/`bd`) workflows, converting `tasks/plan.md` into an issue index when external trackers are active.
- **Distinction Between Acceptance Criteria and Definition of Done (Line 256):** Clearly separates per-task acceptance criteria ("did we build the right thing?") from standing, project-wide Definition of Done ("is this finished to our standard?").

## Context cost
- File size: 10,564 bytes (~2,640 tokens).
- Transitive cost when loaded with referenced reference `references/definition-of-done.md` (3,798 bytes): 14,362 bytes (~3,590 tokens).
```
