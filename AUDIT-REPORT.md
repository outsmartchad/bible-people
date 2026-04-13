# Bible People Clone — Audit Report vs readdy.cc Original

**Date**: 2026-04-13
**Original URL**: `https://readdy.cc/preview/07fed360-b170-452d-8240-fdd3c10ea941/7748234`
**Method**: Playwright automated browsing + source code comparison

---

## 1. HOME PAGE

### Header
- **Match**: Logo, nav links (Home, People Gallery, Bible Map, About), "Explore Gallery" button -- all match.
- **Match**: Fixed header with dark background, gold nav text, white button outline.

### Hero Section
- **Match**: Badge text "Sacred Stories from Scripture", h1 "Discover the Lives of Biblical Figures", paragraph text, button labels "Explore the Gallery" / "Learn More", scroll indicator.
- **Match**: Background image, overlay gradient, divider with icon.

### Featured Section
- **Match**: "Hall of Faith" label, "Featured Biblical Figures" h2, 6 cards (Jesus, Moses, Abraham, David, Mary, Peter), "View All People" link.
- **DIFF (card content)**: Original cards show subtitle ABOVE name (e.g. "Son of God & Savior of the World" then "Jesus Christ"). Clone cards show only name + testament badge in overlay. **Original has the subtitle/role text on the card image overlay; clone omits it.**
- **DIFF (card subtitle text)**: Original uses `subtitle` field values like "Son of God & Savior of the World", "Prophet & Lawgiver", "Father of Nations", "King of Israel", "Mother of Jesus", "Apostle & Rock of the Church". Clone data.js has different subtitle values: "The Messiah", "The Lawgiver", etc. -- shorter/different.

### Stats Section
- **Match**: 4 stat items with icons.
- **DIFF (stat values)**: Original shows `49+`, `9`, `4,000+`, `66`. Clone hardcodes the same values. However, original renders `"9"` and `"66"` as quoted strings in the DOM, suggesting they may be dynamically generated. **This is a match for display purposes.**

### CTA Section
- **Match**: "Every Story Holds a Lesson for Today" heading, paragraph text, "Begin Your Journey" button, cathedral background image.

### Footer
- **Match**: Logo, brand description, "Explore" heading, "Word of the Day" quote (Psalm 119:105), copyright "2026", bottom verse (John 1:1).
- **DIFF (footer links)**: Original footer has 5 links: Home, People Gallery, Old Testament, New Testament, About. Original Old/New Testament links go to `/gallery?filter=old` and `/gallery?filter=new`. Clone footer has 6 links: Home, People Gallery, Old Testament, New Testament, Bible Map, About. **Clone adds "Bible Map" link that original does not have.** Clone Old/New Testament links go to `#/gallery` (no filter param).
- **DIFF (footer link URLs)**: Original Old Testament/New Testament footer links include `?filter=old` / `?filter=new` query params. Clone links all point to plain `#/gallery` without filter params.
- **DIFF (Psalm citation)**: Original shows `-- Psalm 119:105` as plain text with no link styling. Clone wraps the reference in a gold-colored link tag: `<a href="#" style="color:var(--gold)">Psalm 119:105</a>`.

---

## 2. GALLERY PAGE

### Hero
- **DIFF (label text)**: Original has label "Scripture Gallery". Clone has no label above h1.
- **Match (h1)**: Both say "People of the Bible".
- **DIFF (subtitle text)**: Original: "Explore the men and women whose lives and faith shaped the greatest story ever told." Clone: "Explore the lives of men and women whose faith, courage, and obedience shaped the story of salvation." **Different wording.**

### Stats Bar
- **DIFF (stats)**: Original shows 4 stats: `55 People`, `10 Categories`, `33 OT`, `22 NT`. Clone shows 3 stats: `{count} People`, `{count} Categories`, `{count} New Testament`. **Clone is missing OT count and shows NT count instead. Also missing 4th stat entirely.**
- **DIFF (stat count)**: Original has 55 people, 10 categories. Clone has 55 people (data.js comment says 55). Categories count depends on data -- original has 10 (including Antagonist), need to verify clone includes all.

### Category Filters
- **DIFF (filter labels)**: Original category buttons have icons before text and are styled as proper buttons. Original categories: All, Messiah, Patriarch, Women of Faith, Prophet, Apostle, King, Judge, Priest, Hero of Faith, Antagonist (11 total including All). Clone renders filter chips from data -- need to verify all 10+1 categories exist.
- **DIFF (filter prefix)**: Original shows "Category:" label before the filter row. Clone has no "Category:" prefix label.
- **DIFF (filter style)**: Original uses `<button>` elements with icons. Clone uses `<span class="filter-chip">` without icons.

