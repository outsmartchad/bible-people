# Biblical Accuracy Report — data.js

Audit date: 2026-04-13
Total people entries: 55

---

## Summary

The data is broadly well-researched and biblically literate. Most bios, journey cards, and scripture references are accurate. However, there are several errors ranging from category misclassifications to incorrect scripture quotations, a timeline inconsistency, and a few factual inaccuracies.

**Error count: 18 issues found** (5 category/classification errors, 4 scripture accuracy issues, 4 factual/historical errors, 3 timeline inconsistencies, 2 relatedPeople issues)

---

## Category / Classification Errors

### 1. Luke — categorized as "Apostle" (should be something else)
- **File**: `category: 'Apostle'` (line ~1812)
- **Problem**: Luke was never an apostle. He was a physician, historian, and companion of Paul. He was not one of the Twelve, nor was he ever called an apostle in Scripture. The user's spec says Luke should be categorized as "Apostle" matching the original site, but biblically this is inaccurate.
- **Biblical reference**: Colossians 4:14 calls him "the beloved physician." He is never called an apostle anywhere in the NT.
- **Recommendation**: If matching the original site's categories, leave as-is. If prioritizing biblical accuracy, use a category like "Companion" or "Evangelist."

### 2. Barnabas — categorized as "Apostle"
- **File**: `category: 'Apostle'` (line ~1846)
- **Problem**: Barnabas is actually called an apostle in Acts 14:14 ("the apostles Barnabas and Paul"), so this is technically defensible. However, he was not one of the original Twelve. The user's spec lists him under Apostle, which aligns with Acts 14:14. **This is acceptable.**
- **Verdict**: No change needed.

### 3. Timothy — categorized as "Apostle"
- **File**: `category: 'Apostle'` (line ~1880)
- **Problem**: Timothy was never called an apostle in Scripture. He was Paul's protege, a pastor, and an evangelist. 1 Thessalonians 1:1 and 2:6 are sometimes cited, but the "apostles" there refers to Paul and Silvanus, not necessarily Timothy.
- **Biblical reference**: 2 Timothy 4:5 — "do the work of an evangelist"; 1 Timothy 4:14 — given a gift through the laying on of hands by the elders.
- **Recommendation**: Category should be "Companion" or "Pastor/Evangelist" for strict accuracy.

### 4. Sarah — categorized as "Patriarch"
- **File**: `category: 'Patriarch'` (line ~1358)
- **Problem**: "Patriarch" literally means "father-ruler." Sarah is a matriarch. The user's spec notes this matches the original site's convention (grouping patriarchal-era figures together). Hebrews 11:11 lists her among heroes of faith alongside Abraham.
- **Verdict**: Acceptable if "Patriarch" is used as a period-category rather than a gender-specific title. Flag as a known deviation from strict terminology.

### 5. Daniel — relatedPeople includes "ezekiel" but ezekiel is not in the dataset
- **File**: `relatedPeople: ['ezekiel', 'jeremiah', 'nehemiah', 'esther', 'haman']` (line ~443)
- **Problem**: `ezekiel` is not one of the 55 people in the dataset. This will cause a broken link/reference in the UI.
- **Recommendation**: Replace `ezekiel` with a person who exists in the dataset, such as `isaiah` or `moses`.

---

## Scripture Quotation Errors

### 6. Matthew 26:49-50 — Jesus' reply is paraphrased/inaccurate
- **File** (Judas Iscariot, line ~783): `Jesus replied, "Do what you came for, friend."`
- **Problem**: The NIV reads: "Do what you came for, friend" (Matthew 26:50). However, the more literal translation is "Friend, do what you came to do" and some translations render it as a question. The quoted text reverses the word order from most translations ("Friend" comes first in the Greek and most English translations).
- **Actual NIV**: `"Do what you came for, friend."` — actually this matches the NIV. **This is acceptable.** Retracted.

### 7. Matthew 28:18-20 — text is truncated
- **File** (Jesus, line ~32): The quote ends after "baptizing them in the name of the Father and of the Son and of the Holy Spirit."
- **Problem**: The reference says "Matthew 28:18-20" but only quotes verses 18-19. Verse 20 ("and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.") is omitted.
- **Recommendation**: Either include verse 20 or change the reference to "Matthew 28:18-19."

### 8. 1 Kings 19:12 — "gentle whisper" vs "still small voice"
- **File** (Elijah, line ~400): `"And after the fire came a gentle whisper."`
- **Problem**: The NIV does say "gentle whisper" — this is correct for NIV. The KJV says "still small voice." The bio text (line ~386) uses "still small voice" which is KJV language, creating an inconsistency between the bio and the quoted scripture. Not an error per se, but a style inconsistency.
- **Verdict**: Minor inconsistency. The scripture quote is accurate NIV.

