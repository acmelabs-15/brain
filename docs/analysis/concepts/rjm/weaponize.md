---
package: rjm
name: Weaponize
slug: weaponize
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

# Weaponize

## Definition — verbatim
> "| Weaponize | Craft exploit | Threat intelligence |" — .claude/skills/threat-modeling/references/advanced-analysis.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/advanced-analysis.md | 34 | used here | The second phase of the Kill Chain where the attacker crafts an exploit tailored to target vulnerabilities, detectable via threat intelligence. |

## Consumes
Target vulnerability data and exploit generation payloads.

## Produces
Custom attack payloads, weaponized documents, or automated exploit scripts.

## When applied
Executed by adversaries off-target; analyzed during threat modeling to match defensive configurations against emerging threat intelligence feeds.

## Sub-concepts
none

## Part of
kill-chains

## Implementation status
clean

## Design notes
The second phase of the cyber kill chain where an adversary pairs vulnerabilities identified during reconnaissance with executable payloads to create an attack package.
