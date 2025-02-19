Apple Computer Inc.   1994 to 1996

After I made the decision to leave DE Shaw in Jan 1994, I interviewed by invitation with the QuickTime team at Apple Computer.   They had just lost a few good people who left with Bruce Leak to be the original employees at Rocket Science Games.
 My on-site interview was Jan 17, 1994 -- I specifically remember because I was staying at the Cupertino Inn across the I-280 freeway from the new campus at Infinite Loop, and I was actually awoken by the NorthRidge Earthquake ... not sure how it woke me from 400 miles away, but I recall sitting up quickly in bed at 430am and walking out to the lobby to be inundated by the TV reporting.  When I returned to New York, it was months before Apple gave me the written job offer due to previous hiring moratoriums and other internal red tape.   I really got tired of the deep and constant snow in Long Island that winter while I was waiting for the promised offer. 
 My initial plan for Silicon Valley was to become a fractional-CTO over a small portfolio of startups, but from New York, I had very little network in Silicon Valley, and decided that joining a larger well established firm would help build a great network before veering into the CTO capacity. 
 I finally received the written offer from Apple in early April 1994 and arrived there exactly two weeks later to begin my new job as Principal Engineer for Apple's QuickTime for "cross-platform" versions of QuickTime (meaning hardware and operating system platforms from vendors other than Apple).  Microsoft's Windows 3.1 was the first target, and the initial goal was to debug and improve "QuickTime 1.x player" which had been written by a consulting firm outside of Apple.  Even though I started in mid-April 1994, the improved version of that Windows 3.1 player was ready for show and distribution at WWDC 1994 a month later. 
 After the WWDC 1994 goal, I set myself the task of porting the entire QuickTime codebase to Windows 3.1 and Windows NT 3.1 ... within a couple of weeks of studying the one million lines of QuickTime code and attempting to reconcile the calling conventions used on Mac hardware (Power Pc, big endian 32 bit) with the calling conventions on Windows (Intel, little endian 16 or 32 bit), I quickly came to the conclusion to pivot to what I believed (and later proved) was a much easier and more elegant solution, which was to port the entire macOS to Intel 32 bit and only use the native Windows for resource allocation and management (memory, graphics buffers, graphics driver semaphores).  Part of the reason porting the entire underlying OS was easier than porting the QuickTime layer is that QuickTime used (as Mac apps and systems did) handle based memory management instead of direct heap based memory management.  Other areas of concern were basic file management, virtual (paged) memory management, and coordination with graphics drawing contexts. 
 Both threads (A) maintaining the "QuickTime Player" for Windows within the context of 16 and 32-bit windows, and (B) porting the full version of Quicktime including all widgets, full codecs, and full integration with capture boards were an individual effort until Thanksgiving when another thread (C) started.   Thread "C" was a showstopper for a bit, wherein I discovered code that I had written for Apple ... inside of the Microsoft Video for Windows SDK.  Say what?? 
 Anyhow, Apple's legal team investigated too and launched a federal copyright complaint against the contractor who had developed the Quicktime 1.x player for Windows.   A couple of months later, after the contractor admitted they had copied the code (why did they still have access to Apple's source code??) and given copies to Intel under the guise of another contract they had with Intel, and Intel admitting that they had provided the code to Microsoft in source code form...Apple added Intel and Microsoft to that lawsuit in February. 
 Thread A was not taking much time, perhaps a day or so per week, in order to keep up with newly released video graphics cards, sound cards, and generally Microsoft's own code drops which invariably broke shit. 
 Thread B was generally complete by early 1995, around the time that the Microsoft and Intel thread (C) hit home.  The technical aspects of Thread B had been, writing from scratch, in C++, all of the Mac firmware from their ROM which had been partially lost and developed in Pascal.   The "Inside Macintosh" series of books was invaluable as a requirements document in that the books completely described each API all intended side effects of parameters, both valid and invalid.   I was able to locate, within Apple, a relic QuickDraw 2D that was written in "C" for the StarTrek project -- it even mostly worked once the compiler was made happy.   Endian macros all around, and added serialization mutexes to prevent any data structure from being altered while reading from a separate thread. (single writer, multiple reader mutex)   I wrote ALL of the Macintosh Toolbox API from scratch in C, (other than QuickDraw) just by using "Inside Macintosh" as my design requirements.  Again, made all data structures thread-safe.  Had some nice design arguments with the macOS QuickTime team who pointed out that macOS was actually single threaded and simulated multiple threads via a cooperative queueing mechanism.   I kept with my solution of fully preemptive thread safe for all of the new code because I believed that would allow a more real-time smooth visual feedback to the user. 
 Along the way, some of the codecs had serious problems with "smooth" video (jitter, missed deadlines, and dropped frames) and I ended up instrumenting the code to trigger various i/o pins on the parallel port as various internal functions were called ... hooked those pins to an oscilloscope (after a week or so of badgering my manager (aka "facilitator") for the acquisition of the oscilloscope because his management chain could not see how such a hardware oriented device would help a "software engineer").  I as currently understand it, one of my friends from the marketing team actually made the purchase on his trade-show budget and I got the tool I needed.  A few days later, some gnarly architecture issues in the video frame pipeline were resolved by insights gained from the oscilloscope, and life happily moved on.  By January 1995 the entire "port" was done and ready. 
 Only about 400 lines of C code were platform-specific, and I implemented those 400 lines for PowerPC (PPC), x86 (16-bit 8086), and x86_32 (IA-32). 
 With the advent of the lawsuit, I was spending several days per week educating the attorneys and advising them on technical questions to ask during their depositions of various employees of the defendants. I hired a full-time tester and outfitted a lab for testing of 100's of video cards, sounds cards, video capture cards, and a plethora of motherboards. 
 Outside of the QuickTime team, nobody in management was aware of the direction I was going with thread B, the macOS port, simply because the QuickTime team lead for macOS wanted the tech to be a fully shippable fait-accompli before introducing the rest of Apple to it.  I concurred.  We even managed to get a full-blown beta out to key developers like Adobe and Broderbund before WWDC 1995.  We did not roll out or even hint at the new ported QuickTime at WWDC 1995. 
 After a few trips to Beaverton OR (Intel) and Redmond WA (Microsoft) to assist the attorneys in their depositions of various Intel and Microsoft Employees, the Apple Legal Team invited me to work with them, nearly full time, to evaluate Apple's entire intellectual property portfolio and opine on which industry "leaders" (including Intel and Microsoft) were infringing Apple IP (patents, copyrights, trademarks). 
 With a lot of my time and attention diverted to legal initiatives, I obtained permission to hire 3 engineers and a tech  support manager to cover my role on the QuickTime team -- one was recruited from within Apple from another team, 2  additional engineers were recruited during WWDC 1995, and the new tech support manager was also recruited at WWDC 1995. 
  The engineer who transferred within Apple was tasked with porting the new QuickTime to SGI IRIX workstations, which  received special emphasis from the desire of the Pixar team to use QuickTime for post-production of Toy Story which  was rendered entirely on an SGI render farm controlled by a single ONYX server.  I had to assist with some of the  challenges that engineer faced, such as security contexts and direct access to the video frame buffer when SGI was  heavily invested in using only OpenGL for "application software".  We had to pay a couple of visits to SGI headquarters  before they were forthcoming with the technical documentation we needed. 
  Long story made shorter -- between February 1995 and February 1996 there was not a lot of new code for the  QuickTime/macOS port.   We rebranded the code "QTML" (the QuickTime media layer) and starting rolling it out as a  Beta to many other companies in the video and sound production ecosystems, with the promise that most of their  Mac application code could be directly re-compiled for Windows and other platforms. (with the caveat that  persisted data structures would need to be endian-converted, with macros we provided, when they moved  from disk/wire to memory and back to disk/wire).  Somewhere along that timeline I got appointed to the company-wide "Architecture Review Board" which had 5 members  who were perceived as the core technical leadership of the company.  Our goal was to make sure that each new  product would cleanly integrate, from a user perspective, with all of the other products in Apple's portfolio. 
  November 1995:  Our entire team got invited to the Premier of Toy Story, which was held at a theatre in San Francisco (instead of  the traditional Los Angeles/Hollywood premiers) ... our team got a mention in the rolling credits, and I got to meet  Steve Jobs and Andy Grove in person.  Steve was all about how human culture has been telling stories for thousands  of years, and his vision of how tech facilitated the telling of stories for posterity.   Andy Grove was crowing  about shipping, to date, 300 million processors, to which I responded "only 10 billion more to go", as a reference  to the size of the human population -- the color left his face, apparently I triggered one of his worst fears.  Prior to that point in the conversation, Grove had related that there were only two people in the entire company of  Intel who could hold the architecture of their current processor generation (Pentium Pro, at 5.5 million transistors)  in their head.   I mentioned that I could see myself as one of those people.  He went on to say that the next  generation of Intel Processor would only be possible through automation and verification because they would have  too many transistors for a human to comprehend.  When the Toy Story game came out the next month, many of our team members who provided expertise and other support  to the video game production got line item mentions in the video game credits. 
 Around February 1996, there were management changes in the Apple senior leadership and word got out about the "newly ported" macOS and QuickTime.   Among other things, people began to realize that I had individually ported all of macOS toolbox, boot roms, and QuickDraw 2D into a platform-agnostic source code base -- and they were able to compare that to the failed efforts of the "StarTrek" team (of about 300 people) to do the same thing a couple of years prior. 
 At that point, the shite predictably hit the fan with senior management and Board of Director members at Apple who were having a lot of fear of losing or cannibalizing their proprietary hardware profits for the Digital Production eco-system to alternative vendors if a full-featured QuickTime was available on competing hardware platforms. 
 Among other things, my manager left the company, his manager left the company, the software group manager left the company -- leaving a complete vacuum in the chain of command between me and Gil Amelio, the new CEO.  As our internal process at the time was to complete and share a monthly MBO (Management By Objectives) with our direct manager, I sent a request to Mr. Amelio's secretary stating I needed to do my monthly MBO with him, since everyone else was a TBH (to be hired).  I was invited to his office the next day and laid out my involvement in the legal proceedings and also the newly disclosed port of macOS and QuickTime to other platforms.  He expressed that many other groups in Apple (especially the computer division) were lobbying to kill the cross-platform initiative. I shared that if the initiative for cross-platform (my baby, as it were) was killed, there would be no reason for me to stay at Apple, and for him to think about the consequences of my departure on the legal initiatives.   When I left his office, my next stop was at the office of Ed Stead, the Chief Legal officer of Apple, and I shared my perspective on the situation with him, and the perspective that if Apple wanted dominance in the video/audio production fields it would need to put a stake in Microsoft's initiatives and keep me on board.  Ed agreed.  Later that day, when I returned to the cocoon of QuickTime development in 2 Infinite Loop, I shared my conversations with Amelio and Stead with the QuickTime team, and our marketing team got busy calling all of our beta customers telling them to have their CEO or other high level rep call Gil Amelio directly and lobby for our vision of cross-platform QuickTime. I have heard that over 60 different companies called Amelio during the next two weeks advocating our continued existence or their withdrawal from supporting Apple hardware as their primary platform. 
 A week or so later, Gil and Ed called me to a meeting in the executive conference room guaranteeing my position and the continued existence of the cross-platform QuickTime initiative. 
 I stayed on through WWDC-1996, at which I led a main-hall presentation on "Cross-platform QuickTime" to over 1000 Apple developers, and explained what they could expect in porting their applications to QTML. 
 Once QTML was publicly rolled out, and in the hands of thousands of developers, I decided to move on from Apple later that month, and left to form a startup with a previous co-worker and a friend of his.  I departed Apple in June 1996. 

 Followup after I left Apple:
 1) QTML became widely popular and developers used it to port Mac applications on to Windows.
 2) QTML became essential when macOS converted to a true `preemptive multitasking environment on the BSD/Darwin/XNU kernel and got branded as the "Carbon API" for those who wanted to port their legacy macOS applications to run natively on Darwin.
 3) Steve Jobs came back as Apple's CEO
 4) the Microsoft/Intel lawsuit was settled for $150 million in cash, and other concessions like MSFT would continue supporting MS Office on Mac for another 5 years, and that Microsoft Explorer Web Browser would be shipped with all Mac computers.
 5) QuickTime, as a technology, won an Oscar award for its contributions to Hollywood.
 6) QuickTime media format became the basis of MP4 and related file formats, in use for over 3 decades and the foreseeable future.   Uses include all streaming video platforms, all mobile devices supporting video, essentially all satellites supporting video.
 7) QuickTime morphed into iTunes from a branding perspective, and is a critical part of all audio and visual capture and presentation on iPhone, iPad, AppleTV and macOS devices.
 ===================================
 Tech used:
 C
 C++
 Pascal
 HyperCard
 M68000 (and later)
 PowerPC (PPC)
 x86 (16-bit 8086)
 x86_32 (IA-32)
 macOS
 macOS drivers
 Windows 3.x
 Windows 3.x DDK (drivers)
 Windows NT
 Windows NT DDK (drivers)
 SGI IRIX
 SGI ONYX
 Pink
 Unicode Internals
 Apple StarTrek
 QuickDraw 2D
 QuickTime 1.x
 QuickTime 2.x
 QuickTime 3.x
 Cross-Platform QuickTime
 VGA
 VGA drivers
 sound card
 sound card drivers
 Microsoft GDI
 Video Compression
 Video Decompression
 Video Capture
 Video Capture Cards
 Video Capture Card Drivers
 memory management
 virtual memory management
 low-level filesystems
 low-level filesystem drivers
 Async distributed software
 Global-scale time synchronization algorithms

 ============================================

 https://en.wikipedia.org/wiki/QuickTime#QuickTime_2.x
 https://patents.google.com/patent/US5875354A/en?oq=US5875354A
 https://patents.google.com/patent/US5825359A/en?oq=US5825359A
 WWDC 1995 - main hall presentation "Quicktime" - as Microsoft Windows tech leader
 WWDC 1996 - main hall presentation "Cross Platform Quicktime" - as tech lead, main presenter
 WWDC 1996 - main hall presentation "Quicktime" - as Cross Platform tech leader
