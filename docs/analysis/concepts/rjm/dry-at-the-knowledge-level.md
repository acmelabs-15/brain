---
package: rjm
name: DRY at the knowledge level
slug: dry-at-the-knowledge-level
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md, sha256: 14474578a6089b011c08d942a1df83bce2ec03802b99f5f91a2b98a3e10555cd}
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DRY at the knowledge level

## Definition — verbatim
> "DRY at the knowledge level: business rules duplicated, not text alone." — .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md | 97 | used here | Cites rule violation where inline-body shims duplicate business rules across files. |
| .claude/skills/autoplan/SKILL.md | 156 | defined here | Mandates reusing existing helpers, skills, or scripts before authoring sibling implementations. |

## Consumes
none

## Produces
none

## When applied
> "Reuse the existing helper, skill, or script" — .claude/skills/autoplan/SKILL.md:156

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A software architecture guideline emphasizing that duplication of business knowledge and logic across components is more harmful than textual duplication, guiding developers and agents to reuse existing helpers and canonical modules.
