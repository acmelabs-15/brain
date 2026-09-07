---
package: rjm
name: build_pipeline_index
slug: build-pipeline-index
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# build_pipeline_index

## Definition — verbatim
(used, not defined)

> "def build_pipeline_index(repo_root: Path) -> PipelineIndex:" — scripts/validation/check_agent_skill_discriminator.py:350

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 350 | defined here | Scans all slash command files across repositories to build a comprehensive invocation index. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, other

## Design notes
build_pipeline_index is a Python function identifier that constructs the pipeline invocation index, classified as name-only per D-023.
