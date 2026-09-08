---
package: rjm
name: HEAD
slug: head
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/ci_runner_base.py, sha256: b08a21f5a34af4f316b6c8aec454b9296876534c887abb8897a6a5a474559659}
  - {path: scripts/validation/push_ref_staleness.py, sha256: 3fcaf0d51323fffbfb8addbad5c47d5bd9a6532d453c13f4bb289e2ef82987d5}
  - {path: scripts/validation/run_install_parity_ci.py, sha256: c443c2ac28685dde69d91e626464de2bf4ad209c94b4dc3bcc7c31ceee9a23f5}
  - {path: scripts/validation/run_plugin_version_bump_ci.py, sha256: e74906d05e144bafa606c9eb48c902c83845d90507d444ef74f58d3321c92d4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# HEAD

## Definition — verbatim
(used, not defined)

> "1. ``origin/<base_ref>`` when it resolves AND differs from ``HEAD``." — scripts/validation/ci_runner_base.py:176

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/ci_runner_base.py | 176 | used here | Referenced as the git HEAD symbolic reference when comparing diff bases. |
| scripts/validation/push_ref_staleness.py | 13 | used here | Compared against live remote refs to verify local branch staleness before pre-push execution. |
| scripts/validation/run_install_parity_ci.py | 17 | used here | Compared against origin base ref to determine whether a direct push to base occurred. |
| scripts/validation/run_plugin_version_bump_ci.py | 16 | used here | Referenced in parent fallback `HEAD^` when resolving the diff base. |

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
defects: orphan, doc-drift

## Design notes
`HEAD` is a Git symbolic reference identifier pointing to the active branch commit rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
