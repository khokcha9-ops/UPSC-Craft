// ============================================================
// UPSC SYLLABUS DATA (FULL TEXT - NO SUMMARIES)
// ============================================================

const PRELIMS_TEXT = `
    <div class="detail-card-content prelims-card">
        <strong>Paper I - (200 marks) Duration : Two hours</strong><br>
        <ul>
            <li>Current events of national and international importance.</li>
            <li>History of India and Indian National Movement.</li>
            <li>Indian and World Geography - Physical, Social, Economic Geography of India and the World.</li>
            <li>Indian Polity and Governance - Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues, etc.</li>
            <li>Economic and Social Development Sustainable Development, Poverty, Inclusion, Demographics, Social Sector initiatives, etc.</li>
            <li>General issues on Environmental Ecology, Bio-diversity and Climate Change - that do not require subject specialization.</li>
            <li>General Science.</li>
        </ul><br>
        <strong>Paper II- (200 marks) Duration: Two hours</strong>
        <ul>
            <li>Comprehension</li>
            <li>Interpersonal skills including communication skills;</li>
            <li>Logical reasoning and analytical ability</li>
            <li>Decision-making and problem-solving</li>
            <li>General mental ability</li>
            <li>Basic numeracy (numbers and their relations, orders of magnitude, etc.) (Class X level), Data interpretation (charts, graphs, tables, data sufficiency etc. - Class X level)</li>
            <li>English Language Comprehension skills (Class X level)</li>
        </ul>
    </div>`;

const ESSAY_TEXT = `
    <div class="essay-layout">
        <p>Candidates will be required to write an essay on a specific topic. The choice of subjects will be given. They will be expected to keep closely to the subject of the essay to arrange their ideas in orderly fashion, and to write concisely. Credit will be given for effective and exact expression.</p>
    </div>`;

const GS1_TEXT = `
    <div class="detail-card-content gs1-card">
        <strong>General Studies- I: Indian Heritage and Culture, History and Geography of the World and Society.</strong>
        <ul>
            <li>Indian culture will cover the salient aspects of Art Forms, Literature and Architecture from ancient to modern times.</li>
            <li>Modern Indian history from about the middle of the eighteenth century until the present- significant events, personalities, issues</li>
            <li>The Freedom Struggle - its various stages and important contributors /contributions from different parts of the country.</li>
            <li>Post-independence consolidation and reorganization within the country.</li>
            <li>History of the world will include events from 18th century such as industrial revolution, world wars, redrawal of national boundaries, colonization, decolonization, political philosophies like communism, capitalism, socialism etc.- their forms and effect on the society.</li>
            <li>Salient features of Indian Society, Diversity of India.</li>
            <li>Role of women and women's organization, population and associated issues, poverty and developmental issues, urbanization, their problems and their remedies.</li>
            <li>Effects of globalization on Indian society</li>
            <li>Social empowerment, communalism, regionalism & secularism.</li>
            <li>Salient features of world's physical geography.</li>
            <li>Distribution of key natural resources across the world (including South Asia and the Indian subcontinent); factors responsible for the location of primary, secondary, and tertiary sector industries in various parts of the world (including India)</li>
            <li>Important Geophysical phenomena such as earthquakes, Tsunami, Volcanic activity, cyclone etc., geographical features and their location- changes in critical geographical features (including water-bodies and ice-caps) and in flora and fauna and the effects of such changes.</li>
        </ul>
    </div>`;

