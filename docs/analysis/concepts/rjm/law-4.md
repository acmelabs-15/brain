---
package: rjm
name: Law 4
slug: law-4
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/references/agent-guardrails-template.md, sha256: 9cb3f3b258fa15cfa4a6bfec04f0de8d93e7b340285b21b84b153b056f97ac07}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Law 4

## Definition — verbatim
(used, not defined)

> "threshold instead of guessing (Law 4)? A change that widens what an agent can do" — .claude/skills/security-scan/references/agent-guardrails-template.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/agent-guardrails-template.md | 66 | used here | PR review lens question ensuring agents escalate to humans when confidence falls below threshold instead of guessing. |

## Consumes
Confidence metrics, ambiguous instructions, and uncertain environmental states.

## Produces
Escalation packages transferring control back to human operators.

## When applied
Triggered whenever agent confidence drops below defined thresholds or ambiguous instructions are encountered.

## Sub-concepts
none

## Part of
the-four-laws-of-agent-safety

## Implementation status
clean

## Design notes
The fourth rule in the Four Laws of Agent Safety ("Escalate when uncertain"). Law 4 establishes confidence thresholds below which an agent must cease autonomous progression and escalate to a human operator, preventing speculative execution and ungrounded hallucinations.