### Testament Filters
- **DIFF (filter style)**: Original uses buttons with icons (book icon for All, scroll for OT, cross for NT). Clone uses plain text spans.
- **Match**: Both have All, Old Testament, New Testament.

### Search
- **DIFF (placeholder text)**: Original: "Search name, role, category..." Clone: "Search by name..." **Clone placeholder is less descriptive and doesn't mention role/category search.**
- **DIFF (search functionality)**: Original searches by name, role, and category. Clone only searches by `data-name` (lowercase name). **Clone search does not work for role or category terms.**

### Results Count
- **DIFF**: Original shows "55 people found" text below filters. Clone does not show a results count.

### Card Layout
- **DIFF (columns)**: Original appears to use a 4-column grid for gallery cards. Clone gallery grid column count needs CSS verification.
- **DIFF (card content)**: Original gallery cards show: image, category badge (e.g. "Messiah"), testament badge ("NT"/"OT"), a "Read" button overlay on hover, subtitle text, name, and date/era below the card. Clone cards show: image, name overlay, testament label (full "Old Testament"/"New Testament"). **Clone is missing: category badge, "Read" hover button, subtitle text on card, era/dates below card.**
- **DIFF (card hover)**: Original has a "Read" button with arrow icon that appears on hover. Clone only has `translateY(-4px)` lift effect. **Missing hover read button.**

---

## 3. MAP PAGE

### Sidebar Header
- **Match**: "Biblical Map" title.
- **DIFF (subtitle)**: Original shows "20 locations shown" as dynamic count. Clone shows "Explore locations from Scripture" as static text. **Different subtitle entirely.**
- **DIFF (icon)**: Original has a map pin icon next to "Biblical Map". Clone has no icon.

### Period Filters
- **DIFF (labels)**: Original period buttons: "All Periods", "Old Testament", "New Testament", "Both Periods" (full text with icons). Clone period buttons: "All", "OT", "NT", "Both" (abbreviated, no icons). **Significantly different labels.**

### Place Type Filters
- **DIFF (types available)**: Original has 9 types: All Types, City, Mountain, River, Sea / Lake, Temple, Garden, Fortress, Region. Each has an icon. Clone renders types from data, but uses "Sea/Lake" (no space around slash). **Minor formatting diff on "Sea / Lake" vs "Sea/Lake".**
- **DIFF (icons)**: Original type chips have icons (building for City, mountain for Mountain, etc.). Clone type chips are plain text.
- **DIFF ("Temple" type)**: Original DOES have a "Temple" type chip. Verify clone data includes Temple type.

### Location List
- **DIFF (list item format)**: Original location items show: type icon, name, period badge (colored "OT+NT"/"OT"/"NT"), event count, and a chevron arrow. Clone items show: name, then "type . period badge . N events" as text. **Clone is missing type icons and chevron arrows.**
- **Match**: Both show 20 locations.

### Map Info Card (top-right)
- **Match**: "Biblical Israel" heading.
- **DIFF (info text)**: Original: "Click any marker to explore events, buildings, and history of that location." + "20 locations . 65 events". Clone: just "N locations . N events" -- **missing the descriptive paragraph.**

### Legend
- **DIFF**: Original has a legend panel showing: City, Mountain, River/Sea, Temple, Garden, Fortress -- each with colored dots. **Clone has no legend at all.**

### Map Markers
- **DIFF (marker style)**: Original uses custom icon markers (small colored icons that look like category-specific symbols -- buildings, animals, etc.). Clone uses `L.circleMarker` (plain colored circles). **Significant visual difference.**

### Map Popup
- **DIFF**: Original markers are buttons that likely show detailed popups. Clone popups show simple text: "Name / Type . Period . N events". **Original likely has richer popup content.**

---

## 4. ABOUT PAGE

### Hero Section
- **Match**: Label "Our Mission", h1 "About Bible People", subtitle text matches exactly.

### "Why We Built This" Section
- **Match**: Label "Why We Built This", h2 "Stories That Have Shaped the World".
- **DIFF (paragraph text)**: Original has 3 paragraphs. Clone has 3 paragraphs. Text is very similar but has subtle differences:
  - Original paragraph 2 ends: "...discover the remarkable men and women whose lives fill its pages." Clone ends: "...discover the remarkable lives within its pages." **Slightly different ending.**
  - Original paragraph 3: "...drawn directly from the biblical text, enriched with historical context..." Clone: "...drawn directly from Scripture, placed in its historical context..." **Different phrasing.**
