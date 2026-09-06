---
package: addy
name: bisection
slug: bisection
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/debugging-and-error-recovery/SKILL.md, sha256: 67ce2c9442da0c5a6e3515617fc9c4003cfe232ef7c7210da342f40f508f9958}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# bisection

## Definition — verbatim
> "**Use bisection for regression bugs:**" — skills/debugging-and-error-recovery/SKILL.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 101 | used here | Recommends git bisection as a localization technique to pinpoint which commit introduced a regression bug. |

## Consumes
A reproducible test failure, known-good git commit, and known-bad current commit.

## Produces
The exact commit SHA and diff that introduced the regression.

## When applied
Used during the Localize triage step when debugging regressions where the behavior worked previously.

## Sub-concepts
none

## Part of
localize, debugging-and-error-recovery

## Implementation status
clean

## Design notes
A binary search technique over commit history that automates pinpointing the precise changeset that introduced a defect. Rather than guessing which recent change broke functionality, bisection executes a test against logarithmic midpoints to identify the faulty commit directly.
