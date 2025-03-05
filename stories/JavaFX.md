Sun Microsystems Inc - 2008
> Principal Consulting Engineer - JavaFX project

#### Friday, Sept 26, 2008
On Friday, Sept 26, 2008, a long term friend of mine asked me to meet him for lunch at his office in the new(ish) campus of Sun Microsystems in Santa Clara, CA.  I had worked with him at Apple Computer, C2B, JavaSoft (Sun), and he had served as VP of Engineering at more than one startup I founded.  He went back to Sun in the early 2000's as a Staff Engineer, and when I met him that day I learned that he was SVP over all 2,000 engineers at Sun working on Java related technologies.

He explained to me that he had a major problem with his product deliveries, especially JavaFX for RIA (Rich Internet Applications, like Microsoft's Silverlight or Adobe Flash).  He explained that the announced launch date being relied on by customers and investors was December 4, 2008 ... slightly less than 10 weeks in the future, and that he was worried about the team's technical execution.  He also explained that Sun had already invested 3 calendar years and over 300 person-years of engineering effort.  I listened intently and asked some questions about engineering process and governance that he had no ready answer for.  He ended the conversation with a question, "Can you look at this in depth for me, and let me know when we are really going to ship?" -- Given that the codebase was about three-hundred fifty thousand lines of code, and that there were over 150 engineers still working on the product, I responded that I would investigate the code, customer expectations, and team members over the next ten business days and give him a report.  I signed a simple NDA and told him the budget for my investigation - terms which he agreed to.

#### Friday, Oct 10, 2008
I appeared at his office again on Friday, Oct 10, 2008 to deliver my findings.  I had spent the prior two weeks meeting with key team members from architects, to junior engineers, to product managers.  I also met with several key customers who were part of the product launch, to determine their expectations.  I also had put all of their code into a reverse engineer tool, Sparx "Enterprise Architect", so that I could see how all of the code tied together from a high level model perspective.

The news I gave my friend was bleak -- I stated that at the rate his team was going, it was going to take at least 18 more months to complete the core feature set and deliver an acceptable product to the market (slipping the launch date to Sept 2009).  He was actually prepared for my answer, and revealed that it was more optimistic than the estimates from his own staff.  I explained that the most critical feature that his team had missed the mark on was playback of digital video, the human experience in viewing that video, and that there was nobody on his team that had the domain expertise to understand it.  After listening to my findings and explanation, he paused, and asked "Can you do something about it?  Can we meet the launch date in December if you help us?"

I indicated that I thought I could, but that I needed to check on availability of friends of mine who had the required domain expertise in digital video, and synchronization of video with audio playback.  I asked what sort of budget he had in mind if we could meet the delivery date.

I spent the weekend contacting friends and coworkers of mine who had been immersed in my development of the QTML for Apple - some engineers who had been on the QuickTime team, and some engineers who had worked for other companies in the QuickTime ecosystem.

#### Monday, Oct 13, 2008
I met with the SVP of Java at 0730h that morning, and reported that I had a team of 5 people ready, willing, and able to begin, and that I wanted to cherry-pick 5 of his best and brightest to work with my team, forming a team of 10 people total.  I shared that I believed that we could get the product to ship on time, but that it would require extreme dedication and 120 hours plus per week for most of the team members.

He agreed to my terms, sent me a confirming email, and we started in earnest that afternoon.

To understand what was missing from JavaFX you need to compare a comic flip-book to the smooth video you see on Television or modern Internet streaming services.  The basic algorithm that most newbies try is something like "(1) wait for the appropriate display time, (2) read the frame data, (3) decode the video frame, (4) display the video frame", this approach is very naive due to the fact that step #2 (decode the frame) can actually take longer than the interval between frames, and that steps #2 to #3 add latency to the display of the frame, with the ultimate visual affect of jerky video and visible pauses in the display process.   The other naive assumption is that audio and video could be presented separately and stay synchronized.  The existing JavaFX was completely naive at the time.

I spent the first two hours with the team giving them a download (training session) on how to actually display smooth video and synchronize it with the audio playback, and also how to read from the data source without interrupting the video playback.  During that training, the other opinion I expressed is that the most essential decoding and copying of video data would need to be implemented as "native code" in order to keep things flowing smoothly.

We spent the remainder of the afternoon acquiring workstations and critical software (on my credit card, and some from the JavaFX testing lab), acquiring (by takeover) an office large enough to hold the entire team, and equipping that office with "whiteboards" covering all of the walls.  The "whiteboards" were 1/8" shower enclosure sheets from Home Depot that we treated with a common household spray wax.

I gave my team some hand-picked videos from my collection and told them that we were done with the technical implementation when those videos played smoothly on all of the target devices, including low-end mobile phones that supported Java.  I also threw in some 4K video demos I had received from friends, including one movie trailer -- as a test for the higher end desktop hardware available at the time.

I also gave the technical team the direction that all new code must follow the TDD (test driven development) lifecycle, and that all UX must be specified from a perspective of "customer delight".  The TDD initiative also required the team to add thousands of lines of code to deal with observability of metrics needed to determine the success of those tests.

My next order of business, once the technical team was launched and on the way, was to set up a series of meetings with the product management team and some of the outside customers.   My intention was to negotiate a large reduction in feature set for the JavaFX 1.0 release with product management, with the blessing of those customers.  Ultimately, we removed over 15% of the features desired by the product managers, in favor of making essential features such as digital video work to delight our customers and the ultimate end-users.

I spent the next six weeks with my team, 7 days a week, often over 20 hours per day, writing tests, writing new code, ripping out unwanted code, writing native code, and reviewing results from the test lab.  We often slept on the floor on yoga mats with a single bedsheet, and ordered 3 or 4 meals a day from outside food delivery services.

We added a "modern" multimedia pipeline, all the way from asynchronous i/o for fetching the presentation media, to a sophisticated scheduler that could manage up to 10 seconds of buffering i/o and decoded video frames so that the video could play smoothly.   We derived the video playback clock from the observed rate of play of the audio samples, and we rate adjusted the audio sample rate to match the real time clock instead of blindly relying on the audio chipset capabilities.

#### Tuesday, November 25, 2008
We were "code complete" and presented the new product to Sun's Java leadership team, and shared it with those key outside customers as a "beta", looking for feedback on any other features that may have still been broken.  The videos played smoothly, and were completely synchronized with the audio playback.  The UX was responsive.  Video playback also worked over the Internet, not just from local storage media.

#### Thanksgiving Weekend - Nov 27-30, 2008

Three of us stayed on over the weekend, still working 20-hour days over the 4-day holiday.  Our primary goal for wrapping things up was to add more design related comments to the code base and to do a complete refresh of the SDK documentation for external developers, complete with example code.  We were also on-call with the outside developers who wanted to co-launch their products with the JavaFX launch the next week.

All in all, we deleted 30% of the original [September 2008] codebase, we added 40,000 lines of new code (including automated test cases and the related observability), all with 10 people in less than 10 weeks.  We accomplished in those 7 weeks the equivalent of 60 person-years of work from the original Sun team, with an investment of less than 5 person-years of effort.

#### Tuesday, Dec 2, 2008
`Stock price of Sun Microsystems (JAVA) closed at $2.83.`
The prices of Sun's stock was still on a steady decline from its previous high earlier that year of \$18.13.

#### Wednesday, Dec 3, 2008
`Stock price of Sun Microsystems (JAVA) closed at $3.25.`
News that JavaFX would be shipped on time started to leak.

#### Thursday, Dec 4, 2008
`Stock price of Sun Microsystems (JAVA) closed at $3.19.`
The stock markets on the East Coast closed before the end of day announcement of JavaFX 1.0 release, traders starting taking some profit on the previous day's uptick.

#### Friday, Dec 5, 2008
`Stock price of Sun Microsystems (JAVA) closed at $3.22.`
The stock markets on the East Coast closed before the end of day and traders were still taking some profit on the previous day's uptick.

The important announcement late that day came from an "investment recommendation" firm being quoted in several leading financial news feeds as stating "JavaFX marks the first time in over a decade that Sun has released software on time."

Street credibility.

#### Wednesday, Dec 17, 2008
`Stock price of Sun Microsystems (JAVA) closed at $4.27.`
You decide -- did the on-time release of JavaFX cause this 50% increase, over $1-billion in market cap, in the stock price in 15-days?  What I can say is that I wish had negotiated part of my team's compensation as stock instead of cash.

#### Monday, April 20, 2009
Sun Microsystems Inc., and all Java released products, were acquired by Oracle, Inc, for \$9.50 per share at a \$7.4 billion valuation.

```
C
C++
Java
JNI
Swing
AWT
JavaFX
graphics performance
video pipeline
latency
jitter
dropping frames
product management
```
1) [JAVA - historical stock price]https://www.advfn.com/stock-market/NASDAQ/JAVA/historical
