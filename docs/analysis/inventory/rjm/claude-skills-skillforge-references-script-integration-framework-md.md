---
package: rjm
path: .claude/skills/skillforge/references/script-integration-framework.md
type: reference
bytes: 17457
unit: inv-rjm-160
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/script-integration-framework.md

## Purpose — required, verbatim
> "Scripts transform skills from documentation-only guides into executable, verifiable systems. This framework provides decision criteria for when to create scripts, how to integrate them effectively, and patterns for making skills autonomous and self-verifying." — .claude/skills/skillforge/references/script-integration-framework.md:5

## Design intent — required
Establishes the architectural framework, decision models, and implementation patterns for integrating executable scripts into agentic skills. It provides a formal decision tree and quick decision matrix to determine when deterministic automation is necessary versus when prose instructions suffice. It defines the 7 standard script categories (Validation, State Management, Generation, Transformation, Integration, Visualization, Calculation), sets language selection rules (Python as the default, with Bash, Go, and Node.js for specialized constraints), and documents 5 core agentic script patterns (Self-Verification, Error Recovery, State Persistence, Structured Output, Graceful Degradation). It also specifies how scripts integrate with Claude Code hooks (`PreToolUse`, `PostToolUse`, `Stop`) via environment variables (`$TOOL_INPUT`, `$TOOL_OUTPUT`) to create automated execution gates. Without this framework, skill authors would create ad-hoc, brittle scripts lacking standardized exit codes, self-verification, or error recovery, or fail to automate repetitive tasks, resulting in skills that cannot operate autonomously or reliably.

## Phase — required
rjm:Phase 3: Generation

## Inputs — required
Operational requirements, automation opportunities identified by the Automation Lens in Phase 1, and tool use events via hooks.

## Outputs — required
Script specifications (XML `<script>` declarations for Phase 2), script architecture decisions (category, language, patterns), hook configuration declarations for skill frontmatter, and standard exit codes / JSON data for tool orchestration.

## Invokes — required
- reference script-patterns-catalog.md — .claude/skills/skillforge/references/script-integration-framework.md:563
- reference regression-questions.md — .claude/skills/skillforge/references/script-integration-framework.md:564
- reference evolution-scoring.md — .claude/skills/skillforge/references/script-integration-framework.md:565

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:184
- skill skillforge — .claude/skills/skillforge/SKILL.md:289
- skill skillforge — .claude/skills/skillforge/SKILL.md:307
- reference regression-questions.md — .claude/skills/skillforge/references/regression-questions.md:200

## Concepts named — required, verbatim
- `Script Integration Framework` — .claude/skills/skillforge/references/script-integration-framework.md:1 — defined here
- `Decision Tree: Script vs No Script` — .claude/skills/skillforge/references/script-integration-framework.md:25 — defined here
- `Quick Decision Matrix` — .claude/skills/skillforge/references/script-integration-framework.md:56 — defined here
- `Script Categories` — .claude/skills/skillforge/references/script-integration-framework.md:71 — defined here
- `Validation` — .claude/skills/skillforge/references/script-integration-framework.md:77 — defined here
- `State Management` — .claude/skills/skillforge/references/script-integration-framework.md:78 — defined here
- `Generation` — .claude/skills/skillforge/references/script-integration-framework.md:79 — defined here
- `Transformation` — .claude/skills/skillforge/references/script-integration-framework.md:80 — defined here
- `Integration` — .claude/skills/skillforge/references/script-integration-framework.md:81 — defined here
- `Visualization` — .claude/skills/skillforge/references/script-integration-framework.md:82 — defined here
- `Calculation` — .claude/skills/skillforge/references/script-integration-framework.md:83 — defined here
- `Agentic Script Patterns` — .claude/skills/skillforge/references/script-integration-framework.md:148 — defined here
- `Self-Verification` — .claude/skills/skillforge/references/script-integration-framework.md:152 — defined here
- `Error Recovery` — .claude/skills/skillforge/references/script-integration-framework.md:175 — defined here
- `State Persistence` — .claude/skills/skillforge/references/script-integration-framework.md:198 — defined here
- `Structured Output` — .claude/skills/skillforge/references/script-integration-framework.md:227 — defined here
- `Graceful Degradation` — .claude/skills/skillforge/references/script-integration-framework.md:252 — defined here
- `Automation Lens` — .claude/skills/skillforge/references/script-integration-framework.md:278 — used here
- `Integration Patterns` — .claude/skills/skillforge/references/script-integration-framework.md:325 — defined here
- `Script Output Standards` — .claude/skills/skillforge/references/script-integration-framework.md:384 — defined here
- `Agentic Capability Checklist` — .claude/skills/skillforge/references/script-integration-framework.md:421 — defined here
- `Hooks Integration` — .claude/skills/skillforge/references/script-integration-framework.md:436 — defined here
- `PreToolUse` — .claude/skills/skillforge/references/script-integration-framework.md:457 — used here
- `PostToolUse` — .claude/skills/skillforge/references/script-integration-framework.md:462 — used here