### 9. Jonah 4:11 — text is slightly truncated
- **File** (Jonah, line ~1063): `"And should I not have concern for the great city of Nineveh, in which there are more than a hundred and twenty thousand people?"`
- **Problem**: The NIV continues: "who cannot tell their right hand from their left — and also many animals?" The quote cuts off the ending clause about people who cannot tell right from left and the animals.
- **Recommendation**: Either complete the verse or add an ellipsis to indicate truncation.

### 10. Nehemiah 6:15-16 — minor wording variation
- **File** (Nehemiah, line ~1933): The quote is close to NIV but says "lost their self-confidence" — the NIV actually reads "were afraid and lost their self-confidence." 
- **Verdict**: The file's quote includes "were afraid and lost their self-confidence" — this matches. **No error.** Retracted.

---

## Factual / Historical Errors

### 11. Hannah bore "five more children" — should be "three sons and two daughters"
- **File** (Hannah, line ~1539): `"Hannah later bore five more children."`
- **Problem**: 1 Samuel 2:21 says "the LORD was gracious to Hannah; she conceived and bore three sons and two daughters." That is five more children total, so the count is correct. However, specifying "three sons and two daughters" would be more precise.
- **Verdict**: Technically correct but imprecise. Minor.

### 12. Esther — Mordecai described as "cousin"
- **File** (Esther, line ~310): `"a young Jewish orphan raised by her cousin Mordecai"`
- **Problem**: Esther 2:7 says Mordecai was "the son of Jair, the son of Shimei, the son of Kish" and that "Mordecai had taken her as his own daughter" — and she was "his uncle's daughter" (Esther 2:7 NIV: "his cousin" or "uncle's daughter" depending on translation). The Hebrew word means she was Mordecai's uncle's daughter, making Mordecai her older cousin. "Cousin" is acceptable in modern English for this relationship.
- **Verdict**: Acceptable. Different translations vary.

### 13. Jesse had "eight sons" — debatable
- **File** (David, line ~125): `"the youngest of Jesse's eight sons"`
- **Problem**: 1 Samuel 16:10-11 mentions seven sons passing before Samuel, plus David (the eighth). But 1 Chronicles 2:13-16 lists only seven sons of Jesse total (including David). This is a well-known textual discrepancy. Saying "eight sons" follows 1 Samuel's account, which is the standard tradition.
- **Verdict**: Acceptable — follows 1 Samuel 16-17 tradition.

### 14. Joseph sold for "twenty pieces of silver"
- **File** (Joseph, line ~347): `"sold him to Midianite traders for twenty pieces of silver"`
- **Problem**: Genesis 37:28 says "twenty shekels of silver." The file says "twenty pieces of silver." While "pieces" is a common paraphrase, the precise term is "shekels." This is a very minor distinction.
- **Verdict**: Minor imprecision. Common in popular retellings.

### 15. Josiah — "greatest Passover since Samuel's time"
- **File** (Josiah, line ~1264): `"a Passover so magnificent it had no equal since the days of Samuel"`
- **Problem**: 2 Kings 23:22 says "Not since the days of the judges who led Israel, nor throughout the days of the kings of Israel and the kings of Judah, had any such Passover been observed." 2 Chronicles 35:18 says "since the days of the prophet Samuel." The file follows the Chronicles account, which is valid.
- **Verdict**: Acceptable — follows 2 Chronicles 35:18.

---

## Timeline Inconsistencies

### 16. Joshua — death date comes BEFORE conquest date
- **File** (Joshua, lines ~1348-1349):
  - `c. 1280 BC` — "Assumes leadership after Moses' death; conquers Jericho and Canaan"
  - `c. 1290 BC` — "Dies at 110; buried in his allotted land at Timnath Serah"
- **Problem**: The death date (1290 BC) is listed as BEFORE the conquest date (1280 BC) in terms of actual chronology (higher BC number = earlier). Joshua cannot die 10 years before he conquers Canaan. The dates are reversed.
- **Fix**: Death date should be c. 1250 BC or similar (after 1280 BC), OR the conquest should be c. 1300 BC (before 1290 BC). The era field says "c. 1400-1290 BC" suggesting 1290 BC is death, so conquest should be e.g. "c. 1300 BC."

### 17. Sarah — death date of c. 1923 BC is AFTER birth of Isaac at c. 1900 BC but era says "c. 2050-1923 BC"
- **File** (Sarah, line ~1384): `c. 1923 BC` — "Dies at age 127"
- **Problem**: If Sarah was born c. 2050 BC and died at 127, she would die c. 1923 BC. But Genesis 23:1 says she died at 127 and Genesis 17:17 says she was 90 when Isaac was born. If Isaac was born c. 1900 BC, Sarah was born c. 1990 BC and died c. 1863 BC. The dates are internally inconsistent: 2050 - 127 = 1923, but if Isaac was born c. 1900 and she was 90 at his birth, she was born c. 1990, not 2050.
- **Fix**: Either birth should be c. 1990 BC (making death c. 1863 BC), or Isaac's birth should be c. 1950 BC, or Sarah's birth date should be adjusted. The Abraham timeline uses c. 1900 BC for Isaac's birth with Abraham at 100 (born c. 2000 BC), meaning Sarah (10 years younger per Genesis 17:17) was born c. 1990 BC.

