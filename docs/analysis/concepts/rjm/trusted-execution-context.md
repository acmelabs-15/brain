---
package: rjm
name: trusted execution context
slug: trusted-execution-context
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
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
