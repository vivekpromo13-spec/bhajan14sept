// Bhajan Sangrah — song data
// To add a new bhajan: copy an entry below, give it a unique id (used in the
// web address), a title, a category, and paste the lyrics between the
// backticks. Keep blank lines where you want a verse break.

const BHAJANS = [
  {
    id: "om-gan-ganapataye",
    title: "Om Gan Ganapataye Namo Namah",
    category: "Ganesh",
    lyrics: `Om Gan Ganapataye Namo Namah
Shree Siddhi Vinayak Namo Namah
Ashtavinayak Namo Namah
Ganapati Bappa Moraya`
  },
  {
    id: "ganesh-dheemahi",
    title: "Ganesh Dheemahi",
    category: "Ganesh",
    lyrics: `Gananayaka Ganadaivataya Ganadaksha Yadhimahi
Guna shariraya Guna Manditaya Guneshanay Dhimahi
Gunaditaya Gunadhishaya Guna pravishtaya Dhimahai
Ekadantaya Vakratundaya Gauri tanahaya yadhi mahi
Gajeshanaya Bhalchandraya Shree Ganeshaya Dhimahi
(Ekadantaya Vakratundaya Gauri Tanahaya Yadhi Mahi
Gajeshanaya Bhalchandraya Shree Ganeshaya Dhimahi)

Gaanachaturaya Ganaapranaya Gaanantaratmane
Gaanot Sukhay Gaanamattaya Gannott Sukha Mana Se
Guru Pujitaya, Guru Daivataya, Guru Kulasthaine
Guru Vikramaya, Guiyya Pravaraya Gurave Guna Gura ve
Gurudaitya Kalakchetre, Guru Dharma Sada Rakdhyaya
Guru Putra Paritratre Guru Pakhand Khand Khaya
Geet Saraya, Geet Tatvaya Geet Kotraya Dhimahi
Gudha Gulfaya, Gandha Mattaya Gojaya Pradaya Dhimahi
Gunaditaya Gunadhishaya Guna Pravishtaya Dhimahai
Ekadantaya Vakratundaya Gauri Tanahaya Yadhi Mahi
Gajeshanaya Bhalchandraya Shree Ganeshaya Dhimahi
(Ekadantaya Vakratundaya Gauri Tanahaya Yadhi Mahi
Gajeshanaya Bhalchandraya Shree Ganeshaya Dhimahi)`
  },
  {
    id: "ghar-mein-padharo-gajanan-ji",
    title: "Ghar Mein Padharo Gajanan Ji",
    category: "Ganesh",
    lyrics: `Padharo Padharo, Ghar Mein Padharo (x2)

Ghar Mein Padharo Gajananji,
Mere Ghar Mein Padharo
(x4)
Riddhi Siddhi Leke Aao Ganaraja
Mere Ghar Mein Padharo (x2)
Ghar mein Padharo, Ghar mein Padharo, Ghar mein Padharo
Ghar Mein Padharo Gajananji
Mere Ghar Mein Padharo (x2)

Ram Ji Aana, Lakshman Ji Aana (x4)
Sang Mein Lana Sita Maiya,
Ghar Mein Padharo Gajananji
Mere Ghar Mein Padharo

Bramha Ji Aana, Vishnu Ji Aana (x4)
Bhole Shankar Ji Ko Le Aana,
Mere Ghar mein padharo
Ghar Mein Padharo Gajananji
Mere Ghar Mein Padharo

Lakshmee Ji Aana, Gauri Ji Aana (x4)
Sarasvatee Maiya Ko Le Aana,
Ghar Mein Padharo Gajananji
Mere Ghar Mein Padharo

Vighan Ko Haarana, Mangal Karana (x4)
Kaaraj Shubh Kar Jana,
Mere Ghar Mein Padharo

Ghar Mein Padharo
Mere Ghar Mein Padharo (x5)`
  },
  {
    id: "aao-aao-gajanan-aao",
    title: "Aao Aao Gajanan Aao",
    category: "Ganesh",
    lyrics: `Aao Aao Gajanan Aao (x2)
Aake Bhakton Ka Maan Badhao (x2)
Aao Aao Gajanan Aao (x2)
Aake Bhakton Ka Maan Badhao (x2)

Om Gana Ganapataye Namo Namah,
Shri Siddhivinayak Namo Namah,
Ashtavinayak Namo Namah,
Ganpati Bappa Morya (x2)

Bhole Shankar Ke Putra Gajanan,
Gaura Maiya Ke Putra Gajanan, (x2)
Aake Bhakton Ke Man Ko Bhao (x2)
Aake Bhakton Ka Maan Badhao (x2)

Aao Aao Gajanan Aao (x2)
Aake Bhakton Ka Maan Badhao (x2)
Aao Aao Gajanan Aao (x2)
Aake Bhakton Ka Maan Badhao (x2)

Om Gana Ganapataye Namo Namah,
Shri Siddhivinayak Namo Namah,
Ashtavinayak Namo Namah,
Ganpati Bappa Morya (x2)

Riddhi Siddhi Ko Sang Mein Laana,
Gaura Maiya Ko Bhool Na Jaana, (x2)
Aane Mein Der Na Lagao (x2)
Aake Bhakton Ka Maan Badhao (x2)

Aao Aao Gajanan Aao (x2)
Aake Bhakton Ka Maan Badhao (x2)
Aao Aao Gajanan Aao (x2)
Aake Bhakton Ka Maan Badhao (x2)

Om Gana Ganapataye Namo Namah,
Shri Siddhivinayak Namo Namah,
Ashtavinayak Namo Namah,
Ganpati Bappa Morya (x2)

Hum Sabke Pyare Gajanan
Sab Devon Se Nyare Gajanan (x2)
Aake Kirtan Mein Ras Barsao (x2)
Aake Bhakton Ka Maan Badhao (x2)

Aao Aao Gajanan Aao (x2)
Aake Bhakton Ka Maan Badhao (x2)
Aao Aao Gajanan Aao (x2)
Aake Bhakton Ka Maan Badhao (x6)`
  },
  {
    id: "jai-ganesh-aarti",
    title: "Jai Ganesh Aarti",
    category: "Ganesh",
    lyrics: `Jai Ganesh, Jai Ganesh, Jai Ganesh Deva (x4)
Mata Jaki Parvati, Pita Mahadeva (x2)

Ek Dant Dayavant, Char Bhuja Dhari (x2)
Mathe Par Tilak Sohe, Muse Ki Savari (x2)
Pan Chadhe, Phul Chadhe, Aur Chadhe Meva (x2)
Ladduan Ka Bhog Lage, Sant Kare Seva (x2)

Jai Ganesh, Jai Ganesh, Jai Ganesh Deva (x2)
Mata Jaki Parvati, Pita Mahadeva (x2)

Andhan Ko Ankh De, To Kodhin Ko Kaaya (x2)
Baanjhan Ko Putra De, To Nirdhan Ko Maya (x2)
Surya Shaam Sharan Aye, Safal Kije Seva (x2)
Mata Jaki Parvati, Pita Mahadeva (x2)

Jai Ganesh, Jai Ganesh, Jai Ganesh deva (x2)
Mata jaki Parvati, Pita Mahadeva (x2)

Bheenan Ki Laaj Rakho, Shambhu Putra Vaari (x2)
Manurat Ko Poora Karo, Jayu Balihari (x2)
Jai Ganesh, Jai Ganesh, Jai Ganesh Deva (x4)
Mata Jaaki Parvati, Pita Mahadeva (x4)`
  },
  {
    id: "sukhkarta-dukhharta",
    title: "Sukhkarta Dukhharta",
    category: "Ganesh",
    lyrics: `सुखकर्ता दुखहर्ता वार्ता विघनाची ।
नुरवी पुरवी प्रेम कृपा जयाची ॥

सर्वांगी सुंदर उटी शेंदुराची ।
कंठी झळके माळ मुक्ताफळांची ॥

जय देव जय देव जय मंगलमूर्ती ।
दर्शनमात्रे मनकामना पुर्ती ॥ जय देव जय देव ॥

१. रत्नखचित फरा तुज गौरीकुमरा ।
चंदनाची उटी कुंकुमाचा केशरा ॥

हीरे जडित मुकुट शोभतो बरा ।
रुणझुणती नूपुरे चरणी घागरिया ॥

जय देव जय देव जय मंगलमूर्ती ।
दर्शनमात्रे मनकामना पुर्ती ॥ जय देव जय देव ॥

२. लंबोदर पीतांबर फणिवर वंदना ।
सरळ सोंड वक्रतुंड त्रिनयना ॥

दास रामाचा वाट पाहे सदना ।
संकटी पावावे निर्वाणी रक्षावे सुरवरवंदना ॥

जय देव जय देव जय मंगलमूर्ती ।
दर्शनमात्रे मनकामना पुर्ती ॥ जय देव जय देव ॥

३. शेंदुर लाल चढ़ायो अच्छा गजमुख को ।
दोंदिल लाल बिराजे सुत गौरीहर को ॥

हाथ लिये गुड़-लड्डू साईं सुरवर को ।
महिमा कहे न जाय लागत हूँ पद को ॥

जय जय श्री गणराज विद्या सुखदाता ।
धन्य तुम्हारा दर्शन मेरा मन रमता ॥ जय देव जय देव ॥

४. अष्टौ सिद्धि दासी संकट को बैरी ।
विघ्न-विनाशन मंगल मूरति अधिकारी ॥

कोटि सूरज प्रकाश ऐसी छवि तेरी ।
गंड-स्थल मदमस्तक झूले शशिहारी ॥

जय जय श्री गणराज विद्या सुखदाता ।
धन्य तुम्हारा दर्शन मेरा मन रमता ॥ जय देव जय देव ॥

५. भाव-भगत से कोई शरणागत आवे ।
संतति संपति सबही भरपूर पावे ॥

ऐसे तुम महाराज मोको अति भावे ।
गोसावीनंदन निशदिन गुण गावे ॥

जय जय श्री गणराज विद्या सुखदाता ।
धन्य तुम्हारा दर्शन मेरा मन रमता ॥ जय देव जय देव ॥

जय देव जय देव जय मंगलमूर्ती ।
दर्शनमात्रे मनकामना पुर्ती ॥ जय देव जय देव ॥

— English Transliteration —

Jai Dev Jai Dev Jai Mangal Murti | Darshan Matre Man Kamana Purti || Jai Dev Jai Dev ||

[1] Ratnakhachit Phara Tujh Gaurikumra | Chandanaachi Uti Kumkuma Ke Shara ||
Hire Jadit Mukut Shobhato Bara | Runjhunati Nupure Charani Ghagriya ||
Jai Dev Jai Dev Jai Mangal Murti | Darshan Matre Man Kamana Purti || Jai Dev Jai Dev ||

[2] Lambodar Pitambar Phanivar Vandana | Saral Sond Vakratunda Trinayana ||
Das Ramacha Vat Pahe Sadna | Sankati Pavave Nirvani Rakshave Survar Vandana ||
Jai Dev Jai Dev Jai Mangal Murti | Darshan Matre Man Kamana Purti || Jai Dev Jai Dev ||

[3] Shendur Lal Chadhayo Acchha Gajamukhako | Dondil Lal Biraje Sut Gauriharko ||
Hath Liye Gud-Laddu Sain Suravarako | Mahima Kahe Na Jaay Lagat Hoon Padako |
Jai Jai Shri Ganaraj Vidya Sukhadata | Dhany Tumhara Darshan Mera Man Ramata || Jai Dev Jai Dev ||

[4] Ashtau Siddhi Dasi Sankatako Bairi | Vighna-Vinashan Mangal Murat Adhikari ||
Koti Suraj Prakash Aisee Chhabi Teri | Gandasthal Madamastak Jhoole Shashihari
Jai Jai Shri Ganaraj Vidya Sukhadata | Dhany Tumhara Darshan Mera Man Ramata || Jai Dev Jai Dev ||

[5] Bhav-Bhagat Se Koi Sharanagat Aave | Santat Sampat Sabahi Bharapoor Pave ||
Aise Tum Maharaj Moko Ati Bhave | Gosavinandan Nishidin Gun Gave ||
Jai Jai Shri Ganaraj Vidya Sukhadata | Dhany Tumhara Darshan Mera Man Ramata || Jai Dev Jai Dev ||

Jai Dev Jai Dev Jai Mangal Murti | Darshan Matre Man Kamana Purti || Jai Dev Jai Dev ||`
  },
  {
    id: "shiv-kailash-ke-waasi",
    title: "Shiv Kailash Ke Waasi",
    category: "Shiv",
    lyrics: `Shiv Kailashon ke waasi
Dhauli dhaaron ke raja
Shankar, sankat harna
Shankar, sankat harna
Shiv Kailashon ke waasi
Dhauli dhaaron ke raja
Shankar, sankat harna
Shankar, sankat harna

Tere Kailashon ka ant na paaya
Tere Kailashon ka ant na paaya
Ant be-ant teri maya
O, Bhole Baba, ant b-ant teri maya

Shiv Kailashon ke waasi
Dhauli dhaaron ke raja
Shankar, sankat harna
Shankar, sankat harna

Bel ki pattiyan, bhaang, dhatura
Bel ki pattiyan, bhaang, dhatura
Shiv ji ke mann ko lubhaaye
O, Bhole Baba, Shiv ji ke mann ko lubhaye

Shiv Kailashon ke waasi
Dhauli dhaaron ke raja
Shankar, sankat harna
Shankar, sankat harna

Ek tha dera tera Chambe de chagana
Ek tha dera tera Chambe de chagana
Dooja laayi dita bhar mora
O, Bhole Baba, dooja laayi baitha bhar mora

Shiv Kailashon ke waasi
Dhauli dhaaron ke raja
Shankar, sankat harna
Shankar, sankat harna

Shankar, sankat harna`
  },
  {
    id: "namo-namo-shankara",
    title: "Namo Namo Shankara",
    category: "Shiv",
    excluded: true
  },
  {
    id: "mere-ghar-ram-aaye-hai",
    title: "Mere Ghar Ram Aaye Hai / Ram Ratan Dhan Payo",
    category: "Ram",
    lyrics: `Meri Chaukhat Pe Chal Ke Aaj Charo Dham Aaye Hain
Bajao Dhol Swagat Mein Mere Ghar Ram Aaye Hain
Katha Shabri Ki Jaise Judd Gayi Meri Kahaani Se
Na Roko Aaj Dhone Do Charan Aankhon Ke Paani Se
Bahut Khush Hain Mere Aansu Ke Prabhu Ke Kaam Aaye Hain
Bajao Dhol Swagat Mein Mere Ghar Ram Aaye Hai

Vastu Amolik Di Mere Satguru (x2)
Kirpa Kar Apnaayo
Paayo Ji Maine
Kirpa Kar Apnaayo
Paayo ji maine ram ratan dhan paayo
Paayo ji maine ram ratan dhan paayo

Janam Janam Ki Punji Payi (x2)
Jag Me Sabhi Khuvaayo
Paayo Ji Maine
jag me sabhi khuvaayo
Paayo ji maine ram ratan dhan paayo
Paayo ji maine ram ratan dhan paayo

Darshan Paa Ke Hey Avtaari
Dhanya Hue Hain Nain Pujaari
Jeewan Naiyan Tumne Taari
Mangal Bhawan Amangal Haari
Mangal Bhawan Amangal Haari
Nirdhan Ka Tum Dhan Ho Raghav
Tum Hi Ramayan Ho Raghav
Sab Dukh Harna Avadh Bihari
Mangal Bhawan Amangal Haari
Mangal Bhawan Amangal Haari
Mangal Bhawan Amangal Haari
Charan Ki Dhool Le Loon Main
Mere Bhagwan Aaye Hai
Bajao Dhol Swagat Mein
Mere Ghar Ram Aaye Hai

Meri Chaukhat Pe Chal Ke Aaj
Charo Dham Aaye Hain
Bajao Dhol Swagat Mein
Mere Ghar Ram Aaye Hain`
  },
  {
    id: "ram-ko-dekh-kar-janak-nandini",
    title: "Ram Ko Dekh Kar Janak Nandini",
    category: "Ram",
    lyrics: `Ram Ko Dekh Kar Shri Janak Nandini,
Baagh Mein Vo Khadi Ki Khadi Rehe Gayi (x2)
Ram Dekhe Siya Ma Siya Ram Ko,
Chaare Ankhia Ladi Ki Ladi Rehe Gayi (x2)
Ram Ko Dekh Kar Ke

The Janak Pur Gaye Dekhane Ke Liye (x2)
Saari Sakhiyaan Jharokho Se Jhaankan Lagi (x2)
Dekhate Hi Najar Mil Gayi Prem Ki,
Jo Jahaan The Khadi Ki Khadi Rehe Gayi (x2)
Ram Ko Dekh Kar Ke Shri Janak Nandini,
Baagh Mein Vo Khadi Ki Khadi Rehe Gayi

Boli Hai Ek Sakhi Ram Ko Dekhakar (x2)
Rach Gayi Hai Vidhaata Ne Jodi Sughar (x2)
Par Dhanush Kaise Todenge Vaare Kavar,
Man Mein Shanka Bani Ki Bani Rehe Gayi (x2)
Ram Ko Dekh Kar Shri Ke Janak Nandini,
Baagh Mein Vo Khadi Ki Khadi Rehe Gayi

Boli Dooji Sakhi Chhota Dekhan Mein Hai (x2)
Par Chamatkaar Inaka Nahin Jaanati (x2)
Ek Hee Baan Mein Taadika Raakshasi,
Uth Saki Na Padi Ki Padi Rah Gayee (x2)
Ram Ko Dekh Kar Ke Janak Nandinee,
Baag Mein Vo Khadee Kee Khadee Rah Gayee`
  },
  {
    id: "o-paalanhare",
    title: "O Paalanhare",
    category: "Krishna & Radha",
    excluded: true
  },
  {
    id: "yashomati-maiya-se",
    title: "Yashomati Maiya Se",
    category: "Krishna & Radha",
    excluded: true
  },
  {
    id: "mithe-ras-se-bharori",
    title: "Mithe Ras Se Bharori",
    category: "Krishna & Radha",
    lyrics: `Meethe Ras Se Bharori, Raadha Raani Laage, Raadha Raani Laage
Mane Khaaro Khaaro, Yamunaji-no Paani Laage (x2)
Mane Khaaro Khaaro, Yamunaji-no Paani Laage

Yamuna Maiya Kaadi Kaadi, Raadha Gori Gori
Vrindavan Mein Dhoom Machave, Barsane Ri Chori (x2)
Vraj Dhaam Raadhaju ki, Raj Dhaani Laage, Raj Dhaani Laage
Mane Pyaaro Pyaaro, Yamunaji-no Paani Laage (x2)
Mithe Ras Se Bharori, Raadha Raani Laage, Raadha Raani Laage
Mane Kaaro Kaaro, Yamunaji-no Paani Laage (x2)

Na Bhaave Maney Maakhan Misri, Ab Na Koi Mithai
Maari Jeebhariya Ne Bhaave Ab To Raadha Naama Malai (x2)
Vrasha Bhanu Ki Lali To, Guna Dhaani Laage, Guna Dhaani Laage
Mane Pyaaro Pyaaro, Yamunaji-ro Paani Laage (x2)
Mithe Ras Se Bharori, Raadha Raani Laage, Raadha Raani Laage
Mane Kaaro Kaaro, Yamunaji-no Paani Laage (x2)`
  },
  {
    id: "achyutam-keshavam",
    title: "Achyutam Keshavam",
    category: "Krishna & Radha",
    lyrics: `Achyutam Keshavam Krishna Damodaram (x2)
Rama Naraynam Janaki Vallabham (x2)
Kaun Kehte Hai Bhagvan Aate Nahi (x2)
Tum Hum Meera Ke Jaise Bulate Nahi (x2)
Achyutam Keshavam Krishna Damodaram (x2)
Rama Naraynam Janaki Vallabham (x2)

Kaun Kehte Hai Bhagvan Khaate Nahi (x2)
Ber Shabri ke jaise khilate Nahi (x2)
Achyutam Keshavam Krishna Damodaram (x2)
Rama Naraynam Janakivallabham (x2)

Kaun Kehte Hai Bhagvan Sote Nahi (x2)
Maa Yashoda Ke Jaise Sulate Nahin (x2)
Achyutam Keshavam Krishna Damodaram (x2)
Rama Naraynam Janakivallabham (x2)

Kaun Kehte Hai Bhagvan Nachthe Nahi
Gopiyo Ki Tarah Hum Nachathae Nahi
Achyutam Keshavam Krishna Damodaram
Rama Naraynam Janakivallabham`
  },
  {
    id: "shri-krishna-govinda-hare-murari",
    title: "Shri Krishna Govinda Hare Murari",
    category: "Krishna & Radha",
    lyrics: `Shri Krishna Govinda Hare Murari
He Nath Narayan Vasudeva (x2)

Shree Krishna Govind Hare Murari
He Nath Narayan Vasudeva

Pitu Maat Swami Sakha Humare
He Nath Narayan Vasudeva (x2)

Shree Krishna Govind Hare Murari
He Nath Narayan Vasudeva (x2)

Thakur Humare Prano Se Pyaare
Tum Ho Humare Hum Hain Tumhare (x2)
He Nath Narayan Vasudeva (x2)

Shree Krishna Govind Hare Murari
He Nath Narayan Vasudeva (x2)`
  },
  {
    id: "radhika-gori-se",
    title: "Radhika Gori Se",
    category: "Krishna & Radha",
    lyrics: `Radhika Gori Se, Biraj Ki Chhori Se
Maiya Karade Mero Byah
Umar Teri Chhoti Hai, Nazar Teri Khoti Hai
Kaise Karadu Tero Byah

Tu Jo Na Byah Karaye, Teri Gaiya Na Charau
Aaj Ki Baad Meri Maiya, Teri Dehli Pe Na Aau
Aayega, Re Mazza, Re Mazza, Ab Jeet Haar Ka
Radhika Gori Se, Biraj Ki Chhori Se
Maiya Karade Mero Byah
Umar Teri Chhoti Hai, Nazar Teri Khoti Hai
Kaise Karadu Tero Byah

Chandan Ki Chowki Par, Maiya Tujhko Bethaun
Aapni Radha Se Me, Ha Charan Tere Dabwaaun
Bojan Mai, Banwaunga, Banwaunga, Chapaan Prakar Ke
Radhika Gori Se, Biraj Ki Chhori Se
Maiya Karade Mero Byah
Umar Teri Chhoti Hai, Nazar Teri Khoti Hai
Kaise Karadu Tero Byah`
  },
  {
    id: "govind-bolo-chori-chori-makhan",
    title: "Govind Bolo Hari Gopal Bolo / Chori Chori Makhan Khai Gayo Re",
    category: "Krishna & Radha",
    lyrics: `Choti Choti Gaiya Chotay Chotay Gwaal (x2)
Chotoso Mero Madan Gopal (x2)
Choti Choti Gaiya Chotay Chotay Gwaal (x2)
Chotoso Mero Madan Gopal (x2)

Aage Aage Gaiya Pichay Pichay Gwaal (x2)
Beech-May Mero Madan Gopal (x2)
Choti Choti Gaiya Chotay Chotay Gwaal (x2)
Chotoso, Chotoso, Chotoso Mero Madan Gopal
Chotoso Mero Madan Gopal
Choti Choti Gaiya Chotay Chotay Gwaal (x2)
Chotoso Mero Madan Gopal (x2)

Govind Bolo Hari Gopal Bolo
Govind Bolo Hari Gopal Bolo
Govind Bolo Gopal Bolo
Radha Raman Hari Govind Bolo
Govind Bolo Gopal Bolo

Chori Chori Makhan Khai Gayo Re Vo Tho Choro Govaalko (x2)

Mein Ne Use Pucha Ke Naam Tera Kya Hein (x2)
Krishna-Kanaya Batay Gayo Re Vo Tho Choro Govaalko (x2)
Chori Chori Makhan Khai Gayo Re Vo Tho Choro Govaalko (x2)

Meine Use Pucha Ke Gau Tera Kya Hein (x2)
Gokula-Mathura Batay Gayo Re Vo Tho Choro Govaalko (x2)
Chori Chori Makhan Khai Gayo Re Vo Tho Choro Govaalko (x2)`
  },
  {
    id: "govind-jai-jai-gopal-jai-jai",
    title: "Govind Jai Jai Gopal Jai Jai",
    category: "Krishna & Radha",
    lyrics: `Govind jai jai, Gopal jai jai (x2)
Radha Raman hari Govind jai jai (x2)
Govind jai jai, Gopal jai jai (x2)
Radha Raman hari govind jai jai (x2)

Brahma ki jai jai, Vishnu ki jai jai (x2)
Uma Pati Shiv Shankar ki jai jai (x2)
Govind jai jai, gopal jai jai (x2)
Radha Raman hari govind jai jai (x2)

Radha ki jai jai, Rukmini ki jai jai (x2)
Mor Mukut Bansi Wale ki jai jai (x2)
Govind jai jai, gopal jai jai (x2)
Radha Raman hari govind jai jai (x2)`
  },
  {
    id: "hare-krishna-maha-mantra",
    title: "Hare Krishna Maha Mantra",
    category: "Krishna & Radha",
    lyrics: `Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare
Hare Rama, Hare Rama, Rama Rama, Hare Hare
Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare
Hare Rama, Hare Rama, Rama Rama, Hare Hare`
  },
  {
    id: "raadha-dhund-rahi",
    title: "Raadha Dhund Rahi",
    category: "Krishna & Radha",
    lyrics: `Raadha Dhund Rahi, Kisine Mera Shaam Dekha (x2)
Shaam Dekha, Ghanshyaam Dekha (x2)
Raadha Dhund Rahi, Kisine Mera Shaam Dekha (x2)

Radha Tera Shaam Hamne Mathura Mein Dekha (x4)
Bansi Bajaate Huye, Ho Raadha Tera Shaam Dekha (x2)
Raadha Dhund Rahi, Kisine Mera Shaam Dekha (x2)

Raadha Tera Shaam Hamne Gokul Mein Dekha (x4)
Are Gaiyan Charaate Huye, Ho Raadha Tera Shaam Dekha (x2)
Raadha Dhund Rahi, Kisine Mera Shaam Dekha (x2)

Raadha Tera Shaam Hamne Vrindavan Mein Dekha (x4)
Raas Rachaate Huye, Ho Raadha Tera Shaam Dekha (x2)
Raadha Dhund Rahi, Kisine Mera Shaam Dekha (x2)`
  },
  {
    id: "radhe-radhe-radhe-radhe",
    title: "Radhe Radhe Radhe Radhe",
    category: "Krishna & Radha",
    excluded: true
  },
  {
    id: "jai-jai-radha-raman-hari-bol",
    title: "Jai Jai Radha Raman Hari Bol",
    category: "Krishna & Radha",
    lyrics: `Jai Jai Radha, Jai Jai Radha
Jai Jai Radha Raman Hari Bol (x4)
Jai Jai Radha Raman Hari Bol (x4)
Jai Jai Radha Raman Hari Bol (x4)

Jai Jai Radha Raman Hari Bol (x2)
Jai Jai Radha Raman Hari Bol (x4)

Hari Bol Hari Bol Hari Bol (x4)`
  }
];
