Technology Contributor - publication of "A Miracle of Virgina - The School for Statesmen"
Ben Franklin Publishing (1984)

======================================================

I created from scratch a system to capture calligraphic font glyphs using NTSC video camera.
At the time, there were no A/D converters and RAM fast enough to capture in 1/60 sec, so I took
a different approach with the MATV-0816 A/D converter which could accurately sample 8bits with a
maximum 10ns skew.  The architecture was a 12 bit line-counter which reset every for every horizontal line
in the NTSC image to a value provided by a TI-99/4a computer.  When the counter counted down to zero
from the provided value, a sample was triggered and read from the MATV into the TI-99/4a at about 16,000 hZ
which was achievable by writing machine language for the capture loop.   I also had to detect the "short line"
at the top of odd-fields in the 60 hZ field rate (30 hZ frame rate) in order to prevent a shuttering
effect from swapped even and odd fields.   The count down was incremented 30 times per second by
observing the vertical blanking interval, and was paused while the computer performed i/o operations to
save the image data which was much larger than available memory.

The hardware sampling process provided a 525x4k resolution 8-bit image.  Post-processing of the data into
vectorized glyph boundaries, using edge detection, was done on the TI99/4a in the BASIC programming language.
Special consideration learned along the way was the lighting of the background for the glyph on paper
was not a constant, but a gradient which became brightest close to the light source.  I wrote an
algorithm which detected the gradient lighting background and used that to correct the image prior
to edge detection and vectorization.

The calligraphic data set consisted of 80 Glyphs, 52 for upper and lower case, another 10 for digits, and the
remaining 18 for other characters such as punctuation.

=====================================================

Part 2 -- once the glyphs were captures and vectorized, I imported all of them into a KayPro computer running CP/M by
using a custom serial protocol, implemented in machine language on both ends, between the TI-99/4a and the Kaypro.
From that point, I manually added spacing and kerning hints to the data so that the glyphs could use a program
named "FancyFonts" for layout of entire pages.

Each page was printed on a dot-matrix Epson RX80 printer with multiple partial pixel offset overstrike of each
line (both horizontal and vertical), in order to fill all characters fully black before feeding the paper
to the next line.

The book was published Jan 1 1984

=====================================================
KayPro II
Seequa Chameleon
TI-99/4a
TMS9900
TMS9902
TMS9901
FM Floppy
MFM Floppy
MATV-0816
8086
8088
Z80
CPM
MSDOS
NTSC

https://a.co/d/3OKlSCT
https://www.analog.com/media/en/technical-documentation/obsolete-data-sheets/616811matv-0816.pdf
