---
package: rjm
path: .claude/skills/analyze/references/design-tell-dont-ask.md
type: reference
bytes: 2271
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/analyze/references/design-tell-dont-ask.md, sha256: 8ad4df76c0b11537efc5a3ab2c560a719f6a321511778f1307c3ef198d61c00a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/analyze/references/design-tell-dont-ask.md

## Purpose — required, verbatim
> "Tell objects what to do, don't ask them for data and act on it yourself." — .claude/skills/analyze/references/design-tell-dont-ask.md:9

## Design intent — required
Provides detection heuristics and concrete code patterns for identifying procedural "Ask" anti-patterns, feature envy, and Law of Demeter violations during codebase analysis. Emphasizes keeping business logic co-located with encapsulated data, while clearly demarcating valid exceptions where data inspection is appropriate (such as DTOs, Value Objects, and presentation reporting).

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/design-tell-dont-ask.md — .claude/skills/analyze/SKILL.md:67

## Concepts named — required, verbatim
- `Tell, Don't Ask` — .claude/skills/analyze/references/design-tell-dont-ask.md:7 — defined here
- `Core Insight` — .claude/skills/analyze/references/design-tell-dont-ask.md:13 — defined here
- `Ask vs Tell` — .claude/skills/analyze/references/design-tell-dont-ask.md:17 — defined here
- `Feature Envy` — .claude/skills/analyze/references/design-tell-dont-ask.md:41 — defined here
- `Getter Chains` — .claude/skills/analyze/references/design-tell-dont-ask.md:54 — defined here
- `Detection Checklist for Analysis` — .claude/skills/analyze/references/design-tell-dont-ask.md:64 — defined here
- `Data Transfer Objects` — .claude/skills/analyze/references/design-tell-dont-ask.md:75 — defined here
- `Value Objects` — .claude/skills/analyze/references/design-tell-dont-ask.md:76 — defined here
- `Law of Demeter` — .claude/skills/analyze/references/design-tell-dont-ask.md:82 — used here
- `SRP` — .claude/skills/analyze/references/design-tell-dont-ask.md:83 — used here
- `Encapsulation` — .claude/skills/analyze/references/design-tell-dont-ask.md:84 — used here

## Structure
# Tell, Don't Ask — .claude/skills/analyze/references/design-tell-dont-ask.md:7
## Core Insight — .claude/skills/analyze/references/design-tell-dont-ask.md:13
## Ask vs Tell — .claude/skills/analyze/references/design-tell-dont-ask.md:17
## Why It Matters — .claude/skills/analyze/references/design-tell-dont-ask.md:30
## Common Violations to Detect — .claude/skills/analyze/references/design-tell-dont-ask.md:39
### Feature Envy — .claude/skills/analyze/references/design-tell-dont-ask.md:41
### Getter Chains (Law of Demeter violations) — .claude/skills/analyze/references/design-tell-dont-ask.md:54
## Detection Checklist for Analysis — .claude/skills/analyze/references/design-tell-dont-ask.md:64
## When the Rule Does Not Apply — .claude/skills/analyze/references/design-tell-dont-ask.md:73
## Related Principles — .claude/skills/analyze/references/design-tell-dont-ask.md:80

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Includes a 4-pattern detection checklist for analysis agents comparing `Ask (Flag It)` to `Tell (Accept It)` across validation, state mutation, calculations, and string formatting. Explicitly lists valid architectural exemptions such as DTOs, Value Objects, and cross-cutting logging. Frontmatter references `wiki/concepts/Design Principles/Tell Dont Ask.md`.

## Context cost
2271 bytes, approximately 570 tokens.
