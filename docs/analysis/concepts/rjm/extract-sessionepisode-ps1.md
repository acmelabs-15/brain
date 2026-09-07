---
package: rjm
name: Extract-SessionEpisode.ps1
slug: extract-sessionepisode-ps1
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-038-reflexion-memory-schema.md, sha256: c38ecd8c2fcbe6206a5ec4b4a80e06621ca3015db64a93894c4264f2bdfef509}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Extract-SessionEpisode.ps1

## Definition — verbatim
(used, not defined)
> "Extract-SessionEpisode.ps1" — .agents/architecture/ADR-038-reflexion-memory-schema.md:203

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-038-reflexion-memory-schema.md | 203 | defined here | Proposed PowerShell script in the episode extraction pipeline parsing decisions and outcomes from session logs |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path (References Extract-SessionEpisode.ps1 which was implemented in Python at src/copilot-cli/skills/memory/scripts/extract_session_episode.py; memory subsystem is excluded from lifecycle scope)

## Design notes
PowerShell script filename in the proposed Reflexion Memory pipeline; not a development lifecycle concept.
