---
package: rjm
name: Cyber Kill Chain
slug: cyber-kill-chain
kind: reference
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Cyber Kill Chain

## Definition — verbatim
(used, not defined)

> "- [Lockheed Martin Cyber Kill Chain](https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html)" — .claude/skills/threat-modeling/SKILL.md:442

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 442 | used here | External threat intelligence methodology cited as reference material for advanced attack phase modeling. |

## Consumes
Attacker reconnaissance, weaponization, delivery, exploitation, installation, command-and-control, and actions-on-objectives phases.

## Produces
Multi-stage attack progression models informing defense-in-depth mitigation roadmaps.

## When applied
Applied during advanced threat analysis when simple single-element STRIDE modeling is insufficient to capture multi-stage intrusions.

## Sub-concepts
none

## Part of
threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`Cyber Kill Chain` is an external cybersecurity reference framework developed by Lockheed Martin, referenced in `rjm` to model multi-stage adversary campaign progressions and evaluate layered defensive controls.
