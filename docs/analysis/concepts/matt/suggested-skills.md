---
package: matt
name: suggested skills
slug: suggested-skills
kind: artifact
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
  - {path: skills/in-progress/claude-handoff/SKILL.md, sha256: 6738e8b7c7899ea0038fb7a5c859ca1b90c7b1eb40123dcdbe94c51b5b119f12}
  - {path: skills/productivity/handoff/SKILL.md, sha256: 7c62de979fdc7ac32fb5ddb2146156c917f80ee070d30fadc9d40343c4b6ed25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# suggested skills

## Definition — verbatim
> "The document carries the live thread (what's in flight, why, and what's next) plus a **suggested skills** section naming what the next agent should reach for." — docs/productivity/handoff.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/handoff.md | 32 | defined here | Defines the mandatory handoff section that tells the next agent which skills to invoke. |
| external/handoff.md | 37 | defined here | Identifies the section naming which skills the next agent should reach for. |
| skills/in-progress/claude-handoff/SKILL.md | 12 | defined here | Directs inclusion of a suggested skills section naming required Skill tool calls. |
| skills/productivity/handoff/SKILL.md | 10 | defined here | Mandates a suggested skills section advising the next agent on skill selection. |

## Consumes
Assessment of current progress and subsequent task requirements.

## Produces
An explicit checklist of skill names that downstream agents should invoke.

## When applied
Mandatory section authored when compiling a handoff document.

## Sub-concepts
none

## Part of
handoff-document

## Implementation status
clean

## Design notes
Suggested skills form an explicit guidance bridge between agent sessions. Because fresh agents lack conversational momentum, listing specific skills removes ambiguity about which workflow to adopt next (e.g. `to-spec`, `tdd`, `code-review`), preserving process discipline across session resets.
