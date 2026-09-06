---
package: addy
name: debugging-and-error-recovery
slug: debugging-and-error-recovery
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/debugging-and-error-recovery.json, sha256: a7b0cfb380dfce578305913d7376426ad9ee78beb51a31a19b4d52ea7b3a86be}
  - {path: external/browser-testing-with-devtools.md, sha256: 5438d8b5154a91cee59d13be99fd577e09dac2956d9412f67fddaa15db287cbe}
  - {path: skills/debugging-and-error-recovery/SKILL.md, sha256: 67ce2c9442da0c5a6e3515617fc9c4003cfe232ef7c7210da342f40f508f9958}
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# debugging-and-error-recovery

## Definition — verbatim
> "Systematic debugging with structured triage. When something breaks, stop adding features, preserve evidence, and follow a structured process to find and fix the root cause." — skills/debugging-and-error-recovery/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/debugging-and-error-recovery.json | 2 | used here | Target skill identifier in evaluation test cases. |
| external/browser-testing-with-devtools.md | 12 | used here | Navigation link to related Build phase skill in web catalog. |
| README.md | 262 | used here | Catalogs skill scope and structured triage workflow under the Build phase. |
| skills/debugging-and-error-recovery/SKILL.md | 6 | defined here | Defines the root-cause triage workflow, verification checklist, and common rationalizations. |
| skills/doubt-driven-development/SKILL.md | 228 | used here | Recommends switching to debugging-and-error-recovery when encountering actual errors during doubt investigation. |
| skills/observability-and-instrumentation/SKILL.md | 21 | used here | Contrasts diagnosing active errors using debugging-and-error-recovery with preventative instrumentation. |

## Consumes
Stack traces, test failure outputs, error messages, and system logs.

## Produces
Preserved error evidence, reproducible failing tests, isolated root-cause fixes, and regression tests.

## When applied
When tests fail, builds break, unexpected runtime behavior occurs, or production errors are reported.

## Sub-concepts
regression-test

## Part of
addy:Build

## Implementation status
clean

## Design notes
debugging-and-error-recovery replaces guessing and symptom-patching with a disciplined four-phase triage protocol (preserve evidence, isolate the problem, fix the root cause, verify and prevent). By enforcing reproduction before patching and requiring a regression test before closing, it guarantees that bugs are understood and eliminated permanently.