- **Match**: "Explore the Gallery" button with arrow icon.
- **Match**: Library image present on right side.

### "What We Stand For" Section
- **DIFF (label)**: Original label: "Our Approach". Clone label: "Our Approach". **Match.**
- **Match**: h2 "What We Stand For".
- **Match**: 4 value cards with matching titles and descriptions: Faith & Devotion, Historical Context, Scripture-First, Timeless Lessons.
- **DIFF (card icons)**: Original uses different Remix icons than clone. Need exact comparison, but original appears to use heart-line, eye-2-line, book-open-line, lightbulb-flash-line. Clone uses heart-line, eye-line, book-open-line, lightbulb-line. **Minor icon variant differences.**

### "Start Exploring" Section
- **Match**: h2/h3 "Start Exploring", 4 cards (Moses, David, Mary, Paul).
- **Match**: Card content matches (name, role, "Read story" link).

### Scripture Quote Section
- **Match**: Quote text "All Scripture is God-breathed..." matches exactly.
- **Match**: Citation "2 Timothy 3:16" matches.
- **Match**: Large quote icon above the quote.

---

## 5. PERSON DETAIL PAGE (Jesus Christ)

### Hero / Header Area
- **Match**: Breadcrumb (Home > Gallery > Jesus Christ).
- **Match**: Background image, portrait image, name, testament badge.
- **DIFF (subtitle)**: Original shows "Son of God & Savior of the World". Clone data has `subtitle: 'The Messiah'`. **Different subtitle text.**
- **DIFF (era)**: Original shows "c. 4 BC -- AD 33". Clone data has `era: 'c. 4 BC -- c. AD 30'`. **Different era text.**

### Summary Line
- **DIFF**: Original has a summary paragraph below the hero: "The Son of God who entered human history, lived a sinless life, died for the sins of the world, and rose from the dead -- offering eternal life to all who believe." **Clone does not have this summary line.**

### "Destiny" Button
- **DIFF**: Original has a "Destiny" button/badge with arrow icons. **Clone does not have this feature at all.** Purpose unclear -- may be a collapsible section or link.

### "The Story" Section
- **Match**: Both have "The Story" heading with book icon.
- **DIFF (tooltip hint)**: Original has a hint: "Hover over highlighted phrases to read the scripture passage right here -- no need to leave the page." **Clone does not have this hint.**
- **DIFF (inline scripture links)**: Original story text has highlighted/hoverable phrases (e.g. "Holy Spirit descended like a dove", "entered Jerusalem on a donkey", "final Passover meal", "crucified at Golgotha", "appeared to over five hundred witnesses") that presumably show scripture popups on hover. **Clone has plain text with no inline scripture links or hover tooltips.**
- **DIFF (bio text)**: Original bio is significantly different from clone bio. Original is more literary/devotional in tone. Clone bio reads more like an encyclopedia entry. The content coverage differs substantially -- original mentions specific details not in clone (e.g. "Sermon on the Mount" is in clone but not original, "appeared to over five hundred witnesses" phrasing differs).

### "Spiritual Journey" Section
- **Match**: Both have the section.
- **DIFF (card format)**: Original cards have: a labeled category (e.g. "The Sudden Shift", "The Valley", "The Reversal", "Encounter with God"), a subtitle (e.g. "The Temptation in the Desert"), an icon, and a long paragraph. Clone cards have: title, description. **Original has a two-tier title system (category + subtitle) that clone lacks.**
- **DIFF (card content)**: Original has 4 journey cards for Jesus: "The Temptation in the Desert", "The Garden of Gethsemane", "The Resurrection", "The Transfiguration". Clone has 4 cards: "Birth in Bethlehem", "Baptism & Temptation", "Ministry & Miracles", "Crucifixion & Resurrection". **Completely different card content.**
- **DIFF (card subtitle)**: Original shows "How Jesus Christ navigated the defining seasons of faith" as section subtitle. Clone does not have this subtitle.

### "Learning to Walk with God" Section
- **Match**: Both have this section.
- **DIFF (section subtitle)**: Original: "Lessons for believers from Jesus Christ's story". Clone: none.
- **DIFF (item format)**: Original has numbered items (1, 2, 3) with long paragraph lessons. Clone has numbered items with title + text format. **Clone adds lesson titles that original doesn't have.**
- **DIFF (lesson content)**: Original lessons are different content (about abiding, prayer, meeting us in humanity). Clone lessons are about sacrificial love, humble service, faith like a mustard seed. **Completely different lesson text.**
- **DIFF (lesson count)**: Both have 3 lessons for Jesus, but content differs entirely.

