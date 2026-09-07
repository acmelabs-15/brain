---
package: rjm
name: Kill Chains
slug: kill-chains
kind: technique
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

# Kill Chains

## Definition — verbatim
> "## Kill Chains" — .claude/skills/threat-modeling/references/advanced-analysis.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/advanced-analysis.md | 27 | defined here | Section heading defining kill chains as a methodology to map attacker progression for sophisticated threats. |

## Consumes
Threat actor profiles, network architectures, and component attack surfaces.

## Produces
Sequential multi-phase progression models mapping attacker actions (Recon, Weaponize, Deliver, Exploit, Install, Command, Action) to detection and prevention opportunities.

## When applied
Applied during threat modeling for APT-style threats, identifying detection gaps, and building a defense-in-depth security strategy.

## Sub-concepts
recon, weaponize, deliver, exploit, install, command

## Part of
threat-modeling

## Implementation status
clean

## Design notes
A sequential threat analysis framework mapping out the stages of an adversary's attack lifecycle to ensure defensive visibility and countermeasures exist at every step before an attacker achieves their objective.
