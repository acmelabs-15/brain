---
package: rjm
name: Law 2
slug: law-2
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

# Law 2

## Definition — verbatim
(used, not defined)

> "irreversible action have a confirmation tier (Law 2)? Does the new path log its" — .claude/skills/security-scan/references/agent-guardrails-template.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/agent-guardrails-template.md | 64 | used here | PR review lens question checking whether destructive or irreversible actions are protected by a confirmation tier. |

## Consumes
Destructive operation requests (deletions, force pushes, schema drops, irreversible API calls).

## Produces
Mandatory human confirmation gates blocking execution until authorized.

## When applied
Applied whenever an agent tool or workflow executes an irreversible or destructive action.

## Sub-concepts
confirmation-tier

## Part of
the-four-laws-of-agent-safety

## Implementation status
clean

## Design notes
The second rule in the Four Laws of Agent Safety ("Verify before destructive operations"). Law 2 mandates that any irreversible or high-impact operation must be intercepted by an explicit confirmation tier, preventing autonomous execution from causing catastrophic data loss or system disruption.
