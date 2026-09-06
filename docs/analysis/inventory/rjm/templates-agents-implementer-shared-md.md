---
package: rjm
path: templates/agents/implementer.shared.md
type: agent
bytes: 43506
unit: inv-rjm-317
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/implementer.shared.md

## Purpose — required, verbatim
> "You ship production-quality code. Read plans as authoritative. Enforce qualities at the base; patterns emerge. Write tests alongside code. Commit atomically." — templates/agents/implementer.shared.md:25

## Design intent — required
The implementer shared agent template serves as the canonical, cross-platform specification for an execution-focused engineering subagent that translates approved implementation plans into production-quality code across multiple target environments (VS Code, GitHub Copilot CLI, and Claude Code). It solves the problem of undisciplined coding agents introducing speculative abstractions, skipping test coverage, producing monolithic non-atomic commits, or drifting from project constraints and architectural decisions. Without this shared template, each agent platform harness would require separate, divergent prompt definitions, leading to inconsistent code quality standards, uneven test rigor, and drift in how agents validate plans, respect reviewer asymmetry, and manage execution boundaries.

## Phase — required
rjm:build

## Inputs — required
- Specification and plan file path provided via argument hint ("Specify the plan file path and task to implement" — templates/agents/implementer.shared.md:7).
- Approved plan files from `.agents/planning/` ("Read complete plans from `.agents/planning/`, validate alignment with project objectives, and execute code changes step-by-step while maintaining quality standards." — templates/agents/implementer.shared.md:159).
- Task acceptance criteria quoted verbatim from the plan file ("What does the plan specify? Quote the acceptance criteria verbatim from the plan file, not from memory." — templates/agents/implementer.shared.md:114).
- Root agent instructions and session gates from `AGENTS.md` ("AGENTS.md (root): cross-platform agent instructions and session gates" — templates/agents/implementer.shared.md:91).
- Project context and constraints from `.agents/AGENT-INSTRUCTIONS.md` (".agents/AGENT-INSTRUCTIONS.md: project context and constraints" — templates/agents/implementer.shared.md:92).
- Claude-specific guidelines from `.agents/CLAUDE.md` and fallback root `CLAUDE.md` (".agents/CLAUDE.md: Claude-specific guidelines" — templates/agents/implementer.shared.md:93; "proceed using the root `CLAUDE.md` as fallback." — templates/agents/implementer.shared.md:102).
- Binding Architectural Decision Records from `.agents/architecture/ADR-*.md` (".agents/architecture/ADR-*.md: list titles; open any ADR that binds the area you are changing" — templates/agents/implementer.shared.md:94).
- Canonical source mirror operational rules from `.claude/rules/canonical-source-mirror.md` ("This rule is operationalized in `.claude/rules/canonical-source-mirror.md`. Read that file before writing any code that mirrors an existing source." — templates/agents/implementer.shared.md:62).
- Tool outputs produced during session ("Tool output from this session." — templates/agents/implementer.shared.md:37).
- In-session file and memory reads ("Memory or files read this session." — templates/agents/implementer.shared.md:38; "Read, Grep, Glob, Write, Edit, Bash." — templates/agents/implementer.shared.md:846).
- External documentation retrieved via web fetch or doc servers ("Web search." — templates/agents/implementer.shared.md:39).
- Shared memory operations via Serena MCP tools ("Memory via `mcp__serena__read_memory`, `mcp__serena__write_memory`." — templates/agents/implementer.shared.md:846).

