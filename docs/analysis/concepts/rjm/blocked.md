---
package: rjm
name: BLOCKED
slug: blocked
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# BLOCKED

## Definition — verbatim
> "- **BLOCKED**: One or more HIGH or CRITICAL findings remain unaddressed, OR a secret is present in the diff, OR a CWE-22/CWE-77/CWE-78 pattern is unmitigated, OR an ASI01-ASI10 boundary is violated without compensating control, OR more than 3 MEDIUM findings require deferred work." — .claude/agents/security.md:223

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 223 | defined here | Terminal rejection verdict emitted when critical vulnerabilities, hardcoded secrets, or unmitigated injection patterns are detected. |
| templates/agents/code-simplifier.shared.md | 123 | used here | Agent handoff failure mode when code is too broken to simplify safely, routing back to implementer with diagnostic details. |
| templates/agents/comment-analyzer.shared.md | 119 | used here | Agent handoff failure mode when comment intent cannot be determined without author clarification. |
| templates/agents/critic.shared.md | 147 | defined here | Critic review verdict emitted when a plan cannot proceed due to missing dependencies, misalignment, or feasibility concerns. |

## Consumes
Unaddressed high or critical security findings, exposed credentials, broken target source code, or incomplete diff snapshots.

## Produces
Authoritative rejection verdict halting workflow progression and initiating rework or author escalation.

## When applied
Applied whenever hard security, safety, or plan feasibility preconditions are breached.

## Sub-concepts
none

## Part of
cross-phase

## Implementation status
clean

## Design notes
BLOCKED is the authoritative rejection gate across rjm agent roles that halts progression when fundamental safety or quality preconditions fail. Used by security to halt vulnerable code or secret leaks, by critic to stop unviable plans, and by refactoring agents when target code is too broken or intent is ambiguous. Without this gate, dangerous vulnerabilities or defective code would propagate down the pipeline.
