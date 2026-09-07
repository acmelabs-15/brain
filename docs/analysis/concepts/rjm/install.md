---
package: rjm
name: Install
slug: install
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

# Install

## Definition — verbatim
> "| Install | Persist access | File integrity monitoring |" — .claude/skills/threat-modeling/references/advanced-analysis.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/advanced-analysis.md | 37 | used here | The fifth phase of the Kill Chain where the attacker establishes persistent access, detectable via file integrity monitoring. |

## Consumes
Initial exploit execution access and host operating system services.

## Produces
Persistent backdoors, modified system binaries, registry keys, or scheduled tasks.

## When applied
Evaluated during threat modeling to introduce immutable filesystems, file integrity monitoring, and non-root execution environments.

## Sub-concepts
none

## Part of
kill-chains

## Implementation status
clean

## Design notes
The persistence stage of the cyber kill chain where an adversary anchors long-term access within a compromised system to survive reboots and credential resets.
