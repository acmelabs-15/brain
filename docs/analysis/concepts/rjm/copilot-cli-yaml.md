---
package: rjm
name: copilot-cli.yaml
slug: copilot-cli-yaml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# copilot-cli.yaml

## Definition — verbatim
(used, not defined)

> "copilot-cli.yaml`` excludes ``merge-resolver`` from the Copilot shipping set" — scripts/validation/check_shipped_skill_routes.py:21

## Also called — verbatim
> "### Copilot CLI Configuration (`copilot-cli.yaml`)" — CONTRIBUTING.md:436

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 436 | used here | Subsection heading documenting Copilot CLI generation parameters in `templates/platforms/`. |
| scripts/validation/check_shipped_skill_routes.py | 21 | used here | Cited as the configuration file intentionally excluding `merge-resolver` from the Copilot plugin root. |

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
`copilot-cli.yaml` is a configuration file name specifying transformation and exclusion parameters for Copilot CLI artifacts, classified as `kind: name-only` per D-023.
