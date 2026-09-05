---
package: matt
path: external/wizard.md
type: external-doc
bytes: 363000
unit: inv-matt-33
deprecated: false
aliases: []
memo_inputs:
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/wizard.md

## Purpose — required, verbatim
> "Generate a script that walks a human through setup." — external/wizard.md:2

Also described as:
> "generates an interactive bash script that walks a human, step by step, through a manual procedure: wiring up third-party services, running a one-off migration, moving a project from state A to state B. It opens each URL, says what to click and copy, captures what comes back, and writes it into" — external/wizard.md:25

## Design intent — required
Prevents AI coding agents from failing when encountering procedures that require human intervention, such as provisioning external infrastructure, generating credentials in third-party dashboards, toggling configuration switches, or executing one-off migration cutovers. Instead of dumping a static, numbered instruction list into chat that quickly scrolls away, risks sensitive keys leaking into the model's context, and lacks tracking, the agent generates an interactive, self-contained bash script built on a standardized template (`template.sh`). The script opens each required URL directly, isolates each step on its own screen, captures secrets blind without terminal echo, writes values idempotently to `.env` or GitHub Secrets via `gh`, supports safe Ctrl-C resumption with pre-filled defaults, and is statically verified by the agent (`bash -n`, `shellcheck`) without running end-to-end.

## Phase — required
matt:Upkeep (in documentation navigation series item 4.5); also described as: "Nowhere in particular. It&#x27;s a standalone, not a chain step." — external/wizard.md:53 and "sitting at the line where automation stops and a human has to click." — external/wizard.md:70

## Inputs — required
- Trigger: user command (`/wizard` or `$wizard`) or model-invoked trigger when hitting a manual roadblock: "When it hits a step you have to take (a key it can&#x27;t mint, a dashboard it can&#x27;t click), it builds you a wizard instead of writing the instructions into the chat, where they scroll away." — external/wizard.md:28
- Trigger by problem description: "just describe the setup you&#x27;re stuck on." — external/wizard.md:55
- Repository configuration inspected during scoping (read before asking cold): "reads the repo instead of asking cold:" — external/wizard.md:36 where "each of those is a value the wizard has to produce." — external/wizard.md:36; and "It reads the repo before it asks" — external/wizard.md:51 "so it scopes to values that are genuinely missing rather than starting from zero the way a README does." — external/wizard.md:51
- Third-party documentation or UI layout: "checks the docs rather than inventing clicks" — external/wizard.md:36
- Human scoping confirmation: "shows you the ordered stage list to confirm" — external/wizard.md:36 and "ordered list of stages, and the values each one produces, and asked to confirm, before any script exists." — external/wizard.md:62
- Runtime human input: blind/hidden terminal entry for secrets ("captures the key with hidden terminal entry" — external/wizard.md:46 and "Secrets are typed blind. Nothing sensitive echoes into your scrollback." — external/wizard.md:64), and visible text/Enter confirmations ("writes the script; it never runs it. You do, on your own machine. So a wizard is not a list of instructions you follow; it is a program that drives the procedure and holds the state, and your part is to click, paste, and press Enter." — external/wizard.md:26)

## Outputs — required
- Interactive bash script: "generates an interactive bash script that walks a human, step by step, through a manual procedure" — external/wizard.md:25, where the template "ships the whole experience: progress with time remaining, confirmation gates, cross-platform URL opening including WSL, hidden entry for secrets, idempotent" — external/wizard.md:40 "and a closing summary of everything it had to skip." — external/wizard.md:40, while the "marker is a fixed library, identical in every wizard and never hand-edited. The consistency is the point. Your job is only to scope the procedure and author its stages." — external/wizard.md:40
- Destination script paths: "Save it to a scratch or" — external/wizard.md:43 "path, run it, delete it" — external/wizard.md:43 or "Commit it and link it from the README, so they run the script instead of re-asking an agent" — external/wizard.md:43
- Runtime target outputs: values written to `.env` ("Local dev needs it, CI doesn&#x27;t" — external/wizard.md:38), GitHub secrets set via `gh secret` ("CI reads it, and it&#x27;s sensitive" — external/wizard.md:38), and GitHub variables set via `gh variable` ("CI reads it, and it&#x27;s public" — external/wizard.md:38)
- Summary screen: "The final screen lists what it wrote, and separately lists what it couldn&#x27;t do and you have to finish by hand." — external/wizard.md:67
- Static verification results: syntax check via "bash -n" — external/wizard.md:41, linter via "shellcheck" — external/wizard.md:41, and secret trace ("The agent that writes a wizard never runs it end to end, because it opens browsers and waits for human input. It verifies statically instead:" — external/wizard.md:41 "where available, and a trace that every value lands where scoping said it would, with every" — external/wizard.md:41 "reference in CI. Set your expectations accordingly: the first run is yours, and that run is the test." — external/wizard.md:41)

