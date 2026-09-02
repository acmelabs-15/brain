---
package: addy
path: agents/test-engineer.md
type: agent
bytes: 3275
unit: inv-addy-4
---

# agents/test-engineer.md

## Purpose — required, verbatim
> "QA engineer specialized in test strategy, test writing, and coverage analysis. Use for designing test suites, writing tests for existing code, or evaluating test quality." — agents/test-engineer.md:3

## Design intent — required
Subagent persona embodying a specialized QA Engineer focused on designing test suites, selecting appropriate testing levels (Unit vs Integration vs E2E), writing descriptive tests (`describe`/`it`), applying the Prove-It pattern for bug reproduction, covering 5 critical execution scenarios (happy path, empty, boundary, error, concurrency), and generating structured Test Coverage Analysis reports prioritized by risk.

## Phase — required
`addy:Build`

## Inputs — required
- Code under test, public APIs, edge cases, existing test suite

## Outputs — required
- Test files / test implementations
- Test Coverage Analysis report (Current Coverage, Recommended Tests, Priority: Critical, High, Medium, Low) — agents/test-engineer.md:63-79

## Invokes — required
- doc docs/agents.md — agents/test-engineer.md:95

## Invoked by — required
- .claude/commands/ship.md:17, 26, 63
- docs/agents.md:9, 31, 38, 44, 66, 110
- AGENTS.md:80
- README.md:293
- docs/getting-started.md:99
- docs/copilot-setup.md:31, 37, 85
- references/orchestration-patterns.md:24, 55, 123, 160, 166, 232, 248
- commands/ship.toml:16, 25, 62
- agents/security-auditor.md:111
- docs/comparison.md:54, 98

## Concepts named — required, verbatim
- `test-engineer` — agents/test-engineer.md:2, 94 — defined here
- `QA Engineer` — agents/test-engineer.md:8 — defined here
- `Approach` — agents/test-engineer.md:10 — defined here
- `Analyze Before Writing` — agents/test-engineer.md:12 — defined here
- `Test at the Right Level` — agents/test-engineer.md:20 — defined here
- `Prove-It Pattern` — agents/test-engineer.md:30, 93 — used here
- `Write Descriptive Tests` — agents/test-engineer.md:37 — defined here
- `Arrange → Act → Assert` — agents/test-engineer.md:42 — used here
- `Cover These Scenarios` — agents/test-engineer.md:47 — defined here
- `Output Format` — agents/test-engineer.md:59 — defined here
- `Test Coverage Analysis` — agents/test-engineer.md:64 — defined here
- `Coverage gaps` — agents/test-engineer.md:68 — defined here
- `Priority` — agents/test-engineer.md:74 — defined here
- `Critical` — agents/test-engineer.md:75 — defined here
- `High` — agents/test-engineer.md:76 — defined here
- `Medium` — agents/test-engineer.md:77 — defined here
- `Low` — agents/test-engineer.md:78 — defined here
- `Rules` — agents/test-engineer.md:81 — defined here
- `Composition` — agents/test-engineer.md:91 — defined here

## Structure
- `---` (frontmatter: name, description) — agents/test-engineer.md:1-4
- `# Test Engineer` — agents/test-engineer.md:6
- `## Approach` — agents/test-engineer.md:10
- `### 1. Analyze Before Writing` — agents/test-engineer.md:12
- `### 2. Test at the Right Level` — agents/test-engineer.md:20
- `### 3. Follow the Prove-It Pattern for Bugs` — agents/test-engineer.md:30
- `### 4. Write Descriptive Tests` — agents/test-engineer.md:37
- `### 5. Cover These Scenarios` — agents/test-engineer.md:47
- `## Output Format` — agents/test-engineer.md:59
- `## Rules` — agents/test-engineer.md:81
- `## Composition` — agents/test-engineer.md:91

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Strict rule against inter-agent delegation: "Recommendations to add tests belong in your report; the user or a slash command decides when to act on them" (agents/test-engineer.md:95).
- Testing philosophy: "A test that never fails is as useless as a test that always fails" (agents/test-engineer.md:89).

## Context cost
- File size: 3,275 bytes (~820 tokens).
- Transitive cost when invoked: standalone persona context (~820 tokens system prompt + target code & tests).
