NetFlix prize competition - 2008

https://en.wikipedia.org/wiki/Netflix_Prize

The Netflix Prize (2006–2009) was a $1 million competition to improve Netflix’s Cinematch
recommendation system by 10%. Thousands of teams used machine learning to predict ratings,
and BellKor’s Pragmatic Chaos won in 2009.

I first became aware of this competition in early 2008.   On my first attempt, over a weekend,
using the same tools I used for a Wall Street hedge fund ... namely, multidimensional linear
regression, SVD (singular value decomposition), and simulated annealing ... I made an 8% improvement
over CineMatch.

The next weekend I wrote a proof that satisfied me that the 10% improvement goal for CINEMATCH
was IMPOSSIBLE in a single pass through the data without feedback from the scoring oracle.  This
conclusion resulted from the observation that the integer quantized scores in the dataset (1,2,3,4,5)
could not produce the required resolution over a set with 100 million random entries.

Once I had the proof, I was no longer interested in the competition because iterating against
the scoring oracle did not feel like an intellectually honest approach to me.  Ensemble and
iterative algorithms against the scoring oracle do not have the theoretical purity of a true
singular solution.

Validation -- the winning team, BellKor, was a synthesis of multiple scoring algorithms, each of
which had learned from hundreds, if not thousands, of total attempts against the scoring oracle.
