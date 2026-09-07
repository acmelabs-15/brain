---
package: rjm
name: multi-agent synthesis panel
slug: multi-agent-synthesis-panel
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/changelog.md, sha256: a4efff27d10d1dd1c5f0a82b98808f6204659a295f2edd5e119d04021799ae42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# multi-agent synthesis panel

## Definition — verbatim
(used, not defined)

> "- Added multi-agent synthesis panel" — .claude/skills/skillforge/references/changelog.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/changelog.md | 49 | used here | Changelog feature bullet point for SkillForge v3.0.0 introducing multi-agent synthesis review panels. |

## Consumes
Generated skill instructions, XML specifications, and reference materials from Phase 3.

## Produces
Multi-agent evaluation reports, consensus verdicts (`APPROVED` / `CHANGES_REQUIRED`), and feedback loops.

## When applied
Applied during Phase 4 (Synthesis) of the SkillForge lifecycle before finalizing new or improved skills.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
clean

## Design notes
The multi-agent synthesis panel is an adversarial review gate in SkillForge consisting of 3 to 4 specialized Opus agents that evaluate generated skills across orthogonal perspectives (architecture, usability, timelessness, and script capability) to enforce unanimous quality standards.
