---
package: rjm
name: script-path resolver
slug: script-path-resolver
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# script-path resolver

## Definition — verbatim
> "Fail when a SKILL.md script-path resolver can select a stale out-of-repo copy." — scripts/validation/check_skill_resolver_anchoring.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_resolver_anchoring.py | 2 | defined here | Guarded by validator to ensure shell resolver functions in SKILL.md anchor candidate paths to the worktree root. |

## Consumes
Candidate directory roots and repository root environment variables.

## Produces
Resolved filesystem path to skill helper script directory.

## When applied
Executed dynamically within `SKILL.md` shell blocks before invoking skill helper scripts.

## Sub-concepts
candidate-roots, git-rev-parse-show-toplevel, bare-relative-root

## Part of
plugin-root-anchoring

## Implementation status
defects: orphan

## Design notes
A script-path resolver is a shell function pattern embedded in `SKILL.md` files that dynamically probes potential script locations across local repository checkouts and external plugin installations. Without explicit worktree anchoring (`git rev-parse --show-toplevel`), resolvers fail when invoked from subdirectories and fall back to stale out-of-repo copies.
