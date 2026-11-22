---
id: IDEA-017
status: define # define | specced | done | parked
result: # with status: done, the DEC-NNN or the commit SHA this idea produced
---
# IDEA-017: Research skill and method

## Intent
- Outcome: one research skill owns how research is sized, run, checked and brought back to the user, and every other place points to it.
- User: Peter, and each agent and user who need more context before a decision.
- Why now: the one-agent-per-row rule and the missing method shaped the research of IDEA-016, and Peter found the defect on 2026-11-21.
- Success: open, row 14.
- Constraint: open, row 13. Known so far: a vendored file changes only upstream, and a change to instructions follows `docs/maintainers/changes.md`.
- Out of scope: open, row 03.

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A spec for the research skill, and for the removal of the research guidance that it replaces. This is a draft; no row here is decided.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

**On hold since 2026-11-21, by Peter's decision:** this idea comes after the views mod (IDEA-015) and the status and blocked-by work (IDEA-016). Resume point: the five survey records (RES-104 to RES-108) wait for the evaluation with Peter; row 08 is partly answered.

This idea started in the third session of IDEA-015 and IDEA-016, on 2026-11-21, in the worktree `brain-views-mod` (branch `feat/views-mod`). Nothing is committed; ask Peter before a commit. The Intent and the map are the agent's draft from Peter's words below. Peter has not gone over the rows.

### Where the idea comes from

The agent ran the research of IDEA-016 under the rule "one agent and one brief per research row". It cut the status research into 15 rows to fit that rule, and it later asked Peter to close the 15 rows on a short summary. It ran the outside research on blocked by as two single agents with one pass each (RES-102, RES-103). Peter refused both. His words from that session are in IDEA-016's Notes ("Research review, third session").

The agent then proposed four steps, and Peter agreed to them:

1. Find every place that holds the rule or the research method: skills, protocol, agent definitions, tests and evals.
2. Look outside at how proven multi-agent research is run, from several sources.
3. Define the method: size the research to the question, survey, stop and evaluate, go deep, check, then review with the user.
4. Change every place together, and remove what the new method replaces.

### Peter's words, 2026-11-21 (verbatim)

> Regarding the research problem - in general I brain has poor guidance regarding research - the research agent is one setence long and doesn't even live with the rest of our agents.  I think you're headed in the right direction here - I think removing the research guidance from places like the interview-me skill and treating it like the ask-user-question skill - and just like the ask-user-question skill I'd rather have the skill get loaded to frequently the not frequently enough or never.
>
> I think in addition to providing guidance regarding when/how to decide what patterns/approach to use to research something the skill should also emphasize the role research plays in the framework's lifecycle.  At it's most basic the interview is a loop that has a goal of finding an answer to some unknown part of idea being refined - while it's possible the user knows the answer off the top of their head, the much more likely situation is they need to be provided with additional context in order for them to provide the agent with the best/strongest answer possible which most of the time requires either researching your own local codebase or researching outside of your own codebase, sometimes both.  This is when an agent would load that research skill, for guildance on the  which pattern/approach/model/effort makes the most sense for their needs, that context is written to a research document by the agent(s) so the main agent and the user can talk about the findings.  Just like the agaentic loop, if the results of that research are eithher not enough or make the user/agent realize their initial direction wasn't the best and they still need more context in order to make decision, the research agent needs to be provided with a new brief and 1 or more additional loops need to be run until the best answer for their needs can be made - THAT MEANS WHEN RESRCH IS RETURNED TO TEH MAIN AGENT THE AGENT SHOULD NEVER JUST RECORD IT AND MOVE ON - THE NEXT STEP IS ALWAYS A CONVERSATION WITH THE USER.  IF THE USER PUSHES BACK ON THE AGENT REGARDING THE RESULTS THAT IS NOT A QUE FOR THE AGENT EITHER TO GO SILENTLY RECORD AN ANSWER AND MOVE ON.
>
> ###### It's also probably worth including that whenever the agent isn't totally sure how to handle the resutls of any research or if the decision the user decides on after talking about the results of any research, NO MATTER HOW SMALL, they need to go talk with the user.
>
> Neither the user or the agent should ever make a decision based on a memory they have no citation for, or based on a single source - the ideal senario is the user is provided with a full spectrum of source backed solutions to the proposed question and by talking the different options through with the agent is able to identify the best option for their project's specific needs.  And yea, sometimes that loop needs to be run a lot of times in order for that to happen.
>
> And yes, I agree with the 4 steps you proposed - to be clear I don't think research always to be done by multiple agents in parallel - I think sometimes a single agent makes more sense.  Brain does have a resource regarding orchration patterns, but I think it frequently goes unread and also has gaps.  I think when defining patterns and best practices for something like research a better approach is being able to provide colocated guidance that is provided to the agent based on the specific needs of their research - is it an internal codebase, is it an enormous monorepo or small specialist npm package, is it something that requires external research and identifying for them not only the best patterns/approaches for their needs but also providing clear direction around what sources MUST be investigated as part of their research in order for their research to be considered complete - often times I have a bunch of libraries for example that must be investigated as part og the research, but it's also really really important that the agent not limit themselves to just that list.

