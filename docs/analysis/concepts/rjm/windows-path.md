---
package: rjm
name: windows_path
slug: windows-path
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-validation-and-qa/SKILL.md, sha256: 9d6ab64f7789e319bf479ef96c96b85ca34f2b4c01c7b408cd413e0b23be90eb}
  - {path: pyproject.toml, sha256: f9db8bb8535798521c2dc821da3cfc7ae4440d2d42b0290a4ea45e70a31dd1fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# windows_path

## Definition — verbatim
> "windows_path: Tests that exercise Windows path handling and must run on a Windows runner." — pyproject.toml:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-validation-and-qa/SKILL.md | 80 | used here | Documented as a pytest marker designating tests that exercise Windows path handling on Windows runners. |
| pyproject.toml | 79 | defined here | Defined in pytest marker configuration for Windows path handling test cases. |

## Consumes
Windows-specific filesystem semantics, backslash paths, and drive-letter path representations.

## Produces
Targeted test execution matrix routing tests to Windows CI runners.

## When applied
Applied as a pytest marker on tests verifying Windows path normalization and manipulation.

## Sub-concepts
none

## Part of
testing-rigor

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
A test marker used to isolate test cases that specifically exercise Windows path semantics and backslash handling. Because cross-platform path errors are subtle and runner resources vary, this marker ensures Windows-specific logic runs on genuine Windows CI runners.
