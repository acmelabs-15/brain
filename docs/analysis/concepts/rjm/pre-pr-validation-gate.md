---
package: rjm
name: Pre-PR Validation Gate
slug: pre-pr-validation-gate
kind: gate
package_phase: rjm:implement
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pre-PR Validation Gate

## Definition — verbatim
> "Before marking work complete, verify:" — .claude/agents/implementer.md:754

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 752 | defines | Checklist gate requiring local test execution, linting, complexity checks, and hygiene validation before marking implementation complete. |
| templates/agents/implementer.shared.md | 741 | defines | Shared template gate specifying mandatory pre-PR checks across environments. |

## Consumes
Completed implementation artifacts, unit tests, and source code files.

## Produces
Verification pass verdict or remediation loop back to implementation step 6.

## When applied
Evaluated immediately prior to marking an implementation task complete and handing off.

## Sub-concepts
none

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
A local quality firewall enforcing code quality before changes leave the implementer's context. By requiring local tests, scoped linting, cyclomatic complexity limits (≤ 10), method size constraints (≤ 60 lines), and secret scanning, it prevents low-level defects and styling violations from polluting downstream review stages.
