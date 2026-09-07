---
package: rjm
name: File-Based QA Exemption
slug: file-based-qa-exemption
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

# File-Based QA Exemption

## Definition — verbatim
> "Option 3: File-Based QA Exemption" — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ASSESSMENT-session-qa-validation-options.md | 66 | defined here | Analyzed as Option 3 and integrated as secondary verification inspecting staged files at commit time. |

## Consumes
List of staged files at git commit execution time.

## Produces
Objective verification deciding whether staged paths qualify for QA exemption.

## When applied
Evaluated during pre-commit hook execution alongside session log skip declarations.

## Sub-concepts
none

## Part of
qa-validation

## Implementation status
defects: orphan, missing-path

## Design notes
File-Based QA Exemption is a verification technique that evaluates the paths of staged git files at commit time to determine whether QA validation is required. By checking whether staged changes match an allowlist of non-code artifacts (e.g. session logs, research docs, memories), it provides an objective technical check that prevents misuse of self-declared skip markers.
