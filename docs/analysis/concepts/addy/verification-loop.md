---
package: addy
name: verification loop
slug: verification-loop
kind: technique
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# verification loop

## Definition — verbatim
(used, not defined)
> "## 3. The verification loop" — docs/developer-onboarding.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/developer-onboarding.md | 50 | used here | Section header and description of the contributor verification loop mirroring CI locally. |

## Consumes
Local repository changes, modified skill definitions, updated commands, or session hook scripts.

## Produces
Immediate local verification feedback across structural integrity, routing accuracy, command parity, and behavioral fidelity.

## When applied
Run locally by contributors prior to creating commits or opening pull requests.

## Sub-concepts
- `tier-1`
- `tier-2`
- `tier-3`
- `command-parity`
- `hook-regression-test`

## Part of
none

## Implementation status
clean

## Design notes
The verification loop embodies the project's principle that verification is non-negotiable for contributions just as it is for skills. By providing fast local execution of all CI validation scripts, it enables contributors to catch structural errors, command mismatches, and routing collisions in seconds before submitting changes for review.
