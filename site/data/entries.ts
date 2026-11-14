import type { Entry } from "./types";
import { moreEntries } from "./entries-more";

/**
 * Encyclopedia entries. Add an object here or in entries-more.ts.
 * The page is generated at /encyclopedia/{slug}.
 * One dense paragraph, then a sources note. Mark interpretation as a reading.
 * No trailing slashes. Do not embed artwork.
 */
const coreEntries: Entry[] = [
  {
    slug: "caravaggio",
    title: "Caravaggio",
    sortName: "Caravaggio",
    letter: "C",
    kind: "person",
    dates: "1571–1610",
    dek: "Light as a plot device: a hard beam in a true dark, painted from live models, with a police file thicker than his letters.",
    description:
      "Caravaggio made light the event of the picture. A modern-context reading of tenebrism, the rejected altarpieces, the killing of Ranuccio Tomassoni, and a record that is mostly paintings plus a criminal archive.",
    tags: ["caravaggio", "tenebrism", "chiaroscuro", "rome", "baroque", "light", "painting"],
    body: `<p>Michelangelo Merisi da Caravaggio (1571–1610) made light a plot device. In the Calling of Saint Matthew, in the Contarelli Chapel, a beam enters a dim room of gamblers and the story is simply who it touches. That is the invention, and it is different from the older practice of modeling a body with gentle light and shade. The older practice already had a name, <a href="/styles/chiaroscuro">chiaroscuro</a>. What he pushed was tenebrism: most of the canvas is a true dark, and the light is a single hard event. He got there by a method you can still see in the paint. He posed live models — people from the street, not an inventory of idealized antique nudes — in a darkened room, and he marked their places straight onto the canvas. Almost no preparatory drawings survive. Technical imaging has found incised lines in the ground, the trace of someone arranging bodies rather than composing on paper. The church that ordered the pictures sometimes refused them. The first Saint Matthew looked too much like a peasant with his legs crossed; the Death of the Virgin was rejected, bare feet and a swollen body, and Peter Paul Rubens then helped the Duke of Mantua buy the rejected picture, which is a useful fact about taste. The gossip that the Virgin's model was a drowned sex worker comes from a hostile early biography and should stay gossip. His violence is not gossip. Roman police and court records put him in repeated fights, and in 1606 he killed Ranuccio Tomassoni. The old story says it was a quarrel during a tennis match. Archival work since then reads it as a duel or a faction fight; the more lurid reconstructions are speculation, and they are not repeated here as fact. He ran: Naples, Malta — where he was made a knight, and where he signed The Beheading of Saint John, the only canvas he signed, painting his name into the Baptist's blood — then prison, escape, Sicily, Naples again, and death at Porto Ercole in July 1610 while he was trying to get back to Rome on the promise of a pardon. Contemporaries report a fever. Later claims about lead poisoning depend on bones that may not be his. The reading is the sentence this entry opened with. The dark grounds are the fact. "Plot" is the interpretation. What the north did with that dark is <a href="/encyclopedia/rembrandt-van-rijn">Rembrandt's</a> problem, a generation later and at one remove.</p>`,
    sources: `<p><strong>The record.</strong> We have the paintings, the contracts, and a remarkable criminal archive for a painter — worked seriously only in the twentieth century, which is why the life is so vivid and so tilted toward brawls. The early biographies (Giulio Mancini, Giovanni Baglione, Giovanni Pietro Bellori) were written after his death by men with tastes and grudges. Baglione had sued him for libel. Bellori, a classicist, could see the power and distrusted the naturalism. Almost nothing survives in Caravaggio's own handwriting. He was apprenticed in 1584 to Simone Peterzano, who billed himself as Titian's pupil — the polished tradition this work refuses. Even the birthplace is unsettleable from a birth record: 1571, in Milan or in the town of Caravaggio. The rejected altarpieces are documented. The "drowned prostitute" model is Mancini's rumor. The tennis-court killing is the early version; modern reading of the same archives treats the manner of the fight as unsettled. The signature in the blood of the Malta Beheading is on the painting and is not in doubt.</p><p><strong>The reading.</strong> That he turned light into the plot, rather than into a way of modeling a solid, is this entry's interpretation. It is what the pictures support once you stand in front of the beam in the Contarelli Chapel, and it is not a sentence he wrote.</p>`,
    related: [
      {
        href: "/styles/chiaroscuro",
        label: "Chiaroscuro",
        note: "The tool, the extreme called tenebrism, and the printmaking term that is a different art.",
      },
      {
        href: "/encyclopedia/rembrandt-van-rijn",
        label: "Rembrandt",
        note: "What a later painter did with a dark ground once the theater had become a psychology.",
      },
    ],
  },
  {
    slug: "katsushika-hokusai",
    title: "Hokusai",
    sortName: "Hokusai, Katsushika",
    letter: "H",
    kind: "person",
    dates: "1760–1849",
    dek: "A designer inside a print system. The Wave is a grammar of force, printed in a synthetic blue, not a private vision of Mount Fuji.",
    description:
      "Hokusai designed inside a commercial woodblock system. A modern-context reading of the Fuji series, Prussian blue, the Manga as a grammar of form, his daughter Ōi, and how much of the life is anecdote.",
    tags: ["hokusai", "ukiyo-e", "edo", "print", "fuji", "wave", "manga", "japan"],
    body: `<p>Katsushika Hokusai (1760–1849) was not a solitary genius staring at Mount Fuji. He was a designer inside a commercial system: a publisher paid, Hokusai drew, a carver cut the cherrywood blocks, a printer laid the color, and the sheet that came out was a print, made to be sold, often cheaply, in Edo. The Great Wave off Kanagawa, from Thirty-Six Views of Mount Fuji — a series that ran past thirty-six to forty-six designs — is that system at full power, and its blue is a material event. Prussian blue, a synthetic pigment newly available in quantity, did not fade the way the older vegetable blues faded. He did not invent it. It is why the color still looks like itself. Read the series as one instrument. Fuji is the stable thing, and everything else is a study of force: the wave as a diagram of water about to break, South Wind, Clear Sky (the print called Red Fuji) as a cone of weather, the travelers at Ejiri whose papers blow away on a wind you cannot see. He had spent decades building the grammar. The Hokusai Manga, sketchbooks issued from 1814 on, are model books — how a person lifts a load, how an animal turns, how a gesture works. The Wave is not a vision that arrived. It is the grammar, applied. He took a new art name some thirty times, each name a period, and in the 1834 colophon to One Hundred Views of Mount Fuji he wrote, as a craftsman rather than a legend, that nothing he had made before seventy was worth counting and that he hoped to be still learning at a hundred and ten. His daughter Ōi, a painter of real force, worked beside him at the end; some late paintings sold under his name are now discussed as possibly hers. The Fuji designs are not. When the prints reached Paris they jolted European picture-making. That influence is real. The tidy story of pages stuffed in a packing crate and "discovered" is the anecdote everyone repeats, and it matters less than the plainer fact: a popular Japanese medium, already being discarded at home a decade after his death, became a formal education for artists who had never seen Edo. The board for the system itself is <a href="/styles/ukiyo-e">ukiyo-e</a>. The rhyme with <a href="/encyclopedia/leonardo-da-vinci">Leonardo</a> — water as a diagram of force — is a reading across three centuries. It is not an influence.</p>`,
    sources: `<p><strong>The record.</strong> The prints are the archive, and they are not unique objects. Impressions differ in color and in wear; there is no single Wave the way there is a single oil. Prefaces and colophons, including the 1834 statement about learning into extreme old age, are his public voice. The series was published by Nishimuraya Yohachi. Private letters are scarce. The count of roughly thirty art names is the usual tally of recorded gō, not a notarized list. A huge public Daruma painted with a broom at a temple festival is relatively well attested; many other trick-performance stories are studio folklore. Poverty in old age, and trouble from a grandson's debts, come through later biography and should stay softer than the prints. Ōi's hand is an open question on specific paintings, not a reassignment of the Fuji series. Born in Edo in 1760 — the day depends on which calendar you convert — and died in 1849.</p><p><strong>The reading.</strong> "The Wave is the Manga's grammar applied to water" is the interpretation this entry is willing to stand on, because the model books and the series are both his and the sequence is real. The packing-crate discovery told about Félix Bracquemond is a famous story; treat it as anecdote, not as the mechanism of Japonisme. We know how the pictures were made better than we know the man. For this artist that is the right way round.</p>`,
    related: [
      {
        href: "/styles/ukiyo-e",
        label: "Ukiyo-e",
        note: "The collaborative print system the Wave belongs to.",
      },
      {
        href: "/encyclopedia/leonardo-da-vinci",
        label: "Leonardo da Vinci",
        note: "Not an influence. Another person who treated water as a grammar of force.",
      },
    ],
  },
  {
    slug: "frida-kahlo",
    title: "Frida Kahlo",
    sortName: "Kahlo, Frida",
    letter: "K",
    kind: "person",
    dates: "1907–1954",
    dek: "The streetcar, the bed, the marriage, the party, Trotsky. Once you know how she lived, the pictures stop looking chosen from a menu.",
    description:
      "Frida Kahlo painted from a body that had been broken and a life she built around the damage. The accident, Diego Rivera, the miscarriage pictures, communism, the brief affair with Trotsky, and what the diary does not settle.",
    tags: ["kahlo", "frida", "mexico", "rivera", "trotsky", "portrait", "pain", "communism"],
    body: `<p>Frida Kahlo (1907–1954) painted the way she did because of what was done to her body and the life she then built around the damage. At six, polio thinned a leg. At eighteen, on 17 September 1925, the bus she was riding in Mexico City was broken open by a streetcar; a metal handrail pierced her pelvis, and her spine, collarbone, ribs, and leg were fractured. She spent the rest of her life in pain, in and out of surgery, and she did not carry a pregnancy to term. The miscarriage in Detroit in 1932 is the one she turned into a picture, Henry Ford Hospital: the bed, the blood, the fetus and the factory floating on an unforgiving ground. She painted the first long recovery the way an injured person actually can, flat on her back, a mirror fixed over the mattress, her own face the only landscape in range. She was not bedridden for the whole career — she traveled, taught, and ran a household — but the bed is the origin of the method, and it came back whenever the body failed again. In 1929 she married Diego Rivera, the most famous muralist in the country and a chronically unfaithful man. She was unfaithful too. They divorced in 1939 and remarried in 1940, and the marriage never became a safe room. It did open the rooms where the work becomes historical: the Mexican muralists, New York and Detroit, Paris in 1939, where André Breton tried to file her as a surrealist. She met Picasso there; by her own account he admired the pictures and gave her earrings. She would not accept the surrealist job description. She was not painting dreams. She was painting a pierced body, a lost pregnancy, a marriage, and a post-revolutionary Mexico she wore on purpose — the Tehuana dress of the Isthmus, which was also a costume that hid the brace and the thinner leg. She joined the Mexican Communist Party in 1928. The break came the next year, when Rivera was expelled; she came back to the party in 1948, and she died under its flag. In 1937 Leon Trotsky, in exile with Natalia Sedova, lived at her family's Blue House. Kahlo and Trotsky had a brief affair, documented in letters, long over by the time he was murdered in 1940. She was questioned and released. None of this is atmosphere. It is the iconography. The Broken Column, a shattered shaft where a spine should be, the veins that tie her to the ground, the self-portraits that will not tidy the brow — once you know the accident, the bed, the marriage, and the political rooms, the pictures stop looking like symbols chosen from a menu. They look inevitable. That inevitability is the reading. The events are not. The muralists painted a nation on a wall. She painted small, often on the scale of a retablo, and put the nation, the marriage, and the injury in the same body. That contrast is also a reading, and it is the one that makes the scale of the pictures make sense.</p>`,
    sources: `<p><strong>The record.</strong> The accident, the surgeries, the marriage, the divorce, the remarriage, the 1928 party membership and the 1948 return, the Trotsky asylum and the short affair, the questioning after his assassination, and the last public appearance — a July 1954 protest against the coup in Guatemala, days before her death — sit in letters, medical and newspaper records, and paintings dated to those events. Her diary and the letters are the closest thing to a voice. They are passionate, self-mythologizing, and not a neutral log. She liked to give her birth year as 1910, the year of the Revolution, which is a useful warning: she edited her own caption. Hayden Herrera's biography is the standard narrative synthesis and should be read as a synthesis. The pictures number on the order of 150, a large share of them self-portraits. The recorded cause of death is a pulmonary embolism. A farewell-like line in the diary has kept a suicide theory alive; it is not established. We have a life more fully written down than most painters get. We do not have an unposed version of her.</p><p><strong>The reading.</strong> That the life makes the pictures inevitable, and that her small scale is the muralists' project turned inward onto one body, is interpretation. So is any single political meaning for the Tehuana dress, which was also, more plainly, clothing that covered an orthopedic shoe. The events those readings are built on are not interpretation.</p>`,
    related: [],
  },
  {
    slug: "leonardo-da-vinci",
    title: "Leonardo da Vinci",
    sortName: "Leonardo da Vinci",
    letter: "L",
    kind: "person",
    dates: "1452–1519",
    dek: "Anatomy as a way of looking, water as the grammar of motion, and paint handled like smoke — with a thin record behind the legend.",
    description:
      "A modern-context reading of Leonardo: anatomical drawing as method, the study of water, sfumato as controlled smoke, and how little of the life sits outside the notebooks and a handful of paintings.",
    tags: ["leonardo", "anatomy", "water", "sfumato", "renaissance", "notebooks", "florence", "painting"],
    body: `<p>Leonardo da Vinci (1452–1519) is usually introduced as the universal Renaissance man, which lists his jobs and explains none of them. The mechanism is looking, practiced until it became a method. He drew the body the way anatomy is still done when it is serious: open it, and make the sheet explain how the part works — muscle as a lever, the heart as a problem of flow, the child curled in the womb as a specimen rather than a symbol. He was not the first person to cut into a corpse, and he did not found the printed science. Vesalius did that in 1543, while Leonardo's drawings sat unpublished. The reading, and it is a reading, is that he is the first whose pages still look like anatomical study as we mean it now. Under that sits the secret of the pictures. He studied water — currents, eddies, the way a stream braids and breaks — and he treated it as a grammar of force. He writes that hair has two motions, one from its weight and one from the air, and that it behaves like water. That comparison is his. The further step is the reading that makes the paintings make sense: the same grammar taught him how smoke, drapery, and light fray as they move through a medium. <a href="/styles/sfumato">Sfumato</a> is the grammar in paint. The name is later. The instruction is his, from notes assembled after his death into a treatise he never published: model the body without lines or borders, in the manner of smoke. In a century that trusted a crisp contour, he chose a controlled messiness. The mouth of the Mona Lisa and the air in the Virgin of the Rocks are not blur. They are an attempt to paint the atmosphere sitting between you and the face, which is as close as a handmade picture gets to the photographic before photography. He would not have put it that way. The comparison is ours. What he finished cannot carry the legend. Some seven thousand notebook pages survive, a fraction of what he wrote, and only a couple of dozen paintings are generally given to him, several of them unfinished, the margins of the list still argued. The Last Supper started to fail almost at once because he refused a reliable fresco method. Most of what we know is those notebooks and that handful of works. The machines, for the most part, were never built. The thing that lasts is a person who would not separate close looking from the way the picture was made.</p>`,
    sources: `<p><strong>The record.</strong> Almost everything in his own voice is the notebooks — on the order of seven thousand pages, mirror script, never organized into the treatises he kept planning. The water studies associated with the Codex Leicester and the late Windsor deluge drawings, and the anatomical sheets at Windsor, are the primary evidence for the claims above. The comparison of hair to water is his. He finished few paintings. The generally accepted corpus is small, and attributions at the margin, Salvator Mundi among them, are contested. His birth on 15 April 1452 is the date his grandfather wrote down; his death in 1519 at Amboise is firm. Early biography is dominated by Giorgio Vasari's Lives (1550, enlarged 1568), which is indispensable and often embroidered. There is no thick contemporary memoir.</p><p><strong>The reading.</strong> The extension from the water studies to smoke, light, and a "photographic" effect is this entry's interpretation, built on his own sfumato note and on the pictures. So is the claim that his anatomical sheets are the first that still look like the modern method. They anticipate it. They did not found the discipline in print, and they were not the drawings Vesalius worked from. The seams are the point: his hand, Vasari's story, and the large silence around both.</p>`,
    related: [
      {
        href: "/styles/sfumato",
        label: "Sfumato",
        note: "The dissolved edge, as a style board: history, works, and starter files.",
      },
      {
        href: "/encyclopedia/michelangelo",
        label: "Michelangelo",
        note: "The other cartoon in the Florentine hall in 1504. Both paintings are lost. The contrast in method is not.",
      },
    ],
  },
  {
    slug: "michelangelo",
    title: "Michelangelo",
    sortName: "Michelangelo Buonarroti",
    letter: "M",
    kind: "person",
    dates: "1475–1564",
    dek: "The figure already in the block, the body as a structure under load, and a written life — letters, poems, a managed biography — that Leonardo never left.",
    description:
      "Michelangelo as a carver who treated the nude as a system under load. The unfinished Slaves, the Sistine ceiling without the lying-down myth, the Cavalieri poems, and a documentary record dense enough to argue with.",
    tags: ["michelangelo", "sculpture", "sistine", "florence", "rome", "renaissance", "poetry", "architecture"],
    body: `<p>Michelangelo Buonarroti (1475–1564) did not think of himself as a painter who also sculpted. He thought of the figure as already trapped in the block, and of his job as cutting until it was free — a claim he put into his own poetry, and that the unfinished Slaves still demonstrate, bodies half-released from the marble. Some of them are unfinished because the tomb of Julius II collapsed into decades of renegotiation. Some of them are unfinished because he had come to mean the struggle to be visible. Both are true. The romantic version keeps only the second. He dissected, by the account he authorized late in life, as a teenager at Santo Spirito in Florence, and the bodies he carved are what dissection looks like when it is put under architectural stress: torsion, a ribcage used as a bay, weight carried down a limb the way a load is carried down a pier. The Sistine ceiling (1508–1512) was a job for a painter, which he insisted he was not. He did it largely alone, in fresco, standing with his head bent back. The popular image of him lying on his back is wrong, and his own comic sonnet about the goiter he grew from the pose is the better evidence. The story that rivals maneuvered him into the vault to watch him fail is the version in the biographies he shaped; take the intrigue as his version. A quarter century later The Last Judgment is a different intelligence. After the Sack of Rome, after the tomb had eaten his middle life, bodies no longer illustrate grace so much as they wait for a verdict. The reading that still holds is that he treated the nude as a system under load. The compressed vestibule of the Laurentian Library, and the dome of St. Peter's that later builders steepened as they completed it, are that same mind asking structure to carry feeling. He is also, on the evidence of the poems to Tommaso dei Cavalieri, a man writing love poems to a man. A later edition rewrote the masculine addresses. Calling the love gay uses our word. Denying it uses his grandnephew's. Set him next to <a href="/encyclopedia/leonardo-da-vinci">Leonardo</a>, who was in the same Florentine hall in 1504, both of them painting battles they did not finish: Leonardo left notebooks and few pictures, Michelangelo left the pictures, the buildings, and the sentences.</p>`,
    sources: `<p><strong>The record.</strong> Unlike Leonardo, he left a written life: a few hundred letters, a body of poems, contracts, and two biographies he steered — Ascanio Condivi's Life of 1553, essentially an authorized account, and Vasari's, which he complained about until it was rewritten. The dissection story comes through that authorized biography, not through a lab notebook, so the fact of study is accepted and the details are not independently logged. The "figure already in the stone" is his metaphor, from the poems, not a technical description of quarrying. The lying-down Sistine myth is legend. The sonnet to Giovanni da Pistoia and the payment records are the ceiling's real documentation. The Cavalieri poems survive in manuscript. His grandnephew's 1623 edition rewrote masculine grammar; the manuscripts do not. Condivi says he destroyed drawings so the labor would not show — believable, and not proven by a pile of ashes. The Florentine year began on 25 March, so some documents date his birth to 1474. The modern conversion of 6 March 1475 is the date to use. The dome as built (Della Porta and Fontana, late 1580s) follows his design and changes the profile.</p><p><strong>The reading.</strong> "The nude as a system under load" is interpretation. It is a way of saying what the torsion, the unfinished blocks, and the architecture have in common. It is not a phrase from a contract. The poems being love poems is not the soft part of this entry. The manuscripts are.</p>`,
    related: [
      {
        href: "/encyclopedia/leonardo-da-vinci",
        label: "Leonardo da Vinci",
        note: "Same city, opposite residue: he finished little and wrote less in public. Michelangelo wrote, and he built.",
      },
    ],
  },
  {
    slug: "rembrandt-van-rijn",
    title: "Rembrandt",
    sortName: "Rembrandt van Rijn",
    letter: "R",
    kind: "person",
    dates: "1606–1669",
    dek: "Light as consent: what a face is willing to show. A documented life, a bankruptcy inventory, and a late style the market thought looked unfinished.",
    description:
      "Rembrandt turned chiaroscuro inward. The serial self-portraits, the 1656 inventory, Geertje and Hendrickje, the Night Watch that is not a night scene, and the myth of the genius who died unknown.",
    tags: ["rembrandt", "amsterdam", "chiaroscuro", "etching", "self-portrait", "dutch", "baroque", "light"],
    body: `<p>Rembrandt van Rijn (1606–1669) took the light <a href="/encyclopedia/caravaggio">Caravaggio</a> had used as theater and turned it into a decision about what a person will reveal. A face comes forward out of a brown that is not quite dark and not quite air. The embroidery on a sleeve can be a ridge of paint you could weigh in the hand, while the rest of the room is a smear the sitter has not offered you. That is the mechanism, and it is why the late pictures still feel modern. Light is not illumination. It is consent. That last word is the reading. The sequence of the pictures is not. He tested it on the only model who never left. Around forty painted self-portraits, plus etchings and drawings — on the order of eighty images of his own face, the count moving whenever scholarship moves an attribution — run from a young man in costume to an old man who has stopped performing. No painter before him left a serial self-portrait on this scale, running the whole career. The life around the pictures is unusually well documented, and it is not a fable of noble poverty. He was famous young in Amsterdam, married Saskia van Uylenburgh, bought a house he could not carry, and collected with a dealer's appetite. Saskia died in 1642, the year of the militia company of Captain Frans Banning Cocq — the canvas later called the Night Watch, which is not a night scene at all. Varnish darkened it, and the title stuck. He had his son's nurse, Geertje Dircx, confined to a reformatory when their relationship broke. That is in the legal record, and it should dent the kindly-old-master story. Hendrickje Stoffels, the partner of his later years, was summoned by the church for living with him outside marriage. In 1656 he surrendered his goods. The inventory taken then is one of the great documents of a studio. Fashion had moved toward a smooth, bright finish. His paint got thicker and stranger, and the pictures we now rank highest — the late self-portraits, the Syndics of the drapers' guild, the canvas later called the Jewish Bride, its subject still argued — are the ones made after the market had looked away. The nineteenth century turned this into a myth of the misunderstood genius dying in the dark. The record is drier and more interesting. He kept working. The household was rearranged in Hendrickje's and Titus's names so creditors could not take the plates. He was not forgotten so much as out of style. The device, named and separated from its cousins, is on the <a href="/styles/chiaroscuro">chiaroscuro</a> board.</p>`,
    sources: `<p><strong>The record.</strong> For a seventeenth-century painter the paper trail is extraordinary: the 1656 bankruptcy inventory, notarial acts, the church council's summons of Hendrickje (1654), the proceedings that sent Geertje to the house of correction in Gouda, and a handful of letters, the ones to Constantijn Huygens about the Passion series at the core. The etchings are their own archive — states, drypoint burr that wears down, a commercial medium he kept altering as if each plate were still a drawing. The "around forty" and "around eighty" self-portrait counts are scholarly conventions, not a locked census. The Rembrandt Research Project spent decades shrinking and then partly restoring the painted corpus, and "a Rembrandt" is still an argument. He died in 1669 and was buried in the Westerkerk in a grave the family did not own outright, later cleared. That is not the same thing as dying anonymous. The legend that he died unknown is the part to drop.</p><p><strong>The reading.</strong> Light as consent, and the late roughness as a psychological advance rather than a change of handling that his own century called unfinished, is interpretation. What is established is the sequence: early smooth Leiden and Amsterdam pictures, a change of paint, contemporary criticism that the late work looked incomplete, and a reversal of taste long after his death. Recent technical study of the late impasto (a distinctive lead compound in the mix) shows the thickness was a material recipe, not only a mood. It does not by itself prove the psychological reading. It does prove he was inventing a substance, not failing to finish.</p>`,
    related: [
      {
        href: "/encyclopedia/caravaggio",
        label: "Caravaggio",
        note: "The theatrical dark he inherited at one remove, through Utrecht, and then interiorized.",
      },
      {
        href: "/styles/chiaroscuro",
        label: "Chiaroscuro",
        note: "Light-dark as a tool, tenebrism as the extreme, and Rembrandt as the inward case.",
      },
    ],
  },
];

export const entries: Entry[] = [...coreEntries, ...moreEntries].sort((a, b) =>
  a.sortName.localeCompare(b.sortName, "en", { sensitivity: "base" }),
);

export function entryBySlug(slug: string): Entry | undefined {
  return entries.find((entry) => entry.slug === slug);
}
