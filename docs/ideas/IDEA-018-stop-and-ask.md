---
id: IDEA-018
status: define # define | specced | done | parked
result: # with status: done, the DEC-NNN or the commit SHA this idea produced
---
# IDEA-018: Stop the agent and send it to the user

## Intent
- Outcome: at the moments where the agent must talk with the user, something stops the agent's next action and tells it to go to the user.
- User: Peter, and each user whose agent goes on alone where it had to ask.
- Why now: in the sessions of 2026-11-21 the agent went on alone at least three times, and instruction text alone did not prevent it.
- Success: open, row 09.
- Constraint: open, row 08. Known so far: the criteria of the check and the text of the skills must come from one source.
- Out of scope: open, row 05.

<!-- After the user's explicit yes to this intent, add the line: Confirmed by <name> on <YYYY-MM-DD>. -->

## Destination
A spec for the check, or a decision not to build it. This is a draft; no row here is decided.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

**On hold since 2026-11-21, by Peter's decision:** this idea comes after the views mod (IDEA-015) and the status and blocked-by work (IDEA-016). Resume point: Peter labelled P01 and P02 of RES-112; the other cases wait for his label; the three survey records (RES-109 to RES-111) wait for the evaluation with him.

This idea started in the third session of IDEA-015 and IDEA-016, on 2026-11-21, in the worktree `brain-views-mod` (branch `feat/views-mod`). Nothing is committed; ask Peter before a commit. The Intent and the map are the agent's draft from Peter's words below. Peter has not gone over the rows. No research has started; ask Peter before a research run.

### A word problem

Peter's word is "quality gate". The glossary lists "gate" under _Avoid_ in its entry for Checkpoint (`GLOSSARY.md:74-77`), so "gate" must not become a second name for a checkpoint. This idea has no glossary word yet. Until row 10 decides, the text here says "the check". Peter's own words stay as he said them.

### Peter's words, 2026-11-21 (verbatim)

> So in regards to the other thing that has happened a couple times now - there have been a handful of times when you've been wondering about what to do next - sometimes when I push back on you, or when a delegated agent provides results of research they've done or when you encounter conflicting direction, "Peter just directed me to do deep research, which is a comprehensive multiagent workflow, but the interview-me skill says to delegate no more then a single agent when researching a row of an idea's map".  I'm wondering if it would be worth again leveleraging a model like jev to create a mod that lives as a hook or something with very clear criteria around identifying those senarios, effectively acting as a quality gate and preventing you from moving forward in the wrong direction in those moments and just very explicitly providing you with a rejecting error that tells you to come talk with me regarding what just happened and ask what the correct thign to do is?

> using jev with sometjhing like https://tanstack.com/ai/latest/docs/evaluate/evaluate#score tanstacks evaluate to establish a threshold that would reslt in the error and rejection of whatever you were trying to do and directing you to me might be perfect for this

> so we don't have ot use jev with decide as the gate way model - we shoudl research the options - jev was just an offg the top ofg my head excmple - the plugin  put together that you're references was put together vyer quickly with out muvh diggeing by me as something for fun - we should def evaluate much more thoughtfully and not use that to guide us

### What Peter's words settle, in the agent's reading

- Jev, TanStack's `decide()` and the jev-gate plugin are examples and leads. They are not the starting design, and they do not set the frame of the research (rows 02, 03, 04).
- The options get a thoughtful evaluation before a choice (rows 02, 03, 04, 06).
- The three moments he named: he pushes back; a delegated agent returns research; the agent meets conflicting direction (row 05).
- The rejection tells the agent to go to him, say what happened, and ask what the correct thing is (row 07).

### The agent's fault in this talk

In its first two replies the agent used the jev-gate plugin as the frame: it leaned to "call Jev by hand, as the plugin does", it took the plugin's threshold and its log-only mode as the start, and it reduced the choice to "by hand or through TanStack". Peter named that plugin as an example only. This is a case for IDEA-017 rows 07 and 08: a source that the user names is a lead that must be covered; it is not the answer.

### Facts found so far (leads, each with its source)

