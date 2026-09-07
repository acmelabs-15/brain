---
package: rjm
name: red line
slug: red-line
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# red line

## Definition — verbatim
> "- **Design impact**: Create explicit \"red line\" criteria that skip analysis" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 64 | defined here | Design principle establishing fast-path criteria that immediately rule out building or buying without exhaustive analysis. |

## Consumes
Non-negotiable business, security, regulatory, or technical constraints.

## Produces
Immediate disqualification of options (e.g. Never Build commodity capabilities, Never Buy proprietary core IP).

## When applied
Evaluated during the Inversion step of Phase 1 analysis to bypass unnecessary evaluation when hard constraints dictate the outcome.

## Sub-concepts
never-build, never-buy

## Part of
buy-vs-build-framework

## Implementation status
clean

## Design notes
An inversion-based evaluation shortcut and governance gate in rjm. By establishing clear 'red lines'—conditions under which a team must never build (commodity software, lacking skills) or never buy (proprietary core IP, strict regulatory barriers)—it eliminates wasted analysis on non-viable options.
