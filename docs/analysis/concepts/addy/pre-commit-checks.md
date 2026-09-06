---
package: addy
name: Pre-Commit Checks
slug: pre-commit-checks
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/security-checklist.md, sha256: a8bbff3b1ac9122985e98fbe9a8fa09cd8ad53b190bac7f8f0f63687900f7d7a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Pre-Commit Checks

## Definition — verbatim
(used, not defined)
> "No secrets in code" — references/security-checklist.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/security-checklist.md | 8 | defines | Pre-commit verification checklist ensuring no secrets, credentials, or private keys enter git history. |

## Consumes
Staged git diffs, `.gitignore` rules, and template environment files (`.env.example`).

## Produces
Verification verdict confirming that committed changes are clean of credentials and unignored secret files.

## When applied
Executed by developers or pre-commit hooks immediately before committing code to version control.

## Sub-concepts
none

## Part of
security-checklist

## Implementation status
clean

## Design notes
Pre-commit checks serve as the primary developer-side gate preventing inadvertent leakage of secrets into version control. By checking staged diffs for sensitive patterns (`password`, `secret`, `api_key`, `token`) and confirming comprehensive `.gitignore` coverage, the check catches credential exposure before code enters repository history.
