---
package: rjm
name: extract_context_retrieval_data
slug: extract-context-retrieval-data
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# extract_context_retrieval_data

## Definition — verbatim
> "def extract_context_retrieval_data(session_path: Path) -> InvocationRecord | None:" — scripts/measure_context_retrieval_metrics.py:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/measure_context_retrieval_metrics.py | 102 | defined here | Function parsing context-retrieval classification and tracking data from an individual session log JSON file. |

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
defects: doc-drift

## Design notes
`extract_context_retrieval_data` is a helper function in `scripts/measure_context_retrieval_metrics.py` parsing context retrieval data from session logs rather than a lifecycle concept, classified as `name-only` per D-023.
