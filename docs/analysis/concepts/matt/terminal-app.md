---
package: matt
name: terminal app
slug: terminal-app
kind: artifact
package_phase: matt:Shaping
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# terminal app

## Definition — verbatim
> "A terminal app can only be driven by someone with the repo cloned and a runtime installed, which rules out exactly the people whose opinion the prototype needs: the designer, the PM, the domain expert who knows what the state model is supposed to mean." — external/prototype.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/prototype.md | 46 | used here | Former prototype output artifact described as retired in favor of zero-dependency HTML files. |

## Consumes
Local developer environment, runtime tooling, and cloned codebase.

## Produces
Interactive CLI prompt loop for inspecting state transitions.

## When applied
Legacy prototype delivery mechanism, superseded by standalone HTML demos.

## Sub-concepts
none

## Part of
the-prototype-skill

## Implementation status
defects: orphan (external/prototype.md:1), doc-drift (external/prototype.md:46 documents replacing terminal apps with single-file HTML demos)

## Design notes
An interactive command-line application used in earlier revisions of logic prototyping. It was retired because requiring a local clone and runtime excluded designers, product managers, and non-technical domain experts from testing the state model.
