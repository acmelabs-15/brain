---
package: rjm
name: Semgrep
slug: semgrep
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-054-local-security-scanning.md, sha256: 5c14b625368f85810129fb4ebdbe8cb56fa59fa8c8c912e8b21e41f6d1016b97}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: scripts/ci/test_installed_plugin_hooks.py, sha256: 7c14da017765e6ea5df1f3cdac71f1203ffb258520dc2b35b8a50407a2ebf160}
  - {path: scripts/validation/git_hook_policy.py, sha256: 43137253ce418f1bb7e76d0eeddf685cbc9041c84c49e2b38395d0605bdf5ada}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Semgrep

## Definition — verbatim
(used, not defined)

> "[Semgrep](https://semgrep.dev/docs/) on changed code files. It catches local" — CONTRIBUTING.md:1119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-054-local-security-scanning.md | 24 | used here | Adopted in ADR-054 as the local pre-push security scanning engine running under Lefthook. |
| CONTRIBUTING.md | 1119 | used here | Contributor documentation explaining local pre-push Semgrep security scanning on changed files. |
| scripts/ci/test_installed_plugin_hooks.py | 127 | used here | CI test validating installed plugin hooks execute Semgrep scanning correctly. |
| scripts/validation/git_hook_policy.py | 8424 | defined here | Git hook policy CLI sub-command defining Semgrep hook execution and validation parameters. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Semgrep is an external static analysis security scanner integrated into rjm's local pre-push git hook lifecycle, classified as name-only per D-023.
