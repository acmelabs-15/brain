---
package: rjm
path: .claude/skills/autoplan/SKILL.md
type: skill
bytes: 11922
unit: inv-rjm-90
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/autoplan/SKILL.md

## Purpose — required, verbatim
> "Route any request to the right skill, command, or agent chain with defaults, so nobody hand-picks from the full catalog." — .claude/skills/autoplan/SKILL.md:4-5

## Design intent — required
Provides a lazy outer front-door intent router at the skill layer so users and models do not need to manually search and select from dozens of skills in the catalog. It establishes the target repository's technology stack through reconnaissance, classifies requests by intent family and sizing tier (Trivial, Standard, Feature), routes them to specific skills, lifecycle command chains, or the orchestrator agent, applies mechanical defaults silently, and gates taste and sovereignty decisions at completion. Without it, users would face cognitive overload navigating the catalog manually, or trivial tasks would incur unnecessary multi-agent coordination overhead.

## Phase — required
cross-phase

## Inputs — required
- Explicit command invocation `/autoplan` followed by request text — .claude/skills/autoplan/SKILL.md:25
- Trigger phrases: `do it` (.claude/skills/autoplan/SKILL.md:26), `handle it` (.claude/skills/autoplan/SKILL.md:27), `figure this out` (.claude/skills/autoplan/SKILL.md:28), `your call` (.claude/skills/autoplan/SKILL.md:29)
- Concrete requests naming no skill (e.g. "why is CI failing", "investigate the flaky test", "redo #1723 properly") — .claude/skills/autoplan/SKILL.md:31-34
- Target repository reconnaissance signals: `CONTRIBUTING*`, `AGENTS.md`/`CLAUDE.md`, `README*`, build manifests (`*.csproj`/`*.sln`, `pyproject.toml`, `package.json`, `go.mod`, `Cargo.toml`, `pom.xml`, `build.gradle`, `build.gradle.kts`, `settings.gradle`, `settings.gradle.kts`), directory layout (`src/`, `lib/`, `test/`/`tests/`) — .claude/skills/autoplan/SKILL.md:51-55
- Target contribution gates: API review, ref-assembly updates, changelog, breaking-change policy — .claude/skills/autoplan/SKILL.md:58-60
- In-flight blocking PRs, closing keywords, diffs, review comments, and label automation configurations — .claude/skills/autoplan/SKILL.md:63-78

## Outputs — required
- Selected execution pipeline per size tier:
  - Trivial: Fix, test, commit — .claude/skills/autoplan/SKILL.md:105
  - Standard: `/build` then `/test` then `/review` then `/ship` — .claude/skills/autoplan/SKILL.md:106
  - Feature: `/spec` then `/plan` then the Standard chain — .claude/skills/autoplan/SKILL.md:107
- Extracted minimal, mergeable PR slice from blocking PRs when separable — .claude/skills/autoplan/SKILL.md:78-80
- Final gate summary block containing:
  - Route taken and rationale — .claude/skills/autoplan/SKILL.md:180
  - Auto-decided items count (Mechanical) and Taste decisions with rationales — .claude/skills/autoplan/SKILL.md:181-182
  - Open Sovereignty questions with options, if any — .claude/skills/autoplan/SKILL.md:183
  - Evidence: test counts, gates passed, artifacts produced — .claude/skills/autoplan/SKILL.md:184

## Invokes — required
- command /build — .claude/skills/autoplan/SKILL.md:106
- command /test — .claude/skills/autoplan/SKILL.md:106
- skill review — .claude/skills/autoplan/SKILL.md:106
- command /ship — .claude/skills/autoplan/SKILL.md:106
- command /spec — .claude/skills/autoplan/SKILL.md:107
- command /plan — .claude/skills/autoplan/SKILL.md:107
- skill buy-vs-build-framework — .claude/skills/autoplan/SKILL.md:117
- skill analyze — .claude/skills/autoplan/SKILL.md:118
- skill github — .claude/skills/autoplan/SKILL.md:119
- skill pr-comment-responder — .claude/skills/autoplan/SKILL.md:120
- agent merge-resolver — .claude/skills/autoplan/SKILL.md:121
- command /push-pr — .claude/skills/autoplan/SKILL.md:122
- skill memory-search — .claude/skills/autoplan/SKILL.md:123
- skill context-gather — .claude/skills/autoplan/SKILL.md:124
- skill research-and-incorporate — .claude/skills/autoplan/SKILL.md:124
- skill agent-harness-reference — .claude/skills/autoplan/SKILL.md:125
- skill ai-agents-portability-campaign — .claude/skills/autoplan/SKILL.md:126
- skill software-engineering-library — .claude/skills/autoplan/SKILL.md:127
- skill quality-grades — .claude/skills/autoplan/SKILL.md:128
- skill security-detection — .claude/skills/autoplan/SKILL.md:129
- skill security-review — .claude/skills/autoplan/SKILL.md:130
- skill security-scan — .claude/skills/autoplan/SKILL.md:130
- skill reflect — .claude/skills/autoplan/SKILL.md:131
- skill adr-generator — .claude/skills/autoplan/SKILL.md:132
- skill skillforge — .claude/skills/autoplan/SKILL.md:133
- agent orchestrator — .claude/skills/autoplan/SKILL.md:134
- doc ADR-078 — .claude/skills/autoplan/SKILL.md:139
- doc AGENTS.md — .claude/skills/autoplan/SKILL.md:172
- doc CLAUDE.md — .claude/skills/autoplan/SKILL.md:214

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:45
- agent .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:41
- agent templates/agents/orchestrator.shared.md — templates/agents/orchestrator.shared.md:352
- config scripts/validation/rule_activation_coverage_baseline.json — scripts/validation/rule_activation_coverage_baseline.json:45
- script scripts/validation/check_shipped_skill_routes.py — scripts/validation/check_shipped_skill_routes.py:26

