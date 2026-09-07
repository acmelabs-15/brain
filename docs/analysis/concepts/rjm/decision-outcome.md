---
package: rjm
name: Decision Outcome
slug: decision-outcome
kind: template
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-023-debate-log.md, sha256: f199ea3783f0e058dc4704243dd7f91d0f4a44c0437d4bff41bf2731a65f9013}
  - {path: .claude/skills/adr-generator/references/adr-templates-catalog.md, sha256: f239c5d7707d6906f22a240fa99de6825bec6b64aff057c31a75a4e152ebabaa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Decision Outcome

## Definition — verbatim
(used, not defined)

> "## Decision Outcome" — .claude/skills/adr-generator/references/adr-templates-catalog.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-023-debate-log.md | 29 | used here | Flagged by Architect as a missing P0 structured format in draft ADR-023. |
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 65 | defined here | Heading for the MADR 4.0 template section declaring the chosen option, justification, and consequences. |

## Consumes
Evaluated candidate options, decision drivers, stakeholder trade-off priorities.

## Produces
Explicit declaration of chosen technical path, justification, positive/negative consequences, and follow-up requirements.

## When applied
Required in MADR 4.0 decision records to formalize the agreed architectural choice.

## Sub-concepts
none

## Part of
madr-4-0

## Implementation status
defects: internal-contradiction

## Design notes
Decision Outcome is the central normative section of a MADR 4.0 architecture decision record. It formally identifies the selected architectural alternative, provides explicit justification linked to decision drivers, and articulates positive, negative, and neutral consequences.
