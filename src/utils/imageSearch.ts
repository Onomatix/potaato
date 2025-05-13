// Mapping our meal categories to TheMealDB image hashes with alternate spellings
const MEAL_IMAGES = {
  // Base items (breads and rice)
  "roti": { hash: "rzdqp81504540764" },  // Naan/Roti image
  "chapati": { hash: "rzdqp81504540764" }, // Alternative spelling
  "chapatti": { hash: "rzdqp81504540764" }, // Alternative spelling
  "phulka": { hash: "rzdqp81504540764" }, // Another name for roti
  "rice": { hash: "qqwypw1504642429" },  // Rice/Biryani image
  "chawal": { hash: "qqwypw1504642429" }, // Hindi word for rice
  "bhaat": { hash: "qqwypw1504642429" }, // Bengali word for rice
  "paratha": { hash: "rzdqp81504540764" },
  "parantha": { hash: "rzdqp81504540764" }, // Alternative spelling
  "parotta": { hash: "rzdqp81504540764" }, // South Indian variation
  "naan": { hash: "rzdqp81504540764" },
  "nan": { hash: "rzdqp81504540764" }, // Alternative spelling
  "bhakri": { hash: "rzdqp81504540764" },
  "bhakari": { hash: "rzdqp81504540764" }, // Alternative spelling
  "pulao": { hash: "qqwypw1504642429" },
  "pulav": { hash: "qqwypw1504642429" }, // Alternative spelling
  "pilaf": { hash: "qqwypw1504642429" }, // Alternative spelling

  // Dal/Lentil items
  "dal": { hash: "jewas61546889529" },
  "daal": { hash: "jewas61546889529" }, // Alternative spelling
  "dhal": { hash: "jewas61546889529" }, // Alternative spelling
  "pappu": { hash: "jewas61546889529" }, // Telugu word for dal
  "paruppu": { hash: "jewas61546889529" }, // Tamil word for dal
  "rajma": { hash: "usywpp1511783015" },
  "rajmah": { hash: "usywpp1511783015" }, // Alternative spelling
  "chole": { hash: "kjv7us1683301603" },
  "chhole": { hash: "kjv7us1683301603" }, // Alternative spelling
  "choley": { hash: "kjv7us1683301603" }, // Alternative spelling
  "chana": { hash: "kjv7us1683301603" }, // Alternative name
  "sambar": { hash: "jewas61546889529" },
  "sambhar": { hash: "jewas61546889529" }, // Alternative spelling
  "sambaar": { hash: "jewas61546889529" }, // Alternative spelling
  "kadhi": { hash: "jewas61546889529" },
  "karhi": { hash: "jewas61546889529" }, // Alternative spelling
  "amti": { hash: "jewas61546889529" },
  "aamti": { hash: "jewas61546889529" }, // Alternative spelling

  // Sabzi/Curry/Vegetable items
  "paneer": { hash: "wuxrtu1483564410" },
  "panir": { hash: "wuxrtu1483564410" }, // Alternative spelling
  "curry": { hash: "tqrrsq1511723764" },
  "kari": { hash: "tqrrsq1511723764" }, // Alternative spelling
  "bharta": { hash: "wuxrtu1483564410" },
  "bhurta": { hash: "wuxrtu1483564410" }, // Alternative spelling
  "masala": { hash: "tvutxu1504793829" },
  "masola": { hash: "tvutxu1504793829" }, // Alternative spelling
  "sabzi": { hash: "tqrrsq1511723764" },
  "sabji": { hash: "tqrrsq1511723764" }, // Alternative spelling
  "subzi": { hash: "tqrrsq1511723764" }, // Alternative spelling
  "saag": { hash: "tqrrsq1511723764" }, // Leafy vegetable curry
  "saag": { hash: "tqrrsq1511723764" }, // Alternative spelling
  "gobi": { hash: "tqrrsq1511723764" },
  "gobhi": { hash: "tqrrsq1511723764" }, // Alternative spelling
  "bhaji": { hash: "tqrrsq1511723764" },
  "bhaaji": { hash: "tqrrsq1511723764" }, // Alternative spelling
  "palya": { hash: "tqrrsq1511723764" }, // Karnataka style vegetable
  "poriyal": { hash: "tqrrsq1511723764" }, // Tamil style vegetable

  // Extras/Sides/Accompaniments
  "raita": { hash: "qptpns1503052243" },
  "raitha": { hash: "qptpns1503052243" }, // Alternative spelling
  "pachadi": { hash: "qptpns1503052243" }, // South Indian raita
  "chutney": { hash: "qptpns1503052243" },
  "chatni": { hash: "qptpns1503052243" }, // Alternative spelling
  "chutni": { hash: "qptpns1503052243" }, // Alternative spelling
  "pickle": { hash: "qptpns1503052243" },
  "achaar": { hash: "qptpns1503052243" }, // Hindi word for pickle
  "achar": { hash: "qptpns1503052243" }, // Alternative spelling
  "loncha": { hash: "qptpns1503052243" }, // Marathi word for pickle
  "papad": { hash: "qptpns1503052243" },
  "papadum": { hash: "qptpns1503052243" }, // Alternative spelling
  "appalam": { hash: "qptpns1503052243" }, // Tamil word for papad
  "lassi": { hash: "qptpns1503052243" },
  "lasee": { hash: "qptpns1503052243" }, // Alternative spelling
  "thayir": { hash: "qptpns1503052243" }, // Tamil word for yogurt
  "buttermilk": { hash: "qptpns1503052243" },
  "chaas": { hash: "qptpns1503052243" }, // Gujarati buttermilk
  "majjiga": { hash: "qptpns1503052243" } // Telugu buttermilk
};

// Default images for each category
const DEFAULT_CATEGORY_IMAGES = {
  "base": { hash: "rzdqp81504540764" }, // Naan image
  "dal": { hash: "jewas61546889529" },  // Dal image
  "sabzi": { hash: "tqrrsq1511723764" }, // Veg curry
  "extras": { hash: "qptpns1503052243" }  // Samosa image
};

export const getFoodImage = (description: string): string => {
  // Convert to lowercase and remove extra spaces for matching
  const desc = description.toLowerCase().trim();
  
  // Try to find a matching image from our mapping
  for (const [key, value] of Object.entries(MEAL_IMAGES)) {
    if (desc.includes(key.toLowerCase())) {
      return `https://www.themealdb.com/images/media/meals/${value.hash}.jpg`;
    }
  }

  // If no specific match found, determine the category and use default image
  if (desc.match(/\b(rice|roti|paratha|chapati|naan|bhakri|pulao)\b/)) {
    return `https://www.themealdb.com/images/media/meals/${DEFAULT_CATEGORY_IMAGES.base.hash}.jpg`;
  } else if (desc.match(/\b(dal|rajma|chole|sambar|kadhi|pappu)\b/)) {
    return `https://www.themealdb.com/images/media/meals/${DEFAULT_CATEGORY_IMAGES.dal.hash}.jpg`;
  } else if (desc.match(/\b(sabzi|curry|bhaji|palya|poriyal|saag)\b/)) {
    return `https://www.themealdb.com/images/media/meals/${DEFAULT_CATEGORY_IMAGES.sabzi.hash}.jpg`;
  }
  
  // Default to extras category image
  return `https://www.themealdb.com/images/media/meals/${DEFAULT_CATEGORY_IMAGES.extras.hash}.jpg`;
}; 