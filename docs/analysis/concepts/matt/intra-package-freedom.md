---
package: matt
name: Intra-package freedom
slug: intra-package-freedom
kind: pattern
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/setup-ts-deep-modules/SKILL.md, sha256: 29acca66ac99d4532e2a6f0370d8125d7cba1e87c9ac66573203c75189d3e6c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Intra-package freedom

## Definition — verbatim
> "2. **Intra-package freedom**: a package's own files import each other freely." — skills/in-progress/setup-ts-deep-modules/SKILL.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 29 | defined here | Second rule of deep module enforcement granting internal files unrestricted intra-package access. |

## Consumes
Internal files within a single package directory.

## Produces
Unrestricted internal code sharing and module composition within package subfolders.

## When applied
> "a package's own files import each other freely." — skills/in-progress/setup-ts-deep-modules/SKILL.md:29

## Sub-concepts
none

## Part of
setup-ts-deep-modules

## Implementation status
defects: doc-drift

## Design notes
An architectural design rule that exempts internal files of the same package from boundary import restrictions. Files within a package can import one another without restriction, fostering internal cohesion while maintaining external encapsulation.
