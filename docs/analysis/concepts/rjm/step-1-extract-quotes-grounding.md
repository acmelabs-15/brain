---
package: rjm
name: Step 1 - Extract quotes (grounding)
slug: step-1-extract-quotes-grounding
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Step 1 - Extract quotes (grounding)

## Definition — verbatim
> "**Step 1 - Extract quotes (grounding):**" — .claude/skills/research-and-incorporate/references/workflow.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 49 | defines | Initial stage of two-step analysis extracting verbatim text passages in quotes tags before reasoning. |

## Consumes
Raw external web or repository content.

## Produces
Extracted verbatim quotes in `<quotes>` tags.

## When applied
First step executed upon fetching external URLs.

## Sub-concepts
none

## Part of
two-step-analysis

## Implementation status
defects: doc-drift

## Design notes
The initial grounding stage of two-step analysis that isolates verbatim source text passages to establish an uncontaminated empirical record before any interpretation.
