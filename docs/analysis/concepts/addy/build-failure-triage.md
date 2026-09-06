---
package: addy
name: Build Failure Triage
slug: build-failure-triage
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

# Build Failure Triage

## Definition — verbatim
> "### Build Failure Triage" — skills/debugging-and-error-recovery/SKILL.md:188
> "Build fails:" — skills/debugging-and-error-recovery/SKILL.md:191

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 188 | defines | Decision tree section for diagnosing and recovering from build errors. |

## Consumes
Compiler errors, build log diagnostics, bundler failure outputs, and exit codes.

## Produces
Categorized build failure analysis (type error, import error, config error, dependency error, environment error) and localized fix.

## When applied
Applied whenever compilation, transpilation, bundling, or type checking fails during verification.

## Sub-concepts
none

## Part of
debugging-and-error-recovery

## Implementation status
clean

## Design notes
A structured diagnostic decision tree mapping build errors (type errors, missing imports, invalid config files, broken dependencies, environment mismatches) directly to systematic root-cause remediation steps. It prevents trial-and-error guessing and premature code changes when builds fail.
