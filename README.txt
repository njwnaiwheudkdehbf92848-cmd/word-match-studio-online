Word Match Studio V5.1
==========================

START
-----
1. Extract the entire ZIP.
2. Double-click START_GAME.bat or index.html.
3. Microsoft Edge is recommended on Windows 10/11.

V5.1 LAYOUT
-----------
- Central word/image matching canvas is the primary area.
- Left navigation is narrow and uses clear icon + text labels.
- Import vocabulary appears only in the top toolbar.
- Statistics and settings appear only in the left navigation.
- The right learning list and bottom metrics are compact assistants.

OFFLINE
-------
- Game logic, Excel import, unit selection, progress and local Windows voices can work offline.
- Some Edge natural voices may require Internet access.

EXCEL
-----
- Use .xlsx.
- Column A: English.
- Column B: Chinese.
- Each worksheet is one unit.


V5.1.1 SMART CARD LAYOUT
------------------------
- English words automatically shrink according to length and available card space.
- Chinese meanings automatically wrap and shrink until the complete text fits.
- Emoji and picture content automatically scale down to remain inside the card.
- Local image files use object-fit: contain and are never cropped.
- Full card content is also available as a mouse-hover tooltip.
- The layout recalculates automatically when the window size changes.


V5.1.2 NAVIGATION FIX
---------------------
- The Wordbook button now opens the current vocabulary list.
- Search by English or Chinese.
- Filter to show only wrong words.
- Click the speaker button to hear any listed word.
- The Growth button now opens cumulative learning progress and stage details.
- Both features use browser local storage and work offline.


V5.1.3 FULL-PAGE THEMES
-----------------------
Three complete offline themes are included:

1. Simple
   Neutral light gray and white with maximum readability.

2. Magic
   Deep blue-purple night background, stars, tinted sidebar,
   lavender panels and magical card surfaces.

3. Dream
   Soft pink-purple cloud background, translucent panels and
   gentle pastel card surfaces.

Changing the theme updates the whole page, including:
- page background
- sidebar
- toolbar
- game area
- learning list
- cards
- statistics
- dialogs

No online images or external resources are used.


V5.2 MOBILE AND TABLET
----------------------
- Responsive layouts for desktop, tablet and phone.
- Phones use bottom navigation and a full-width game area.
- Settings scroll horizontally on small screens.
- The study list opens as a drawer.
- Touch input is supported.

Android: extract and open index.html with Chrome or Edge.
iPhone/iPad: extract in Files and open index.html in Safari.
Local system voice availability differs by device and OS version.


V6.0 CLASSROOM COMPATIBILITY
----------------------------
CLASSROOM MODE
- Click "课堂模式" in the top bar, or press F9.
- Side navigation, study list and statistics are hidden.
- The game board expands to nearly the whole screen.
- Touch targets and selected-card outlines are enlarged.
- Designed for ClassIn screen sharing, Seewo touch boards,
  projectors and classroom computers.

EXCEL COMPATIBILITY
- A local copy of SheetJS is included.
- Excel import does not depend on the browser's DecompressionStream support.
- This improves compatibility with older embedded browsers used by
  classroom software.
- Use .xlsx files: Column A English, Column B Chinese.
- Every Sheet is treated as one Unit.

OFFLINE
- All program files, Excel parser, themes and sound effects are local.
- System speech availability still depends on the device's installed voices.
- Keep the entire extracted folder together.

IMPORTANT TESTING NOTE
- Code compatibility checks were completed in this build environment.
- Actual ClassIn and Seewo versions use different embedded browser engines,
  so classroom hardware should still be tested before large-scale distribution.
