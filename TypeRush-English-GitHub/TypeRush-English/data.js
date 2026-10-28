/* Original, offline-first English practice corpus. Sentences stay intact when shuffled. */
const TOPICS = {
  daily: 'Everyday life', travel: 'Travel & culture', work: 'Work & business',
  tech: 'Technology', science: 'Science & learning', history: 'History & politics',
  stories: 'Short stories', nature: 'Nature & society'
};
const TEXT_BANK = {
 A1: {
  daily: [
   'I wake up early and make a cup of tea.', 'My sister walks to school every morning.',
   'We eat dinner together in the kitchen.', 'The shop near my house is open today.',
   'I like to read a book before I sleep.', 'My friend has a small dog and a big garden.',
   'On Sunday, I clean my room and call my family.', 'It is a good day to learn something new.'
  ],
  travel: [
   'The train leaves at eight in the morning.', 'I have a ticket and a small blue bag.',
   'Our hotel is next to the old town square.', 'We take photos of the city and the river.',
   'The museum is free for students today.', 'I ask a woman where the bus station is.',
   'I want to try the local food for lunch.', 'Every new place has something fun to see.'
  ],
  work: [
   'I start work at nine and finish at five.', 'My manager sends an email to the team.',
   'We have a short meeting every Monday.', 'I write my tasks in a small notebook.',
   'The office has a quiet room for calls.', 'My colleague helps me with a new project.',
   'I am learning how to use this program.', 'A friendly team makes work more enjoyable.'
  ],
  tech: [
   'My computer is on the desk by the window.', 'I use my phone to check the weather.',
   'This app helps me learn new English words.', 'The screen is bright and easy to read.',
   'I save my work before I close the laptop.', 'My brother likes to build small robots.',
   'The button starts the program in one second.', 'A good password keeps my account safe.'
  ],
  science: [
   'The sun gives us light and heat.', 'Water becomes ice when it is very cold.',
   'Plants need water and light to grow.', 'Our teacher shows us a simple experiment.',
   'I ask questions when I do not understand.', 'We learn about stars in science class.',
   'The moon is bright in the night sky.', 'Small steps can help us learn big ideas.'
  ],
  history: [
   'The old castle stands above the town.', 'People lived in this city many years ago.',
   'A guide tells us a story about the king.', 'We look at a map of an old country.',
   'The museum has coins from the past.', 'People vote to choose their leaders.',
   'A good law can help many families.', 'History shows us how life can change.'
  ],
  stories: [
   'Mia finds a small key under the table.', 'She opens the door and sees a bright room.',
   'A cat is sleeping beside a yellow chair.', 'Tom hears a strange sound in the garden.',
   'The children follow a path through the trees.', 'An old man smiles and gives them a map.',
   'They find a letter inside a wooden box.', 'At the end of the day, everyone goes home.'
  ],
  nature: [
   'The beach is quiet early in the morning.', 'Birds sing in the trees behind our house.',
   'The river runs between two green hills.', 'We put our rubbish in the right bin.',
   'A small garden can be home to many insects.', 'The air feels fresh after the rain.',
   'Our town has a park with many flowers.', 'People work together to keep the streets clean.'
  ]
 },
 A2: {
  daily: [
   'I usually prepare breakfast before leaving for university.', 'My neighbor offered to help me carry the shopping upstairs.',
   'We decided to cook at home instead of ordering food.', 'Although the bus was late, I arrived before the lesson started.',
   'I am trying to spend less time looking at my phone.', 'My cousin has recently moved into a new apartment.',
   'After a busy week, I enjoy walking through the neighborhood.', 'It is easier to stay organized when I make a simple plan.'
  ],
  travel: [
   'Before our flight, we checked the departure time online.', 'The local market was full of colorful fruit and handmade gifts.',
   'We missed the last bus and had to walk back to our hotel.', 'I prefer exploring small streets rather than crowded shopping centers.',
   'A friendly guide explained the history of the main square.', 'We booked a room with a view of the harbor.',
   'The journey took longer than expected because of the rain.', 'Traveling by train gives you time to enjoy the scenery.'
  ],
  work: [
   'My supervisor asked me to prepare a short weekly report.', 'The company offers flexible hours to students.',
   'I sent my application after checking it for spelling mistakes.', 'Our team discussed several ideas before choosing a solution.',
   'It is important to ask clear questions during a meeting.', 'I received helpful feedback about my presentation.',
   'The new employee learned the routine surprisingly quickly.', 'A positive attitude can make a difficult task feel easier.'
  ],
  tech: [
   'I installed the update because the previous version had a bug.', 'The website loads faster when its images are smaller.',
   'My laptop automatically connects to the wireless network.', 'A simple search tool can save a lot of time.',
   'We tested the application on both phones and computers.', 'The device sends a message when its battery is low.',
   'I created a folder to keep all my project files together.', 'Technology is most useful when it solves a real problem.'
  ],
  science: [
   'Scientists collect information before they draw conclusions.', 'The students measured the temperature at different times.',
   'Exercise and enough sleep can improve your concentration.', 'A magnet can attract certain kinds of metal.',
   'The experiment worked better after we changed one detail.', 'Some animals travel long distances during the winter.',
   'The human brain needs breaks while learning new things.', 'Asking why something happens is a good way to begin research.'
  ],
  history: [
   'The city became an important trading center near the coast.', 'Many people wrote letters before telephones became common.',
   'The exhibition explains how ordinary families lived in the past.', 'Citizens can express their opinions in different ways.',
   'The government announced a new plan for public transport.', 'The old bridge connected communities on opposite sides of the river.',
   'We compared two maps to see how the borders had changed.', 'A peaceful discussion can help people understand different views.'
  ],
  stories: [
   'Nora discovered a forgotten notebook behind the bookshelf.', 'Every evening, someone left a fresh flower near the gate.',
   'The little boat appeared just as the fog began to lift.', 'He promised to return the missing watch before sunset.',
   'A mysterious visitor asked for directions to the lighthouse.', 'The friends shared their sandwiches while waiting for the storm to pass.',
   'Inside the envelope, they found a photograph of the old station.', 'Nobody expected such a simple choice to change the whole afternoon.'
  ],
  nature: [
   'The volunteers cleaned the riverbank after the weekend festival.', 'Our city has introduced more bicycle lanes in recent years.',
   'Some birds return to the same nesting place every spring.', 'We planted young trees to create shade near the playground.',
   'The weather can change quickly when you are hiking in the mountains.', 'Buying local products may reduce the distance food needs to travel.',
   'A healthy forest provides shelter for many different animals.', 'Small changes in daily habits can reduce unnecessary waste.'
  ]
 },
 B1: {
  daily: [
   'Building a reliable routine often takes more patience than people expect.', 'When plans change unexpectedly, I try to focus on what I can control.',
   'Sharing responsibilities at home makes everyday life less stressful.', 'I have noticed that short conversations can improve my confidence in English.',
   'Even though the week was demanding, I managed to finish my assignments.', 'A useful habit is to review tomorrow\'s priorities before going to bed.',
   'Sometimes an unfamiliar situation becomes enjoyable once you give it a chance.', 'Learning to manage your time can create more space for the things you enjoy.'
  ],
  travel: [
   'Exploring a new city without a strict schedule can lead to unexpected discoveries.', 'We chose a quieter neighborhood because we wanted to experience local life.',
   'The museum offered a fascinating explanation of the region\'s cultural traditions.', 'Although our connection was delayed, the airline provided clear information.',
   'Speaking a few words of the local language helped us feel more welcome.', 'Travelers should compare transport options before leaving the airport.',
   'The view from the coastal path made the difficult climb worthwhile.', 'A memorable journey is often shaped by the people you meet along the way.'
  ],
  work: [
   'The interview gave me an opportunity to explain my motivation and experience.', 'Our team divided the project into smaller tasks with realistic deadlines.',
   'Constructive feedback helped me improve both the report and my presentation.', 'When a customer raised a concern, we listened carefully before responding.',
   'Clear communication is especially important when several departments cooperate.', 'I volunteered to document the problem so that others could reproduce it.',
   'The manager encouraged everyone to propose practical improvements.', 'Developing technical skills is valuable, but teamwork matters just as much.'
  ],
  tech: [
   'Before publishing the website, we tested its layout on several screen sizes.', 'A reliable backup can prevent the loss of important documents.',
   'The developer discovered that an outdated library caused the unexpected error.', 'We collected user feedback to decide which feature to improve next.',
   'An embedded device can react to sensor readings without an internet connection.', 'The team compared two approaches to reduce the application\'s loading time.',
   'Good documentation makes it easier for new contributors to understand a project.', 'Security updates should be installed even when no visible problem exists.'
  ],
  science: [
   'Researchers repeated the experiment to check whether the findings were consistent.', 'The results suggested a relationship, but they did not prove a direct cause.',
   'Our lecturer encouraged us to question assumptions and examine the evidence.', 'A well-designed survey can reveal patterns in everyday behavior.',
   'Understanding the limits of a measurement is essential for making comparisons.', 'During the experiment, the students recorded each observation carefully.',
   'Scientific progress often depends on people sharing their discoveries openly.', 'It is easier to remember complex ideas when you connect them to examples.'
  ],
  history: [
   'Political institutions often develop in response to changing social conditions.', 'The exhibition illustrated how industrialization transformed daily life.',
   'Different historians sometimes interpret the same events in contrasting ways.', 'Public debate allows citizens to challenge decisions made by their representatives.',
   'The treaty created new obligations for the countries that signed it.', 'Economic difficulties can influence people\'s trust in political institutions.',
   'The movement attracted supporters from several different social groups.', 'Understanding historical context helps us avoid overly simple explanations.'
  ],
  stories: [
   'By the time Elena reached the station, the last train had already departed.', 'The letter contained a warning that nobody in the village wanted to discuss.',
   'Although he was afraid, Daniel decided to follow the narrow forest trail.', 'A sudden power cut left the entire building completely silent.',
   'The stranger recognized a symbol that appeared on the old photograph.', 'They agreed to keep the discovery secret until they understood its meaning.',
   'What looked like an ordinary afternoon slowly turned into an adventure.', 'In the end, the answer was hidden in a place they had passed many times.'
  ],
  nature: [
   'Protecting natural habitats requires cooperation between residents and local authorities.', 'Several communities have found creative ways to reduce plastic waste.',
   'Unexpected weather conditions can make outdoor activities more challenging.', 'The research showed that green spaces can benefit people\'s well-being.',
   'Farmers are adapting their methods as temperatures become less predictable.', 'Local volunteers organized a project to restore an abandoned public garden.',
   'Tourism can support small communities when its environmental impact is managed.', 'Learning about biodiversity can change the way we understand familiar landscapes.'
  ]
 },
 B2: {
  daily: [
   'Maintaining a healthy work-life balance requires deliberate choices rather than occasional good intentions.', 'People often underestimate how strongly their surroundings influence daily habits and concentration.',
   'Whenever competing priorities arise, identifying the most consequential task helps me stay focused.', 'Despite having limited free time, she remained committed to learning a new language.',
   'Meaningful improvement rarely happens overnight, particularly when the skill involves regular practice.', 'An honest conversation can resolve misunderstandings that might otherwise become lasting frustrations.',
   'Developing independence involves knowing when to ask for assistance as well as when to act alone.', 'Over time, small adjustments to familiar routines can produce surprisingly substantial results.'
  ],
  travel: [
   'Although the destination was famous for its architecture, the neighborhood markets left the strongest impression.', 'Independent travelers should consider local customs instead of assuming that familiar social rules apply everywhere.',
   'The region\'s cultural heritage reflects centuries of migration, commerce, and exchange.', 'Our original itinerary was disrupted by a transport strike, prompting us to explore alternative routes.',
   'Responsible tourism encourages visitors to support local businesses while respecting the surrounding environment.', 'Negotiating an unfamiliar transport system can be challenging, yet it often leads to valuable experiences.',
   'A knowledgeable guide connected individual monuments to the broader history of the city.', 'The journey reminded us that flexibility is frequently more useful than a perfectly detailed plan.'
  ],
  work: [
   'Successful project management depends on clearly defined responsibilities and realistic expectations.', 'The candidates were assessed not only on technical knowledge but also on their ability to communicate.',
   'Before recommending a solution, the analyst considered its long-term costs and potential limitations.', 'A supportive workplace encourages employees to report mistakes without fear of unnecessary blame.',
   'The team revised its initial proposal after receiving detailed feedback from stakeholders.', 'An effective presentation should distinguish essential findings from background information.',
   'Although automation reduced repetitive tasks, human judgment remained necessary in unusual cases.', 'Professional growth involves recognizing weaknesses and actively seeking opportunities to address them.'
  ],
  tech: [
   'The application\'s performance improved significantly after the developers identified an inefficient database query.', 'Reliable embedded systems must handle unexpected inputs without entering unsafe states.',
   'The engineers evaluated alternative communication protocols before selecting the most appropriate interface.', 'A clear separation between the user interface and application logic simplifies future maintenance.',
   'Testing edge cases is essential because ordinary usage may not reveal hidden software defects.', 'The security review highlighted the risks associated with storing sensitive information without encryption.',
   'The team introduced automated checks to reduce the number of errors reaching production.', 'Technical documentation should explain the reasoning behind key design decisions, not merely describe the code.'
  ],
  science: [
   'A convincing scientific explanation must account for competing hypotheses and possible sources of error.', 'The researchers distinguished statistical significance from the practical importance of their findings.',
   'Unexpected observations prompted the laboratory to reconsider its original experimental design.', 'Environmental conditions can influence measurements even when the equipment appears to function correctly.',
   'The study emphasized that correlation alone does not establish a causal relationship.', 'Peer review provides a valuable opportunity to identify weaknesses before research is published.',
   'The lecturer illustrated the concept using an example drawn from everyday engineering problems.', 'Advances in one discipline frequently emerge when scientists borrow methods from another field.'
  ],
  history: [
   'Democratic accountability depends on institutions capable of scrutinizing decisions and enforcing established rules.', 'The historical transition involved competing interests rather than a single, straightforward cause.',
   'International agreements can provide a framework for cooperation without eliminating political disagreements.', 'The reforms expanded political participation, although their benefits were distributed unevenly.',
   'Public opinion may shift rapidly when economic uncertainty combines with declining institutional trust.', 'The author examined how political narratives shaped competing interpretations of the same crisis.',
   'A constitutional framework establishes limits on authority as well as procedures for exercising it.', 'Diplomatic negotiations often require compromises that satisfy neither side completely.'
  ],
  stories: [
   'Had she checked the return address more carefully, she might have recognized the sender immediately.', 'The abandoned observatory contained evidence that challenged everything the researchers had assumed.',
   'While the others debated their next move, Adrian noticed an almost invisible mark on the wall.', 'The conversation took an unexpected turn when a familiar name appeared in the visitor\'s notebook.',
   'Reluctant to reveal the truth, the caretaker offered a carefully rehearsed explanation instead.', 'What initially seemed like a coincidence gradually formed part of a much larger pattern.',
   'The group faced a difficult decision: protect their discovery or share it with the authorities.', 'Only after returning home did she fully appreciate the significance of the missing photograph.'
  ],
  nature: [
   'Urban planning increasingly considers how trees and public parks affect local temperatures.', 'Conservation programs are most effective when the communities involved can influence their design.',
   'A decline in biodiversity may weaken ecosystems long before the damage becomes immediately visible.', 'Although renewable energy offers clear advantages, its infrastructure still creates environmental trade-offs.',
   'The study investigated whether changes in land use contributed to the region\'s water shortages.', 'Researchers emphasized the importance of distinguishing temporary fluctuations from long-term trends.',
   'Community-led initiatives can complement national policies by responding to specific local needs.', 'Environmental debates frequently involve competing social, economic, and scientific priorities.'
  ]
 },
 C1: {
  daily: [
   'The relentless pursuit of productivity can inadvertently undermine the very creativity it is supposed to encourage.', 'A seemingly trivial alteration to one\'s routine may, over time, reshape deeply ingrained patterns of behavior.',
   'Rather than treating uncertainty as an obstacle, she regarded it as an invitation to reconsider established assumptions.', 'Balancing personal ambition with competing obligations demands a degree of self-awareness that is rarely effortless.',
   'The tendency to postpone difficult conversations often compounds tensions that might otherwise be resolved promptly.', 'Notwithstanding the pressure to achieve immediate results, sustained learning requires periods of deliberate reflection.',
   'He gradually recognized that genuine confidence stems from preparation rather than the absence of doubt.', 'The conversation revealed how easily reasonable expectations can diverge when they remain unspoken.'
  ],
  travel: [
   'Beyond its celebrated landmarks, the city possessed an understated cultural vitality that escaped most conventional guidebooks.', 'The itinerary was deliberately flexible, allowing unexpected encounters to determine the direction of the journey.',
   'Preserving the authenticity of historic neighborhoods while accommodating visitors remains a contentious urban challenge.', 'The exhibition traced the intricate relationship between maritime trade and the region\'s evolving cultural identity.',
   'What initially appeared to be an inconvenient detour ultimately provided the trip\'s most memorable experience.', 'A growing awareness of overtourism has prompted some destinations to reconsider their economic dependence on visitors.',
   'The guide challenged romanticized assumptions by describing the less visible consequences of the city\'s development.', 'Travel can expose the limitations of familiar perspectives without necessarily providing straightforward alternatives.'
  ],
  work: [
   'The proposal was persuasive precisely because it acknowledged its limitations rather than concealing them behind optimistic projections.', 'Organizations that reward transparent communication are generally better equipped to address emerging operational risks.',
   'The discrepancy between the projected savings and the observed outcomes prompted a comprehensive internal review.', 'A poorly defined objective can generate impressive-looking activity without producing meaningful progress.',
   'Although the strategy appeared commercially attractive, its implementation depended on assumptions that had not been verified.', 'The report distinguished between immediate operational concerns and structural weaknesses requiring longer-term intervention.',
   'Cross-functional collaboration is frequently hindered by incompatible incentives rather than a lack of technical competence.', 'Effective leadership involves creating the conditions in which informed disagreement can improve decisions.'
  ],
  tech: [
   'The architecture prioritized fault tolerance, ensuring that individual component failures would not compromise the entire system.', 'Even sophisticated automated tests may overlook vulnerabilities arising from unexpected interactions between otherwise reliable modules.',
   'The migration exposed several undocumented dependencies that had accumulated throughout successive software releases.', 'Engineering trade-offs should be evaluated against measurable requirements rather than the novelty of a particular technology.',
   'The system incorporated diagnostic feedback to distinguish transient disturbances from persistent hardware faults.', 'Without clearly defined interfaces, independently developed components can introduce subtle integration failures.',
   'A robust security model assumes that individual safeguards may fail and therefore relies on multiple complementary controls.', 'The developers resisted premature optimization until profiling identified the actual performance bottlenecks.'
  ],
  science: [
   'The apparent precision of the estimates concealed substantial uncertainty in the assumptions underlying the model.', 'Replication is indispensable because isolated findings can arise from methodological weaknesses or random variation.',
   'The analysis accounted for confounding variables that might otherwise have distorted the observed relationship.', 'The authors cautioned against extrapolating results beyond the population represented in their sample.',
   'Scientific consensus emerges through cumulative scrutiny rather than unquestioning acceptance of a single influential publication.', 'The research design sought to isolate the proposed mechanism while minimizing alternative explanations.',
   'Discrepancies between theoretical predictions and experimental observations can be intellectually productive rather than embarrassing.', 'An elegant explanation is not necessarily an accurate one unless it withstands systematic empirical evaluation.'
  ],
  history: [
   'The legitimacy of political institutions is shaped not merely by formal procedures but also by the public\'s perception of fairness.', 'The historian challenged retrospective narratives that portrayed a contested transformation as historically inevitable.',
   'Strategic cooperation between allies can coexist with profound disagreements over regional priorities and national autonomy.', 'The apparent stability of the political settlement obscured unresolved tensions among competing social groups.',
   'Institutional safeguards become especially consequential when executive authorities seek to expand discretionary powers.', 'The analysis distinguished symbolic diplomatic gestures from commitments capable of altering actual state behavior.',
   'Electoral competition may sustain democratic accountability while simultaneously intensifying short-term political incentives.', 'Interpreting the crisis requires attention to the interaction of economic pressures, elite decisions, and public mobilization.'
  ],
  stories: [
   'Only when the final piece of correspondence surfaced did the seemingly unrelated incidents acquire a coherent explanation.', 'The archivist\'s hesitant response suggested that the official account concealed a far more complicated sequence of events.',
   'Despite the mounting evidence, she remained reluctant to accept a conclusion that contradicted years of personal experience.', 'The manuscript contained an obscure reference whose significance had escaped generations of researchers.',
   'What unsettled him most was not the stranger\'s knowledge, but the extraordinary precision with which it was revealed.', 'The atmosphere shifted imperceptibly as the conversation moved from speculation to a direct accusation.',
   'Having exhausted every conventional explanation, the investigators reluctantly reconsidered their initial assumptions.', 'The discovery raised an uncomfortable question about whether the truth ought to be disclosed at all.'
  ],
  nature: [
   'Environmental resilience depends on interconnected ecological processes that are easily overlooked in narrowly focused policy debates.', 'The proposed intervention risked addressing the visible symptoms while leaving the underlying causes largely untouched.',
   'Communities disproportionately exposed to pollution often possess the least influence over the decisions affecting them.', 'Long-term conservation requires institutional continuity that can withstand shifting political and economic priorities.',
   'The researchers investigated cascading effects that might follow the disappearance of a seemingly insignificant species.', 'The benefits of adaptation measures cannot be assessed adequately without considering their distribution across social groups.',
   'Public understanding of environmental risks is influenced by trust, communication, and lived experience as well as data.', 'A credible sustainability strategy must confront unavoidable trade-offs rather than promise effortless solutions.'
  ]
 },
 C2: {
  daily: [
   'The paradox of perpetual self-optimization lies in its capacity to transform ostensibly liberating choices into yet another set of obligations.', 'What he had interpreted as indifference was, on closer inspection, a carefully cultivated reluctance to impose his expectations on others.',
   'Her composure was neither an absence of apprehension nor an innate disposition, but the cumulative outcome of innumerable small decisions.', 'To mistake familiarity for understanding is to overlook the complex assumptions that quietly structure even the most mundane interactions.',
   'No sooner had the long-awaited opportunity materialized than its attendant compromises became impossible to ignore.', 'The dispute, initially dismissed as a matter of scheduling, exposed a more fundamental disagreement over the meaning of mutual responsibility.',
   'Far from being incompatible with spontaneity, a considered routine can provide the stability within which unexpected possibilities flourish.', 'The very language through which people articulate their aspirations may constrain the alternatives they are prepared to envisage.'
  ],
  travel: [
   'The city\'s carefully curated image of timeless authenticity belied the turbulent processes of displacement and reinvention that had shaped it.', 'Rather than offering unmediated access to another culture, travel inevitably filters unfamiliar experiences through pre-existing expectations.',
   'Beneath the picturesque waterfront lay an intricate network of economic relationships that conventional narratives seldom acknowledged.', 'The preservation initiative, though commendable in principle, provoked disagreement about whose version of local heritage deserved protection.',
   'Only by abandoning the itinerary\'s implicit hierarchy of attractions did they begin to appreciate the place on its own terms.', 'The supposed distinction between traveler and tourist proved increasingly difficult to sustain under closer examination.',
   'Architectural continuity concealed successive political transformations whose traces became apparent only in the most inconspicuous details.', 'A journey may unsettle deeply held assumptions without providing the reassuring clarity promised by romantic accounts of discovery.'
  ],
  work: [
   'The board\'s enthusiasm for the initiative was inversely proportional to its willingness to interrogate the assumptions on which the projections rested.', 'By conflating measurable outputs with substantive outcomes, the organization inadvertently rewarded precisely the behaviors it professed to discourage.',
   'The eventual compromise preserved the appearance of consensus while leaving the underlying strategic disagreement conspicuously unresolved.', 'Few management frameworks adequately capture the informal relationships through which ostensibly hierarchical organizations actually function.',
   'The evaluation was methodologically impeccable yet practically inconclusive, illustrating the limits of evidence divorced from decision-making context.', 'Rather than attributing the failure to individual incompetence, the inquiry examined the incentives that had rendered foreseeable errors almost inevitable.',
   'A culture of accountability cannot be sustained solely through procedural controls if dissenting assessments are systematically marginalized.', 'The most consequential risk lay not in the acknowledged uncertainty but in the unwarranted confidence attached to assumptions nobody had tested.'
  ],
  tech: [
   'The system\'s apparent determinism proved illusory once asynchronous interactions exposed dependencies that had escaped the original specification.', 'An architecture optimized for nominal operating conditions may exhibit catastrophic fragility when confronted with correlated failures.',
   'The team\'s confidence in test coverage obscured the epistemic gap between exercising known behaviors and anticipating unimagined failure modes.', 'By treating observability as an architectural requirement rather than an afterthought, the engineers made otherwise elusive faults diagnosable.',
   'The abstraction was elegant to the point of opacity, concealing implementation assumptions that became untenable under real-world constraints.', 'The incident demonstrated how locally reasonable design choices can generate globally undesirable behavior when their interactions are neglected.',
   'Security cannot be reduced to a checklist of controls when the threat model itself remains contested or inadequately specified.', 'The revision deliberately sacrificed marginal throughput gains in exchange for stronger guarantees about recovery and operational predictability.'
  ],
  science: [
   'The inferential leap from a statistically robust association to a universal causal mechanism remained insufficiently justified by the available evidence.', 'Methodological sophistication offers little protection against the consequences of asking a fundamentally ill-posed research question.',
   'The ostensibly conflicting findings became compatible once the authors distinguished differences in measurement from differences in the underlying phenomenon.', 'Epistemic humility demands recognizing that uncertainty is not merely residual noise but sometimes an intrinsic feature of the system under investigation.',
   'The experiment\'s celebrated elegance depended on simplifying assumptions whose defensibility weakened considerably outside controlled conditions.', 'Rather than falsifying the framework outright, the anomaly exposed a boundary condition that previous applications had quietly overlooked.',
   'The disciplinary consensus rested on convergent lines of evidence, none of which would have been decisive when considered independently.', 'Explanatory parsimony is valuable only insofar as it does not achieve simplicity by excluding inconvenient but consequential observations.'
  ],
  history: [
   'The retrospective portrayal of the settlement as an inevitable triumph of diplomacy obscured the contingency of the negotiations and the fragility of their outcome.', 'Formal constitutional constraints provide scant reassurance when the informal norms sustaining their enforcement have already deteriorated.',
   'The alliance\'s apparent unity masked a persistent tension between collective commitments and the irreducible autonomy of its constituent states.', 'Competing narratives of national renewal transformed complex socioeconomic grievances into deceptively simple accounts of political betrayal.',
   'The argument\'s plausibility derived less from its evidentiary foundation than from the interpretive framework it encouraged readers to accept.', 'Institutional continuity should not be mistaken for substantive democratic resilience when mechanisms of accountability have been progressively hollowed out.',
   'The diplomatic correspondence revealed a striking disparity between the parties\' public declarations and their privately acknowledged strategic constraints.', 'Any persuasive explanation of the transition must reconcile individual agency with the structural pressures that rendered certain choices more probable.'
  ],
  stories: [
   'It was not the content of the confession that unnerved her, but the implication that someone had anticipated its every conceivable consequence.', 'The document\'s authenticity was beyond reasonable dispute; its significance, however, remained suspended between several mutually exclusive interpretations.',
   'Only retrospectively did the casual remark assume the weight of a warning that none of those present had thought to recognize.', 'The curator\'s elaborate reassurances served chiefly to heighten the suspicion they were ostensibly intended to dispel.',
   'At the precise moment when the evidence appeared incontrovertible, a single overlooked detail destabilized the entire reconstruction.', 'He had mistaken the absence of contradiction for corroboration, a distinction whose consequences now became painfully apparent.',
   'What the witnesses described as an extraordinary coincidence gradually emerged as the predictable result of an unseen arrangement.', 'The revelation offered no satisfying resolution, merely a more precise understanding of why the mystery had persisted.'
  ],
  nature: [
   'The prevailing policy discourse treated ecological degradation as an isolated technical problem rather than a manifestation of entrenched economic incentives.', 'Any credible assessment of resilience must account for nonlinear interactions whose consequences become apparent only after critical thresholds are crossed.',
   'The project\'s ostensibly neutral methodology concealed normative assumptions about which communities and ecosystems warranted protection.', 'An exclusive reliance on aggregate indicators can obscure the uneven distribution of environmental harm across already vulnerable populations.',
   'The proposed restoration scheme confronted an uncomfortable dilemma between preserving historical conditions and accommodating irreversible ecological change.', 'Short-term efficiency gains risked undermining adaptive capacity by eliminating redundancies that become indispensable during unexpected disruptions.',
   'The apparent consensus dissolved once stakeholders began articulating the incompatible values implicit in their preferred definitions of sustainability.', 'A meaningful transition demands more than technological substitution; it entails reconsidering the institutions that govern resource allocation.'
  ]
 }
};
const GENERAL_BANK = {
 A1: ['I practice English for a few minutes every day.', 'A small goal can help me stay motivated.', 'I make mistakes, but I keep trying.', 'Each new word helps me speak with more people.'],
 A2: ['Regular practice helps me become more confident over time.', 'I check unfamiliar words when I finish reading.', 'Setting a clear goal makes it easier to follow my progress.', 'I learn more when I understand why a mistake happened.'],
 B1: ['Progress becomes easier to recognize when you compare your recent work with earlier attempts.', 'It is useful to practice consistently rather than waiting for a perfect moment.', 'A difficult exercise can reveal which skills deserve more attention.', 'Learning a language becomes rewarding when you can use it in real situations.'],
 B2: ['A meaningful improvement in language proficiency usually reflects sustained practice rather than a single successful session.', 'Reviewing recurring errors can be more productive than completing exercises without reflection.', 'The ability to express a nuanced idea requires both precise vocabulary and a clear underlying argument.', 'Consistency and curiosity often contribute more to long-term learning than occasional bursts of effort.'],
 C1: ['Effective learning involves challenging one\'s habitual strategies when their limitations become apparent.', 'The capacity to articulate uncertainty precisely is itself a valuable form of linguistic competence.', 'A sophisticated vocabulary is most useful when deployed accurately rather than merely for its own sake.', 'Deliberate practice combines demanding tasks with feedback sufficiently specific to guide improvement.'],
 C2: ['Linguistic fluency is not exhausted by lexical range; it also entails sensitivity to implication, register, and rhetorical purpose.', 'A rigorous approach to self-improvement resists the temptation to substitute impressive metrics for demonstrable understanding.', 'The judicious use of complexity is often less demanding than the discipline required to communicate a difficult idea with precision.', 'What initially appears to be effortless mastery usually conceals an extensive history of revision, misjudgment, and sustained attention.']
};
const NUMBER_SENTENCES = {
 daily: 'I practiced for 15 minutes and completed 3 exercises.', travel: 'Our train leaves at 08:45 from platform 6.',
 work: 'The team finished 12 tasks in 5 days.', tech: 'The device sends 24 readings every 60 seconds.',
 science: 'The experiment included 42 samples and 3 separate trials.',
 history: 'The archive contains 120 letters written in 1918.', stories: 'At 11:30, the door opened for the 2nd time.',
 nature: 'The volunteers planted 35 trees along a 2 km path.'
};
const VOCABULARY = [
 ['opportunity','prilika','a situation that makes progress possible','The new job offers an exciting opportunity.'],
 ['improve','poboljšati','to make something better','Daily practice can improve your English.'],
 ['progress','napredak','movement toward a goal','I can see progress every week.'],
 ['challenge','izazov','a difficult but interesting task','Learning a language is a rewarding challenge.'],
 ['experience','iskustvo','knowledge gained from doing something','Travel provides valuable experience.'],
 ['confidence','samopouzdanje','belief in your own abilities','Practice builds confidence over time.'],
 ['routine','rutina','a regular pattern of activities','A morning routine helps me focus.'],
 ['habit','navika','something done regularly','Reading is a useful habit.'],
 ['responsibility','odgovornost','a duty to take care of something','Shared responsibility strengthens a team.'],
 ['environment','okoliš; okruženje','the natural world or surrounding conditions','We should protect the environment.'],
 ['journey','putovanje','travel from one place to another','The journey took five hours.'],
 ['destination','odredište','the place someone travels to','Paris was our final destination.'],
 ['departure','polazak','the act of leaving','The departure was delayed.'],
 ['arrival','dolazak','the act of reaching a place','Our arrival was later than planned.'],
 ['heritage','baština','traditions and objects passed down over time','The city protects its cultural heritage.'],
 ['neighborhood','susjedstvo','an area where people live','The neighborhood has a quiet park.'],
 ['explore','istraživati','to travel around a place to learn about it','We want to explore the old town.'],
 ['scenery','krajolik','natural features of a place','The mountain scenery was beautiful.'],
 ['tradition','tradicija','a custom passed between generations','The festival celebrates a local tradition.'],
 ['customs','običaji','traditional social practices','Visitors should respect local customs.'],
 ['deadline','rok','the latest time for finishing a task','The deadline is Friday.'],
 ['feedback','povratna informacija','advice or reactions about performance','The teacher gave helpful feedback.'],
 ['meeting','sastanak','a planned gathering of people','We have a meeting tomorrow.'],
 ['colleague','kolega','a person you work with','My colleague helped with the report.'],
 ['customer','kupac; klijent','a person who buys goods or services','The customer asked a question.'],
 ['stakeholder','dionik','a person or group affected by a decision','Each stakeholder had different priorities.'],
 ['proposal','prijedlog','a suggested plan','The manager approved our proposal.'],
 ['strategy','strategija','a long-term plan for achieving a goal','We need a clear strategy.'],
 ['priority','prioritet','something more important than other things','Safety is our main priority.'],
 ['reliable','pouzdan','able to be trusted to work correctly','We need a reliable connection.'],
 ['device','uređaj','a piece of equipment','The device measures temperature.'],
 ['network','mreža','a set of connected computers or people','The network connects several devices.'],
 ['software','softver','programs used by computers','The software needs an update.'],
 ['hardware','hardver','physical electronic components','The hardware passed the test.'],
 ['update','ažuriranje','a newer version or a change','Install the latest security update.'],
 ['security','sigurnost','protection from danger or threats','Online security is important.'],
 ['sensor','senzor','a device that detects a physical quantity','The sensor measures pressure.'],
 ['interface','sučelje','a shared boundary for interaction','The interface should be easy to use.'],
 ['failure','kvar; neuspjeh','a situation when something stops working','The failure interrupted the service.'],
 ['architecture','arhitektura','the structure of a system','The architecture supports future updates.'],
 ['maintenance','održavanje','work needed to keep something functioning','Regular maintenance prevents problems.'],
 ['requirement','zahtjev','a condition that must be fulfilled','Safety is a basic requirement.'],
 ['measurement','mjerenje','the process of finding a quantity','Accurate measurement requires care.'],
 ['evidence','dokaz','information supporting a conclusion','The evidence supports the hypothesis.'],
 ['research','istraživanje','systematic investigation','The research produced useful findings.'],
 ['experiment','eksperiment','a planned scientific test','The experiment took two hours.'],
 ['hypothesis','hipoteza','a proposed explanation that can be tested','The experiment tested our hypothesis.'],
 ['observation','opažanje','something noticed and recorded','The observation was unexpected.'],
 ['conclusion','zaključak','a judgment based on information','We reached a careful conclusion.'],
 ['assumption','pretpostavka','something accepted without full proof','The assumption may be incorrect.'],
 ['uncertainty','neizvjesnost','lack of complete knowledge','The model contains uncertainty.'],
 ['correlation','korelacija','a statistical relationship','Correlation does not imply causation.'],
 ['causal','uzročan','relating to cause and effect','The study investigated a causal link.'],
 ['sample','uzorak','a subset used for analysis','The sample included many students.'],
 ['institution','institucija','an established organization','The institution publishes annual reports.'],
 ['government','vlada','the group running a country','The government announced a new policy.'],
 ['citizen','građanin','a member of a state','Every citizen has rights and responsibilities.'],
 ['democratic','demokratski','relating to democracy','Democratic institutions require accountability.'],
 ['election','izbori','a process for choosing representatives','The election took place in spring.'],
 ['accountability','odgovornost za postupke','the obligation to explain decisions','Accountability strengthens public trust.'],
 ['diplomatic','diplomatski','relating to relations between states','Diplomatic talks continued for weeks.'],
 ['negotiation','pregovaranje','discussion aimed at reaching agreement','The negotiation produced a compromise.'],
 ['agreement','sporazum','a shared decision or arrangement','They signed an agreement.'],
 ['constitutional','ustavni','relating to a constitution','Constitutional rules limit state power.'],
 ['authority','vlast; autoritet','the power to make decisions','The authority issued a statement.'],
 ['transition','prijelaz','change from one condition to another','The transition took several years.'],
 ['crisis','kriza','a time of severe difficulty','The crisis affected many families.'],
 ['symbol','simbol','a sign representing an idea','The symbol appeared on the map.'],
 ['discovery','otkriće','the act of finding something unknown','The discovery surprised the researchers.'],
 ['mysterious','tajanstven','difficult to explain','A mysterious letter arrived.'],
 ['investigator','istražitelj','someone who examines facts','The investigator questioned the witness.'],
 ['coincidence','slučajnost','events occurring together by chance','It seemed like a strange coincidence.'],
 ['significance','značaj','the importance of something','We discussed the significance of the result.'],
 ['reveal','otkriti','to make previously hidden information known','The results reveal a pattern.'],
 ['secret','tajna','information kept hidden','They agreed to keep the secret.'],
 ['biodiversity','bioraznolikost','the variety of life in an area','Biodiversity supports healthy ecosystems.'],
 ['habitat','stanište','the natural home of an organism','The forest is an important habitat.'],
 ['conservation','očuvanje prirode','protection of natural resources','Conservation protects endangered species.'],
 ['sustainability','održivost','ability to continue without exhausting resources','Sustainability requires long-term thinking.'],
 ['renewable','obnovljiv','naturally replenished','Solar energy is renewable.'],
 ['pollution','onečišćenje','harmful substances in the environment','Air pollution affects health.'],
 ['community','zajednica','a group of people with common interests','The community organized a cleanup.'],
 ['resilience','otpornost','ability to recover from difficulty','Resilience helps communities adapt.'],
 ['ecosystem','ekosustav','organisms interacting with their environment','A forest is an ecosystem.'],
 ['resource','resurs','something useful that is available','Water is an essential resource.'],
 ['volunteer','volonter','someone who works without payment','A volunteer helped organize the event.'],
 ['meaningful','smislen; značajan','having genuine importance','Practice leads to meaningful progress.'],
 ['substantial','znatan','large or important','The change produced substantial benefits.'],
 ['deliberate','promišljen; namjeran','done with careful intention','Deliberate practice improves performance.'],
 ['consequence','posljedica','a result of an action','Every decision has a consequence.'],
 ['perspective','perspektiva','a way of seeing something','Travel offers a new perspective.'],
 ['evaluate','procijeniti','to assess the value or quality of something','We evaluate the results carefully.'],
 ['framework','okvir','a structure for organizing ideas','The framework guides the analysis.'],
 ['implement','provesti; implementirati','to put a plan into action','We will implement the solution.'],
 ['interpret','tumačiti','to explain the meaning of something','Experts interpret the evidence differently.'],
 ['scrutinize','pomno ispitati','to examine something very carefully','Reviewers scrutinize the report.'],
 ['incentive','poticaj','something that encourages an action','An incentive can influence behavior.'],
 ['fluctuation','kolebanje','a change up and down','The fluctuation was temporary.'],
 ['discrepancy','nepodudarnost','a difference between things that should match','The discrepancy required further investigation.'],
 ['intervention','intervencija','an action intended to change a situation','The intervention improved safety.'],
 ['underlying','temeljni; prikriven','existing beneath the surface','The report identified an underlying problem.'],
 ['unwarranted','neopravdan','not supported by good reason','The results gave them unwarranted confidence.'],
 ['fragility','krhkost','a tendency to be easily damaged','The incident exposed the system\'s fragility.'],
 ['intricate','zamršen','complex with many connected parts','The system has an intricate structure.'],
 ['conceal','prikriti','to keep something from being seen','The summary may conceal important details.'],
 ['inevitable','neizbježan','certain to happen','Some changes are inevitable.'],
 ['plausible','uvjerljiv; vjerojatan','seeming reasonable or possible','Her explanation sounded plausible.'],
 ['inconclusive','neodlučujući','not leading to a definite conclusion','The evidence remained inconclusive.'],
 ['parsimony','jednostavnost objašnjenja','preference for the simplest adequate explanation','Scientific parsimony avoids unnecessary assumptions.'],
 ['epistemic','spoznajni','relating to knowledge and its limits','The debate raised epistemic questions.'],
 ['corroboration','potkrepa dokazima','evidence that confirms a claim','Independent corroboration strengthened the account.'],
 ['school','škola','a place for learning','My sister goes to school.'],
 ['family','obitelj','people related to you','My family lives near the sea.'],
 ['garden','vrt','a place where flowers or vegetables grow','We have flowers in the garden.'],
 ['kitchen','kuhinja','the room used for cooking','Dinner is ready in the kitchen.'],
 ['shopping','kupovina','the activity of buying things','We finished our shopping early.'],
 ['prepare','pripremiti','to get something ready','I prepare breakfast every morning.'],
 ['book','knjiga; rezervirati','a written work or to arrange a reservation','I read a book on the train.'],
 ['learn','učiti','to gain knowledge or skills','I want to learn English.'],
 ['teacher','nastavnik; profesor','a person who teaches','The teacher explains the lesson.'],
 ['student','student; učenik','a person who studies','The student completed the task.'],
 ['question','pitanje','something you ask to obtain information','I have a question about the lesson.'],
 ['weather','vrijeme (meteorološko)','conditions in the atmosphere','The weather is sunny today.'],
 ['ticket','karta','a document allowing travel or entry','I bought a train ticket.'],
 ['hotel','hotel','a place offering rooms to travelers','Our hotel is near the river.'],
 ['train','vlak','a vehicle that runs on railway tracks','The train leaves early.'],
 ['station','kolodvor; stanica','a place where trains or buses stop','Meet me at the station.'],
 ['museum','muzej','a building displaying objects of interest','The museum has old paintings.'],
 ['bridge','most','a structure built to cross an obstacle','We walked across the bridge.'],
 ['harbor','luka','a sheltered place where boats are kept','The boat entered the harbor.'],
 ['beach','plaža','a sandy or pebbly area by the water','We spent the afternoon at the beach.'],
 ['river','rijeka','a natural flowing body of water','The river runs through the town.'],
 ['mountain','planina','a very high area of land','They climbed the mountain.'],
 ['city','grad','a large settlement','The city has many parks.'],
 ['travel','putovati','to move between places','I want to travel next summer.'],
 ['local','lokalan','relating to a nearby place','We ate at a local restaurant.'],
 ['culture','kultura','the shared customs and arts of a group','Travel can introduce us to a new culture.'],
 ['office','ured','a place where people work','She works in an office.'],
 ['team','tim','a group that works together','Our team finished the project.'],
 ['project','projekt','an organized piece of work','The project has a clear goal.'],
 ['application','prijava; aplikacija','a formal request or software program','I submitted my application yesterday.'],
 ['report','izvješće','an organized account of information','The report describes our results.'],
 ['task','zadatak','a piece of work to be completed','The task is easier than expected.'],
 ['manager','voditelj','a person who directs work','The manager called a meeting.'],
 ['laptop','prijenosno računalo','a portable computer','My laptop is on the desk.'],
 ['screen','zaslon','the display on a computer or phone','The screen is bright.'],
 ['button','gumb','a control you press to perform an action','Press the button to begin.'],
 ['battery','baterija','a device that stores electrical energy','The battery is nearly empty.'],
 ['computer','računalo','an electronic device that processes data','The computer runs the program.'],
 ['error','pogreška','something that is incorrect','We found an error in the code.'],
 ['code','programski kod','instructions written for a computer','The developer checked the code.'],
 ['file','datoteka','a saved collection of digital information','I saved the file on my laptop.'],
 ['light','svjetlost; svjetlo','illumination that makes things visible','The sun gives us light.'],
 ['temperature','temperatura','the degree of heat or cold','The temperature fell overnight.'],
 ['plant','biljka','a living organism that grows in soil','The plant needs water.'],
 ['energy','energija','the ability to produce work or heat','The sun provides energy.'],
 ['scientist','znanstvenik','a person who studies science','The scientist tested an idea.'],
 ['information','informacije','facts or knowledge provided','We need more information.'],
 ['history','povijest','the study of past events','We study history at university.'],
 ['country','država; zemlja','a nation with its own government','The country has a long history.'],
 ['leader','vođa','a person who guides others','The leader explained the plan.'],
 ['vote','glasati','to express a choice in an election','Many citizens vote every year.'],
 ['law','zakon','a rule established by authority','The new law protects workers.'],
 ['castle','dvorac; utvrda','a large fortified building','The castle overlooks the valley.'],
 ['letter','pismo','a written message','She found a letter in the box.'],

 ['key','ključ','a small object used to open locks','She found a key under the table.'],
 ['door','vrata','an entrance that can be opened and closed','The door is open.'],
 ['map','karta; zemljovid','a drawing that shows an area','We found the place on a map.'],
 ['home','dom; kući','the place where you live','We returned home before dinner.'],
 ['children','djeca','young people who are not adults','The children played in the garden.'],
 ['cat','mačka','a small domestic animal','The cat is asleep.'],
 ['chair','stolica','a seat with a back','The chair is near the window.'],

 ['story','priča','a description of events','The story has an unexpected ending.'],
 ['stranger','neznanac','a person you do not know','A stranger asked for directions.'],
 ['forest','šuma','a large area covered with trees','They walked through the forest.'],
 ['choice','izbor','an act of choosing between options','It was a difficult choice.'],
 ['storm','oluja','very strong wind and rain','The storm lasted all night.'],
 ['nature','priroda','the physical world and living things','We enjoy spending time in nature.'],
 ['insect','kukac','a small animal with six legs','An insect landed on the leaf.'],
 ['waste','otpad','materials no longer wanted','Recycling can reduce waste.'],
 ['tree','stablo','a tall plant with a wooden trunk','A tree provides shade.'],
 ['volunteers','volonteri','people who freely offer their time','The volunteers cleaned the park.'],
 ['recycle','reciklirati','to process used material for reuse','We recycle paper and glass.'],
 ['healthy','zdrav','in good condition','A healthy forest has many species.'],
 ['people','ljudi','human beings in general','People learn in different ways.'],
 ['change','promjena; promijeniti','to become or make something different','Small actions can create change.'],
 ['important','važan','having great value or significance','Sleep is important for learning.'],
 ['simple','jednostavan','easy to understand or do','Start with a simple exercise.'],
 ['different','različit','not the same','Different people have different views.'],
 ['together','zajedno','with one another','We study together every Friday.'],
 ['early','rano','before the usual time','I wake up early.'],
 ['help','pomoći','to make a task easier for someone','Can you help me with this task?'],
 ['future','budućnost','the time that is still to come','We are making plans for the future.']

];
