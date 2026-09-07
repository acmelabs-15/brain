---
package: matt
name: policy
slug: policy
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/agents/openai.yaml, sha256: 9527de0110541c45712319025155aeab8dc7d77c6ed6e5e83271bab1851ab939}
  - {path: skills/engineering/to-spec/agents/openai.yaml, sha256: 1c5b4d1e3d8e52287ef19cc2742fdbbfae1914ac75d33af3e4c8174f08cc55bb}
  - {path: skills/engineering/to-tickets/agents/openai.yaml, sha256: 21bc6215fffcd7614e9f772bb1760e87cc5fc7dcc707e7d282bc9414267a6090}
  - {path: skills/engineering/triage/agents/openai.yaml, sha256: 2e683717720cf456d165d0bb1a68bb600d0b6a8ccb61841c172e50d26f95351c}
  - {path: skills/engineering/wayfinder/agents/openai.yaml, sha256: 88bc81a11a6d52ac67aeaa76b8b619e387020d47c5133a4dd4927fd15c4ad073}
  - {path: skills/in-progress/claude-handoff/agents/openai.yaml, sha256: 2308a672978864633286fb9f0792b08657e501426b3f7883fc418d5d2eac5eb0}
  - {path: skills/in-progress/implement-spec/agents/openai.yaml, sha256: d457ae78ff282b8798380b0c2e393c9798bc2bf5ee7dfe9ca31607714c6cd7d3}
  - {path: skills/in-progress/loop-me/agents/openai.yaml, sha256: b66fa10079957051be6a812f45e55b67ac394b71d5ba88349962b4c9205802c3}
  - {path: skills/in-progress/retro/agents/openai.yaml, sha256: cb6fb9d7e6b4be5975f41f6def1dd00a1255bad5d9b02696b124c924a8b8745c}
  - {path: skills/in-progress/setup-ts-deep-modules/agents/openai.yaml, sha256: 159f680217d50747702620c05fd65734a152185b3219a8ca5ee4630878a354fa}
  - {path: skills/in-progress/writing-beats/agents/openai.yaml, sha256: ddaef01da61d8e3c5f482c4403033c20cf5823f08a1dbf1d4c871670831d01e2}
  - {path: skills/in-progress/writing-fragments/agents/openai.yaml, sha256: 81167f25ee8ea1bb4b4958f12b6702ea972ad31b05e03ec91e39fa4bae0c2641}
  - {path: skills/in-progress/writing-shape/agents/openai.yaml, sha256: 56de45430e23104ff178415f5ecf7821d51a9cfabd8814b1607ebf39da2ef5cd}
  - {path: skills/productivity/grill-me/agents/openai.yaml, sha256: c061e39c3e0f9d865fb1b97556d485704af2a8a58f4b8221a8917a5c2074a32b}
  - {path: skills/productivity/handoff/agents/openai.yaml, sha256: 5c479fd562c691851690e8b18c8501045bef0943c10743d636b2fae26add1d28}
  - {path: skills/productivity/teach/agents/openai.yaml, sha256: 5856f3ae8aec742f1499c640aecdd5f1d6af5fa210a7c6ec794de8263a6f733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# policy

## Definition — verbatim
(used, not defined)

> "policy:" — skills/engineering/setup-matt-pocock-skills/agents/openai.yaml:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/agents/openai.yaml | 4 | defined here | Configuration section header specifying invocation policies for setup-matt-pocock-skills. |
| skills/engineering/to-spec/agents/openai.yaml | 4 | defined here | Configuration section header specifying invocation policies for to-spec. |
| skills/engineering/to-tickets/agents/openai.yaml | 4 | defined here | Configuration section header specifying invocation policies for to-tickets. |
| skills/engineering/triage/agents/openai.yaml | 4 | defined here | Configuration section header specifying invocation policies for triage. |
| skills/engineering/wayfinder/agents/openai.yaml | 4 | defined here | Configuration section header specifying invocation policies for wayfinder. |
| skills/in-progress/claude-handoff/agents/openai.yaml | 4 | defined here | Configuration section header specifying invocation policies for claude-handoff. |
| skills/in-progress/implement-spec/agents/openai.yaml | 4 | defined here | Configuration section header specifying invocation policies for implement-spec. |
| skills/in-progress/loop-me/agents/openai.yaml | 4 | defined here | Configuration section header specifying invocation policies for loop-me. |
| skills/in-progress/retro/agents/openai.yaml | 4 | defined here | Configuration section header specifying invocation policies for retro. |
| skills/in-progress/setup-ts-deep-modules/agents/openai.yaml | 4 | defined here | Configuration section header specifying invocation policies for setup-ts-deep-modules. |
| skills/in-progress/writing-beats/agents/openai.yaml | 4 | defined here | Configuration section header specifying invocation policies for writing-beats. |
| skills/in-progress/writing-fragments/agents/openai.yaml | 4 | defined here | Configuration section header specifying invocation policies for writing-fragments. |
| skills/in-progress/writing-shape/agents/openai.yaml | 4 | defined here | Configuration section header specifying invocation policies for writing-shape. |
| skills/productivity/grill-me/agents/openai.yaml | 4 | defined here | Configuration section header specifying invocation policies for grill-me. |
| skills/productivity/handoff/agents/openai.yaml | 4 | used here | Configuration section header specifying invocation policies for handoff. |
| skills/productivity/teach/agents/openai.yaml | 4 | used here | Configuration section header specifying invocation policies for teach. |

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
clean

## Design notes
A YAML configuration mapping key in OpenAI agent interface definition files governing invocation policies (e.g., whether implicit invocation is allowed), representing agent configuration schema rather than a lifecycle concept.