### Timeline (Right Sidebar)
- **Match**: Both have a timeline in a sidebar.
- **DIFF (timeline entries)**: Original has 6 entries (c. 4 BC, c. AD 12, c. AD 27, c. AD 27-30, c. AD 30 x2). Clone has 4 entries (c. 4 BC, c. AD 27, c. AD 29, c. AD 30). **Clone is missing 2 timeline entries and the content differs.**
- **DIFF (event at AD 12)**: Original includes "Found in the Temple at age twelve, astounding the teachers." **Clone does not have this event.**

### "How [Person] Saw God" Section
- **DIFF**: Original has a section "How Jesus Christ Saw God" with subtitle "The divine names and attributes recognized" and 2 cards: "I AM -- The Eternal Self-Existent God" (John 8:58) and "Immanuel -- God With Us in Human Flesh" (Matthew 1:23), each with long descriptions and links to BibleGateway. **Clone does not have this section at all.**

### "Scripture Links" Sidebar Section
- **DIFF**: Original has a "Scripture Links" section in the sidebar with links to BibleGateway: Matthew 3:16-17, Matthew 21:1-11, Luke 22:14-20, Luke 23:33-46, 1 Corinthians 15:3-8. These are the passages referenced by the inline hover text. **Clone does not have this section.**

### "Key Scriptures" Section
- **Match**: Both have this section.
- **DIFF (scripture content)**: Original has 3 scriptures (John 3:16, John 14:6, Matthew 11:28) each with quote + BibleGateway link. Clone has 2 scriptures (John 3:16, Matthew 28:18-20) with quote + plain reference text. **Different scripture selections, different count, clone lacks external links.**

### "Related People" Section
- **Match**: Both have related people grid.
- **DIFF (related people for Jesus)**: Original shows 5 related: Mary (Mother), Peter (Apostle & Rock of the Church), Mary Magdalene (First Witness), Paul (Apostle to the Gentiles), John (Beloved Disciple). Each has portrait image, name, relationship label, and arrow icon. Clone data has: mary, peter, paul, john-apostle, judas-iscariot. **Clone includes Judas Iscariot instead of Mary Magdalene.**
- **DIFF (relationship labels)**: Original shows relationship labels (e.g. "Mother", "Beloved Disciple"). Clone shows only name. **Clone missing relationship descriptions.**
- **DIFF (note text)**: Original has note: "Cards with a portrait photo are profiles you can explore -- click to visit their story." **Clone does not have this note.**

### Prev/Next Navigation
- **DIFF**: Original shows: "All People" link (center/left) + "Next: Moses" (right) with no "Previous" for Jesus (first person). Clone shows: prev/next with arrow icons and names. **Layout differs -- original has "All People" gallery link, clone does not.**

---

## 6. PERSON PAGE DATA DIFFERENCES (Systemic)

These differences apply across ALL person pages, not just Jesus:

### Subtitle Discrepancies
| Person | Original Subtitle | Clone Subtitle |
|--------|------------------|----------------|
| Jesus | Son of God & Savior of the World | The Messiah |
| Moses | Prophet & Lawgiver | The Lawgiver |
| Abraham | Father of Nations | (need to verify) |
| David | King of Israel | (need to verify) |
| Mary | Mother of Jesus | (need to verify) |
| Peter | Apostle & Rock of the Church | (need to verify) |

