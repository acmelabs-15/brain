---
package: rjm
name: Copilot CLI Version Pin
slug: copilot-cli-version-pin
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Copilot CLI Version Pin

## Definition — verbatim
> "Copilot CLI Version Pin" — scripts/validation/pre_pr_sequence.py:255

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 255 | defined here | Pre-PR validation gate verifying the presence, parseability, and correctness of the pinned @github/copilot CLI version. |

## Consumes
Package configuration files and version declarations specifying the @github/copilot version pin.

## Produces
Pass/fail gate verdict ensuring the Copilot CLI version pin is valid and not blacklisted.

## When applied
Executed during the pre-PR validation sequence.

## Sub-concepts
none

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
Copilot CLI Version Pin is a governance gate (Issue #2630) that prevents breaking changes caused by unpinned, missing, or malformed @github/copilot package versions. It specifically blocks known-bad releases (such as 0.0.397) to ensure reliable agent and CLI interoperability across platforms.
