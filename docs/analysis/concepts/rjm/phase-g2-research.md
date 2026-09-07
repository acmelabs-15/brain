---
package: rjm
name: Phase G2: Research
slug: phase-g2-research
kind: phase
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

# Phase G2: Research

## Definition — verbatim
(used, not defined)

> "### Phase G2: Research" — .claude/skills/adr-generator/SKILL.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/SKILL.md | 78 | defines | Second phase in ADR generator workflow discovering ADR destination directory, naming conventions, next sequential number, and in-use template. |

## Consumes
Target repository directory structure, existing ADR files, and naming conventions.

## Produces
Resolved ADR destination path, detected template format, and deterministic next sequential number via check_adr_uniqueness.py.

## When applied
Executed after Phase G1 information gathering in adr-generator.

## Sub-concepts
none

## Part of
adr-generator

## Implementation status
clean

## Design notes
The discovery phase of the ADR generator workflow. In Phase G2, the generator inspects the codebase to locate where ADRs are stored, determines prevailing file naming patterns, calculates the next collision-free sequence number using check_adr_uniqueness.py, and detects the template format used by existing decisions.