- Jev is TypeSafe's decision model; it returns probabilities, not text. The jev-gate plugin is one `PreToolUse` hook that asks Jev questions about a tool call, logs first, and can later `ask` the user or `deny` with a reason. Source: `~/Dev/ACMElabs/jev-gate/README.md`; `~/Dev/ACMElabs/jev-gate/hooks/hooks.json`.
- TanStack AI's `decide()` asks a decision model typed questions (`choice`, `score`, `boolean`) about one `state`; answers carry probabilities. Its adapters name other deciders besides Jev: OpenAI, Gemini, OpenRouter, Vercel AI Gateway, Cloudflare and a local server. Source: https://tanstack.com/ai/latest/docs/evaluate/evaluate, checked 2026-11-21.
- A past row holds Peter's structural option for a case where wording failed 3 of 3: a `PreToolUse` check before the first edit. Source: `docs/ideas/IDEA-001-review-follow-ups.md:46`.
- A `Stop` hook with `decision: "block"` keeps the turn going and gives the agent the reason. An Antigravity plugin can ship hooks where `PreToolUse` can return `deny` and `Stop` can return `block`. Source: `docs/research/RES-035-auto-start-mechanisms.md:29,87` (a past record; a second check is due before a design rests on it).
- The interview skill itself orders one of the three moments: a returned record leads to "resolve the row", with no talk with the user. Source: `skills/interview-me/SKILL.md:154`; IDEA-017 row 01.
- Not researched: which mechanisms can stop an agent on each host and what each one sees; which options can judge a moment, with their measured accuracy, speed and cost; how proven sources write criteria and set a threshold; whether a mod can stop a tool call.

### The agent's view, given to Peter on 2026-11-21 (not a decision)

- The three moments are not equal. "Research returns and the agent closes the row" shows as an edit to a map row and may need a plain rule only. "The user pushes back and the agent writes a note or a rule" needs a judgment. "Direction conflicts with a skill" often shows no tool call at all.
- The check and the skill text must say the same thing, or the check becomes a second rulebook.
- A threshold must come from data. The transcript of this session holds real cases of all three moments, with the correct answer known:

```text
~/.claude/projects/<project>/7c94dc97-6557-4548-9260-2ecb400b6826.jsonl
```

### Rows 02, 03 and 04 — the survey, started 2026-11-21

Peter approved a three-agent survey ("go for it"). It is the first stage only. When it returns, the agent reads each record in full and goes over the results with Peter before any deep run. No row resolves on a survey record.

- Past research, searched first: `docs/research/RES-035-auto-start-mechanisms.md` holds earlier findings on hooks (the mechanisms agent must check them again). RES-038 and RES-040 hold findings on the `Stop` hook and on a mod's `$.ui.ask`. No record covers judges, criteria or thresholds. IDEA-012 (parked) is about checks of model output in evals, not about a check that stops an agent.
- The three areas, one agent and one record each: mechanisms that can stop or redirect an agent on each host (row 02); what can judge the moment (row 03); criteria, thresholds and false alarms, with the question of when an agent should ask the human (row 04).
- Each brief names Jev, TanStack's `decide()` and the jev-gate plugin as leads to cover, and says that they are not the preferred answer.
- Row 01 (our real cases) is not in this survey.
- Returned: RES-110 (row 03, judges), read in full by the main agent on 2026-11-21. Not yet gone over with Peter. Row 03 stays in-progress.
- Returned: RES-109 (row 04, criteria and thresholds), read in full by the main agent on 2026-11-21. Not yet gone over with Peter. Row 04 stays in-progress.
- Returned: RES-111 (row 02, mechanisms), read in full by the main agent on 2026-11-21. Not yet gone over with Peter. Row 02 stays in-progress.
- All three survey records are in. Points that all three share: no source measures a check for the three moments; every source says to label own cases on both sides and to test the judge on them first (this is row 01); rules in code come before a model. No mechanism was run, and no judge was tested.
- Next: the stop to evaluate. Go over the three records with Peter, then agree on the next step. The agent's proposal is row 01 first: find candidate moments in the session transcripts, then Peter and the agent label them.

### Row 01 — the search for cases, started 2026-11-21

Peter approved it ("yea go fora it"). One agent reads the transcript of the session of 2026-11-21 only, with local files and no outside request. It collects candidate cases on both sides: moments where the agent went on alone, and like moments where it talked first. It writes neutral facts for each case in one part of its record, and its own guesses in a separate part, so that Peter and the main agent can each label the cases before they read a guess.

- The agent does not label. Peter and the main agent label, each alone, and then compare. If they do not agree on a case, the case has no reference (RES-109, source S2).
- The agent lists the other transcript files by name only. A wider search needs Peter's yes.
- Returned: RES-112, 30 candidate cases (8 positive candidates, 22 negative candidates). The main agent read Part 1, wrote its own labels, and only then read Part 2.
- Facts from RES-112 that bear on rows 05 and 06:
  - No write in this session sets a row to resolved. The one case of "research recorded as final" is a question that asked Peter to close 15 rows. So a rule on "row set to resolved" fires zero times in this session.
  - The main agent changed files through Bash with inline Python 11 times. A rule on Edit and Write alone misses those writes.
  - Each pattern of tool calls that shows a positive candidate also matches a negative candidate.
  - 8 positive candidates are far below the "about 50 on each side" of RES-109 (source S6). The earlier sessions probably hold more cases of pushback notes; a wider search needs Peter's yes.
