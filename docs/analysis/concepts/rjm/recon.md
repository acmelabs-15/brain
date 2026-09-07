---
package: rjm
name: Recon
slug: recon
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

# Recon

## Definition — verbatim
> "| Recon | Port scanning | Network monitoring |" — .claude/skills/threat-modeling/references/advanced-analysis.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/advanced-analysis.md | 33 | used here | The first phase of the Kill Chain where the attacker performs reconnaissance such as port scanning, detectable via network monitoring. |

## Consumes
Publicly accessible interfaces, DNS records, service endpoints, and system metadata.

## Produces
Target intelligence, open port lists, service versions, and vulnerability candidates.

## When applied
Applied by adversaries prior to intrusion; evaluated during threat modeling to design network perimeter monitoring and surface reduction.

## Sub-concepts
none

## Part of
kill-chains

## Implementation status
clean

## Design notes
The initial reconnaissance phase in a cyber kill chain where an adversary scans, discovers, and gathers intelligence on system boundaries and potential attack vectors.
