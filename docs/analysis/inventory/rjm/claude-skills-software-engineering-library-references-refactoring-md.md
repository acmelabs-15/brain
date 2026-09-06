---
package: rjm
path: .claude/skills/software-engineering-library/references/refactoring.md
type: reference
bytes: 13191
unit: inv-rjm-170
in_scope_via: .claude/skills/software-engineering-library/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/software-engineering-library/references/refactoring.md

## Purpose — required, verbatim
> "This rule encodes the discipline from Martin Fowler's _Refactoring_. Use it when you change the structure of code without changing what it observably does, and when reviewers need to tell whether a change is a refactoring, a feature, or a bug fix in disguise." — .claude/skills/software-engineering-library/references/refactoring.md:4

## Design intent — required
Encodes Martin Fowler's refactoring discipline, strictly decoupling behavior-preserving structural transformations from feature additions and bug fixes ("two hats"). It mandates that each mechanical transformation (such as Extract Function, Inline Variable, or Move Method) be small, independently named, and followed immediately by passing tests, requiring characterization tests before modifying legacy code without test coverage. Furthermore, it establishes Git commit rules tailored to ai-agents (conventional commit prefixes, separate commits for refactorings and features, and per-PR commit budget awareness). Without it, automated and manual code changes frequently blend behavioral changes with structural cleanups, creating risky, unreviewable diffs and untracked regression risks.

## Phase — required
cross-phase

## Inputs — required
Source code targeted for restructuring, existing test suites, characterization test baselines, and Git pull request commit plans.

## Outputs — required
none

## Invokes — required
- reference enterprise-patterns.md — .claude/skills/software-engineering-library/references/refactoring.md:120

## Invoked by — required
- skill software-engineering-library — .claude/skills/software-engineering-library/SKILL.md:28

## Concepts named — required, verbatim
- `Refactoring` — .claude/skills/software-engineering-library/references/refactoring.md:4 — defined here
- `Behavior change` — .claude/skills/software-engineering-library/references/refactoring.md:13 — defined here
- `Code smell` — .claude/skills/software-engineering-library/references/refactoring.md:14 — defined here
- `Transformation` — .claude/skills/software-engineering-library/references/refactoring.md:15 — defined here
- `Extract Function` — .claude/skills/software-engineering-library/references/refactoring.md:15 — used here
- `Inline Variable` — .claude/skills/software-engineering-library/references/refactoring.md:15 — used here
- `Move Method` — .claude/skills/software-engineering-library/references/refactoring.md:15 — used here
- `Characterization test` — .claude/skills/software-engineering-library/references/refactoring.md:16 — defined here
- `Replace Conditional with Polymorphism` — .claude/skills/software-engineering-library/references/refactoring.md:25 — used here
- `Rule of Three` — .claude/skills/software-engineering-library/references/refactoring.md:35 — defined here
- `Preparatory refactoring` — .claude/skills/software-engineering-library/references/refactoring.md:36 — defined here
- `Comprehension refactoring` — .claude/skills/software-engineering-library/references/refactoring.md:37 — defined here
- `Litter-pickup` — .claude/skills/software-engineering-library/references/refactoring.md:38 — defined here
- `Planned refactoring` — .claude/skills/software-engineering-library/references/refactoring.md:39 — defined here
- `Long Function` — .claude/skills/software-engineering-library/references/refactoring.md:52 — defined here
- `Long Parameter List` — .claude/skills/software-engineering-library/references/refactoring.md:53 — defined here
- `Introduce Parameter Object` — .claude/skills/software-engineering-library/references/refactoring.md:53 — used here
- `Preserve Whole Object` — .claude/skills/software-engineering-library/references/refactoring.md:53 — used here
- `Large Class` — .claude/skills/software-engineering-library/references/refactoring.md:54 — defined here
- `Extract Class` — .claude/skills/software-engineering-library/references/refactoring.md:54 — used here
- `Duplicated Code` — .claude/skills/software-engineering-library/references/refactoring.md:55 — defined here
- `Pull Up Method` — .claude/skills/software-engineering-library/references/refactoring.md:55 — used here
- `Form Template Method` — .claude/skills/software-engineering-library/references/refactoring.md:55 — used here
- `Divergent Change` — .claude/skills/software-engineering-library/references/refactoring.md:56 — defined here
- `Shotgun Surgery` — .claude/skills/software-engineering-library/references/refactoring.md:57 — defined here
- `Feature Envy` — .claude/skills/software-engineering-library/references/refactoring.md:58 — defined here
- `Data Clumps` — .claude/skills/software-engineering-library/references/refactoring.md:59 — defined here
- `Primitive Obsession` — .claude/skills/software-engineering-library/references/refactoring.md:60 — defined here
- `Replace Primitive with Object` — .claude/skills/software-engineering-library/references/refactoring.md:60 — used here
- `Switch Statements` — .claude/skills/software-engineering-library/references/refactoring.md:61 — defined here
- `Repeated Conditionals` — .claude/skills/software-engineering-library/references/refactoring.md:62 — defined here
- `Mysterious Name` — .claude/skills/software-engineering-library/references/refactoring.md:63 — defined here
- `Rename` — .claude/skills/software-engineering-library/references/refactoring.md:63 — used here
- `Comments` — .claude/skills/software-engineering-library/references/refactoring.md:64 — defined here
- `Dead Code` — .claude/skills/software-engineering-library/references/refactoring.md:65 — defined here
- `Speculative Generality` — .claude/skills/software-engineering-library/references/refactoring.md:66 — defined here
- `Temporary Field` — .claude/skills/software-engineering-library/references/refactoring.md:67 — defined here
- `Message Chains` — .claude/skills/software-engineering-library/references/refactoring.md:68 — defined here
- `Law of Demeter` — .claude/skills/software-engineering-library/references/refactoring.md:68 — used here
- `Hide Delegate` — .claude/skills/software-engineering-library/references/refactoring.md:68 — used here

## Structure
Section headings in order (verbatim):
- `# Refactoring`
- `## Definitions`
- `## Core Discipline`
- `## When to Refactor`
- `## Code Smells`
- `## The Mechanics`
- `## Refactoring And Performance`
- `## Refactoring In Pull Requests`
- `## Anti-Patterns`
- `## Boundaries With Existing Codebase`
- `## Quick Self-Review`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- internal-contradiction · .claude/skills/software-engineering-library/references/refactoring.md:96, 116 · Line 96 asserts that PR commit budget enforces "blocking starts above the active limit", whereas line 116 describes the same budget rule as an advisory signal with "no hard cap, ADR-099".

## Observations
- Adapts Kent Beck / Martin Fowler refactoring discipline specifically for LLM agents: mandates naming specific transformations, enforcing green test suites between every step, and writing characterization tests before touching uncovered legacy code.
- Establishes a strict "two hats" policy at the Git level, requiring separate commits with conventional prefixes (`refactor:` vs `feat:`/`fix:`) and prohibiting mixing structural refactoring with behavioral changes.
- Connects refactoring steps directly to project governance: PR descriptions must name refactoring transformations used, and each step is constrained by per-PR commit budgets and atomic commit limits (≤5 files per commit).

## Context cost
13191 bytes, ~3298 tokens. Loads enterprise-patterns.md (11327 bytes) when cross-referencing persistence boundaries. Total context ~24518 bytes (~6128 tokens).
