---
package: rjm
name: Explicit Investigation Mode
slug: explicit-investigation-mode
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ASSESSMENT-session-qa-validation-options.md, sha256: aa0addafd86d94a96103609af0a4d8879cbe3b4ef76eb51d8d89b36ae6d138c4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Explicit Investigation Mode

## Definition — verbatim
> "Option 2: Explicit Investigation Mode" — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ASSESSMENT-session-qa-validation-options.md | 54 | defined here | Selected as the recommended architectural approach for allowing sessions to self-declare investigation intent. |

## Consumes
Session logs, research artifacts, and staged git change lists.

## Produces
Explicit declaration evidence (`SKIPPED: investigation-only`) permitting session validation without full QA reports.

## When applied
Used in sessions dedicated strictly to research, spike analysis, or documentation where no executable code is changed.

## Sub-concepts
skipped-investigation-only

## Part of
qa-validation

## Implementation status
defects: orphan, missing-path

## Design notes
Explicit Investigation Mode is an architectural pattern in rjm allowing an agent session to declare research intent in its session log (`SKIPPED: investigation-only`). Coupled with automated git validation ensuring that no code files are staged, it eliminates mandatory QA overhead for investigation sessions while preventing bypass abuse on production code.
