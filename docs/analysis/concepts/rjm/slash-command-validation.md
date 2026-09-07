---
package: rjm
name: slash command validation
slug: slash-command-validation
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/modules/slash_command_validator.py, sha256: b2263f8d242bd1a006e15dc1725c0c36f2c7cb7e03811acdb2b400ee50a5b957}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# slash command validation

## Definition — verbatim
> "Module for slash command validation (ADR-006: logic in modules, not workflows)." — scripts/modules/slash_command_validator.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/modules/slash_command_validator.py | 1 | defined here | used here | Validates that all slash command markdown files in `.claude/commands/` satisfy frontmatter and quality rules. |

## Consumes
Slash command markdown files under `.claude/commands/`.

## Produces
Validation status report and process exit code (0 for pass, 1 for fail).

## When applied
Invoked in CI workflows or local test runs to validate slash command markdown files.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
A quality gate that encapsulates slash command validation logic inside a Python module rather than inline workflow YAML per ADR-006.
