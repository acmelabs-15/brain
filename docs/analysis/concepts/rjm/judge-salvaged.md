---
package: rjm
name: judge_salvaged
slug: judge-salvaged
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-evidence.md, sha256: 70d527ebb420739aa099f7982f4dc28e44432b3fa91532ae93ed5e0fa78e34e9}
  - {path: .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md, sha256: 3b2836c032a358fad40abda517f2abf08797f77014d08c8f2cf00b4b52a01c7b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# judge_salvaged

## Definition — verbatim
> "and is marked `judge_salvaged`. The published table in `rule-audit-procedure.md`" — .claude/skills/context-optimizer/references/rule-audit-evidence.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-evidence.md | 92 | defined here | Defines the audit marker attached to evaluated samples recovered from malformed or truncated payloads. |
| .claude/skills/context-optimizer/references/rule-audit-parser-forensics.md | 24 | used here | Notes that an audit trail marker like `judge_salvaged` is weaker than outright refusal when recovery logic returns incorrect scores. |

## Consumes
Salvaged evaluation payloads meeting full-field recovery requirements.

## Produces
Auditable sample records tagged with `judge_salvaged` metadata in recomputed evaluation tables.

## When applied
Applied whenever a malformed judge payload is repaired and accepted into cell calculations rather than failing closed.

## Sub-concepts
none

## Part of
- post-hoc-recovery

## Implementation status
defects: doc-drift

## Design notes
`judge_salvaged` is an evaluation provenance marker in rjm that tags any score reconstructed through fallback or post-hoc parsing rather than a clean initial parse. It ensures transparency in published metrics, though forensics noted that tagging guesses is inferior to strict refusals.