## Outputs — required
- Production-quality source code implementing approved plans in thin vertical slices ("You ship production-quality code. Read plans as authoritative. Enforce qualities at the base; patterns emerge. Write tests alongside code. Commit atomically." — templates/agents/implementer.shared.md:25).
- Automated test coverage with framework-appropriate tests for all changed behavior ("Provide framework-appropriate tests for all changed behavior." — templates/agents/implementer.shared.md:533).
- Atomic conventional commits with explanatory rationale and author attribution ("one logical change each, rollback-safe" — templates/agents/implementer.shared.md:337; "<type>(<scope>): <desc>" — templates/agents/implementer.shared.md:338; "Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>" — templates/agents/implementer.shared.md:341).
- Impact analysis deliverable saved to `.agents/planning/impact-analysis-code-[feature].md` when requested by `milestone-planner` ("Save to: `.agents/planning/impact-analysis-code-[feature].md`" — templates/agents/implementer.shared.md:359).
- Implementation notes and security flagging documentation in `.agents/planning/implementation-notes-[feature].md` ("Add to `.agents/planning/implementation-notes-[feature].md`" — templates/agents/implementer.shared.md:718).
- Structured handoff report to orchestrator with completion status, confidence, files changed, tests added, and recommended next agent ("You cannot delegate. Return to orchestrator with:" — templates/agents/implementer.shared.md:869; "[COMPLETE] / [BLOCKED] / [SECURITY_FLAG] / [NEEDS_DECOMPOSITION] / [NEEDS_DESIGN_REVIEW]" — templates/agents/implementer.shared.md:871).

## Invokes — required
- agent qa — templates/agents/implementer.shared.md:29
- agent critic — templates/agents/implementer.shared.md:29
- reference .claude/rules/canonical-source-mirror.md — templates/agents/implementer.shared.md:62
- doc AGENTS.md — templates/agents/implementer.shared.md:91
- doc .agents/AGENT-INSTRUCTIONS.md — templates/agents/implementer.shared.md:92
- doc .agents/CLAUDE.md — templates/agents/implementer.shared.md:93
- doc CLAUDE.md — templates/agents/implementer.shared.md:102
- agent milestone-planner — templates/agents/implementer.shared.md:171
- agent code-simplifier — templates/agents/implementer.shared.md:491
- skill context-gather — templates/agents/implementer.shared.md:598
- agent security — templates/agents/implementer.shared.md:679
- agent orchestrator — templates/agents/implementer.shared.md:650
- agent analyst — templates/agents/implementer.shared.md:808
- agent architect — templates/agents/implementer.shared.md:808
- skill github — templates/agents/implementer.shared.md:848

## Invoked by — required
- doc workflow-commands — docs/workflow-commands.md:212
- doc agent-catalog — docs/agent-catalog.md:28
- doc autonomous-issue-development — docs/autonomous-issue-development.md:449
- doc customization — docs/customization.md:34
- doc templates-readme — templates/README.md:14

