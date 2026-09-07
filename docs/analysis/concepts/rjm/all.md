---
package: rjm
name: __all__
slug: all
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/__init__.py, sha256: 8eff83b2be69b5158b6f035088b9e9a74d814704ddfc2364caf814b86c248031}
  - {path: scripts/pr_maintenance/__init__.py, sha256: b157ddeaa91069989c8d80c38031dd661fe6763f52a6445b306199e7a1eba733}
  - {path: scripts/progress/__init__.py, sha256: 34d00be95f2a51fe67662404bed5528cc10e27848f9b98bcd2a0509bf8ea522c}
  - {path: scripts/validation/__init__.py, sha256: 077618dffc4308fc3ffcfa06330b00237d0ce94a188851ed098352ff6a4e83db}
  - {path: scripts/validation/check_agent_skill_discriminator.py, sha256: fb835dbd3148f58de0a6befdf83d9365975869f178def8624ab3e2b1832db6ce}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# __all__

## Definition — verbatim
(used, not defined)

> "__all__ = [" — scripts/github_core/__init__.py:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/__init__.py | 71 | defined here | Module export list declaring public API symbols for github_core. |
| scripts/pr_maintenance/__init__.py | 20 | defined here | Module export list declaring public API symbols for pr_maintenance. |
| scripts/progress/__init__.py | 24 | defined here | Module export list declaring public API symbols for progress reporting. |
| scripts/validation/__init__.py | 8 | defined here | Module export list declaring exported validation symbols. |
| scripts/validation/check_agent_skill_discriminator.py | 597 | defined here | CLI argument `--all` triggering full-corpus audit across all tracked agents. |

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
defects: missing-path, orphan, other

## Design notes
`__all__` is a standard Python module symbol export mechanism and CLI flag name rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