- The main agent's labels, written before it read the guesses. PETER: label the cases before you read this list. "yes" means the agent had to stop and talk first.
  - yes: P05, P06, P07, P08. unsure: P04 (it did go to the user with a question; the fault is what it asked). no: P01, P02, P03, and all 22 negative candidates. Near the line in its own view: P03, N03, N08.
  - The guesses of the agent that wrote RES-112 differ on four cases: P03 unsure, P04 yes, P05 unsure, P07 unsure; and on N03 unsure.
- Peter labels one case per question, through the question tool, with no recommendation from the agent. His labels:
  - **P01: yes.** The main agent and the agent of RES-112 both said no. Peter's answer, verbatim: "I think this is an example of after going back and forth with a tool that's not quite working consistently during the session, I point you in the direction of another tool that might work more consistently, and if it does it gets picked up for the sesion - I think Writing it to the idea file Implies some sort of long-term Switch to this and I don't think That's what I was saying they're all there also that's not the right place for like that kind of decision anyways I think in general When we're talking This is a great example of I say something You're not totally sure If it's a long-term thing or a short-term thing and instead of asking You just write it down somewhere Not even in the right place - This would be like a great time for a Jev model to know that's not what IDEA files are for and to reject. It should also pick up on the fact that there was no conversation."
  - What P01 gives for row 05, in the agent's reading: (1) the scope of the user's words was not known (this session, or lasting), and the agent did not ask; (2) the note did not belong in an idea file, so the check must know what each kind of file is for; (3) no conversation came before the write. The agent's own "no" rested on "the user gave a direct instruction", and it missed all three.
  - **P02: yes** ("Absolutely"). The main agent and the agent of RES-112 both said no. His reasons, in short: he wanted a back-and-forth on what the mod is for, of the idea-refine kind, with no research and no record; the note treated his wish to talk as a decision to log; and the note held no information. Source: his answer to the question tool and his next message, transcript of 2026-11-21.
  - What P02 gives for row 05: a fourth kind of moment. The user wants to think together, and the agent writes a record in place of the conversation. It also gives a test for a write: does it add information that a later reader needs?
  - Two of two labels differ from both model guesses. Each guess asked "does the note match the user's words?". Peter asked "did we have the conversation, and does this belong in this file?".
- Peter's wider points from the P02 answer are for other work, not for this idea: idea files read as a log with filler and long word-for-word quotes; the Notes section of the interview skill is defined as a dumping ground, and he said "we shouldnt touch this now".
- Next: Peter labels the other cases; then compare the three sets of labels, and look at each case where they differ. Row 01 stays in-progress until then.

<!-- Save partial answers and pending questions here as they arrive, under Row NN: Settled, Source, Conditions, Open and Next. Link in-progress RES records and record waits with their retry condition. Replace settled notes with the resulting DEC/RES link. -->

## Map
<!-- Write one row per question right under the table's header, numbered from 01: | 01 | <question> | <interview, prototype, ideate, research or task> | open | — | — | -->

| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Which real moments in our session transcripts and records show an agent that went on alone where it had to talk with the user, and what did the agent do at each one? | research | in-progress | — | — |
| 02 | Which mechanisms can stop or redirect an agent on each host that Brain supports, and what can each mechanism see and do? | research | in-progress | — | — |
| 03 | Which options can judge such a moment (a plain rule, a decision model, a small general model, the session's own model, a guardrail tool), and what is known of each one's accuracy, speed, cost and privacy? | research | in-progress | — | — |
| 04 | How do proven sources write the criteria of such a check, set its threshold from data, and keep false alarms low? | research | in-progress | — | — |
| 05 | Which moments must the check catch, and which must it leave alone? | interview | open | 01 | — |
| 06 | Which mechanism and which judge does the check use for each moment? | interview | open | 02, 03, 04, 05 | — |
| 07 | What does the rejection tell the agent, and what must the agent then bring to the user? | interview | open | 05 | — |
| 08 | How do the check's criteria and the skill text stay one source, so that the check is no second rulebook? | interview | open | 05 | — |
| 09 | How do we know that the check works before it blocks anything: which test on real cases, and which limit for false alarms? | interview | open | 01, 04 | — |
| 10 | Which glossary word names this check, given that "gate" is avoided? | interview | open | — | — |
| 11 | Which hosts are in scope, and what happens on a host with no such mechanism? | interview | open | 02 | — |

## Not yet specified
- What a run with no user present does when the check fires.
- Whether the check also covers the moments of IDEA-001 row 20 (an edit with no skill loaded).

## Out of scope
None yet.
