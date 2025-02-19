Fast-Term - 1984 to 1986

As noted in my writings on time at RPI, RPI would, upon request, run a 9600 baud serial port into your dorm room.  However, my personal computer at the time, a TI-99/4a only had communication software that was reliable at only at 300 baud with a handset coupler.  This motivated me to write "Fast-Term", in 100% assembler language, that was fully capable at 19200 baud.

The Fast-Term journey began with a deep dive on the serial ports available on the TI-99/4a.  What I learned is that the serial ports were driven by a custom chip from Texas Instruments called the TMS9902, which could be programmed to different bit rates by a programmable clock divisor.    I also completely reverse engineered the ROM of TI's RS232 Interface card to better understand how the card interacted with the main board in the TI-99/4a.

As an aside, the RS232 Rom from TI also contained the shortest complete CRC-16 computation I have ever seen, with my original disassembly as below, with columns being: (address, memory contents, label, instruction decode)

==CRC 16
47C0 C046           MOV  R6,R1
47C2 0241 FF00      ANDI R1,>FF00
47C6 2A41           XOR  R1,9
47C8 C049           MOV  R9,R1
47CA 0941           SRL  R1,4
47CC 2849           XOR  R9,1
47CE 0241 FF00      ANDI R1,>FF00
47D2 0941           SRL  R1,4
47D4 2A41           XOR  R1,9
47D6 0B71           SRC  R1,7
47D8 2A41           XOR  R1,9
47DA 06C9           SWPB R9
47DC 045B           RT

Bonus points if you can figure out how that code implements the full 16 bit CRC, updated a byte at a time.

Another anomaly which arose, is that the clock divisor was not fine grained enough to truly support 19,200 baud with 10 bits per 8 bit character -- the quantization of the clock actually required 2-stop bits per character for a total of 11 bits per character on inbound characters in order to properly decode a sequence of characters without interference between characters.

I decided that my architecture would be to enable hardware interrupts for the 9902 (instead of just polling) and stuff those characters into a ring-buffer at a far faster rate than simple polling would have allowed.  If the ring buffer became full, I stopped adding characters until the ring buffer had at least 1/3 of its space freed up.   This allowed me to do things like scroll a line of text upward (a computationally expensive operation) without tearing artifacts introduced by synchronous implementations.  I ended up writing my own assembler code to manage the TMS9918 video processor to further prevent graphic artifacts caused by collisions between the NTSC protocol reading the frame buffer, and the push of new characters into the buffer.

My first release of Fast-Term was via the TIFORUM of the Compuserve online community.  I requested a contribution of $10 to $15 in exchange for a floppy disk containing the binary of FsstTerm ... those original disks were encoded with a novel disk formatting technique wherein I wrote entire tracks using low level write operations on the WD1771, with only the first track in a format readable by the TI-99/4a floppy disk peripheral card.   On that first track, I wrote a boot loader that understood how to read an entire track from the WD1771, step to the next track, and loop on reading an entire track until the program was loaded into memory.  This customized boot lasted about 2 weeks, until I got feedback from customers that their non-TI floppy controllers would not read the disks.  (yep -- they had CorComp with the controller chip at a different address, and it was a WD2793 chip with an external non-programmable data separator).  I also allowed people to mail me a floppy disk with a return envelope, and I would fulfill those orders for free.

After the disk controller compatibility boondoggle (which only occurred in the first month of distribution) I changed the distribution strategy to uploading the binary to TIFORUM in a format compatible with the binary loader of the TI "Editor Assembler" cartridge.  I also wrote a loader for that format which ran under TI Extended Basic, using peek/poke to put the machine codes into memory, then launching by poking a "secret" registered used by TI XB to transfer to assembler code.

With the binary download, I also shared the source code, for a fee, using floppy disk for distribution, usually in exchange for a contribution.

Feature requests came in daily from various users online ... most of them I did not debate, I simply implemented them in a few hours and returned the new binary to the TIFORUM that same day.  Some of the more interesting requests were a (1) reader for the blind using the TI speech synthesizer, (2) ability to display GIF images from Compuserve, and (3) ability to support XMODEM protocol for both file uploads and downloads.

The accessibility feature for the blind and visually impaired got a lot of notice and quite a few users thanking me for being able to use the online communities, something they were previous excluded from unless they had a caring partner to help them with the computer.

Implementing the XMODEM protocol took about 10 hours straight, overnight, and was delivered to the community the next day.   The implementation was about 1200 lines of TMS9900 assembler language.

I added support for 80-column text which was supported by various RGB video add-on cards, I added full support for editing an entire message before it was uploaded to a board such as Compuserve.

I added the ability to completely log a session to a hard-copy printer in real time.
I added the ability to completely log a session to disk file in real time.

One of the more interesting requests was that I rewrite X-Modem and my ring buffer protocols in such a way that they could be integrated directly into the TIBBS bulletin board software.   I made the changes and gave the source code for that to the community who rapidly adopted it nationwide and also incorporated it into their FIDOnet implementations.

Along the way with FastTerm and my other community contributions, I got numerous write-ups in local community newsletters and national magazines, including dozens of mentions in Computer Shopper.

More will come to light once I recover any copy of the FastTerm source code and read the change log.

========================================
TI-99/4a
TMS9900
TMS9901
TMS9902
FDC1771
FDC1772
FDC2793
CorComp
MyArc
Encryption, obfuscation
TI Extended Basic
Peek/Poke
Texas Instruments
Speech Synthesis
Computing for Visually Impaired
RGB monitors
TIFORUM
COMPUSERVE
