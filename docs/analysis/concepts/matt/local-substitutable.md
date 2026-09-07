---
package: matt
name: local-substitutable
slug: local-substitutable
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# local-substitutable

## Definition — verbatim
> "Dependencies that have local test stand-ins (PGLite for Postgres, in-memory filesystem). Deepenable if the stand-in exists. The deepened module is tested with the stand-in running in the test suite. The seam is internal; no port at the module's external interface." — skills/engineering/codebase-design/DEEPENING.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/codebase-design.md | 43 | used here | Second dependency category in DEEPENING.md governing testing across local test stand-ins. |
| skills/engineering/codebase-design/DEEPENING.md | 13 | defined here | Defines dependencies with high-fidelity local test stand-ins that keep seams internal. |

## Consumes
Dependencies requiring external infrastructure that have viable local in-process stand-ins (e.g. PGLite, memory fs).

## Produces
Deep modules verified against realistic local stand-ins without polluting the public interface with database or storage ports.

## When applied
When deepening modules that rely on stateful services with viable local test doubles:
> "Dependencies that have local test stand-ins (PGLite for Postgres, in-memory filesystem). Deepenable if the stand-in exists. The deepened module is tested with the stand-in running in the test suite. The seam is internal; no port at the module's external interface." — skills/engineering/codebase-design/DEEPENING.md:15

## Sub-concepts
internal-seams

## Part of
codebase-design, deepening

## Implementation status
clean

## Design notes
The second dependency category in the deepening taxonomy. It describes infrastructure dependencies (such as PostgreSQL databases or file systems) that can be backed in the test suite by high-fidelity local stand-ins like PGLite or in-memory virtual file systems. Because the stand-in runs directly within the test process, the module can be deepened without exposing a generic storage interface or port at its public boundary; the seam remains internal and private.
