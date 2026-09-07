---
package: rjm
name: trusted execution context
slug: trusted-execution-context
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/assert_trusted_smoke_context.py, sha256: 0a355565c4c6ba7affa91fe058e64a1dec6c1053f3744814c618994a3bd0796a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# trusted execution context

## Definition — verbatim
> "Gate the authenticated CLI smoke to a trusted execution context (issue #2231 item 3)." — scripts/validation/assert_trusted_smoke_context.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/assert_trusted_smoke_context.py | 2 | defined here | Module docstring defining authorization gate restricting secret-bearing workflows to trusted environments. |

## Consumes
GitHub Actions event name (`--event-name`), repository identifier (`--repository`), and git ref (`--ref`).

## Produces
Boolean authorization output (`true` or `false`) printed to standard output for workflow step branching.

## When applied
During automated CI workflow runs before injecting authentication credentials for real-CLI smoke testing.

## Sub-concepts
none

## Part of
security-policy

## Implementation status
clean

## Design notes
A security gate in rjm ensuring that workflows requiring authenticated secrets only execute under verified repository and ref boundaries (non-forks, main branch) to prevent secret exfiltration from fork pull requests.
