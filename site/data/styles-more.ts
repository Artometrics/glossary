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

/** Style boards added after the first six. Merged into `styles`. */
export const moreStyles: StyleBoard[] = [
  {
    slug: "abstract-expressionism",
    title: "Abstract Expressionism",
    dates: "c. 1943–1960",
    dek: "A critic's name for at least two ways of painting. The pour and the color field are not the same act. Neither was a government order.",
    description:
      "Abstract Expressionism as a New York argument, not a look: gesture and color field, Rosenberg against Greenberg, the Ninth Street show, and the overstated story about the CIA.",
    tags: ["abstract expressionism", "pollock", "rothko", "newman", "krasner", "new york", "action painting"],
    history: `<p>Abstract Expressionism is a critic's convenience for a New York decade, roughly the mid-1940s to about 1960, in which a group of painters decided the picture no longer had to depict and no longer had to come from Paris. They did not sign a manifesto. They drank at the Cedar Tavern, argued at The Club, and in 1951 hung the Ninth Street show. The name covers at least two operations. One is the gesture: <a href="/encyclopedia/jackson-pollock">Pollock</a> pouring, de Kooning's women scraped back and forth, Kline's black on white. Harold Rosenberg's 1952 essay "The American Action Painters" describes that camp and only that camp. The other is the field: <a href="/encyclopedia/mark-rothko">Rothko's</a> stacks, Barnett Newman's zip, Clyfford Still's jagged fields. Those painters were not acting out a drama of the arm. They were asking a large color to do something to a person standing close.</p><p>Clement Greenberg's account, that the point was flatness and the medium, made several careers and was resisted by painters who thought they were painting tragedy. Both critics are part of the reception. Neither is the method. Scale is the shared material fact: the canvas gets large enough that the viewer's body is inside the picture's reach. The Cold War story needs a steady hand. Later historians have shown that American institutions promoted the style abroad, and that some of those channels touched the CIA's cultural programs. The painters were not issued a brief. Several had come through the WPA and the left. Promotion is not a cause. A parody of a drip is easy. A field that holds together when you stand back is not, which is why the all-over picture and the stacked rectangle should not be taught as one recipe. The starter file on this board is the gesture. The field is the other half, and it is not in that file.</p>`,
    figures: `<ul>
<li><strong><a href="/encyclopedia/jackson-pollock">Jackson Pollock</a>.</strong> The poured pictures from about 1947, enamel on unstretched canvas. Autumn Rhythm (1950) and One: Number 31, 1950 are the fields to describe. Mural (1943), for Peggy Guggenheim, is earlier and was not painted in a single night, whatever the story says.</li>
<li><strong>Lee Krasner.</strong> Collage and all-over pictures of her own, long filed as the wife. The Little Image series of the late 1940s is the corrective. She is also the person who could see the drawing inside his pour. Those are two different facts. Do not collapse them.</li>
<li><strong><a href="/encyclopedia/mark-rothko">Mark Rothko</a></strong> and <strong>Barnett Newman</strong>. Rothko: the classic stacks from about 1949, and the chapel pictures, which are a different, darker job. Newman: Vir Heroicus Sublimis (1950–51), a red field divided by zips. He wrote more theory than Rothko did, and he meant it.</li>
<li><strong>Willem de Kooning</strong> and <strong>Joan Mitchell</strong>. De Kooning's Excavation (1950) and the Woman series are the gesture with a body still in it. Mitchell, a generation in, is the painter who makes "it was only the men" false. Her large landscapes of the 1950s and after are not a footnote to his.</li>
<li><strong>Not the whole definition:</strong> Frankenthaler's soak-stain is adjacent and usually filed later, as color-field or post-painterly. Do not start the story with her, and do not leave her out of the aftermath.</li>
</ul>`,
    plates: [
      {
        label: "Plate 01 · the field of the arm",
        caption:
          "Jackson Pollock, Autumn Rhythm or One: Number 31, 1950. The whole canvas, edge to edge, so the crop is visible and no ribbon is asked to be a figure. Include enough width that the all-over reading is checkable. Not a detail of one drip turned into a logo.",
      },
      {
        label: "Plate 02 · revision, not a stunt",
        caption:
          "Jackson Pollock, Mural, 1943. Large enough to show the layers. The plate exists to retire the one-night legend: the surface was worked, not performed once for a patron.",
      },
      {
        label: "Plate 03 · the other operation",
        caption:
          "Mark Rothko, a classic stack of the early 1950s, or one of the Seagram murals. Soft rectangles, thin color, no gesture of the arm. Hung so a viewer could stand close. Label it as the field, not as a drip that calmed down.",
      },
      {
        label: "Plate 04 · the zip, and the women painters",
        caption:
          "Either Barnett Newman, Vir Heroicus Sublimis, 1950–51, a field cut by a vertical, or Joan Mitchell, a large painting of the 1950s. If Newman, the zip has to be seen as a division of a field, not as a stripe on a product. If Mitchell, do not crop it into a corner of brushwork.",
      },
    ],
    downloads: files("abstract-expressionism", "abstract-expressionism"),
    related: [
      {
        href: "/encyclopedia/jackson-pollock",
        label: "Jackson Pollock",
        note: "The pour, the enamel, and the crash the lone-genius ending forgets to count.",
      },
      {
        href: "/encyclopedia/mark-rothko",
        label: "Mark Rothko",
        note: "The stack, the restaurant he refused, and the chapel.",
      },
    ],
  },
  {
    slug: "cubism",
    title: "Cubism",
    dates: "c. 1908–1914",
    dek: "More than one view of a thing, in a shallow space. Then the thing itself — a scrap of printed oilcloth, a piece of paper — gets pasted in. The name was a critic's.",
    description:
      "Cubism as an investigation shared by Picasso and Braque: analytic facets, the 1912 break into collage, Gris, and the book written by painters who were not the inventors.",
    tags: ["cubism", "picasso", "braque", "collage", "gris", "analytic", "synthetic"],
    history: `<p>Cubism is the investigation, shared by <a href="/encyclopedia/pablo-picasso">Pablo Picasso</a> and Georges Braque from about 1908 to 1914, of how much of an object you can show once you refuse a single viewpoint. A glass seen from the rim and from the side, a violin scroll beside a sound-hole that could not be visible at the same moment, the whole thing pushed up to the surface so the picture is a shallow box rather than a window. <a href="/encyclopedia/paul-cezanne">Cézanne's</a> late landscapes were the permission, not the instructions. He had let each look stay separate. They made the separation the subject. The word was not theirs. Louis Vauxcelles wrote of cubes in 1908, about Braque's landscapes, and Matisse is said to have used the phrase first in conversation. A nickname from outside is how this movement, like <a href="/styles/impressionism">Impressionism</a>, got the name it kept.</p><p>Two stages get flattened into the word, and they should not be. Analytic cubism, about 1910 to early 1912, facets the object in a narrow range of ochres and grays. The picture is still painted. Synthetic cubism starts when real material comes in. In the spring of 1912 Picasso pasted printed oilcloth into a still life. Later that year Braque pasted pieces of paper printed with wood grain. Collage is the material break: the world supplies a scrap, and the picture assembles it. Juan Gris arrives in 1912 and makes the grammar legible, almost architectural. Gleizes and Metzinger published Du Cubisme the same year. It is the theory book of the outer circle. Picasso and Braque declined to explain themselves that way. Les Demoiselles d'Avignon (1907) is earlier than the shared investigation and was not the public start of it. African masks and Iberian sculpture are sources for those faces, seen in a Paris museum because of an empire. Say so. Do not say the masks "are" cubism.</p>`,
    figures: `<ul>
<li><strong>Pablo Picasso and Georges Braque.</strong> Treat them as a pair through 1914. Picasso's Still Life with Chair Caning (spring 1912) is the oilcloth. Braque's Fruit Dish and Glass (September 1912) is the pasted paper. Analytic pictures of 1910–11, often unsigned because the hands were hard to separate, are the faceted case. The encyclopedia entry is Picasso's life. This list is the method.</li>
<li><strong>Juan Gris.</strong> Portrait of Picasso (1912) and the still lifes of 1913–15. He takes the shallow space and makes it readable, with a structure you can almost build. He is not a follower who watered it down. He is the painter who showed what the grammar could hold.</li>
<li><strong>Paul Cézanne.</strong> The late views of Mont Sainte-Victoire, as the passage both of them cited. Not a cubist. The entry is the reason the passage exists.</li>
<li><strong>Albert Gleizes and Jean Metzinger,</strong> as the authors of Du Cubisme (1912), and <strong>Fernand Léger</strong>, whose cylinders are adjacent and more tubular than the Picasso–Braque still life. The book is not the studio. Léger is not a substitute for Braque.</li>
<li><strong>Pablo Picasso, Les Demoiselles d'Avignon, 1907,</strong> separately. A studio picture, first shown in 1916. Proto-cubist is the fair label. Calling it the first cubist painting skips the collaboration that actually made the method.</li>
</ul>`,
    plates: [
      {
        label: "Plate 01 · more than one side",
        caption:
          "Georges Braque or Pablo Picasso, an analytic still life of 1910 or 1911. The whole canvas: a narrow ochre-gray range, a glass or a violin that will not settle into one view, and the shallow space. Not a cropped facet that could be anything.",
      },
      {
        label: "Plate 02 · the scrap enters",
        caption:
          "Pablo Picasso, Still Life with Chair Caning, 1912. Include the rope edge and the printed oilcloth, so the plate shows a real industrial pattern pasted in, not a skillful imitation of one.",
      },
      {
        label: "Plate 03 · paper, not oilcloth",
        caption:
          "Georges Braque, a papier collé of 1912–14, wood-grain paper and charcoal. The companion to plate 02, and not the same invention. The printed grain has to be recognizable as paper.",
      },
      {
        label: "Plate 04 · the grammar, legible",
        caption:
          "Juan Gris, a still life of 1913–15. Planes that meet like a construction, a table that reads, color let back in. Label it as the clarification, not as a later decorative cubism.",
      },
    ],
    downloads: files("cubism", "cubism"),
    related: [
      {
        href: "/encyclopedia/pablo-picasso",
        label: "Pablo Picasso",
        note: "The life, Guernica, and the conduct the formal story leaves out.",
      },
      {
        href: "/encyclopedia/paul-cezanne",
        label: "Paul Cézanne",
        note: "The separate looks they took as permission.",
      },
    ],
  },
  {
    slug: "de-stijl",
    title: "De Stijl",
    dates: "1917–1931",
    dek: "A magazine, not a school. The right angle and the three primaries, until one of the editors tipped the line and the other editor left.",
    description:
      "De Stijl as a doctrine and a friendship that broke: Mondrian, van Doesburg's diagonal, Rietveld's chair and the Schröder House, and the distance from the Bauhaus.",
    tags: ["de stijl", "mondrian", "doesburg", "rietveld", "neoplasticism", "primary", "utrecht"],
    history: `<p>De Stijl is a magazine and a set of friendships, founded in the Netherlands in 1917 by Theo van Doesburg, with <a href="/encyclopedia/piet-mondrian">Piet Mondrian</a>, Bart van der Leck, Vilmos Huszár, and the architect J. J. P. Oud among the early names. It is not a school with a building. The doctrine, which Mondrian called neoplasticism, is severe: only the horizontal and the vertical, only the primaries plus black, white, and gray, no representation. A picture is an equilibrium of rectangles. A chair or a house can be the same equilibrium, built at another size. Van Doesburg sat in Weimar in 1921–22 and taught the doctrine to <a href="/styles/bauhaus">Bauhaus</a> students without ever being on the faculty. The influence is real. The institutions are not the same. The Bauhaus passed through several doctrines and ended as a school of building. De Stijl was a rule about the right angle.</p><p>The rule is also the breakup. In the mid-1920s van Doesburg introduced the diagonal and called it Elementarism. Mondrian left. Whether a tipped rectangle destroys a philosophy is not a question the pictures can settle. That the two men treated it as fatal to the collaboration is the history. Gerrit Rietveld's Schröder House in Utrecht (1924) is the architecture where the planes become rooms a person can walk through. His Red and Blue Chair was designed in 1918 and painted in the primaries a few years later. Do not collapse those dates into one object that sprang out colored. Van Doesburg's last large interior, the Aubette in Strasbourg (1926–28), done with Hans Arp and Sophie Taeuber, is the diagonal in a room, and it is not Mondrian's rules. The movement's end is usually put at van Doesburg's death in 1931. The look continued as a design language, on posters and products, and that afterlife is not the magazine. The reading: if a diagonal appears, you are looking at the argument that split the group, or at something later. You are not looking at Mondrian.</p>`,
    figures: `<ul>
<li><strong>Piet Mondrian.</strong> The tree paintings, as the reduction happening slowly; Composition with Red, Blue, and Yellow of the 1930s, as the equilibrium; Broadway Boogie Woogie (1942–43), where the black line breaks into color after he had left the magazine and the country. The encyclopedia entry is the life and the Theosophy. This list is the rule.</li>
<li><strong>Theo van Doesburg.</strong> The magazine's engine, and the painter of Counter-Compositions in the mid-1920s, rectangles tipped. Also the Aubette. He is not a heretic in a story Mondrian owns. He co-authored the doctrine and then changed it.</li>
<li><strong>Gerrit Rietveld.</strong> The Red and Blue Chair, frame of 1918, primary colors by about 1923. The Schröder House, Utrecht, 1924, with Truus Schröder: sliding planes, a corner window, primary color used as structure rather than as trim. The house is the picture at the scale of a life.</li>
<li><strong>Bart van der Leck</strong> and <strong>Vilmos Huszár</strong>. Van der Leck's flat, bounded figures are the reduction from the other direction, and he quarreled with the stricter rule. Huszár's early covers for the magazine are the graphic case. Neither is a Mondrian with the name filed off.</li>
</ul>`,
    plates: [
      {
        label: "Plate 01 · the equilibrium",
        caption:
          "Piet Mondrian, a composition of the late 1920s or the 1930s with red, yellow, blue, and black lines on white. The whole canvas, including the white he kept adjusting. No diagonal. Not a crop that turns the grid into a pattern swatch.",
      },
      {
        label: "Plate 02 · the line breaks",
        caption:
          "Piet Mondrian, Broadway Boogie Woogie, 1942–43. Small units of color where the black line used to be. Label the date, so it is not taught as the 1920s doctrine. It is what happened after New York.",
      },
      {
        label: "Plate 03 · the object",
        caption:
          "Gerrit Rietveld, Red and Blue Chair. The whole chair, three-quarter view, so the frame reads as independent planes and the color reads as those planes, not as upholstery. Note that the color came after the first frame.",
      },
      {
        label: "Plate 04 · the room, or the split",
        caption:
          "Either the Schröder House, Utrecht, 1924, a corner with the window open so inside and outside planes meet, or a van Doesburg Counter-Composition, clearly diagonal. If the house, include a person-scaled opening. If the diagonal, label it as the break, not as a Mondrian.",
      },
    ],
    downloads: files("de-stijl", "de-stijl"),
    related: [
      {
        href: "/encyclopedia/piet-mondrian",
        label: "Piet Mondrian",
        note: "The painter who left over a diagonal, and the tape still on the last picture.",
      },
      {
        href: "/styles/bauhaus",
        label: "Bauhaus",
        note: "The school van Doesburg taught at without joining. A different institution.",
      },
    ],
  },
  {
    slug: "impressionism",
    title: "Impressionism",
    dates: "Exhibitions 1874–1886",
    dek: "A shared refusal of the Salon, and a critic's insult that stuck. Not a recipe, and not the same thing as painting outdoors.",
    description:
      "Impressionism as eight exhibitions and a broken touch: Monet's series, the painters who do not fit (Degas, Manet), Morisot and Cassatt, and the studio work the plein-air myth leaves out.",
    tags: ["impressionism", "monet", "degas", "morisot", "cassatt", "pissarro", "plein air", "1874"],
    history: `<p>Impressionism is eight exhibitions in Paris, from 1874 to 1886, organized by painters who were tired of the Salon's jury. It is not a manifesto and not a technique you can define from the name. The name is a sneer. Louis Leroy, in Le Charivari in 1874, took the title of <a href="/encyclopedia/claude-monet">Monet's</a> Impression, Sunrise and made it the joke. The picture is a sketch of Le Havre, painted in 1872. The group kept the insult because the alternative was to keep being refused. The shared tendencies are real and easy to over-unify: a contemporary subject, a broken touch of separate colors, a willingness to let a picture look unfinished by academic standards, and often a motif observed in the open. Often is the word to keep. Canvases were reworked indoors. The series Monet painted in the 1890s — stacks, a cathedral facade — are compositions of light, not stopwatch records.</p><p>The list of members is a list of exceptions. Edgar Degas showed with them and hated the plein-air program. He worked from drawings, indoors, and thought of himself as a realist. Édouard Manet is the parent of the modern subject and never exhibited with the group. He wanted the Salon. Berthe Morisot and Mary Cassatt were central exhibitors, not guests. <a href="/encyclopedia/paul-cezanne">Cézanne</a> showed early and is not contained by the label. <a href="/encyclopedia/georges-seurat">Seurat</a> appeared at the last exhibition, in 1886, and his dots are a different theory. <a href="/encyclopedia/jmw-turner">Turner</a> had painted weather as the subject decades earlier. He is not an Impressionist who arrived too soon. The reading: use the word for the exhibitions, the broken touch, and the modern-day motif. Do not use it for every soft landscape, and do not use it for Manet.</p>`,
    figures: `<ul>
<li><strong>Claude Monet.</strong> Impression, Sunrise (1872, shown 1874). The haystack and Rouen series of the early 1890s, as the method becoming a series. The water lilies, as the motif he built in order to keep painting it. The entry is the life, the cataracts, and the studio revision.</li>
<li><strong>Edgar Degas.</strong> The dance classes and the pastels of women bathing, the 1870s through the 1890s. Odd crops, indoor space, drawing underneath. The plate has to show that he is in the exhibitions and outside the plein-air story.</li>
<li><strong>Berthe Morisot.</strong> The Cradle (1872) and the pictures of women and children that are not sentimental in the way the subject predicts. She was in the first exhibition and most of the ones after. A history that starts with seven men and adds her is wrong.</li>
<li><strong>Mary Cassatt</strong> and <strong>Camille Pissarro</strong>. Cassatt's At the Opera (1878) or The Child's Bath (1893): a modern woman as a subject with a mind, not as a view. Pissarro: the painter who held the group together, including the invitation to Seurat in 1886, and whose boulevards of the 1890s are the city as weather.</li>
<li><strong>Pierre-Auguste Renoir,</strong> as the figure of the split. The Bal du moulin de la Galette (1876) is the open-air group. By the 1880s he had turned against the broken touch and gone back to drawing. If you only show 1876, you teach a painter who then changed his mind.</li>
</ul>`,
    plates: [
      {
        label: "Plate 01 · the insult",
        caption:
          "Claude Monet, Impression, Sunrise, 1872. The whole sketch: orange sun, blue-green water, a boat noted in a few touches. Label it as a sketch that a critic used as a name. Not a finished program, and not a dot picture.",
      },
      {
        label: "Plate 02 · the motif, repeated",
        caption:
          "Claude Monet, two haystacks or two moments of the Rouen facade, shown as a pair. The point is the repeat: same object, different light. Include both, so a single atmospheric view is not asked to stand for the series.",
      },
      {
        label: "Plate 03 · indoors, on purpose",
        caption:
          "Edgar Degas, a dance rehearsal or a bather, pastel. The crop, the floor, the artificial light. This plate exists so the board does not become a garden. He did not paint this in a field.",
      },
      {
        label: "Plate 04 · the group was not seven men",
        caption:
          "Berthe Morisot, The Cradle, 1872, or Mary Cassatt, a loge or a bath of the late 1870s or the 1890s. A full picture, with the sitter's attention included. Not a detail of a brushstroke.",
      },
    ],
    downloads: files("impressionism", "impressionism"),
    related: [
      {
        href: "/encyclopedia/claude-monet",
        label: "Claude Monet",
        note: "The series, the insult, and the work done back in the studio.",
      },
      {
        href: "/encyclopedia/georges-seurat",
        label: "Georges Seurat",
        note: "He showed at the last exhibition. The dots are a different theory.",
      },
    ],
  },
  {
    slug: "pop-art",
    title: "Pop Art",
    dates: "c. 1956–1960s",
    dek: "The already-printed image, taken as the subject. Britain and the United States did not start together. The hand is still in it, which is the part the machine story skips.",
    description:
      "Pop as two starts: Hamilton and the Independent Group, then Warhol's hand-painted cans and the screen, Lichtenstein's painted dots, and a definition from a 1957 letter.",
    tags: ["pop", "warhol", "lichtenstein", "hamilton", "silkscreen", "independent group", "ben-day"],
    history: `<p>Pop Art takes as its subject a picture the culture has already printed: an advertisement, a comic panel, a news photo, a product. It has two starts, and they are not one studio. In London the Independent Group was looking at American ads in the early 1950s. Richard Hamilton's collage Just what is it that makes today's homes so different, so appealing? (1956) is the usual first plate. In a letter of January 1957 to Peter and Alison Smithson he listed what he thought the new art was: popular, transient, expendable, low-cost, mass-produced, young, witty, sexy, gimmicky, glamorous, big business. That is his list, in a letter, not a manifesto signed by anyone in New York. In the United States the public moment is the early 1960s: <a href="/encyclopedia/andy-warhol">Warhol</a>, Roy Lichtenstein, James Rosenquist, Claes Oldenburg. Warhol's first soup cans, at the Ferus Gallery in 1962, were painted by hand. The silkscreen is the next decision, an attempt to fire the hand that does not quite succeed, because screens slip.</p><p>Lichtenstein's irony is the opposite material story. He painted the Ben-Day dots of cheap printing by hand, enlarging a mechanical accident into a craft. The dots are not printed. That is the expert point the reproductions of his reproductions tend to lose. <a href="/encyclopedia/marcel-duchamp">Duchamp's</a> readymade is a cousin and not a parent. He chose an object. Pop starts from an image that was made to be repeated. The gap inside the style: the British work is more analytical about the ad, and the American work is more about a studio that behaves like a factory. Both are real. "Pop" said as if it meant only Marilyns is the American half, remembered by its loudest object. The reading: the subject is the already-seen picture. The argument between the members is whether the artist's hand should be visible while saying so.</p>`,
    figures: `<ul>
<li><strong>Richard Hamilton.</strong> Just what is it…, 1956, a small collage, and the 1957 letter. Start here so the movement is not born in a New York gallery in 1962. The collage is an inventory of the period's desires, not a painting of a can.</li>
<li><strong>Andy Warhol.</strong> The thirty-two soup cans, 1962, hand-painted. Then the Marilyn screens after August 1962, and the Death and Disaster series. The entry is the Factory, the shooting, and the Mass he kept going to. This list is the order of the methods, because the order is the correction.</li>
<li><strong>Roy Lichtenstein.</strong> Whaam! (1963) or a romance-comic canvas of the same years. Painted dots, a printed source enlarged, primary color bounded like a panel. Do not describe the dots as a screen print. He painted them.</li>
<li><strong>James Rosenquist</strong> and <strong>Claes Oldenburg</strong>. Rosenquist's F-111 (1964–65) is the billboard scale, a painter who had actually painted billboards. Oldenburg's soft sculptures take the product and make it a body. They keep Pop from being only flat pictures of flat pictures.</li>
<li><strong>Pauline Boty</strong> and <strong>Sister Corita Kent</strong>, as the correction to a list of five men. Boty, in Britain, used the star image and did not get the shelf space. Kent's screenprints of the 1960s turn the commercial language toward scripture and protest. Adjacent, and worth naming so the board is not a closed set.</li>
</ul>`,
    plates: [
      {
        label: "Plate 01 · the inventory",
        caption:
          "Richard Hamilton, Just what is it that makes today's homes so different, so appealing?, 1956. The whole collage, small as it is: bodybuilder, canned ham, the television, the ceiling. Label it British and early. Not a Warhol.",
      },
      {
        label: "Plate 02 · before the screen",
        caption:
          "Andy Warhol, a Campbell's Soup can from the 1962 Ferus set, or the set as a grid. Hand-painted. Show enough of the lettering that small irregularities can be imagined, and say in the caption that the screen comes later.",
      },
      {
        label: "Plate 03 · the dots, painted",
        caption:
          "Roy Lichtenstein, a comic-panel painting of 1963. Include the dots and the flat primary fields and a speech balloon if the picture has one. The plate has to read as painted enlargement, not as a page torn from a comic and framed.",
      },
      {
        label: "Plate 04 · the product, softened",
        caption:
          "Claes Oldenburg, a soft sculpture of a household object, early 1960s. Canvas, stuffing, droop. The counterweight to the flat image: Pop is also a thing you could trip over.",
      },
    ],
    downloads: files("pop-art", "pop-art"),
    related: [
      {
        href: "/encyclopedia/andy-warhol",
        label: "Andy Warhol",
        note: "Hand, then screen, then a life the silver wig cropped.",
      },
      {
        href: "/encyclopedia/marcel-duchamp",
        label: "Marcel Duchamp",
        note: "The earlier bet on an existing object. Not this start from a photograph.",
      },
    ],
  },
  {
    slug: "surrealism",
    title: "Surrealism",
    dates: "Manifesto 1924; the quarrels never stopped",
    dek: "A literary movement that recruited painters and then policed them. The famous pictures are the opposite of the method it announced first.",
    description:
      "Surrealism as two methods that get collapsed: automatism, and the hallucinatory picture painted with academic care. Breton's expulsions, the women in the movement, and the label Kahlo refused.",
    tags: ["surrealism", "breton", "dali", "magritte", "ernst", "oppenheim", "automatism", "freud"],
    history: `<p>Surrealism begins as writing. André Breton's Manifesto of Surrealism (1924) defines a practice: automatic writing, the mind moving faster than the plan, in the neighborhood of dreams and of Freud. Freud is the cited parent. He was not a member, and he was cool to the movement when Salvador Dalí visited him. Painters were recruited into a project that started in words, and Breton spent the next decades expelling people who would not stay inside the politics or the personality. The visual art that resulted is two methods, and ordinary speech keeps only one of them. The first is automatism: André Masson's drawings, early Joan Miró, Max Ernst's frottage, a rubbing that finds an image the hand did not fully intend. The second is the opposite of automatic. Dalí and René Magritte paint an impossible scene with the care of an academic description. Every edge is sharp. The dream is in the subject, not in the handling. When someone says a picture is "surreal," they mean the second. The movement's first bet was the first.</p><p>The politics are part of the style and not a side note. Breton wanted a position relative to the Communist Party and threw out people who took a different one. Dalí's later celebrity and his commercial work are not the paintings of the 1930s, and the breakup with Breton is real. Women were exhibited, published, and also used as muses and as photographs. Meret Oppenheim's fur cup and saucer (Object, 1936) is the concise object. Leonora Carrington, Remedios Varo, and Claude Cahun are not a supplement. <a href="/encyclopedia/frida-kahlo">Frida Kahlo</a> was claimed by Breton in 1939 and refused the job. She was painting a life, not a dream. <a href="/encyclopedia/marcel-duchamp">Duchamp</a> moved through the same rooms and did not join. His readymade is not a surrealist invention. The reading: do not use the word for every strange picture. Use it for a movement with a manifesto, a taste for expulsion, and a split between automatic process and precise impossibility.</p>`,
    figures: `<ul>
<li><strong>André Breton.</strong> The 1924 manifesto and the Second Manifesto of 1929. He is the editor of the membership. Not a painter. A history that starts with Dalí's watches has started at the reception.</li>
<li><strong>Max Ernst</strong> and <strong>André Masson</strong>. Ernst's frottage and the collages of the 1920s; The Elephant Celebes (1921) as an early impossible machine. Masson's automatic drawings and sand paintings. This is the method the manifesto describes.</li>
<li><strong>René Magritte</strong> and <strong>Salvador Dalí</strong>. Magritte's The Treachery of Images (1929), the pipe that is not a pipe, is a lesson about captions. Dalí's The Persistence of Memory (1931) is the picture everyone means. Precise, small, and not automatic. His later commercial production is a different practice. Say the date.</li>
<li><strong>Meret Oppenheim.</strong> Object, 1936, a cup, saucer, and spoon lined with fur. The whole object, so the domestic scale is the shock. Not a painting of a dream. A thing on a table.</li>
<li><strong>Leonora Carrington</strong> and <strong>Remedios Varo</strong>. Carrington's self-portraiture of the late 1930s and the later Mexican pictures; Varo's carefully built interiors of the 1950s. They are the reason a list of the movement that is only Breton's friends is incomplete. Kahlo, named here so she can be refused: not a member.</li>
</ul>`,
    plates: [
      {
        label: "Plate 01 · the process",
        caption:
          "Max Ernst, a frottage, or André Masson, an automatic drawing of the 1920s. The plate has to show a mark that arrived faster than a plan. Not a finished dreamscape. Label it as the first method.",
      },
      {
        label: "Plate 02 · the other method",
        caption:
          "René Magritte, The Treachery of Images, 1929, including the written sentence, or a small Dalí of around 1931. Sharp edges, a familiar thing doing something it cannot. Label it as the second method, so it is not confused with plate 01.",
      },
      {
        label: "Plate 03 · the object",
        caption:
          "Meret Oppenheim, Object, 1936. Cup, saucer, spoon, fur. Photographed straight, on a neutral ground, so the scale stays domestic. The shock is the material, not a dramatic shadow.",
      },
      {
        label: "Plate 04 · not only the circle",
        caption:
          "Leonora Carrington or Remedios Varo, a figure picture, full canvas. Precise and strange, and not an illustration of Breton. If the rights are Carrington's late Mexican work, say the date and the place. Do not substitute Kahlo. She declined.",
      },
    ],
    downloads: files("surrealism", "surrealism"),
    related: [
      {
        href: "/encyclopedia/frida-kahlo",
        label: "Frida Kahlo",
        note: "Claimed in 1939. She would not take the job.",
      },
      {
        href: "/encyclopedia/marcel-duchamp",
        label: "Marcel Duchamp",
        note: "In the rooms, not on the membership list.",
      },
    ],
  },
];
