---
package: rjm
path: .claude/skills/skillforge/references/script-patterns-catalog.md
type: reference
bytes: 21550
unit: inv-rjm-161
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-patterns-catalog.md, sha256: ac036d192b627a7bda2c87286360e16e693123d268f4af6aacc98c5ea7a21733}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/script-patterns-catalog.md

## Purpose — required, verbatim
> "Standard Python patterns for skill scripts, derived from successful implementations across the ecosystem. These patterns ensure consistency, reliability, and agentic capability." — .claude/skills/skillforge/references/script-patterns-catalog.md:3

## Design intent — required
Provides a catalog of standard, reusable Python architecture patterns and starter templates for deterministic scripts within agentic skills. It standardizes operational consistency and reliability across nine core patterns: structured status reporting (Result dataclass), multi-check validation (ValidationResult), modular CLI execution (Argparse with subcommands and simple Argparse), session-persistent state (atomic JSON caching), resilient dependency degradation (graceful fallback for third-party libraries), process interoperability (standardized ExitCode conventions), execution observability (ASCII progress visualization), and autonomous reliability (self-verification wrappers). It also provides full boilerplate templates for validation, state tracking, and artifact generation scripts. Without it, skill authors and autonomous generators would produce inconsistent, brittle, or error-prone scripts lacking proper error handling, atomic writes, or predictable exit codes.

## Phase — required
rjm:Phase 3: Generation

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- reference script-integration-framework.md — .claude/skills/skillforge/references/script-patterns-catalog.md:830
- template script-template.py — .claude/skills/skillforge/references/script-patterns-catalog.md:831

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:185
- skill skillforge — .claude/skills/skillforge/SKILL.md:289
- skill skillforge — .claude/skills/skillforge/SKILL.md:308
- reference regression-questions.md — .claude/skills/skillforge/references/regression-questions.md:200
- reference script-integration-framework.md — .claude/skills/skillforge/references/script-integration-framework.md:563
- template skill-spec-template.xml — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:191
- doc TRANSFORMATION_NOTES.md — .claude/skills/skillforge/TRANSFORMATION_NOTES.md:219

## Concepts named — required, verbatim
- `Result Dataclass` — .claude/skills/skillforge/references/script-patterns-catalog.md:9 — defined here
- `Result` — .claude/skills/skillforge/references/script-patterns-catalog.md:19 — defined here
- `ValidationResult Class` — .claude/skills/skillforge/references/script-patterns-catalog.md:74 — defined here
- `ValidationResult` — .claude/skills/skillforge/references/script-patterns-catalog.md:83 — defined here
- `Argparse with Subcommands` — .claude/skills/skillforge/references/script-patterns-catalog.md:171 — defined here
- `Simple Argparse` — .claude/skills/skillforge/references/script-patterns-catalog.md:245 — defined here
- `JSON State Persistence` — .claude/skills/skillforge/references/script-patterns-catalog.md:311 — defined here
- `Graceful Dependency Fallback` — .claude/skills/skillforge/references/script-patterns-catalog.md:380 — defined here
- `Exit Code Conventions` — .claude/skills/skillforge/references/script-patterns-catalog.md:443 — defined here
- `ExitCode` — .claude/skills/skillforge/references/script-patterns-catalog.md:451 — defined here
- `Progress Visualization` — .claude/skills/skillforge/references/script-patterns-catalog.md:490 — defined here
- `Self-Verification` — .claude/skills/skillforge/references/script-patterns-catalog.md:556 — defined here
- `Validation Script Template` — .claude/skills/skillforge/references/script-patterns-catalog.md:628 — defined here
- `State Management Script Template` — .claude/skills/skillforge/references/script-patterns-catalog.md:677 — defined here
- `Generation Script Template` — .claude/skills/skillforge/references/script-patterns-catalog.md:738 — defined here
- `Quick Reference` — .claude/skills/skillforge/references/script-patterns-catalog.md:812 — defined here
- `Script Integration Framework` — .claude/skills/skillforge/references/script-patterns-catalog.md:830 — used here
- `Script Template` — .claude/skills/skillforge/references/script-patterns-catalog.md:831 — used here

## Structure
- `# Script Patterns Catalog` — .claude/skills/skillforge/references/script-patterns-catalog.md:1
- `## Core Patterns` — .claude/skills/skillforge/references/script-patterns-catalog.md:7
- `### Pattern 1: Result Dataclass` — .claude/skills/skillforge/references/script-patterns-catalog.md:9
- `### Pattern 2: ValidationResult Class` — .claude/skills/skillforge/references/script-patterns-catalog.md:74
- `### Pattern 3: Argparse with Subcommands` — .claude/skills/skillforge/references/script-patterns-catalog.md:171
- `### Pattern 4: Simple Argparse` — .claude/skills/skillforge/references/script-patterns-catalog.md:245
- `### Pattern 5: JSON State Persistence` — .claude/skills/skillforge/references/script-patterns-catalog.md:311
- `### Pattern 6: Graceful Dependency Fallback` — .claude/skills/skillforge/references/script-patterns-catalog.md:380
- `### Pattern 7: Exit Code Conventions` — .claude/skills/skillforge/references/script-patterns-catalog.md:443
- `### Pattern 8: Progress Visualization` — .claude/skills/skillforge/references/script-patterns-catalog.md:490
- `### Pattern 9: Self-Verification` — .claude/skills/skillforge/references/script-patterns-catalog.md:556
- `## Category Templates` — .claude/skills/skillforge/references/script-patterns-catalog.md:626
- `### Validation Script Template` — .claude/skills/skillforge/references/script-patterns-catalog.md:628
- `### State Management Script Template` — .claude/skills/skillforge/references/script-patterns-catalog.md:677
- `### Generation Script Template` — .claude/skills/skillforge/references/script-patterns-catalog.md:738
- `## Quick Reference` — .claude/skills/skillforge/references/script-patterns-catalog.md:812
- `## Related References` — .claude/skills/skillforge/references/script-patterns-catalog.md:828

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Provides 9 robust Python design patterns specifically tuned for autonomous LLM-driven skill execution and automated verification.
- Enforces self-contained, standard-library-first implementations (using `dataclasses`, `argparse`, `json`, `pathlib`, `enum`), with explicit graceful fallback mechanisms when optional dependencies like `PyYAML` or `rich` are unavailable.
- Defines an integer enumeration `ExitCode` taxonomy (0=SUCCESS, 1=GENERAL_ERROR, 2=INVALID_ARGUMENTS, 3=FILE_NOT_FOUND, 4=PERMISSION_DENIED, 10=VALIDATION_FAILED, 11=VERIFICATION_FAILED, 20=DEPENDENCY_ERROR, 21=NETWORK_ERROR, 30=TIMEOUT) to standardize script chaining and subprocess failure diagnostics.
- Implements atomic file writes for state persistence using temporary files (`.json.tmp` -> rename) to avoid corruption during interruption.

## Context cost
21,550 bytes (832 lines, ~5,388 tokens). When invoked with its referenced dependencies (`script-integration-framework.md` at 17,457 bytes and `script-template.py` at 8,733 bytes), total context payload is 47,740 bytes (~11,935 tokens).
