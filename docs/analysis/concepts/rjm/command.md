---
package: rjm
name: Command
slug: command
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

# Command

## Definition — verbatim
> "| Command | Establish C2 | Network anomaly detection |" — .claude/skills/threat-modeling/references/advanced-analysis.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/advanced-analysis.md | 38 | used here | The sixth phase of the Kill Chain where the attacker establishes a command-and-control channel, detectable via network anomaly detection. |

## Consumes
Installed persistence implants and outbound network channels.

## Produces
Bidirectional remote control channels allowing adversaries to instruct compromised nodes.

## When applied
Analyzed during threat modeling to restrict egress traffic, enforce strict proxy authentication, and monitor for anomalous C2 beacons.

## Sub-concepts
none

## Part of
kill-chains

## Implementation status
clean

## Design notes
The command and control (C2) phase of a cyber kill chain where an adversary opens communication channels to direct actions inside the victim environment.
