---
package: rjm
path: .claude/agents/implementer.md
type: agent
bytes: 46256
unit: inv-rjm-67
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/implementer.md

## Purpose — required, verbatim
> "You ship production-quality code. Read plans as authoritative. Enforce qualities at the base; patterns emerge. Write tests alongside code. Commit atomically." — .claude/agents/implementer.md:16

## Design intent — required
The implementer agent acts as the primary execution engine for approved implementation plans within the multi-agent system, translating planning artifacts into production-quality code while enforcing strict software design qualities from the bottom up. It solves the problem of uncontrolled agent implementations that drift from architectural boundaries, introduce speculative abstractions, skip tests, or make massive, non-atomic commits. Without it, the lifecycle would lack a disciplined executor capable of adhering to rigorous test-driven development (positive, negative, and edge testing across risk tiers), applying Commonality/Variability Analysis (CVA), adhering to the mirror-claim rule and reviewer asymmetry, and generating atomic commits that survive fresh-context adversarial review by QA and Critic agents.

## Phase — required
rjm:build

## Inputs — required
- Approved plan files from `.agents/planning/` (e.g. plan file path and task specified via argument-hint: "Specify the plan file path and task to implement" — .claude/agents/implementer.md:9).
- Task specification with acceptance criteria quoted verbatim from the plan file ("What does the plan specify? Quote the acceptance criteria verbatim from the plan file, not from memory." — .claude/agents/implementer.md:106).
- Cross-platform agent instructions and session gates from root `AGENTS.md` ("AGENTS.md (root): cross-platform agent instructions and session gates" — .claude/agents/implementer.md:81).
- Project context and constraints from `.agents/AGENT-INSTRUCTIONS.md` (".agents/AGENT-INSTRUCTIONS.md: project context and constraints" — .claude/agents/implementer.md:82).
- Claude-specific guidelines from `.agents/CLAUDE.md` and fallback root `CLAUDE.md` (".agents/CLAUDE.md: Claude-specific guidelines" — .claude/agents/implementer.md:83; "proceed using the root `CLAUDE.md` as fallback." — .claude/agents/implementer.md:93).
- Binding Architectural Decision Records from `.agents/architecture/ADR-*.md` (".agents/architecture/ADR-*.md: list titles; open any ADR that binds the area you are changing" — .claude/agents/implementer.md:84).
- System design decisions from `.agents/ARCHITECTURE.md` when present (".agents/ARCHITECTURE.md: system design decisions (if present)" — .claude/agents/implementer.md:85).
- Operational rules from `.claude/rules/canonical-source-mirror.md` ("This rule is operationalized in `.claude/rules/canonical-source-mirror.md`. Read that file before writing any code that mirrors an existing source." — .claude/agents/implementer.md:53).
- Codebase context, coding patterns, and test conventions discovered via `Read`, `Grep`, and `Glob` ("Tool output from this session." — .claude/agents/implementer.md:28; "Memory or files read this session." — .claude/agents/implementer.md:29; "Read, Grep, Glob, Write, Edit, Bash." — .claude/agents/implementer.md:857).
- Memory retrieval via Serena tools ("Memory via `mcp__serena__read_memory`, `mcp__serena__write_memory`." — .claude/agents/implementer.md:857; "Read `.serena/memories/` directly with Read tool" — .claude/agents/implementer.md:872).

