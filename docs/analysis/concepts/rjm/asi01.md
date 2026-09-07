---
package: rjm
name: ASI01
slug: asi01
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-074-security-review-quick-pass-mode.md, sha256: c2b4a02348c862ed3899605ae5d2efbda035194ef3e8e2c32062b67584b82ba4}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ASI01

## Definition — verbatim
(used, not defined)

> "You review ASI01 (Agent Goal Hijack) in others' code." — .claude/agents/security.md:201

## Also called — verbatim
`Agent Goal Hijack` — .claude/agents/security.md:201

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-074-security-review-quick-pass-mode.md | 106 | used here | Enumerated as part of the ASI01 to ASI10 boundary violation pattern set that triggers BLOCKED verdicts. |
| .claude/agents/security.md | 201 | used here | Direct instruction assigning the security agent responsibility to review and guard against Agent Goal Hijack. |
| .claude/skills/security-review/SKILL.md | 114 | used here | Cited from OWASP for Agentic Apps regarding prompt injection and goal hijacking risks. |

## Consumes
none

## Produces
none

## When applied
Applied when reviewing agent prompts, external data ingestion, memory stores, and untrusted tool inputs.

## Sub-concepts
none

## Part of
security-review, owasp

## Implementation status
clean

## Design notes
ASI01 refers to Agent Goal Hijacking from the OWASP Top 10 for Agentic Applications. In rjm, it represents attacks where malicious content overrides agent system instructions, requiring defensive boundary enforcement and strict instruction hierarchy.
