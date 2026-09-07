---
package: rjm
name: ADR / governance
slug: adr-governance
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ADR / governance

## Definition — verbatim
> "| ADR / governance | Any `ADR-*.md` create or edit | Fires the `adr-review` multi-agent debate gate (AGENTS.md "ADR Review"); governance changes need human approval plus an ADR |" — .claude/skills/ai-agents-change-control/SKILL.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/SKILL.md | 39 | defined here | Classification table row establishing that ADR changes fire the multi-agent debate gate and require human approval. |

## Consumes
Architectural Decision Records and governance markdown files.

## Produces
Multi-agent review verdicts, Zimmermann critique answers, and formalized governance decisions.

## When applied
Triggered whenever an ADR is authored, amended, or superseded, or when core governance rules are modified.

## Sub-concepts
none

## Part of
change-control

## Implementation status
clean

## Design notes
ADR / governance designates architectural decision records and repository policy documents, safeguarding fundamental system principles by requiring multi-agent debate and explicit human approval.
