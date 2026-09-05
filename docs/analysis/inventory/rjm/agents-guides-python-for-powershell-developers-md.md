---
package: rjm
path: .agents/guides/python-for-powershell-developers.md
type: agent
bytes: 10482
unit: inv-rjm-56
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/guides/python-for-powershell-developers.md, sha256: f2d71106f74fb6e3c542e1154097ec1f81c8b08a58e35d541489901b2b1f7f49}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/guides/python-for-powershell-developers.md

## Purpose — required, verbatim
> "This guide provides a side-by-side comparison of PowerShell and Python syntax to help developers migrate existing scripts. The examples follow the coding standards in `pyproject.toml`." — .agents/guides/python-for-powershell-developers.md:11

## Design intent — required
Provides a Rosetta Stone guide mapping PowerShell language constructs, cmdlets, error handling patterns, and testing conventions to Python equivalents. Created following ADR-042 to facilitate repository-wide migration from PowerShell (.ps1/.psm1) to Python, ensuring agents and human developers write idiomatic Python code conforming to repository standards in pyproject.toml without introducing syntax translation errors.

## Phase — required
none

## Inputs — required
- "pyproject.toml" — .agents/guides/python-for-powershell-developers.md:11, 513
- "ADR-042 Python Migration Strategy" — .agents/guides/python-for-powershell-developers.md:3
- PowerShell scripts being migrated to Python (.ps1, .psm1)

## Outputs — required
none

## Invokes — required
- doc ADR-042-python-migration-strategy.md — .agents/guides/python-for-powershell-developers.md:510
- doc python-cicd-patterns.md — .agents/guides/python-for-powershell-developers.md:511
- doc python-security-checklist.md — .agents/guides/python-for-powershell-developers.md:512
- file pyproject.toml — .agents/guides/python-for-powershell-developers.md:513

## Invoked by — required
- script scripts/AGENTS.md — scripts/AGENTS.md:21

## Concepts named — required, verbatim
- `Python` — .agents/guides/python-for-powershell-developers.md:1 — used here
- `PowerShell` — .agents/guides/python-for-powershell-developers.md:1 — used here
- `ADR-042` — .agents/guides/python-for-powershell-developers.md:3, 510 — used here
- `Python Migration Strategy` — .agents/guides/python-for-powershell-developers.md:3, 510 — used here
- `pyproject.toml` — .agents/guides/python-for-powershell-developers.md:11, 513 — used here
- `Pester` — .agents/guides/python-for-powershell-developers.md:376 — used here
- `pytest` — .agents/guides/python-for-powershell-developers.md:391 — used here
- `Python CI/CD Patterns` — .agents/guides/python-for-powershell-developers.md:511 — used here
- `Python Security Checklist` — .agents/guides/python-for-powershell-developers.md:512 — used here

## Structure
- `## Overview` — .agents/guides/python-for-powershell-developers.md:9
- `## Variables and Types` — .agents/guides/python-for-powershell-developers.md:15
- `## Functions` — .agents/guides/python-for-powershell-developers.md:30
- `### PowerShell` — .agents/guides/python-for-powershell-developers.md:32
- `### Python` — .agents/guides/python-for-powershell-developers.md:50
- `## Control Flow` — .agents/guides/python-for-powershell-developers.md:72
- `### If/Else` — .agents/guides/python-for-powershell-developers.md:74
- `### PowerShell` — .agents/guides/python-for-powershell-developers.md:90
- `### Python` — .agents/guides/python-for-powershell-developers.md:104
- `## Loops` — .agents/guides/python-for-powershell-developers.md:117
- `### ForEach` — .agents/guides/python-for-powershell-developers.md:119
- `### PowerShell` — .agents/guides/python-for-powershell-developers.md:126
- `### Python` — .agents/guides/python-for-powershell-developers.md:137
- `### For (Index-based)` — .agents/guides/python-for-powershell-developers.md:147
- `### While` — .agents/guides/python-for-powershell-developers.md:153
- `## Error Handling` — .agents/guides/python-for-powershell-developers.md:161
- `### PowerShell` — .agents/guides/python-for-powershell-developers.md:163
- `### Python` — .agents/guides/python-for-powershell-developers.md:182
- `## File Operations` — .agents/guides/python-for-powershell-developers.md:199
- `### PowerShell` — .agents/guides/python-for-powershell-developers.md:216
- `### Python` — .agents/guides/python-for-powershell-developers.md:224
- `## JSON Operations` — .agents/guides/python-for-powershell-developers.md:238
- `## String Operations` — .agents/guides/python-for-powershell-developers.md:248
- `## Collections` — .agents/guides/python-for-powershell-developers.md:267
- `### Arrays/Lists` — .agents/guides/python-for-powershell-developers.md:269
- `### Hashtables/Dictionaries` — .agents/guides/python-for-powershell-developers.md:285
- `## Running External Commands` — .agents/guides/python-for-powershell-developers.md:299
- `### PowerShell` — .agents/guides/python-for-powershell-developers.md:301
- `### Python` — .agents/guides/python-for-powershell-developers.md:311
- `## Command-Line Arguments` — .agents/guides/python-for-powershell-developers.md:330
- `### PowerShell` — .agents/guides/python-for-powershell-developers.md:332
- `### Python` — .agents/guides/python-for-powershell-developers.md:345
- `## Testing` — .agents/guides/python-for-powershell-developers.md:374
- `### Pester (PowerShell)` — .agents/guides/python-for-powershell-developers.md:376
- `### pytest (Python)` — .agents/guides/python-for-powershell-developers.md:391
- `## Common Patterns` — .agents/guides/python-for-powershell-developers.md:412
- `### Null Coalescing` — .agents/guides/python-for-powershell-developers.md:414
- `### Ternary Operator` — .agents/guides/python-for-powershell-developers.md:421
- `### Pipeline to Comprehension` — .agents/guides/python-for-powershell-developers.md:427
- `## Script Template` — .agents/guides/python-for-powershell-developers.md:437
- `### PowerShell` — .agents/guides/python-for-powershell-developers.md:439
- `### Python` — .agents/guides/python-for-powershell-developers.md:463
- `## References` — .agents/guides/python-for-powershell-developers.md:508

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- internal-contradiction: `test_get_user_name_raises_on_empty` — .agents/guides/python-for-powershell-developers.md:404 — test asserts ValueError on empty input, but get_user_name implementation at line 53 does not validate input and returns "user_".

## Observations
Directly implements developer education following ADR-042's decision to migrate from PowerShell to Python. Covers essential migration patterns including type hints, list comprehensions instead of pipeline filtering, subprocess.run returncode handling instead of $LASTEXITCODE, and argparse CLI parsing instead of param blocks.

## Context cost
10482 bytes, approximately 2500 tokens.
