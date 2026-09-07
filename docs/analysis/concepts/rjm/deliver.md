---
package: rjm
name: Deliver
slug: deliver
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/advanced-analysis.md, sha256: 71807836a18c20f53ad723da5a0229d50df04e4b8f1224d74b9f1c4393c936e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Deliver

## Definition — verbatim
> "| Deliver | Send phishing email | Email filtering |" — .claude/skills/threat-modeling/references/advanced-analysis.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/advanced-analysis.md | 35 | used here | The third phase of the Kill Chain where the attacker transmits payloads via mechanisms like phishing, detectable via email filtering. |

## Consumes
Weaponized payloads and transmission mediums (email, web forms, API inputs).

## Produces
Transmission of malicious payloads across trust boundaries into target environments.

## When applied
Analyzed during threat modeling to implement input validation, email sanitization, and ingress boundary filtering.

## Sub-concepts
none

## Part of
kill-chains

## Implementation status
clean

## Design notes
The transmission stage of a cyber kill chain responsible for delivering weaponized payloads across trust boundaries to target systems or users.
