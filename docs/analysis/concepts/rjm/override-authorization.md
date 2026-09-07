---
package: rjm
name: Override authorization
slug: override-authorization
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Override authorization

## Definition — verbatim
> "Override is reserved for humans or automation with repository `maintain` or `admin` permission." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:142

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 140 | defined here | Defined in section heading and text as the permission check restricting overrides to repository maintainers or admins. |

## Consumes
GitHub API authorization tokens and repository collaborator permission levels.

## Produces
Permission validation granting or refusing lease override commands.

## When applied
Evaluated whenever an operator or automation script requests an `operation: override` marker.

## Sub-concepts
none

## Part of
pr-branch-holder-lease

## Implementation status
not-implemented (ADR-090 proposed; citing inventory card records defects: none)

## Design notes
The authorization gate governing administrative lease overrides. It strictly restricts override authority to authenticated identities with `maintain` or `admin` permissions on the repository, preventing unprivileged agents from unilaterally taking over active branch locks.