Earlier in the same session he said (verbatim parts): "We should always, always, always be doing outside research, not just on a single source, but always out on many sources"; "We should be fanning out, getting a high-level idea of what's out there, and then stopping, evaluating what came back, and putting together a thoughtful approach ... for how to then go and do the deep research"; "one agent per row process, depending on what the row is, is not a good process"; "sometimes a single agent using low effort will be the right thing to do - but other times it should be a multistep, multiagent swarm that fans out, and depending on what that faned out swarm finds they might need to send out follow up swarms of agents fanning out"; "don't just save my preferences when I push back on you ... We need to identify it and come up with a comprehensive way to deal with that."

Later in the same turn he added (verbatim):

> I'd also like to as part of that research skill provide really clear criteria that agents can use for picking the correct model and effort level that they should be using for their specific senario/needs.  This should also be part of your research.

In his next message he added (verbatim), and he approved the survey with "yea go ahead":

> Oh the other really important thigns that always needs to be part of an agents research loop is before actually doing any reserach, regardless of if it's internal/external - they need to search the research that has aslrteady been done for the project in docs/research and figurte out if the answer has already been identified, needs an update/double check or we haven't research ed it yet.
>
> I'm not sure if this would address any of our needs regarding an agent that acts as a model/effort router, but I recently heard about this shttps://hyper.charm.land/

### What Peter's words ask for, in the agent's reading

These are the agent's reading, not decisions. Each one names its row.

- One research skill, used like ask-user-question, takes the research guidance out of interview-me and other places (rows 03, 04, 13).
- The skill is loaded too often rather than too seldom (row 04).
- The skill states the role of research in the lifecycle: research gives the user the context for the strongest answer (row 03).
- The skill helps the agent choose the pattern and the approach. One agent is sometimes right; a staged run with many agents is sometimes right (row 05).
- The skill gives clear criteria for the model and the effort level that fit the agent's case, and the research for this idea covers those criteria (rows 16, 05).
- Guidance sits with the skill and is given by the kind of need: own repo, very large repo, small package, outside sources (row 06).
- A brief names the sources that must be investigated before the research counts as complete, and the agent does not stop at that list (row 07).
- No decision rests on a memory without a citation, or on one source. The user gets a range of options, each with its sources (row 08).
- A returned result always leads to a conversation with the user. The agent never records it and moves on. Pushback is not a cue to record an answer in silence. When the agent is not sure how to handle a result or a decision, however small, it talks with the user (row 09).
- Research is a loop: when a result is not enough, or changes the direction, a new brief and more runs follow (rows 10, 11).
- Before any research, inside or outside the repo, the agent searches the project's past research. It finds out whether the answer exists, needs an update or a second check, or is not yet researched (row 17).
- `https://hyper.charm.land/` is a source that the research on model and effort level must cover; Peter is not sure that it fits (row 16).

### Row 01 — partial

