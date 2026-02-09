const questions = [
  // ✅ QUESTION 101
  {
    question: "यदि दो संख्याओं का योग 40 है तथा उनका अंतर 12 है, तो छोटी संख्या क्या होगी?",
    options: ["14", "16", "26", "28"],
    correct: 1,
    topic: "Linear Equations",
    explanation: "माना संख्याएँ $x$ और $y$ हैं। $x + y = 40$ और $x - y = 12$। समीकरणों को घटाने पर: $(x + y) - (x - y) = 40 - 12 \Rightarrow 2y = 28 \Rightarrow y = 14$।"
  },

  // ✅ QUESTION 102
  {
    question: "द्विघात समीकरण ($x^2 - 7x + 10 = 0$) के मूल होंगे:",
    options: ["2, 5", "−2, −5", "1, 10", "3, 4"],
    correct: 1,
    topic: "Quadratic Equations",
    explanation: "$x^2 - 5x - 2x + 10 = 0 \Rightarrow x(x - 5) - 2(x - 5) = 0 \Rightarrow (x - 2)(x - 5) = 0$। अतः मूल 2 और 5 हैं।"
  },

  // ✅ QUESTION 103
  {
    question: "यदि द्विघात समीकरण का विविक्तकर (Discriminant) ऋणात्मक हो, तो मूल होंगे:",
    options: ["वास्तविक और समान", "वास्तविक और असमान", "अवास्तविक", "पूर्णांक"],
    correct: 3,
    topic: "Quadratic Equations",
    explanation: "यदि $D = b^2 - 4ac < 0$ हो, तो वर्गमूल के भीतर ऋणात्मक संख्या आती है, जिससे मूल अवास्तविक (काल्पनिक) हो जाते हैं।"
  },

  // ✅ QUESTION 104
  {
    question: "बिन्दु (−8, 15) की y-अक्ष से दूरी होगी:",
    options: ["8", "15", "17", "−8"],
    correct: 1,
    topic: "Coordinate Geometry",
    explanation: "y-अक्ष से दूरी बिन्दु के x-निर्देशांक का निरपेक्ष मान $|x|$ होती है। यहाँ $|-8| = 8$ है।"
  },

  // ✅ QUESTION 105
  {
    question: "बिन्दु (5, 12) की मूल बिन्दु से दूरी होगी:",
    options: ["12", "13", "17", "25"],
    correct: 2,
    topic: "Coordinate Geometry",
    explanation: "दूरी $d = \sqrt{x^2 + y^2} = \sqrt{5^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = 13$।"
  },

  // ✅ QUESTION 106
  {
    question: "यदि दो समरूप त्रिभुजों की संगत भुजाओं का अनुपात 3 : 7 है, तो उनके क्षेत्रफलों का अनुपात होगा:",
    options: ["3 : 7", "7 : 3", "9 : 49", "21 : 49"],
    correct: 3,
    topic: "Triangles",
    explanation: "समरूप त्रिभुजों के क्षेत्रफलों का अनुपात उनकी संगत भुजाओं के अनुपात के वर्ग के बराबर होता है: $(3/7)^2 = 9/49$।"
  },
  

  // ✅ QUESTION 107
  {
    question: "यदि किसी समबाहु त्रिभुज की भुजा 10 सेमी है, तो उसकी ऊँचाई होगी:",
    options: ["5√3 सेमी", "10√3 सेमी", "(√3/2) सेमी", "8√3 सेमी"],
    correct: 1,
    topic: "Triangles",
    explanation: "समबाहु त्रिभुज की ऊँचाई $h = \frac{\sqrt{3}}{2} \times \text{side} = \frac{\sqrt{3}}{2} \times 10 = 5\sqrt{3}$ सेमी।"
  },

  // ✅ QUESTION 108
  {
    question: "एक वृत्त का व्यास 21 सेमी है। उसकी परिधि होगी:",
    options: ["44 सेमी", "66 सेमी", "132 सेमी", "33 सेमी"],
    correct: 2,
    topic: "Mensuration",
    explanation: "परिधि $C = \pi d = \frac{22}{7} \times 21 = 22 \times 3 = 66$ सेमी।"
  },

  // ✅ QUESTION 109
  {
    question: "एक गोले की त्रिज्या 14 सेमी है। उसका पृष्ठीय क्षेत्रफल होगा:",
    options: ["1232 सेमी²", "1760 सेमी²", "2464 सेमी²", "3520 सेमी²"],
    correct: 3,
    topic: "Mensuration",
    explanation: "पृष्ठीय क्षेत्रफल $= 4\pi r^2 = 4 \times \frac{22}{7} \times 14 \times 14 = 2464$ सेमी²।"
  },
  

  // ✅ QUESTION 110
  {
    question: "एक बेलन की त्रिज्या 3.5 सेमी तथा ऊँचाई 20 सेमी है। उसका आयतन होगा:",
    options: ["616 सेमी³", "770 सेमी³", "1540 सेमी³", "880 सेमी³"],
    correct: 2,
    topic: "Mensuration",
    explanation: "आयतन $V = \pi r^2 h = \frac{22}{7} \times 3.5 \times 3.5 \times 20 = 770$ सेमी³।"
  },

  // ✅ QUESTION 111
  {
    question: "यदि दो गोलों की त्रिज्याओं का अनुपात 5 : 2 है, तो उनके आयतनों का अनुपात होगा:",
    options: ["5 : 2", "25 : 4", "125 : 8", "10 : 4"],
    correct: 3,
    topic: "Mensuration",
    explanation: "आयतनों का अनुपात त्रिज्याओं के अनुपात के घन के बराबर होता है: $(5/2)^3 = 125/8$।"
  },

  // ✅ QUESTION 112
  {
    question: "5 से 45 तक की प्राकृतिक संख्याओं का समांतर माध्य होगा:",
    options: ["20", "25", "30", "35"],
    correct: 2,
    topic: "Statistics",
    explanation: "समांतर माध्य $= \frac{a + l}{2} = \frac{5 + 45}{2} = \frac{50}{2} = 25$।"
  },

  // ✅ QUESTION 113
  {
    question: "प्रथम 50 प्राकृतिक संख्याओं की माध्यिका होगी:",
    options: ["24", "25", "25.5", "26"],
    correct: 3,
    topic: "Statistics",
    explanation: "चूँकि $n = 50$ (सम) है, माध्यिका $= \frac{(n/2)\text{th term} + (n/2 + 1)\text{th term}}{2} = \frac{25 + 26}{2} = 25.5$।"
  },

  // ✅ QUESTION 114
  {
    question: "यदि माध्य = 20 तथा बहुलक = 26 है, तो माध्यिका होगी:",
    options: ["21", "22", "23", "24"],
    correct: 2,
    topic: "Statistics",
    explanation: "सूत्र: बहुलक $= 3(\text{माध्यिका}) - 2(\text{माध्य}) \Rightarrow 26 = 3M - 2(20) \Rightarrow 3M = 66 \Rightarrow M = 22$।"
  },

  // ✅ QUESTION 115
  {
    question: "एक पासे को एक बार फेंकने पर 6 आने की प्रायिकता होगी:",
    options: ["1/2", "1/3", "1/6", "2/3"],
    correct: 3,
    topic: "Probability",
    explanation: "कुल परिणाम $\{1, 2, 3, 4, 5, 6\}$ (6 हैं)। अनुकूल परिणाम $\{6\}$ (1 है)। प्रायिकता $= 1/6$।"
  },

  // ✅ QUESTION 116
  {
    question: "यदि P(A) = 0.45 है, तो P(not A) होगा:",
    options: ["0.45", "0.55", "1.45", "0"],
    correct: 2,
    topic: "Probability",
    explanation: "$P(\text{not A}) = 1 - P(A) = 1 - 0.45 = 0.55$।"
  },

  // ✅ QUESTION 117
  {
    question: "यदि किसी घटना की प्रायिकता 1 है, तो घटना कहलाती है:",
    options: ["असंभव", "संभव", "निश्चित", "अनिश्चित"],
    correct: 3,
    topic: "Probability",
    explanation: "जिस घटना का होना अनिवार्य हो, उसकी प्रायिकता 1 होती है और उसे 'निश्चित घटना' कहते हैं।"
  },

  // ✅ QUESTION 118
  {
    question: "निम्नलिखित में से कौन प्रायिकता का मान नहीं हो सकता?",
    options: ["0", "0.25", "1", "1.2"],
    correct: 4,
    topic: "Probability",
    explanation: "प्रायिकता का मान कभी भी 0 से कम या 1 से अधिक नहीं हो सकता।"
  },

  // ✅ QUESTION 119
  {
    question: "यदि किसी थैले में 5 लाल और 5 नीली गेंदें हैं, तो लाल गेंद निकलने की प्रायिकता होगी:",
    options: ["1/10", "1/5", "1/2", "3/5"],
    correct: 3,
    topic: "Probability",
    explanation: "कुल गेंदें $= 10$। लाल गेंदें $= 5$। प्रायिकता $= 5/10 = 1/2$।"
  },

  // ✅ QUESTION 120
  {
    question: "केन्द्रीय प्रवृत्ति की माप है:",
    options: ["बारंबारता", "संचयी बारंबारता", "वर्ग अंतराल", "माध्य"],
    correct: 4,
    topic: "Statistics",
    explanation: "माध्य, माध्यिका और बहुलक केन्द्रीय प्रवृत्ति की तीन प्रमुख मापें हैं।"
  },

  // ✅ QUESTION 121
  {
    question: "यदि किसी बारंबारता बंटन की माध्यिका 18 और माध्य 16 है, तो बहुलक होगा:",
    options: ["18", "20", "22", "24"],
    correct: 3,
    topic: "Statistics",
    explanation: "बहुलक $= 3(18) - 2(16) = 54 - 32 = 22$।"
  },

  // ✅ QUESTION 122
  {
    question: "यदि किसी वर्ग का क्षेत्रफल 256 वर्ग सेमी है, तो उसकी भुजा होगी:",
    options: ["12 सेमी", "14 सेमी", "16 सेमी", "18 सेमी"],
    correct: 3,
    topic: "Mensuration",
    explanation: "भुजा $= \sqrt{\text{क्षेत्रफल}} = \sqrt{256} = 16$ सेमी।"
  },

  // ✅ QUESTION 123
  {
    question: "यदि दो संख्याओं का HCF 15 और LCM 300 है, तो उनका गुणनफल होगा:",
    options: ["300", "4500", "15", "20"],
    correct: 2,
    topic: "Number System",
    explanation: "गुणनफल $= HCF \times LCM = 15 \times 300 = 4500$।"
  },

  // ✅ QUESTION 124
  {
    question: "6, 12, 18, 24, 30 का माध्य होगा:",
    options: ["15", "18", "20", "21"],
    correct: 2,
    topic: "Statistics",
    explanation: "माध्य $= (6+12+18+24+30)/5 = 90/5 = 18$।"
  },

  // ✅ QUESTION 125
  {
    question: "यदि किसी वृत्त का व्यास 56 सेमी है, तो उसकी त्रिज्या होगी:",
    options: ["14 सेमी", "21 सेमी", "28 सेमी", "56 सेमी"],
    correct: 3,
    topic: "Mensuration",
    explanation: "त्रिज्या $= \text{व्यास}/2 = 56/2 = 28$ सेमी।"
  },

  // ✅ QUESTION 126
  {
    question: "यदि दो संख्याओं का योग 54 है तथा उनका अंतर 18 है, तो छोटी संख्या क्या होगी?",
    options: ["18", "27", "36", "45"],
    correct: 1,
    topic: "Linear Equations",
    explanation: "$x + y = 54, x - y = 18 \Rightarrow 2y = 36 \Rightarrow y = 18$।"
  },

  // ✅ QUESTION 127
  {
    question: "द्विघात समीकरण ($x^2 - 11x + 30 = 0$) के मूल होंगे:",
    options: ["5, 6", "−5, −6", "3, 10", "2, 15"],
    correct: 1,
    topic: "Quadratic Equations",
    explanation: "$x^2 - 5x - 6x + 30 = 0 \Rightarrow (x - 5)(x - 6) = 0$। अतः मूल 5 और 6 हैं।"
  },

  // ✅ QUESTION 128
  {
    question: "यदि किसी द्विघात समीकरण का विविक्तकर 16 है, तो मूल होंगे:",
    options: ["अवास्तविक", "वास्तविक और समान", "वास्तविक और असमान", "पूर्णांक नहीं"],
    correct: 3,
    topic: "Quadratic Equations",
    explanation: "चूँकि $D = 16 > 0$, इसलिए मूल वास्तविक और असमान (distinct) होंगे।"
  },

  // ✅ QUESTION 129
  {
    question: "बिन्दु (−9, −12) की y-अक्ष से दूरी होगी:",
    options: ["9", "12", "15", "−9"],
    correct: 1,
    topic: "Coordinate Geometry",
    explanation: "y-अक्ष से दूरी $= |-9| = 9$।"
  },

  // ✅ QUESTION 130
  {
    question: "बिन्दु (8, 15) की मूल बिन्दु से दूरी होगी:",
    options: ["15", "16", "17", "18"],
    correct: 3,
    topic: "Coordinate Geometry",
    explanation: "$\sqrt{8^2 + 15^2} = \sqrt{64 + 225} = \sqrt{289} = 17$।"
  },

  // ✅ QUESTION 131
  {
    question: "यदि दो समरूप त्रिभुजों की संगत ऊँचाइयों का अनुपात 5 : 6 है, तो उनके क्षेत्रफलों का अनुपात होगा:",
    options: ["5 : 6", "6 : 5", "25 : 36", "30 : 36"],
    correct: 3,
    topic: "Triangles",
    explanation: "क्षेत्रफलों का अनुपात ऊँचाइयों के अनुपात के वर्ग के बराबर होता है: $(5/6)^2 = 25/36$।"
  },

  // ✅ QUESTION 132
  {
    question: "यदि किसी समबाहु त्रिभुज की भुजा 12 सेमी है, तो उसकी ऊँचाई होगी:",
    options: ["6√3 सेमी", "12√3 सेमी", "4√3 सेमी", "3√3 सेमी"],
    correct: 1,
    topic: "Triangles",
    explanation: "ऊँचाई $= (\sqrt{3}/2) \times 12 = 6\sqrt{3}$ सेमी।"
  },

  // ✅ QUESTION 133
  {
    question: "एक वृत्त का व्यास 70 सेमी है। उसकी त्रिज्या होगी:",
    options: ["70 सेमी", "35 सेमी", "14 सेमी", "7 सेमी"],
    correct: 2,
    topic: "Mensuration",
    explanation: "त्रिज्या $= 70/2 = 35$ सेमी।"
  },

  // ✅ QUESTION 134
  {
    question: "एक गोले की त्रिज्या 10.5 सेमी है। उसका पृष्ठीय क्षेत्रफल होगा:",
    options: ["924 सेमी²", "1386 सेमी²", "1764 सेमी²", "2310 सेमी²"],
    correct: 2,
    topic: "Mensuration",
    explanation: "क्षेत्रफल $= 4 \times \frac{22}{7} \times 10.5 \times 10.5 = 1386$ सेमी²।"
  },

  // ✅ QUESTION 135
  {
    question: "एक बेलन की त्रिज्या 5 सेमी और ऊँचाई 14 सेमी है। उसका आयतन होगा:",
    options: ["980 सेमी³", "1100 सेमी³", "1540 सेमी³", "1099 सेमी³"],
    correct: 2,
    topic: "Mensuration",
    explanation: "आयतन $= \frac{22}{7} \times 5 \times 5 \times 14 = 22 \times 25 \times 2 = 1100$ सेमी³।"
  },
  

  // ✅ QUESTION 136
  {
    question: "यदि दो गोलों की त्रिज्याओं का अनुपात 3 : 4 है, तो उनके आयतनों का अनुपात होगा:",
    options: ["3 : 4", "9 : 16", "27 : 64", "12 : 16"],
    correct: 3,
    topic: "Mensuration",
    explanation: "अनुपात $= (3/4)^3 = 27/64$।"
  },

  // ✅ QUESTION 137
  {
    question: "10 से 90 तक की प्राकृतिक संख्याओं का समांतर माध्य होगा:",
    options: ["45", "50", "55", "60"],
    correct: 2,
    topic: "Statistics",
    explanation: "$(10 + 90) / 2 = 50$।"
  },

  // ✅ QUESTION 138
  {
    question: "प्रथम 40 प्राकृतिक संख्याओं की माध्यिका होगी:",
    options: ["19", "20", "20.5", "21"],
    correct: 3,
    topic: "Statistics",
    explanation: "माध्यिका $= (20 + 21) / 2 = 20.5$।"
  },

  // ✅ QUESTION 139
  {
    question: "यदि माध्य = 28 तथा बहुलक = 34 है, तो माध्यिका होगी:",
    options: ["28", "29", "30", "32"],
    correct: 3,
    topic: "Statistics",
    explanation: "$3M = बहुलक + 2(माध्य) \Rightarrow 3M = 34 + 56 = 90 \Rightarrow M = 30$।"
  },

  // ✅ QUESTION 140
  {
    question: "एक पासे को एक बार फेंकने पर 5 से कम संख्या आने की प्रायिकता होगी:",
    options: ["1/6", "1/3", "1/2", "2/3"],
    correct: 4,
    topic: "Probability",
    explanation: "अनुकूल परिणाम $\{1, 2, 3, 4\}$ (4 हैं)। प्रायिकता $= 4/6 = 2/3$।"
  },

  // ✅ QUESTION 141
  {
    question: "यदि P(A) = 0.72 है, तो P(not A) होगा:",
    options: ["0.28", "0.72", "1.28", "0"],
    correct: 1,
    topic: "Probability",
    explanation: "$1 - 0.72 = 0.28$।"
  },

  // ✅ QUESTION 142
  {
    question: "यदि किसी घटना की प्रायिकता 0.5 है, तो घटना होगी:",
    options: ["असंभव", "निश्चित", "न संभव न असंभव", "अनिश्चित"],
    correct: 3,
    topic: "Probability",
    explanation: "0.5 का अर्थ है कि घटना के घटने और न घटने की संभावना बराबर है।"
  },

  // ✅ QUESTION 143
  {
    question: "निम्नलिखित में से कौन प्रायिकता का मान हो सकता है?",
    options: ["−0.25", "1.5", "0.95", "2"],
    correct: 3,
    topic: "Probability",
    explanation: "प्रायिकता हमेशा $[0, 1]$ के बीच होती है।"
  },

  // ✅ QUESTION 144
  {
    question: "यदि किसी थैले में 3 लाल, 2 नीली और 5 हरी गेंदें हैं, तो हरी गेंद निकलने की प्रायिकता होगी:",
    options: ["1/10", "1/5", "1/2", "1/3"],
    correct: 3,
    topic: "Probability",
    explanation: "कुल $= 3+2+5 = 10$। हरी $= 5$। प्रायिकता $= 5/10 = 1/2$।"
  },

  // ✅ QUESTION 145
  {
    question: "केन्द्रीय प्रवृत्ति की माप नहीं है:",
    options: ["माध्य", "माध्यिका", "बहुलक", "वर्ग अंतराल"],
    correct: 4,
    topic: "Statistics",
    explanation: "वर्ग अंतराल डेटा वर्गीकरण का हिस्सा है, केंद्र मापने का नहीं।"
  },

  // ✅ QUESTION 146
  {
    question: "यदि किसी बारंबारता बंटन की माध्यिका 22 और माध्य 20 है, तो बहुलक होगा:",
    options: ["22", "24", "26", "28"],
    correct: 3,
    topic: "Statistics",
    explanation: "बहुलक $= 3(22) - 2(20) = 66 - 40 = 26$।"
  },

  // ✅ QUESTION 147
  {
    question: "यदि किसी वर्ग का क्षेत्रफल 361 वर्ग सेमी है, तो उसकी भुजा होगी:",
    options: ["17 सेमी", "18 सेमी", "19 सेमी", "20 सेमी"],
    correct: 3,
    topic: "Mensuration",
    explanation: "भुजा $= \sqrt{361} = 19$ सेमी।"
  },

  // ✅ QUESTION 148
  {
    question: "यदि दो संख्याओं का HCF 18 और LCM 360 है, तो उनका गुणनफल होगा:",
    options: ["6480", "360", "20", "18"],
    correct: 1,
    topic: "Number System",
    explanation: "$18 \times 360 = 6480$।"
  },

  // ✅ QUESTION 149
  {
    question: "7, 14, 21, 28, 35 का माध्य होगा:",
    options: ["18", "20", "21", "24"],
    correct: 3,
    topic: "Statistics",
    explanation: "माध्य $= 105 / 5 = 21$।"
  },

  // ✅ QUESTION 150
  {
    question: "यदि किसी वृत्त का व्यास 84 सेमी है, तो उसकी त्रिज्या होगी:",
    options: ["21 सेमी", "28 सेमी", "42 सेमी", "84 सेमी"],
    correct: 3,
    topic: "Mensuration",
    explanation: "त्रिज्या $= 84 / 2 = 42$ सेमी।"
  }
];
