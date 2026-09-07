---
package: matt
name: capture
slug: capture
kind: technique
package_phase: matt:diagnose
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh, sha256: 35103539fc36873eea36074769ad454f9379d6fc8b2dc0e26ce987fd3bfe5503}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# capture

## Definition — verbatim
> "capture VAR \"<question>\"      → show question, read response into VAR" — skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/diagnosing-bugs/scripts/hitl-loop.template.sh | 11 | defined here | Shell helper function in human-in-the-loop scripts prompting a question and storing the response in an environment variable. |

## Consumes
A variable name and prompt question string.

## Produces
Reads user terminal input into the specified variable and serializes it at script completion for agent parsing.

## When applied
During human-in-the-loop bug diagnosis when the agent requires manual observations from the user.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
An interactive input helper in `hitl-loop.template.sh` that prompts the human operator for observation data and captures the reply into a variable. At loop completion, captured variables are printed as KEY=VALUE pairs for the invoking agent to parse.
