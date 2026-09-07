---
package: rjm
name: UV
slug: uv
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-042-python-migration-strategy.md, sha256: cfab3df343cee127a80f7dc1fb5e9cedc7052c9abe8e684d5f1f9693c0a45e2d}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: scripts/security/run_semgrep.py, sha256: f3882d76e96bcd6d0387cf64a87513e15f6defcb7980d09ecc29080ddc024aa4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# UV

## Definition — verbatim
> "**Adopts UV** as the Python package manager" — .agents/architecture/ADR-042-python-migration-strategy.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-042-python-migration-strategy.md | 67 | defined here | Formally adopted as the standard Python package manager for the repository. |
| CONTRIBUTING.md | 34 | used here | Listed in contributor setup prerequisites as the required Python package manager. |
| scripts/security/run_semgrep.py | 135 | used here | Referenced as the tool installing dependency-group pins from uv.lock for developer tools. |

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
defects: doc-drift, internal-contradiction, missing-path, exit-code-mismatch

## Design notes
UV is an external Python package and environment manager CLI utility rather than an agent lifecycle concept per D-023.