## Outputs — required
- Production-quality source code implementing approved plans in thin vertical slices ("You ship production-quality code. Read plans as authoritative. Enforce qualities at the base; patterns emerge. Write tests alongside code. Commit atomically." — .claude/agents/implementer.md:16).
- Comprehensive automated test coverage with positive, negative, and edge test cases ("Every new function MUST have positive AND negative tests." — .claude/agents/implementer.md:299).
- Atomic conventional commits with explanatory rationale and author attribution ("one logical change each, rollback-safe" — .claude/agents/implementer.md:348; "<type>(<scope>): <desc>" — .claude/agents/implementer.md:349; "Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>" — .claude/agents/implementer.md:352).
- Impact analysis deliverable saved to `.agents/planning/impact-analysis-code-[feature].md` when requested by `milestone-planner` ("Save to: `.agents/planning/impact-analysis-code-[feature].md`" — .claude/agents/implementer.md:370).
- Implementation notes and security flagging documentation in `.agents/planning/implementation-notes-[feature].md` ("Add to `.agents/planning/implementation-notes-[feature].md`" — .claude/agents/implementer.md:729).
- Structured handoff report to orchestrator with completion status, confidence, files changed, tests added, and recommended next agent ("You cannot delegate. Return to orchestrator with:" — .claude/agents/implementer.md:899; "[COMPLETE] / [BLOCKED] / [SECURITY_FLAG] / [NEEDS_DECOMPOSITION] / [NEEDS_DESIGN_REVIEW]" — .claude/agents/implementer.md:901).

## Invokes — required
- agent qa — .claude/agents/implementer.md:20
- agent critic — .claude/agents/implementer.md:20
- reference .claude/rules/canonical-source-mirror.md — .claude/agents/implementer.md:53
- doc AGENTS.md — .claude/agents/implementer.md:81
- doc .agents/AGENT-INSTRUCTIONS.md — .claude/agents/implementer.md:82
- doc .agents/CLAUDE.md — .claude/agents/implementer.md:83
- doc .agents/ARCHITECTURE.md — .claude/agents/implementer.md:85
- agent milestone-planner — .claude/agents/implementer.md:163
- agent code-simplifier — .claude/agents/implementer.md:502
- skill context-gather — .claude/agents/implementer.md:609
- agent security — .claude/agents/implementer.md:690
- agent orchestrator — .claude/agents/implementer.md:661
- agent analyst — .claude/agents/implementer.md:819
- agent architect — .claude/agents/implementer.md:819
- skill github — .claude/agents/implementer.md:859

## Invoked by — required
- command build — .claude/commands/build.md:63
- doc implementer — docs/workflow-commands.md:101
- doc implementer — README.md:401

