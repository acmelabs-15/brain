---
package: rjm
name: Proposed
slug: proposed
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-best-practices.md, sha256: 62f0e939ebf8455bdf6f0ff1d882d21e551b1d1bcfc532a863ef80f68a0675f2}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/adr-review/scripts/detect_adr_changes.py, sha256: f8916b967a34d2834a234f6223be04d1b04a925ea682850c7b65f2bd63c41805}
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Proposed

## Definition — verbatim
> "Initial draft, open for discussion" — .claude/skills/adr-generator/references/adr-best-practices.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-best-practices.md | 71 | defined here | Defined in the ADR lifecycle table as the initial draft stage open for stakeholder discussion. |
| .claude/skills/adr-review/scripts/detect_adr_changes.py | 140 | used here | Verified in YAML frontmatter parser to ensure unquoted and quoted status values cannot evade review gates. |
| .claude/skills/adr-review/SKILL.md | 222 | used here | Listed as an allowed frontmatter status enum value checked after skill invocation. |
| docs/agent-governance.md | 64 | defined here | Defined in the Agent Lifecycle diagram as the initial stage prior to approval and development. |

## Consumes
Initial architectural proposals, draft decisions, or new agent requests.

## Produces
A documented, discoverable proposal ready for peer critique, multi-agent debate, and consensus review.

## When applied
Assigned when authoring a new ADR or agent specification prior to formal review and acceptance.

## Sub-concepts
none

## Part of
adr-lifecycle

## Implementation status
defects: exit-code-mismatch, doc-drift, missing-path

## Design notes
The initial entry state in rjm for both architectural decisions and agent definitions. It signals that a record is complete enough for inspection and debate but carries no authoritative mandate, serving as the required prerequisite for multi-agent consensus gating before implementation.
