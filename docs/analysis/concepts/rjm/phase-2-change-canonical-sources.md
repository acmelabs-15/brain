---
package: rjm
name: Phase 2: Change Canonical Sources
slug: phase-2-change-canonical-sources
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 2: Change Canonical Sources

## Definition — verbatim
> "### Phase 2: Change Canonical Sources" — .claude/skills/ai-agents-portability-campaign/SKILL.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 97 | defined here | Implementation phase modifying canonical hook definitions in .claude/ rather than generated mirrors. |

## Consumes
Classified hook requirements and identified cross-harness contract differences.

## Produces
Updated canonical scripts and hook registrations under `.claude/hooks/` and `.claude/settings.json`.

## When applied
Executed after classification to apply modifications strictly to canonical source files.

## Sub-concepts
none

## Part of
ai-agents-portability-campaign

## Implementation status
defects: doc-drift, missing-path

## Design notes
Phase 2 reinforces the single-source-of-truth doctrine by enforcing that all edits occur exclusively within canonical source directories (`.claude/`) rather than downstream generated trees (`src/copilot-cli/`). This prevents accidental overwrites when mirrors are regenerated.
