---
package: rjm
name: VERDICT: ERROR
slug: verdict-error
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/SKILL.md, sha256: 69f9c7a8e800ef594a858838198baecfc0ec92a1f3f7af1b5d4fd3bef244c5a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# VERDICT: ERROR

## Definition — verbatim
> "- [ ] `uv run python \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}\"/skills/orphan-ref-validator/scripts/scan.py --targets missing.md` exits 2 with `VERDICT: ERROR`." — .claude/skills/orphan-ref-validator/SKILL.md:167

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/orphan-ref-validator/SKILL.md | 167 | used here | Referenced and applied in SKILL.md during verification and operational workflows. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An operational technique or artifact (VERDICT: ERROR) utilized within the rjm ecosystem to ensure consistency and systematic execution.
