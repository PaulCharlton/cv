# Apple Computer Inc. — 1996 and After

## The Friday Morning Stack

WWDC 1996, 8:30 a.m., main hall. Greg Chapman, Keith Gurganus, Michael Kellner, and I had the "Multiplatform QuickTime" session — name changed from "Cross-Platform" recently, because by 1996 "cross-platform" had been beaten to meaninglessness by the industry and we wanted a word that meant we actually shipped on every machine we said we'd ship on.

Center stage, for the full forty-five minutes before I picked it up, sat a three-foot stack of Inside Macintosh. The full set. Every manual Apple had ever published describing the classic Mac Toolbox — QuickDraw, QuickDraw GX, AOCE, Text, Component Manager, Files, Memory, OS Utilities, Toolbox Essentials, Imaging, Interapplication Communication, Power PC Numerics, the whole run. The developers could see it. Nobody in the room knew what it was for yet.

We walked the room through QuickTime 2.1 for Windows first. The installer that went and found every previous QuickTime scattered across the user's hard drive and cleaned it up silently. The control panel that let tech support diagnose sound cards and video configurations on the phone (introduced via a scripted skit with Keith playing "Good Times Multimedia" support, talking to a user whose only information about his own PC was that it had "Intel inside"). Toy Story on a 486 — Pixar's custom codec running 256-color raytraced footage at full frame rate, with their custom data handlers preloading twenty possible branches so no click ever hesitated. The Netscape plugin. The pitch calibration.

The pitch calibration is the one nobody remembers and it was the tell. PC sound cards in 1996 were individually off by as much as 20Hz on a 440Hz reference — each card a different fraction of a percent wrong, set at the factory and never corrected. For a short sting, nobody notices. For a twenty-minute title, the audio drifts half a second out of sync with the video, and the viewer's brain reads it as "this feels broken" without knowing why. So the installer played a twenty-second calibration tone, measured the card's actual rate against its claimed rate — the machine on stage asked for 22050Hz and was delivering 22048Hz — and stored the correction. Every subsequent playback on that machine compensated for its specific card's specific defect. The user never saw it. That was the point. Multimedia, we said repeatedly from the stage — *it just works*.

"It just works" got used roughly a dozen times in the session. Greg used it when he finished the installer demo. Keith used it implicitly every time the control panel resolved a misconfiguration. I used it to close the Mac/Windows round-trip when we edited a movie on Windows 95 and played it back on a Macintosh. In 1996, the phrase wasn't a marketing slogan. It was an engineering oath. It meant *the user will not have to understand the forty thousand things we are doing to make this not break*. Ten years later, when Apple's consumer marketing picked it up for the iPod era, most people forgot it had been an internal promise among four engineers in a hallway first.

## The Sort

Forty-five minutes in, I walked over to the stack. The slide behind me listed the Mac Toolbox subsystems in a grid. I picked up the manuals one at a time and put them into two piles — to the left, what was coming with us to every platform QuickTime would ever ship on; to the right, what we were leaving on the classic Mac to die quietly.

Sound Manager — left. QuickDraw 2D — left. Text and TrueType — left. Component Manager — left. Image Compression Manager — left. Memory, Files, OS Utilities — left. QuickDraw 3D — left.

Then AOCE, the Apple Open Collaboration Environment. The entire PowerTalk initiative. I held it up. *"AOCE — like if any of you guys even know what this is, this is a huge book. We're not doing that."* Right pile.

QuickDraw GX. Ten manuals. A gorgeous typography system, a complete printing architecture, nobody in industry had shipped a real product against it. *"GX, it's interesting, but we're not doing it just yet."* Right pile. A few manuals later: *"More GX. I mean, GX, like these guys went hog wild with their manuals, like have ten of them."* Right pile.

Then networking — Open Transport, AppleTalk, MacTCP. *"I don't think we're going to have that in the near-term future."* But these didn't go onto the GX pile. They went into a third, smaller stack: *defer*. Not dead. Just not needed for a cross-platform runtime whose job was to host Photoshop and Premiere and Director on other people's hardware. If someone later needed full networking semantics preserved, we'd come back to these. (Six years later someone did. More on that.)

