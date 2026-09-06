---
package: matt
name: prompt-driven
slug: prompt-driven
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/setup-skill-verify-mode.md, sha256: aba793ba7b3457fd75e7c2560ec0e98e75a051ecfc5f91f73f16fc97475919bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# prompt-driven

## Definition — verbatim
> "The skill is prompt-driven, so the maintainer can scope it to a verification pass (\"don't rewrite anything, just check my existing files against the current seed templates and report drift\") without needing a separate code path." — .out-of-scope/setup-skill-verify-mode.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/setup-skill-verify-mode.md | 9 | defined here | Describes how skills leverage natural-language scoping to support diverse tasks without hardcoded code paths. |

## Consumes
User conversational instructions and skill prompt definitions.

## Produces
Dynamically scoped agent execution paths tailored to specific user goals without dedicated flags.

## When applied
When steering an existing skill toward specialized tasks (such as verification or dry-runs) via conversational input.

## Sub-concepts
natural-language-steering

## Part of
none

## Implementation status
clean

## Design notes
Prompt-driven skill architecture leverages the natural adaptability of large language models to re-scope skill execution on the fly, eliminating the overhead of dedicated CLI flags or redundant sibling commands.
