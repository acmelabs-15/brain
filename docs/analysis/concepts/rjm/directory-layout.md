---
package: rjm
name: Directory Layout
slug: directory-layout
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/architecture.md, sha256: 313b6db46f914559de625165f888be95ac076abd9a7bade6bb562d3339792453}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Directory Layout

## Definition — verbatim
(used, not defined)

> "## Directory Layout" — docs/architecture.md:137

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/architecture.md | 137 | defined here | Defines the structural repository hierarchy organizing templates, build scripts, platform outputs, skills, and configuration. |

## Consumes
none

## Produces
Standardized file paths and module locations across the repository.

## When applied
Enforced across all repository development, tooling paths, and platform generation.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
The architectural layout specification defining repository structure in rjm, separating shared templates, compilation generators, platform runtimes, and governance directories to keep build boundaries clean.