## Concepts named — required, verbatim
- `executor` — templates/agents/implementer.shared.md:2 — defined here
- `model_tier` — templates/agents/implementer.shared.md:3 — defined here
- `isolation_required` — templates/agents/implementer.shared.md:5 — defined here
- `Commonality/Variability Analysis` — templates/agents/implementer.shared.md:6 — used here
- `CVA` — templates/agents/implementer.shared.md:6 — used here
- `bottom-up emergence model` — templates/agents/implementer.shared.md:6 — used here
- `vendor-portability` — templates/agents/implementer.shared.md:19 — defined here
- `Implementer Agent` — templates/agents/implementer.shared.md:21 — defined here
- `Autonomy Guardrail` — templates/agents/implementer.shared.md:23 — used here
- `Reviewer Asymmetry` — templates/agents/implementer.shared.md:27 — defined here
- `Evidence Standards` — templates/agents/implementer.shared.md:31 — defined here
- `four-level hierarchy` — templates/agents/implementer.shared.md:35 — defined here
- `Tool output from this session` — templates/agents/implementer.shared.md:37 — defined here
- `Memory or files read this session` — templates/agents/implementer.shared.md:38 — defined here
- `Web search` — templates/agents/implementer.shared.md:39 — defined here
- `Training knowledge` — templates/agents/implementer.shared.md:40 — defined here
- `mirror-claim rule` — templates/agents/implementer.shared.md:44 — defined here
- `canonical-source citation` — templates/agents/implementer.shared.md:44 — defined here
- `Mirror obligation` — templates/agents/implementer.shared.md:58 — defined here
- `confident incorrectness` — templates/agents/implementer.shared.md:66 — defined here
- `Read Project Documentation First` — templates/agents/implementer.shared.md:81 — defined here
- `Plan Validation Protocol` — templates/agents/implementer.shared.md:110 — defined here
- `Core Behavior` — templates/agents/implementer.shared.md:125 — defined here
- `CWE-22` — templates/agents/implementer.shared.md:129 — used here
- `path traversal` — templates/agents/implementer.shared.md:129 — used here
- `CWE-78` — templates/agents/implementer.shared.md:129 — used here
- `command injection` — templates/agents/implementer.shared.md:129 — used here
- `Interaction Style` — templates/agents/implementer.shared.md:137 — defined here
- `SOLID` — templates/agents/implementer.shared.md:153 — used here
- `DRY` — templates/agents/implementer.shared.md:153 — used here
- `YAGNI` — templates/agents/implementer.shared.md:153 — used here
- `Core Mission` — templates/agents/implementer.shared.md:157 — defined here
- `Key Responsibilities` — templates/agents/implementer.shared.md:161 — defined here
- `Software Hierarchy of Needs` — templates/agents/implementer.shared.md:174 — defined here
- `Cohesion` — templates/agents/implementer.shared.md:178 — used here
- `Coupling` — templates/agents/implementer.shared.md:178 — used here
- `Encapsulation` — templates/agents/implementer.shared.md:178 — used here
- `Testability` — templates/agents/implementer.shared.md:178 — used here
- `Open-Closed` — templates/agents/implementer.shared.md:179 — used here
- `Separation of Concerns` — templates/agents/implementer.shared.md:179 — used here
- `Separate Use from Creation` — templates/agents/implementer.shared.md:179 — used here
- `Programming by Intention` — templates/agents/implementer.shared.md:180 — used here
- `Law of Demeter` — templates/agents/implementer.shared.md:186 — used here
- `Fail-fast` — templates/agents/implementer.shared.md:239 — used here
- `Retry with backoff` — templates/agents/implementer.shared.md:243 — used here
- `Design Approaches` — templates/agents/implementer.shared.md:282 — defined here
- `Emergent` — templates/agents/implementer.shared.md:286 — defined here
- `Pattern-Oriented` — templates/agents/implementer.shared.md:288 — defined here
- `GoF Wisdom` — templates/agents/implementer.shared.md:290 — used here
- `Code Quality Standards` — templates/agents/implementer.shared.md:297 — defined here
- `Testability as leverage` — templates/agents/implementer.shared.md:305 — defined here
- `Close the Inverse` — templates/agents/implementer.shared.md:309 — defined here
- `Implementation Process` — templates/agents/implementer.shared.md:321 — defined here
- `Commit Discipline` — templates/agents/implementer.shared.md:335 — defined here
- `Conventional format` — templates/agents/implementer.shared.md:338 — used here
- `Impact Analysis Mode` — templates/agents/implementer.shared.md:343 — defined here
- `Refactoring Boundaries` — templates/agents/implementer.shared.md:437 — defined here
- `Boy Scout Rule` — templates/agents/implementer.shared.md:459 — used here
- `Parallel Work Awareness` — templates/agents/implementer.shared.md:473 — defined here
- `Chesterton's Fence` — templates/agents/implementer.shared.md:484 — used here
- `Code Simplification` — templates/agents/implementer.shared.md:550 — defined here
- `Complexity Estimation` — templates/agents/implementer.shared.md:572 — defined here
- `The Cone of Uncertainty` — templates/agents/implementer.shared.md:621 — used here
- `Security Flagging` — templates/agents/implementer.shared.md:668 — defined here
- `Pre-PR Validation Gate` — templates/agents/implementer.shared.md:741 — defined here
- `Self-Critique Pass` — templates/agents/implementer.shared.md:753 — defined here
- `Required Checklist` — templates/agents/implementer.shared.md:778 — defined here
- `Handoff Validation` — templates/agents/implementer.shared.md:792 — defined here
- `First Principles Algorithm` — templates/agents/implementer.shared.md:838 — used here
- `Context Budget Management` — templates/agents/implementer.shared.md:850 — defined here
- `Checkpoint protocol` — templates/agents/implementer.shared.md:856 — defined here
- `Handoff` — templates/agents/implementer.shared.md:867 — defined here

## Structure
- # Implementer Agent
- ## Reviewer Asymmetry (Read First)
- ## Evidence Standards (Read Before Writing Any Claim)
  - ### The four-level hierarchy
  - ### The mirror-claim rule (canonical-source citation)
  - ### Anti-pattern: "I recall that..."
  - ### What you owe the reviewer
