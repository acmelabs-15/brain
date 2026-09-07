---
package: rjm
name: DEFAULT_MIN_ACTIVATION_SCORE
slug: default-min-activation-score
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: scripts/eval/_optimizer_adapters.py, sha256: 41bb89c726d7372ef9bfea77b9eb57e3e2123c801358598ee13bfdab276a20b2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# DEFAULT_MIN_ACTIVATION_SCORE

## Definition — verbatim
> "DEFAULT_MIN_ACTIVATION_SCORE = 3.5" — scripts/eval/_optimizer_adapters.py:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_adapters.py | 45 | defined here | Constant defining the default minimum threshold (3.5) for rule activation scoring. |

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
defects: other

## Design notes
`DEFAULT_MIN_ACTIVATION_SCORE` is a configuration constant in `_optimizer_adapters.py` establishing the default 3.5 minimum activation threshold, classified as `name-only` per D-023.