A first pass by the main agent with `grep` on 2026-11-21. It is not complete: it did not read every skill, command, test or eval that starts a sub-agent.

- Settled so far, each with its source:
  - The researcher agent is 7 lines; its body is the one sentence "Follow the research brief you are given." Its description says it answers "one research row" and writes "one research record". It carries `disallowedTools: Agent`, so it can start no other agent. Source: `claude/agents/researcher.md:1-7`.
  - The researcher sits in `claude/agents/`; the other four agents sit in `agents/`. Source: `.claude-plugin/plugin.json` (`agents` list); `README.md:47`.
  - The interview skill says "Use one agent and one brief per research row." Source: `skills/interview-me/SKILL.md:141`.
  - The interview skill resolves a row from the returned record with no step that talks with the user: "Check sources and sufficiency, then resolve the row with its RES ID." Source: `skills/interview-me/SKILL.md`, section "Read a result".
  - The research brief is written for one row and one record, and ends with "Work alone; start no other agent." Its section "Optional agent teams" keeps the "one-agent-per-row scope". It sends the agent to "the sources that own it: official docs, code, specs or the issue itself", and it has no rule for several sources. Source: `skills/interview-me/RESEARCH.md:1-67`.
  - The protocol says a research sub-agent "replies with its RES path only". Source: `protocol/PROTOCOL.md:45`.
  - An eval grader named `one-agent-per-row` requires one Agent call per research row, and a test covers it. Source: `evals/lifecycle/interview-parallel-research/graders/one-agent-per-row.md`; `scripts/evals/__tests__/interview-parallel-research.test.ts`.
  - The maintainer doc repeats the rule: interview-me "delegates one research row per worker". Source: `docs/agents.md:13-18`.
  - The glossary defines a research row as "A row a sub-agent resolves by finding facts and citing their sources" and a research record as the findings "for one research row or do row". Source: `GLOSSARY.md:48-49`, `GLOSSARY.md:86-88`.
  - The research record template holds one Question and one Answer, and its `from` names one row. Source: `scripts/workspace/templates/RES.md`.
  - The orchestration reference is 370 lines and is vendored, so Brain cannot edit it here. It is about personas and commands. Its pattern 5, "Research isolation", says to use the built-in `Explore` agent and not to define a research persona; Brain defines one. Only the ship commands and doubt-driven-development point at it. No research text points at it. Source: `references/orchestration-patterns.md:96-115`; `upstream.lock.json:75`; `.claude/commands/ship.md:24`; `commands/ship.toml:23`; `skills/doubt-driven-development/SKILL.md:46,229`.
  - The research brief loads source-driven-development for its source and citation rules. That skill is vendored and is about official docs for framework code. Source: `skills/interview-me/RESEARCH.md` step 2; `upstream.lock.json:199`.
  - The research brief points at the agent-brief reference for its principles. That reference is about a brief posted on a tracker issue or pull request. Source: `skills/interview-me/RESEARCH.md:3`; `references/brain/agent-brief.md:1-7`.
  - Other places that name research rows or the brief: `skills/interview-me/CONVERSATION.md:16-21`; `skills/idea-refine/SKILL.md:176-177,212`; `skills/using-brain/SKILL.md:82`; `specs/SPEC-009-workspace/spec.md:47`; `scripts/lifecycle/__tests__/agents.test.ts:94-98`; `scripts/evals/interview-cases.ts`.
- Open: a full read of every place that starts a sub-agent or tells an agent to look something up (review, build, planning, codebase design, doubt-driven development, the commands); the schema and check rules for a record's `from`; the Codex and Gemini delivery files.
- Related: IDEA-007 row 03 names a conflict between the upstream orchestration examples and Brain's writable research records. IDEA-007 is about who schedules build tasks and reviews; this idea is about research.
- Next: after Peter goes over this first pass, decide how to finish the inventory (row 01 stays in-progress).

### Rows 02 and 16 — the survey, started 2026-11-21

