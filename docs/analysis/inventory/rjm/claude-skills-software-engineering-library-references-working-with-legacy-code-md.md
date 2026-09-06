---
package: rjm
path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md
type: reference
bytes: 14009
unit: inv-rjm-171
in_scope_via: .claude/skills/software-engineering-library/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/software-engineering-library/references/working-with-legacy-code.md

## Purpose — required, verbatim
> "This rule encodes Michael Feathers' techniques from _Working Effectively with Legacy Code_. Feathers defines legacy code as any code without tests, regardless of age or quality. In ai-agents, the same risk applies to code that has tests but already failed once: a previous worker tried to change it and broke something. Treat both classes the same way." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:4

## Design intent — required
Encodes Michael Feathers' techniques from *Working Effectively with Legacy Code* adapted for AI coding agents modifying untested, aging, or regression-prone systems. Crucially extends the definition of legacy code to include code that already failed once under an automated or human worker in a "To Improve" fix cycle. It enforces a strict, protective safety discipline: write characterization tests to lock in current observed behavior before attempting edits, identify non-invasive seams and enabling points (object, link/import, build seams), apply dependency-breaking techniques (extract interface, parameterize constructor, introduce instance delegator, subclass and override, pull up dependency), and isolate modifications via sprout methods/classes or wrap methods/classes. It strictly forbids deleting failing tests to achieve green CI. Without this reference, agents tackling complex or unfamiliar codebases would perform broad, speculative refactorings, reverse test-before-edit discipline, break unstated contracts, and rationalize regressions as deliberate changes.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill software-engineering-library — .claude/skills/software-engineering-library/SKILL.md:29
- skill software-engineering-library — .claude/skills/software-engineering-library/SKILL.md:41

## Concepts named — required, verbatim
- `legacy code` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:4 — defined here
- `To Improve` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:14 — used here
- `auto-escalation ladder` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:14 — used here
- `Characterization test` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:24 — defined here
- `Seam` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:25 — defined here
- `Enabling point` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:26 — defined here
- `Sprout method or sprout class` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:27 — defined here
- `Wrap method or wrap class` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:28 — defined here
- `Dependency-breaking technique` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:29 — defined here
- `Step Order: Tests Before Edits` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:33 — defined here
- `Object seam` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:72 — defined here
- `Link or import seam` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:73 — defined here
- `Preprocessor or build seam` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:74 — defined here
- `Extract interface` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:126 — defined here
- `Parameterize constructor` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:127 — defined here
- `Introduce instance delegator` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:128 — defined here
- `Subclass and override` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:129 — defined here
- `Pull up dependency` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:130 — defined here
- `Never Delete Failing Tests To Make A Refactor Pass` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:140 — defined here
- `Quick Self-Review` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:162 — defined here

## Structure
- `# Working With Legacy Code` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:2
- `## When To Apply This Rule` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:8
- `## Core Vocabulary` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:20
- `## Step Order: Tests Before Edits` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:33
- `## Characterization Tests` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:46
- `## Seams` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:66
- `## Sprout Method And Sprout Class` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:84
- `## Wrap Method And Wrap Class` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:103
- `## Dependency-Breaking Techniques` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:122
- `## Never Delete Failing Tests To Make A Refactor Pass` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:140
- `## Boundaries With Existing Codebase` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:151
- `## Quick Self-Review` — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:162

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Pragmatic test discipline: Line 58 stresses "Test what the code does, not what the docstring says it does. Run the function with realistic inputs and write the actual output as the assertion."
- Explains the architectural distinction between Sprout and Wrap: Sprout isolates distinct new behavior into a single new line in legacy code, whereas Wrap intercepts calls before or after legacy code for cross-cutting concerns (logging, metrics, retries).
- Explicit anti-pattern warning in line 44: "The most common failure mode is reversing steps three and four. An agent confident in the change writes the new behavior first, runs the tests, and rationalizes the failures."
- Tight coupling to agent operational governance: Lines 14, 149, and 158 ground the workflow in the multi-tier auto-escalation ladder (junior -> medior -> escalated worker), mandating characterization tests around previous failure surfaces before attempting a new fix cycle.

## Context cost
14009 bytes (~3502 tokens). Pure reference document; loads nothing dynamically when read directly. When routed from `software-engineering-library/SKILL.md` (4840 bytes), combined context is 18849 bytes (~4712 tokens).
