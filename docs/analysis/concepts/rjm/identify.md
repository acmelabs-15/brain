---
package: rjm
name: IDENTIFY
slug: identify
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# IDENTIFY

## Definition — verbatim
> "- IDENTIFY: a vulnerability is present. Name the CWE, the surface, and the" — .claude/skills/security-review/SKILL.md:188

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-review/SKILL.md | 188 | defined here | Security review verdict emitted when an exploitable vulnerability is confirmed, requiring CWE, attack surface, impact, and mitigation. |
| scripts/eval/eval-agent-vs-baseline.py | 100 | used here | Leading verdict token required by the standardized output shape contract for agent and baseline evaluation variants. |

## Consumes
Confirmed vulnerability findings with identified attack surface, threat actor, and concrete impact.

## Produces
A terminal gate verdict signaling that a vulnerability is present and detailing remediation actions.

## When applied
Returned by the security reviewer when the analyzed diff contains an unmitigated vulnerability.

## Sub-concepts
none

## Part of
verdict-taxonomy

## Implementation status
defects: exit-code-mismatch, script-bug

## Design notes
A primary negative security verdict in rjm's inline review and evaluation harness. Emitting IDENTIFY signals the presence of an exploitable vulnerability and mandates specific remediation steps, preventing vulnerable changes from progressing through the lifecycle without mitigation.
