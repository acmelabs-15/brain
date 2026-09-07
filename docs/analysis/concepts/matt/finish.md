---
package: matt
name: finish
slug: finish
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/wizard/template.sh, sha256: 33cbe9dfb1d0e9185b60248a52aabed14bc64785a00cac695e302e739dd6c153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# finish

## Definition — verbatim
> "finish clears, then shows a closing summary of everything configured." — skills/engineering/wizard/template.sh:169

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wizard/template.sh | 170 | defined here | Function that clears the terminal and displays the final setup summary and any remaining manual steps. |

## Consumes
Arrays of configured environment variable keys (`WRITTEN_ENV`), provisioned GitHub secret names (`WRITTEN_SECRET`), and skipped manual action descriptions (`SKIPPED`).

## Produces
A formatted completion screen on stdout listing total values written to `$ENV_FILE`, GitHub secrets configured, and remaining manual actions to complete.

## When applied
Invoked at the conclusion of a wizard script once all defined stages have executed.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
A terminal presentation helper function in `template.sh` that provides closure to interactive setup wizards. By clearing intermediate step output and presenting a clean summary of written variables, secrets, and skipped manual tasks, `finish` gives the human operator an unambiguous record of what was accomplished and what remains to be done.
