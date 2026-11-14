import type { StyleBoard } from "./types";

function files(slug: string, stem: string): StyleBoard["downloads"] {
  return [
    {
      href: `/downloads/${slug}/${stem}-starter.html`,
      filename: `${stem}-starter.html`,
      note: "HTML/CSS starter · original study, not a reproduction",
      download: false,
    },
    {
      href: `/downloads/${slug}/${stem}-study.ai`,
      filename: `${stem}-study.ai`,
      note: "Placeholder stub · text brief, not a binary Illustrator file",
      download: true,
    },
    {
      href: `/downloads/${slug}/${stem}-study.psd`,
      filename: `${stem}-study.psd`,
      note: "Placeholder stub · text brief, not a binary Photoshop file",
      download: true,
    },
  ];
}

/**
 * Style boards. Add an object; the page is generated at /styles/{slug}.
 * Gallery plates are captions only. Download files live in public/downloads/{slug}/.
 */
export const styles: StyleBoard[] = [
  {
    slug: "art-nouveau",
    title: "Art Nouveau",
    dates: "c. 1890–1910",
    dek: "Ornament that was supposed to grow instead of quote. Iron, the plant, and the poster — and a dozen names for one short international episode.",
    description:
      "Art Nouveau, roughly 1890 to 1910: whiplash line, Horta's stair, Guimard's Métro, Mucha's posters, and the parallel tracks (Mackintosh, Gaudí, the Secession) that the brand name flattens.",
    tags: ["art nouveau", "jugendstil", "modernisme", "horta", "guimard", "mucha", "mackintosh", "ornament", "1890"],
    history: `<p>Art Nouveau is the short international attempt, roughly 1890 to 1910, to make ornament grow instead of quoting it. The nineteenth century had revived Gothic, Renaissance, and Rococo as costumes. This generation wanted a line that looked as if it had grown — whiplash curves taken from stems, hair, water, and smoke — and a total object: stair, wallpaper, spoon, and poster from one impulse. It does not have one name. France and Belgium say Art Nouveau. Siegfried Bing's Paris shop, opened in 1895, helped fix that phrase; it did not start the style. Germany and Austria say Jugendstil. Catalonia says Modernisme. Italy says Stile Liberty, after a London store. Vienna's Secession overlaps the years and then refuses the vine. Hoffmann and Moser go geometric. Treating all of that as one brand is how the style gets misunderstood.</p><p>The usual opening building is Victor Horta's Hôtel Tassel in Brussels, 1893, where the iron of a townhouse stair bends like a plant and holds the house up. That is the best case: structure and ornament are the same piece of metal. Hector Guimard's Paris Métro entrances, from about 1900, are the mass-produced case — cast iron, civic, already a signature you could repeat. The posters, Alphonse Mucha's above all, spread the line faster than architecture could. They are commercial work, and they are why the style burned out. By 1910 the whiplash was a package, easy to fake, and the next generation called it decadent. Parallel tracks matter. Charles Rennie Mackintosh in Glasgow used the decade's freedom to go spare and vertical, not leafy: nouveau-adjacent, and a critique of it. Antoni Gaudí's Catalan buildings are structural inventions, not French posters. <a href="/styles/ukiyo-e">Japanese prints</a>, already in European studios, fed the flat color and the crop. They are an influence, not the origin. The origin is the iron, the plant, and the poster press.</p>`,
    figures: `<ul>
<li><strong>Victor Horta.</strong> Hôtel Tassel, Brussels, 1893. The stair hall is the textbook, because the iron is structural. Later townhouses (Solvay, van Eetvelde) elaborate the same idea until it is almost too fluent.</li>
<li><strong>Hector Guimard.</strong> Paris Métro entrances, designed from 1899. Cast iron, standardized, and still the face of the style for anyone who has never been inside a Brussels stair hall. Many were removed. The surviving ones are the mass-market case, which is part of the history, not a fall from it.</li>
<li><strong>Alphonse Mucha.</strong> Gismonda, 1894, the Sarah Bernhardt poster that made the line famous, and Job, 1896. A halo of hair, a flat decorative field, type pulled into the ornament. He later spent years on the Slav Epic, which is a different project and should not be filed as a poster.</li>
<li><strong>Émile Gallé and Louis Comfort Tiffany.</strong> Glass, as the material that could actually look grown. Gallé in Nancy, cameo and botanical. Tiffany in New York, Favrile glass and the lamp that later reproduction turned into a cliché. The originals are experiments in color inside a membrane. The gift-shop copies are not evidence against the experiment.</li>
<li><strong>Charles Rennie Mackintosh</strong> and <strong>Antoni Gaudí</strong>, as the necessary corrections. Hill House, Helensburgh, 1902, is Glasgow Style: high-backed, geometric, almost no vine. Gaudí's Casa Batlló and the Sagrada Família are Catalan Modernisme and, in his case, structure. The Glasgow School of Art library, Mackintosh's other famous interior, was gutted by fire in 2014 and again in 2018. Do not describe it as a room you can still see.</li>
</ul>`,
    plates: [
      {
        label: "Plate 01 · structural line",
        caption:
          "Victor Horta, stair hall of the Hôtel Tassel, Brussels, 1893. What belongs here is the iron itself: a tendril that is also a support, mosaic underfoot, the line continuing from banister to wall. Photograph the metal, not a later reproduction.",
      },
      {
        label: "Plate 02 · civic cast iron",
        caption:
          "Hector Guimard, a surviving Paris Métro entrance, about 1900. The whiplash gone into a repeatable casting: lamps like plant stalks, an enamel station name, the style as street furniture. A full entrance, including the base, not a cropped tendril.",
      },
      {
        label: "Plate 03 · the poster",
        caption:
          "Alphonse Mucha, a Bernhardt or Job poster of the 1890s. Describe the halo of hair and the flat field; do not paste the sheet. What the plate has to show is type and figure locked into one ornament, on a vertical format meant for a wall, not a page.",
      },
      {
        label: "Plate 04 · the geometric adjacent",
        caption:
          "Charles Rennie Mackintosh, Hill House, Helensburgh, 1902, or one of the high-backed chairs. Glasgow Style inside the same decades: spare, vertical, a rebuke to the vine. Not the Glasgow School of Art library, which the fires took.",
      },
    ],
    downloads: files("art-nouveau", "art-nouveau"),
    related: [
      {
        href: "/styles/ukiyo-e",
        label: "Ukiyo-e",
        note: "One formal source for the flat color and the crop. Not the origin of the whiplash.",
      },
      {
        href: "/styles/bauhaus",
        label: "Bauhaus",
        note: "The geometric, industrial rejection of grown ornament. A school, not a vine.",
      },
    ],
  },
  {
    slug: "bauhaus",
    title: "Bauhaus",
    dates: "1919–1933",
    dek: "A school, not a font. Weimar craft first, then Dessau geometry — and Helvetica is not from here.",
    description:
      "The Bauhaus was a school with two looks: early Weimar craft, then the Dessau turn toward geometry, steel, and a preliminary course. What it was not: Helvetica, or one painterly manner.",
    tags: ["bauhaus", "gropius", "dessau", "weimar", "modernism", "breuer", "bayer", "albers", "geometry", "type"],
    history: `<p>The Bauhaus was a school, not a style that sprang fully formed in 1919. Walter Gropius opened it in Weimar that April, in the buildings of the old academy and the old school of arts and crafts, and the manifesto still talks like a medieval lodge: craft, the building as the total work, art and making brought back together. The early years look like that sentence. Johannes Itten's preliminary course trained materials and feeling. The workshops were expressionist, handmade, sometimes mystical. The look people now call Bauhaus — primary colors, geometry, a sans serif, a steel tube — arrives after the 1923 turn. Itten left. László Moholy-Nagy took the preliminary course toward photography, light, and industry. Theo van Doesburg was never a master of the school, but he sat in Weimar in 1921–22 teaching De Stijl to anyone who would listen, and the students moved. In 1925 the school moved to Dessau, into a building Gropius designed and the school occupied in 1926. A glass workshop wing is the argument in built form: structure no longer hiding behind a facade.</p><p>It was pushed out of Dessau in 1932 and closed in Berlin in 1933 under Nazi pressure, after Mies van der Rohe had already squeezed it into a smaller, more architectural last phase. Two cautions keep the word usable. Helvetica is not a Bauhaus typeface. It is Swiss, from 1957. Herbert Bayer's Universal alphabet of 1925 is the actual letter-experiment: constructed, single-case, drawn as a proposal, not a font the world then set in metal. And the school was never one manner. Klee and Kandinsky taught there and do not paint "Bauhaus." Anni Albers's weavings are the corrective — a grid that is structure, not a poster. What emigrated, to Moholy-Nagy's New Bauhaus in Chicago and into corporate modernism, was a curriculum and a set of forms, and then a cliché of those forms. This board is for the school: the preliminary course, the Dessau building, the steel chair, the weaving, the type experiment. Visible structure as a later ethic, often confused with this one, is <a href="/styles/brutalism">brutalism</a>.</p>`,
    figures: `<ul>
<li><strong>Walter Gropius.</strong> The Dessau building, designed 1925–26. The workshop wing's glass corner is the plate. He directed the school from 1919 to 1928 and then left. The building is not a logo. It is a curriculum you can walk through: workshops, studios, housing, a bridge that is also the administration.</li>
<li><strong>Marcel Breuer.</strong> The club chair of tubular steel, 1925, later called the Wassily. A familiar upholstered chair redrawn as a continuous line of metal. The point is the redrawing, not the later brand name.</li>
<li><strong>Herbert Bayer.</strong> Universal, 1925, and the typographic posters that drop capitals. An experimental alphabet. The digital "Bauhaus fonts" sold now are pastiches. Say so if you use one.</li>
<li><strong>Anni Albers.</strong> The weaving workshop, and later the hangings made at Black Mountain. Thread as a structural grid. This is the work that stops the style collapsing into posters and chairs.</li>
<li><strong>László Moholy-Nagy</strong>, <strong>Josef Albers</strong>, <strong>Paul Klee</strong>, <strong>Wassily Kandinsky</strong>. Moholy-Nagy: light, photography, the New Vision, and after 1937 the Chicago school. Albers: color study that becomes, much later, Homage to the Square — that series is Black Mountain and Yale, not Dessau, and should be dated honestly. Klee and Kandinsky: masters whose own painting is not the house style. Marianne Brandt's metal workshop lamps are the industrial object at student-and-master scale, and they belong in the list.</li>
</ul>`,
    plates: [
      {
        label: "Plate 01 · the building",
        caption:
          "Walter Gropius, Bauhaus Dessau, the workshop wing, 1925–26. Glass at the corner, the floor slabs reading through, no applied facade. A straight-on corner, in daylight, so the structure is the picture. Not a logo crop.",
      },
      {
        label: "Plate 02 · the chair as a line",
        caption:
          "Marcel Breuer, tubular-steel club chair, 1925 (later called Wassily). The whole chair, from a three-quarter view, so the continuous tube is legible. Canvas or leather straps, not a later fully upholstered rewrite.",
      },
      {
        label: "Plate 03 · the letter experiment",
        caption:
          "Herbert Bayer, a specimen or poster using the Universal alphabet, 1925, lowercase and constructed. What to show is the proposal, beside a note that it was not the school's licensed text face — and that it is not Helvetica.",
      },
      {
        label: "Plate 04 · the grid as cloth",
        caption:
          "Anni Albers, a weaving from the Bauhaus years or the first Black Mountain hangings. Thread, not ink: a grid that is the structure of the object. This plate exists so the board is not only posters.",
      },
    ],
    downloads: files("bauhaus", "bauhaus"),
    related: [
      {
        href: "/styles/brutalism",
        label: "Brutalism",
        note: "A later demand that structure show itself. Often collapsed into this school. It is a different ethic, and mostly a different decade.",
      },
      {
        href: "/styles/art-nouveau",
        label: "Art Nouveau",
        note: "The grown ornament the industrial turn understood itself as replacing.",
      },
    ],
  },
  {
    slug: "brutalism",
    title: "Brutalism",
    dates: "c. 1950–1975",
    dek: "An ethic the public met as a texture. Raw concrete is the image. Honesty of structure came first, and it was not always concrete.",
    description:
      "Brutalism as béton brut and as the Smithsons' New Brutalism: Marseille, Hunstanton, Boston City Hall, SESC Pompéia, and the housing that borrowed the look without the ethic.",
    tags: ["brutalism", "concrete", "architecture", "corbusier", "smithson", "banham", "beton brut", "postwar"],
    history: `<p>Brutalism is an ethic the public met as a texture. The texture is béton brut, raw concrete, left with the mark of the wooden form it was poured into. Le Corbusier made that surface a point of honor at the Unité d'Habitation in Marseille, finished in 1952: the boards show, the joints show, the building tells you how it was cast. The name, though, is British. In the early 1950s Alison and Peter Smithson started talking about a New Brutalism, and Reyner Banham's 1955 essay, then his 1966 book, tried to pin the term down. At the start it did not mean "concrete housing." Hunstanton School, which the Smithsons completed in 1954, is brick, steel, and glass, closer to Mies than to a bush-hammered tower. The ethic was honesty: materials as found, structure legible, services not embarrassed. The image came later, and it stuck — civic centers, campuses, and council estates in raw concrete, from the late 1950s through the 1970s.</p><p>Both halves belong on the board. Boston City Hall, by Kallmann McKinnell &amp; Knowles, completed in 1968, is the monument: a concrete palace that puts its guts on the outside and has been hated and defended in roughly equal measure since. Lina Bo Bardi's SESC Pompéia in São Paulo, 1977–1986, is the social case: an old factory kept, new raw towers added, the concrete used as a room for people rather than a warning to them. The failure mode is real and should be stated plainly. A lot of mass housing borrowed the look without the craft of a careful pour, and then got blamed for social policies — maintenance, poverty, policing — that a surface does not cause. Robin Hood Gardens, the Smithsons' own London estate, came down in 2017. Some of what survived is now preserved and expensive. The reading: if you cannot see how the building was made, it is not this style, however gray it is. If you can see it and it still has no use for a person, the ethic has already left. The school it is sometimes collapsed into is the <a href="/styles/bauhaus">Bauhaus</a>. The decades do not match, and neither does the material.</p>`,
    figures: `<ul>
<li><strong>Le Corbusier.</strong> Unité d'Habitation, Marseille, 1947–1952. The board-marked concrete is the origin of the look. The building is also a housing thesis: a street in the air, a roof as a public terrain. Later work at Chandigarh carries the same raw surface into a capital.</li>
<li><strong>Alison and Peter Smithson.</strong> Hunstanton School, Norfolk, completed 1954: steel frame, brick, glass, services exposed. This is New Brutalism before the concrete cliché. Robin Hood Gardens, London, completed 1972 and demolished from 2017, is the later, contested housing version. Name the demolition if you name the building.</li>
<li><strong>Kallmann McKinnell &amp; Knowles.</strong> Boston City Hall, completed 1968. Civic monument, protruding chambers, raw concrete, a plaza that has been argued over ever since. The plate is the building from the plaza, so the raised public rooms read as masses, not as a texture sample.</li>
<li><strong>Lina Bo Bardi.</strong> SESC Pompéia, São Paulo, 1977–1986. Adaptive reuse of a factory, plus raw towers with irregular openings. Often filed under this heading, and also a critique of the empty brutalist plaza: the structure is a social room.</li>
<li><strong>Also on the shelf, not the whole definition:</strong> Paul Rudolph's Yale Art and Architecture Building, Ernő Goldfinger's Trellick Tower, Moshe Safdie's Habitat 67, Clorindo Testa's Banco de Londres in Buenos Aires. Metabolism in Japan (Kurokawa and others) is adjacent and is not the same movement.</li>
</ul>`,
    plates: [
      {
        label: "Plate 01 · the pour",
        caption:
          "Le Corbusier, Unité d'Habitation, Marseille, finished 1952. A wall close enough to read the board-marks of the formwork, and wide enough to show the unit of the housing. Béton brut as a decision, not as weathering alone.",
      },
      {
        label: "Plate 02 · before the cliché",
        caption:
          "Alison and Peter Smithson, Hunstanton School, Norfolk, completed 1954. Brick, steel, glass. Water tank and trusses visible. The ethic without the concrete image. Do not substitute a bush-hammered housing block and call it the same thing.",
      },
      {
        label: "Plate 03 · the civic monument",
        caption:
          "Kallmann McKinnell & Knowles, Boston City Hall, completed 1968, seen from the plaza. The protruding council chamber and the concrete piers. A building that announces its parts. Include the ground, so it is not only a facade crop.",
      },
      {
        label: "Plate 04 · the social room",
        caption:
          "Lina Bo Bardi, SESC Pompéia, São Paulo, 1977–1986. The raw towers and the walkways between them, with the old factory still in the picture. Concrete used as a place people occupy. The counterexample to a hostile empty plaza.",
      },
    ],
    downloads: files("brutalism", "brutalism"),
    related: [
      {
        href: "/styles/bauhaus",
        label: "Bauhaus",
        note: "The earlier school of visible structure. Not the same ethic, and not concrete housing.",
      },
    ],
  },
  {
    slug: "chiaroscuro",
    title: "Chiaroscuro",
    dates: "Broadly after 1400; tenebrism c. 1590–1650",
    dek: "Light-dark as a tool. Tenebrism is the extreme: a hard beam in a true dark. The printmaking term is a different art.",
    description:
      "Chiaroscuro, from gentle Renaissance modeling to Caravaggio's tenebrism and Rembrandt's inward dark, plus the separate history of the chiaroscuro woodcut.",
    tags: ["chiaroscuro", "tenebrism", "caravaggio", "rembrandt", "light", "baroque", "gentileschi", "woodcut"],
    history: `<p>Chiaroscuro — light-dark — is the modeling of a form by a strong jump in value. In that broad sense it is everywhere in European painting after 1400, and <a href="/styles/sfumato">Leonardo's smoky gradation</a> is a soft cousin of it. The style this board means is the dramatic use: light as an event in a dark field. The extreme has its own name, tenebrism, from the Italian for dark, and the painter who made it a method is <a href="/entries/caravaggio">Caravaggio</a>. In the Calling of Saint Matthew a shaft enters a black room and the story is who it hits. He built that look from life, not from a shelf of ideal nudes: models in a darkened studio, poses marked straight on the canvas, almost no surviving drawings.</p><p>The word is older than he is, and it also means something else. In the 1510s Ugo da Carpi and others printed chiaroscuro woodcuts, color prints built from tone blocks. Same word, different art. Keeping them apart is the difference between a technique and a mood. After Caravaggio the picture-dark spread fast and unevenly. Artemisia Gentileschi used it so a violent action would read. She was not his student. She came to that light through Rome and through her father Orazio. Georges de La Tour cooled it into candlelight and geometry. In the Dutch Republic, painters from Utrecht — Honthorst above all — carried the Caravaggesque north, and <a href="/entries/rembrandt-van-rijn">Rembrandt</a> turned the device inward. His darkness is not a stage black. It is the part of a person the sitting did not grant you. The reading to keep: chiaroscuro is the tool, tenebrism is the extreme, and not every dark painting is a Caravaggio.</p>`,
    figures: `<ul>
<li><strong>Caravaggio.</strong> Calling of Saint Matthew, Contarelli Chapel, San Luigi dei Francesi, Rome, 1599–1600: the beam. Beheading of Saint John the Baptist, Oratory of the Co-Cathedral, Valletta, 1608: a void of dark, and the only signature he painted, set into the blood. The encyclopedia entry is the life that produced the method.</li>
<li><strong>Artemisia Gentileschi.</strong> Judith Slaying Holofernes, the Naples version around 1612–13 and the Uffizi version around 1620. Light used so you can follow the arms, the blood, and the effort. Do not call her a Caravaggio pupil. Do not reduce the pictures to biography, either. The light is a technical decision you can describe without the courtroom.</li>
<li><strong>Georges de La Tour</strong> and <strong>Gerrit van Honthorst</strong>. La Tour: a candle as the only source, faces built from a few values, mostly the 1630s and 1640s. Honthorst: the Roman dark brought home to Utrecht, night scenes so identified with him that Italy called him Gherardo delle Notti.</li>
<li><strong>Rembrandt.</strong> A late self-portrait — the 1659 Washington canvas, or one of the last, such as the 1669 London picture — where the ground is brown rather than theatrical black, and the face decides what to give up. The Syndics, 1662, for light across a group rather than a single saint. His entry is the life and the inventory; this board is the device.</li>
<li><strong>Ugo da Carpi</strong>, separately. A chiaroscuro woodcut of the 1510s or 1520s, printed from tone blocks. Put it on the board so the word does not quietly change meanings.</li>
</ul>`,
    plates: [
      {
        label: "Plate 01 · the beam",
        caption:
          "Caravaggio, Calling of Saint Matthew, 1599–1600, Contarelli Chapel. The whole lunette-less rectangle: the shaft from the right, the pointing hand, the coin on the table, and the amount of canvas that is simply dark. Not a spotlight crop that hides how much is unlit.",
      },
      {
        label: "Plate 02 · the signature",
        caption:
          "Caravaggio, Beheading of Saint John the Baptist, Valletta, 1608. Include the empty dark above the figures and the signature written in the blood. The plate is about how much of the picture is refusal.",
      },
      {
        label: "Plate 03 · action that has to read",
        caption:
          "Artemisia Gentileschi, Judith Slaying Holofernes, Uffizi, around 1620. Arms, blood, and the two women braced against the body, picked out of a dark field. A full view of the canvas, so the light is seen organizing the struggle.",
      },
      {
        label: "Plate 04 · the inward case",
        caption:
          "Rembrandt, a late self-portrait (1659, Washington, or 1669, London). The brown ground, the face half-offered, no stage beam. Pair it mentally with plate 01: same family of value, a different job for the dark.",
      },
    ],
    downloads: files("chiaroscuro", "chiaroscuro"),
    related: [
      {
        href: "/entries/caravaggio",
        label: "Caravaggio",
        note: "The life, the criminal archive, and the method of painting from a darkened room.",
      },
      {
        href: "/entries/rembrandt-van-rijn",
        label: "Rembrandt",
        note: "The dark turned inward, plus the inventory and the late paint.",
      },
      {
        href: "/styles/sfumato",
        label: "Sfumato",
        note: "The dissolved edge this extreme refuses.",
      },
    ],
  },
  {
    slug: "sfumato",
    title: "Sfumato",
    dates: "c. 1490–1520, and the later rhyme",
    dek: "The edge that was never drawn. Smoke instead of a contour — Leonardo's instruction, and a word the period did not use as a brand.",
    description:
      "Sfumato is the dissolved edge in painting: Leonardo's smoke-like modeling, aerial perspective, what Correggio and Giorgione took from the softness, and what later soft focus only rhymes with.",
    tags: ["sfumato", "leonardo", "renaissance", "edge", "glaze", "smoke", "correggio", "giorgione"],
    history: `<p>Sfumato is the soft edge: the contour thinned until form and air are the same substance. The word is Italian, from sfumare, to tone down, to vanish like smoke. It is not a movement and not a school. It is a decision about the boundary of a body, worked out in Florence and Milan at the end of the fifteenth century and the start of the sixteenth, and associated above all with <a href="/entries/leonardo-da-vinci">Leonardo da Vinci</a>. Painters had glazed flesh before him. Jan van Eyck built faces from oil so thin the surface looks continuous. Leonardo's teacher Verrocchio modeled form with a firm, legible edge. Leonardo's step was to let that edge fail on purpose, especially where a cheek turns, where a mouth closes, and where distance fills with air. He had a name for the distance part too: aerial perspective, contrast and color dying as the atmosphere thickens. Sfumato is the near version of the same idea. The far mountains in the Mona Lisa and the smile are one argument.</p><p>The notes were not a book in his lifetime. Francesco Melzi compiled them afterward into what we call the Treatise on Painting, and there the instruction sits: no lines or borders, smoke rather than a drawing. Later painters took the softness without the research. Correggio, in Parma, used it for flesh that seems to exhale. Giorgione's pastoral pictures dissolve in a related way, though which panels are his is itself a fight. The modern echoes — pictorialist photography, a portrait retoucher's soft brush, a gradient that refuses a hard seam — are analogies, not a lineage. They rhyme. They do not descend in a straight line. The hard opposite, a beam in a true dark, is <a href="/styles/chiaroscuro">chiaroscuro</a>. Use this board for the original move: an edge that has to be built, because it was never drawn.</p>`,
    figures: `<ul>
<li><strong>Leonardo da Vinci.</strong> Mona Lisa (Louvre), begun around 1503 and worked on for years, the face as the demonstration piece. Virgin of the Rocks: the Louvre version, traditionally placed in the mid-1480s, and the London version, delivered in 1508. Which panel came first, and how much of the London picture is his hand rather than the workshop, is still argued. Saint John the Baptist (Louvre), about 1513–16, where the softness tips toward blur and shows the method's risk. The encyclopedia entry is the reason the method exists. This list is the pictures.</li>
<li><strong>Correggio (Antonio Allegri).</strong> Jupiter and Io, about 1532, in Vienna: a body dissolving into cloud. The Parma domes take the same flesh-and-air up to architectural scale. He is what the softness looks like once it is no longer a research program.</li>
<li><strong>Giorgione.</strong> The Tempest, about 1508, in Venice: weather as the bond between the figures. His corpus is small and unstable. Say so before you hang a second picture on his name. The Sleeping Venus in Dresden was finished by Titian. That sentence matters.</li>
<li><strong>An analogy, not a member.</strong> Pictorialist photography around 1900, soft focus as a declared rejection of the sharp lens. Useful when teaching the edge. It is not a Renaissance technique and it is not evidence that the photographers had read Melzi's compilation.</li>
</ul>`,
    plates: [
      {
        label: "Plate 01 · the mouth",
        caption:
          "Leonardo, Mona Lisa, a detail of the mouth, cheek, and the corner of the eye. What the plate has to show is the absence of a contour: flesh turning into shadow by steps too small to count. Include enough of the landscape edge to show the same idea at distance. Do not use a sharpened reproduction that puts the line back.",
      },
      {
        label: "Plate 02 · air as a subject",
        caption:
          "Leonardo, Virgin of the Rocks, Louvre version. The grotto, the gap between the figures, the blue that dies as it goes back. This plate is atmosphere, not a face. If both versions are shown, label London separately and say the workshop question out loud.",
      },
      {
        label: "Plate 03 · what the edge refused",
        caption:
          "A comparison crop. On one side a late-fifteenth-century Florentine profile with a hard, drawn contour (a Ghirlandaio or a Pollaiuolo is the right kind of comparison). On the other, a Leonardo cheek at the same scale. The point is the contour that one picture trusts and the other will not draw.",
      },
      {
        label: "Plate 04 · softness after the research",
        caption:
          "Correggio, Jupiter and Io, about 1532. Flesh dissolving into cloud, desire painted as a loss of edge. Label it as the method detached from Leonardo's notebooks. It is not a copy of a Leonardo, and it is not pictorialist photography — that rhyme can be a fifth plate later, clearly marked as an analogy.",
      },
    ],
    downloads: files("sfumato", "sfumato"),
    related: [
      {
        href: "/entries/leonardo-da-vinci",
        label: "Leonardo da Vinci",
        note: "Anatomy, the water studies, and why the edge was allowed to fail.",
      },
      {
        href: "/styles/chiaroscuro",
        label: "Chiaroscuro",
        note: "The hard event in a dark field. The other answer to the same question about light.",
      },
    ],
  },
  {
    slug: "ukiyo-e",
    title: "Ukiyo-e",
    dates: "c. 1670s–1890s",
    dek: "Pictures of the floating world, made by a team. A designer, a carver, a printer, a publisher — popular art that Europe later filed as refinement.",
    description:
      "Ukiyo-e as a collaborative woodblock system: Moronobu to Harunobu, Utamaro, Sharaku, Hokusai, and Hiroshige, and the Japonisme that followed a popular medium, not a secret tradition.",
    tags: ["ukiyo-e", "edo", "japan", "print", "hokusai", "hiroshige", "utamaro", "woodblock", "japonisme"],
    history: `<p>Ukiyo-e means pictures of the floating world: the pleasure quarters, the theater, the fashions, and later the landscape of early modern Japan, above all Edo. It is a commercial print system, not a painter's private style. A publisher commissioned the sheet, an artist drew the design, a carver cut cherrywood blocks — one for the black key, others for the colors — and a printer rubbed the impression. The name on the print is usually the designer's. The object is the group's. Early sheets, from the late seventeenth century, with Moronobu as the conventional start, were mostly black and white, then hand-colored. Full-color printing, nishiki-e, becomes reliable with Suzuki Harunobu's luxury calendars of 1765.</p><p>What the West later treated as a refined national aesthetic was popular art, often cheap, often censored, sold to people who went to the kabuki and the Yoshiwara. The great designers are a sequence of solutions. Harunobu: intimate, small, full color. Utamaro: the bust-length beauty, a face as a pattern of flat shapes. Sharaku: actor portraits made in a burst of about ten months in 1794–95, then a career that vanishes. The vanishing is real. The theories are not equal. <a href="/entries/katsushika-hokusai">Hokusai</a> and Hiroshige, in the 1830s and after, turn landscape into the subject, and Hokusai's Fuji series builds it on Prussian blue, a synthetic pigment newly arriving in quantity. By the time those prints were teaching Paris how to crop a picture and how to let a flat color sit, the medium was already being discarded at home, under photography and the newspaper. Japonisme is a true influence on later European design, including <a href="/styles/art-nouveau">Art Nouveau</a>. It is not the discovery of a secret tradition. It is what happens when a popular form hits a different set of eyes.</p>`,
    figures: `<ul>
<li><strong>Hishikawa Moronobu.</strong> Late seventeenth century, monochrome albums and sheets of the pleasure quarters. The conventional start of the picture-of-the-floating-world as a product. Not yet the full-color object people mean by the word.</li>
<li><strong>Suzuki Harunobu.</strong> The 1765 color calendars and the intimate prints that follow, until his death in 1770. The technical event is nishiki-e: separate blocks, a full palette, registration that holds.</li>
<li><strong>Kitagawa Utamaro.</strong> Bust-length portraits of women in the 1790s, faces reduced to a few flat shapes, backgrounds often empty. Okubi-e, the large-head print. He was punished by the censors in 1804. The prints are the point, not the later romantic biography.</li>
<li><strong>Tōshūsai Sharaku.</strong> Around 140 actor prints, most of them from the 1794–95 season, and then nothing certain. A real disappearance. Do not pick a pet theory (a secret identity, a ban, a return under another name) and state it as the ending.</li>
<li><strong>Katsushika Hokusai</strong> and <strong>Utagawa Hiroshige</strong>. Hokusai's Thirty-Six Views of Mount Fuji, about 1830–32, forty-six designs in all, published by Nishimuraya Yohachi: the Wave, South Wind, Clear Sky, Ejiri. Hiroshige's Fifty-Three Stations of the Tōkaidō, the Hōeidō edition of the early 1830s, and One Hundred Famous Views of Edo, 1856–58, including Sudden Shower over Shin-Ōhashi and Atake (1857). Weather as a subject. Hiroshige died in 1858. The encyclopedia entry on Hokusai is the designer inside this system.</li>
</ul>`,
    plates: [
      {
        label: "Plate 01 · force, printed",
        caption:
          "Hokusai, Under the Wave off Kanagawa, from Thirty-Six Views of Mount Fuji, about 1831. The whole sheet, including the margin and any collector's seal, so it reads as a print. Prussian blue, the curl as a diagram, Fuji small and still. Not a cropped crest turned into a logo.",
      },
      {
        label: "Plate 02 · weather as a flat shape",
        caption:
          "Hokusai, South Wind, Clear Sky — Red Fuji — from the same series. The cone reduced to flat red, blue, and the key block. A lesson in how little information a print needs. Show the full sheet.",
      },
      {
        label: "Plate 03 · rain as a stroke",
        caption:
          "Hiroshige, Sudden Shower over Shin-Ōhashi and Atake, 1857, from One Hundred Famous Views of Edo. Black rain strokes over a flat bridge, figures reduced to angles of cloth. Weather is the subject. The vertical format is part of the design.",
      },
      {
        label: "Plate 04 · the object is a team",
        caption:
          "A key block and one color block for a single design, or a sheet photographed so the kentō registration marks are visible. What belongs here is the making: cherrywood, a printer's baren, separate impressions. Not another famous landscape. The plate exists to stop the style being filed as one person's painting.",
      },
    ],
    downloads: files("ukiyo-e", "ukiyo-e"),
    related: [
      {
        href: "/entries/katsushika-hokusai",
        label: "Hokusai",
        note: "The designer of the Fuji series, the Manga, and the daughter who worked beside him.",
      },
      {
        href: "/styles/art-nouveau",
        label: "Art Nouveau",
        note: "A later European style that took the flat color and the crop, and was not the same thing.",
      },
    ],
  },
];

export function styleBySlug(slug: string): StyleBoard | undefined {
  return styles.find((style) => style.slug === slug);
}
