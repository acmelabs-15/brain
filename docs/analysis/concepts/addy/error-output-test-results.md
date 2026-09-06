---
package: addy
name: Error Output / Test Results
slug: error-output-test-results
kind: artifact
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Error Output / Test Results

## Definition — verbatim
> "When tests fail or builds break, feed the specific error back to the agent:" — skills/context-engineering/SKILL.md:107

## Also called — verbatim
`Error Output` — skills/context-engineering/SKILL.md:105

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 32 | defined here | Level 4 of the context hierarchy, loaded per iteration |

## Consumes
Test failure outputs, stack traces, linter error messages, and build failures.

## Produces
Targeted diagnostic error context guiding the agent during debugging iterations.

## When applied
Loaded per iteration whenever a build fails or an automated test is broken.

## Sub-concepts
none

## Part of
the-context-hierarchy, context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
The fourth tier of the Context Hierarchy, providing concise error and test result diagnostics. Context engineering directs developers to isolate the precise failing error line rather than dumping multi-hundred-line logs, preventing diagnostic context from overwhelming the agent's attention window.
