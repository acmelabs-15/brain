---
package: rjm
path: .claude/skills/analyze/references/design-tell-dont-ask.md
type: reference
bytes: 2271
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-tell-dont-ask.md, sha256: 8ad4df76c0b11537efc5a3ab2c560a719f6a321511778f1307c3ef198d61c00a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/analyze/references/design-tell-dont-ask.md

## Purpose — required, verbatim
> "Tell objects what to do, don't ask them for data and act on it yourself." — .claude/skills/analyze/references/design-tell-dont-ask.md:9

## Design intent — required
Guidance on applying the "Tell, Don't Ask" object-oriented design principle during code quality audits. It explains why procedural code that queries object state to make decisions external to the object violates encapsulation and increases coupling. It equips analyzing agents with concrete code patterns to flag common violations (feature envy, getter chains violating the Law of Demeter) across validation, state change, calculation, and formatting, while explicitly outlining legitimate exceptions (DTOs, Value Objects, reporting/display, cross-cutting concerns like logging).

## Phase — required
cross-phase

## Inputs — required
- Codebase source code exhibiting procedural getter-chains or object interactions (.claude/skills/analyze/references/design-tell-dont-ask.md:20-28, 45-62)

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill analyze — .claude/skills/analyze/SKILL.md:67

## Concepts named — required, verbatim
- `Tell, Don't Ask` — .claude/skills/analyze/references/design-tell-dont-ask.md:7 — defined here | used here
- `Core Insight` — .claude/skills/analyze/references/design-tell-dont-ask.md:13 — defined here | used here
- `Ask vs Tell` — .claude/skills/analyze/references/design-tell-dont-ask.md:17 — defined here | used here
- `Common Violations to Detect` — .claude/skills/analyze/references/design-tell-dont-ask.md:39 — defined here | used here
- `Feature Envy` — .claude/skills/analyze/references/design-tell-dont-ask.md:41 — defined here | used here
- `Getter Chains` — .claude/skills/analyze/references/design-tell-dont-ask.md:54 — defined here | used here
- `Law of Demeter` — .claude/skills/analyze/references/design-tell-dont-ask.md:54 — defined here | used here
- `Detection Checklist for Analysis` — .claude/skills/analyze/references/design-tell-dont-ask.md:64 — defined here | used here
- `Data Transfer Objects` — .claude/skills/analyze/references/design-tell-dont-ask.md:75 — defined here | used here
- `Value Objects` — .claude/skills/analyze/references/design-tell-dont-ask.md:76 — defined here | used here
- `Related Principles` — .claude/skills/analyze/references/design-tell-dont-ask.md:80 — defined here | used here
- `SRP` — .claude/skills/analyze/references/design-tell-dont-ask.md:83 — defined here | used here
- `Encapsulation` — .claude/skills/analyze/references/design-tell-dont-ask.md:84 — defined here | used here

## Structure
- `# Tell, Don't Ask` — .claude/skills/analyze/references/design-tell-dont-ask.md:7
- `## Core Insight` — .claude/skills/analyze/references/design-tell-dont-ask.md:13
- `## Ask vs Tell` — .claude/skills/analyze/references/design-tell-dont-ask.md:17
- `## Why It Matters` — .claude/skills/analyze/references/design-tell-dont-ask.md:30
- `## Common Violations to Detect` — .claude/skills/analyze/references/design-tell-dont-ask.md:39
- `### Feature Envy` — .claude/skills/analyze/references/design-tell-dont-ask.md:41
- `### Getter Chains (Law of Demeter violations)` — .claude/skills/analyze/references/design-tell-dont-ask.md:54
- `## Detection Checklist for Analysis` — .claude/skills/analyze/references/design-tell-dont-ask.md:64
- `## When the Rule Does Not Apply` — .claude/skills/analyze/references/design-tell-dont-ask.md:73
- `## Related Principles` — .claude/skills/analyze/references/design-tell-dont-ask.md:80

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/analyze/references/design-tell-dont-ask.md:2 · frontmatter `source:` references non-existent path `wiki/concepts/Design Principles/Tell Dont Ask.md`.

## Observations
Includes clear C# code examples illustrating procedural ASK vs object-oriented TELL. Provides a concrete 4-row detection checklist for validation, state change, calculation, and formatting patterns, along with boundary definitions for when the rule should not apply (DTOs, Value Objects).

## Context cost
2271 bytes, loads nothing further (0 bytes). Approximately 570 tokens.