## Invokes — required
- template template.sh — external/wizard.md:40
- skill grill-with-docs — external/wizard.md:31
- skill to-spec — external/wizard.md:31
- skill setup-matt-pocock-skills — external/wizard.md:70
- skill implement — external/wizard.md:70
- skill ask-matt — external/wizard.md:70
- command /wizard — external/wizard.md:28
- command gh — external/wizard.md:33
- command bash — external/wizard.md:33
- command shellcheck — external/wizard.md:41

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `wizard` — external/wizard.md:25 — defined here
- `manual procedure` — external/wizard.md:25 — defined here
- `interactive bash script` — external/wizard.md:25 — defined here
- `one-off migration` — external/wizard.md:25 — used here
- `.env` — external/wizard.md:25 — used here
- `GitHub Actions secrets` — external/wizard.md:25 — used here
- `/wizard` — external/wizard.md:28 — used here
- `grill-with-docs` — external/wizard.md:31 — used here
- `to-spec` — external/wizard.md:31 — used here
- `confirmation gates` — external/wizard.md:30 — used here
- `gh` — external/wizard.md:33 — used here
- `stage` — external/wizard.md:35 — defined here
- `TOTAL_STAGES` — external/wizard.md:35 — defined here
- `scoping` — external/wizard.md:36 — defined here
- `secrets.*` — external/wizard.md:36 — used here
- `vars.*` — external/wizard.md:36 — used here
- `GitHub secret` — external/wizard.md:38 — used here
- `GitHub variable` — external/wizard.md:38 — used here
- `pure action` — external/wizard.md:38 — defined here
- `template.sh` — external/wizard.md:40 — used here
- `WSL` — external/wizard.md:40 — used here
- `hidden entry` — external/wizard.md:40 — used here
- `idempotent` — external/wizard.md:40 — used here
- `upserts` — external/wizard.md:40 — used here
- `closing summary` — external/wizard.md:40 — used here
- `STAGES` — external/wizard.md:40 — used here
- `bash -n` — external/wizard.md:41 — used here
- `shellcheck` — external/wizard.md:41 — used here
- `set_secret` — external/wizard.md:41 — used here
- `ephemeral by default` — external/wizard.md:42 — defined here
- `ask` — external/wizard.md:49 — used here
- `Readline` — external/wizard.md:49 — used here
- `read -r` — external/wizard.md:49 — used here
- `standalone` — external/wizard.md:53 — defined here
- `model-invoked` — external/wizard.md:55 — used here
- `$wizard` — external/wizard.md:55 — used here
- `user-invoked` — external/wizard.md:55 — used here
- `in-progress/` — external/wizard.md:58 — used here
- `engineering/` — external/wizard.md:59 — used here
- `setup-matt-pocock-skills` — external/wizard.md:70 — used here
- `implement` — external/wizard.md:70 — used here
- `ask-matt` — external/wizard.md:70 — used here

## Structure
- "What it does" — external/wizard.md:24
- "When to reach for it" — external/wizard.md:27
- "Prerequisites" — external/wizard.md:32
- "Stages" — external/wizard.md:34
- "The template already solves the UX" — external/wizard.md:39
- "Ephemeral by default" — external/wizard.md:42
- "Common questions" — external/wizard.md:44
- "It&#x27;s working if" — external/wizard.md:60
- "Where it fits" — external/wizard.md:69

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/wizard.md:5 — External documentation website series navigation places `/wizard` under "4 Upkeep" (item 4.5), but in the source repository the skill is located at `skills/engineering/wizard/` (not `skills/upkeep/`), and the article body explicitly states that wizard is a standalone: "Nowhere in particular. It&#x27;s a standalone, not a chain step." (line 53) and "wizard is a reach-for-it-anytime standalone" (line 70).
- script-bug — external/wizard.md:49 — Documents known upstream bug in the wizard prompt implementation: "Arrow keys in an ask prompt insert ^[[D / ^[[C instead of moving the cursor, because the prompt uses read -r rather than Readline (issue #741)."
- orphan — external/wizard.md:1 — External documentation snapshot fetched from https://aihero.dev/skills-wizard; no in-repo source file directly references or links to this external documentation path.

## Observations
- Human-agent boundary definition: The skill cleanly delineates autonomous model action from human execution: "writes the script; it never runs it. You do, on your own machine. So a wizard is not a list of instructions you follow; it is a program that drives the procedure and holds the state, and your part is to click, paste, and press Enter." — external/wizard.md:26 and "sitting at the line where automation stops and a human has to click." — external/wizard.md:70.
- Static verification of dynamic procedures: Because running the wizard requires browser clicks and user input, the AI never executes it end-to-end; instead, it enforces rigorous static validation: "The agent that writes a wizard never runs it end to end, because it opens browsers and waits for human input. It verifies statically instead:" — external/wizard.md:41 "where available, and a trace that every value lands where scoping said it would, with every" — external/wizard.md:41 "reference in CI. Set your expectations accordingly: the first run is yours, and that run is the test." — external/wizard.md:41.
- Ephemeral vs. committed artifact lifecycle: Clearly specifies when a generated wizard script should be transient versus persistent: "Save it to a scratch or" — external/wizard.md:43 "path, run it, delete it" — external/wizard.md:43 for one-offs versus "Commit it and link it from the README, so they run the script instead of re-asking an agent" — external/wizard.md:43 for shared onboarding.
- Resilient restartability: If a run is interrupted via Ctrl-C or an entry error occurs, the script offers previously saved values as defaults upon re-run ("Ctrl-C and re-run picks up where you left off, offering the values already saved as defaults." — external/wizard.md:66).
- Terminal UX constraints: Mandates clearing the terminal between stages to keep each stage focused on one screen ("Each stage fits one screen. Nothing you still need has scrolled away." — external/wizard.md:65), opening target URLs prior to prompting ("Every URL is opened before the value from that page is asked for." — external/wizard.md:63), and blind typing for secrets ("Secrets are typed blind. Nothing sensitive echoes into your scrollback." — external/wizard.md:64).
- High HTML wrapper overhead: The raw snapshot is 363,000 bytes, but the substantive documentation text is ~10 KB; the remaining ~353 KB consists of Next.js hydration code, JSON-LD schemas, inline CSS, and site navigation.

## Context cost
363,000 bytes (raw HTML snapshot). If loaded in full into model context, consumes ~90,000 tokens. The substantive documentation prose is ~10 KB (~2,500 tokens).