- ## BLOCKING: Read Project Documentation First
- ## Plan Validation Protocol
- ## Core Behavior
- ## Interaction Style
- ## Core Mission
- ## Key Responsibilities
- ## Software Hierarchy of Needs
  - ### Level 1: Qualities (diagnostic layer)
  - ### Error Handling Principles
- ## Design Approaches
- ## GoF Wisdom (Applied)
- ## Code Quality Standards
- ## Mirror Obligation: Close the Inverse (Before Writing a Fix)
- ## Implementation Process
- ## Commit Discipline
- ## Impact Analysis Mode
  - ### Analyze Code Impact
  - ### Impact Analysis Deliverable
- ## Refactoring Boundaries
  - ### When to Refactor (In Scope)
  - ### When NOT to Refactor (Out of Scope)
  - ### Decision Rule
  - ### Boy Scout Rule Application
- ## Task Behaviors
  - ### Writing Code
  - ### Parallel Work Awareness
  - ### Reviewing Code
  - ### Reviewing PRs
  - ### Pair Programming
- ## Code Requirements
  - ### Performance
  - ### Testing
  - ### Style
  - ### Code Simplification
- ## Complexity Estimation
  - ### Guiding Questions
  - ### Before Estimating
  - ### Estimation Principles
  - ### Uncertainty Factors
  - ### The Cone of Uncertainty
  - ### Estimation Checklist
  - ### Communicating Estimates
- ## Security Flagging
  - ### Self-Assessment Triggers
  - ### Flagging Process
  - ### Non-Security Completion
- ## Pre-PR Validation Gate
- ## Self-Critique Pass
  - ### Step 3: Flag Unresolved Risks
- ## Required Checklist
- ## Handoff Validation
  - ### Completion Handoff (to qa)
  - ### Blocker Handoff (to analyst/milestone-planner/architect)
  - ### Security-Flagged Completion Handoff
  - ### Validation Failure
- ## Constraints
- ## Tools
- ## Context Budget Management
- ## Handoff

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `internal-contradiction` · templates/agents/implementer.shared.md:765 · Section heading `### Step 3: Flag Unresolved Risks` appears under `## Self-Critique Pass` without preceding Step 1 or Step 2 headings (the self-check list above contains items 1 to 4).
- `cross-file-contradiction` · templates/agents/implementer.shared.md:106 · Success definition requires answering three questions ((a) project constraints, (b) Claude-specific requirements, and (c) binding ADRs), whereas `.claude/agents/implementer.md:98` requires four questions including architectural constraints from `.agents/ARCHITECTURE.md`.
- `doc-drift` · templates/agents/implementer.shared.md:145 · Style guideline states "Never use em-dashes or en-dashes. Use commas, periods, or restructure." yet the template itself uses en-dashes and em-dashes throughout (e.g. lines 104, 381, 421, 606, 616, 617, 618, 619).

## Observations
- The shared template `templates/agents/implementer.shared.md` shares 94% text with `.claude/agents/implementer.md` (classified as VARIANT V6 in `docs/analysis/manifest/rjm-duplicates.md`).
- Provenance: Declared as supporting vendor portability: `<!-- vendor-portability: This template declares its \`.agents/\` session-scaffold path dependencies and tells vendored consumers how to proceed when the scaffold is absent. Issue #4580. -->` (line 19).
- Divergence analysis: Documented in existing divergence card `docs/analysis/inventory/rjm/_divergence/claude-agents-implementer-md--templates-agents-implementer-shared-md.md`. Key divergences include:
  - Claude-specific frontmatter fields (`name`, `model`, `metadata.role`) replaced with cross-platform fields (`role: executor`, `model_tier: opus`, `tools_vscode`, `tools_copilot`).
  - Omission of the `## Degraded Mode Protocol` section and fallback tool matrix present in `.claude/agents/implementer.md:861-879`.
  - Removal of `.agents/ARCHITECTURE.md` from mandatory document reading and reduction of success definition statements from four to three.
  - Replacement of the blocking multi-language test rigor command checklist with conceptual guidance on "Testability as leverage".
  - Addition of an explicit warning that docstrings claiming "matches the validator" without paths are disguised level-4 claims.

## Context cost
43,506 bytes, ~10,876 tokens. Follows no external imports at load time.