Power PC Numerics — right. Interapplication Communication — right for now. AOCE again, just to make the point — right.

When I was done, the three-foot stack had become two eighteen-inch stacks plus a small defer pile. The room stood up.

## Why They Stood Up

The standing ovation wasn't for the showmanship. It was the room exhaling.

Every developer in that hall had spent two to three years being told, from Apple stages, that GX and AOCE were the future. Evangelists had flown out. Roadmaps had been drawn. Magazine coverage had been placed. And meanwhile, the actual shipping products those developers were responsible for had quietly stayed on the 1984 Mac Toolbox plus QuickTime, because GX was a tarpit and AOCE was unshippable. Nobody said so out loud because Apple was officially committed and because evangelist relationships depended on playing along.

Then four engineers from the hallway walked on stage at 8:30 a.m. on a Friday and sorted the manuals publicly. Not as a proposal. As a done deal. The short stack was already shipping as a cross-platform runtime. By WWDC 1996, Adobe and Broderbund had been running QTML betas for nearly a year. Gil Amelio had tried to kill the project four months earlier and been rolled by more than sixty phone calls from beta customers threatening to move their production pipelines off Mac hardware. Every one of those companies had been coached to call Amelio directly by our marketing team, the afternoon after I'd walked out of his office and Ed Stead's. The sort on stage was a public ratification of a political fight that had already been won indoors.

The "it just works" line held because the stack sort was honest about what "it" was. AOCE didn't work. GX didn't work. Pretending they were going to work on Windows too would have compounded the lie. Cutting them publicly meant the short stack was a promise we could actually keep.

## The Secret Sauce