const GS2_TEXT = `
    <div class="detail-card-content gs2-card">
        <strong>General Studies- II: Governance, Constitution, Polity, Social Justice and International relations.</strong>
        <ul>
            <li>Indian Constitution- historical underpinnings, evolution, features, amendments, significant provisions and basic structure.</li>
            <li>Functions and responsibilities of the Union and the States, issues and challenges pertaining to the federal structure, devolution of powers and finances up to local levels and challenges therein.</li>
            <li>Separation of powers between various organs dispute redressal mechanisms and institutions.</li>
            <li>Comparison of the Indian constitutional scheme with that of other countries</li>
            <li>Parliament and State Legislatures - structure, functioning, conduct of business, powers & privileges and issues arising out of these.</li>
            <li>Structure, organization and functioning of the Executive and the Judiciary Ministries and Departments of the Government; pressure groups and formal/informal associations and their role in the Polity.</li>
            <li>Salient features of the Representation of People's Act.</li>
            <li>Appointment to various Constitutional posts, powers, functions and responsibilities of various Constitutional Bodies.</li>
            <li>Statutory, regulatory and various quasi-judicial bodies</li>
            <li>Government policies and interventions for development in various sectors and issues arising out of their design and implementation.</li>
            <li>Development processes and the development industry- the role of NGOs, SHGs, various groups and associations, donors, charities, institutional and other stakeholders</li>
            <li>Welfare schemes for vulnerable sections of the population by the Centre and States and the performance of these schemes; mechanisms, laws, institutions and Bodies constituted for the protection and betterment of these vulnerable sections.</li>
            <li>Issues relating to development and management of Social Sector/Services relating to Health, Education, Human Resources.</li>
            <li>Issues relating to poverty and hunger.</li>
            <li>Important aspects of governance, transparency and accountability, e-governance- applications, models, successes, limitations, and potential; citizens charters, transparency & accountability and institutional and other measures.</li>
            <li>Role of civil services in a democracy.</li>
            <li>India and its neighborhood- relations.</li>
            <li>Bilateral, regional and global groupings and agreements involving India and/or affecting India's interests</li>
            <li>Effect of policies and politics of developed and developing countries on India's interests, Indian diaspora.</li>
            <li>Important International institutions, agencies and fora- their structure, mandate.</li>
        </ul>
    </div>`;

const GS3_TEXT = `
    <div class="detail-card-content gs3-card">
        <strong>General Studies-III: Technology, Economic Development, Bio diversity, Environment, Security and Disaster Management.</strong>
        <ul>
            <li>Indian Economy and issues relating to planning, mobilization of resources, growth, development and employment.</li>
            <li>Inclusive growth and issues arising from it.</li>
            <li>Government Budgeting.</li>
            <li>Major crops cropping patterns in various parts of the country, different types of irrigation and irrigation systems storage, transport and marketing of agricultural produce and issues and related constraints; e-technology in the aid of farmers</li>
            <li>Issues related to direct and indirect farm subsidies and minimum support prices; Public Distribution System- objectives, functioning, limitations, revamping; issues of buffer stocks and food security; Technology missions; economics of animal-rearing.</li>
            <li>Food processing and related industries in India- scope and significance, location, upstream and downstream requirements, supply chain management.</li>
            <li>Land reforms in India.</li>
            <li>Effects of liberalization on the economy, changes in industrial policy and their effects on industrial growth.</li>
            <li>Infrastructure: Energy, Ports, Roads, Airports, Railways etc.</li>
            <li>Investment models.</li>
            <li>Science and Technology- developments and their applications and effects in everyday life</li>
            <li>Achievements of Indians in science & technology; indigenization of technology and developing new technology.</li>
            <li>Awareness in the fields of IT, Space, Computers, robotics, nano-technology, bio-technology and issues relating to intellectual property rights.</li>
            <li>Conservation, environmental pollution and degradation, environmental impact assessment</li>
            <li>Disaster and disaster management.</li>
            <li>Linkages between development and spread of extremism.</li>
            <li>Role of external state and non-state actors in creating challenges to internal security.</li>
            <li>Challenges to internal security through communication networks, role of media and social networking sites in internal security challenges, basics of cyber security; money-laundering and its prevention</li>
            <li>Security challenges and their management in border areas; linkages of organized crime with terrorism</li>
            <li>Various Security forces and agencies and their mandate</li>
        </ul>
    </div>`;

