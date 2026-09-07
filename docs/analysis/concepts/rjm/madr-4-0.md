---
package: rjm
name: MADR 4.0
slug: madr-4-0
kind: template
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: .claude/skills/adr-review/references/agent-prompts.md, sha256: 58a13dd3adc40229b5a77f394c0ffcfc5e20588f166f961bfc00dc877cd6598e}
  - {path: .claude/skills/adr-review/references/artifacts.md, sha256: 82daf59b64761376f05dd9a47a02294f060cf150675f6c926722ee1d7c300c65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MADR 4.0

## Definition — verbatim
(used, not defined)

> "Use MADR 4.0 format per architect.md. Key sections:" — .claude/skills/adr-review/references/artifacts.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-045-debate-log.md | 27 | used here | Cited by Architect as the required template whose sections were missing from draft ADR-045. |
| .claude/agents/architect.md | 232 | used here | Section heading introducing the canonical ADR template in the Architect agent prompt. |
| .claude/skills/adr-review/references/agent-prompts.md | 44 | used here | Checklist item in the Architect review prompt enforcing template compliance. |
| .claude/skills/adr-review/references/artifacts.md | 82 | used here | Reference specification defining required ADR template sections. |

## Consumes
Problem statement, decision context, candidate options, trade-offs, and verification criteria.

## Produces
Standardized Markdown Architectural Decision Record document.

## When applied
Mandatory standard format for all architecture decision records across the rjm project.

## Sub-concepts
considered-options, decision-outcome, confirmation, reversibility-assessment

## Part of
adr-review

## Implementation status
defects: cross-file-contradiction, missing-path

## Design notes
MADR 4.0 (Markdown Architectural Decision Records version 4.0) is the standardized specification template governing all architectural decision records in rjm. It enforces rigorous structure including decision drivers, considered options, confirmation methods, and reversibility assessments.
