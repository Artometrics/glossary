/**
 * Questions people actually ask. One dense paragraph each.
 * The page-level sources note is the honesty check for the whole set.
 * No trailing slashes.
 */
export type Question = {
  id: string;
  ask: string;
  /** One paragraph, as HTML. */
  answer: string;
};

export const questions: Question[] = [
  {
    id: "mona-lisa-edge",
    ask: "Why does the Mona Lisa look soft, almost out of focus?",
    answer: `<p>Because the edge was never drawn. <a href="/encyclopedia/leonardo-da-vinci">Leonardo</a> wrote, in notes assembled after his death, that a body should be modeled without lines or borders, in the manner of smoke. The mouth, the cheek, and the mountains behind her are the same decision at two distances: form thinned until it is continuous with the air. That is <a href="/styles/sfumato">sfumato</a>. It is not damage, not a camera, and not a later restorer's blur, though varnish and reproduction both get blamed and both can make a bad photograph look worse. Painters had glazed flesh before him. His step was to let a contour fail on purpose. "Out of focus" is our comparison, from photography, which he did not have. The softness is the reading of the method. The missing contour is the thing you can check.</p>`,
  },
  {
    id: "night-watch",
    ask: "Is The Night Watch a painting of the night?",
    answer: `<p>No. The canvas <a href="/encyclopedia/rembrandt-van-rijn">Rembrandt</a> delivered in 1642 is a militia company, Captain Frans Banning Cocq and his men, moving out into daylight. The popular title arrived later, after varnish had gone brown and the picture looked nocturnal. Cleaning and the records of the commission put the daylight back. What stays interesting is not the misnomer. It is the paint: some sleeves are a ridge you could weigh, and some of the room is barely offered. Calling that light "consent" is a reading. Calling the picture a night scene is just a mistake that stuck.</p>`,
  },
  {
    id: "vermeer-camera",
    ask: "Did Vermeer use a camera obscura?",
    answer: `<p>Maybe, and nobody has the receipt. A <a href="/encyclopedia/camera-obscura">camera obscura</a> projects an image into a dark box or a dark room. Several of <a href="/encyclopedia/johannes-vermeer">Vermeer's</a> pictures behave a bit like a projection: a shallow field, highlights that sit like little discs, a room whose geometry some researchers have rebuilt as if a lens had been in it. The inventory taken after his death does not list one. Absence from an inventory is not proof he never borrowed a lens, and a lens, even if he used one, does not paint milk, maps, or the quiet. The device is real. The claim that it made these pictures is a technical hypothesis. It stays a hypothesis. The Hockney–Falco argument, that optical projection secretly explains a much wider shift in European painting, is a further claim, and it has not convinced the people who work on the documents.</p>`,
  },
  {
    id: "van-gogh-ear",
    ask: "Did van Gogh cut off his ear?",
    answer: `<p>Part of it. On 23 December 1888, in Arles, after the break with Gauguin, <a href="/encyclopedia/vincent-van-gogh">Vincent van Gogh</a> cut a portion of his left ear and took it to a brothel. He did not remove the whole ear. How large the portion was, the reports do not settle: a lobe in some accounts, more of the lower ear in others. The bandaged self-portraits were made from a mirror, so the side you see is not a diagram you can read without that reversal. The rest of the legend machine — the madman who sold one picture, the single modern diagnosis — is the same kind of overshoot. The letters to Theo are precise about paint. The illness is real and was written down in the language of 1889, which is not ours. He died in 1890 of a gunshot wound. Suicide is the account from the time. A later biography argued that someone else fired. That argument is not established.</p>`,
  },
  {
    id: "who-invented-oil",
    ask: "Did Jan van Eyck invent oil paint?",
    answer: `<p>No. Vasari said he did, and the story was repeated until it felt like a fact. Oil as a binder is medieval. Treatises from the twelfth century already tell a painter how to use it, and Italian workshops knew the medium before van Eyck was born. What he and his neighbors did, in the early fifteenth century, was take a slow-drying oil to a descriptive extreme: glazes thin enough that light seems to come from inside the picture. That is a change of control, not a eureka. The material reason it mattered is on the <a href="/encyclopedia/oil-paint">oil paint</a> entry. Oil oxidizes. It stays movable for days, which is why a mouth can be smoked into the air and a fresco often cannot. The collapsible paint tube is a different invention, patented in 1841, and it is the one that made painting outdoors practical. Do not collapse the two.</p>`,
  },
  {
    id: "who-invented-perspective",
    ask: "Who invented linear perspective?",
    answer: `<p>No one person, in the way the question wants. The demonstration everyone cites is Filippo Brunelleschi's, in Florence, probably in the years around 1415 to 1420: a panel of the Baptistery, a hole, a mirror, a comparison of the picture with the building. The panels are lost. The story is Antonio Manetti's, written decades later, which is the best source and a late one. What a workshop could actually repeat was written down by Leon Battista Alberti in 1435. That construction is a mathematical slice through one eye at one moment. It is not how vision works, and painters dropped it the moment it hurt the story. <a href="/encyclopedia/linear-perspective">Linear perspective</a> is a teachable convention that won. <a href="/encyclopedia/albrecht-durer">Dürer</a> is the person who tried to publish a Northern version of the construction. He did not invent it either.</p>`,
  },
  {
    id: "newton-color-wheel",
    ask: "Did Newton invent the color wheel painters use?",
    answer: `<p>He published a different wheel. <a href="/encyclopedia/newtons-opticks">Opticks</a> (1704) shows that a prism splits white light into a spectrum and that a second prism can put it back. The colors in that book are colors of light. Mix them and you are adding rays; his spinning disc tends toward white. A painter mixing red, yellow, and blue is subtracting light with pigment, and the result tends toward mud. Those are not the same operation. Newton also chose seven names for the spectrum, indigo included, because he wanted a match to the musical scale. The spectrum does not arrive in seven. The art-school wheel is a workshop convention, later revised again. <a href="/encyclopedia/georges-seurat">Seurat</a> inherited the confusion through nineteenth-century popularizers and built a method on it. The pictures are not proof that the physics worked.</p>`,
  },
  {
    id: "kahlo-surrealist",
    ask: "Was Frida Kahlo a surrealist?",
    answer: `<p>She said no, and the reason is specific. In Paris in 1939 André Breton wanted to file her with the <a href="/styles/surrealism">surrealists</a>. <a href="/encyclopedia/frida-kahlo">Kahlo</a> would not take the job. She was not painting dreams. She was painting a body that a streetcar had broken, a pregnancy she did not carry, a marriage, and a Mexico she wore on purpose. Surrealism's first bet was automatism, writing or drawing faster than intention. Its famous pictures are the other bet: an impossible scene painted with academic care. Her work is neither. A pierced body in a picture can look like a dream to someone who does not know the accident. Once you know the accident, the look of symbol-choice falls away. That is the reading her entry is willing to stand on. Breton's label is a reception, not a membership.</p>`,
  },
  {
    id: "pollock-random",
    ask: "Are Jackson Pollock's poured paintings random?",
    answer: `<p>They are uncontrolled in one narrow sense and built in every sense that matters. From about 1947 <a href="/encyclopedia/jackson-pollock">Pollock</a> worked on canvas laid on the floor, with sticks, hardened brushes, and commercial enamel, not only artist's oil. He could not, and did not, place every ribbon as if it were a drawn line. Density, rhythm, and the decision to crop a field are still decisions, and they are visible. A random splatter does not hold together when you stand back. His do, often, which is why fakes fail a test that painters in the studio could make and a laboratory cannot fully replace. The <a href="/styles/abstract-expressionism">abstract expressionist</a> label covers him and also covers painters who never poured anything. The crash, the drinking, and the film of him working are part of the life. They are not the composition.</p>`,
  },
  {
    id: "helvetica-bauhaus",
    ask: "Is Helvetica a Bauhaus typeface?",
    answer: `<p>No. Helvetica is Swiss, from 1957, a quarter century after the school closed. The <a href="/styles/bauhaus">Bauhaus</a> letter-experiment people are thinking of is Herbert Bayer's Universal alphabet of 1925: constructed, single-case, drawn as a proposal, not a font the world then set in metal. The early Bauhaus did not even look like the geometric poster. It opened in 1919 talking like a craft lodge. The sans-serif, the primary colors, and the steel tube are the Dessau years, after 1925. "Bauhaus" on a font menu now is usually a pastiche. <a href="/encyclopedia/josef-albers">Josef Albers</a> taught at the school. The nested squares he is famous for begin in 1950, at Black Mountain and then Yale, and should not be dated to Dessau.</p>`,
  },
];

export const questionsNote = `<p><strong>The record.</strong> These are compressed answers, not a second archive. Where a date, a lawsuit, a treatise, or a conservation result is stated as fact, the entry it links says what kind of document that is and where the document thins out. Nothing on this page adds a citation the shelf cannot support. An interview is an interview. Vasari is Vasari. A lab result is about a sample.</p><p><strong>The reading.</strong> If an answer says the popular version is wrong, it is only as strong as the entry it points to. If it says a point is contested — the lens, the shot at Auvers, how much of the ear — it stays contested here. The short form is for the question people actually ask. It is not a license to sound more certain than the paragraph it came from.</p>`;
