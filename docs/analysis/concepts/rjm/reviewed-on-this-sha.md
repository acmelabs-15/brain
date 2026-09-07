---
package: rjm
name: Reviewed on this SHA
slug: reviewed-on-this-sha
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/ship.md, sha256: a48916b477bcd72450de9594242e726b876b09389b0774a465785d70e92074a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Reviewed on this SHA

## Definition — verbatim
> "3. **Reviewed on this SHA** - The shipped code must carry SHA-bound `/review` proof (Issue #1938)." — .claude/commands/ship.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/ship.md | 79 | defined here | Pre-flight check 3 requiring cryptographic review marker binding or advisory review attestation for the current HEAD commit. |

## Consumes
Git HEAD commit SHA, git status working tree cleanliness, and review marker commits or execution records.

## Produces
Attestation confirming that the exact bytes of the current commit tip underwent multi-axis review.

## When applied
Evaluated during `/ship` pre-flight checks before push or merge operations.

## Sub-concepts
marker-commit, reviewed-by

## Part of
pre-flight-checks, ship

## Implementation status
clean

## Design notes
Reviewed on this SHA solves the problem of review staleness and scope creep. In fast-paced multi-agent workflows, code often gets approved and subsequently modified with minor "cleanups" that introduce defects. By requiring that the shipped commit tip itself be cryptographically bound to a passing `/review` marker commit (or attested in contributor mode), rjm guarantees that no unreviewed changes can slip into production.
