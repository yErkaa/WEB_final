document.getElementById("languageSelector").addEventListener("change", function () {
    const selectedLanguage = this.value;
    const translation = translations[selectedLanguage];

    document.title = translation.title;
    document.querySelector("h5.card-title").textContent = translation.creatorTitle;
    document.querySelector(".card-text").textContent = translation.creatorText;
    document.querySelectorAll(".btn-primary")[0].textContent = translation.readMore;
    document.querySelectorAll(".card-title")[1].textContent = translation.nbaChampionsTitle;
    document.querySelector(".btn-info").textContent = translation.sortAscending;
    document.querySelectorAll(".btn-info")[1].textContent = translation.sortDescending;
    document.querySelector("h2").textContent = translation.jerseySortingTool;
    document.getElementById("numberInput").placeholder = translation.enterNumbers;
    document.querySelector("h2 + button").textContent = translation.startGuessingGame;
    document.querySelector("footer p").textContent = translation.footerText;
});

const translations = {
    en: {
        greetingMessage: "Welcome!",
        title: "History of Basketball",
        creatorTitle: "The CREATOR of ART",
        creatorText: "Basketball was invented in 1891 by Dr. James Naismith in Springfield, Massachusetts. James Naismith (NAY-smith; November 6, 1861 - November 28, 1939) was a Canadian-American physical educator, physician, Christian chaplain, and sports coach, best known as the inventor of the game of basketball. After moving to the United States, he wrote the original basketball rule book and founded the University of Kansas basketball program in 1898. Naismith lived to see basketball adopted as an Olympic demonstration sport in 1904 and as an official event at the 1936 Summer Olympics in Berlin, as well as the birth of the National Invitation Tournament (1938) and the NCAA Tournament (1939).",
        readMore: "Read More",
        nbaChampionsTitle: "NBA Champions",
        jerseySortingTool: "Jersey Number Sorting Tool",
        enterNumbers: "Enter numbers separated by commas",
        sortAscending: "Sort Ascending",
        sortDescending: "Sort Descending",
        guessGame: "Guess the jersey number we made up",
        startGuessingGame: "Start Guessing Game",
        footerText: "Website created by Aldongar Yerkin"
    },
    ru: {
        greetingMessage: "Добро пожаловать!",
        title: "История Баскетбола",
        creatorTitle: "СОЗДАТЕЛЬ ИСКУССТВА",
        creatorText: "Баскетбол был изобретен в 1891 году доктором Джеймсом Нейсмитом в Спрингфилде, штат Массачусетс. Джеймс Нейсмит (Naismith; 6 ноября 1861 - 28 ноября 1939) - канадско-американский физик, врач, христианский священник и спортивный тренер, наиболее известный как изобретатель игры в баскетбол. После переезда в Соединенные Штаты он написал оригинальную книгу правил баскетбола и в 1898 году основал баскетбольную программу Канзасского университета. Нейсмит дожил до того времени, когда баскетбол был принят в качестве демонстрационного олимпийского вида спорта в 1904 году и стал официальным видом спорта на летних Олимпийских играх 1936 года в Берлине, а также когда появились Национальный турнир по приглашению (1938) и турнир NCAA (1939).",
        readMore: "Читать далее",
        nbaChampionsTitle: "Чемпионы НБА",
        jerseySortingTool: "Инструмент Сортировки Номеров Джерси",
        enterNumbers: "Введите числа, разделенные запятыми",
        sortAscending: "Сортировать по возрастанию",
        sortDescending: "Сортировать по убыванию",
        guessGame: "Угадайте номер джерси, который мы загадали",
        startGuessingGame: "Начать игру на угадывание",
        footerText: "Сайт создан Алдонгаром Еркином"
    },
    kk: {
        greetingMessage: "Қош келдіңіз!",
        title: "Баскетбол тарихы",
        creatorTitle: "ӨНЕР ЖАРАТУШЫСЫ",
        creatorText: "Баскетболды 1891 жылы Массачусетс штатының Спрингфилд қаласында Доктор Джеймс Нейсмит ойлап тапқан. Джеймс Нейсмит (Нейсмит; 6 қараша 1861 - 28 қараша 1939)-Канадалық-Американдық дене шынықтыру мұғалімі, дәрігер, Христиан дінбасысы және спорт жаттықтырушысы, баскетбол ойынының өнертапқышы ретінде танымал. Америка құрама штаттарына көшкеннен кейін ол баскетбол ережелері кітабының түпнұсқасын жазды және 1898 жылы Канзас университетінің баскетбол бағдарламасын құрды. Нейсмит баскетболды 1904 жылы Олимпиадалық демонстрациялық спорт түрі ретінде және 1936 Жылы Берлинде Өткен Жазғы Олимпиада ойындарында ресми іс-шара ретінде, Сондай-ақ Ұлттық Шақыру Турнирінің (1938) және NCAA Турнирінің (1939) дүниеге келуін көру үшін өмір сүрді.).",
        readMore: "Толығырақ оқу",
        nbaChampionsTitle: "НБА чемпиондары",
        jerseySortingTool: "Джерси нөмірлерін сұрыптау құралы",
        enterNumbers: "Сандарды үтірмен бөліп енгізіңіз",
        sortAscending: "Өсу ретімен сұрыптау",
        sortDescending: "Кему ретімен сұрыптау",
        guessGame: "Біз жасаған джерси нөмірін болжап көріңіз",
        startGuessingGame: "Болжау ойынын бастау",
        footerText: "Сайтты жасаған Алдонғар Еркін"
    }
};
