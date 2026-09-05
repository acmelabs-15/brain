# 02 · Constraints and goals — as Peter stated them

These are the standing constraints behind every rule in METHOD.md. Where a quotation is given it is Peter's wording from the conversations in which the kits were built (2026-09-04/05); where it is not, it is a close paraphrase of a repeated position. Every later document in this folder, and every decision from D-012 on, obeys them. A proposal that conflicts with one of these was withdrawn even when it would have saved tokens or time.

## C1 — Zero quality compromise

> "…cannot be solutions that result in any compromise on quality."

> "I don't want to risk losing any more quality."

Meaning, as applied: no smaller or faster model reads or extracts anything; no source is summarised before the model sees it; no verification step is removed; harness compaction is never used as a working mode; efficiency measures are accepted only where they leave what the model reads, and which model reads it, unchanged. This withdrew model tiering and the `model: flash` lever (`04`, `05`), and later made `Model: "inherit"` the dispatch setting (D-017) so every worker provably runs the same model and effort as the primary conversation.

It also bounds the reset itself: repairing cards in place was rejected because their provenance could not be proven (D-016).

## C2 — The output is the thing, not the tokens

> "I'm not really at a point where I'm interested in trying to continue to cut tokens or do anything else."

Once the five zero-cost mechanisms (D-015) and the three fixed-cost cuts justified by the log (§9.3 of the experiment doc) were in, token efficiency stopped being a goal. Anything further has to be argued on quality or on wall time.

## C3 — Two things the budget must guarantee

> "All I care about are two things: making sure no processing is happening as the context rot starts to kick in, and — as long as we can calculate that value — it also means that we are able to identify exactly how much work can be processed within that safe limit or threshold."

This is D-010's specification. The ceiling is per model and evidence-based; `budget.ts` calculates what fits; the session closes with the close cost still in hand. Compaction is explicitly *not* one of the two things: "I'm not really so much worried about the compaction."

## C4 — Maximum parallelism, if and only if it costs nothing in quality

> "If there's more work that can be done in parallel, and doing that work in parallel doesn't negatively impact the quality in any way but improves performance, why would we not see if we can establish some additional calculations that would allow us to do that."

Hence the second half of D-010: `k` simultaneous runs × `n` units, stepped up one notch at a time with a clean-run rule and a wall-time bound that detects the harness's stream limit. Bigger runs and simultaneous runs are the lever; fewer checks are not. The survey explorers and both auditors inside a Teamwork run stay.

## C5 — One action starts a conversation; the conversation runs to its end

> "Ultimately, I want to be able to just give it the prompt — one thing — and then that fresh conversation does all of the evaluating, all the measuring…"

> "Wait what? Why do I have to do that?" — on being asked a question mid-session.

So: `PROMPT.md` is the one paste; the agent runs the interview itself (D-017); it asks nothing mid-session and ends with `STOP: needs Peter` only when the files are contradictory; the headless driver (D-018) removes even the paste.

## C6 — Teamwork fits this project

Peter's correction of the researcher's verdict: this work — a long project, deep research, a human gate, then a build — is exactly the documented Teamwork use case. The defect was granularity (one team per unit) and the missing verification field, not the mechanism. Boost is a code-verification pipeline and is considered only for Phase 7 build units that are test-verifiable (D-014, kept in D-017).

## C7 — Generality

> "I don't want the solution to be something that's super specific to just that [package]… general solution… potentially in all three of these code bases."

> "Solutions that are able to be implemented in a way where they could be applied to any code base."

The duplication ledger keys on bytes and file names, never on a package's layout; the five mechanisms are plain Bun scripts that take paths and print text; `partition.ts` finds a skill by the directory that holds `SKILL.md` at any depth.

## C8 — Evidence, not claims

Standing from the first kit (R2) and sharpened after session 012's false report: commands and their output, never prose about what was done; every harness claim cited to its documentation or marked `undocumented — probe`; fabricated URLs are a defect (one experiment doc was replaced for this). Numbers written by the agent come from an instrument or a script, never from memory.

## C9 — Presentation preferences (for the assistant, not the agent)

When explaining the method to Peter: ASD-STE100 Simplified Technical English, no jargon, clear visual structure, full depth preserved, and — when he asks for a re-pitch — context first, then the sequence. Recorded here because the record itself is written that way.

## Models in scope for the ceilings file

Gemini 3.8 Flash (the running model, at effort high), Gemini 3.7 Flash (proxy evidence), Gemini 3.1 Pro (the previous running model), Claude Opus 5, Claude Sonnet 5, Claude Fable 5.1 / Mythos 5.1. The Claude 4.6 generation was removed at Peter's direction on 2026-09-05.
