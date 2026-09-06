---
package: addy
name: Verify phase
slug: verify-phase
kind: phase
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/browser-testing-with-devtools.md, sha256: 5438d8b5154a91cee59d13be99fd577e09dac2956d9412f67fddaa15db287cbe}
  - {path: external/debugging-and-error-recovery.md, sha256: 609cad09179de130e4d22459bc24cd857cad8ec084733dc6f2a6d526cbdbead3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Verify phase

## Definition — verbatim
(used, not defined)
> "<span class=\"chip phase-chip\" data-astro-cid-jrlgpo3w><span class=\"phase-dot\" data-astro-cid-jrlgpo3w></span>Verify phase</span>" — external/browser-testing-with-devtools.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/browser-testing-with-devtools.md | 5 | used here | Categorizes browser-testing-with-devtools within the Verify phase. |
| external/debugging-and-error-recovery.md | 5 | used here | Categorizes debugging-and-error-recovery within the Verify phase. |

## Consumes
Implemented code and test suites from the Build phase.

## Produces
Verification results, runtime proofs, and root-cause bug fixes.

## When applied
When proving implementation works, tests fail, or runtime behavior needs validation.

## Sub-concepts
stop-the-line-rule

## Part of
lifecycle

## Implementation status
defects: doc-drift

## Design notes
The fourth lifecycle phase in addy, focused on proving that built code works via live browser runtime data (DevTools MCP) and systematic root-cause debugging.
