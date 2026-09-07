---
package: rjm
name: model-pin check
slug: model-pin-check
kind: gate
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# model-pin check

## Definition — verbatim
> "can never be justified and the model-pin check rejects it." — .claude/skills/CLAUDE.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/CLAUDE.md | 53 | used here | Automated validator rejecting hardcoded versioned model identifiers in skill frontmatter. |

## Consumes
Skill YAML frontmatter files across the repository.

## Produces
Validation pass/fail verdict rejecting uncalibrated versioned model pins.

## When applied
Executed during pre-commit checks and CI validation via `scripts/validation/check_model_pins.py`.

## Sub-concepts
none

## Part of
validation-rules

## Implementation status
clean

## Design notes
The model-pin check is an automated verification gate that scans skill frontmatter files to reject versioned model IDs, ensuring strict compliance with ADR-080 model selection constraints.
