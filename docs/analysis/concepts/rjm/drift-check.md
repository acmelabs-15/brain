---
package: rjm
name: drift check
slug: drift-check
kind: gate
package_phase: rjm:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-072-jtbd-plugin-architecture.md, sha256: dd3585a127093a7612362aaf1737c13379ef32d464af6f14b6151f87364c8052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# drift check

## Definition — verbatim
(used, not defined)

> "fragments, Cursor `.cursor/rules/*.mdc`), each behind a drift check matching the" — .agents/architecture/ADR-072-jtbd-plugin-architecture.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-072-jtbd-plugin-architecture.md | 99 | used here | Required validation gate to ensure generated harness emitters stay synchronized with canonical sources |

## Consumes
Canonical source files and committed generated outputs.

## Produces
Verification verdict ensuring zero divergence between sources and generated files.

## When applied
Run in CI or pre-commit gates to verify that all emitted files are up to date.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: missing-path

## Design notes
Drift check is an automated validation gate ensuring that committed multi-harness code generation outputs match what the generator produces from canonical sources, preventing manual modifications or out-of-sync generated files from landing in the repository.
