---
package: rjm
name: inversion-thinking
slug: inversion-thinking
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# inversion-thinking

## Definition — verbatim
> "- `inversion-thinking`: Identify failure modes by thinking backward" — .claude/agents/high-level-advisor.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/high-level-advisor.md | 58 | used here | Mental model used by the strategic advisor to identify failure modes by thinking backward from disaster. |
| .claude/skills/cva-analysis/SKILL.md | 349 | used here | Technique applied to challenge and validate abstraction choices by analyzing inverted failure states. |
| templates/agents/high-level-advisor.shared.md | 61 | used here | Shared mental model for identifying failure modes by thinking backward. |

## Consumes
Proposed software designs, architecture plans, strategic initiatives.

## Produces
Enumeration of severe failure modes, anti-goals, and preventive design constraints.

## When applied
Applied during pre-mortems, CVA abstraction validation, and strategic plan reviews.

## Sub-concepts
none

## Part of
high-level-advisor

## Implementation status
defects: missing-path, doc-drift

## Design notes
Inversion thinking forces analysts and agents to approach problems backwards—asking how a project or architecture could catastrophically fail rather than how it will succeed. In rjm, it acts as a stress-testing mechanism that exposes fragile assumptions and unviable abstractions early.
