---
package: rjm
path: .claude/skills/planner/resources/default-conventions.md
type: skill
bytes: 3845
unit: inv-rjm-134
in_scope_via: .claude/skills/planner/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/planner/resources/default-conventions.md, sha256: 5dc8299234224e9fa75eb71f645a6272f1992c3b1c87eebf5cc83fa5089ffe72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/planner/resources/default-conventions.md

## Purpose — required, verbatim
> "These conventions apply when project documentation does not specify otherwise." — .claude/skills/planner/resources/default-conventions.md:3

## Design intent — required
Establishes a fallback taxonomy of software engineering and code structure conventions when project-level documentation is silent. It introduces a four-tier decision backing hierarchy (user-specified > doc-derived > default-derived > assumption) and two severity ratings (SHOULD_FIX and SUGGESTION). The document sets explicit numerical boundaries and heuristics for code smells (god objects, god functions, duplicate logic, dead code, test fragmentation) to guide quality reviews and decision audits.

## Phase — required
rjm:plan

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill resources/default-conventions.md — .claude/skills/planner/SKILL.md:277

## Concepts named — required, verbatim
- `Default Conventions` — .claude/skills/planner/resources/default-conventions.md:1 — defined here
- `Priority Hierarchy` — .claude/skills/planner/resources/default-conventions.md:5 — defined here
- `user-specified` — .claude/skills/planner/resources/default-conventions.md:11 — defined here
- `doc-derived` — .claude/skills/planner/resources/default-conventions.md:12 — defined here
- `default-derived` — .claude/skills/planner/resources/default-conventions.md:13 — defined here
- `assumption` — .claude/skills/planner/resources/default-conventions.md:14 — defined here
- `Severity Levels` — .claude/skills/planner/resources/default-conventions.md:16 — defined here
- `SHOULD_FIX` — .claude/skills/planner/resources/default-conventions.md:20 — defined here
- `SUGGESTION` — .claude/skills/planner/resources/default-conventions.md:21 — defined here
- `Structural Conventions` — .claude/skills/planner/resources/default-conventions.md:25 — defined here
- `God Object` — .claude/skills/planner/resources/default-conventions.md:28 — defined here
- `God Function` — .claude/skills/planner/resources/default-conventions.md:33 — defined here
- `Duplicate Logic` — .claude/skills/planner/resources/default-conventions.md:39 — defined here
- `Dead Code` — .claude/skills/planner/resources/default-conventions.md:44 — defined here
- `Inconsistent Error Handling` — .claude/skills/planner/resources/default-conventions.md:49 — defined here
- `File Organization Conventions` — .claude/skills/planner/resources/default-conventions.md:56 — defined here
- `Test Organization` — .claude/skills/planner/resources/default-conventions.md:59 — defined here
- `File Creation` — .claude/skills/planner/resources/default-conventions.md:65 — defined here
- `Testing Conventions` — .claude/skills/planner/resources/default-conventions.md:72 — defined here
- `Modernization Conventions` — .claude/skills/planner/resources/default-conventions.md:98 — defined here
- `Version Constraint Violation` — .claude/skills/planner/resources/default-conventions.md:101 — defined here
- `Modernization Opportunity` — .claude/skills/planner/resources/default-conventions.md:107 — defined here

## Structure
# Default Conventions — .claude/skills/planner/resources/default-conventions.md:1
## Priority Hierarchy — .claude/skills/planner/resources/default-conventions.md:5
## Severity Levels — .claude/skills/planner/resources/default-conventions.md:16
## Structural Conventions — .claude/skills/planner/resources/default-conventions.md:25
## File Organization Conventions — .claude/skills/planner/resources/default-conventions.md:56
## Testing Conventions — .claude/skills/planner/resources/default-conventions.md:72
## Modernization Conventions — .claude/skills/planner/resources/default-conventions.md:98

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Uses XML domain tags (`<default-conventions domain="...">`) to delimit domain rules, making them directly extractable and embeddable by automated parsing in `planner.py` or agent system prompts.

## Context cost
3845 bytes, approximately 950 tokens.
