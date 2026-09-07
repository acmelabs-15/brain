---
package: matt
name: Deduplication
slug: deduplication
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/triage/OUT-OF-SCOPE.md, sha256: 1fbf9b432130c6380aa65813b55553cfda150309b27c595e183f8e335b8a190d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Deduplication

## Definition — verbatim
> "2. **Deduplication**: when a new issue comes in that matches a prior rejection, the skill can surface the previous decision instead of re-litigating it" — skills/engineering/triage/OUT-OF-SCOPE.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/triage/OUT-OF-SCOPE.md | 6 | defined here | Defines deduplication as surfacing prior rejection decisions to prevent re-litigating recurring requests. |

## Consumes
Incoming feature request issues and existing `.out-of-scope/*.md` entries.

## Produces
Immediate issue resolutions referencing established rejection decisions.

## When applied
Applied during initial triage inspection when evaluating newly submitted feature requests.

## Sub-concepts
none

## Part of
triage

## Implementation status
clean

## Design notes
A triage technique that checks incoming feature requests against previously recorded rejections in `.out-of-scope/`. By matching concepts rather than issue titles, it prevents repetitive discussions and allows agents or maintainers to immediately close redundant requests with authoritative context.
