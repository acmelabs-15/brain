---
package: rjm
name: semgrep-push
slug: semgrep-push
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/git_hook_policy.py, sha256: 43137253ce418f1bb7e76d0eeddf685cbc9041c84c49e2b38395d0605bdf5ada}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# semgrep-push

## Definition — verbatim
(used, not defined)

> "(\"semgrep-push\", _handle_semgrep_push)," — scripts/validation/git_hook_policy.py:8425

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/git_hook_policy.py | 8425 | defined here | Subcommand dispatch table entry registering Semgrep security scanning across pushed commit heads. |

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
clean

## Design notes
`semgrep-push` is a CLI subcommand identifier in `git_hook_policy.py` invoking Semgrep on pushed commits rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