Peter approved a broad, high-level survey with five agents ("yea go ahead"). It is the first stage only. When it returns, the agent stops and goes over the results with Peter before any deep run. No row resolves on a survey record.

- Past research, searched first as Peter asked: no record in `docs/research/` answers row 02 or row 16. The only outside sources on agents in past records are Claude Code's docs for sub-agents and agent teams. The origin of the present design is in `docs/intent/workspace-and-stateful-interview.md:270,344,678-680,724,747`: a researcher with no Agent tool "so it cannot start nested agents", source-driven-development as its skill, and research rows in parallel.
- The five areas, one agent and one record each: the model makers' guidance on agent research; open-source research tools; agent workflow sets near Brain; evidence rules outside AI; criteria for model and effort level (row 16, with `https://hyper.charm.land/` as a source it must cover).
- The four records for row 02 name `IDEA-017#02` in `from`. Each one answers its own area question, not the row.
- Unchecked, for row 10: `researchResultProblems` in `scripts/workspace/check.ts:260` takes a list of record links for one row.
- Returned: RES-106 (area 5, row 16), read in full by the main agent on 2026-11-21. Not yet gone over with Peter. Row 16 stays in-progress.
- Returned: RES-105 (area 2, row 02), read in full by the main agent on 2026-11-21. Not yet gone over with Peter.
- Returned: RES-104 (area 1, row 02), read in full by the main agent on 2026-11-21. Not yet gone over with Peter.
- Returned: RES-107 (area 3, row 02), read in full by the main agent on 2026-11-21. Not yet gone over with Peter.
- Returned: RES-108 (area 4, row 02), read in full by the main agent on 2026-11-21. Not yet gone over with Peter.
- All five survey records are in: RES-104, RES-105, RES-107, RES-108 (row 02) and RES-106 (row 16). Each record lists what is worth a deep run and what it did not reach. A limit they share: most pages came through a fetch tool that summarizes, so a deep run must read the raw pages before a quote is relied on. RES-108's agent reports that one failed PDF scrape used 388 Firecrawl credits.
- Next: the stop to evaluate. Go over the five records with Peter by content, then agree on the plan for the deep run. No deep run starts before that. Rows 02 and 16 stay in-progress.

### Peter's question on a gate, 2026-11-21 (now IDEA-018)

IDEA-018 holds this topic from 2026-11-21 on. The text below stays as the record of where it started.

His words (verbatim):

> So in regards to the other thing that has happened a couple times now - there have been a handful of times when you've been wondering about what to do next - sometimes when I push back on you, or when a delegated agent provides results of research they've done or when you encounter conflicting direction, "Peter just directed me to do deep research, which is a comprehensive multiagent workflow, but the interview-me skill says to delegate no more then a single agent when researching a row of an idea's map".  I'm wondering if it would be worth again leveleraging a model like jev to create a mod that lives as a hook or something with very clear criteria around identifying those senarios, effectively acting as a quality gate and preventing you from moving forward in the wrong direction in those moments and just very explicitly providing you with a rejecting error that tells you to come talk with me regarding what just happened and ask what the correct thign to do is?

Facts found before the agent answered, each with its source:

- Jev is TypeSafe's decision model; it returns probabilities, not text. Peter's plugin jev-gate is one `PreToolUse` hook that asks Jev questions about a tool call. It starts in shadow mode (log only); enforce mode can `ask` the user or `deny` with a reason. One of its signals is `off_task`. Source: `/Users/peterkloss/Dev/ACMElabs/jev-gate/README.md`; `/Users/peterkloss/Dev/ACMElabs/jev-gate/hooks/hooks.json`.
- A past row already holds Peter's structural option for a case where wording failed 3 of 3: a `PreToolUse` check, "related to his jev-gate plugin", and "No more wording changes for it". Source: `docs/ideas/IDEA-001-review-follow-ups.md:46`.
- A `Stop` hook with `decision: "block"` keeps the turn going and gives the agent the reason. Source: `docs/research/RES-035-auto-start-mechanisms.md:29` (a past record; a second check is due before a design rests on it).
- Not researched: whether a mod can stop a tool call; whether Jev judges the state of a conversation well.

