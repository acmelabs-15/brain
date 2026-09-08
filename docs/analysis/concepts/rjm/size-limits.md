---
package: rjm
name: size limits
slug: size-limits
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/skill_size.py, sha256: e5fa48299f918de1daf66d0a8c710835ac4a0e929048092c6799d34a65655d3e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# size limits

## Definition — verbatim
> "Validate SKILL.md files do not exceed size limits." — scripts/validation/skill_size.py:2

## Also called — verbatim
`Size limits:` — scripts/validation/skill_size.py:8

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/skill_size.py | 2 | defined here | Module docstring establishing prompt size limit constraints for skill files. |

## Consumes
`SKILL.md` skill prompt files across `.claude/skills` and `src/copilot-cli/skills`.

## Produces
Pass/warn/fail validation results and exit codes adhering to ADR-035.

## When applied
Enforced during pre-commit hooks and CI validation to prevent prompt bloat in skill definitions.

## Sub-concepts
skill-size-limit, skill-size-warning, skill-byte-target, skill-byte-limit, skill-byte-warning

## Part of
none

## Implementation status
clean

## Design notes
Size limits govern the maximum allowable line count and byte size of `SKILL.md` prompt bodies across all skills in the repository. By constraining the always-loaded prompt size, the gate forces skill authors to adopt progressive disclosure patterns, moving heavy procedural instructions and schema tables into separate files under `references/`.