## Concepts named — required, verbatim
- `implementer` — .claude/agents/implementer.md:2 — defined here
- `Commonality/Variability Analysis` — .claude/agents/implementer.md:3 — used here
- `CVA` — .claude/agents/implementer.md:3 — used here
- `bottom-up emergence model` — .claude/agents/implementer.md:3 — used here
- `executor` — .claude/agents/implementer.md:6 — defined here
- `isolation_required` — .claude/agents/implementer.md:8 — defined here
- `Autonomy Guardrail` — .claude/agents/implementer.md:14 — used here
- `Reviewer Asymmetry` — .claude/agents/implementer.md:18 — defined here
- `Evidence Standards` — .claude/agents/implementer.md:22 — defined here
- `four-level hierarchy` — .claude/agents/implementer.md:26 — defined here
- `Tool output from this session` — .claude/agents/implementer.md:28 — defined here
- `Memory or files read this session` — .claude/agents/implementer.md:29 — defined here
- `Web search` — .claude/agents/implementer.md:30 — defined here
- `Training knowledge` — .claude/agents/implementer.md:31 — defined here
- `mirror-claim rule` — .claude/agents/implementer.md:35 — defined here
- `canonical-source citation` — .claude/agents/implementer.md:35 — defined here
- `Mirror obligation` — .claude/agents/implementer.md:49 — defined here
- `confident incorrectness` — .claude/agents/implementer.md:57 — defined here
- `Plan Validation Protocol` — .claude/agents/implementer.md:102 — defined here
- `Core Behavior` — .claude/agents/implementer.md:117 — defined here
- `CWE-22` — .claude/agents/implementer.md:121 — used here
- `path traversal` — .claude/agents/implementer.md:121 — used here
- `CWE-78` — .claude/agents/implementer.md:121 — used here
- `command injection` — .claude/agents/implementer.md:121 — used here
- `Interaction Style` — .claude/agents/implementer.md:129 — defined here
- `SOLID` — .claude/agents/implementer.md:145 — used here
- `DRY` — .claude/agents/implementer.md:145 — used here
- `YAGNI` — .claude/agents/implementer.md:145 — used here
- `Core Mission` — .claude/agents/implementer.md:149 — defined here
- `Software Hierarchy of Needs` — .claude/agents/implementer.md:166 — defined here
- `Cohesion` — .claude/agents/implementer.md:170 — defined here
- `Coupling` — .claude/agents/implementer.md:170 — defined here
- `Encapsulation` — .claude/agents/implementer.md:170 — defined here
- `Testability` — .claude/agents/implementer.md:170 — defined here
- `Open-Closed` — .claude/agents/implementer.md:171 — used here
- `Encapsulate by Policy/Reveal by Need` — .claude/agents/implementer.md:171 — defined here
- `Separation of Concerns` — .claude/agents/implementer.md:171 — used here
- `Separate Use from Creation` — .claude/agents/implementer.md:171 — defined here
- `Coding Standards` — .claude/agents/implementer.md:172 — defined here
- `State Always Private` — .claude/agents/implementer.md:172 — defined here
- `Programming by Intention` — .claude/agents/implementer.md:172 — defined here
- `Encapsulate Constructors` — .claude/agents/implementer.md:172 — defined here
- `Strategy` — .claude/agents/implementer.md:173 — used here
- `Bridge` — .claude/agents/implementer.md:173 — used here
- `Adapter` — .claude/agents/implementer.md:173 — used here
- `Facade` — .claude/agents/implementer.md:173 — used here
- `Proxy` — .claude/agents/implementer.md:173 — used here
- `Decorator` — .claude/agents/implementer.md:173 — used here
- `Chain of Responsibility` — .claude/agents/implementer.md:173 — used here
- `Singleton` — .claude/agents/implementer.md:173 — used here
- `Abstract Factory` — .claude/agents/implementer.md:173 — used here
- `Template Method` — .claude/agents/implementer.md:173 — used here
- `Flyweight` — .claude/agents/implementer.md:173 — used here
- `Law of Demeter` — .claude/agents/implementer.md:178 — used here
- `Fail-fast` — .claude/agents/implementer.md:231 — defined here
- `No silent failures` — .claude/agents/implementer.md:233 — defined here
- `Retry with backoff` — .claude/agents/implementer.md:235 — defined here
- `Design Approaches` — .claude/agents/implementer.md:274 — defined here
- `Emergent` — .claude/agents/implementer.md:278 — defined here
- `Pattern-Oriented` — .claude/agents/implementer.md:280 — defined here
- `GoF Wisdom` — .claude/agents/implementer.md:282 — used here
- `Code Quality Standards` — .claude/agents/implementer.md:289 — defined here
- `Test rigor` — .claude/agents/implementer.md:299 — defined here
- `Close the Inverse` — .claude/agents/implementer.md:320 — defined here
- `Implementation Process` — .claude/agents/implementer.md:332 — defined here
- `Commit Discipline` — .claude/agents/implementer.md:346 — defined here
- `Conventional format` — .claude/agents/implementer.md:349 — used here
- `Impact Analysis Mode` — .claude/agents/implementer.md:354 — defined here
- `Analyze Code Impact` — .claude/agents/implementer.md:358 — defined here
- `Refactoring Boundaries` — .claude/agents/implementer.md:448 — defined here
- `Boy Scout Rule` — .claude/agents/implementer.md:470 — used here
- `Parallel Work Awareness` — .claude/agents/implementer.md:484 — defined here
- `Chesterton's Fence` — .claude/agents/implementer.md:495 — used here
- `Code Requirements` — .claude/agents/implementer.md:533 — defined here
- `Code Simplification` — .claude/agents/implementer.md:561 — defined here
- `Complexity Estimation` — .claude/agents/implementer.md:583 — defined here
- `Cone of Uncertainty` — .claude/agents/implementer.md:632 — used here
- `Security Flagging` — .claude/agents/implementer.md:679 — defined here
- `Self-Assessment Triggers` — .claude/agents/implementer.md:692 — defined here
- `Pre-PR Validation Gate` — .claude/agents/implementer.md:752 — defined here
- `Self-Critique Pass` — .claude/agents/implementer.md:764 — defined here
- `Flag Unresolved Risks` — .claude/agents/implementer.md:775 — defined here
- `Handoff Validation` — .claude/agents/implementer.md:803 — defined here
- `First Principles Algorithm` — .claude/agents/implementer.md:849 — used here
- `Degraded Mode Protocol` — .claude/agents/implementer.md:861 — defined here
- `Context Budget Management` — .claude/agents/implementer.md:880 — defined here
- `Checkpoint protocol` — .claude/agents/implementer.md:886 — defined here