Everything in the left pile had already been rewritten from scratch in C between April 1994 and January 1995, using Inside Macintosh as the requirements specification. About a million lines of the original codebase — most of it Pascal from the System 1 and System 6 eras, some of it half-lost in firmware ROM — reimplemented in a form that could be compiled against 68K, PowerPC, 16-bit x86, 32-bit x86, and (by WWDC '96) MIPS for SGI IRIX. The entire platform-specific surface was roughly 400 lines of C — memory allocation, file handles, graphics buffers, driver semaphores. Everything else was platform-agnostic.

Two architectural decisions are worth calling out because they mattered later and nobody outside the team saw them at the time.

First, all data structures carried single-writer/multiple-reader mutexes from day one. The classic Mac was single-threaded and faked concurrency with a cooperative queue. I took some heat from the Mac-side team for making QTML fully preemptive — they pointed out, correctly, that the Mac didn't need it. The answer was that a cross-platform runtime hosted inside someone else's preemptive OS (Windows NT, IRIX) could not afford to assume cooperative scheduling. And, less urgently at the time, neither could any future Mac OS built on a preemptive kernel. That second point would matter in 1999.

Second, the platform was scaffolded on a relic. A partial QuickDraw 2D implementation, written in C for the Star Trek project in 1992-93 and then orphaned when Star Trek failed, was still sitting in Apple's source tree. I found it, got the compiler to swallow it, added endian macros and the mutex layer, and built outward from there. The project that had publicly failed to port the Mac to Intel using 300 engineers had, almost by accident, left behind the exact piece of code that made porting the Mac to Intel solo feasible.

## The Lawsuit

Thread C in the narrative — the piece that isn't in the stage show and isn't in the public history either. In late 1994, working on the Windows player, I found code I had personally written for Apple embedded inside Microsoft's Video for Windows SDK. The contractor who had produced the original QuickTime 1.x Windows player (and who somehow still had access to our source tree) had handed code to Intel under a separate contract, and Intel had handed it to Microsoft in source form.

Apple Legal filed federal copyright complaints in early 1995. Intel and Microsoft were added in February. I spent the next eighteen months in Beaverton, Redmond, and Cupertino, working with Ed Stead's team preparing depositions and auditing Apple's broader IP portfolio for additional infringement.

In the public record, this lawsuit surfaces years later as a $150 million "Microsoft invests in Apple" announcement at Macworld 1997 — the money that Steve Jobs, newly returned, used to buy the runway that shipped the iMac. The public framing was that Microsoft had extended a friendly hand. The private framing, to those of us in the depositions, was that Microsoft had settled a copyright suit and agreed to ship Office on Mac for five more years and bundle Internet Explorer, in exchange for which Apple agreed not to pursue the patent portfolio.

Both framings are true. They are very different stories about the same transaction.

## Toy Story

November 1995. The QuickTime team was invited to the San Francisco premiere of Toy Story, held a night after the Los Angeles premiere Disney had hosted. Our team was in the rolling credits. The film was the first feature-length computer-animated movie and had been rendered entirely on an SGI ONYX-controlled render farm running IRIX — which was why Michael Kellner had been spending the year porting QTML to IRIX against an OS whose security model blocked direct frame buffer access, and why we'd had to lean on SGI repeatedly to get the documentation we needed. Pixar's pipeline couldn't ship without our port. SGI's default answer was "use OpenGL and stay in your lane." Eventually SGI handed over the docs because the alternative was telling Pixar no.

At the premiere I met Steve Jobs and Andy Grove. Jobs talked about humans telling stories for thousands of years and technology as the latest medium for carrying those stories forward. Grove talked about shipping the 300-millionth Intel processor. I said "only ten billion more to go" — meaning the human population — and watched the color leave his face. He'd been telling me, moments earlier, that only two people at Intel could hold the Pentium Pro (5.5 million transistors) in their head, and that the next generation would require automated verification because no human would be able to. The scale ceiling was the thing he was afraid of. I'd named it.

## The Defer Pile

I left Apple in June 1996, two weeks after the WWDC presentation, to start a company with a former coworker. QTML was public, the beta partners were shipping, the legal work was in the hands of people who would carry it the rest of the way.

What happened next took four years to play out, and I was gone for most of it, but the shape is clean.

Michael Kellner — the same engineer who had done the IRIX port against a hostile Unix — ported QTML to XNU when Apple committed to Mac OS X. The IRIX work had been the rehearsal. XNU was another preemptive Unix with a locked-down graphics stack; the patterns were the same. That port shipped as the implementation layer of the Carbon API in 2001, and it is the reason Photoshop, Illustrator, Quark, Office, and every other major Mac application survived the NeXT-kernel transition without being rewritten against Cocoa.

The defer pile came off the shelf around the same time. Open Transport, AppleTalk, and the networking manuals I had set aside in 1996 because QuickTime on Windows didn't need them were exactly what Classic-on-OS-X needed to host unmodified Mac OS 9 applications. Finder as a real application again. The classic Mac window manager, layered on top of the Darwin window server. The OT-over-BSD-sockets shim. That was the work that happened in '99–'01, built on top of the QTML foundation Kellner had already retargeted to XNU. Not a parallel reimplementation of the Toolbox. The defer pile, finally picked up.

The keep/defer/kill decomposition I made on stage in 1996 is the same decomposition Apple's engineering executed to ship OS X in 2001. The kill pile (AOCE, GX) stayed dead. The keep pile became Carbon. The defer pile became Classic.

## What Came After

Mac OS X shipped. The iMac shipped. The iPod shipped on a FireWire and QuickTime foundation. iTunes — QuickTime rebranded for a consumer audio workflow — shipped. The iPhone shipped with the QuickTime file format as the native video container. The App Store shipped on top of a platform whose runtime semantics trace directly back to QTML. MP4, which is the dominant video format of the internet, is the QuickTime file format with an ISO rubber stamp on it.

Thirty years after four engineers sorted a stack of manuals on a WWDC stage, the ecosystem that survived that sort — classic Mac apps through Carbon, Pixar through IRIX, MP4 through every screen and satellite on Earth — is a $4 trillion business. The ecosystem that didn't survive the sort (AOCE, GX) is a Wikipedia footnote.

The line we kept repeating from the stage still holds up:

> It just works.

It was an engineering oath in 1996. It is a product category now. The distance between those two meanings is the distance between the short stack and the three-foot one.
