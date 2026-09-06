---
package: rjm
path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md
type: reference
bytes: 14362
unit: inv-rjm-170
in_scope_via: .claude/skills/software-engineering-library/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/software-engineering-library/references/philosophy-of-software-design.md

## Purpose — required, verbatim
> "This rule encodes the design heuristics from John Ousterhout's _A Philosophy of Software Design_ that fit ai-agents best. Use it when you create a new agent capability, tool, skill, plugin seam, or any module whose interface other code depends on." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:4

## Design intent — required
Encodes John Ousterhout's modular design heuristics—principally the deep-vs-shallow module test, information hiding, cognitive load reduction, and defining errors out of existence—specifically tailored for agent tools, prompt interfaces, and plugin extension seams. It instructs developers to minimize interface surface while maximizing internal functionality, pull complexity downward into modules rather than pushing it onto callers, and apply a "Design It Twice" requirement for public contracts. Without this reference, agent tool signatures, prompt schemas, and plugin extension seams risk shallow abstraction layers, high callsite cognitive load, leaked implementation flags, and brittle change amplification across orchestrator boundaries.

## Phase — required
cross-phase

## Inputs — required
Agent capability designs, tool signatures, skill entry points, prompt interface specifications, plugin extension seams, and refactoring proposals.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill software-engineering-library — .claude/skills/software-engineering-library/SKILL.md:25

## Concepts named — required, verbatim
- `A Philosophy of Software Design` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:4 — used here
- `deep-vs-shallow module test` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:6 — defined here
- `Complexity` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:12 — defined here
- `Module` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:13 — defined here
- `Interface` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:14 — defined here
- `Deep module` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:15 — defined here
- `Shallow module` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:16 — defined here
- `Information hiding` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:17 — defined here
- `Information leakage` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:18 — defined here
- `Cognitive load` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:19 — defined here
- `Strategic programming` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:20 — defined here
- `tactical` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:20 — defined here
- `Change amplification` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:26 — defined here
- `Unknown unknowns` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:28 — defined here
- `Temporal decomposition` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:68 — used here
- `Pass-through methods` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:69 — used here
- `Different Layer, Different Abstraction` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:73 — defined here
- `Pull Complexity Downward` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:83 — defined here
- `Define Errors Out of Existence` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:99 — defined here
- `Design It Twice` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:117 — defined here
- `Shallow class` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:172 — defined here
- `Conjoined methods` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:173 — defined here
- `Pass-through method` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:174 — defined here
- `Configuration soup` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:175 — defined here
- `Comment as crutch` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:176 — defined here
- `Premature abstraction` — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:177 — defined here

## Structure
Section headings in order (verbatim):
- `# Philosophy of Software Design`
- `## Core Vocabulary`
- `## Symptoms of Complexity`
- `## Deep Modules`
- `## Information Hiding and Leakage`
- `## Different Layer, Different Abstraction`
- `## Pull Complexity Downward`
- `## Define Errors Out of Existence`
- `## Design It Twice`
- `## Comments Describe What Code Cannot`
- `## Modify Existing Code Consistently`
- `## Strategic vs Tactical`
- `## Anti-Patterns`
- `## Boundaries with Existing Codebase`
- `## Quick Self-Review`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Directly translates software design philosophy to prompt engineering: views agent prompt inputs as interface surface area, mandating fewer, wider, well-named parameters to bound context overhead and caller cognitive load.
- Recommends defining errors out of existence via idempotent operations at the boundary of agent executions, retries, and external tool invocations.
- Formulates a concrete PR protocol requiring authors of new public agent seams or tools to capture two distinct designs and their trade-offs in PR descriptions.

## Context cost
14362 bytes, ~3590 tokens. Isolated reference loading 0 additional files.