const GS4_TEXT = `
    <div class="detail-card-content gs4-card">
        <strong>General Studies- IV: Ethics, Integrity, and Aptitude</strong>
        <ul>
            <li>Ethics and Human Interface: Essence, determinants and consequences of Ethics in human actions; dimensions of ethics; ethics in private and public relationships. Human Values – lessons from the lives and teachings of great leaders, reformers and administrators; role of family, society and educational institutions in inculcating values.</li>
            <li>Attitude: content, structure, function; its influence and relation with thought and behaviour; moral and political attitudes; social influence and persuasion.</li>
            <li>Aptitude and foundational values for Civil Service , integrity, impartiality and non-partisanship, objectivity, dedication to public service, empathy, tolerance and compassion towards the weaker sections.</li>
            <li>Emotional intelligence-concepts, and their utilities and application in administration and governance.</li>
            <li>Contributions of moral thinkers and philosophers from India and world.</li>
            <li>Public/Civil service values and Ethics in Public administration: Status and problems; ethical concerns and dilemmas in government and private institutions; laws, rules, regulations and conscience as sources of ethical guidance; accountability and ethical governance; strengthening of ethical and moral values in governance; ethical issues in international relations and funding; corporate governance.</li>
            <li>Probity in Governance: Concept of public service; Philosophical basis of governance and probity; Information sharing and transparency in government, Right to Information, Codes of Ethics, Codes of Conduct, Citizen's Charters, Work culture, Quality of service delivery, Utilization of public funds, challenges of corruption.</li>
            <li>Case Studies on above issues.</li>
        </ul>
    </div>`;

