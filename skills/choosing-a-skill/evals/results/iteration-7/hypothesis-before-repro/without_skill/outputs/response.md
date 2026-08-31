Yes — but I want to start by making it happen on demand rather than guessing at a cause.

"One in five loads" is the most useful thing in your report. That ratio is itself evidence: it points at something that varies between loads rather than something structurally wrong with the code. The usual candidates are a race between two async calls (whichever resolves first wins, and sometimes the wrong one does), a render that runs before data has arrived, or state left over from a previous session in storage. But I'd be making that up if I committed to any of them now — I have the error string and a frequency, and nothing else.

So the first move is reproduction, not a fix. Here's what I'd do:

1. **Make it reproducible.** Load the page in a loop until it throws, and capture the state of the failing load: the full stack trace (not just the message), the console, and the network waterfall for that specific load. If it's genuinely ~20%, a handful of reloads should catch it. I can drive this in a real browser via Chrome DevTools rather than reasoning about it from source.
2. **Localise from the trace.** The stack tells me which `.id` on which undefined object — that alone usually collapses the candidate list from five to one.
3. **Confirm the mechanism.** Once I have a suspect, I want to make the bug appear and disappear on command — e.g. by throttling the network to widen a race window, or by clearing storage. A hypothesis I can turn on and off is a diagnosis; one that merely fits the symptom is a guess.
4. **Then fix it**, with a regression test that fails against the current code and passes after.

Two things that would speed this up a lot if you have them: a stack trace from a real occurrence (browser console or your error tracker — Sentry and friends will have grouped these), and whether it correlates with anything — first load vs. subsequent, logged-out vs. expired session, a particular browser, or whether it started after a specific deploy.

If you'd rather I just go, point me at the repo and how to run it locally and I'll start reproducing.