## Concepts named — required, verbatim
- `router` — .claude/skills/autoplan/SKILL.md:11 — defined here
- `gstack /autoplan` — .claude/skills/autoplan/SKILL.md:12 — used here
- `Phase 0: Recon the target` — .claude/skills/autoplan/SKILL.md:45 — defined here
- `contribution gates` — .claude/skills/autoplan/SKILL.md:58 — used here
- `needs-split` — .claude/skills/autoplan/SKILL.md:69 — used here
- `Phase 1: Classify` — .claude/skills/autoplan/SKILL.md:92 — defined here
- `Intent family` — .claude/skills/autoplan/SKILL.md:97 — defined here
- `Session-protocol CI failure` — .claude/skills/autoplan/SKILL.md:99 — used here
- `PR ops` — .claude/skills/autoplan/SKILL.md:99 — used here
- `Size` — .claude/skills/autoplan/SKILL.md:101 — defined here
- `Trivial` — .claude/skills/autoplan/SKILL.md:105 — defined here
- `Standard` — .claude/skills/autoplan/SKILL.md:106 — defined here
- `Feature` — .claude/skills/autoplan/SKILL.md:107 — defined here
- `Phase 2: Route` — .claude/skills/autoplan/SKILL.md:112 — defined here
- `User Sovereignty` — .claude/skills/autoplan/SKILL.md:136-137 — used here
- `Router boundary (ADR-078)` — .claude/skills/autoplan/SKILL.md:139 — used here
- `Phase 3: Execute with defaults` — .claude/skills/autoplan/SKILL.md:148 — defined here
- `Completeness` — .claude/skills/autoplan/SKILL.md:152 — defined here
- `Run the checks` — .claude/skills/autoplan/SKILL.md:154 — defined here
- `DRY at the knowledge level` — .claude/skills/autoplan/SKILL.md:156 — defined here
- `Bias to action` — .claude/skills/autoplan/SKILL.md:158 — defined here
- `Mirrors and gates` — .claude/skills/autoplan/SKILL.md:160 — defined here
- `Mechanical` — .claude/skills/autoplan/SKILL.md:168 — defined here
- `Taste` — .claude/skills/autoplan/SKILL.md:169 — defined here
- `Sovereignty` — .claude/skills/autoplan/SKILL.md:170 — defined here
- `Ask First` — .claude/skills/autoplan/SKILL.md:172 — used here
- `Autonomy Guardrail` — .claude/skills/autoplan/SKILL.md:172-173 — used here
- `Confusion Protocol` — .claude/skills/autoplan/SKILL.md:174 — used here
- `Phase 4: Final gate` — .claude/skills/autoplan/SKILL.md:176 — defined here
- `Routing everything to the orchestrator` — .claude/skills/autoplan/SKILL.md:200 — defined here
- `Asking mechanical questions` — .claude/skills/autoplan/SKILL.md:203 — defined here
- `Silent sovereignty` — .claude/skills/autoplan/SKILL.md:205 — defined here
- `Narration instead of a gate` — .claude/skills/autoplan/SKILL.md:207 — defined here

## Structure
- `# Autoplan` — .claude/skills/autoplan/SKILL.md:15
- `## Triggers` — .claude/skills/autoplan/SKILL.md:21
- `## Process` — .claude/skills/autoplan/SKILL.md:43
- `### Phase 0: Recon the target` — .claude/skills/autoplan/SKILL.md:45
- `### Phase 1: Classify` — .claude/skills/autoplan/SKILL.md:92
- `### Phase 2: Route` — .claude/skills/autoplan/SKILL.md:112
- `### Phase 3: Execute with defaults` — .claude/skills/autoplan/SKILL.md:148
- `### Phase 4: Final gate` — .claude/skills/autoplan/SKILL.md:176
- `## Verification` — .claude/skills/autoplan/SKILL.md:186
- `## Anti-Patterns` — .claude/skills/autoplan/SKILL.md:198
- `## Extension Points` — .claude/skills/autoplan/SKILL.md:210

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Directly inspired by `gstack /autoplan` (`garrytan/gstack autoplan/SKILL.md.tmpl`) (.claude/skills/autoplan/SKILL.md:12).
- Grounded in production analysis of real session logs: identifies that users open requests with `continue`, `proceed`, `investigate`, `fix the X`, `do it`, or `handle it`, while deliberately treating `continue` and `proceed` as in-flight resumption rather than routing triggers (.claude/skills/autoplan/SKILL.md:36-41).
- Enforces technology-stack neutrality: requires establishing target repository stack signals (build manifests, directory layout, contribution gates) before routing instead of assuming Python (.claude/skills/autoplan/SKILL.md:47-61).
- Encodes a nuanced PR extraction policy based on issue #5198: warns against trusting advisory labels like `needs-split` based on commit counts alone without inspecting the actual diff and review comments (.claude/skills/autoplan/SKILL.md:63-90).
- Classifies decision sovereignty into three actionable levels: `Mechanical` (silent resolution), `Taste` (decide, surface in final gate), and `Sovereignty` (stop, present options, ask user) (.claude/skills/autoplan/SKILL.md:166-174).
- Establishes an explicit boundary with the orchestrator agent per ADR-078: autoplan routes requests; orchestrator coordinates specialist agents (.claude/skills/autoplan/SKILL.md:139-146).

## Context cost
11922 bytes for SKILL.md (~2980 tokens). Routes lazily to external skills/commands/agents without inlining them.
