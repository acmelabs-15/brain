---
package: matt
name: changeset
slug: changeset
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: package-lock.json, sha256: b89967d44b654ceb7b9fcc7e0d6c3f74fb110bb96eb66c65bac14099c729338d}
  - {path: package.json, sha256: 167010d1c535a085be165835a4cc89e1de2760c2bf3b6e43c6ae045e41d0587b}
  - {path: skills/deprecated/README.md, sha256: 8b2009e31b7353f318a4321901b1141377e4d395f092934bacde7e9c5b070e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# changeset

## Definition — verbatim
> "the changeset that removes it names whatever replaced it." — skills/deprecated/README.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| package-lock.json | 120 | defined here | Declares the executable CLI binary entry point for the Changesets toolchain |
| package.json | 12 | defined here | Defines npm script shortcut invoking the changeset CLI command |
| skills/deprecated/README.md | 3 | used here | References the changeset file created to document the retirement and replacement of deprecated skills |

## Consumes
Committed repository changes, semver bump level, change summary.

## Produces
Markdown file under `.changeset/` documenting modifications and intended semver bump.

## When applied
Created whenever a feature, bug fix, deprecation, or breaking change is committed.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction

## Design notes
An individual markdown artifact stored in `.changeset/` that pairs semantic version intent (patch, minor, major) with release notes describing a change. In matt, changesets are also used to document skill deprecations and their replacements when skills are retired.