## Structure
- Implementer Agent — .claude/agents/implementer.md:12
- Reviewer Asymmetry (Read First) — .claude/agents/implementer.md:18
- Evidence Standards (Read Before Writing Any Claim) — .claude/agents/implementer.md:22
- The four-level hierarchy — .claude/agents/implementer.md:26
- The mirror-claim rule (canonical-source citation) — .claude/agents/implementer.md:35
- Anti-pattern: "I recall that..." — .claude/agents/implementer.md:55
- What you owe the reviewer — .claude/agents/implementer.md:61
- BLOCKING: Read Project Documentation First — .claude/agents/implementer.md:70
- Plan Validation Protocol — .claude/agents/implementer.md:102
- Core Behavior — .claude/agents/implementer.md:117
- Interaction Style — .claude/agents/implementer.md:129
- Core Mission — .claude/agents/implementer.md:149
- Key Responsibilities — .claude/agents/implementer.md:153
- Software Hierarchy of Needs — .claude/agents/implementer.md:166
- Level 1: Qualities (diagnostic layer) — .claude/agents/implementer.md:176
- Error Handling Principles — .claude/agents/implementer.md:229
- Design Approaches — .claude/agents/implementer.md:274
- GoF Wisdom (Applied) — .claude/agents/implementer.md:282
- Code Quality Standards — .claude/agents/implementer.md:289
- Mirror Obligation: Close the Inverse (Before Writing a Fix) — .claude/agents/implementer.md:320
- Implementation Process — .claude/agents/implementer.md:332
- Commit Discipline — .claude/agents/implementer.md:346
- Impact Analysis Mode — .claude/agents/implementer.md:354
- Analyze Code Impact — .claude/agents/implementer.md:358
- Impact Analysis Deliverable — .claude/agents/implementer.md:368
- Refactoring Boundaries — .claude/agents/implementer.md:448
- When to Refactor (In Scope) — .claude/agents/implementer.md:450
- When NOT to Refactor (Out of Scope) — .claude/agents/implementer.md:456
- Decision Rule — .claude/agents/implementer.md:463
- Boy Scout Rule Application — .claude/agents/implementer.md:470
- Task Behaviors — .claude/agents/implementer.md:474
- Writing Code — .claude/agents/implementer.md:476
- Parallel Work Awareness — .claude/agents/implementer.md:484
- Reviewing Code — .claude/agents/implementer.md:504
- Reviewing PRs — .claude/agents/implementer.md:514
- Pair Programming — .claude/agents/implementer.md:526
- Code Requirements — .claude/agents/implementer.md:533
- Performance — .claude/agents/implementer.md:535
- Testing — .claude/agents/implementer.md:542
- Style — .claude/agents/implementer.md:550
- Code Simplification — .claude/agents/implementer.md:561
- Complexity Estimation — .claude/agents/implementer.md:583
- Guiding Questions — .claude/agents/implementer.md:597
- Before Estimating — .claude/agents/implementer.md:606
- Estimation Principles — .claude/agents/implementer.md:613
- Uncertainty Factors — .claude/agents/implementer.md:623
- The Cone of Uncertainty — .claude/agents/implementer.md:632
- Estimation Checklist — .claude/agents/implementer.md:646
- Communicating Estimates — .claude/agents/implementer.md:659
- Security Flagging — .claude/agents/implementer.md:679
- Self-Assessment Triggers — .claude/agents/implementer.md:692
- Flagging Process — .claude/agents/implementer.md:707
- Non-Security Completion — .claude/agents/implementer.md:740
- Pre-PR Validation Gate — .claude/agents/implementer.md:752
- Self-Critique Pass — .claude/agents/implementer.md:764
- Step 3: Flag Unresolved Risks — .claude/agents/implementer.md:775
- Required Checklist — .claude/agents/implementer.md:789
- Handoff Validation — .claude/agents/implementer.md:803
- Completion Handoff (to qa) — .claude/agents/implementer.md:807
- Blocker Handoff (to analyst/milestone-planner/architect) — .claude/agents/implementer.md:819
- Security-Flagged Completion Handoff — .claude/agents/implementer.md:829
- Validation Failure — .claude/agents/implementer.md:839
- Constraints — .claude/agents/implementer.md:847
- Tools — .claude/agents/implementer.md:855
- Degraded Mode Protocol — .claude/agents/implementer.md:861
- Context Budget Management — .claude/agents/implementer.md:880
- Handoff — .claude/agents/implementer.md:897

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/agents/implementer.md:872 · `search_memory.py` is referenced as a bare filename in the Degraded Mode Protocol table without its relative directory path (`.claude/skills/memory/scripts/search_memory.py`).
- `internal-contradiction` · .claude/agents/implementer.md:98 · The Success Definition requires answering four questions including architectural constraints from `.agents/ARCHITECTURE.md`, contradicting line 94 which instructs the agent to note its absence and proceed when `.agents/ARCHITECTURE.md` is missing.
- `cross-file-contradiction` · .claude/agents/implementer.md:98 · Line 98 mandates a four-part success definition including architectural constraints, whereas the shared template `templates/agents/implementer.shared.md:384` mandates only three parts ((a) project constraints, (b) Claude-specific requirements, and (c) binding ADRs).
- `cross-file-contradiction` · .claude/agents/implementer.md:299-316 · Retains the blocking test rigor checklist and coverage measurement block that was removed from `templates/agents/implementer.shared.md:303`.