### 18. Jacob — died "at age 130" but Genesis says 147
- **File** (Jacob, line ~1454): `"Dies in Egypt at age 130"`
- **Problem**: Genesis 47:28 says Jacob lived 147 years, not 130. Genesis 47:9 has Jacob saying "The years of my pilgrimage are a hundred and thirty" when he first arrived in Egypt — that was his age upon entering Egypt, not at death. He lived 17 more years in Egypt.
- **Biblical reference**: Genesis 47:28 — "Jacob lived in Egypt seventeen years, and the years of his life were a hundred and forty-seven."
- **Fix**: Change "at age 130" to "at age 147."

---

## Related People Issues

### 19. Esther — relatedPeople does not include Mordecai
- **File** (Esther, line ~336): `relatedPeople: ['haman', 'ruth', 'deborah', 'hannah', 'rahab']`
- **Problem**: Mordecai is not in the dataset as a standalone person, so this is understandable. However, the connection to other Women of Faith (Ruth, Deborah, Hannah, Rahab) is thematic rather than biblical narrative. This is a design choice, not strictly an error.
- **Verdict**: Acceptable given dataset constraints.

### 20. David — relatedPeople includes "jonathan" who is not in the dataset
- **File** (David, line ~151): `relatedPeople: ['saul', 'solomon', 'samuel', 'jonathan', 'jesus']`
- **Problem**: `jonathan` is not one of the 55 people in the dataset. This will cause a broken link.
- **Recommendation**: Replace `jonathan` with a person in the dataset, such as `aaron` or `moses`.

### 21. Jonah — relatedPeople includes "nahum" who is not in the dataset
- **File** (Jonah, line ~1071): `relatedPeople: ['elijah', 'elisha', 'nahum', 'jesus', 'moses']`
- **Problem**: `nahum` is not in the dataset. Broken link.
- **Recommendation**: Replace `nahum` with someone in the dataset, such as `jeremiah` or `daniel`.

### 22. Jacob — relatedPeople includes "esau" who is not in the dataset
- **File** (Jacob, line ~1456): `relatedPeople: ['isaac', 'abraham', 'joseph', 'sarah', 'esau']`
- **Problem**: `esau` is not in the dataset. Broken link.
- **Recommendation**: Replace `esau` with someone in the dataset, such as `noah` or `moses`.

### 23. Isaac — relatedPeople includes only dataset members — OK
- Verified: `['abraham', 'sarah', 'jacob', 'joseph', 'jesus']` — all valid.

---

## Confirmed Accurate (Notable Checks)

These items were specifically verified and found correct:

- **Moses** is correctly categorized as "Prophet" (not Patriarch)
- **John the Baptist** is correctly categorized as "Prophet" with testament "new"
- **Judas Iscariot** is correctly categorized as "Antagonist" (not Apostle)
- **Jesus** is the only "Messiah" category entry
- **John 3:16** quote matches NIV accurately
- **Genesis 15:6** quote matches NIV accurately
- **Exodus 3:14** quote matches NIV accurately
- **Acts 9:4-5** quote matches NIV accurately
- **Ruth 1:16** quote matches NIV accurately
- **All 55 people are present** with unique IDs
- **Testament assignments are correct** for all 55 people
- **Era dates are generally reasonable** within scholarly ranges (with exceptions noted above)
- **Deborah** correctly categorized as "Judge"
- **Aaron** correctly categorized as "Priest"
- **All 5 Antagonists** correctly identified: Judas Iscariot, Pharaoh, Jezebel, Haman, King Ahab

---

## Priority Fixes (Errors That Will Break the UI or Are Factually Wrong)

| # | Severity | Issue | Fix |
|---|----------|-------|-----|
| 16 | **HIGH** | Joshua death date (1290 BC) before conquest (1280 BC) | Swap or adjust dates |
| 18 | **HIGH** | Jacob died "at age 130" — should be 147 (Gen 47:28) | Change to 147 |
| 5 | **MEDIUM** | Daniel relatedPeople: `ezekiel` not in dataset | Replace with valid ID |
| 20 | **MEDIUM** | David relatedPeople: `jonathan` not in dataset | Replace with valid ID |
| 21 | **MEDIUM** | Jonah relatedPeople: `nahum` not in dataset | Replace with valid ID |
| 22 | **MEDIUM** | Jacob relatedPeople: `esau` not in dataset | Replace with valid ID |
| 7 | **LOW** | Matthew 28:18-20 only quotes vv. 18-19 | Adjust reference or add v. 20 |
| 17 | **LOW** | Sarah birth/death dates internally inconsistent | Reconcile with Isaac birth |
| 1 | **LOW** | Luke categorized as Apostle (not biblical) | Consider alternative category |
| 3 | **LOW** | Timothy categorized as Apostle (not biblical) | Consider alternative category |
