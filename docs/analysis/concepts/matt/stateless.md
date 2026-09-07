---
package: matt
name: stateless
slug: stateless
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/tdd.md, sha256: 879c4bad53e79f3972dd3b37438330f9ff86035843f3bf83ef41ff51e8337860}
  - {path: docs/productivity/grill-me.md, sha256: 20608431988f36024435ba01a02b2fc2e159a558465c8f0d680acdf41cc0e78c}
  - {path: external/grill-me.md, sha256: 8ef33c20bc9870b89757d0d6238d319381bb0b7afb299d3e4ef1f92d20dba1d3}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# stateless

## Definition — verbatim
> "It is **[stateless](https://www.aihero.dev/ai-coding-dictionary/stateless)**. It writes no files and leaves no workspace behind. The only thing it leaves is a sharper version of the idea, in your own head." — docs/productivity/grill-me.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/tdd.md | 25 | defined here | Describes tdd as a stateless reference skill that writes no files of its own. |
| docs/productivity/grill-me.md | 5 | defined here | Defines grill-me as stateless because it writes no files and leaves no persistent workspace behind. |
| external/grill-me.md | 26 | defined here | External catalog definition of stateless interaction leaving value in the user's mind rather than files. |
| external/tdd.md | 33 | defined here | External catalog description of tdd as a stateless reference skill for test-first development. |

## Consumes
User prompts and conversational turn inputs.

## Produces
Clarified user understanding, conversational decisions, or behavioral specifications without on-disk workspace remnants.

## When applied
Characterizes skills and loops (such as `grill-me` and `tdd`) that deliberately leave no file artifacts or workspace footprint behind.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`stateless` represents an explicit design pattern in Matt's toolkit where a skill avoids mutating the repository filesystem or accumulating on-disk artifacts. In `grill-me`, statelessness is an intentional feature: it eats vague ideas and hones human judgment without depositing draft files that clutter the repository. In `tdd`, it marks the skill as an abstract behavioral reference and guideline rather than a file-generating execution driver.