The agent's view is in its reply of that turn. Peter has not decided where this belongs.

Peter then added (verbatim): "using jev with sometjhing like https://tanstack.com/ai/latest/docs/evaluate/evaluate#score tanstacks evaluate to establish a threshold that would reslt in the error and rejection of whatever you were trying to do and directing you to me might be perfect for this"

Facts on that page and on jev-gate, read by the main agent:

- TanStack AI's `decide()` asks a decision model typed questions (`choice`, `score`, `boolean`) about one `state`. A `boolean` answer carries `.probability`, the chance of true; a `score` answer carries `.score`, a raw fraction. The page states no threshold of its own apart from 0.5 for a boolean's `.value`. Adapters exist for TypeSafe's Jev, OpenRouter, Vercel AI Gateway, Cloudflare, OpenAI, Gemini and a local server. Source: https://tanstack.com/ai/latest/docs/evaluate/evaluate, checked 2026-11-21.
- "On the TypeSafe wire, the boolean question type is named noul." Source: the same page, checked 2026-11-21.
- jev-gate already sends `noul` and `score` questions to the same wire format (`/v1/systemone`) with plain `fetch`, compares each blocking signal with a threshold (default 0.9), and has no runtime dependency. Source: `/Users/peterkloss/Dev/ACMElabs/jev-gate/scripts/gate/jev.ts:28-69`; `/Users/peterkloss/Dev/ACMElabs/jev-gate/scripts/gate/config.ts:68`; `/Users/peterkloss/Dev/ACMElabs/jev-gate/README.md`.

### Row 08 — partial (the evidence rule), 2026-11-21

- Asked: Peter's rule "never a decision from a single source" has two readings. Reading 1: look in many places before a decision. Reading 2: every statement in a research record needs two sources.
- Settled: reading 1. Source: Peter's reply on 2026-11-21, verbatim:

> yup exactly - option 1 - but I do think it's a little bit more then taht - think research that around sometjhign like the blocked and blocked-by proposal automatically means evaluating a all of the popular schema packages like zod for example along side basic memroy as well as resdarching what leaders from the front-end development think about the libraries your considering and do they have an alternative alsoworth investigating for example - communities are important to include in research as they have very well established voices that they rally around who provide very consistena nd high quality opinions and guidance on a lot of these things

- What his addition asks for, in the agent's reading (rows 06, 07, 08):
  - "Many places" means more than tools of the same kind. Research for a design also covers the neighbor kinds of tool that the design can be built with. His example: the popular schema packages, such as zod, beside Basic Memory.
  - Research covers what the recognized voices of the relevant community think of the options, and which alternatives they name. His example: leaders of front-end development.
  - Communities are a source that research must include.
- Evidence from the survey that bears on it (not yet gone over with Peter):
  - A software engineering review method includes practice sources such as blog posts when practice context matters, and grades each one by the authority of its producer. Source: RES-108, findings on the multivocal review (Garousi and others).
  - Voices that repeat one origin are not independent of each other. Source: RES-108, findings on AP, and on the criticism of the two-source rule.
  - A statement of expert opinion is opinion: the Technology Radar says that it makes "no attempt ... to be comprehensive". Source: RES-108, finding on the Thoughtworks Technology Radar.
  - A conflict with Brain's present process: the research brief loads source-driven-development for its source rules, and that skill puts official docs first and lists blog posts as never a primary source. Source: `skills/interview-me/RESEARCH.md` step 2; RES-107, finding S10; `skills/source-driven-development/SKILL.md`.
- Settled, the role of community voices. Source: Peter's reply on 2026-11-21, verbatim:

