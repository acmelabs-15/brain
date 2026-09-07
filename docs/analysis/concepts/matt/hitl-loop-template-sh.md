---
package: matt
name: hitl-loop.template.sh
slug: hitl-loop-template-sh
kind: name-only
package_phase: matt:diagnosing-bugs
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# hitl-loop.template.sh

## Definition — verbatim
(used, not defined)

> "It is the only skill in the set that ships an executable shell script (<code class=\"ah-code-inline\">hitl-loop.template.sh</code>) alongside instructions to run it and to curl a dev server." — external/diagnosing-bugs.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 63 | used here | Cited as the filename of a shell script template shipped with diagnosing-bugs that triggers security scanner warnings. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
`hitl-loop.template.sh` is a shell script filename shipped by the diagnosing-bugs skill to guide interactive human-in-the-loop reproduction, cataloged as `kind: name-only` per D-023 rather than an active lifecycle concept.
