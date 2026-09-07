---
package: rjm
name: Result dataclass pattern
slug: result-dataclass-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/init_skill.py, sha256: 7f9eceac1dd1780fb8c052d8a694477ef10cc5754a07ef0b8a7a2131abee35c3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Result dataclass pattern

## Definition — verbatim
> "- Use the Result dataclass pattern (see script-template.py in SkillForge assets)" — .claude/skills/skillforge/scripts/init_skill.py:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/init_skill.py | 120 | used here | Guideline for skill automation scripts requiring standard Result envelope dataclasses with structured fields and exit codes. |

## Consumes
Script execution outcomes, data payloads, diagnostic errors, and warnings.

## Produces
Standardized Result dataclass instances containing success status, message, data, warnings, and errors.

## When applied
Applied when implementing automation scripts across skill modules to ensure consistent CLI execution and structured envelope outputs.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
An architectural design pattern ensuring that automation scripts return structured result payloads with standardized exit codes (0=success, 1=failure, 2=bad args, 10=validation fail). Standardizing the script interface avoids ad-hoc string parsing and makes automation reliably composable across agent tools.