> in response to your thought "I'm weighing whether community leaders count as a real source kind" - they don't have to be a source that you use to heavily impacat your final decision - they veyr very frequently provide great information regarding other venues for you investigate where you almost always will find what are considerd to be a real source

  - In the agent's reading: a community voice is first a lead. It tells the research where to look, and there the research finds a source that owns the fact. It does not have to carry weight in the decision.
  - Evidence that fits: legal research starts with secondary sources to "orient ourselves" and then goes to primary authority; several workflow sets treat memory and hearsay as "a LEAD to probe, never evidence". Source: RES-108, findings on the legal research guide; RES-107, finding S14.
  - Correction of the agent's own claim: source-driven-development says that blog posts are never cited "as primary sources". That does not forbid their use as leads. The gap in Brain's present process is smaller than the agent said: no step tells the research agent to look for leads in a community.
- Open: which label a statement from one second-hand source gets; how a voice is graded; which communities and voices count for a project, who names them, and where that list is kept (row 07).
- For IDEA-016: RES-102 and RES-103 covered work trackers only. They did not cover schema packages or community voices.
- Next: ask Peter which communities and voices he means for Brain's work.

### First run of the method

Peter agreed that the outside research on blocked by (IDEA-016 rows 32 and 33) is the first run of the method, by hand. RES-102 and RES-103 are a first pass for it. The saved note in IDEA-016 holds: ask Peter before a large research run.

<!-- Save partial answers and pending questions here as they arrive, under Row NN: Settled, Source, Conditions, Open and Next. Link in-progress RES records and record waits with their retry condition. Replace settled notes with the resulting DEC/RES link. -->

## Map
<!-- Write one row per question right under the table's header, numbered from 01: | 01 | <question> | <interview, prototype, ideate, research or task> | open | — | — | -->

| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Which places in Brain hold the research method or the one-agent-per-row rule: skills, protocol, agent definitions, references, templates, checks, tests, evals and docs? | research | in-progress | — | — |
| 02 | How do proven outside sources run research with agents: how do they size it, stage it, check it, cite it and bring it to the user? | research | in-progress | — | — |
| 03 | Which stages and skills does the research skill serve (the interview only, or also spec, plan, build and debugging), and what stays outside it? | interview | open | 01 | — |
| 04 | When must an agent load the research skill, and which places make it load? | interview | open | 01, 02 | — |
| 05 | Which research patterns does the skill offer, and which criteria decide the pattern, the number of agents, the model and the effort level for one question? | interview | open | 02, 16 | — |
| 06 | Which guidance does the skill give for each kind of need (own repo, very large repo, small package, outside sources, both), and where does that guidance sit? | interview | open | 02 | — |
| 07 | How does a brief name the sources that must be investigated, and what keeps the agent from stopping at that list? | interview | open | 02 | — |
| 08 | What is the evidence rule: what counts as a source, how many sources does a claim need, and what holds for a fact about our own code? | interview | open | 02 | — |
| 09 | What happens when research returns: what does the agent bring to the user, what must the conversation cover, and when may a row be resolved? | interview | open | 02 | — |
| 10 | How does one question hold several agents, several runs and several records: what do the map row, its Result and a record's `from` allow? | interview | open | 01, 05 | — |
| 11 | How does the loop continue when a result is not enough or changes the direction: who writes the new brief, and who decides that the research is complete? | interview | open | 02, 09 | — |
| 12 | Where does the researcher agent live, what does its definition hold, and what do the other hosts get? | interview | open | 01, 05 | — |
| 13 | What happens to each place from row 01, and to the vendored files that Brain cannot edit here? | interview | open | 01, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 17 | — |
| 14 | How do we know that the new method works: which evals and checks, and what must the first run by hand show? | interview | open | 05, 09 | — |
| 15 | Who approves the size of a research run before it starts, and how does the agent state that size? | interview | open | 05 | — |
| 16 | Which criteria do the model makers' current docs and proven outside sources give for the choice of model and effort level for an agent's task? | research | in-progress | — | — |
| 17 | How does the research loop search the project's past research first, and what tells "answered", "needs an update or a second check" and "not yet researched" apart? | interview | open | 02 | — |

## Not yet specified
- How research in conversation mode (no repo) follows the same method.
- How a run with no user present handles the rule that a result leads to a conversation.
- Whether do rows and their records change with the research records.

## Out of scope
None yet.