const ANTHRO1_TEXT = `
    <div class="detail-card-content anthro1-card">
        <strong>PAPER - I</strong>
        <ul>
            <li><strong>1.1</strong> Meaning, scope and development of Anthropology.</li>
            <li><strong>1.2</strong> Relationships with other disciplines: Social Sciences, Behavioural Sciences, Life Sciences, Medical Sciences, Earth Sciences and Humanities.</li>
            <li><strong>1.3</strong> Main branches of Anthropology, their scope and relevance:
                <ul>
                    <li>(a) Social- cultural Anthropology.</li>
                    <li>(b) Biological Anthropology.</li>
                    <li>(c) Archaeological Anthropology.</li>
                    <li>(d) Linguistic Anthropology.</li>
                </ul>
            </li>
            <li><strong>1.4</strong> Human Evolution and emergence of Man:
                <ul>
                    <li>(a) Biological and Cultural factors in human evolution.</li>
                    <li>(b) Theories of Organic Evolution (PreDarwinian, Darwinian and Post-Darwinian).</li>
                    <li>(c) Synthetic theory of evolution; Brief outline of terms and concepts of evolutionary biology (Doll's rule, Cope's rule, Gause's rule, parallelism, convergence, adaptive radiation, and mosaic evolution).</li>
                </ul>
            </li>
            <li><strong>1.5</strong> Characteristics of Primates; Evolutionary Trend and Primate Taxonomy; Primate Adaptations; (Arboreal and Terrestrial) Primate Taxonomy; Primate Behaviour; Tertiary and Quaternary fossil primates; Living Major Primates; Comparative Anatomy of Man and Apes; Skeletal changes due to erect posture and its implications.</li>
            <li><strong>1.6</strong> Phylogenetic status, characteristics and geographical distribution of the following:
                <ul>
                    <li>(a) Plio-pleistocene hominids in South and East Africa - Australopithecines.</li>
                    <li>(b) Homo erectus: Africa (Paranthropus), Europe (Homo erectus heidelbergensis), Asia (Homo erectus javanicus, Homo erectus pekinensis)</li>
                    <li>(c) Neanderthal Man- La-Chapelle-auxsaints (Classical type), Mt. Carmel (Progressive type).</li>
                    <li>(d) Rhodesian man.</li>
                    <li>(e) Homo sapiens — Cromagnon, Grimaldi and Chancelede.</li>
                </ul>
            </li>
            <li><strong>1.7</strong> The biological basis of life: The Cell, DNA structure and replication, Protein Synthesis, Gene, Mutation, Chromosomes, and Cell Division.</li>
            <li><strong>1.8</strong> (a) Principles of Prehistoric Archaeology. Chronology: Relative and Absolute Dating methods. (b) Cultural Evolution- Broad Outlines of Prehistoric cultures: (i) Paleolithic (ii) Mesolithic (iii) Neolithic (iv) Chalcolithic (v) Copper-Bronze Age (vi) Iron Age</li>
            <li><strong>2.1</strong> The Nature of Culture : The concept and characteristics of culture and civilization; Ethnocentrism vis-à-vis cultural Relativism.</li>
            <li><strong>2.2</strong> The Nature of Society: Concept of Society; Society and Culture; Social Institutions; Social groups; and Social stratification.</li>
            <li><strong>2.3</strong> Marriage: Definition and universality; Laws of marriage (endogamy, exogamy, hypergamy, hypogamy, incest taboo); Types of marriage (monogamy, polygamy, polyandry, group marriage). Functions of marriage; Marriage regulations (preferential, prescriptive and proscriptive); Marriage payments (bride wealth and dowry).</li>
            <li><strong>2.4</strong> Family: Definition and universality; Family, household and domestic groups; functions of family; Types of family (from the perspectives of structure, blood relation, marriage, residence and succession); Impact of urbanization, industrialization and feminist movements on family.</li>
            <li><strong>2.5</strong> Kinship: Consanguinity and Affinity; Principles and types of descent (Unilineal, Double, Bilateral, Ambilineal); Forms of descent groups (lineage, clan, phratry, moiety and kindred); Kinship terminology (descriptive and classificatory); Descent, Filiation and Complimentary Filiation; Descent and Alliance.</li>
            <li><strong>3.</strong> Economic organization: Meaning, scope and relevance of economic anthropology; Formalist and Substantivist debate; Principles governing production, distribution and exchange (reciprocity, redistribution and market), in communities, subsisting on hunting and gathering, fishing, swiddening, pastoralism, horticulture, and agriculture; globalization and indigenous economic systems.</li>
            <li><strong>4.</strong> Political organization and Social Control: Band, tribe, chiefdom, kingdom and state; concepts of power, authority and legitimacy; social control, law and justice in simple societies.</li>
            <li><strong>5.</strong> Religion: Anthropological approaches to the study of religion (evolutionary, psychological and functional); monotheism and polytheism; sacred and profane; myths and rituals; forms of religion in tribal and peasant societies (animism, animatism, fetishism, naturism and totemism); religion, magic and science distinguished; magicoreligious functionaries (priest, shaman, medicine man, sorcerer and witch).</li>
            <li><strong>6.</strong> Anthropological theories: (a) Classical evolutionism (Tylor, Morgan and Frazer) (b) Historical particularism (Boas); Diffusionism (British, German and American) (c) Functionalism (Malinowski); Structural-functionlism (Radcliffe-Brown) (d) Structuralism (L'evi - Strauss and E.Leach) (e) Culture and personality (Benedict, Mead, Linton, Kardiner and Cora – du Bois). (f) Neo - evolutionism (Childe, White, Steward, Sahlins and Service) (g) Cultural materialism (Harris) (h) Symbolic and interpretive theories (Turner, Schneider and Geertz) (i) Cognitive theories (Tyler, Conklin) (j) Post- modernism in anthropology</li>
            <li><strong>7.</strong> Culture, language and communication: Nature, origin and characteristics of language; verbal and non-verbal communication; social context of language use.</li>
            <li><strong>8.</strong> Research methods in anthropology: (a) Fieldwork tradition in anthropology (b) Distinction between technique, method and methodology (c) Tools of data collection: observation, interview, schedules, questionnaire, Case study, genealogy, life-history, oral history, secondary sources of information, participatory methods. (d) Analysis, interpretation and presentation of data.</li>
            <li><strong>9.1</strong> Human Genetics : Methods and Application: Methods for study of genetic principles in man-family study (pedigree analysis, twin study, foster child, co-twin method, cytogenetic method, chromosomal and karyo-type analysis), biochemical methods, immunological methods, D.N.A. technology and recombinant technologies.</li>
            <li><strong>9.2</strong> Mendelian genetics in man-family study, single factor, multifactor, lethal, sublethal and polygenic inheritance in man.</li>
            <li><strong>9.3</strong> Concept of genetic polymorphism and selection, Mendelian population, HardyWeinberg law; causes and changes which bring down frequency – mutation, isolation, migration, selection, inbreeding and genetic drift. Consanguineous and non-consanguineous mating, genetic load, genetic effect of consanguineous and cousin marriages.</li>
            <li><strong>9.4</strong> Chromosomes and chromosomal aberrations in man, methodology. (a) Numerical and structural aberrations (disorders). (b) Sex chromosomal aberrations – Klinefelter (XXY), Turner (XO), Super female (XXX), intersex and other syndromic disorders. (c) Autosomal aberrations – Down syndrome, Patau, Edward and Cri-du-chat syndromes. (d) Genetic imprints in human disease, genetic screening, genetic counseling, human DNA profiling, gene mapping and genome study.</li>
            <li><strong>9.5</strong> Race and racism, biological basis of morphological variation of non-metric and metric characters. Racial criteria, racial traits in relation to heredity and environment; biological basis of racial classification, racial differentiation and race crossing in man.</li>
            <li><strong>9.6</strong> Age, sex and population variation as genetic marker- ABO, Rh blood groups, HLA Hp, transferring, Gm, blood enzymes. Physiological characteristics-Hb level, body fat, pulse rate, respiratory functions and sensory perceptions in different cultural and socio-economic groups.</li>
            <li><strong>9.7</strong> Concepts and methods of Ecological Anthropology. Bio-cultural Adaptations – Genetic and Non- genetic factors. Man's physiological responses to environmental stresses: hot desert, cold, high altitude climate.</li>
            <li><strong>9.8</strong> Epidemiological Anthropology: Health and disease. Infectious and non-infectious diseases. Nutritional deficiency related diseases.</li>
            <li><strong>10.</strong> Concept of human growth and development: stages of growth - pre-natal, natal, infant, childhood, adolescence, maturity, senescence. Factors affecting growth and development genetic, environmental, biochemical, nutritional, cultural and socio-economic. Ageing and senescence. Theories and observations - biological and chronological longevity. Human physique and somatotypes. Methodologies for growth studies.</li>
            <li><strong>11.1</strong> Relevance of menarche, menopause and other bioevents to fertility. Fertility patterns and differentials.</li>
            <li><strong>11.2</strong> Demographic theories- biological, social and cultural.</li>
            <li><strong>11.3</strong> Biological and socio-ecological factors influencing fecundity, fertility, natality and mortality.</li>
            <li><strong>12.</strong> Applications of Anthropology: Anthropology of sports, Nutritional anthropology, Anthropology in designing of defence and other equipments, Forensic Anthropology, Methods and principles of personal identification and reconstruction, Applied human genetics – Paternity diagnosis, genetic counseling and eugenics, DNA technology in diseases and medicine, serogenetics and cytogenetics in reproductive biology.</li>
        </ul>
    </div>`;

