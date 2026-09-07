---
package: rjm
name: Input Requirements
slug: input-requirements
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Input Requirements

## Definition — verbatim
(used, not defined)

> "For effective advice, I need:" — .claude/agents/high-level-advisor.md:247

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/high-level-advisor.md | 245 | defined here | Section heading enumerating mandatory information (current state, options, decision owner, timeline) required for advisory triage. |
| templates/agents/high-level-advisor.shared.md | 236 | defined here | Shared section heading enumerating required inputs for effective strategic analysis. |

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
defects: missing-path

## Design notes
Input Requirements is a section heading in the high-level advisor agent instructions detailing prerequisites needed from the user before analysis, classified as kind: name-only per D-023.