## Structure
- `# Script Integration Framework` — .claude/skills/skillforge/references/script-integration-framework.md:1
- `## Overview` — .claude/skills/skillforge/references/script-integration-framework.md:9
- `### Why Scripts Matter for Skills` — .claude/skills/skillforge/references/script-integration-framework.md:11
- `## Decision Tree: Script vs No Script` — .claude/skills/skillforge/references/script-integration-framework.md:25
- `### Primary Decision` — .claude/skills/skillforge/references/script-integration-framework.md:27
- `### Quick Decision Matrix` — .claude/skills/skillforge/references/script-integration-framework.md:56
- `## Script Categories` — .claude/skills/skillforge/references/script-integration-framework.md:71
- `### The 7 Script Types` — .claude/skills/skillforge/references/script-integration-framework.md:73
- `### Category Selection Flow` — .claude/skills/skillforge/references/script-integration-framework.md:85
- `## Language Selection` — .claude/skills/skillforge/references/script-integration-framework.md:114
- `### Decision Guide` — .claude/skills/skillforge/references/script-integration-framework.md:116
- `### Default: Python` — .claude/skills/skillforge/references/script-integration-framework.md:125
- `### When to Consider Alternatives` — .claude/skills/skillforge/references/script-integration-framework.md:137
- `## Agentic Script Patterns` — .claude/skills/skillforge/references/script-integration-framework.md:148
- `### Pattern 1: Self-Verification` — .claude/skills/skillforge/references/script-integration-framework.md:152
- `### Pattern 2: Error Recovery` — .claude/skills/skillforge/references/script-integration-framework.md:175
- `### Pattern 3: State Persistence` — .claude/skills/skillforge/references/script-integration-framework.md:198
- `### Pattern 4: Structured Output` — .claude/skills/skillforge/references/script-integration-framework.md:227
- `### Pattern 5: Graceful Degradation` — .claude/skills/skillforge/references/script-integration-framework.md:252
- `## Script Discovery Process (Phase 1)` — .claude/skills/skillforge/references/script-integration-framework.md:276
- `### Automation Lens Questions` — .claude/skills/skillforge/references/script-integration-framework.md:280
- `### Research Existing Scripts` — .claude/skills/skillforge/references/script-integration-framework.md:293
- `### Script Decision Documentation` — .claude/skills/skillforge/references/script-integration-framework.md:309
- `## Integration Patterns` — .claude/skills/skillforge/references/script-integration-framework.md:325
- `### How Scripts Are Called from Skills` — .claude/skills/skillforge/references/script-integration-framework.md:327
- `### Pattern 1: Direct Invocation` — .claude/skills/skillforge/references/script-integration-framework.md:329
- `### Pattern 2: Conditional Invocation` — .claude/skills/skillforge/references/script-integration-framework.md:345
- `### Pattern 3: Piped Processing` — .claude/skills/skillforge/references/script-integration-framework.md:361
- `### Pattern 4: Subcommand Invocation` — .claude/skills/skillforge/references/script-integration-framework.md:369
- `### Script Output Standards` — .claude/skills/skillforge/references/script-integration-framework.md:384
- `### Documentation Requirements` — .claude/skills/skillforge/references/script-integration-framework.md:396
- `## Agentic Capability Checklist` — .claude/skills/skillforge/references/script-integration-framework.md:421
- `## Hooks Integration` — .claude/skills/skillforge/references/script-integration-framework.md:436
- `### When to Use Hooks with Scripts` — .claude/skills/skillforge/references/script-integration-framework.md:440
- `### Hook + Script Integration Pattern` — .claude/skills/skillforge/references/script-integration-framework.md:449
- `### Hook Script Template` — .claude/skills/skillforge/references/script-integration-framework.md:480
- `### Agentic Capability Enhancement` — .claude/skills/skillforge/references/script-integration-framework.md:523
- `## Anti-Patterns` — .claude/skills/skillforge/references/script-integration-framework.md:546
- `## Related References` — .claude/skills/skillforge/references/script-integration-framework.md:561

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Explicitly establishes Python as the default scripting language for skills, restricting Bash to simple glue (<30 lines), Go to performance-critical binaries (<10ms startup), and Node.js to npm-heavy tooling.
- Provides concrete hook integration patterns using `PreToolUse` and `PostToolUse` with `$TOOL_INPUT` and `$TOOL_OUTPUT` environment variables rather than command-line string interpolation to prevent injection.
- Emphasizes standard exit codes (0 for success, 1 for general failure, 2 for invalid args, 10 for validation failure) and structured JSON outputs via `--json` flag to enable headless script chaining.

## Context cost
17457 bytes (~4364 tokens). When loading referenced files `script-patterns-catalog.md` (21550 bytes), `regression-questions.md` (11227 bytes), and `evolution-scoring.md` (8675 bytes), total context cost is ~58909 bytes (~14727 tokens).
