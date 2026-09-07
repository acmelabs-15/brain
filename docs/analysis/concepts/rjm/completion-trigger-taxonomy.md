---
package: rjm
name: Completion Trigger Taxonomy
slug: completion-trigger-taxonomy
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Completion Trigger Taxonomy

## Definition — verbatim
> "Every security review ends with one verdict. Trigger conditions are explicit:" — .claude/agents/security.md:219

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 217 | defined here | Defined as explicit trigger conditions mapping security findings to one of five review verdicts. |
| templates/agents/security.shared.md | 188 | defined here | Defined in the shared security agent template establishing standardized completion verdicts. |

## Consumes
Security scan results, threat model findings, risk scores, and tool outputs.

## Produces
Exactly one definitive security completion verdict: `SECURITY_APPROVE`, `SECURITY_REQUEST_CHANGES`, `SECURITY_BLOCK`, `SECURITY_DEFER`, or `SECURITY_NEEDS_INFO`.

## When applied
Applied at the conclusion of every security review to emit the final binding verdict.

## Sub-concepts
none

## Part of
- security-agent

## Implementation status
defects: missing-path, doc-drift

## Design notes
The Completion Trigger Taxonomy provides a deterministic state-machine exit for security reviews in rjm. By bounding the review conclusion to five mutually exclusive verdicts with explicit criteria, it eliminates ambiguous review summaries and gives the orchestrator and CI pipeline unambiguous signals for merge gating or human escalation.