const ANTHRO2_TEXT = `
    <div class="detail-card-content anthro2-card">
        <strong>Paper II</strong>
        <ul>
            <li><strong>1.1</strong> Evolution of the Indian Culture and Civilization — Prehistoric (Palaeolithic, Mesolithic, Neolithic and Neolithic Chalcolithic). Protohistoric (Indus Civilization): Pre- Harappan, Harappan and postHarappan cultures. Contributions of tribal cultures to Indian civilization.</li>
            <li><strong>1.2</strong> Palaeo – anthropological evidences from India with special reference to Siwaliks and Narmada basin (Ramapithecus, Sivapithecus and Narmada Man).</li>
            <li><strong>1.3</strong> Ethno-archaeology in India : The concept of ethno-archaeology; Survivals and Parallels among the hunting, foraging, fishing, pastoral and peasant communities including arts and crafts producing communities.</li>
            <li><strong>2.</strong> Demographic profile of India — Ethnic and linguistic elements in the Indian population and their distribution. Indian population – factors influencing its structure and growth.</li>
            <li><strong>3.1</strong> The structure and nature of traditional Indian social system — Varnashram, Purushartha, Karma, Rina and Rebirth.</li>
            <li><strong>3.2</strong> Caste system in India- structure and characteristics, Varna and caste, Theories of origin of caste system, Dominant caste, Caste mobility, Future of caste system, Jajmani system, Tribe- caste continuum.</li>
            <li><strong>3.3</strong> Sacred Complex and Nature- Man-Spirit Complex.</li>
            <li><strong>3.4</strong> Impact of Buddhism, Jainism, Islam and Christianity on Indian society.</li>
            <li><strong>4.</strong> Emergence and growth of anthropology in India-Contributions of the 18th, 19th and early 20th Century scholar-administrators. Contributions of Indian anthropologists to tribal and caste studies.</li>
            <li><strong>5.1</strong> Indian Village: Significance of village study in India; Indian village as a social system; Traditional and changing patterns of settlement and inter-caste relations; Agrarian relations in Indian villages; Impact of globalization on Indian villages.</li>
            <li><strong>5.2</strong> Linguistic and religious minorities and their social, political and economic status.</li>
            <li><strong>5.3</strong> Indigenous and exogenous processes of socio-cultural change in Indian society: Sanskritization, Westernization, Modernization; Inter-play of little and great traditions; Panchayati raj and social change; Media and social change.</li>
            <li><strong>6.1</strong> Tribal situation in India – Bio-genetic variability, linguistic and socio-economic characteristics of tribal populations and their distribution.</li>
            <li><strong>6.2</strong> Problems of the tribal Communities — land alienation, poverty, indebtedness, low literacy, poor educational facilities, unemployment, underemployment, health and nutrition.</li>
            <li><strong>6.3</strong> Developmental projects and their impact on tribal displacement and problems of rehabilitation. Development of forest policy and tribals. Impact of urbanization and industrialization on tribal populations.</li>
            <li><strong>7.1</strong> Problems of exploitation and deprivation of Scheduled Castes, Scheduled Tribes and Other Backward Classes. Constitutional safeguards for Scheduled Tribes and Scheduled Castes.</li>
            <li><strong>7.2</strong> Social change and contemporary tribal societies: Impact of modern democratic institutions, development programmes and welfare measures on tribals and weaker sections.</li>
            <li><strong>7.3</strong> The concept of ethnicity; Ethnic conflicts and political developments; Unrest among tribal communities; Regionalism and demand for autonomy; Pseudo-tribalism; Social change among the tribes during colonial and post-Independent India.</li>
            <li><strong>8.1</strong> Impact of Hinduism, Buddhism, Christianity, Islam and other religions on tribal societies.</li>
            <li><strong>8.2</strong> Tribe and nation state — a comparative study of tribal communities in India and other countries.</li>
            <li><strong>9.1</strong> History of administration of tribal areas, tribal policies, plans, programmes of tribal development and their implementation. The concept of PTGs (Primitive Tribal Groups), their distribution, special programmes for their development. Role of N.G.O.s in tribal development.</li>
            <li><strong>9.2</strong> Role of anthropology in tribal and rural development.</li>
            <li><strong>9.3</strong> Contributions of anthropology to the understanding of regionalism, communalism, and ethnic and political movements.</li>
        </ul>
    </div>`;

// Master Object
const SYLLABUS_DATA = {
    'prelims': { title: 'Prelims', icon: '🏛️', color: '#64748b', html: PRELIMS_TEXT },
    'essay': { title: 'Essay', icon: '✍️', color: '#0f766e', html: ESSAY_TEXT },
    'gs1': { title: 'GS Paper 1', icon: '🕌', color: '#2563eb', html: GS1_TEXT },
    'gs2': { title: 'GS Paper 2', icon: '⚖️', color: '#059669', html: GS2_TEXT },
    'gs3': { title: 'GS Paper 3', icon: '🌾', color: '#d97706', html: GS3_TEXT },
    'gs4': { title: 'GS Paper 4', icon: '🧭', color: '#7c3aed', html: GS4_TEXT },
    'anthro1': { title: 'Anthro Paper 1', icon: '🧬', color: '#db2777', html: ANTHRO1_TEXT },
    'anthro2': { title: 'Anthro Paper 2', icon: '🪨', color: '#ea580c', html: ANTHRO2_TEXT }
};
