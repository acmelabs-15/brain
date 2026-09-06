---
package: matt
path: .agents/writing-docs.md
type: agent
bytes: 12688
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .agents/writing-docs.md

## Purpose — required, verbatim
> "The job of a docs page is to relieve it: to orient one reader around one skill so they can hold it in their head, know when to reach for it, and see where it sits in the system." — .agents/writing-docs.md:5

## Design intent — required
Comprehensive style guide and structural template for authoring human-facing documentation pages published to aihero.dev for promoted skills in engineering and productivity. Emphasizes reducing user cognitive load for user-invoked skills by treating pages as nodes in a distributed router. Enforces a fixed frame (What it does, When to reach for it, Where it fits), evidence-based questions, exclusion of install snippets (handled by the site widget), and alignment with the AI Coding Dictionary.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
files docs/<bucket>/<skill-name>.md — .agents/writing-docs.md:3

## Invokes — required
- reference install-block.md — .agents/writing-docs.md:19
- skill to-spec — .agents/writing-docs.md:25
- skill grill-with-docs — .agents/writing-docs.md:36
- skill teach — .agents/writing-docs.md:36
- skill triage — .agents/writing-docs.md:36
- skill to-tickets — .agents/writing-docs.md:36
- skill setup-matt-pocock-skills — .agents/writing-docs.md:36
- skill implement — .agents/writing-docs.md:66
- skill code-review — .agents/writing-docs.md:66
- skill improve-codebase-architecture — .agents/writing-docs.md:66
- skill diagnosing-bugs — .agents/writing-docs.md:66
- skill prototype — .agents/writing-docs.md:66
- skill handoff — .agents/writing-docs.md:66
- skill ask-matt — .agents/writing-docs.md:68

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:17
- agent .agents/install-block.md — .agents/install-block.md:39

## Concepts named — required, verbatim
- `docs page` — .agents/writing-docs.md:3 — defined here
- `promoted` — .agents/writing-docs.md:3 — used here
- `user-invoked` — .agents/writing-docs.md:5 — used here
- `cognitive load` — .agents/writing-docs.md:5 — used here
- `distributed router` — .agents/writing-docs.md:5 — defined here
- `absolute` — .agents/writing-docs.md:9 — used here
- `fixed frame` — .agents/writing-docs.md:15 — defined here
- `install widget` — .agents/writing-docs.md:19 — used here
- `defining constraint` — .agents/writing-docs.md:25 — defined here
- `to-spec` — .agents/writing-docs.md:25 — used here
- `Invocation mode` — .agents/writing-docs.md:31 — defined here
- `Trigger boundary` — .agents/writing-docs.md:32 — defined here
- `Prerequisites` — .agents/writing-docs.md:34 — defined here
- `grill-with-docs` — .agents/writing-docs.md:36 — used here
- `teach` — .agents/writing-docs.md:36 — used here
- `triage` — .agents/writing-docs.md:36 — used here
- `to-tickets` — .agents/writing-docs.md:36 — used here
- `setup-matt-pocock-skills` — .agents/writing-docs.md:36 — used here
- `Common questions` — .agents/writing-docs.md:44 — defined here
- `It's working if` — .agents/writing-docs.md:58 — defined here
- `Where it fits` — .agents/writing-docs.md:62 — defined here
- `chain step` — .agents/writing-docs.md:66 — defined here
- `run-once setup` — .agents/writing-docs.md:66 — defined here
- `periodic maintenance` — .agents/writing-docs.md:66 — defined here
- `reach-for-it-anytime standalone` — .agents/writing-docs.md:66 — defined here
- `ask-matt` — .agents/writing-docs.md:68 — used here
- `leading words` — .agents/writing-docs.md:76 — defined here
- `seam` — .agents/writing-docs.md:76 — used here
- `deep module` — .agents/writing-docs.md:76 — used here
- `tracer bullet` — .agents/writing-docs.md:76 — used here
- `AI Coding Dictionary` — .agents/writing-docs.md:77 — used here
- `context window` — .agents/writing-docs.md:77 — used here
- `subagent` — .agents/writing-docs.md:77 — used here
- `harness` — .agents/writing-docs.md:77 — used here
- `primary source` — .agents/writing-docs.md:77 — used here
- `agent mode` — .agents/writing-docs.md:77 — used here

## Structure
- "# Writing docs pages" — .agents/writing-docs.md:1
- "## Page structure" — .agents/writing-docs.md:13
- "## What it does" — .agents/writing-docs.md:23
- "## When to reach for it" — .agents/writing-docs.md:27
- "## Prerequisites" — .agents/writing-docs.md:34
- "## Common questions" — .agents/writing-docs.md:44
- "## It's working if" — .agents/writing-docs.md:58
- "## Where it fits" — .agents/writing-docs.md:62
- "## Conventions" — .agents/writing-docs.md:72
- "## Done when" — .agents/writing-docs.md:81

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exemplary standard for user documentation that avoids duplicating skill implementation runbooks. Establishes high editorial standards such as prohibiting author attribution ("Matt says") and requiring empirical evidence for FAQ sections.

## Context cost
12688 bytes, 97 lines, approximately 2800 tokens.
