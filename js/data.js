// data.js — Biblical figures and locations dataset
// ES module: exports PEOPLE (55) and LOCATIONS (20)

export const PEOPLE = [
  {
    id: 'jesus',
    name: 'Jesus Christ',
    subtitle: 'Son of God & Savior of the World',
    testament: 'new',
    category: 'Messiah',
    era: 'c. 4 BC – c. AD 30',
    imageQuery: 'biblical Jesus Christ compassionate face crown of thorns divine light classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=serene%20compassionate%20figure%20in%20white%20and%20cream%20robes%20with%20gentle%20authority%20warm%20radiant%20golden%20light%20glowing%20around%20him%20simple%20pure%20background%20kind%20eyes%20full%20of%20wisdom%20and%20love%20classical%20sacred%20art%20style%20ancient%20Middle%20Eastern%20appearance%20humble%20yet%20majestic&width=400&height=600&seq=jesus01&orientation=portrait',
    bio: `Jesus of Nazareth is the central figure of Christianity, believed by his followers to be the Son of God and the long-awaited Messiah prophesied in the Hebrew Scriptures. Born in Bethlehem to the Virgin Mary, he was raised in the humble town of Nazareth by Mary and Joseph, a carpenter. His birth was heralded by angels and a star that guided wise men from the East, yet he entered the world in the most modest of circumstances — a manger, surrounded by livestock.

At approximately thirty years of age, Jesus began his public ministry after being baptized by John the Baptist in the Jordan River. For three years he traveled throughout Galilee, Judea, and Samaria, teaching in parables about the Kingdom of God, healing the sick, restoring sight to the blind, and raising the dead. He called twelve ordinary men — fishermen, tax collectors, and zealots — to be his closest disciples, entrusting them with carrying his message to the ends of the earth. His Sermon on the Mount remains one of the most influential moral teachings in human history.

Jesus' ministry culminated in Jerusalem, where he was betrayed by Judas Iscariot, tried before the Sanhedrin and Pontius Pilate, and crucified on a Roman cross at Golgotha. Christians believe he rose from the dead on the third day, appeared to his disciples over forty days, and ascended into heaven, commissioning them to spread the Gospel to all nations. His death and resurrection form the foundation of the Christian faith — the belief that through his sacrifice, humanity is offered forgiveness of sins and eternal life.`,
    journeyCards: [
      { title: 'Birth in Bethlehem', description: 'Born in a manger in Bethlehem, fulfilling the prophecy of Micah 5:2. Shepherds and wise men came to honor the newborn King.' },
      { title: 'Baptism & Temptation', description: 'Baptized by John in the Jordan River, where the Spirit descended like a dove. Then led into the wilderness for forty days of temptation by Satan.' },
      { title: 'Ministry & Miracles', description: 'Three years of teaching, healing, and calling disciples. Performed miracles including feeding 5,000, walking on water, and raising Lazarus from the dead.' },
      { title: 'Crucifixion & Resurrection', description: 'Arrested in Gethsemane, crucified at Golgotha, and buried in a borrowed tomb. Rose on the third day and appeared to over 500 witnesses before ascending to heaven.' }
    ],
    lessons: [
      'Sacrificial love is the highest calling — "Greater love has no one than this: to lay down one\'s life for one\'s friends."',
      'True greatness comes through humble service to others, not through power or position.',
      'Faith the size of a mustard seed can move mountains — trust God even when circumstances seem impossible.'
    ],
    keyScriptures: [
      { reference: 'John 3:16', text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.' },
      { reference: 'Matthew 28:18-20', text: 'All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.' }
    ],
    timeline: [
      { date: 'c. 4 BC', event: 'Born in Bethlehem during the reign of Herod the Great' },
      { date: 'c. AD 27', event: 'Baptized by John the Baptist; begins public ministry' },
      { date: 'c. AD 29', event: 'Transfiguration on the mountain; Peter confesses him as Christ' },
      { date: 'c. AD 30', event: 'Crucified under Pontius Pilate; rises from the dead three days later' }
    ],
    relatedPeople: ['mary', 'peter', 'paul', 'john-apostle', 'judas-iscariot']
  },
  {
    id: 'moses',
    name: 'Moses',
    subtitle: 'Prophet & Lawgiver',
    testament: 'old',
    category: 'Prophet',
    era: 'c. 1400–1280 BC',
    imageQuery: 'biblical Moses holding stone tablets Ten Commandments Mount Sinai thunder lightning classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=majestic%20ancient%20Hebrew%20prophet%20with%20long%20white%20flowing%20hair%20and%20beard%20wearing%20sandy%20brown%20desert%20robes%20holding%20stone%20tablets%20with%20engravings%20dramatic%20warm%20desert%20golden%20lighting%20dignified%20powerful%20expression%20ancient%20biblical%20illustration%20classical%20painting%20style%20simple%20warm%20parchment%20background%20aged%20manuscript%20texture&width=400&height=600&seq=moses01&orientation=portrait',
    bio: `Moses is the towering figure of the Hebrew Bible — prophet, lawgiver, and liberator. Born during a time when Pharaoh had decreed the death of all Hebrew male infants, his mother placed him in a basket on the Nile, where he was discovered and adopted by Pharaoh's daughter. Raised in the Egyptian royal court with all the privileges of a prince, Moses nonetheless could not ignore the suffering of his Hebrew kinsmen, and after killing an Egyptian taskmaster, he fled into the wilderness of Midian.

For forty years Moses lived as a shepherd in the desert, married Zipporah, and seemed destined for obscurity. But God appeared to him in a burning bush on Mount Horeb, calling him to return to Egypt and demand the release of the Israelites. Armed with nothing but a staff and the words "I AM has sent me to you," Moses confronted Pharaoh. Through ten devastating plagues — from rivers of blood to the death of every firstborn — God broke Egypt's will, and Moses led perhaps two million people out of slavery through the parted waters of the Red Sea.

At Mount Sinai, Moses received the Ten Commandments and the Law that would shape Israel's identity for millennia. He served as mediator between God and a stubborn, frequently rebellious people for forty years in the wilderness. Despite his faithfulness, Moses was not permitted to enter the Promised Land — he could only view it from Mount Nebo before his death. His legacy endures as the greatest prophet of the Old Testament, the author of the Torah, and the archetype of faithful obedience even in the face of disappointment.`,
    journeyCards: [
      { title: 'Rescued from the Nile', description: 'Hidden in a basket among the reeds by his mother Jochebed. Found by Pharaoh\'s daughter and raised as Egyptian royalty.' },
      { title: 'The Burning Bush', description: 'After 40 years as a shepherd in Midian, God spoke from a bush that burned but was not consumed, commissioning Moses to liberate Israel.' },
      { title: 'The Exodus', description: 'Confronted Pharaoh with ten plagues, led Israel through the parted Red Sea, and guided them through the wilderness toward the Promised Land.' },
      { title: 'Mount Sinai & the Law', description: 'Ascended Sinai for 40 days, received the Ten Commandments on stone tablets, and mediated God\'s covenant with Israel.' }
    ],
    lessons: [
      'God uses imperfect people — Moses was a murderer and a stutterer, yet God made him the greatest leader in Israel\'s history.',
      'Obedience matters more than results — Moses faithfully led for 40 years even though he never entered the Promised Land.',
      'Confronting injustice requires courage, but also patience and trust in God\'s timing.'
    ],
    keyScriptures: [
      { reference: 'Exodus 3:14', text: 'God said to Moses, "I AM WHO I AM. This is what you are to say to the Israelites: I AM has sent me to you."' },
      { reference: 'Deuteronomy 34:10', text: 'Since then, no prophet has risen in Israel like Moses, whom the LORD knew face to face.' }
    ],
    timeline: [
      { date: 'c. 1400 BC', event: 'Born in Egypt; hidden by his mother and adopted by Pharaoh\'s daughter' },
      { date: 'c. 1360 BC', event: 'Flees Egypt after killing an Egyptian; lives as shepherd in Midian' },
      { date: 'c. 1320 BC', event: 'Burning bush encounter; returns to Egypt; ten plagues and the Exodus' },
      { date: 'c. 1280 BC', event: 'Dies on Mount Nebo after viewing the Promised Land from afar' }
    ],
    relatedPeople: ['aaron', 'joshua', 'pharaoh', 'abraham', 'samuel']
  },
  {
    id: 'abraham',
    name: 'Abraham',
    subtitle: 'Father of Nations',
    testament: 'old',
    category: 'Patriarch',
    era: 'c. 2000–1825 BC',
    imageQuery: 'biblical Abraham elderly patriarch looking at stars night sky desert tent classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=elderly%20wise%20patriarch%20with%20long%20flowing%20white%20beard%20and%20kind%20eyes%20wearing%20ancient%20Near%20Eastern%20robes%20in%20earth%20tones%20and%20cream%20serene%20faith%20filled%20expression%20under%20vast%20starry%20night%20sky%20soft%20golden%20ambient%20light%20classical%20painting%20style%20simple%20warm%20background%20stars%20visible%20in%20distance%20dignified%20elder&width=400&height=600&seq=abr01&orientation=portrait',
    bio: `Abraham, originally named Abram, is the foundational patriarch of the Jewish, Christian, and Islamic faiths. Born in Ur of the Chaldeans in Mesopotamia, he received a divine call to leave his homeland and journey to an unknown land that God would show him. With extraordinary faith, Abraham obeyed, taking his wife Sarah, his nephew Lot, and all their possessions on a journey into Canaan. God made a covenant with him — promising that his descendants would be as numerous as the stars and that through his offspring all nations of the earth would be blessed.

The greatest test of Abraham's faith came when God commanded him to sacrifice his beloved son Isaac — the child of promise, born miraculously to Abraham and Sarah in their old age. Abraham obeyed, traveling to Mount Moriah and binding Isaac on the altar. At the last moment, God provided a ram as a substitute, and Abraham's faith was vindicated. This event foreshadowed the Christian understanding of God providing his own Son as the ultimate sacrifice.

Abraham's life was marked by both remarkable faith and very human failures. He twice passed off his wife Sarah as his sister out of fear. He fathered Ishmael through Sarah's servant Hagar, creating family strife. Yet through it all, he is remembered as "the friend of God" — the man who believed God's impossible promises and whose faith was "credited to him as righteousness." His legacy as the father of faith endures across three world religions and more than four thousand years of history.`,
    journeyCards: [
      { title: 'The Call from Ur', description: 'God called Abram to leave Ur of the Chaldeans and journey to an unknown land, promising to make him a great nation.' },
      { title: 'The Covenant of Stars', description: 'God took Abraham outside and said, "Look at the stars — so shall your offspring be." Abraham believed, and it was credited to him as righteousness.' },
      { title: 'The Birth of Isaac', description: 'When Abraham was 100 and Sarah was 90, God fulfilled His promise with the miraculous birth of Isaac, the child of the covenant.' },
      { title: 'The Binding of Isaac', description: 'God tested Abraham by commanding him to sacrifice Isaac on Mount Moriah. Abraham obeyed, and God provided a ram as substitute.' }
    ],
    lessons: [
      'Faith means obeying God even when you cannot see the destination — Abraham left everything familiar on a promise alone.',
      'God is faithful to His promises even when fulfillment seems impossible — Sarah bore Isaac at age 90.',
      'Our failures do not disqualify us from God\'s purposes — Abraham stumbled repeatedly yet remained "the friend of God."'
    ],
    keyScriptures: [
      { reference: 'Genesis 15:6', text: 'Abram believed the LORD, and he credited it to him as righteousness.' },
      { reference: 'Hebrews 11:8', text: 'By faith Abraham, when called to go to a place he would later receive as his inheritance, obeyed and went, even though he did not know where he was going.' }
    ],
    timeline: [
      { date: 'c. 2000 BC', event: 'Born in Ur of the Chaldeans; God calls him to leave for Canaan' },
      { date: 'c. 1975 BC', event: 'Enters Canaan; God makes the covenant of land and descendants' },
      { date: 'c. 1900 BC', event: 'Isaac born to Abraham (age 100) and Sarah (age 90)' },
      { date: 'c. 1825 BC', event: 'Dies at age 175; buried in the Cave of Machpelah in Hebron' }
    ],
    relatedPeople: ['sarah', 'isaac', 'jacob', 'noah', 'moses']
  },
  {
    id: 'david',
    name: 'King David',
    subtitle: 'King of Israel',
    testament: 'old',
    category: 'King',
    era: 'c. 1040–970 BC',
    imageQuery: 'biblical King David playing harp golden crown shepherd boy warrior classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=handsome%20young%20Hebrew%20king%20with%20dark%20curly%20hair%20wearing%20royal%20robes%20with%20golden%20details%20and%20simple%20crown%20holding%20a%20wooden%20harp%20warm%20golden%20candlelight%20background%20deep%20red%20royal%20curtains%20noble%20and%20poetic%20expression%20classical%20painting%20style%20dignified%20regal%20bearing&width=400&height=600&seq=dav01&orientation=portrait',
    bio: `David, the second king of Israel, is one of the most complex and compelling figures in all of Scripture. He was the youngest of Jesse's eight sons — a ruddy-faced shepherd boy from Bethlehem whom the prophet Samuel anointed as king while Saul still sat on the throne. Before he ever wore a crown, David stepped onto the battlefield of the Valley of Elah and slew the Philistine giant Goliath with a sling and a stone, declaring, "I come against you in the name of the LORD Almighty."

David's rise to power was neither swift nor easy. Though anointed as a teenager, he spent years as a fugitive, hunted by the jealous King Saul through the caves and wilderness of Judea. He twice spared Saul's life when he had the chance to kill him, demonstrating the mercy and restraint that marked his character. When David finally ascended the throne, he united the twelve tribes, conquered Jerusalem and made it his capital, brought the Ark of the Covenant to the city with dancing and celebration, and established a dynasty that God promised would endure forever — a promise Christians see fulfilled in Jesus Christ.

Yet David's story also contains one of the Bible's most devastating moral failures. His adultery with Bathsheba and the arranged murder of her husband Uriah brought terrible consequences upon his family — the death of his infant son, the rebellion of Absalom, and violence that plagued his household. David's response to the prophet Nathan's confrontation — "I have sinned against the LORD" — and his broken, penitent Psalm 51 stand as the model of genuine repentance. He is remembered not as a perfect man, but as a man after God's own heart because he always returned to God in honesty and humility.`,
    journeyCards: [
      { title: 'Shepherd Boy Anointed', description: 'The prophet Samuel came to Bethlehem and anointed the youngest son of Jesse — a ruddy shepherd boy — as the future king of Israel.' },
      { title: 'Goliath Falls', description: 'Armed with only a sling and five smooth stones, the young David defeated the Philistine giant Goliath in the Valley of Elah.' },
      { title: 'Fugitive & King', description: 'Hunted by Saul for years, David finally ascended the throne, united the tribes, and established Jerusalem as Israel\'s capital.' },
      { title: 'Sin & Repentance', description: 'David\'s adultery with Bathsheba and murder of Uriah brought devastating consequences, but his broken repentance in Psalm 51 became the model for all who seek forgiveness.' }
    ],
    lessons: [
      'God looks at the heart, not outward appearances — David was overlooked by everyone except God.',
      'True repentance means taking full responsibility — "Against you, you only, have I sinned" (Psalm 51:4).',
      'Even great faith does not make you immune to great sin — guard your heart in seasons of comfort.'
    ],
    keyScriptures: [
      { reference: '1 Samuel 16:7', text: 'The LORD does not look at the things people look at. People look at the outward appearance, but the LORD looks at the heart.' },
      { reference: 'Psalm 51:10', text: 'Create in me a pure heart, O God, and renew a steadfast spirit within me.' }
    ],
    timeline: [
      { date: 'c. 1040 BC', event: 'Born in Bethlehem; youngest of Jesse\'s eight sons' },
      { date: 'c. 1025 BC', event: 'Anointed by Samuel; defeats Goliath; enters Saul\'s court' },
      { date: 'c. 1010 BC', event: 'Becomes king of Judah; later king of all Israel; conquers Jerusalem' },
      { date: 'c. 970 BC', event: 'Dies after 40-year reign; Solomon succeeds him' }
    ],
    relatedPeople: ['saul', 'solomon', 'samuel', 'moses', 'jesus']
  },
  {
    id: 'mary',
    name: 'Mary, Mother of Jesus',
    subtitle: 'Mother of Jesus',
    testament: 'new',
    category: 'Women of Faith',
    era: 'c. 18 BC – c. AD 48',
    imageQuery: 'biblical Virgin Mary mother of Jesus blue veil gentle serene face praying classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=serene%20beautiful%20young%20woman%20in%20flowing%20cream%20and%20soft%20rose%20robes%20gentle%20holy%20expression%20soft%20warm%20golden%20lighting%20simple%20ivory%20background%20graceful%20and%20peaceful%20classical%20religious%20art%20style%20modest%20veil%20draped%20over%20dark%20hair%20tender%20maternal%20expression&width=400&height=600&seq=mary01&orientation=portrait',
    bio: `Mary of Nazareth holds a unique place in the story of Scripture as the woman chosen by God to bear his Son. A young Jewish virgin betrothed to Joseph, a carpenter, she received the startling visit of the angel Gabriel announcing that she would conceive by the Holy Spirit and give birth to the Messiah. Her response — "I am the Lord's servant. May your word to me be fulfilled" — is one of the most profound statements of faith in the Bible, spoken by a teenage girl facing social disgrace and potential death by stoning.

Mary's journey as the mother of Jesus was marked by both extraordinary blessing and deep sorrow. She treasured the wonder of the shepherds' visit and the Magi's gifts, pondering these things in her heart. She watched her son grow in wisdom and stature, marveled at his first miracle at the wedding in Cana, and followed his ministry with a mix of pride and bewilderment. The elderly Simeon had prophesied that a sword would pierce her own soul — and so it did when she stood at the foot of the cross, watching her firstborn son die the agonizing death of crucifixion.

After the resurrection, Mary is found among the disciples in the upper room, praying and awaiting the Holy Spirit at Pentecost. Though Scripture gives few details of her later years, her legacy as the faithful handmaid of the Lord endures. She exemplifies the virtue of saying yes to God's plan even when it costs everything — her reputation, her comfort, and ultimately her son. Her Magnificat (Luke 1:46-55) remains one of the great hymns of praise in the Christian tradition.`,
    journeyCards: [
      { title: 'The Annunciation', description: 'The angel Gabriel appeared to Mary in Nazareth, announcing she would conceive by the Holy Spirit and bear the Son of God.' },
      { title: 'Birth of Jesus', description: 'Mary gave birth to Jesus in a Bethlehem manger, wrapping him in swaddling clothes, with shepherds arriving to worship the newborn King.' },
      { title: 'At the Cross', description: 'Mary stood at the foot of the cross as her son was crucified. Jesus entrusted her to the care of the beloved disciple John.' },
      { title: 'The Upper Room', description: 'After the resurrection and ascension, Mary gathered with the disciples in Jerusalem, praying and awaiting the promised Holy Spirit.' }
    ],
    lessons: [
      'Faithful obedience often requires courage in the face of uncertainty — Mary said yes without knowing the full cost.',
      'Pondering God\'s work in your heart is an act of worship — Mary "treasured all these things" even when she didn\'t understand.',
      'Suffering does not disqualify blessing — the sword that pierced Mary\'s soul was part of God\'s redemptive plan.'
    ],
    keyScriptures: [
      { reference: 'Luke 1:38', text: '"I am the Lord\'s servant," Mary answered. "May your word to me be fulfilled." Then the angel left her.' },
      { reference: 'Luke 1:46-47', text: 'And Mary said: "My soul glorifies the Lord and my spirit rejoices in God my Savior."' }
    ],
    timeline: [
      { date: 'c. 18 BC', event: 'Born in Nazareth (or possibly Sepphoris) in Galilee' },
      { date: 'c. 5 BC', event: 'Visited by angel Gabriel; conceives Jesus by the Holy Spirit' },
      { date: 'c. 4 BC', event: 'Gives birth to Jesus in Bethlehem; flees to Egypt to escape Herod' },
      { date: 'c. AD 30', event: 'Stands at the cross; present in the upper room at Pentecost' }
    ],
    relatedPeople: ['jesus', 'joseph', 'elizabeth', 'john-apostle', 'mary-magdalene']
  },
  {
    id: 'peter',
    name: 'Simon Peter',
    subtitle: 'Apostle & Rock of the Church',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 1–68',
    imageQuery: 'biblical apostle Peter fisherman rugged bearded face keys of heaven fishing nets classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=rugged%20middle-aged%20fisherman%20turned%20apostle%20weathered%20face%20with%20short%20brown%20beard%20wearing%20humble%20cream%20robes%20holding%20large%20keys%20dramatic%20warm%20candlelight%20simple%20dark%20stone%20background%20determined%20and%20faithful%20expression%20classical%20painting%20style%20strong%20hands&width=400&height=600&seq=pet01&orientation=portrait',
    bio: `Simon Peter — originally a fisherman from Bethsaida on the Sea of Galilee — became the most prominent of Jesus' twelve apostles and the de facto leader of the early church. His brother Andrew first brought him to Jesus, who looked at him and said, "You are Simon son of John. You will be called Cephas" (which means Peter, or "Rock"). It was an unlikely name for a man who would prove impulsive, contradictory, and spectacularly unreliable at the worst possible moment — and yet profoundly right, because Peter's flawed faith would become the bedrock on which the church was built.

Peter's time with Jesus was a rollercoaster of revelation and failure. He was the first to confess Jesus as "the Christ, the Son of the living God," and moments later was rebuked with "Get behind me, Satan" for opposing the plan of the cross. He walked on water toward Jesus, then sank in doubt. He swore he would die before denying Jesus, then denied him three times before a rooster crowed. After the resurrection, Jesus restored Peter with a threefold question — "Do you love me?" — and commissioned him to "Feed my sheep."

Empowered by the Holy Spirit at Pentecost, Peter became a fearless preacher whose first sermon converted three thousand souls. He opened the door of the Gospel to the Gentiles through Cornelius, endured imprisonment and beatings, and wrote two epistles that encouraged persecuted believers across the Roman Empire. Tradition holds that Peter was crucified upside down in Rome under Nero, requesting the inverted cross because he felt unworthy to die in the same manner as his Lord. His transformation from a cowardly denier to a martyr who embraced death for Christ remains one of the most powerful testimonies of grace in the New Testament.`,
    journeyCards: [
      { title: 'Called from the Nets', description: 'Jesus called Peter from his fishing boat on the Sea of Galilee: "Come, follow me, and I will make you fishers of men."' },
      { title: 'The Great Confession', description: 'At Caesarea Philippi, Peter declared "You are the Christ, the Son of the living God" — and Jesus said upon this rock he would build his church.' },
      { title: 'Denial & Restoration', description: 'Peter denied Jesus three times on the night of his arrest. After the resurrection, Jesus restored him three times: "Feed my sheep."' },
      { title: 'Pentecost & Beyond', description: 'Filled with the Holy Spirit, Peter preached at Pentecost and 3,000 were saved. He became the leader of the Jerusalem church and opened the Gospel to Gentiles.' }
    ],
    lessons: [
      'Failure is not final — Peter\'s worst moment (denial) was followed by his greatest purpose (leading the church).',
      'Boldness comes from the Holy Spirit, not from human courage — the same man who cowered before a servant girl preached fearlessly at Pentecost.',
      'Jesus builds his kingdom on imperfect people who are willing to get back up after they fall.'
    ],
    keyScriptures: [
      { reference: 'Matthew 16:18', text: 'And I tell you that you are Peter, and on this rock I will build my church, and the gates of Hades will not overcome it.' },
      { reference: 'John 21:17', text: 'The third time he said to him, "Simon son of John, do you love me?" Peter said, "Lord, you know all things; you know that I love you." Jesus said, "Feed my sheep."' }
    ],
    timeline: [
      { date: 'c. AD 1', event: 'Born in Bethsaida; works as fisherman on the Sea of Galilee' },
      { date: 'c. AD 27', event: 'Called by Jesus; becomes part of the inner circle with James and John' },
      { date: 'c. AD 30', event: 'Denies Jesus; restored after the resurrection; preaches at Pentecost' },
      { date: 'c. AD 68', event: 'Martyred in Rome by crucifixion (tradition says upside down) under Emperor Nero' }
    ],
    relatedPeople: ['jesus', 'andrew', 'john-apostle', 'james-zebedee', 'paul']
  },
  {
    id: 'paul',
    name: 'Paul the Apostle',
    subtitle: 'Apostle to the Gentiles',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 5–67',
    imageQuery: 'biblical apostle Paul scholar holding scroll bald bearded Roman citizen tent maker classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=scholarly%20intense%20man%20with%20dark%20eyes%20and%20short%20dark%20beard%20wearing%20Greek%20style%20robes%20holding%20an%20ancient%20scroll%20dramatic%20warm%20lamp%20light%20simple%20neutral%20stone%20background%20intellectual%20passionate%20expression%20classical%20Roman%20painting%20style%20focused%20gaze&width=400&height=600&seq=paul01&orientation=portrait',
    bio: `Paul of Tarsus — formerly Saul, the fiercest persecutor of the early church — became the most influential apostle in Christian history and the author of nearly half the New Testament. A Roman citizen, a Pharisee trained under the great rabbi Gamaliel, and a zealous enforcer of Jewish law, Saul supervised the stoning of Stephen, the first Christian martyr, and traveled with letters of authority to arrest believers in Damascus. He was, by his own admission, "the worst of sinners."

Everything changed on the road to Damascus when a blinding light struck Saul to the ground and the risen Jesus spoke to him: "Saul, Saul, why do you persecute me?" Blind for three days, Saul was healed by the disciple Ananias and baptized. The transformation was immediate and total — the persecutor became the preacher. After years of preparation in Arabia and Tarsus, Paul embarked on three epic missionary journeys that carried the Gospel from Jerusalem to Rome, planting churches across modern-day Turkey, Greece, and beyond.

Paul's thirteen epistles — Romans, Corinthians, Galatians, Ephesians, Philippians, Colossians, Thessalonians, Timothy, Titus, and Philemon — form the theological backbone of Christianity. His articulation of justification by faith, the nature of grace, the body of Christ, and the hope of resurrection has shaped Christian thought for two millennia. He endured shipwrecks, beatings, stonings, imprisonment, and constant opposition, yet wrote from prison, "I have learned the secret of being content in any and every situation." Tradition holds that Paul was beheaded in Rome under Nero around AD 67, having finished the race and kept the faith.`,
    journeyCards: [
      { title: 'Persecutor of the Church', description: 'As Saul the Pharisee, he approved Stephen\'s stoning and hunted Christians with letters of arrest from the high priest.' },
      { title: 'The Damascus Road', description: 'A blinding light and the voice of Jesus transformed Saul from persecutor to preacher. Baptized by Ananias in Damascus, he began proclaiming Christ in the synagogues.' },
      { title: 'Three Missionary Journeys', description: 'Paul planted churches across the Roman Empire — Galatia, Philippi, Thessalonica, Corinth, Ephesus — enduring shipwrecks, beatings, and imprisonment.' },
      { title: 'Letters from Prison', description: 'Chained in Rome, Paul wrote Ephesians, Philippians, Colossians, and Philemon — some of the most joyful and profound letters in the New Testament.' }
    ],
    lessons: [
      'No one is beyond the reach of God\'s grace — the worst persecutor of the church became its greatest missionary.',
      'Suffering and purpose are not opposites — Paul\'s chains advanced the Gospel more than his freedom ever did.',
      'Contentment is learned, not given — "I have learned the secret of being content in any and every situation" (Philippians 4:12).'
    ],
    keyScriptures: [
      { reference: 'Acts 9:4-5', text: 'He fell to the ground and heard a voice say to him, "Saul, Saul, why do you persecute me?" "Who are you, Lord?" Saul asked. "I am Jesus, whom you are persecuting," he replied.' },
      { reference: '2 Timothy 4:7', text: 'I have fought the good fight, I have finished the race, I have kept the faith.' }
    ],
    timeline: [
      { date: 'c. AD 5', event: 'Born in Tarsus (modern Turkey); Roman citizen, trained as a Pharisee under Gamaliel' },
      { date: 'c. AD 34', event: 'Conversion on the road to Damascus; baptized by Ananias' },
      { date: 'c. AD 46–58', event: 'Three missionary journeys planting churches across the Roman Empire' },
      { date: 'c. AD 67', event: 'Beheaded in Rome under Emperor Nero after final imprisonment' }
    ],
    relatedPeople: ['jesus', 'peter', 'barnabas', 'timothy', 'luke']
  },
  {
    id: 'ruth',
    name: 'Ruth',
    subtitle: 'The Faithful Daughter-in-Law',
    testament: 'old',
    category: 'Women of Faith',
    era: 'c. 1150–1100 BC',
    imageQuery: 'biblical Ruth gleaning wheat barley field Moabite woman humble devoted classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=beautiful%20young%20woman%20in%20ancient%20Near%20Eastern%20harvest%20clothing%20warm%20earth%20tones%20cream%20and%20brown%20robes%20holding%20wheat%20sheaves%20gentle%20sunset%20golden%20lighting%20loyal%20kind%20expression%20simple%20golden%20wheat%20field%20background%20classical%20biblical%20illustration%20style%20graceful%20and%20dignified&width=400&height=600&seq=ruth01&orientation=portrait',
    bio: `Ruth the Moabitess is one of the most beloved figures in the Hebrew Bible — a foreign woman whose loyalty, humility, and courage earned her a place in the lineage of King David and ultimately of Jesus Christ. After the death of her husband, Ruth refused to leave her mother-in-law Naomi, declaring in words that have echoed through the centuries: "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God."

Arriving destitute in Bethlehem, Ruth gleaned barley in the fields of Boaz, a wealthy kinsman of Naomi's late husband. Boaz noticed her devotion and protected her. Following Naomi's guidance, Ruth approached Boaz at the threshing floor and asked him to act as kinsman-redeemer — a legal provision that would provide for both women and preserve the family line. Boaz honored her request, married Ruth, and they became the great-grandparents of King David.

Ruth's story is a masterpiece of providence, showing how God works through ordinary faithfulness to accomplish extraordinary purposes. A Moabite widow gleaning leftover grain became an ancestor of the Messiah — proof that God's family has always been bigger than one nation or bloodline.`,
    journeyCards: [
      { title: 'A Moabite Marriage', description: 'Ruth married Mahlon, son of Naomi and Elimelech, Israelites who had migrated to Moab during a famine in Bethlehem.' },
      { title: 'The Loyal Pledge', description: 'After her husband\'s death, Ruth refused to leave Naomi, declaring "Where you go I will go... your God will be my God."' },
      { title: 'Gleaning in Boaz\'s Fields', description: 'Arriving in Bethlehem during barley harvest, Ruth humbly gleaned in the fields of Boaz, who showed her favor and protection.' },
      { title: 'Redeemed & Restored', description: 'Boaz acted as kinsman-redeemer, married Ruth, and their son Obed became the grandfather of King David.' }
    ],
    lessons: [
      'Loyalty and faithfulness in small things lead to extraordinary outcomes — Ruth\'s daily gleaning led to a place in the Messiah\'s lineage.',
      'God\'s family transcends nationality and background — a Moabite widow became an ancestor of Jesus.',
      'Humility and hard work open doors that ambition alone cannot.'
    ],
    keyScriptures: [
      { reference: 'Ruth 1:16', text: 'But Ruth replied, "Don\'t urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God."' },
      { reference: 'Ruth 4:14', text: 'The women said to Naomi: "Praise be to the LORD, who this day has not left you without a guardian-redeemer."' }
    ],
    timeline: [
      { date: 'c. 1150 BC', event: 'Born in Moab; marries Mahlon, an Israelite exile' },
      { date: 'c. 1130 BC', event: 'Husband dies; pledges loyalty to Naomi and travels to Bethlehem' },
      { date: 'c. 1129 BC', event: 'Gleans in Boaz\'s fields; Boaz acts as kinsman-redeemer and marries Ruth' },
      { date: 'c. 1125 BC', event: 'Son Obed born — grandfather of King David' }
    ],
    relatedPeople: ['naomi', 'david', 'rahab', 'hannah', 'esther']
  },
  {
    id: 'esther',
    name: 'Queen Esther',
    subtitle: 'Savior of Her People',
    testament: 'old',
    category: 'Women of Faith',
    era: 'c. 492–460 BC',
    imageQuery: 'biblical Queen Esther Persian royal robes crown beautiful brave Jewish queen throne room classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=beautiful%20young%20Jewish%20queen%20in%20rich%20ornate%20Persian%20court%20robes%20deep%20crimson%20and%20gold%20jewels%20and%20elegant%20crown%20confident%20courageous%20expression%20warm%20palace%20candlelight%20rich%20tapestry%20background%20gold%20and%20deep%20red%20tones%20classical%20painting%20style%20regal%20bearing&width=400&height=600&seq=est01&orientation=portrait',
    bio: `Esther, a young Jewish orphan raised by her cousin Mordecai in the Persian capital of Susa, became queen of the vast Persian Empire when King Xerxes (Ahasuerus) chose her in a kingdom-wide search for a new queen. Concealing her Jewish identity on Mordecai's advice, Esther lived in the royal palace unaware that her position was part of a divine plan far larger than she could imagine.

When the king's chief advisor Haman plotted to exterminate all Jews throughout the empire, Mordecai urged Esther to intervene, delivering the famous challenge: "Who knows but that you have come to your royal position for such a time as this?" Risking her own life — for approaching the king unsummoned could mean death — Esther fasted for three days, then entered the throne room. Through wisdom, courage, and a carefully orchestrated series of banquets, she exposed Haman's genocide plot. The king executed Haman and granted the Jews the right to defend themselves, saving the entire nation.

The story of Esther is celebrated annually in the Jewish festival of Purim. Though God's name never appears in the book, his providence saturates every chapter. Esther's story reminds us that God positions ordinary people in extraordinary places for purposes they may not understand until the critical moment arrives.`,
    journeyCards: [
      { title: 'Orphan to Queen', description: 'Raised by her cousin Mordecai in Susa, the young Jewish girl Hadassah was chosen by King Xerxes and crowned Queen Esther of Persia.' },
      { title: 'Haman\'s Plot', description: 'The king\'s advisor Haman, furious at Mordecai\'s refusal to bow, secured a royal decree to annihilate all Jews in the Persian Empire.' },
      { title: 'For Such a Time as This', description: 'Mordecai challenged Esther to risk her life and approach the king. After three days of fasting, she entered the throne room unsummoned.' },
      { title: 'Deliverance & Purim', description: 'Esther exposed Haman\'s plot at a banquet. Haman was executed, the Jews were saved, and the festival of Purim was established to remember their deliverance.' }
    ],
    lessons: [
      'God positions people for purposes they cannot yet see — "for such a time as this" applies to every believer.',
      'Courage is not the absence of fear but acting despite it — Esther said "If I perish, I perish" and went to the king.',
      'Wisdom and timing matter as much as boldness — Esther didn\'t rush but prepared carefully before acting.'
    ],
    keyScriptures: [
      { reference: 'Esther 4:14', text: 'For if you remain silent at this time, relief and deliverance for the Jews will arise from another place, but you and your father\'s family will perish. And who knows but that you have come to your royal position for such a time as this?' },
      { reference: 'Esther 4:16', text: 'Go, gather together all the Jews who are in Susa, and fast for me. Do not eat or drink for three days, night or day. I and my attendants will fast as you do. When this is done, I will go to the king, even though it is against the law. And if I perish, I perish.' }
    ],
    timeline: [
      { date: 'c. 492 BC', event: 'Born in Susa; orphaned and raised by her cousin Mordecai' },
      { date: 'c. 478 BC', event: 'Chosen as queen by King Xerxes (Ahasuerus) of Persia' },
      { date: 'c. 473 BC', event: 'Exposes Haman\'s plot to destroy the Jews; Haman executed' },
      { date: 'c. 473 BC', event: 'Jews granted right to defend themselves; festival of Purim established' }
    ],
    relatedPeople: ['haman', 'ruth', 'deborah', 'hannah', 'rahab']
  },
  {
    id: 'joseph',
    name: 'Joseph',
    subtitle: 'The Dreamer',
    testament: 'old',
    category: 'Patriarch',
    era: 'c. 1915–1805 BC',
    imageQuery: 'biblical Joseph coat of many colors Egyptian vizier dream interpreter golden Egyptian setting classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=handsome%20young%20Hebrew%20man%20with%20colorful%20ornate%20multi-colored%20ceremonial%20robe%20dark%20features%20wise%20and%20humble%20expression%20Egyptian%20court%20setting%20soft%20golden%20Nile%20light%20warm%20amber%20tones%20classical%20painting%20style%20dignified%20noble%20bearing&width=400&height=600&seq=jos01&orientation=portrait',
    bio: `Joseph, the eleventh son of Jacob and the firstborn of his beloved wife Rachel, is one of the Old Testament's most vivid characters — a man whose life arc from favored son to slave to prisoner to prime minister of Egypt reads like an epic novel. Jacob gave Joseph a richly ornamented robe (the famous "coat of many colors"), provoking fierce jealousy among his ten older brothers. When Joseph shared his prophetic dreams — sheaves of grain and stars bowing to him — their envy turned murderous. They stripped him of his robe, threw him into a pit, and sold him to Midianite traders for twenty pieces of silver.

Carried to Egypt as a slave, Joseph served in the household of Potiphar, captain of Pharaoh's guard. His integrity and administrative gifts earned him authority over the entire estate — until Potiphar's wife falsely accused him of assault and he was thrown into prison. Even there, Joseph thrived, interpreting the dreams of Pharaoh's cupbearer and baker. Two years later, when Pharaoh himself was troubled by dreams no one could explain, the cupbearer remembered Joseph. Summoned from the dungeon, Joseph interpreted the dreams as seven years of abundance followed by seven years of famine, and proposed a national grain-storage plan. Pharaoh appointed him vizier of Egypt on the spot.

When the famine struck, Joseph's brothers came to Egypt seeking grain, not recognizing the powerful official before them. After testing their character through an emotional series of encounters, Joseph revealed himself with tears: "I am Joseph! Is my father still alive?" He forgave them completely, declaring, "You intended to harm me, but God intended it for good, to accomplish what is now being done, the saving of many lives." Joseph's story is the Bible's most detailed illustration of Romans 8:28 — that God works all things together for good for those who love him, even betrayal, slavery, and imprisonment.`,
    journeyCards: [
      { title: 'The Coat & the Dreams', description: 'Jacob\'s favorite son received a richly ornamented robe and dreamed of his family bowing before him, provoking his brothers\' murderous jealousy.' },
      { title: 'Sold into Slavery', description: 'Joseph\'s brothers threw him into a pit and sold him to traders for twenty pieces of silver. He was taken to Egypt as a slave.' },
      { title: 'Prison to Palace', description: 'After false accusation and years in prison, Joseph interpreted Pharaoh\'s dreams and was elevated to vizier of Egypt — second only to Pharaoh.' },
      { title: 'Forgiveness & Reunion', description: 'When his brothers came to Egypt during the famine, Joseph revealed his identity and forgave them: "God intended it for good, to save many lives."' }
    ],
    lessons: [
      'What others intend for evil, God can transform for good — Joseph\'s slavery and prison became the path to saving nations.',
      'Faithfulness in obscurity prepares you for prominence — Joseph\'s integrity as a slave and prisoner proved his readiness to lead.',
      'Forgiveness frees both the offended and the offender — Joseph\'s weeping reconciliation with his brothers healed a family.'
    ],
    keyScriptures: [
      { reference: 'Genesis 50:20', text: 'You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.' },
      { reference: 'Genesis 39:2', text: 'The LORD was with Joseph so that he prospered, and he lived in the house of his Egyptian master.' }
    ],
    timeline: [
      { date: 'c. 1915 BC', event: 'Born to Jacob and Rachel; receives the coat of many colors' },
      { date: 'c. 1898 BC', event: 'Sold by his brothers into slavery; taken to Egypt' },
      { date: 'c. 1885 BC', event: 'Interprets Pharaoh\'s dreams; appointed vizier of Egypt at age 30' },
      { date: 'c. 1805 BC', event: 'Dies in Egypt at age 110; bones later carried to the Promised Land' }
    ],
    relatedPeople: ['jacob', 'abraham', 'isaac', 'sarah', 'pharaoh']
  },
  {
    id: 'elijah',
    name: 'Elijah',
    subtitle: 'The Fiery Prophet',
    testament: 'old',
    category: 'Prophet',
    era: 'c. 900–850 BC',
    imageQuery: 'biblical prophet Elijah fiery chariot whirlwind ascending heaven dramatic sky Mount Carmel classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=fierce%20weathered%20prophet%20with%20wild%20dark%20hair%20and%20rugged%20beard%20wearing%20rough%20animal%20skin%20leather%20cloak%20holding%20a%20wooden%20staff%20dramatic%20stormy%20mountain%20sky%20rocky%20cliff%20background%20powerful%20righteous%20expression%20classical%20painting%20style%20intense%20eyes&width=400&height=600&seq=eli01&orientation=portrait',
    bio: `Elijah the Tishbite appeared suddenly in Scripture like a thunderbolt — announcing drought upon Israel as judgment for King Ahab and Queen Jezebel's worship of Baal. He is the most dramatic of the Old Testament prophets, calling down fire from heaven on Mount Carmel to demonstrate that the LORD alone is God, defeating 450 prophets of Baal in a single contest. Yet after this triumph, he fled in terror from Jezebel's death threat, collapsing under a broom tree and begging God to take his life.

God restored Elijah with food, rest, and a still small voice on Mount Horeb. He continued his ministry, confronting Ahab over the murder of Naboth, anointing future kings, and mentoring his successor Elisha. Elijah never died — he was taken to heaven in a chariot of fire and a whirlwind, and centuries later appeared with Moses at the Transfiguration of Jesus.`,
    journeyCards: [
      { title: 'Drought Declared', description: 'Elijah appeared before King Ahab and declared there would be no rain in Israel except at his word — beginning a three-year drought.' },
      { title: 'Fire on Mount Carmel', description: 'Elijah challenged 450 prophets of Baal on Mount Carmel. God sent fire from heaven that consumed the sacrifice, the altar, and even the water in the trench.' },
      { title: 'Flight to Horeb', description: 'Fleeing Jezebel\'s death threat, Elijah traveled 40 days to Mount Horeb, where God spoke not in wind or earthquake but in a still small voice.' },
      { title: 'Chariot of Fire', description: 'Elijah was taken to heaven in a whirlwind with a chariot of fire, dropping his mantle to his successor Elisha.' }
    ],
    lessons: [
      'Even the greatest spiritual victories can be followed by the deepest depression — guard your heart after mountaintop moments.',
      'God often speaks not in the dramatic but in the still, small voice — be quiet enough to hear.',
      'Faithful mentoring multiplies your impact — Elisha received a double portion of Elijah\'s spirit.'
    ],
    keyScriptures: [
      { reference: '1 Kings 18:38-39', text: 'Then the fire of the LORD fell and burned up the sacrifice, the wood, the stones and the soil, and also licked up the water in the trench. When all the people saw this, they fell prostrate and cried, "The LORD — he is God! The LORD — he is God!"' },
      { reference: '1 Kings 19:12', text: 'After the earthquake came a fire, but the LORD was not in the fire. And after the fire came a gentle whisper.' }
    ],
    timeline: [
      { date: 'c. 870 BC', event: 'Appears before King Ahab; declares a drought on Israel' },
      { date: 'c. 868 BC', event: 'Confronts 450 prophets of Baal on Mount Carmel; fire falls from heaven' },
      { date: 'c. 867 BC', event: 'Flees to Horeb; encounters God in the still small voice' },
      { date: 'c. 850 BC', event: 'Taken to heaven in a chariot of fire; Elisha succeeds him' }
    ],
    relatedPeople: ['elisha', 'ahab', 'jezebel', 'moses', 'john-baptist']
  },
  {
    id: 'daniel',
    name: 'Daniel',
    subtitle: 'Prophet in Exile',
    testament: 'old',
    category: 'Prophet',
    era: 'c. 620–530 BC',
    imageQuery: 'biblical prophet Daniel in lions den calm peaceful praying surrounded by lions Babylonian exile classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=dignified%20faithful%20Hebrew%20man%20in%20Babylonian%20court%20setting%20wise%20scholarly%20expression%20holding%20a%20scroll%20warm%20Babylonian%20oil%20lamp%20light%20ornate%20Babylonian%20architecture%20background%20regal%20and%20peaceful%20expression%20classical%20painting%20style%20noble%20bearing%20dark%20features&width=400&height=600&seq=dan01&orientation=portrait',
    bio: `Daniel was a young Jewish nobleman taken captive to Babylon during Nebuchadnezzar's conquest of Jerusalem. Trained in Babylonian language and literature, he rose to the highest levels of government through his integrity, wisdom, and God-given ability to interpret dreams and visions. He served faithfully under Babylonian and Persian rulers alike.

Daniel's most famous episode is his survival in the lions' den, where jealous rivals had manipulated King Darius into issuing a decree forbidding prayer to anyone but the king. Daniel continued praying to God three times daily with his windows open toward Jerusalem, was thrown into the den, and emerged unharmed the next morning. His apocalyptic visions — recorded in the second half of his book — foretell the rise and fall of empires and the coming of an everlasting kingdom.`,
    journeyCards: [
      { title: 'Captive in Babylon', description: 'Taken from Jerusalem as a youth, Daniel was trained in Babylonian culture but resolved not to defile himself with the king\'s food.' },
      { title: 'Interpreter of Dreams', description: 'Daniel interpreted Nebuchadnezzar\'s dream of a great statue, revealing God\'s plan for the succession of world empires.' },
      { title: 'The Lions\' Den', description: 'Refusing to stop praying to God, Daniel was thrown into a den of lions. God shut the lions\' mouths and he emerged unscathed.' },
      { title: 'Apocalyptic Visions', description: 'Daniel received visions of four beasts, seventy weeks, and the Ancient of Days — prophecies spanning centuries of future history.' }
    ],
    lessons: [
      'Faithfulness in a hostile culture requires daily discipline — Daniel prayed three times a day regardless of the cost.',
      'God gives wisdom to those who ask — Daniel\'s ability to interpret dreams came from humble prayer, not human cleverness.',
      'You can serve secular authorities with integrity while maintaining absolute loyalty to God.'
    ],
    keyScriptures: [
      { reference: 'Daniel 6:22', text: 'My God sent his angel, and he shut the mouths of the lions. They have not hurt me, because I was found innocent in his sight.' },
      { reference: 'Daniel 2:44', text: 'In the time of those kings, the God of heaven will set up a kingdom that will never be destroyed, nor will it be left to another people.' }
    ],
    timeline: [
      { date: 'c. 620 BC', event: 'Born in Jerusalem to a noble Jewish family' },
      { date: 'c. 605 BC', event: 'Taken captive to Babylon by Nebuchadnezzar; trained in Babylonian court' },
      { date: 'c. 553 BC', event: 'Receives apocalyptic visions of future kingdoms and the Ancient of Days' },
      { date: 'c. 539 BC', event: 'Survives the lions\' den under Darius the Mede' }
    ],
    relatedPeople: ['isaiah', 'jeremiah', 'nehemiah', 'esther', 'haman']
  },
  {
    id: 'noah',
    name: 'Noah',
    subtitle: 'Builder of the Ark',
    testament: 'old',
    category: 'Patriarch',
    era: 'Antediluvian',
    imageQuery: 'biblical Noah elderly patriarch building great wooden ark animals rain clouds gathering classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=elderly%20wise%20patriarch%20with%20long%20white%20beard%20and%20weathered%20face%20wearing%20ancient%20rustic%20robes%20large%20wooden%20ark%20visible%20in%20background%20gentle%20and%20faithful%20expression%20warm%20golden%20light%20dramatic%20sky%20with%20rainbow%20beginning%20simple%20background%20classical%20biblical%20painting%20style%20dignified&width=400&height=600&seq=noa01&orientation=portrait',
    bio: `Noah was a righteous man who found favor in God's eyes during a generation so corrupt that God determined to destroy the earth with a flood. Instructed to build a massive ark — roughly 450 feet long — Noah obeyed despite having no precedent for such a catastrophe and enduring what must have been decades of ridicule from his neighbors.

Noah, his wife, his three sons and their wives, along with pairs of every animal, entered the ark before the floodwaters came. After the waters receded and the ark rested on Mount Ararat, Noah built an altar and offered sacrifices. God established a covenant with Noah, setting the rainbow as its sign — a promise never again to destroy the earth by flood. Noah's faithful obedience in an age of universal wickedness marks him as one of Scripture's supreme examples of walking with God against the current of the world.`,
    journeyCards: [
      { title: 'Righteous in a Wicked Age', description: 'In a generation filled with violence and corruption, Noah alone walked faithfully with God and found favor in His sight.' },
      { title: 'Building the Ark', description: 'God commanded Noah to build an enormous ark — 300 cubits long, 50 wide, 30 high — to preserve life through the coming flood.' },
      { title: 'The Great Flood', description: 'Noah, his family, and the animals entered the ark. Rain fell for 40 days and nights, and the floodwaters covered the earth.' },
      { title: 'The Rainbow Covenant', description: 'After the waters receded, God made a covenant with Noah and set the rainbow as a sign of His promise never to flood the earth again.' }
    ],
    lessons: [
      'Obedience may look foolish to the world — Noah built a boat in a world that had never seen a flood.',
      'God preserves the faithful even through catastrophic judgment.',
      'Covenants with God are sealed with visible signs — the rainbow reminds us of His promises.'
    ],
    keyScriptures: [
      { reference: 'Genesis 6:9', text: 'Noah was a righteous man, blameless among the people of his time, and he walked faithfully with God.' },
      { reference: 'Hebrews 11:7', text: 'By faith Noah, when warned about things not yet seen, in holy fear built an ark to save his family.' }
    ],
    timeline: [
      { date: 'Antediluvian', event: 'Born in the line of Seth; walks with God in a corrupt generation' },
      { date: 'Antediluvian', event: 'God commands Noah to build the ark; construction takes many decades' },
      { date: 'Antediluvian', event: 'The flood comes; Noah, his family, and the animals are preserved' },
      { date: 'Post-Flood', event: 'God establishes the rainbow covenant; Noah plants a vineyard' }
    ],
    relatedPeople: ['abraham', 'jacob', 'moses', 'joseph', 'isaac']
  },
  {
    id: 'mary-magdalene',
    name: 'Mary Magdalene',
    subtitle: 'First Witness of the Resurrection',
    testament: 'new',
    category: 'Women of Faith',
    era: 'c. AD 3–AD 63',
    imageQuery: 'biblical Mary Magdalene devoted woman at empty tomb sunrise garden tears of joy classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=woman%20with%20long%20flowing%20auburn%20hair%20wearing%20simple%20cream%20robes%20tearful%20yet%20joyful%20expression%20sunrise%20light%20glowing%20behind%20her%20garden%20setting%20stone%20tomb%20in%20background%20faith%20and%20redemption%20in%20expression%20classical%20painting%20style%20warm%20golden%20morning%20light&width=400&height=600&seq=mm01&orientation=portrait',
    bio: `Mary Magdalene, from the town of Magdala on the Sea of Galilee, was one of Jesus' most devoted followers. Luke records that Jesus cast seven demons out of her, and from that point she became part of a group of women who supported Jesus' ministry financially and traveled with him throughout Galilee and Judea.

Mary Magdalene's most significant role in Scripture is as the first witness of the resurrected Christ. She stood at the cross when most of the male disciples had fled, and on Easter morning she was the first to arrive at the empty tomb. Weeping outside the tomb, she encountered the risen Jesus, initially mistaking him for the gardener, until he spoke her name — "Mary." Jesus then commissioned her to carry the news to the disciples, making her the "apostle to the apostles."`,
    journeyCards: [
      { title: 'Set Free', description: 'Jesus cast seven demons out of Mary Magdalene, transforming her life completely and making her one of his most devoted followers.' },
      { title: 'Supporting the Ministry', description: 'Mary traveled with Jesus and the disciples, providing financial support and faithful companionship throughout his Galilean ministry.' },
      { title: 'Faithful at the Cross', description: 'When most disciples fled, Mary Magdalene stood at the foot of the cross, witnessing Jesus\' crucifixion and burial.' },
      { title: 'First Witness of the Risen Lord', description: 'At the empty tomb on Sunday morning, Jesus appeared first to Mary, calling her by name and sending her to tell the disciples.' }
    ],
    lessons: [
      'Past brokenness does not define your future — a woman delivered from seven demons became the first resurrection witness.',
      'Faithfulness in the darkest hours is remembered — Mary stayed when others fled.',
      'Jesus calls each of us by name — personal encounter with Christ transforms everything.'
    ],
    keyScriptures: [
      { reference: 'John 20:16', text: 'Jesus said to her, "Mary." She turned toward him and cried out in Aramaic, "Rabboni!" (which means "Teacher").' },
      { reference: 'Mark 16:9', text: 'When Jesus rose early on the first day of the week, he appeared first to Mary Magdalene, out of whom he had driven seven demons.' }
    ],
    timeline: [
      { date: 'c. AD 3', event: 'Born in Magdala on the western shore of the Sea of Galilee' },
      { date: 'c. AD 28', event: 'Delivered from seven demons by Jesus; begins following his ministry' },
      { date: 'c. AD 30', event: 'Witnesses the crucifixion and burial of Jesus' },
      { date: 'c. AD 30', event: 'First person to see the risen Christ at the empty tomb on Easter morning' }
    ],
    relatedPeople: ['jesus', 'mary', 'peter', 'john-apostle', 'elizabeth']
  },
  {
    id: 'andrew',
    name: 'Andrew',
    subtitle: 'The First Called',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 5–70',
    imageQuery: 'biblical apostle Andrew fisherman humble X-shaped cross disciple of Jesus Sea of Galilee classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=bearded%20fisherman%20apostle%20wearing%20simple%20brown%20robes%20holding%20a%20fishing%20net%20warm%20gentle%20expression%20Sea%20of%20Galilee%20light%20classical%20painting%20style%20humble%20and%20earnest%20face%20ancient%20biblical%20appearance&width=400&height=600&seq=andr01&orientation=portrait',
    bio: `Andrew, a fisherman from Bethsaida and brother of Simon Peter, was originally a disciple of John the Baptist. When John pointed to Jesus and declared "Behold the Lamb of God," Andrew immediately followed Jesus and then brought his brother Simon to meet the Messiah — making him the first evangelist in the Gospels. Andrew is always portrayed as the quiet introducer: he brought Peter to Jesus, he brought the boy with five loaves and two fish, and he brought Greek seekers who wished to see Jesus. Tradition holds he was martyred on an X-shaped cross (now called St. Andrew's Cross) in Patras, Greece.`,
    journeyCards: [
      { title: 'Disciple of the Baptist', description: 'Andrew was a follower of John the Baptist, seeking the Messiah, when John pointed to Jesus as the Lamb of God.' },
      { title: 'Bringing Peter to Jesus', description: 'The first thing Andrew did was find his brother Simon Peter and bring him to Jesus — an act that changed history.' },
      { title: 'The Boy\'s Lunch', description: 'Andrew brought the boy with five loaves and two fish to Jesus, enabling the miracle of feeding the 5,000.' },
      { title: 'Martyrdom in Patras', description: 'Tradition says Andrew was crucified on an X-shaped cross in Greece, preaching to crowds for two days before he died.' }
    ],
    lessons: [
      'The greatest impact often comes from simply introducing others to Jesus.',
      'Quiet faithfulness is just as valuable as prominent leadership.',
      'Bringing what little you have to Jesus — even a boy\'s lunch — can result in miracles.'
    ],
    keyScriptures: [
      { reference: 'John 1:41-42', text: 'The first thing Andrew did was to find his brother Simon and tell him, "We have found the Messiah." And he brought him to Jesus.' },
      { reference: 'John 6:8-9', text: 'Another of his disciples, Andrew, Simon Peter\'s brother, spoke up, "Here is a boy with five small barley loaves and two small fish, but how far will they go among so many?"' }
    ],
    timeline: [
      { date: 'c. AD 5', event: 'Born in Bethsaida; works as fisherman with his brother Peter' },
      { date: 'c. AD 27', event: 'Follows John the Baptist; becomes first disciple called by Jesus' },
      { date: 'c. AD 27-30', event: 'One of the Twelve; brings people to Jesus throughout the ministry' },
      { date: 'c. AD 70', event: 'Martyred by crucifixion on an X-shaped cross in Patras, Greece' }
    ],
    relatedPeople: ['peter', 'jesus', 'john-baptist', 'philip-apostle', 'john-apostle']
  },
  {
    id: 'john-apostle',
    name: 'John the Apostle',
    subtitle: 'The Beloved Disciple',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 6–100',
    imageQuery: 'biblical apostle John beloved disciple young gentle face writing Gospel eagle symbol Patmos island classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=young%20thoughtful%20apostle%20with%20gentle%20face%20and%20dark%20hair%20wearing%20deep%20red%20and%20cream%20robes%20writing%20on%20a%20scroll%20by%20candlelight%20peaceful%20and%20contemplative%20expression%20classical%20painting%20style%20ancient%20biblical%20scholar%20appearance%20warm%20lamp%20light&width=400&height=600&seq=john01&orientation=portrait',
    bio: `John, son of Zebedee and brother of James, was a fisherman from Galilee who became part of Jesus' innermost circle along with Peter and James. Known as "the disciple whom Jesus loved," John was present at the Transfiguration, in Gethsemane, and at the cross, where Jesus entrusted his mother Mary to John's care. After Pentecost, John became a pillar of the Jerusalem church alongside Peter and James.

John is credited with writing the Gospel of John, three epistles, and the book of Revelation (written during exile on the island of Patmos). His theology emphasizes love as the central mark of the Christian life. He is the only apostle believed to have died of natural causes, living to an advanced age in Ephesus.`,
    journeyCards: [
      { title: 'Called from the Nets', description: 'Jesus called John and his brother James from their father Zebedee\'s fishing boat. He nicknamed them "Boanerges" — sons of thunder.' },
      { title: 'The Inner Circle', description: 'John was part of Jesus\' closest three, present at the Transfiguration, the raising of Jairus\' daughter, and Gethsemane.' },
      { title: 'At the Cross', description: 'John stood at the foot of the cross and Jesus entrusted Mary his mother to John\'s care: "Behold your mother."' },
      { title: 'Exile on Patmos', description: 'Banished to the island of Patmos under Roman persecution, John received the apocalyptic visions recorded in the book of Revelation.' }
    ],
    lessons: [
      'Love is the ultimate identifier of a true disciple — "By this everyone will know you are my disciples, if you love one another."',
      'Intimacy with Christ transforms even a "son of thunder" into an apostle of love.',
      'Faithfulness over a long life — John served Christ for 70+ years, outlasting all the other apostles.'
    ],
    keyScriptures: [
      { reference: '1 John 4:8', text: 'Whoever does not love does not know God, because God is love.' },
      { reference: 'John 13:34-35', text: 'A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples.' }
    ],
    timeline: [
      { date: 'c. AD 6', event: 'Born in Galilee; son of Zebedee and Salome, brother of James' },
      { date: 'c. AD 27', event: 'Called by Jesus; becomes part of the inner three disciples' },
      { date: 'c. AD 30', event: 'Stands at the cross; takes Mary into his care; witnesses the resurrection' },
      { date: 'c. AD 95', event: 'Exiled to Patmos; writes Revelation; tradition says he died in Ephesus c. AD 100' }
    ],
    relatedPeople: ['jesus', 'peter', 'james-zebedee', 'mary', 'mary-magdalene']
  },
  {
    id: 'matthew',
    name: 'Matthew',
    subtitle: 'The Tax Collector',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 5–70',
    imageQuery: 'biblical apostle Matthew tax collector at booth coins ledger pen writing Gospel classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=former%20tax%20collector%20turned%20apostle%20middle%20aged%20man%20with%20focused%20intelligent%20eyes%20wearing%20modest%20robes%20holding%20a%20quill%20pen%20and%20scroll%20writing%20at%20a%20wooden%20desk%20ancient%20oil%20lamp%20warm%20light%20classical%20painting%20style%20thoughtful%20scholarly%20expression&width=400&height=600&seq=matt01&orientation=portrait',
    bio: `Matthew (also called Levi) was a Jewish tax collector in Capernaum — a profession despised by fellow Jews because tax collectors worked for Rome and often extorted extra money. Jesus called Matthew with two simple words: "Follow me." Matthew immediately left his tax booth and hosted a great banquet for Jesus, inviting other tax collectors and sinners. The Pharisees were scandalized, but Jesus responded, "It is not the healthy who need a doctor, but the sick."

Matthew is credited with writing the first Gospel, which was particularly aimed at a Jewish audience, demonstrating that Jesus is the fulfillment of Old Testament prophecy. His Gospel contains the Sermon on the Mount, the parables of the kingdom, and the Great Commission. Tradition says he was martyred in Ethiopia.`,
    journeyCards: [
      { title: 'At the Tax Booth', description: 'Matthew sat collecting taxes in Capernaum when Jesus walked by and said simply, "Follow me." Matthew got up and followed.' },
      { title: 'The Banquet of Sinners', description: 'Matthew threw a great banquet at his home for Jesus, inviting his fellow tax collectors and sinners — shocking the religious leaders.' },
      { title: 'One of the Twelve', description: 'Despite his despised profession, Matthew became one of Jesus\' twelve apostles, witnessing his ministry, death, and resurrection.' },
      { title: 'Author of the Gospel', description: 'Matthew wrote the first Gospel, presenting Jesus as the Messiah prophesied in the Hebrew Scriptures, bridging the Old and New Testaments.' }
    ],
    lessons: [
      'Jesus calls the despised and rejected — a corrupt tax collector became a Gospel writer.',
      'Immediate obedience can change the course of your life — Matthew left everything at once.',
      'Your past profession and reputation do not determine your kingdom purpose.'
    ],
    keyScriptures: [
      { reference: 'Matthew 9:9', text: 'As Jesus went on from there, he saw a man named Matthew sitting at the tax collector\'s booth. "Follow me," he told him, and Matthew got up and followed him.' },
      { reference: 'Matthew 9:12-13', text: 'On hearing this, Jesus said, "It is not the healthy who need a doctor, but the sick... For I have not come to call the righteous, but sinners."' }
    ],
    timeline: [
      { date: 'c. AD 5', event: 'Born in Galilee; becomes a tax collector for the Roman government' },
      { date: 'c. AD 28', event: 'Called by Jesus from the tax booth; hosts a banquet for sinners' },
      { date: 'c. AD 30-33', event: 'Witnesses Jesus\' ministry, death, resurrection, and ascension' },
      { date: 'c. AD 50-70', event: 'Writes the Gospel of Matthew; tradition says martyred in Ethiopia' }
    ],
    relatedPeople: ['jesus', 'peter', 'thomas', 'john-apostle', 'james-zebedee']
  },
  {
    id: 'thomas',
    name: 'Thomas',
    subtitle: 'The Doubter Who Believed',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 5–72',
    imageQuery: 'biblical apostle Thomas doubting touching wounds of Jesus hands raised wonder devotion classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=bearded%20apostle%20with%20searching%20eyes%20and%20earnest%20intense%20expression%20wearing%20simple%20cream%20and%20brown%20robes%20hands%20outstretched%20in%20wonder%20warm%20candlelight%20background%20thoughtful%20honest%20seeker%20expression%20classical%20painting%20style%20ancient%20biblical%20appearance&width=400&height=600&seq=thom01&orientation=portrait',
    bio: `Thomas, also called Didymus (meaning "twin"), is best known for his initial refusal to believe in Jesus' resurrection without physical evidence — earning him the enduring nickname "Doubting Thomas." When the other disciples reported seeing the risen Lord, Thomas declared, "Unless I see the nail marks in his hands and put my finger where the nails were, I will not believe."

A week later, Jesus appeared specifically for Thomas, inviting him to touch his wounds. Thomas responded with the most exalted confession in the Gospels: "My Lord and my God!" — a declaration of Jesus' full deity. Beyond this famous episode, Thomas was a loyal and courageous disciple who once said, "Let us also go, that we may die with him" when Jesus resolved to return to dangerous Judea. Tradition holds Thomas traveled to India to preach the Gospel and was martyred there.`,
    journeyCards: [
      { title: 'The Loyal Disciple', description: 'When Jesus resolved to go to Judea where enemies awaited, Thomas said, "Let us also go, that we may die with him" — showing deep loyalty.' },
      { title: 'The Hard Question', description: 'At the Last Supper, Thomas asked, "Lord, we don\'t know where you are going, so how can we know the way?" — prompting Jesus\' reply: "I am the way."' },
      { title: 'Doubt & Declaration', description: 'Thomas refused to believe the resurrection without proof. When Jesus appeared, Thomas declared "My Lord and my God!" — the highest confession in the Gospels.' },
      { title: 'Mission to India', description: 'Tradition says Thomas traveled to India, established churches, and was martyred near Madras — a legacy preserved by the Mar Thoma Christians.' }
    ],
    lessons: [
      'Honest doubt brought to Jesus leads to deeper faith — Thomas\' skepticism led to the greatest confession in the Gospels.',
      'Jesus meets us in our doubts, not to condemn but to reveal himself more fully.',
      'Blessed are those who believe without seeing — but Jesus is patient with those who need more.'
    ],
    keyScriptures: [
      { reference: 'John 20:28', text: 'Thomas said to him, "My Lord and my God!"' },
      { reference: 'John 20:29', text: 'Then Jesus told him, "Because you have seen me, you have believed; blessed are those who have not seen and yet have believed."' }
    ],
    timeline: [
      { date: 'c. AD 5', event: 'Born in Galilee; called Thomas (or Didymus), meaning "twin"' },
      { date: 'c. AD 27', event: 'Called as one of the twelve apostles of Jesus' },
      { date: 'c. AD 30', event: 'Doubts the resurrection; encounters the risen Christ; confesses "My Lord and my God!"' },
      { date: 'c. AD 72', event: 'Tradition says he was martyred in Mylapore, India' }
    ],
    relatedPeople: ['jesus', 'peter', 'john-apostle', 'matthew', 'philip-apostle']
  },
  {
    id: 'james-zebedee',
    name: 'James, Son of Zebedee',
    subtitle: 'First Apostle Martyred',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 3–44',
    imageQuery: 'biblical apostle James son of Zebedee fisherman bold warrior first martyr sword classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=bold%20young%20apostle%20with%20intense%20dark%20eyes%20wearing%20red%20and%20earth%20toned%20robes%20bold%20confident%20expression%20dramatic%20warm%20light%20simple%20stone%20background%20classical%20painting%20style%20ancient%20biblical%20appearance%20strong%20bearing&width=400&height=600&seq=jamesz01&orientation=portrait',
    bio: `James, son of Zebedee and brother of John, was a Galilean fisherman called alongside his brother to follow Jesus. Together they were nicknamed "Boanerges" — Sons of Thunder — for their fiery temperament. James was part of Jesus' inner circle of three, present at the Transfiguration, the raising of Jairus' daughter, and the agony in Gethsemane.

James holds the distinction of being the first apostle to be martyred. Around AD 44, King Herod Agrippa I had James executed by sword in Jerusalem, as recorded in Acts 12:2. His death marked the beginning of serious state persecution of the church. Tradition in Spain holds that James had preached there before his death, and the Cathedral of Santiago de Compostela claims to house his remains.`,
    journeyCards: [
      { title: 'Sons of Thunder', description: 'Jesus called James and John from their father\'s boat and nicknamed them "Boanerges" — Sons of Thunder — for their bold temperaments.' },
      { title: 'The Inner Three', description: 'James was chosen alongside Peter and John for Jesus\' most intimate moments: the Transfiguration, Jairus\' daughter, and Gethsemane.' },
      { title: 'A Bold Request', description: 'James and John asked Jesus to sit at his right and left in glory. Jesus replied, "Can you drink the cup I drink?" They said, "We can."' },
      { title: 'First Apostle Martyred', description: 'King Herod Agrippa I had James killed with the sword around AD 44 — the first of the twelve apostles to be martyred.' }
    ],
    lessons: [
      'Boldness for Christ may lead to being the first to suffer — James drank the cup Jesus foretold.',
      'Ambition must be transformed by servanthood — the request for glory became a path to martyrdom.',
      'Being in the inner circle with Jesus does not exempt you from suffering — it prepares you for it.'
    ],
    keyScriptures: [
      { reference: 'Acts 12:2', text: 'He had James, the brother of John, put to death with the sword.' },
      { reference: 'Mark 10:38-39', text: '"You don\'t know what you are asking," Jesus said. "Can you drink the cup I drink?" "We can," they answered.' }
    ],
    timeline: [
      { date: 'c. AD 3', event: 'Born in Galilee; son of Zebedee and Salome, brother of John' },
      { date: 'c. AD 27', event: 'Called by Jesus alongside John; nicknamed "Son of Thunder"' },
      { date: 'c. AD 27-30', event: 'Part of Jesus\' inner circle; witnesses key events of the ministry' },
      { date: 'c. AD 44', event: 'Executed by sword under Herod Agrippa I — first apostle martyred' }
    ],
    relatedPeople: ['john-apostle', 'peter', 'jesus', 'andrew', 'matthew']
  },
  {
    id: 'philip-apostle',
    name: 'Philip the Apostle',
    subtitle: 'The Practical Questioner',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 5–80',
    imageQuery: 'biblical apostle Philip thoughtful face Greek influence practical disciple bread loaves classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=thoughtful%20apostle%20with%20calm%20open%20face%20wearing%20simple%20robes%20holding%20a%20cross%20staff%20warm%20afternoon%20light%20simple%20background%20inquiring%20gentle%20expression%20classical%20painting%20style%20ancient%20biblical%20appearance%20welcoming%20demeanor&width=400&height=600&seq=phil01&orientation=portrait',
    bio: `Philip, from Bethsaida (the same town as Andrew and Peter), was one of the first disciples called by Jesus. After his own calling, Philip immediately found Nathanael (Bartholomew) and said, "We have found the one Moses wrote about" — showing an evangelistic instinct from the start.

Philip is characterized in the Gospels as practical and calculating. When Jesus asked him about feeding the 5,000, Philip replied, "It would take more than half a year's wages to buy enough bread!" At the Last Supper, he asked, "Lord, show us the Father and that will be enough," prompting Jesus' profound response: "Anyone who has seen me has seen the Father." Tradition says Philip preached in Greece and Asia Minor and was martyred in Hierapolis.`,
    journeyCards: [
      { title: 'Called by Jesus', description: 'Jesus found Philip in Bethsaida and said simply, "Follow me." Philip became one of the first five disciples.' },
      { title: 'Bringing Nathanael', description: 'Philip immediately found Nathanael and told him, "We have found the one Moses wrote about — Jesus of Nazareth."' },
      { title: 'The Practical Test', description: 'When faced with feeding 5,000, Philip calculated the impossibility. Jesus used the moment to teach about divine provision.' },
      { title: 'Show Us the Father', description: 'At the Last Supper, Philip asked to see the Father. Jesus replied, "Anyone who has seen me has seen the Father."' }
    ],
    lessons: [
      'Evangelism starts with sharing what you\'ve found — Philip told Nathanael, "Come and see."',
      'Human calculations cannot limit God\'s provision — Philip\'s math was correct but his faith was too small.',
      'Honest questions draw out Jesus\' deepest revelations — "Show us the Father" gave us John 14:9.'
    ],
    keyScriptures: [
      { reference: 'John 1:45', text: 'Philip found Nathanael and told him, "We have found the one Moses wrote about in the Law — Jesus of Nazareth, the son of Joseph."' },
      { reference: 'John 14:9', text: 'Jesus answered: "Don\'t you know me, Philip, even after I have been among you such a long time? Anyone who has seen me has seen the Father."' }
    ],
    timeline: [
      { date: 'c. AD 5', event: 'Born in Bethsaida, Galilee' },
      { date: 'c. AD 27', event: 'Called by Jesus; brings Nathanael to meet Jesus' },
      { date: 'c. AD 27-30', event: 'Serves as one of the twelve apostles throughout Jesus\' ministry' },
      { date: 'c. AD 80', event: 'Tradition says he was martyred in Hierapolis (modern Turkey)' }
    ],
    relatedPeople: ['bartholomew', 'andrew', 'peter', 'jesus', 'thomas']
  },
  {
    id: 'bartholomew',
    name: 'Bartholomew',
    subtitle: 'The Israelite Without Guile',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 5–71',
    imageQuery: 'biblical apostle Bartholomew Nathanael sincere honest face fig tree encounter with Jesus classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=honest%20open-faced%20apostle%20under%20a%20fig%20tree%20serene%20expression%20wearing%20simple%20earth%20toned%20robes%20gentle%20thoughtful%20eyes%20warm%20dappled%20light%20through%20leaves%20classical%20painting%20style%20ancient%20biblical%20appearance%20sincere%20and%20direct%20bearing&width=400&height=600&seq=bart01&orientation=portrait',
    bio: `Bartholomew is generally identified with Nathanael, the man Philip brought to Jesus. When told about Jesus of Nazareth, Nathanael skeptically replied, "Can anything good come from Nazareth?" But upon meeting Jesus, he was astonished when Jesus said, "I saw you while you were still under the fig tree." Nathanael declared, "Rabbi, you are the Son of God; you are the king of Israel."

Jesus praised Nathanael as "an Israelite in whom there is no deceit" — a man of transparent honesty and genuine character. After Pentecost, tradition says Bartholomew preached in India, Armenia, Ethiopia, and Mesopotamia. Armenian tradition holds that he was martyred by being flayed alive and then beheaded in Albanopolis (modern-day Azerbaijan).`,
    journeyCards: [
      { title: 'Under the Fig Tree', description: 'Before Philip brought him to Jesus, Bartholomew (Nathanael) was sitting under a fig tree — and Jesus saw him even before they met.' },
      { title: 'An Honest Skeptic', description: '"Can anything good come from Nazareth?" Nathanael asked. But his skepticism gave way to faith when Jesus revealed supernatural knowledge.' },
      { title: 'A Declaration of Faith', description: 'Nathanael declared, "Rabbi, you are the Son of God; you are the king of Israel!" — one of the earliest confessions of Christ\'s identity.' },
      { title: 'Missionary & Martyr', description: 'Tradition says Bartholomew took the Gospel to India and Armenia and was martyred by being flayed alive.' }
    ],
    lessons: [
      'Honest skepticism brought to Jesus leads to genuine faith — Nathanael\'s "Can anything good...?" became "You are the Son of God."',
      'Jesus values sincerity and transparency — "an Israelite in whom there is no deceit."',
      'God sees us before we see him — Jesus knew Nathanael under the fig tree before they ever met.'
    ],
    keyScriptures: [
      { reference: 'John 1:47', text: 'When Jesus saw Nathanael approaching, he said of him, "Here truly is an Israelite in whom there is no deceit."' },
      { reference: 'John 1:49', text: 'Then Nathanael declared, "Rabbi, you are the Son of God; you are the king of Israel."' }
    ],
    timeline: [
      { date: 'c. AD 5', event: 'Born in Cana of Galilee' },
      { date: 'c. AD 27', event: 'Brought to Jesus by Philip; confesses Jesus as Son of God' },
      { date: 'c. AD 30-60', event: 'Preaches the Gospel in India, Armenia, and surrounding regions' },
      { date: 'c. AD 71', event: 'Tradition says he was martyred in Armenia or Azerbaijan' }
    ],
    relatedPeople: ['philip-apostle', 'jesus', 'thomas', 'andrew', 'peter']
  },
  {
    id: 'judas-iscariot',
    name: 'Judas Iscariot',
    subtitle: 'The Betrayer',
    testament: 'new',
    category: 'Antagonist',
    era: 'c. AD 3–30',
    imageQuery: 'biblical Judas Iscariot dark shadowy face silver coins bag of money treacherous kiss betrayal classical sacred art dramatic chiaroscuro portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=troubled%20dark-eyed%20man%20holding%20a%20small%20coin%20purse%20complex%20conflicted%20expression%20shadows%20and%20dim%20light%20ancient%20robes%20simple%20dark%20background%20sorrow%20and%20burden%20in%20eyes%20classical%20painting%20style%20tragic%20expression%20biblical%20appearance&width=400&height=600&seq=judas01&orientation=portrait',
    bio: `Judas Iscariot served as treasurer of the twelve apostles — a position of trust that he exploited by stealing from the communal money bag. Despite witnessing three years of Jesus' miracles, teachings, and love, Judas negotiated with the chief priests to betray Jesus for thirty pieces of silver, the price of a slave.

In the Garden of Gethsemane, Judas identified Jesus to the arresting mob with a kiss — the ultimate perversion of a sign of affection. Overcome with remorse (though not repentance) when he saw Jesus condemned, Judas returned the silver to the priests and hanged himself. His story stands as the most tragic warning in the New Testament: proximity to Jesus is not the same as surrender to Jesus.`,
    journeyCards: [
      { title: 'Chosen as an Apostle', description: 'Judas was selected by Jesus as one of the twelve apostles and entrusted with managing the group\'s finances.' },
      { title: 'The Thief Among Them', description: 'John reveals that Judas regularly pilfered from the money bag, masking his greed with concern for the poor.' },
      { title: 'The Betrayal', description: 'For thirty pieces of silver, Judas agreed to betray Jesus, identifying him in Gethsemane with a kiss: "The one I kiss is the man; arrest him."' },
      { title: 'Remorse & Death', description: 'Seeing Jesus condemned, Judas was seized with remorse. He threw the silver back at the priests and went out and hanged himself.' }
    ],
    lessons: [
      'Proximity to Jesus without genuine faith leads to destruction — Judas walked with Christ for three years and still betrayed him.',
      'Unchecked greed corrupts from the inside out — small thefts from the money bag led to the ultimate betrayal.',
      'Remorse and repentance are not the same — Judas felt guilt but never sought forgiveness.'
    ],
    keyScriptures: [
      { reference: 'Matthew 26:15', text: '"What are you willing to give me if I deliver him over to you?" So they counted out for him thirty pieces of silver.' },
      { reference: 'Matthew 26:49-50', text: 'Going at once to Jesus, Judas said, "Greetings, Rabbi!" and kissed him. Jesus replied, "Do what you came for, friend."' }
    ],
    timeline: [
      { date: 'c. AD 3', event: 'Born in Kerioth (possibly in Judea — the only non-Galilean apostle)' },
      { date: 'c. AD 27', event: 'Called as one of the twelve; appointed as treasurer' },
      { date: 'c. AD 30', event: 'Agrees to betray Jesus for thirty pieces of silver' },
      { date: 'c. AD 30', event: 'Betrays Jesus with a kiss in Gethsemane; hangs himself in despair' }
    ],
    relatedPeople: ['jesus', 'peter', 'john-apostle', 'matthias', 'mary-magdalene']
  },
  {
    id: 'simon-zealot',
    name: 'Simon the Zealot',
    subtitle: 'The Revolutionary Disciple',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 5–65',
    imageQuery: 'biblical apostle Simon the Zealot intense determined face former revolutionary freedom fighter disciple classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=fierce%20passionate%20man%20with%20determined%20eyes%20wearing%20simple%20robes%20carrying%20a%20short%20sword%20at%20belt%20intense%20loyal%20expression%20warm%20light%20ancient%20biblical%20appearance%20classical%20painting%20style%20strong%20revolutionary%20bearing%20now%20at%20peace&width=400&height=600&seq=simonz01&orientation=portrait',
    bio: `Simon the Zealot is one of the more mysterious apostles. His designation "Zealot" indicates he was likely a member of (or sympathetic to) the Zealots — a Jewish political movement that sought to overthrow Roman occupation by force. That Jesus called a violent revolutionary to walk alongside Matthew the tax collector (a Roman collaborator) demonstrates the radical reconciling power of Christ.

Little is recorded of Simon's specific actions in the Gospels, but his presence among the twelve speaks volumes. Tradition says he preached in Persia and was martyred there, possibly by being sawn in half. His life represents the transformation of political passion into kingdom purpose.`,
    journeyCards: [
      { title: 'The Zealot', description: 'Before following Jesus, Simon was associated with the Zealots — Jewish revolutionaries who sought to overthrow Roman rule by force.' },
      { title: 'Called to a Different Kingdom', description: 'Jesus called Simon to follow him, transforming a political revolutionary into a disciple of the Prince of Peace.' },
      { title: 'Among Unlikely Brothers', description: 'Simon the anti-Roman Zealot walked alongside Matthew the pro-Roman tax collector — a living demonstration of Christ\'s reconciling power.' },
      { title: 'Missionary & Martyr', description: 'Tradition says Simon preached in Persia, Egypt, and other lands, and was martyred for his faith.' }
    ],
    lessons: [
      'Jesus transforms even the most radical ideologies into kingdom purpose.',
      'The community of Christ brings together people who would otherwise be enemies.',
      'Political passion must be surrendered to the lordship of Christ, not the other way around.'
    ],
    keyScriptures: [
      { reference: 'Luke 6:15', text: 'Matthew, Thomas, James son of Alphaeus, Simon who was called the Zealot.' },
      { reference: 'Acts 1:13', text: 'They went upstairs to the room where they were staying... Simon the Zealot and Judas son of James.' }
    ],
    timeline: [
      { date: 'c. AD 5', event: 'Born in Galilee or Judea; becomes associated with the Zealot movement' },
      { date: 'c. AD 27', event: 'Called by Jesus as one of the twelve apostles' },
      { date: 'c. AD 30', event: 'Witnesses Jesus\' ministry, death, resurrection; present at Pentecost' },
      { date: 'c. AD 65', event: 'Tradition says martyred in Persia' }
    ],
    relatedPeople: ['jesus', 'matthew', 'peter', 'judas-iscariot', 'thaddaeus']
  },
  {
    id: 'james-alphaeus',
    name: 'James, Son of Alphaeus',
    subtitle: 'James the Less',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 5–62',
    imageQuery: 'biblical apostle James son of Alphaeus humble lesser-known faithful quiet disciple classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=humble%20middle%20aged%20apostle%20with%20kind%20unremarkable%20face%20wearing%20plain%20brown%20robes%20simple%20devoted%20expression%20warm%20soft%20light%20simple%20background%20steady%20faithful%20bearing%20classical%20painting%20style%20ancient%20biblical%20appearance&width=400&height=600&seq=jamesa01&orientation=portrait',
    bio: `James, son of Alphaeus, is often called "James the Less" (or "James the Younger") to distinguish him from James, son of Zebedee. He is one of the more obscure apostles, mentioned in all four apostolic lists but with no recorded individual words or actions in the Gospels.

Despite his obscurity, James was chosen by Jesus, witnessed the entire ministry, and was present in the upper room at Pentecost. Some scholars identify him with "James the brother of the Lord" who led the Jerusalem church, though this is debated. Tradition says he preached in Egypt and Palestine and was martyred by stoning or crucifixion. His quiet faithfulness reminds us that most of God's work is done by people whose names history does not remember.`,
    journeyCards: [
      { title: 'Chosen Among the Twelve', description: 'Despite being relatively unknown, James son of Alphaeus was personally chosen by Jesus as one of the twelve apostles.' },
      { title: 'Faithful in Obscurity', description: 'James walked with Jesus for three years without any recorded individual words or dramatic moments — simply faithful.' },
      { title: 'Witness to Everything', description: 'He saw the miracles, heard the parables, witnessed the crucifixion and resurrection — a complete eyewitness of the Gospel.' },
      { title: 'Serving the Early Church', description: 'Present in the upper room at Pentecost, James continued to serve the church faithfully in its earliest days.' }
    ],
    lessons: [
      'Not every faithful servant gets their name in lights — James the Less served just as truly as Peter or John.',
      'Being "less" in human estimation does not make you less in God\'s kingdom.',
      'Quiet, consistent presence is itself a form of ministry.'
    ],
    keyScriptures: [
      { reference: 'Mark 3:18', text: 'Andrew, Philip, Bartholomew, Matthew, Thomas, James son of Alphaeus, Thaddaeus, Simon the Zealot.' },
      { reference: 'Acts 1:13', text: 'When they arrived, they went upstairs to the room where they were staying... James son of Alphaeus.' }
    ],
    timeline: [
      { date: 'c. AD 5', event: 'Born; son of Alphaeus (and possibly Mary, mentioned in Mark 15:40)' },
      { date: 'c. AD 27', event: 'Called as one of the twelve apostles by Jesus' },
      { date: 'c. AD 30', event: 'Witnesses the death and resurrection of Jesus; present at Pentecost' },
      { date: 'c. AD 62', event: 'Tradition says he was martyred — accounts vary between stoning and crucifixion' }
    ],
    relatedPeople: ['jesus', 'matthew', 'thaddaeus', 'simon-zealot', 'peter']
  },
  {
    id: 'thaddaeus',
    name: 'Thaddaeus',
    subtitle: 'Judas, Not Iscariot',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 5–65',
    imageQuery: 'biblical apostle Thaddaeus Judas son of James humble sincere devoted disciple classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=gentle%20earnest%20apostle%20wearing%20simple%20cream%20and%20brown%20robes%20curious%20gentle%20eyes%20holding%20a%20small%20wooden%20cross%20warm%20light%20simple%20background%20humble%20asking%20expression%20classical%20painting%20style%20ancient%20biblical%20appearance&width=400&height=600&seq=thadd01&orientation=portrait',
    bio: `Thaddaeus (also known as Judas son of James, or Lebbaeus) is another of the lesser-known apostles. He is carefully distinguished in the Gospels from Judas Iscariot — John records him asking at the Last Supper, "Lord, how is it that you will manifest yourself to us and not to the world?" This single question reveals a thoughtful disciple trying to understand the nature of Christ's kingdom.

Tradition associates Thaddaeus with missionary work in Mesopotamia, Syria, and Armenia. Some traditions connect him with the evangelization of Edessa. He is believed to have been martyred, possibly in Beirut or Persia. Like James son of Alphaeus, his legacy is one of faithful service without earthly fame.`,
    journeyCards: [
      { title: 'Called as a Disciple', description: 'Thaddaeus was chosen by Jesus as one of the twelve, despite being relatively unknown in the Gospel narratives.' },
      { title: 'The Thoughtful Question', description: 'At the Last Supper, Thaddaeus asked Jesus, "How is it that you will show yourself to us and not to the world?" — revealing a desire to understand.' },
      { title: 'Not That Judas', description: 'Carefully distinguished from Judas Iscariot, Thaddaeus bore a name that later became infamous through no fault of his own.' },
      { title: 'Mission to the East', description: 'Tradition says Thaddaeus preached in Mesopotamia, Syria, and Armenia, bringing the Gospel to regions beyond the Roman core.' }
    ],
    lessons: [
      'It is good to ask honest questions — Thaddaeus\' question at the Last Supper drew out important teaching from Jesus.',
      'Your identity is not determined by sharing a name with someone infamous.',
      'Faithfulness in unrecorded service is still seen by God.'
    ],
    keyScriptures: [
      { reference: 'John 14:22', text: 'Then Judas (not Judas Iscariot) said, "But, Lord, why do you intend to show yourself to us and not to the world?"' },
      { reference: 'Luke 6:16', text: 'Judas son of James, and Judas Iscariot, who became a traitor.' }
    ],
    timeline: [
      { date: 'c. AD 5', event: 'Born; also known as Judas son of James or Lebbaeus' },
      { date: 'c. AD 27', event: 'Called by Jesus as one of the twelve apostles' },
      { date: 'c. AD 30', event: 'Asks his question at the Last Supper; witnesses the resurrection' },
      { date: 'c. AD 65', event: 'Tradition says he was martyred in Beirut or Persia' }
    ],
    relatedPeople: ['jesus', 'simon-zealot', 'james-alphaeus', 'peter', 'judas-iscariot']
  },
  {
    id: 'samuel',
    name: 'Samuel',
    subtitle: 'The Last Judge, First Kingmaker',
    testament: 'old',
    category: 'Prophet',
    era: 'c. 1100–1020 BC',
    imageQuery: 'biblical prophet Samuel anointing oil horn elderly judge priestly robes Israel classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=elderly%20dignified%20Hebrew%20priest%20and%20prophet%20with%20long%20white%20beard%20wearing%20priestly%20linen%20robes%20holding%20a%20small%20horn%20of%20oil%20wise%20authoritative%20expression%20ancient%20tabernacle%20setting%20warm%20lamp%20oil%20light%20classical%20painting%20style&width=400&height=600&seq=samu01&orientation=portrait',
    bio: `Samuel was the last of Israel's judges and the prophet who ushered in the age of kings. His mother Hannah, long barren, dedicated him to the LORD before his birth, and as a boy he served under the priest Eli at the tabernacle in Shiloh. There God called young Samuel by name in the night — one of the most beloved stories in the Old Testament.

Samuel grew to become the spiritual leader of Israel, defeating the Philistines through prayer at Mizpah, establishing a circuit court throughout the land, and reluctantly anointing both Saul and David as kings at God's command. His farewell speech in 1 Samuel 12 challenged Israel to follow the LORD wholeheartedly. He remained faithful to the end, a prophet whose word "did not fall to the ground."`,
    journeyCards: [
      { title: 'Hannah\'s Prayer', description: 'Samuel\'s mother Hannah prayed desperately for a child and vowed to dedicate him to the LORD. God answered, and Samuel was born.' },
      { title: 'God Calls in the Night', description: 'As a boy serving in the tabernacle, Samuel heard God calling his name in the night: "Speak, LORD, for your servant is listening."' },
      { title: 'Judge of All Israel', description: 'Samuel served as prophet, priest, and judge, leading Israel in a circuit throughout the land and calling the nation back to God.' },
      { title: 'Anointing Two Kings', description: 'At God\'s command, Samuel anointed Saul as Israel\'s first king, and later secretly anointed the shepherd boy David to replace him.' }
    ],
    lessons: [
      'God calls people from their earliest years — Samuel heard God\'s voice as a child and served him his entire life.',
      'Faithful parenting has generational impact — Hannah\'s dedication of Samuel shaped Israel\'s history.',
      'Obedience to God\'s word matters more than human preferences — Samuel anointed David despite appearances.'
    ],
    keyScriptures: [
      { reference: '1 Samuel 3:10', text: 'The LORD came and stood there, calling as at the other times, "Samuel! Samuel!" Then Samuel said, "Speak, for your servant is listening."' },
      { reference: '1 Samuel 15:22', text: 'But Samuel replied: "Does the LORD delight in burnt offerings and sacrifices as much as in obeying the LORD? To obey is better than sacrifice."' }
    ],
    timeline: [
      { date: 'c. 1100 BC', event: 'Born in answer to Hannah\'s prayer; dedicated to service at the tabernacle in Shiloh' },
      { date: 'c. 1080 BC', event: 'God calls Samuel in the night; begins his prophetic ministry' },
      { date: 'c. 1050 BC', event: 'Anoints Saul as Israel\'s first king at the people\'s demand' },
      { date: 'c. 1025 BC', event: 'Anoints David as Saul\'s replacement; dies and is mourned by all Israel' }
    ],
    relatedPeople: ['david', 'saul', 'hannah', 'elijah', 'moses']
  },
  {
    id: 'elisha',
    name: 'Elisha',
    subtitle: 'The Prophet of Double Portion',
    testament: 'old',
    category: 'Prophet',
    era: 'c. 880–800 BC',
    imageQuery: 'biblical prophet Elisha bald head mantle cloak healing miracles servant of Elijah classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=bald%20elderly%20prophet%20with%20calm%20wise%20face%20wearing%20simple%20prophet%5Cs%20cloak%20holding%20a%20wooden%20staff%20confident%20gentle%20expression%20ancient%20Israelite%20landscape%20rocky%20hills%20background%20warm%20afternoon%20light%20classical%20painting%20style%20biblical%20appearance&width=400&height=600&seq=elish01&orientation=portrait',
    bio: `Elisha was the prophetic successor of Elijah, receiving a "double portion" of his master's spirit when Elijah was taken to heaven in a chariot of fire. He picked up Elijah's fallen mantle, struck the Jordan River, and the waters parted — confirming his calling.

Elisha performed more recorded miracles than any other Old Testament prophet: purifying poisoned water, multiplying oil for a widow, raising the Shunammite's dead son, healing Naaman the Syrian general of leprosy, and making an axe head float. His ministry spanned the reigns of multiple Israelite kings and demonstrated God's compassion for ordinary people in everyday need. Even after death, a corpse thrown into Elisha's tomb came back to life upon touching his bones.`,
    journeyCards: [
      { title: 'Called from the Plow', description: 'Elijah cast his mantle on Elisha while he was plowing with twelve yoke of oxen. Elisha left everything to follow.' },
      { title: 'Double Portion', description: 'When Elijah was taken to heaven, Elisha asked for a double portion of his spirit — and received it, confirmed by parting the Jordan.' },
      { title: 'Miracles of Compassion', description: 'Elisha multiplied oil for a widow, raised a dead boy, healed Naaman of leprosy, and fed 100 men with twenty loaves.' },
      { title: 'Legacy Beyond Death', description: 'Even after Elisha died, a dead man thrown into his tomb was revived upon touching his bones — a final miracle.' }
    ],
    lessons: [
      'Mentorship and succession planning matter — Elisha\'s power came through faithful apprenticeship under Elijah.',
      'God\'s miracles often address ordinary, everyday needs — a widow\'s debt, a mother\'s grief, a soldier\'s disease.',
      'Asking boldly from God is not presumption but faith — Elisha asked for a double portion and received it.'
    ],
    keyScriptures: [
      { reference: '2 Kings 2:9', text: 'Elisha replied, "Let me inherit a double portion of your spirit."' },
      { reference: '2 Kings 2:14', text: 'He took the cloak that had fallen from Elijah and struck the water with it. "Where now is the LORD, the God of Elijah?" he asked. When he struck the water, it divided to the right and to the left.' }
    ],
    timeline: [
      { date: 'c. 880 BC', event: 'Called by Elijah while plowing; leaves his family to serve as Elijah\'s attendant' },
      { date: 'c. 850 BC', event: 'Receives Elijah\'s mantle and a double portion of his spirit' },
      { date: 'c. 850-800 BC', event: 'Performs numerous miracles; advises kings of Israel' },
      { date: 'c. 800 BC', event: 'Dies; even his bones have resurrection power' }
    ],
    relatedPeople: ['elijah', 'samuel', 'moses', 'isaiah', 'jeremiah']
  },
  {
    id: 'isaiah',
    name: 'Isaiah',
    subtitle: 'The Messianic Prophet',
    testament: 'old',
    category: 'Prophet',
    era: 'c. 740–680 BC',
    imageQuery: 'biblical prophet Isaiah majestic scroll vision of God throne seraphim holy temple classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=majestic%20elderly%20prophet%20with%20long%20white%20beard%20wearing%20prophetic%20robes%20holding%20a%20large%20scroll%20dramatic%20light%20from%20above%20as%20if%20divine%20glory%20intense%20reverent%20expression%20classical%20painting%20style%20ancient%20biblical%20appearance%20Jerusalem%20Temple%20background&width=400&height=600&seq=isai01&orientation=portrait',
    bio: `Isaiah is often called the "prince of prophets" and the most quoted Old Testament prophet in the New Testament. His ministry spanned the reigns of four kings of Judah, and he received his prophetic commission through a dramatic vision of God enthroned in the temple, with seraphim crying "Holy, holy, holy!" Isaiah responded, "Here am I. Send me!"

Isaiah's prophecies range from immediate political counsel to sweeping messianic predictions. His "Servant Songs" (Isaiah 42, 49, 50, 52-53) describe the suffering Messiah with such precision that Isaiah 53 reads like an eyewitness account of Jesus' crucifixion, written 700 years before the event. Tradition says Isaiah was martyred under King Manasseh by being sawn in two.`,
    journeyCards: [
      { title: 'The Throne Room Vision', description: 'Isaiah saw the Lord seated on a throne, high and exalted, with seraphim calling "Holy, holy, holy!" His lips were cleansed with a burning coal.' },
      { title: 'Prophet to Kings', description: 'Isaiah counseled Kings Ahaz and Hezekiah through Assyrian threats, calling Judah to trust God rather than foreign alliances.' },
      { title: 'The Suffering Servant', description: 'Isaiah prophesied a Messiah who would be "pierced for our transgressions" and by whose wounds we would be healed — fulfilled in Jesus.' },
      { title: 'Comfort My People', description: 'Isaiah also prophesied restoration and hope: "Comfort, comfort my people... Every valley shall be raised up, every mountain made low."' }
    ],
    lessons: [
      'A true encounter with God\'s holiness produces both humility ("Woe to me!") and availability ("Send me!").',
      'God reveals his plans centuries in advance — Isaiah\'s messianic prophecies prove God\'s sovereignty over history.',
      'Speaking truth to power is costly but necessary — Isaiah confronted kings and paid with his life.'
    ],
    keyScriptures: [
      { reference: 'Isaiah 6:8', text: 'Then I heard the voice of the Lord saying, "Whom shall I send? And who will go for us?" And I said, "Here am I. Send me!"' },
      { reference: 'Isaiah 53:5', text: 'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.' }
    ],
    timeline: [
      { date: 'c. 740 BC', event: 'Receives his prophetic calling in a vision of God\'s throne room' },
      { date: 'c. 735 BC', event: 'Prophesies the virgin birth (Immanuel) to King Ahaz during the Syro-Ephraimite war' },
      { date: 'c. 701 BC', event: 'Counsels King Hezekiah during Sennacherib\'s siege of Jerusalem' },
      { date: 'c. 680 BC', event: 'Tradition says he was martyred under King Manasseh by being sawn in two' }
    ],
    relatedPeople: ['jeremiah', 'hezekiah', 'elijah', 'moses', 'jesus']
  },
  {
    id: 'jeremiah',
    name: 'Jeremiah',
    subtitle: 'The Weeping Prophet',
    testament: 'old',
    category: 'Prophet',
    era: 'c. 650–570 BC',
    imageQuery: 'biblical prophet Jeremiah weeping tears sorrowful face scroll burning Jerusalem destruction classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=sorrowful%20prophet%20with%20tearful%20eyes%20and%20tired%20face%20wearing%20rough%20simple%20dark%20robes%20sitting%20by%20ancient%20ruins%20of%20a%20city%20grief%20and%20grief%20filled%20expression%20warm%20yet%20mournful%20light%20classical%20painting%20style%20ancient%20biblical%20appearance%20stone%20rubble%20background&width=400&height=600&seq=jere01&orientation=portrait',
    bio: `Jeremiah was called as a prophet while still a youth, protesting "I am only a child!" God replied by touching his mouth: "I have put my words in your mouth." His ministry spanned forty tumultuous years leading up to and through the destruction of Jerusalem by Babylon in 586 BC — the greatest catastrophe in Israel's history.

Jeremiah's message was deeply unpopular: repent or face destruction. He was beaten, imprisoned, thrown into a cistern, and rejected by kings, priests, and people alike. Yet he faithfully delivered God's word through tears, earning the title "the weeping prophet." Amid the doom, Jeremiah also prophesied the New Covenant — "I will put my law in their minds and write it on their hearts" — a promise Christians see fulfilled in Christ.`,
    journeyCards: [
      { title: 'Called as a Youth', description: 'God told young Jeremiah, "Before I formed you in the womb I knew you; before you were born I set you apart as a prophet to the nations."' },
      { title: 'The Unpopular Message', description: 'For 40 years Jeremiah warned Judah to repent or face Babylonian conquest. He was beaten, imprisoned, and thrown into a muddy cistern.' },
      { title: 'Jerusalem Falls', description: 'Jeremiah witnessed the destruction of Jerusalem and the temple by Nebuchadnezzar in 586 BC — the very disaster he had prophesied.' },
      { title: 'The New Covenant Promise', description: 'Amid the destruction, Jeremiah prophesied a New Covenant where God would write his law on human hearts — fulfilled in Christ.' }
    ],
    lessons: [
      'Faithfulness to God\'s calling does not guarantee popularity or comfort — Jeremiah suffered terribly for speaking truth.',
      'Compassion and confrontation can coexist — Jeremiah wept for the very people who rejected him.',
      'God\'s plans include both judgment and restoration — even in Jeremiah\'s darkest prophecies, hope shines through.'
    ],
    keyScriptures: [
      { reference: 'Jeremiah 1:5', text: 'Before I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.' },
      { reference: 'Jeremiah 31:33', text: '"I will put my law in their minds and write it on their hearts. I will be their God, and they will be my people," declares the LORD.' }
    ],
    timeline: [
      { date: 'c. 650 BC', event: 'Born in Anathoth near Jerusalem; son of the priest Hilkiah' },
      { date: 'c. 627 BC', event: 'Called as a prophet during King Josiah\'s reign' },
      { date: '586 BC', event: 'Witnesses the fall of Jerusalem and destruction of the temple by Babylon' },
      { date: 'c. 570 BC', event: 'Taken to Egypt against his will; tradition says he died there' }
    ],
    relatedPeople: ['isaiah', 'daniel', 'josiah', 'hezekiah', 'ezekiel']
  },
  {
    id: 'jonah',
    name: 'Jonah',
    subtitle: 'The Reluctant Prophet',
    testament: 'old',
    category: 'Prophet',
    era: 'c. 780–750 BC',
    imageQuery: 'biblical prophet Jonah inside great fish whale ocean depths stormy sea Nineveh classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=sulking%20prophet%20sitting%20under%20a%20large%20leafy%20vine%20plant%20pouting%20expression%20wearing%20rough%20robes%20rocky%20hilltop%20overlooking%20ancient%20walled%20city%20warm%20afternoon%20sun%20classical%20painting%20style%20ancient%20biblical%20appearance%20reluctant%20stubborn%20yet%20lovable%20expression&width=400&height=600&seq=jona01&orientation=portrait',
    bio: `Jonah is the most reluctant prophet in the Bible. When God told him to preach repentance to Nineveh — the capital of Assyria, Israel's hated enemy — Jonah boarded a ship heading in the opposite direction. A violent storm threatened the ship, and Jonah confessed he was fleeing from God. Thrown overboard, he was swallowed by a great fish and spent three days and nights in its belly before being vomited onto shore.

After his deliverance, Jonah obeyed and preached to Nineveh. The entire city repented — perhaps the greatest mass revival in the Bible — but Jonah was furious rather than grateful, because he wanted God to destroy his enemies. Through a withering vine and a scorching wind, God taught Jonah that divine compassion extends even to those we consider undeserving. Jesus later cited Jonah's three days in the fish as a sign of his own burial and resurrection.`,
    journeyCards: [
      { title: 'Running from God', description: 'Commanded to preach to Nineveh, Jonah fled in the opposite direction on a ship to Tarshish.' },
      { title: 'In the Belly of the Fish', description: 'After being thrown overboard in a storm, Jonah was swallowed by a great fish and spent three days praying from its belly.' },
      { title: 'Nineveh Repents', description: 'Jonah preached to Nineveh and the entire city — from the king to the cattle — repented in sackcloth and ashes. God relented from judgment.' },
      { title: 'The Angry Prophet', description: 'Furious that God showed mercy to his enemies, Jonah sulked outside the city until God taught him about compassion through a vine.' }
    ],
    lessons: [
      'You cannot outrun God\'s purpose for your life — Jonah tried and ended up in a fish.',
      'God\'s mercy extends to those we consider enemies — Nineveh was Israel\'s oppressor, yet God loved them.',
      'Obedience given grudgingly still accomplishes God\'s purposes, but joy comes from willing surrender.'
    ],
    keyScriptures: [
      { reference: 'Jonah 2:2', text: 'From inside the fish Jonah prayed to the LORD his God: "In my distress I called to the LORD, and he answered me."' },
      { reference: 'Jonah 4:11', text: 'And should I not have concern for the great city of Nineveh, in which there are more than a hundred and twenty thousand people?' }
    ],
    timeline: [
      { date: 'c. 780 BC', event: 'Active as a prophet during the reign of Jeroboam II of Israel' },
      { date: 'c. 780 BC', event: 'Flees from God\'s command; swallowed by the great fish' },
      { date: 'c. 780 BC', event: 'Preaches in Nineveh; the city repents' },
      { date: 'c. 750 BC', event: 'His story is preserved as a lasting lesson about God\'s universal compassion' }
    ],
    relatedPeople: ['elijah', 'elisha', 'daniel', 'jesus', 'moses']
  },
  {
    id: 'john-baptist',
    name: 'John the Baptist',
    subtitle: 'The Forerunner',
    testament: 'new',
    category: 'Prophet',
    era: 'c. 5 BC – AD 29',
    imageQuery: 'biblical John the Baptist wilderness prophet camel hair garment locust honey Jordan River baptizing classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=fierce%20lean%20desert%20prophet%20with%20wild%20dark%20hair%20wearing%20rough%20camel%20hair%20garment%20leather%20belt%20holding%20a%20wooden%20staff%20Jordan%20River%20background%20passionate%20preaching%20expression%20warm%20desert%20light%20classical%20painting%20style%20ancient%20biblical%20appearance%20powerful%20herald&width=400&height=600&seq=johnb01&orientation=portrait',
    bio: `John the Baptist was the prophesied forerunner of the Messiah, born to the elderly priest Zechariah and his wife Elizabeth (a relative of Mary). He lived in the Judean wilderness, wore camel's hair, ate locusts and wild honey, and preached a baptism of repentance with a fiery, uncompromising message: "Repent, for the kingdom of heaven has come near!"

Crowds flocked to John at the Jordan River. He baptized Jesus, witnessing the heavens open and the Spirit descend like a dove. John declared, "He must become greater; I must become less." His fearless confrontation of King Herod Antipas over his unlawful marriage to Herodias led to his imprisonment and eventual beheading — a request made by Herodias' daughter at Herod's birthday banquet. Jesus said of John, "Among those born of women there has not risen anyone greater."`,
    journeyCards: [
      { title: 'Miraculous Birth', description: 'Born to the elderly priest Zechariah and Elizabeth after an angelic announcement. His father was struck mute until naming him John.' },
      { title: 'Voice in the Wilderness', description: 'John preached repentance in the Judean desert, baptizing crowds at the Jordan River and preparing the way for the Messiah.' },
      { title: 'Baptizing Jesus', description: 'John baptized Jesus in the Jordan. The heavens opened, the Spirit descended as a dove, and God\'s voice declared, "This is my beloved Son."' },
      { title: 'Imprisonment & Death', description: 'John was imprisoned by Herod Antipas for condemning his unlawful marriage and was beheaded at the request of Herodias\' daughter.' }
    ],
    lessons: [
      'True greatness is pointing others to Jesus, not to yourself — "He must increase; I must decrease."',
      'Speaking truth to power is costly — John lost his head for confronting Herod\'s sin.',
      'Preparation and humility are the marks of a faithful servant.'
    ],
    keyScriptures: [
      { reference: 'John 3:30', text: 'He must become greater; I must become less.' },
      { reference: 'Matthew 11:11', text: 'Truly I tell you, among those born of women there has not risen anyone greater than John the Baptist.' }
    ],
    timeline: [
      { date: 'c. 5 BC', event: 'Born to Zechariah and Elizabeth; six months older than Jesus' },
      { date: 'c. AD 26', event: 'Begins preaching and baptizing at the Jordan River' },
      { date: 'c. AD 27', event: 'Baptizes Jesus; declares him the Lamb of God' },
      { date: 'c. AD 29', event: 'Beheaded in prison by order of Herod Antipas' }
    ],
    relatedPeople: ['jesus', 'elizabeth', 'andrew', 'elijah', 'mary']
  },
  {
    id: 'deborah',
    name: 'Deborah',
    subtitle: 'Judge and Prophetess',
    testament: 'old',
    category: 'Judge',
    era: 'c. 1200–1150 BC',
    imageQuery: 'biblical Deborah judge prophetess under palm tree commanding army strong woman leader classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=authoritative%20ancient%20Israelite%20woman%20in%20flowing%20robes%20and%20veil%20sitting%20under%20a%20palm%20tree%20wise%20commanding%20expression%20warm%20afternoon%20light%20ancient%20Canaan%20hills%20in%20background%20scrolls%20nearby%20classical%20painting%20style%20dignified%20prophetic%20bearing%20strong&width=400&height=600&seq=debo01&orientation=portrait',
    bio: `Deborah was a prophetess and the only female judge of Israel, holding court under the Palm of Deborah between Ramah and Bethel. In a time when Israel was oppressed by the Canaanite king Jabin and his commander Sisera (who had 900 iron chariots), Deborah summoned the military commander Barak and relayed God's battle plan.

Barak refused to go without her, so Deborah accompanied the army to Mount Tabor. God routed Sisera's forces, and Sisera himself fled on foot, only to be killed by Jael, a woman who drove a tent peg through his temple. Deborah's Song of Victory (Judges 5) is one of the oldest poems in the Bible. She led Israel in peace for forty years, demonstrating that God raises up leaders regardless of gender when faithfulness is required.`,
    journeyCards: [
      { title: 'Judge Under the Palm', description: 'Deborah held court under a palm tree, judging disputes and delivering God\'s word to Israel during a time of Canaanite oppression.' },
      { title: 'Summoning Barak', description: 'She summoned Barak and delivered God\'s command to attack Sisera\'s army, but Barak refused to go without her at his side.' },
      { title: 'Victory at Mount Tabor', description: 'God routed Sisera\'s 900 iron chariots. Sisera fled and was killed by Jael, fulfilling Deborah\'s prophecy that a woman would get the glory.' },
      { title: 'The Song of Deborah', description: 'Deborah and Barak sang a victory hymn (Judges 5), one of the oldest and most powerful poems in the Bible.' }
    ],
    lessons: [
      'God raises up leaders based on faithfulness and gifting, not gender — Deborah led a nation.',
      'Courage is contagious — Deborah\'s presence emboldened Barak and the entire army.',
      'Give glory to God for the victory, not to yourself — Deborah\'s song praised the LORD, not her own leadership.'
    ],
    keyScriptures: [
      { reference: 'Judges 4:4-5', text: 'Now Deborah, a prophet, the wife of Lappidoth, was leading Israel at that time. She held court under the Palm of Deborah.' },
      { reference: 'Judges 5:31', text: '"So may all your enemies perish, LORD! But may all who love you be like the sun when it rises in its strength." Then the land had peace forty years.' }
    ],
    timeline: [
      { date: 'c. 1200 BC', event: 'Serves as judge and prophetess during Canaanite oppression under King Jabin' },
      { date: 'c. 1190 BC', event: 'Summons Barak; accompanies the army to Mount Tabor' },
      { date: 'c. 1190 BC', event: 'God defeats Sisera\'s army; Jael kills Sisera; Deborah sings the victory song' },
      { date: 'c. 1150 BC', event: 'Israel enjoys forty years of peace under Deborah\'s leadership' }
    ],
    relatedPeople: ['samuel', 'ruth', 'esther', 'hannah', 'joshua']
  },
  {
    id: 'saul',
    name: 'King Saul',
    subtitle: 'Israel\'s Tragic First King',
    testament: 'old',
    category: 'King',
    era: 'c. 1080–1010 BC',
    imageQuery: 'biblical King Saul tormented haunted face tall imposing warrior crown spear darkening throne room classical sacred art dramatic portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=tall%20impressive%20ancient%20Hebrew%20king%20wearing%20royal%20armor%20breastplate%20and%20crown%20standing%20with%20a%20spear%20tragic%20proud%20expression%20melancholy%20eyes%20magnificent%20bearing%20but%20haunted%20look%20warm%20torchlight%20ancient%20Israel%20palace%20background%20classical%20painting%20style&width=400&height=600&seq=saul01&orientation=portrait',
    bio: `Saul, son of Kish from the tribe of Benjamin, was Israel's first king — chosen by God and anointed by Samuel. He stood a head taller than anyone else in Israel and initially showed humility (hiding among the baggage when selected). Early in his reign he won military victories and showed promise.

However, Saul's reign deteriorated as his disobedience to God's commands compounded. He offered a sacrifice instead of waiting for Samuel, he spared King Agag and the best livestock when commanded to destroy all, and he became consumed with jealousy toward David, repeatedly trying to kill the young man God had chosen as his successor. Tormented by an evil spirit and increasingly erratic, Saul consulted a medium at Endor before his final battle. He and three of his sons died on Mount Gilboa fighting the Philistines — a tragic end to a reign that began with so much promise.`,
    journeyCards: [
      { title: 'Anointed King', description: 'Samuel anointed the tall, humble Benjamite Saul as Israel\'s first king, and the Spirit of God came upon him.' },
      { title: 'Early Victories', description: 'Saul defeated the Ammonites at Jabesh-Gilead and initially led Israel well in battle.' },
      { title: 'Disobedience & Rejection', description: 'Saul made unauthorized sacrifices and disobeyed God by sparing Agag. Samuel declared, "The LORD has rejected you as king."' },
      { title: 'Tragic End', description: 'Consumed by jealousy of David and abandoned by God\'s Spirit, Saul fell on his own sword at the Battle of Mount Gilboa.' }
    ],
    lessons: [
      'A good start does not guarantee a good finish — Saul began humble but ended in madness.',
      'Partial obedience is still disobedience — Saul kept the best livestock when God said destroy everything.',
      'Jealousy destroys from within — Saul\'s obsession with David consumed his reign and his sanity.'
    ],
    keyScriptures: [
      { reference: '1 Samuel 15:22-23', text: '"To obey is better than sacrifice, and to heed is better than the fat of rams. For rebellion is like the sin of divination... Because you have rejected the word of the LORD, he has rejected you as king."' },
      { reference: '1 Samuel 18:9', text: 'And from that time on Saul kept a close eye on David.' }
    ],
    timeline: [
      { date: 'c. 1080 BC', event: 'Born in Gibeah; son of Kish from the tribe of Benjamin' },
      { date: 'c. 1050 BC', event: 'Anointed by Samuel as Israel\'s first king' },
      { date: 'c. 1030 BC', event: 'Rejected by God after repeated disobedience; David anointed as successor' },
      { date: 'c. 1010 BC', event: 'Dies by suicide at the Battle of Mount Gilboa alongside three sons' }
    ],
    relatedPeople: ['david', 'samuel', 'jonathan', 'ahab', 'solomon']
  },
  {
    id: 'solomon',
    name: 'King Solomon',
    subtitle: 'The Wisest King',
    testament: 'old',
    category: 'King',
    era: 'c. 990–931 BC',
    imageQuery: 'biblical King Solomon wise judge magnificent temple gold throne wisdom justice classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=wise%20wealthy%20ancient%20Hebrew%20king%20in%20magnificent%20gold%20and%20crimson%20royal%20robes%20ornate%20crown%20jewels%20and%20rings%20sitting%20on%20ivory%20throne%20wise%20aging%20eyes%20magnificent%20palace%20background%20warm%20golden%20light%20classical%20painting%20style%20dignified%20philosopher%20king&width=400&height=600&seq=solo01&orientation=portrait',
    bio: `Solomon, son of David and Bathsheba, became Israel's third king and presided over the nation's golden age. When God appeared to him in a dream and offered him anything he desired, Solomon asked not for wealth or power but for wisdom to govern. God was so pleased that he gave Solomon both wisdom and unparalleled riches. His judgment between two mothers claiming the same baby became legendary.

Solomon built the magnificent temple in Jerusalem — the crowning achievement of his reign and Israel's central place of worship. He composed 3,000 proverbs and 1,005 songs, and rulers from around the world (including the Queen of Sheba) came to hear his wisdom. Yet his later years were marred by compromise: 700 wives and 300 concubines turned his heart after foreign gods. His apostasy led to the division of the kingdom after his death — a powerful warning that wisdom without ongoing faithfulness is not enough.`,
    journeyCards: [
      { title: 'The Wise Request', description: 'God offered Solomon anything. He asked for wisdom to lead. God was so pleased he gave Solomon wisdom, riches, and honor beyond any other king.' },
      { title: 'Building the Temple', description: 'Solomon constructed the temple in Jerusalem over seven years — gold, cedar, and precious stones — fulfilling David\'s dream.' },
      { title: 'Fame & Fortune', description: 'The Queen of Sheba visited and declared, "The half was not told me." Solomon\'s wisdom, wealth, and influence were unmatched.' },
      { title: 'A Divided Heart', description: 'Solomon\'s many foreign wives led his heart astray to worship their gods. After his death, the kingdom split in two.' }
    ],
    lessons: [
      'Wisdom is the greatest asset a leader can seek — it surpasses wealth, power, and fame.',
      'Even the wisest person can fall through compromise — guard your heart above all else.',
      'What you build can outlive you, for better or worse — Solomon\'s temple and Solomon\'s apostasy both endured.'
    ],
    keyScriptures: [
      { reference: '1 Kings 3:9', text: 'So give your servant a discerning heart to govern your people and to distinguish between right and wrong.' },
      { reference: '1 Kings 11:4', text: 'As Solomon grew old, his wives turned his heart after other gods, and his heart was not fully devoted to the LORD his God.' }
    ],
    timeline: [
      { date: 'c. 990 BC', event: 'Born to David and Bathsheba in Jerusalem' },
      { date: 'c. 970 BC', event: 'Becomes king; asks God for wisdom; begins an era of unprecedented prosperity' },
      { date: 'c. 960 BC', event: 'Completes the temple in Jerusalem after seven years of construction' },
      { date: 'c. 931 BC', event: 'Dies after 40-year reign; kingdom divides into Israel (north) and Judah (south)' }
    ],
    relatedPeople: ['david', 'saul', 'hezekiah', 'josiah', 'jesus']
  },
  {
    id: 'hezekiah',
    name: 'King Hezekiah',
    subtitle: 'The Reformer King',
    testament: 'old',
    category: 'King',
    era: 'c. 739–687 BC',
    imageQuery: 'biblical King Hezekiah praying facing wall tears Jerusalem besieged Assyrians temple reform classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=devout%20praying%20king%20in%20ancient%20Israelite%20royal%20robes%20kneeling%20in%20prayer%20before%20God%20humble%20prayerful%20expression%20temple%20setting%20warm%20golden%20light%20scroll%20and%20lamp%20nearby%20classical%20painting%20style%20dignified%20penitent%20bearing&width=400&height=600&seq=hez01&orientation=portrait',
    bio: `Hezekiah was one of Judah's greatest kings — a reformer who "trusted in the LORD, the God of Israel" like no king before or after him. He destroyed pagan altars and high places, reopened and cleansed the temple, and restored proper worship. His reign coincided with the devastating Assyrian invasion that had already conquered the northern kingdom of Israel.

When the Assyrian king Sennacherib besieged Jerusalem with an overwhelming army and sent a taunting letter, Hezekiah spread the letter before the LORD in the temple and prayed. That night, the angel of the LORD struck down 185,000 Assyrian soldiers. Later, when terminally ill, Hezekiah prayed with tears and God granted him fifteen more years. His story demonstrates the power of sincere, desperate prayer.`,
    journeyCards: [
      { title: 'Temple Reform', description: 'Hezekiah cleansed and reopened the temple, destroyed pagan altars, and restored proper worship throughout Judah.' },
      { title: 'The Assyrian Threat', description: 'Sennacherib\'s massive army conquered all Judah\'s fortified cities and besieged Jerusalem. Hezekiah turned to God in desperate prayer.' },
      { title: 'Miraculous Deliverance', description: 'In answer to prayer, the angel of the LORD struck down 185,000 Assyrian soldiers in a single night. Jerusalem was saved.' },
      { title: 'Fifteen More Years', description: 'When Isaiah told Hezekiah he would die, the king turned to the wall and wept. God heard his prayer and added 15 years to his life.' }
    ],
    lessons: [
      'Bold reform and genuine prayer go hand in hand — Hezekiah both acted and prayed.',
      'God responds to raw, desperate prayer — spreading the threatening letter before God was an act of total dependence.',
      'Extended life is a gift to be used wisely — Hezekiah\'s extra 15 years were a mixed legacy.'
    ],
    keyScriptures: [
      { reference: '2 Kings 18:5', text: 'Hezekiah trusted in the LORD, the God of Israel. There was no one like him among all the kings of Judah, either before him or after him.' },
      { reference: '2 Kings 19:19', text: 'Now, LORD our God, deliver us from his hand, so that all the kingdoms of the earth may know that you alone, LORD, are God.' }
    ],
    timeline: [
      { date: 'c. 739 BC', event: 'Born to King Ahaz; grows up during a time of Judah\'s apostasy' },
      { date: 'c. 715 BC', event: 'Becomes king; initiates sweeping religious reforms' },
      { date: '701 BC', event: 'Sennacherib besieges Jerusalem; 185,000 Assyrians struck down by the angel of the LORD' },
      { date: 'c. 687 BC', event: 'Dies after a 29-year reign; succeeded by his son Manasseh' }
    ],
    relatedPeople: ['isaiah', 'josiah', 'david', 'solomon', 'ahab']
  },
  {
    id: 'josiah',
    name: 'King Josiah',
    subtitle: 'The Boy King Reformer',
    testament: 'old',
    category: 'King',
    era: 'c. 649–609 BC',
    imageQuery: 'biblical King Josiah young king reading scroll Book of Law temple discovery tearful reform classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=young%20earnest%20king%20in%20simple%20ancient%20Israelite%20robes%20holding%20an%20ancient%20scroll%20open%20wide-eyed%20humble%20expression%20upon%20reading%20something%20momentous%20Temple%20setting%20warm%20lamp%20light%20classical%20painting%20style%20ancient%20biblical%20appearance%20tender%20conviction&width=400&height=600&seq=josi01&orientation=portrait',
    bio: `Josiah became king of Judah at just eight years old and is remembered as the last great reformer before the Babylonian exile. At age sixteen he "began to seek the God of his father David," and at twenty he started purging Judah of pagan worship, tearing down altars to Baal and Asherah.

The defining moment came when the priest Hilkiah discovered the Book of the Law (likely Deuteronomy) during temple repairs. When Josiah heard the words read aloud, he tore his robes in grief, realizing how far Judah had strayed. He led a nationwide covenant renewal, celebrated the greatest Passover since Samuel's time, and destroyed every pagan shrine in the land. Tragically, Josiah was killed at age thirty-nine in battle at Megiddo against Pharaoh Necho II, and all Judah mourned the loss of their beloved king.`,
    journeyCards: [
      { title: 'Boy King', description: 'Josiah became king at age eight after his father Amon was assassinated. Despite his youth, he sought the God of David.' },
      { title: 'The Purge', description: 'At twenty, Josiah began destroying pagan altars, high places, and Asherah poles throughout Judah and beyond.' },
      { title: 'Discovery of the Law', description: 'During temple repairs, the Book of the Law was found. When Josiah heard its words, he tore his robes and wept.' },
      { title: 'Covenant Renewal & Passover', description: 'Josiah led the nation in covenant renewal and celebrated a Passover so magnificent it had no equal since the days of Samuel.' }
    ],
    lessons: [
      'Age is no barrier to seeking God — Josiah began his reforms as a teenager.',
      'Encountering God\'s Word should produce grief over sin and action to make things right.',
      'One generation of faithfulness can change an entire nation, even temporarily.'
    ],
    keyScriptures: [
      { reference: '2 Kings 22:2', text: 'He did what was right in the eyes of the LORD and followed completely the ways of his father David, not turning aside to the right or to the left.' },
      { reference: '2 Kings 23:25', text: 'Neither before nor after Josiah was there a king like him who turned to the LORD as he did — with all his heart and with all his soul and with all his strength.' }
    ],
    timeline: [
      { date: '649 BC', event: 'Born to King Amon; becomes king at age eight after his father\'s assassination' },
      { date: '633 BC', event: 'At age sixteen, begins seeking the God of David' },
      { date: '622 BC', event: 'Book of the Law discovered; tears his robes; leads national covenant renewal' },
      { date: '609 BC', event: 'Killed in battle at Megiddo against Pharaoh Necho II at age thirty-nine' }
    ],
    relatedPeople: ['hezekiah', 'jeremiah', 'david', 'solomon', 'samuel']
  },
  {
    id: 'aaron',
    name: 'Aaron',
    subtitle: 'The First High Priest',
    testament: 'old',
    category: 'Priest',
    era: 'c. 1400–1280 BC',
    imageQuery: 'biblical Aaron high priest ornate robes breastplate gems incense altar holy garments classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=ancient%20Hebrew%20high%20priest%20in%20magnificent%20priestly%20robes%20with%20breastplate%20of%20twelve%20stones%20ephod%20and%20golden%20turban%20with%20holy%20diadem%20elderly%20noble%20face%20warm%20temple%20light%20classical%20painting%20style%20majestic%20priestly%20bearing&width=400&height=600&seq=aar01&orientation=portrait',
    bio: `Aaron, Moses' older brother, served as spokesperson for Moses before Pharaoh (since Moses claimed to be slow of speech) and became Israel's first high priest. He played a crucial role in the Exodus, holding up Moses' hands during the battle against the Amalekites and entering God's presence to make atonement for the people.

Yet Aaron's legacy is mixed. In Moses' absence on Mount Sinai, Aaron succumbed to the people's pressure and fashioned the golden calf — one of Israel's most grievous sins. Despite this failure, God still appointed him as high priest, establishing the Aaronic priesthood that would serve Israel for over a thousand years. Aaron died on Mount Hor and was mourned by all Israel for thirty days.`,
    journeyCards: [
      { title: 'Moses\' Voice', description: 'God appointed Aaron as Moses\' spokesman before Pharaoh: "He will speak to the people for you, and it will be as if he were your mouth."' },
      { title: 'The Golden Calf', description: 'When Moses delayed on Sinai, Aaron yielded to the people\'s demand and fashioned a golden calf for them to worship — a devastating failure.' },
      { title: 'Consecrated as High Priest', description: 'Despite the golden calf incident, God chose Aaron as Israel\'s first high priest, establishing the priesthood for generations.' },
      { title: 'Death on Mount Hor', description: 'Aaron\'s priestly garments were transferred to his son Eleazar on Mount Hor, and Aaron died there. Israel mourned him for thirty days.' }
    ],
    lessons: [
      'Leadership requires standing firm under pressure — Aaron caved to the crowd and created the golden calf.',
      'God uses flawed people in sacred roles — Aaron\'s failure did not disqualify him from the priesthood.',
      'The role of mediator between God and people carries enormous weight and responsibility.'
    ],
    keyScriptures: [
      { reference: 'Exodus 4:16', text: 'He will speak to the people for you, and it will be as if he were your mouth and as if you were God to him.' },
      { reference: 'Exodus 28:1', text: 'Have Aaron your brother brought to you from among the Israelites, along with his sons, so they may serve me as priests.' }
    ],
    timeline: [
      { date: 'c. 1403 BC', event: 'Born in Egypt; three years older than Moses' },
      { date: 'c. 1320 BC', event: 'Serves as Moses\' spokesman before Pharaoh during the ten plagues' },
      { date: 'c. 1320 BC', event: 'Creates the golden calf while Moses is on Sinai; later consecrated as high priest' },
      { date: 'c. 1280 BC', event: 'Dies on Mount Hor at age 123; mourned for thirty days' }
    ],
    relatedPeople: ['moses', 'joshua', 'pharaoh', 'samuel', 'david']
  },
  {
    id: 'joshua',
    name: 'Joshua',
    subtitle: 'Conqueror of the Promised Land',
    testament: 'old',
    category: 'Hero of Faith',
    era: 'c. 1400–1290 BC',
    imageQuery: 'biblical Joshua warrior commander raised sword walls of Jericho falling trumpets Promised Land classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=strong%20warrior%20leader%20in%20ancient%20Israelite%20military%20armor%20holding%20a%20spear%20and%20shield%20bold%20confident%20expression%20Canaan%20hills%20background%20warm%20afternoon%20warrior%20light%20classical%20painting%20style%20dignified%20military%20bearing%20faithful%20and%20brave&width=400&height=600&seq=josh01&orientation=portrait',
    bio: `Joshua, Moses' faithful assistant for forty years, was chosen to lead Israel into the Promised Land after Moses' death. He had been one of only two spies (with Caleb) who gave a positive report when Israel first reached Canaan's border, trusting God rather than fearing the giants.

Under Joshua's command, Israel crossed the Jordan River on dry ground, conquered Jericho as its walls fell at the sound of trumpets and shouts, and systematically conquered the land of Canaan. He divided the territory among the twelve tribes and in his farewell address issued the famous challenge: "Choose for yourselves this day whom you will serve... but as for me and my household, we will serve the LORD."`,
    journeyCards: [
      { title: 'Moses\' Assistant', description: 'Joshua served Moses faithfully for forty years, learning leadership by serving — from the battle with Amalek to the foot of Mount Sinai.' },
      { title: 'The Faithful Spy', description: 'Of twelve spies sent into Canaan, only Joshua and Caleb trusted God despite the giants: "We should go up and take possession of the land."' },
      { title: 'Crossing the Jordan & Jericho', description: 'Joshua led Israel across the Jordan on dry ground and conquered Jericho as its walls fell at the shout of faith.' },
      { title: 'Dividing the Land', description: 'Joshua completed the conquest, divided the land among the tribes, and challenged Israel: "Choose this day whom you will serve."' }
    ],
    lessons: [
      'Faithful service in a supporting role prepares you for leadership — Joshua served Moses for 40 years before leading Israel.',
      'Courage comes from believing God\'s promises, not from assessing human odds.',
      '"Be strong and courageous" — God\'s repeated command to Joshua is his command to every believer facing overwhelming tasks.'
    ],
    keyScriptures: [
      { reference: 'Joshua 1:9', text: 'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.' },
      { reference: 'Joshua 24:15', text: 'But as for me and my household, we will serve the LORD.' }
    ],
    timeline: [
      { date: 'c. 1400 BC', event: 'Born in Egypt; serves as Moses\' assistant from youth' },
      { date: 'c. 1320 BC', event: 'One of twelve spies; only he and Caleb trust God\'s promise' },
      { date: 'c. 1280 BC', event: 'Assumes leadership after Moses\' death; conquers Jericho and Canaan' },
      { date: 'c. 1250 BC', event: 'Dies at 110; buried in his allotted land at Timnath Serah' }
    ],
    relatedPeople: ['moses', 'rahab', 'aaron', 'deborah', 'david']
  },
  {
    id: 'sarah',
    name: 'Sarah',
    subtitle: 'Mother of Nations',
    testament: 'old',
    category: 'Patriarch',
    era: 'c. 2050–1923 BC',
    imageQuery: 'biblical Sarah matriarch elderly beautiful woman laughing tent Abraham mother of Isaac classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=beautiful%20elderly%20woman%20of%20great%20dignity%20and%20grace%20wearing%20ancient%20Near%20Eastern%20robes%20cream%20and%20gold%20warm%20starry%20night%20tent%20setting%20serene%20faith-tested%20smile%20holding%20a%20baby%20classical%20painting%20style%20ancient%20biblical%20appearance%20joyful%20matriarch&width=400&height=600&seq=sara01&orientation=portrait',
    bio: `Sarah (originally Sarai) was the wife of Abraham and the mother of Isaac — the child of promise through whom God's covenant would continue. Renowned for her beauty even in old age, she followed Abraham from Ur to Canaan in faith, enduring decades of barrenness in a culture where childlessness was considered a curse.

When God promised that the ninety-year-old Sarah would bear a son, she laughed — and God named the child Isaac ("he laughs") as a permanent reminder that nothing is too hard for the LORD. Sarah is honored in Hebrews 11 as a woman of faith and in 1 Peter as a model of submissive courage. She died at 127 and was buried in the Cave of Machpelah in Hebron.`,
    journeyCards: [
      { title: 'Journey from Ur', description: 'Sarah left her homeland with Abraham, traveling by faith to an unknown land God had promised.' },
      { title: 'Decades of Waiting', description: 'For twenty-five years Sarah waited for the promised child, enduring the pain of barrenness and the complication of Hagar and Ishmael.' },
      { title: 'Laughter & Isaac', description: 'At ninety years old, Sarah gave birth to Isaac. She declared, "God has brought me laughter, and everyone who hears will laugh with me."' },
      { title: 'Mother of Nations', description: 'Sarah\'s descendants became the nation of Israel and ultimately the lineage of the Messiah. She was buried in Hebron beside Abraham.' }
    ],
    lessons: [
      'God\'s promises are fulfilled on his timeline, not ours — Sarah waited 25 years for Isaac.',
      'Laughter can be transformed from doubt to joy — Sarah laughed in disbelief, then laughed in delight.',
      'Faith means following God even when the destination is unknown and the wait is unbearable.'
    ],
    keyScriptures: [
      { reference: 'Genesis 18:14', text: 'Is anything too hard for the LORD? I will return to you at the appointed time next year, and Sarah will have a son.' },
      { reference: 'Hebrews 11:11', text: 'And by faith even Sarah, who was past childbearing age, was enabled to bear children because she considered him faithful who had made the promise.' }
    ],
    timeline: [
      { date: 'c. 2050 BC', event: 'Born in Ur of the Chaldeans as Sarai' },
      { date: 'c. 2000 BC', event: 'Travels with Abraham from Ur to Canaan' },
      { date: 'c. 1900 BC', event: 'Gives birth to Isaac at age 90; God renames her Sarah ("princess")' },
      { date: 'c. 1923 BC', event: 'Dies at age 127; buried in the Cave of Machpelah in Hebron' }
    ],
    relatedPeople: ['abraham', 'isaac', 'jacob', 'hannah', 'mary']
  },
  {
    id: 'isaac',
    name: 'Isaac',
    subtitle: 'The Child of Promise',
    testament: 'old',
    category: 'Patriarch',
    era: 'c. 1900–1720 BC',
    imageQuery: 'biblical Isaac gentle patriarch well-digger peaceful blessing sons altar Mount Moriah classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=calm%20elderly%20patriarch%20with%20white%20beard%20and%20deep%20peaceful%20eyes%20wearing%20ancient%20Canaan%20robes%20digging%20a%20well%20near%20tent%20warm%20afternoon%20light%20classical%20painting%20style%20dignified%20quiet%20wisdom%20ancient%20biblical%20appearance&width=400&height=600&seq=isaa01&orientation=portrait',
    bio: `Isaac, the long-awaited son of Abraham and Sarah, was the child through whom God's covenant promises would continue. His birth to parents aged 100 and 90 was itself a miracle, and his near-sacrifice on Mount Moriah (Genesis 22) foreshadowed God's provision of a substitute — and ultimately the sacrifice of Christ.

Isaac lived a quieter life than his father Abraham or his son Jacob. He re-dug the wells his father had dug, married Rebekah (whom Abraham's servant found at a well in Mesopotamia), and prospered in Gerar. In his old age, blind Isaac was deceived by Jacob into giving the firstborn's blessing to the younger son instead of Esau — part of God's sovereign plan, yet accomplished through human deception. Isaac died at 180 and was buried by both sons in the Cave of Machpelah.`,
    journeyCards: [
      { title: 'The Miraculous Birth', description: 'Born to Abraham (100) and Sarah (90), Isaac\'s very existence was a testament to God\'s faithfulness to impossible promises.' },
      { title: 'Bound on the Altar', description: 'Abraham bound Isaac on an altar on Mount Moriah, but God provided a ram as substitute — foreshadowing Christ\'s sacrifice.' },
      { title: 'Rebekah at the Well', description: 'Abraham\'s servant found Rebekah through divine guidance at a well in Mesopotamia. She became Isaac\'s wife and the mother of Esau and Jacob.' },
      { title: 'Blessing the Sons', description: 'Blind and elderly, Isaac was deceived into blessing Jacob instead of Esau — fulfilling God\'s prophecy that "the older will serve the younger."' }
    ],
    lessons: [
      'God provides — the ram on Mount Moriah taught Isaac (and all of us) that the LORD will provide.',
      'A quiet, faithful life is no less significant than a dramatic one — Isaac\'s steadiness carried the covenant forward.',
      'God\'s sovereign purposes work even through human deception and family conflict.'
    ],
    keyScriptures: [
      { reference: 'Genesis 22:8', text: 'Abraham answered, "God himself will provide the lamb for the burnt offering, my son." And the two of them went on together.' },
      { reference: 'Genesis 26:24', text: 'That night the LORD appeared to him and said, "I am the God of your father Abraham. Do not be afraid, for I am with you; I will bless you."' }
    ],
    timeline: [
      { date: 'c. 1900 BC', event: 'Born to Abraham and Sarah; circumcised on the eighth day' },
      { date: 'c. 1885 BC', event: 'Bound on the altar by Abraham; God provides a ram as substitute' },
      { date: 'c. 1860 BC', event: 'Marries Rebekah; twins Esau and Jacob born after years of prayer' },
      { date: 'c. 1720 BC', event: 'Dies at age 180; buried by Esau and Jacob in the Cave of Machpelah' }
    ],
    relatedPeople: ['abraham', 'sarah', 'jacob', 'joseph', 'jesus']
  },
  {
    id: 'jacob',
    name: 'Jacob',
    subtitle: 'Israel — He Who Wrestles with God',
    testament: 'old',
    category: 'Patriarch',
    era: 'c. 1860–1730 BC',
    imageQuery: 'biblical Jacob wrestling angel ladder to heaven twelve sons patriarch shepherd staff classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=elderly%20patriarch%20with%20long%20white%20hair%20and%20beard%20holding%20a%20staff%20twelve%20sons%20implied%20in%20background%20warm%20tent%20firelight%20wise%20weathered%20face%20wearing%20ancient%20Canaan%20robes%20classical%20painting%20style%20dignified%20aged%20patriarch&width=400&height=600&seq=jaco01&orientation=portrait',
    bio: `Jacob, the younger twin of Esau, was a complex figure — a deceiver who became a patriarch. He tricked Esau out of his birthright for a bowl of stew and deceived his blind father Isaac to steal the firstborn's blessing. Fleeing Esau's wrath, Jacob dreamed of a ladder reaching to heaven at Bethel, with angels ascending and descending and God renewing the Abrahamic promise.

After twenty years working for his uncle Laban (who deceived him in return), Jacob wrestled all night with a mysterious figure at the ford of Jabbok. He refused to let go until he received a blessing, and the figure renamed him "Israel" — "he who wrestles with God." Jacob fathered twelve sons who became the twelve tribes of Israel. His life demonstrates that God's grace works through deeply flawed people to accomplish his eternal purposes.`,
    journeyCards: [
      { title: 'The Stolen Blessing', description: 'Jacob deceived his blind father Isaac and stole Esau\'s firstborn blessing, forcing him to flee for his life.' },
      { title: 'Jacob\'s Ladder', description: 'Fleeing to Haran, Jacob dreamed of a ladder reaching heaven. God renewed the Abrahamic covenant: "I am with you and will watch over you."' },
      { title: 'Wrestling with God', description: 'At the Jabbok River, Jacob wrestled with a mysterious figure all night. He was renamed "Israel" — "he who struggles with God."' },
      { title: 'Father of Twelve Tribes', description: 'Jacob\'s twelve sons became the patriarchs of the twelve tribes of Israel, fulfilling God\'s promise to Abraham of a great nation.' }
    ],
    lessons: [
      'God\'s grace is not limited by our character flaws — Jacob the deceiver became Israel the patriarch.',
      'Wrestling with God, though painful, leads to transformation and blessing.',
      'What you sow, you reap — Jacob the deceiver was deceived by Laban, yet God redeemed it all.'
    ],
    keyScriptures: [
      { reference: 'Genesis 28:15', text: 'I am with you and will watch over you wherever you go, and I will bring you back to this land. I will not leave you until I have done what I have promised you.' },
      { reference: 'Genesis 32:28', text: 'Then the man said, "Your name will no longer be Jacob, but Israel, because you have struggled with God and with humans and have overcome."' }
    ],
    timeline: [
      { date: 'c. 1860 BC', event: 'Born as the younger twin of Esau, grasping his brother\'s heel' },
      { date: 'c. 1837 BC', event: 'Steals Esau\'s blessing; flees to Haran; dreams of the ladder at Bethel' },
      { date: 'c. 1817 BC', event: 'Wrestles with God at the Jabbok; renamed Israel' },
      { date: 'c. 1730 BC', event: 'Dies in Egypt at age 147; buried in the Cave of Machpelah' }
    ],
    relatedPeople: ['isaac', 'abraham', 'joseph', 'sarah', 'noah']
  },
  {
    id: 'stephen',
    name: 'Stephen',
    subtitle: 'The First Christian Martyr',
    testament: 'new',
    category: 'Hero of Faith',
    era: 'c. AD 5–34',
    imageQuery: 'biblical Stephen first martyr radiant face looking heavenward stones stoning vision of Jesus standing at right hand of God classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=radiant%20young%20man%20with%20face%20like%20an%20angel%20looking%20upward%20toward%20light%20in%20simple%20deacon%20robes%20stones%20around%20him%20fearless%20joyful%20expression%20divine%20light%20streaming%20down%20classical%20painting%20style%20ancient%20biblical%20appearance%20first%20martyr&width=400&height=600&seq=step01&orientation=portrait',
    bio: `Stephen was one of seven deacons chosen by the early church to serve the Hellenistic Jewish widows. Described as "a man full of God's grace and power," he performed signs and wonders and spoke with wisdom that his opponents could not refute. His defense before the Sanhedrin (Acts 7) is the longest speech in Acts — a sweeping survey of Israel's history showing how the nation had always rejected God's messengers.

As he was stoned to death, Stephen looked up and saw Jesus standing at the right hand of God. His final words echoed Christ's own: "Lord, do not hold this sin against them." A young man named Saul (later Paul) watched approvingly, holding the coats of those who stoned him. Stephen's martyrdom scattered the church and paradoxically accelerated the spread of the Gospel.`,
    journeyCards: [
      { title: 'Chosen as Deacon', description: 'Stephen was selected as one of seven deacons, a man "full of faith and of the Holy Spirit," to serve the growing church\'s practical needs.' },
      { title: 'Signs and Wonders', description: 'Stephen performed great wonders and signs among the people. His opponents could not stand up against his wisdom or the Spirit by which he spoke.' },
      { title: 'The Defense', description: 'Before the Sanhedrin, Stephen delivered a masterful survey of Israel\'s history, accusing the leaders of always resisting the Holy Spirit.' },
      { title: 'The First Martyrdom', description: 'As stones rained down, Stephen saw heaven open and Jesus standing at God\'s right hand. He prayed, "Lord, do not hold this sin against them."' }
    ],
    lessons: [
      'Faithful service in practical matters (waiting tables) can lead to a platform for world-changing witness.',
      'Forgiveness of one\'s enemies, even while being killed, is the ultimate imitation of Christ.',
      'One person\'s martyrdom can plant seeds that change history — Stephen\'s death haunted Saul and scattered the Gospel.'
    ],
    keyScriptures: [
      { reference: 'Acts 7:55-56', text: 'But Stephen, full of the Holy Spirit, looked up to heaven and saw the glory of God, and Jesus standing at the right hand of God. "Look," he said, "I see heaven open and the Son of Man standing at the right hand of God."' },
      { reference: 'Acts 7:60', text: 'Then he fell on his knees and cried out, "Lord, do not hold this sin against them." When he had said this, he fell asleep.' }
    ],
    timeline: [
      { date: 'c. AD 5', event: 'Born (likely a Hellenistic Jew)' },
      { date: 'c. AD 33', event: 'Chosen as one of seven deacons in the Jerusalem church' },
      { date: 'c. AD 34', event: 'Arrested; delivers his defense before the Sanhedrin' },
      { date: 'c. AD 34', event: 'Stoned to death — the first Christian martyr; Saul (Paul) watches approvingly' }
    ],
    relatedPeople: ['paul', 'peter', 'jesus', 'philip-apostle', 'barnabas']
  },
  {
    id: 'rahab',
    name: 'Rahab',
    subtitle: 'The Redeemed Outsider',
    testament: 'old',
    category: 'Women of Faith',
    era: 'c. 1280 BC',
    imageQuery: 'biblical Rahab Jericho scarlet cord red rope window city walls brave woman hiding spies classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=brave%20woman%20of%20ancient%20Canaan%20on%20city%20wall%20with%20red%20scarlet%20cord%20hanging%20from%20window%20courageous%20determined%20expression%20warm%20torch%20light%20ancient%20Jericho%20city%20setting%20classical%20painting%20style%20redeemed%20outsider&width=400&height=600&seq=raha01&orientation=portrait',
    bio: `Rahab was a prostitute living in the walls of Jericho who hid two Israelite spies sent by Joshua. She had heard of God's mighty acts — the Red Sea crossing, the wilderness victories — and declared, "The LORD your God is God in heaven above and on the earth below." She asked for protection for her family when Israel conquered Jericho, and the spies agreed, instructing her to hang a scarlet cord from her window.

When Jericho's walls fell, Rahab and her family alone were saved. She married Salmon, became the mother of Boaz (Ruth's husband), and appears in the genealogy of Jesus Christ (Matthew 1:5). Her story is a stunning example of grace — a pagan prostitute who, by faith, became an ancestor of the Messiah.`,
    journeyCards: [
      { title: 'Hiding the Spies', description: 'Rahab hid Joshua\'s two spies on her roof under stalks of flax, then misdirected the king\'s soldiers who came searching.' },
      { title: 'A Confession of Faith', description: 'Rahab declared to the spies, "The LORD your God is God in heaven above and on the earth below" — the most remarkable faith confession from a Canaanite.' },
      { title: 'The Scarlet Cord', description: 'The spies instructed Rahab to hang a scarlet cord from her window as a sign. When Jericho fell, her family was spared.' },
      { title: 'In the Messiah\'s Line', description: 'Rahab married into Israel, became the mother of Boaz, and appears in the genealogy of Jesus — grace in action.' }
    ],
    lessons: [
      'No background is too sinful for God\'s redemption — a prostitute became an ancestor of Jesus.',
      'Faith is demonstrated by action — Rahab risked her life to hide the spies.',
      'God includes outsiders in his story — Rahab, like Ruth, shows that his family is bigger than any one nation.'
    ],
    keyScriptures: [
      { reference: 'Joshua 2:11', text: 'The LORD your God is God in heaven above and on the earth below.' },
      { reference: 'Hebrews 11:31', text: 'By faith the prostitute Rahab, because she welcomed the spies, was not killed with those who were disobedient.' }
    ],
    timeline: [
      { date: 'c. 1280 BC', event: 'Living in Jericho as a prostitute; hides Israelite spies' },
      { date: 'c. 1280 BC', event: 'Hangs scarlet cord from her window as agreed with the spies' },
      { date: 'c. 1280 BC', event: 'Jericho falls; Rahab and her family are rescued' },
      { date: 'c. 1270 BC', event: 'Marries Salmon; gives birth to Boaz — enters the Messianic lineage' }
    ],
    relatedPeople: ['joshua', 'ruth', 'david', 'naomi', 'jesus']
  },
  {
    id: 'hannah',
    name: 'Hannah',
    subtitle: 'Mother of the Prophet',
    testament: 'old',
    category: 'Women of Faith',
    era: 'c. 1120–1060 BC',
    imageQuery: 'biblical Hannah praying weeping at tabernacle Shiloh mother devoted child dedication classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=earnest%20praying%20woman%20in%20ancient%20Israelite%20robes%20weeping%20silently%20before%20the%20tabernacle%20lips%20moving%20eyes%20closed%20hands%20raised%20faith-filled%20expression%20warm%20lamplight%20shiloh%20tabernacle%20setting%20classical%20painting%20style%20biblical%20appearance&width=400&height=600&seq=hann01&orientation=portrait',
    bio: `Hannah was the barren wife of Elkanah who endured years of grief and the taunts of her rival wife Peninnah. Year after year she went to the tabernacle at Shiloh, weeping and praying silently for a child. The priest Eli initially mistook her fervent, silent prayer for drunkenness, but when he understood, he blessed her: "Go in peace, and may the God of Israel grant you what you have asked."

God answered Hannah's prayer, and she bore a son — Samuel. True to her vow, she dedicated him to the LORD's service at the tabernacle as soon as he was weaned. Her prayer of thanksgiving (1 Samuel 2:1-10) is one of the great hymns of the Old Testament and foreshadows Mary's Magnificat. Hannah later bore five more children. Her faithfulness in dedicating Samuel to God's service gave Israel its greatest prophet-judge.`,
    journeyCards: [
      { title: 'Years of Barrenness', description: 'Hannah endured the pain of childlessness and the provocations of Peninnah, weeping bitterly and refusing to eat.' },
      { title: 'The Silent Prayer', description: 'At the tabernacle in Shiloh, Hannah poured out her soul to God in silent prayer. Eli the priest mistook her for drunk but then blessed her.' },
      { title: 'Samuel Is Born', description: 'God remembered Hannah and she bore a son, naming him Samuel — "Because I asked the LORD for him."' },
      { title: 'The Dedication', description: 'Hannah brought young Samuel to the tabernacle and dedicated him to the LORD for his entire life, fulfilling her sacred vow.' }
    ],
    lessons: [
      'Persistent, heartfelt prayer reaches God\'s heart — Hannah\'s years of tears were not wasted.',
      'Keeping vows to God, even costly ones, demonstrates true faithfulness.',
      'Our deepest pain can become the birthplace of God\'s greatest purposes — Hannah\'s grief produced Samuel.'
    ],
    keyScriptures: [
      { reference: '1 Samuel 1:27-28', text: 'I prayed for this child, and the LORD has granted me what I asked of him. So now I give him to the LORD. For his whole life he will be given over to the LORD.' },
      { reference: '1 Samuel 2:1', text: 'Then Hannah prayed and said: "My heart rejoices in the LORD; in the LORD my horn is lifted high."' }
    ],
    timeline: [
      { date: 'c. 1120 BC', event: 'Years of barrenness; endures Peninnah\'s taunts' },
      { date: 'c. 1105 BC', event: 'Prays fervently at the tabernacle in Shiloh; Eli blesses her' },
      { date: 'c. 1100 BC', event: 'Samuel is born; Hannah nurses him until weaned' },
      { date: 'c. 1097 BC', event: 'Dedicates Samuel to the LORD at the tabernacle; later bears five more children' }
    ],
    relatedPeople: ['samuel', 'mary', 'naomi', 'ruth', 'deborah']
  },
  {
    id: 'naomi',
    name: 'Naomi',
    subtitle: 'From Bitter to Blessed',
    testament: 'old',
    category: 'Women of Faith',
    era: 'c. 1170–1100 BC',
    imageQuery: 'biblical Naomi elderly woman returning Bethlehem bittersweet grief hope daughter-in-law Ruth classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=elderly%20grief-weary%20Israelite%20woman%20walking%20on%20dusty%20road%20with%20young%20companion%20both%20in%20modest%20ancient%20robes%20sorrowful%20yet%20dignified%20expression%20warm%20Bethlehem%20landscape%20background%20classical%20painting%20style%20widowed%20survivor%20bearing%20ancient%20biblical%20appearance&width=400&height=600&seq=naom01&orientation=portrait',
    bio: `Naomi's story begins with tragedy — famine drove her family from Bethlehem to Moab, where her husband Elimelech and both sons died, leaving her destitute with two Moabite daughters-in-law. She renamed herself "Mara" (bitter), saying, "The Almighty has made my life very bitter. I went away full, but the LORD has brought me back empty."

Yet Naomi's bitterness gave way to providence. Ruth's extraordinary loyalty in accompanying her back to Bethlehem, and Naomi's shrewd guidance toward Boaz as kinsman-redeemer, led to Ruth's marriage and the birth of Obed. The women of Bethlehem placed Obed in Naomi's arms and declared, "Naomi has a son!" — and that child became the grandfather of King David. Naomi's journey from emptiness to fullness is one of Scripture's most beautiful portraits of redemption.`,
    journeyCards: [
      { title: 'Famine & Exile', description: 'Naomi and her family fled famine in Bethlehem for the foreign land of Moab, where her husband and both sons died.' },
      { title: 'Call Me Bitter', description: 'Returning to Bethlehem empty-handed, Naomi told the townswomen, "Call me Mara, because the Almighty has made my life very bitter."' },
      { title: 'Guiding Ruth', description: 'Naomi wisely counseled Ruth to approach Boaz at the threshing floor, setting in motion the kinsman-redeemer redemption.' },
      { title: 'Grandmother of Kings', description: 'When Ruth bore Obed, the women placed the child in Naomi\'s arms: "Naomi has a son!" Obed became grandfather of David.' }
    ],
    lessons: [
      'Bitterness is honest, but it is not the end of the story — God can turn "Mara" back to "Naomi" (pleasant).',
      'God often works through the loyalty and love of the people around us.',
      'What feels like the end may be the setup for God\'s greatest redemption.'
    ],
    keyScriptures: [
      { reference: 'Ruth 1:20-21', text: '"Don\'t call me Naomi," she told them. "Call me Mara, because the Almighty has made my life very bitter. I went away full, but the LORD has brought me back empty."' },
      { reference: 'Ruth 4:17', text: 'The women living there said, "Naomi has a son!" And they named him Obed. He was the father of Jesse, the father of David.' }
    ],
    timeline: [
      { date: 'c. 1170 BC', event: 'Lives in Bethlehem with husband Elimelech and sons Mahlon and Kilion' },
      { date: 'c. 1155 BC', event: 'Family moves to Moab during famine; husband and sons die' },
      { date: 'c. 1130 BC', event: 'Returns to Bethlehem with Ruth; guides Ruth toward Boaz' },
      { date: 'c. 1125 BC', event: 'Becomes nurse/grandmother to Obed — ancestor of David and Jesus' }
    ],
    relatedPeople: ['ruth', 'hannah', 'esther', 'rahab', 'david']
  },
  {
    id: 'elizabeth',
    name: 'Elizabeth',
    subtitle: 'Mother of the Forerunner',
    testament: 'new',
    category: 'Women of Faith',
    era: 'c. 50 BC – AD 10',
    imageQuery: 'biblical Elizabeth elderly pregnant woman joyful greeting Mary mother of John Baptist priestly family classical sacred art warm golden light portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=elderly%20joyful%20woman%20in%20ancient%20Israelite%20priestly%20family%20robes%20holding%20her%20hands%20over%20her%20heart%20overwhelmed%20joyful%20expression%20softly%20glowing%20interior%20light%20ancient%20Judean%20home%20simple%20warm%20setting%20classical%20painting%20style%20ancient%20biblical%20appearance%20blessed%20mother&width=400&height=600&seq=eliz01&orientation=portrait',
    bio: `Elizabeth, wife of the priest Zechariah and relative of Mary, was described as "righteous in the sight of God, observing all the Lord's commands and decrees blamelessly." Yet she was barren and well advanced in years — a source of deep sorrow in her culture.

When the angel Gabriel announced to Zechariah that Elizabeth would bear a son (John the Baptist), Zechariah doubted and was struck mute. Elizabeth conceived, and when the pregnant Mary visited her, the baby leaped in Elizabeth's womb and she was filled with the Holy Spirit, declaring: "Blessed are you among women, and blessed is the child you will bear!" Elizabeth's story beautifully parallels other barren-to-blessed women in Scripture — Sarah, Hannah, and Rachel — and confirms God's pattern of using the impossible to accomplish the extraordinary.`,
    journeyCards: [
      { title: 'Righteous & Barren', description: 'Elizabeth and Zechariah were blameless before God, yet bore the sorrow of childlessness well into old age.' },
      { title: 'Gabriel\'s Promise', description: 'The angel Gabriel appeared to Zechariah in the temple and announced that Elizabeth would bear a son to be named John.' },
      { title: 'The Visitation', description: 'When Mary arrived, the baby leaped in Elizabeth\'s womb. Filled with the Spirit, Elizabeth declared Mary "blessed among women."' },
      { title: 'Birth of John', description: 'Elizabeth gave birth to John. When Zechariah confirmed the name "John" (breaking family tradition), his speech was restored.' }
    ],
    lessons: [
      'Righteousness before God does not guarantee an easy life — Elizabeth was blameless yet barren for decades.',
      'God\'s timing is perfect even when it feels painfully late.',
      'Recognizing God\'s work in others is a mark of the Spirit — Elizabeth celebrated Mary\'s blessing without jealousy.'
    ],
    keyScriptures: [
      { reference: 'Luke 1:42-43', text: 'In a loud voice she exclaimed: "Blessed are you among women, and blessed is the child you will bear! But why am I so favored, that the mother of my Lord should come to me?"' },
      { reference: 'Luke 1:45', text: '"Blessed is she who has believed that the Lord would fulfill his promises to her!"' }
    ],
    timeline: [
      { date: 'c. 50 BC', event: 'Born into a priestly family; marries the priest Zechariah' },
      { date: 'c. 6 BC', event: 'Gabriel announces John\'s birth to Zechariah in the temple' },
      { date: 'c. 5 BC', event: 'Conceives; Mary visits; Elizabeth declares Mary blessed' },
      { date: 'c. 5 BC', event: 'Gives birth to John the Baptist; Zechariah\'s speech is restored' }
    ],
    relatedPeople: ['mary', 'john-baptist', 'jesus', 'hannah', 'sarah']
  },
  {
    id: 'pharaoh',
    name: 'Pharaoh of the Exodus',
    subtitle: 'The Hard-Hearted Ruler',
    testament: 'old',
    category: 'Antagonist',
    era: 'c. 1350–1280 BC',
    imageQuery: 'biblical Pharaoh Egyptian king golden headdress stern defiant face plagues throne room classical sacred art dramatic chiaroscuro portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=proud%20imperious%20ancient%20Egyptian%20Pharaoh%20in%20full%20royal%20regalia%20golden%20headdress%20nemes%20crown%20jeweled%20collar%20dark%20brooding%20expression%20dramatic%20torch%20light%20ancient%20Egyptian%20palace%20columns%20hieroglyphics%20background%20classical%20painting%20style%20tragic%20defiant%20bearing&width=400&height=600&seq=phar01&orientation=portrait',
    bio: `The Pharaoh of the Exodus (traditionally identified as Rameses II, though debated) is the primary human antagonist of the Exodus narrative. When Moses and Aaron demanded, "Let my people go," Pharaoh responded with contempt: "Who is the LORD, that I should obey him?" He increased the Israelites' burden, demanding they make bricks without straw.

Through ten devastating plagues — water to blood, frogs, gnats, flies, livestock disease, boils, hail, locusts, darkness, and the death of every firstborn — God systematically dismantled Egypt's power and its gods. Pharaoh repeatedly hardened his heart, only relenting after the death of his own firstborn son. Even then, he pursued the Israelites to the Red Sea, where his army was destroyed. Pharaoh stands as Scripture's supreme example of stubborn resistance to God's will.`,
    journeyCards: [
      { title: 'Who Is the LORD?', description: 'When Moses demanded Israel\'s release, Pharaoh sneered, "Who is the LORD, that I should obey him?" and increased Israel\'s labor.' },
      { title: 'The Ten Plagues', description: 'God sent ten plagues upon Egypt — each targeting an Egyptian deity — from the Nile turning to blood to the death of every firstborn.' },
      { title: 'Hardened Heart', description: 'Again and again Pharaoh hardened his heart, refusing to let Israel go despite overwhelming evidence of God\'s power.' },
      { title: 'Destruction at the Red Sea', description: 'Pharaoh pursued Israel to the sea. God parted the waters for Israel, then collapsed them upon the Egyptian army.' }
    ],
    lessons: [
      'Stubbornness against God brings escalating consequences — each plague was worse than the last.',
      'No human power can resist God\'s purposes — the mightiest empire on earth was humbled by ten plagues.',
      'A hardened heart eventually reaches a point of no return — Pharaoh had chances to relent but refused them all.'
    ],
    keyScriptures: [
      { reference: 'Exodus 5:2', text: 'Pharaoh said, "Who is the LORD, that I should obey him and let Israel go? I do not know the LORD and I will not let Israel go."' },
      { reference: 'Exodus 14:28', text: 'The water flowed back and covered the chariots and horsemen — the entire army of Pharaoh that had followed the Israelites into the sea. Not one of them survived.' }
    ],
    timeline: [
      { date: 'c. 1350 BC', event: 'Rules Egypt; enslaves the Israelites; orders death of Hebrew male infants' },
      { date: 'c. 1320 BC', event: 'Moses and Aaron appear before Pharaoh: "Let my people go"' },
      { date: 'c. 1320 BC', event: 'Ten plagues devastate Egypt; Pharaoh\'s firstborn son dies' },
      { date: 'c. 1320 BC', event: 'Pursues Israel to the Red Sea; Egyptian army destroyed in the waters' }
    ],
    relatedPeople: ['moses', 'aaron', 'joseph', 'joshua', 'haman']
  },
  {
    id: 'jezebel',
    name: 'Jezebel',
    subtitle: 'The Wicked Queen',
    testament: 'old',
    category: 'Antagonist',
    era: 'c. 900–841 BC',
    imageQuery: 'biblical Queen Jezebel painted face window cruel Phoenician queen Baal worship dark sinister classical sacred art dramatic portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=dangerous%20powerful%20Phoenician%20queen%20in%20ornate%20dark%20jeweled%20robes%20cold%20imperious%20eyes%20dark%20kohl%20eyeliner%20dramatic%20dangerous%20expression%20torch%20light%20ancient%20Israelite%20palace%20dark%20tapestry%20background%20classical%20painting%20style%20tragic%20queen%20bearing&width=400&height=600&seq=jezeb01&orientation=portrait',
    bio: `Jezebel, a Phoenician princess who married King Ahab of Israel, became the most notorious queen in the Bible. She aggressively promoted Baal worship in Israel, sponsored 850 prophets of Baal and Asherah, and systematically killed the LORD's prophets. When Elijah defeated her prophets on Mount Carmel, Jezebel threatened to kill him — sending the great prophet fleeing in terror.

Her most infamous act was engineering the judicial murder of Naboth to seize his vineyard for Ahab — a crime that brought Elijah's devastating pronouncement: "Dogs will devour Jezebel by the wall of Jezreel." Years later, the prophecy was fulfilled exactly when Jehu's coup overthrew the dynasty. Jezebel painted her face and adorned her hair, looking out a window in defiance, and was thrown to her death. Her name has become synonymous with religious corruption, manipulation, and wickedness.`,
    journeyCards: [
      { title: 'Foreign Queen', description: 'Jezebel came from Sidon as a Phoenician princess, bringing Baal worship into Israel when she married King Ahab.' },
      { title: 'War on the Prophets', description: 'Jezebel killed the LORD\'s prophets and maintained 850 prophets of Baal and Asherah at her table.' },
      { title: 'Naboth\'s Vineyard', description: 'When Naboth refused to sell his ancestral vineyard, Jezebel orchestrated false charges and had him stoned to death.' },
      { title: 'A Prophesied End', description: 'Jezebel was thrown from a window during Jehu\'s revolt. Dogs consumed her body, fulfilling Elijah\'s prophecy exactly.' }
    ],
    lessons: [
      'Imported idolatry corrupts an entire nation — Jezebel\'s Baal worship infected all of Israel.',
      'Using power to oppress the innocent always invites divine judgment.',
      'God\'s prophetic word is fulfilled precisely, even if judgment is delayed.'
    ],
    keyScriptures: [
      { reference: '1 Kings 21:25', text: 'There was never anyone like Ahab, who sold himself to do evil in the eyes of the LORD, urged on by Jezebel his wife.' },
      { reference: '2 Kings 9:36', text: 'This is the word of the LORD that he spoke through his servant Elijah the Tishbite: On the plot of ground at Jezreel dogs will devour Jezebel\'s flesh.' }
    ],
    timeline: [
      { date: 'c. 880 BC', event: 'Marries King Ahab of Israel; brings Baal worship into the kingdom' },
      { date: 'c. 870 BC', event: 'Kills the LORD\'s prophets; sustains 850 prophets of Baal and Asherah' },
      { date: 'c. 863 BC', event: 'Engineers Naboth\'s murder to seize his vineyard' },
      { date: 'c. 841 BC', event: 'Thrown from a window and killed during Jehu\'s revolution' }
    ],
    relatedPeople: ['ahab', 'elijah', 'elisha', 'haman', 'pharaoh']
  },
  {
    id: 'haman',
    name: 'Haman',
    subtitle: 'The Enemy of the Jews',
    testament: 'old',
    category: 'Antagonist',
    era: 'c. 500–473 BC',
    imageQuery: 'biblical Haman Persian official arrogant proud face gallows rope sinister Persian court classical sacred art dramatic chiaroscuro portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=proud%20scheming%20Persian%20court%20official%20in%20ornate%20silk%20robes%20jeweled%20rings%20and%20golden%20chain%20of%20office%20dark%20envious%20furious%20expression%20Persian%20palace%20background%20candlelight%20dramatic%20shadows%20classical%20painting%20style%20ancient%20Near%20East%20villain%20bearing&width=400&height=600&seq=hama01&orientation=portrait',
    bio: `Haman the Agagite was the chief advisor to King Xerxes of Persia and the villain of the book of Esther. When the Jewish exile Mordecai refused to bow to him, Haman's wounded pride exploded into a genocidal rage. Not content to punish Mordecai alone, he plotted to exterminate every Jew in the entire Persian Empire, casting lots ("pur") to choose the date of the massacre.

Haman's downfall came through stunning irony. The gallows he built to hang Mordecai became his own execution site. The honors he expected for himself were given to Mordecai. And Queen Esther — whose Jewish identity he did not know — exposed his plot at a banquet, and the king ordered Haman hanged on his own gallows. The day intended for Jewish destruction became the festival of Purim, a celebration of deliverance that Jews observe to this day.`,
    journeyCards: [
      { title: 'The Wounded Ego', description: 'Mordecai refused to bow to Haman. Enraged, Haman decided that punishing one man was not enough — he would destroy all Jews.' },
      { title: 'The Genocidal Plot', description: 'Haman convinced King Xerxes to issue a decree for the annihilation of all Jews in the empire, set for the 13th of Adar.' },
      { title: 'The Gallows for Mordecai', description: 'Haman built a 75-foot gallows to hang Mordecai, expecting the king\'s permission the next morning.' },
      { title: 'Hanged on His Own Gallows', description: 'Esther exposed Haman\'s plot. The king ordered Haman hanged on the very gallows he had built for Mordecai.' }
    ],
    lessons: [
      'Pride and wounded ego can escalate to monstrous evil — Haman went from insulted to genocidal.',
      'Those who dig a pit for others often fall into it themselves — Haman was hanged on his own gallows.',
      'God\'s providence protects his people even when his name is never mentioned (the book of Esther).'
    ],
    keyScriptures: [
      { reference: 'Esther 7:10', text: 'So they impaled Haman on the pole he had set up for Mordecai. Then the king\'s fury subsided.' },
      { reference: 'Esther 9:1', text: 'On the thirteenth day of the twelfth month... the tables were turned and the Jews got the upper hand over those who hated them.' }
    ],
    timeline: [
      { date: 'c. 480 BC', event: 'Rises to chief advisor under King Xerxes of Persia' },
      { date: 'c. 474 BC', event: 'Enraged by Mordecai\'s refusal to bow; plots genocide of all Jews' },
      { date: 'c. 473 BC', event: 'Builds gallows for Mordecai; attends Esther\'s banquets' },
      { date: 'c. 473 BC', event: 'Exposed by Esther; hanged on his own gallows' }
    ],
    relatedPeople: ['esther', 'pharaoh', 'jezebel', 'ahab', 'judas-iscariot']
  },
  {
    id: 'ahab',
    name: 'King Ahab',
    subtitle: 'Israel\'s Most Wicked King',
    testament: 'old',
    category: 'Antagonist',
    era: 'c. 918–853 BC',
    imageQuery: 'biblical King Ahab sulking petulant face ivory palace Jezebel Baal worship dark brooding classical sacred art dramatic portrait',
    imageUrl: 'https://readdy.ai/api/search-image?query=sullen%20middle-aged%20Israelite%20king%20in%20royal%20robes%20looking%20troubled%20and%20conflicted%20on%20his%20throne%20weak%20indecisive%20expression%20torchlight%20ancient%20palace%20background%20classical%20painting%20style%20tragic%20passive%20king%20ancient%20biblical%20appearance%20haunted%20look&width=400&height=600&seq=ahab01&orientation=portrait',
    bio: `Ahab, son of Omri, is described in Scripture as the king who "did more evil in the eyes of the LORD than any of those before him." He married Jezebel, established Baal worship as official state religion, and built a temple to Baal in Samaria. When he could not have Naboth's vineyard, he sulked like a child until Jezebel arranged Naboth's murder.

Yet Ahab was a complex figure — militarily capable and occasionally responsive to God's word. When Elijah pronounced doom over Naboth's murder, Ahab humbled himself in sackcloth, and God delayed the judgment to the next generation. He won victories with God's help but repeatedly returned to evil. Ahab died in battle at Ramoth-Gilead, and dogs licked his blood from his chariot, fulfilling Elijah's prophecy.`,
    journeyCards: [
      { title: 'Marriage to Jezebel', description: 'Ahab married the Phoenician princess Jezebel and allowed her to establish Baal worship throughout Israel.' },
      { title: 'Confrontation with Elijah', description: 'Elijah confronted Ahab during the drought and at Mount Carmel, demonstrating the LORD\'s supremacy over Baal.' },
      { title: 'Naboth\'s Vineyard', description: 'Ahab coveted Naboth\'s vineyard. When Naboth refused to sell, Ahab sulked until Jezebel had Naboth murdered.' },
      { title: 'Death at Ramoth-Gilead', description: 'Ahab went to battle in disguise but was struck by a random arrow. He bled to death, and dogs licked his blood as Elijah had prophesied.' }
    ],
    lessons: [
      'The company you keep shapes your character — Ahab\'s marriage to Jezebel dragged him and Israel into Baal worship.',
      'Momentary repentance without lasting change is not enough — Ahab humbled himself temporarily but returned to evil.',
      'You cannot escape God\'s judgment through disguise or deception — a "random" arrow found Ahab.'
    ],
    keyScriptures: [
      { reference: '1 Kings 16:30', text: 'Ahab son of Omri did more evil in the eyes of the LORD than any of those before him.' },
      { reference: '1 Kings 22:34', text: 'But someone drew his bow at random and hit the king of Israel between the sections of his armor.' }
    ],
    timeline: [
      { date: 'c. 874 BC', event: 'Becomes king of Israel; marries Jezebel; builds temple to Baal' },
      { date: 'c. 868 BC', event: 'Defeated by Elijah on Mount Carmel; drought ends after three years' },
      { date: 'c. 863 BC', event: 'Jezebel murders Naboth; Elijah pronounces judgment on Ahab\'s dynasty' },
      { date: '853 BC', event: 'Killed by arrow at the battle of Ramoth-Gilead; dogs lick his blood' }
    ],
    relatedPeople: ['jezebel', 'elijah', 'elisha', 'saul', 'hezekiah']
  },
  {
    id: 'matthias',
    name: 'Matthias',
    subtitle: 'The Replacement Apostle',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 1–80',
    imageQuery: 'biblical apostle Matthias lots casting chosen replacement Judas faithful follower classical sacred art warm golden light portrait',
    bio: `Matthias holds the unique distinction of being chosen to replace Judas Iscariot as the twelfth apostle. After Jesus' ascension, Peter proposed that someone who had been with Jesus from his baptism through the resurrection must fill the vacancy. Two men were nominated — Matthias and Joseph called Barsabbas. After prayer, they cast lots, and Matthias was chosen.

The qualifications for Matthias reveal something important: he had been a faithful follower of Jesus throughout the entire ministry, even though the Gospels never mention him by name. He was there the whole time, serving faithfully in obscurity. After his selection, Matthias is not mentioned again in Acts, but tradition says he preached in Judea, Cappadocia, and Ethiopia and was eventually martyred.`,
    journeyCards: [
      { title: 'Faithful from the Beginning', description: 'Matthias had followed Jesus from his baptism through the resurrection — a faithful disciple whom the Gospels never name.' },
      { title: 'The Vacancy', description: 'After Judas\' betrayal and death, Peter declared that the twelfth apostolic position must be filled by an eyewitness.' },
      { title: 'Chosen by Lot', description: 'After prayer, the disciples cast lots between Matthias and Barsabbas. The lot fell to Matthias, and he was numbered with the eleven.' },
      { title: 'Service in Obscurity', description: 'Though never mentioned again in Acts, Matthias served faithfully. Tradition says he preached in Judea and beyond.' }
    ],
    lessons: [
      'Years of faithful, unnamed service can position you for God\'s calling at the right moment.',
      'God fills vacancies created by sin — even Judas\' betrayal did not leave a permanent gap.',
      'Selection by God matters more than recognition by men — Matthias was faithful before and after being chosen.'
    ],
    keyScriptures: [
      { reference: 'Acts 1:21-22', text: 'Therefore it is necessary to choose one of the men who have been with us the whole time the Lord Jesus was living among us, beginning from John\'s baptism to the time when Jesus was taken up from us.' },
      { reference: 'Acts 1:26', text: 'Then they cast lots, and the lot fell to Matthias; so he was added to the eleven apostles.' }
    ],
    timeline: [
      { date: 'c. AD 1', event: 'Born; becomes a follower of Jesus from the time of John\'s baptism' },
      { date: 'c. AD 27-30', event: 'Follows Jesus throughout his ministry as a faithful but unnamed disciple' },
      { date: 'c. AD 30', event: 'Chosen by lot to replace Judas Iscariot as the twelfth apostle' },
      { date: 'c. AD 80', event: 'Tradition says he was martyred — accounts place his death in various locations' }
    ],
    relatedPeople: ['peter', 'judas-iscariot', 'jesus', 'barnabas', 'john-apostle']
  },
  {
    id: 'luke',
    name: 'Luke',
    subtitle: 'The Beloved Physician',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 10–84',
    imageQuery: 'biblical Luke physician writer historian careful scholar pen scroll ox symbol classical sacred art warm golden light portrait',
    bio: `Luke, called "the beloved physician" by Paul, was a Gentile convert who wrote two of the New Testament's longest books — the Gospel of Luke and the Acts of the Apostles. Together they account for over a quarter of the New Testament. Luke was a careful historian who interviewed eyewitnesses and wrote "an orderly account" so that Theophilus could "know the certainty of the things you have been taught."

Luke traveled with Paul on portions of his missionary journeys (the "we" passages in Acts) and stayed with Paul during his imprisonments. He is the only Gospel writer who records the parables of the Good Samaritan and the Prodigal Son, and his account gives special attention to women, the poor, outcasts, and the universal scope of God's salvation. He was likely Paul's last companion: "Only Luke is with me" (2 Timothy 4:11).`,
    journeyCards: [
      { title: 'The Gentile Historian', description: 'Luke, a physician and the only Gentile author of the New Testament, carefully researched and wrote an orderly account of Jesus\' life.' },
      { title: 'Paul\'s Travel Companion', description: 'Luke joined Paul on portions of his missionary journeys, recording events firsthand in the "we" passages of Acts.' },
      { title: 'Author of Luke-Acts', description: 'Luke wrote the longest Gospel and the book of Acts — together comprising over 25% of the New Testament.' },
      { title: 'Faithful to the End', description: 'During Paul\'s final imprisonment, Luke alone remained: "Only Luke is with me" — faithful when others had departed.' }
    ],
    lessons: [
      'Careful, thorough research is an act of worship — Luke investigated everything carefully to preserve the truth.',
      'God uses every profession for his glory — a physician became the church\'s greatest historian.',
      'Loyalty in difficult times reveals true friendship — Luke stayed when others left Paul.'
    ],
    keyScriptures: [
      { reference: 'Luke 1:3-4', text: 'With this in mind, since I myself have carefully investigated everything from the beginning, I too decided to write an orderly account for you, most excellent Theophilus, so that you may know the certainty of the things you have been taught.' },
      { reference: '2 Timothy 4:11', text: 'Only Luke is with me. Get Mark and bring him with you, because he is helpful to me in my ministry.' }
    ],
    timeline: [
      { date: 'c. AD 10', event: 'Born, likely in Antioch; trained as a physician' },
      { date: 'c. AD 49', event: 'Joins Paul on his second missionary journey (first "we" passage in Acts 16)' },
      { date: 'c. AD 60-62', event: 'With Paul during his first Roman imprisonment; writes the Gospel of Luke' },
      { date: 'c. AD 62-64', event: 'Writes the book of Acts; remains with Paul until the end' }
    ],
    relatedPeople: ['paul', 'timothy', 'barnabas', 'peter', 'jesus']
  },
  {
    id: 'barnabas',
    name: 'Barnabas',
    subtitle: 'The Son of Encouragement',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 5–61',
    imageQuery: 'biblical Barnabas encouraging warm face generous Levite Cyprus missionary companion of Paul classical sacred art warm golden light portrait',
    bio: `Barnabas (meaning "Son of Encouragement"), born Joseph, was a Levite from Cyprus who sold a field and laid the proceeds at the apostles' feet in one of the early church's first acts of generosity. He was instrumental in vouching for the newly converted Paul when the fearful Jerusalem church refused to accept the former persecutor.

Barnabas was sent to Antioch to investigate reports of Gentile conversion, and there he sought out Paul in Tarsus and brought him to help teach the growing church. Together they undertook the first missionary journey, planting churches across Cyprus and Asia Minor. They later separated over a sharp disagreement about John Mark (Barnabas' cousin) — Paul refused to take Mark, but Barnabas gave him a second chance. Tradition says that investment paid off: Mark later wrote the Gospel of Mark and was reconciled with Paul.`,
    journeyCards: [
      { title: 'The First Giver', description: 'Barnabas sold a field and brought the money to the apostles — a model of generosity that inspired the early church.' },
      { title: 'Vouching for Paul', description: 'When no one would accept the converted Paul, Barnabas brought him to the apostles and told them his story.' },
      { title: 'The First Missionary Journey', description: 'Barnabas and Paul were set apart by the Holy Spirit in Antioch and traveled to Cyprus and Asia Minor, planting churches.' },
      { title: 'Giving John Mark a Second Chance', description: 'Barnabas split from Paul over John Mark, choosing to mentor his young cousin. Mark later wrote a Gospel and was restored to Paul\'s favor.' }
    ],
    lessons: [
      'Encouragement is a spiritual gift that changes lives — Barnabas\' belief in Paul launched the greatest missionary career in history.',
      'Giving people second chances is costly but often bears the greatest fruit — John Mark became a Gospel writer.',
      'Generosity with money and with grace go hand in hand.'
    ],
    keyScriptures: [
      { reference: 'Acts 4:36-37', text: 'Joseph, a Levite from Cyprus, whom the apostles called Barnabas (which means "son of encouragement"), sold a field he owned and brought the money and put it at the apostles\' feet.' },
      { reference: 'Acts 11:24', text: 'He was a good man, full of the Holy Spirit and faith, and a great number of people were brought to the Lord.' }
    ],
    timeline: [
      { date: 'c. AD 5', event: 'Born as Joseph, a Levite from Cyprus' },
      { date: 'c. AD 33', event: 'Sells a field for the church; vouches for Paul before the apostles' },
      { date: 'c. AD 46-48', event: 'First missionary journey with Paul to Cyprus and Asia Minor' },
      { date: 'c. AD 50', event: 'Separates from Paul over John Mark; takes Mark to Cyprus' }
    ],
    relatedPeople: ['paul', 'peter', 'timothy', 'luke', 'stephen']
  },
  {
    id: 'timothy',
    name: 'Timothy',
    subtitle: 'Paul\'s True Son in the Faith',
    testament: 'new',
    category: 'Apostle',
    era: 'c. AD 17–97',
    imageQuery: 'biblical Timothy young man faithful pastor gentle devoted Paul protege church leader classical sacred art warm golden light portrait',
    bio: `Timothy was a young disciple from Lystra, the son of a Jewish mother (Eunice) and a Greek father, who became Paul's most trusted protege and ministry partner. Paul called him "my true son in the faith" and wrote two personal letters to him (1 and 2 Timothy) that serve as pastoral handbooks for church leaders.

Despite his youth and apparent timidity — Paul had to encourage him not to let anyone look down on his youth and to "fan into flame the gift of God" — Timothy faithfully served as Paul's representative to churches in Thessalonica, Corinth, Ephesus, and Philippi. Paul's final letter, written from a Roman prison before his execution, was addressed to Timothy, asking him to come quickly and to "preach the word; be prepared in season and out of season." Tradition says Timothy served as bishop of Ephesus and was martyred there.`,
    journeyCards: [
      { title: 'Raised in Faith', description: 'Timothy was raised in the Scriptures by his mother Eunice and grandmother Lois, whose "sincere faith" Paul commended.' },
      { title: 'Chosen by Paul', description: 'Paul selected young Timothy as his companion and protege, circumcising him (because of his Jewish mother) to remove obstacles to ministry.' },
      { title: 'Trusted Emissary', description: 'Paul sent Timothy to troubleshoot churches in Thessalonica, Corinth, and Ephesus — trusting him with his most sensitive missions.' },
      { title: 'Pastor of Ephesus', description: 'Timothy served as pastor in Ephesus, receiving Paul\'s two personal letters of instruction, encouragement, and charge.' }
    ],
    lessons: [
      'Youth is no barrier to significant ministry — "Don\'t let anyone look down on you because you are young."',
      'Spiritual heritage matters — Timothy\'s faith was built on the foundation laid by his mother and grandmother.',
      'Even gifted leaders need encouragement — Paul repeatedly urged Timothy to be bold and not to give in to fear.'
    ],
    keyScriptures: [
      { reference: '1 Timothy 4:12', text: 'Don\'t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.' },
      { reference: '2 Timothy 1:7', text: 'For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.' }
    ],
    timeline: [
      { date: 'c. AD 17', event: 'Born in Lystra to a Jewish mother (Eunice) and Greek father' },
      { date: 'c. AD 49', event: 'Joins Paul on his second missionary journey' },
      { date: 'c. AD 55-65', event: 'Serves as Paul\'s emissary to multiple churches; receives two letters from Paul' },
      { date: 'c. AD 97', event: 'Tradition says he served as bishop of Ephesus and was martyred there' }
    ],
    relatedPeople: ['paul', 'luke', 'barnabas', 'peter', 'jesus']
  },
  {
    id: 'nehemiah',
    name: 'Nehemiah',
    subtitle: 'The Rebuilder',
    testament: 'old',
    category: 'Hero of Faith',
    era: 'c. 480–430 BC',
    imageQuery: 'biblical Nehemiah builder governor sword trowel rebuilding Jerusalem walls determination leadership classical sacred art warm golden light portrait',
    bio: `Nehemiah was a Jewish exile serving as cupbearer to the Persian king Artaxerxes — a position of high trust and influence. When he heard that Jerusalem's walls lay in ruins and its people in disgrace, he wept, fasted, and prayed. Then he boldly asked the king for permission and resources to rebuild, and Artaxerxes granted everything.

Arriving in Jerusalem, Nehemiah surveyed the rubble by night, organized the people into work crews, and rebuilt the walls in just 52 days — despite fierce opposition from Sanballat, Tobiah, and Geshem, who mocked, plotted, and threatened. Nehemiah armed the workers with swords and trowels, praying with one hand and building with the other. After completing the walls, he partnered with Ezra to lead spiritual reform, reading the Law to the assembled people and renewing their covenant with God. Nehemiah is the Bible's supreme model of godly leadership: prayer + planning + perseverance.`,
    journeyCards: [
      { title: 'The Cupbearer\'s Grief', description: 'In the Persian palace, Nehemiah received devastating news that Jerusalem\'s walls lay in ruins. He wept, fasted, and prayed before approaching the king.' },
      { title: 'The Bold Request', description: 'Nehemiah asked King Artaxerxes for permission, provisions, and protection to rebuild Jerusalem\'s walls — and the king granted everything.' },
      { title: '52-Day Rebuild', description: 'Despite mockery, conspiracy, and threats of attack, Nehemiah organized the people and rebuilt the walls in just 52 days.' },
      { title: 'Spiritual Renewal', description: 'With the walls complete, Nehemiah and Ezra led the people in reading the Law, repentance, and covenant renewal before God.' }
    ],
    lessons: [
      'Effective leadership begins with prayer and ends with action — Nehemiah prayed first, then planned, then built.',
      'Opposition is inevitable when doing God\'s work — expect it, plan for it, and persevere through it.',
      'Physical restoration and spiritual renewal go together — Nehemiah rebuilt walls AND renewed the covenant.'
    ],
    keyScriptures: [
      { reference: 'Nehemiah 2:20', text: 'I answered them by saying, "The God of heaven will give us success. We his servants will start rebuilding."' },
      { reference: 'Nehemiah 6:15-16', text: 'So the wall was completed on the twenty-fifth of Elul, in fifty-two days. When all our enemies heard about this, all the surrounding nations were afraid and lost their self-confidence, because they realized that this work had been done with the help of our God.' }
    ],
    timeline: [
      { date: 'c. 480 BC', event: 'Born in exile; serves as cupbearer to King Artaxerxes in Susa' },
      { date: '445 BC', event: 'Receives news of Jerusalem\'s ruins; obtains permission to rebuild' },
      { date: '445 BC', event: 'Rebuilds Jerusalem\'s walls in 52 days despite fierce opposition' },
      { date: '444 BC', event: 'Partners with Ezra for spiritual renewal; serves as governor of Judah' }
    ],
    relatedPeople: ['daniel', 'esther', 'jeremiah', 'joshua', 'hezekiah']
  }
];

export const LOCATIONS = [
  { name: 'Jerusalem', lat: 31.7683, lng: 35.2137, type: 'City', period: 'Both', events: 9 },
  { name: 'Bethlehem', lat: 31.7054, lng: 35.2024, type: 'City', period: 'Both', events: 4 },
  { name: 'Nazareth', lat: 32.6996, lng: 35.3035, type: 'City', period: 'NT', events: 3 },
  { name: 'Sea of Galilee', lat: 32.8231, lng: 35.5831, type: 'Sea/Lake', period: 'NT', events: 5 },
  { name: 'Capernaum', lat: 32.8812, lng: 35.5725, type: 'City', period: 'NT', events: 4 },
  { name: 'Jordan River', lat: 31.7594, lng: 35.5223, type: 'River', period: 'Both', events: 4 },
  { name: 'Jericho', lat: 31.871, lng: 35.444, type: 'City', period: 'Both', events: 4 },
  { name: 'Hebron', lat: 31.5326, lng: 35.0998, type: 'City', period: 'Both', events: 3 },
  { name: 'Beersheba', lat: 31.2518, lng: 34.7913, type: 'City', period: 'OT', events: 3 },
  { name: 'Mount Carmel', lat: 32.7356, lng: 35.0468, type: 'Mountain', period: 'OT', events: 2 },
  { name: 'Samaria', lat: 32.2747, lng: 35.1904, type: 'City', period: 'Both', events: 4 },
  { name: 'Mount Tabor', lat: 32.6866, lng: 35.3942, type: 'Mountain', period: 'Both', events: 2 },
  { name: 'Garden of Gethsemane', lat: 31.7792, lng: 35.2397, type: 'Garden', period: 'NT', events: 2 },
  { name: 'Mount Sinai', lat: 28.5396, lng: 33.9757, type: 'Mountain', period: 'OT', events: 4 },
  { name: 'Shiloh', lat: 32.0553, lng: 35.2886, type: 'City', period: 'OT', events: 3 },
  { name: 'Masada', lat: 31.3156, lng: 35.3536, type: 'Fortress', period: 'Both', events: 3 },
  { name: 'Bethany', lat: 31.7688, lng: 35.2556, type: 'City', period: 'NT', events: 3 },
  { name: 'Caesarea Philippi', lat: 33.2484, lng: 35.6936, type: 'City', period: 'NT', events: 1 },
  { name: 'En Gedi', lat: 31.4533, lng: 35.3894, type: 'City', period: 'OT', events: 1 },
  { name: 'Road to Emmaus', lat: 31.8389, lng: 35.0153, type: 'Region', period: 'NT', events: 1 }
];
