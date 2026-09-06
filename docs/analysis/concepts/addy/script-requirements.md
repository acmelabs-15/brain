---
package: addy
name: Script Requirements
slug: script-requirements
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/skill-anatomy.md, sha256: 5026d3ade4cec780a6d4c372cc11403ca1014ac369f72791f8c5ebe063519343}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Script Requirements

## Definition — verbatim
(used, not defined)

> "## Script Requirements" — docs/skill-anatomy.md:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/skill-anatomy.md | 131 | defined here | Section heading detailing conventions for runnable bash helpers in `skills/<name>/scripts/`. |

## Consumes
Helper scripts under `skills/<name>/scripts/`.

## Produces
Standardized bash scripts with `#!/bin/bash`, `set -e`, stderr logging, and stdout JSON output.

## When applied
When authoring or executing runnable helpers within skill packages.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: [doc-drift, internal-contradiction] in docs/skill-anatomy.md

## Design notes
Script Requirements defines the engineering contract for runnable helpers in skill directories (bash shebang, fail-fast set -e, machine-readable JSON to stdout, status messages to stderr, cleanup traps), ensuring scripts execute reliably and emit parseable results without polluting agent context.
