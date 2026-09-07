---
package: rjm
name: Lifecycle frontmatter
slug: lifecycle-frontmatter
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Lifecycle frontmatter

## Definition — verbatim
(used, not defined)

> "**Lifecycle frontmatter (ADR-073, Phase 1)**: when the destination uses this" — .claude/skills/adr-generator/SKILL.md:143

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/SKILL.md | 143 | defines | YAML frontmatter block emitted on canonical ADRs tracking id, status, date, decision-makers, supersession, explainer, and implementation status. |

## Consumes
ADR metadata (id, date, decision-makers, supersession links).

## Produces
Structured YAML frontmatter block at the top of an ADR file.

## When applied
Emitted during Phase G3 generation when authoring ADRs using the project canonical template.

## Sub-concepts
none

## Part of
adr-template

## Implementation status
clean

## Design notes
A standardized machine-readable YAML metadata block embedded at the top of canonical ADR files per ADR-073. It establishes structured lifecycle tracking—including status, supersession relationships, implementation state, and display-only explainer links—enabling automated validation gates like check_adr_lifecycle.py to verify consistency across the repository.