### Missing Data Fields in Clone
- `summary` -- one-line summary paragraph shown below hero (original has it, clone template doesn't render it)
- `howTheySawGod` -- "How [Person] Saw God" section (completely missing from clone)
- `scriptureLinks` -- sidebar links to BibleGateway passages (missing from clone)
- `inlineScriptureRefs` -- hoverable highlighted phrases in the story text (missing from clone)
- `journeyCard.category` -- the category label above the subtitle (e.g. "The Sudden Shift") (missing from clone)
- `journeyCard.subtitle` -- the subtitle below the category (original has two-tier, clone has one-tier)
- `sectionSubtitles` -- section subtitles like "How Jesus Christ navigated the defining seasons of faith" (missing from clone)

### Bio Text
The original bio texts are substantially different from the clone -- more literary, devotional, and detailed. The clone bios read more like encyclopedia entries. This is a fundamental content difference that affects every person page.

---

## 7. MISSING FEATURES

### Features Present in Original, Missing in Clone

1. **Inline Scripture Hover Tooltips** -- Original highlights phrases in the story text that can be hovered to read scripture passages inline. Clone has no hover interactivity on story text.

2. **"Destiny" Button** -- Original person pages have a "Destiny" button/badge. Purpose unclear but it exists. Clone does not have it.

3. **"How [Person] Saw God" Section** -- Original has an entire section per person about divine names/attributes. Clone is completely missing this.

4. **"Scripture Links" Sidebar** -- Original has a sidebar section with external BibleGateway links for each highlighted passage. Clone does not have this.

5. **Gallery Card Badges** -- Original gallery cards show category badge + testament badge + "Read" hover button + subtitle + era/date. Clone cards only show name + testament.

6. **Gallery Results Count** -- Original shows "55 people found". Clone does not.

7. **Gallery Search by Role/Category** -- Original search works across name, role, and category. Clone only searches by name.

8. **Map Legend** -- Original has a colored legend panel (City, Mountain, River/Sea, Temple, Garden, Fortress). Clone has no legend.

9. **Map Custom Markers** -- Original uses category-specific icon markers. Clone uses plain circle markers.

10. **Map Info Card Description** -- Original has "Click any marker to explore events, buildings, and history of that location." Clone has no description.

11. **Gallery "Scripture Gallery" Label** -- Original has a label above the h1 on gallery page. Clone does not.

12. **Summary Paragraph on Person Pages** -- One-line thematic summary below the person hero. Missing from clone.

13. **Related People Relationship Labels** -- Original shows relationship (e.g. "Mother", "Beloved Disciple"). Clone shows only name.

14. **"All People" Link in Person Nav** -- Original person page bottom nav has "All People" gallery link. Clone only has prev/next.

15. **Category Filter Icons** -- Original gallery/map filters have Remix icons. Clone filters are plain text.

16. **Map Period Filter Full Labels** -- Original says "All Periods", "Old Testament", etc. Clone says "All", "OT", etc.

### Loading / Animation / UX Features
- **Smooth scroll**: Both scroll to top on navigation. No smooth scroll animation observed in original.
- **Image lazy loading**: Clone uses `loading="lazy"` on gallery images. Original likely does the same (React-based).
- **Hover effects**: Original has more hover effects (gallery card "Read" button, related people arrows). Clone has basic translateY hover only.
- **Loading animations**: No notable loading skeleton/spinner observed in original.
- **No additional pages or modals observed** in the original beyond Home, Gallery, Map, About, Person.

---

## 8. SUMMARY OF PRIORITY FIXES

### Critical (Content/Data)
1. Fix all person subtitles to match original (e.g. "Son of God & Savior of the World" not "The Messiah")
2. Fix era/date values to match original
3. Rewrite bio text to match original's literary style (or extract from original)
4. Fix journey card content to match original (different cards entirely)
5. Fix lesson content to match original
6. Fix key scriptures to match original (different selections)
7. Fix related people selections (e.g. Mary Magdalene instead of Judas for Jesus)
8. Fix timeline entries to match original

### High (Missing Sections)
9. Add "How [Person] Saw God" section to person pages
10. Add summary paragraph to person hero
11. Add "Scripture Links" sidebar section
12. Add inline scripture hover tooltips in story text
13. Add map legend panel
14. Add gallery results count ("N people found")

### Medium (UI Polish)
15. Add category + era badges to gallery cards (not just testament)
16. Add "Read" hover button to gallery cards
17. Add subtitle text to gallery cards
18. Add "Scripture Gallery" label to gallery hero
19. Fix gallery subtitle text to match original
20. Fix gallery stats to show 4 items (People, Categories, OT, NT)
21. Fix map period filter labels to full text
22. Fix map subtitle to show location count
23. Replace circle markers with custom icon markers on map
24. Add icons to filter chips (gallery categories, map types)
25. Fix map info card to include descriptive paragraph
26. Add relationship labels to related people cards
27. Add "All People" link to person page navigation
28. Fix footer links (remove Bible Map, add filter params to OT/NT links)
29. Fix Psalm 119:105 citation styling in footer (remove link, plain text)

### Low (Nice-to-have)
30. Add "Destiny" button to person pages (purpose unclear)
31. Add section subtitles ("How X navigated the defining seasons of faith")
32. Add note text below related people ("Cards with a portrait photo...")
33. Match exact icon variants for about page value cards
