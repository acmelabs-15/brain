---
package: rjm
name: canonical-source-mirror discipline
slug: canonical-source-mirror-discipline
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# canonical-source-mirror discipline

## Definition — verbatim
> "canonical-source-mirror discipline (quote the contract verbatim in the first" — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/references/incidents.md | 127 | defined here | Governance rule requiring any mirror claim or derived implementation to cite and quote the canonical contract verbatim. |

## Consumes
Claims asserting equivalence, mirroring, or synchronization between files.

## Produces
Byte-exact contract citations and divergence tracking in source comments and cards.

## When applied
Enforced whenever code or documentation claims to match an external or canonical source.

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
clean

## Design notes
`canonical-source-mirror discipline` mandates that whenever a file asserts alignment with another specification or implementation, it must cite the exact canonical path and quote the governing contract verbatim. This eliminates vague assertions of alignment that allow contract drift to accumulate.