## Observations
- Duplication ledger VARIANT V6: `.claude/agents/implementer.md` shares 94% of lines with `templates/agents/implementer.shared.md` (46,256 bytes vs 43,506 bytes, 7 diff hunks in ledger). The shared template adds VS Code/Copilot CLI toolsets and issue #4580 vendor portability notes, while `.claude/agents/implementer.md` preserves the test rigor block (lines 299-316) and degraded mode protocol (lines 861-879).
- Delegation boundary: Unlike the orchestrator, the implementer explicitly cannot delegate tasks ("You cannot delegate. Return to orchestrator with:" — .claude/agents/implementer.md:899), adhering to a single-tier worker architecture.
- Reviewer asymmetry: Enforces that implementer output is reviewed by fresh-context, adversarial reviewer agents (QA and Critic) to defeat confirmation bias inherent in same-context evaluation (".claude/agents/implementer.md:20").
- Rigorous evidence hierarchy: Mandates Level 1 session tool output over Level 4 training memory recall to eliminate "confident incorrectness" in docstrings and PR claims (".claude/agents/implementer.md:26-60").

## Context cost
46,256 bytes for `.claude/agents/implementer.md` (~11,564 tokens). When fully resolving mandatory pre-reading dependencies (root `AGENTS.md`, `.agents/AGENT-INSTRUCTIONS.md`, `.agents/CLAUDE.md`, `.claude/rules/canonical-source-mirror.md`, and binding ADRs), total initial context cost expands by ~100,000 bytes (~25,000 additional tokens).
