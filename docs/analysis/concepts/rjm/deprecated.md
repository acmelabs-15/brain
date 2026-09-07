---
package: rjm
name: deprecated
slug: deprecated
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
  - {path: .claude/skills/adr-generator/references/adr-best-practices.md, sha256: 62f0e939ebf8455bdf6f0ff1d882d21e551b1d1bcfc532a863ef80f68a0675f2}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/adr-review/scripts/detect_adr_changes.py, sha256: f8916b967a34d2834a234f6223be04d1b04a925ea682850c7b65f2bd63c41805}
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# deprecated

## Definition — verbatim
> "| **Deprecated** | Decision no longer relevant but kept for history |" — .claude/skills/adr-generator/references/adr-best-practices.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 48 | defined here | ADR status explaining that a previously implemented decision is no longer in force |
| .agents/archive/planning/PRD-skills-index-registry.md | 149 | defined here | Skill lifecycle state indicating a skill has been superseded or become obsolete |
| .claude/skills/adr-generator/references/adr-best-practices.md | 73 | defined here | Lifecycle stage in ADR best practices documentation for decisions no longer relevant |
| .claude/skills/adr-review/scripts/detect_adr_changes.py | 264 | used here | Valid status enum value in canonical ADR frontmatter schema |
| .claude/skills/adr-review/SKILL.md | 222 | used here | Verified frontmatter status enum value during ADR review gate |
| docs/agent-governance.md | 64 | defined here | Agent lifecycle stage transitioning active agents toward eventual retirement |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Status enum value and lifecycle state across ADRs, skills, and agents denoting that an artifact was in force but is no longer active; classified as name-only per D-023.
