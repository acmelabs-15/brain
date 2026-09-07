---
package: rjm
name: Investigation allowlist
slug: investigation-allowlist
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/provenance.md, sha256: 04ccff20a5972dda6a64eea54b0e39b152b0c950046a9924e4f23d856a453cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Investigation allowlist

## Definition — verbatim
> "Investigation allowlist" — .claude/skills/ai-agents-change-control/references/provenance.md:11

## Also called — verbatim
> "investigation-only allowlist" — .claude/skills/ai-agents-change-control/SKILL.md:41

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/provenance.md | 11 | used here | Provenance row confirming the 8 allowed artifact path patterns defined in scripts/modules/investigation_allowlist.py and ADR-034. |

## Consumes
ADR-034 governance specifications and path matching patterns.

## Produces
An authoritative allowlist of file path patterns permitted for QA-exempt investigation sessions.

## When applied
Checked during pre-flight PR classification when determining if a change qualifies for investigation-only status.

## Sub-concepts
none

## Part of
change-control

## Implementation status
clean

## Design notes
The Investigation allowlist defines the eight file path patterns under ADR-034 that allow research and investigation sessions to be merged with an explicit QA exemption, ensuring changes do not touch executable code.
