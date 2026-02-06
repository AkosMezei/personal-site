export const flowchartTranslations = {
    en: {
        flowchart: {
            AddNewItem: {
                label: "Add New Item",
                description: "Add a new item from the front end. It contains the URL of the item and the alert threshold set by the user (percentage or fixed price)."
            },
            SendToDb: {
                label: "Send the URL to the database and mark it for processing",
                description: "Persist the new tracking request. The item is flagged with a 'pending' status, queuing it for the initial scraping cycle."
            },
            InitialScrapingDaemon: {
                label: "Initial Scraping Daemon Polls For A New Item",
                description: "The initial scraping daemon polls every 30 seconds for new items. It performs connectivity checks and dequeues pending items."
            },
            DomainPresence: {
                label: "Is the domain already present in the selector database?",
                description: "Check if we have established scraping strategies (CSS selectors) for this specific domain to avoid unnecessary AI costs."
            },
            SelectorCredibilityInitial: {
                label: "Are any selector credibility scores above threshold?",
                description: "Evaluate the reliability of existing selectors. Only selectors with a high success history are trusted for the initial check."
            },
            AskAIInitial: {
                label: "Ask AI w/ vision for the price, check OG tags for metadata",
                description: "Send a viewport screenshot to Gemini 2.5 Flash. The prompt requests a structured JSON response containing price, currency, and stock status."
            },
            UseCredibleSelector: {
                label: "Use saved high credibility selectors",
                description: "Extract data using the cached, high-trust CSS selectors. This path is faster and incurs zero API costs."
            },
            ApiCallSuccessInitial: {
                label: "Was the API call successful?",
                description: "Verify the AI response structure. If the API fails or returns malformed JSON, the system triggers a retry with exponential backoff."
            },
            SaveInitialToDb: {
                label: "Save the initial scraping result to the database",
                description: "Store the baseline price, item metadata (title, image), and availability. This establishes the reference point for future alerts."
            },
            UpdaterDaemon: {
                label: "Updater Daemon Polls For A New Item To Update",
                description: "A background service that continuously monitors the database for items that have passed their update interval window."
            },
            Shuffle: {
                label: "Shuffle list of sites by domain, shuffle domains",
                description: "Randomize the processing order of domains and items. This mimics human traffic patterns and prevents triggering rate limiters."
            },
            LaunchBrowser: {
                label: "Launch Browser",
                description: "Initialize a headless browser instance with stealth plugins to evade bot detection systems (Cloudflare/Akamai)."
            },
            GetSingleItemToUpdate: {
                label: "Get Single Item To Update",
                description: "Pop the next item from the shuffled queue. This ensures fair resource distribution across different tracked domains."
            },
            DomainPresenceUpdater: {
                label: "Is the domain already present in the selector database?",
                description: "Verify if scraping logic exists for this domain. If not, the system must fallback to AI vision to learn the page structure."
            },
            SelectorCredibilityUpdater: {
                label: "Are any selector credibility scores above threshold?",
                description: "Check if the existing selectors are trustworthy. Low scores indicate a site layout change, triggering a self-healing process."
            },
            AskAIUpdater: {
                label: "Ask AI w/ vision for price and availability",
                description: "Fallback mechanism: If selectors fail, the AI visually analyzes the page to locate the current price and 'Add to Cart' button."
            },
            UseSavedSelectors: {
                label: "Use saved high credibility selectors",
                description: "Attempt to scrape the current price using the stored DOM selectors. This is the preferred, low-latency path."
            },
            ApiCallSuccessUpdater: {
                label: "Was the API call successful?",
                description: "Ensure the AI returned usable data. Failures here log an error and mark the item for a retry in the next cycle."
            },
            Availability: {
                label: "Is the item still available?",
                description: "Parse stock indicators (e.g., 'Out of Stock' text, grayed-out buttons) to determine purchasing ability."
            },
            SetUnavailable: {
                label: "Set item as unavailable",
                description: "Flag the item as OOS in the database. This pauses price drop alerts but keeps the item active in the tracking rotation."
            },
            ReasonablePriceChange: {
                label: "Is the price change within reasonable limits?",
                description: "Heuristic check: If a price drops by 99% (e.g. $1000 to $10), it's likely a bug or glitch. This triggers a re-verification."
            },
            GetNewSelectors: {
                label: "Get new selectors based on scraped price",
                description: "Self-Healing: Reverse-engineer the DOM to find which HTML elements contain the confirmed price, generating new CSS selectors."
            },
            SelectorExists: {
                label: "Are the new selector/s already saved?",
                description: "Deduplication check to ensure we don't store redundant selectors for the same DOM element."
            },
            IncreaseCredibility: {
                label: "Increase selector credibility score",
                description: "Reward the selector that successfully found the correct price, increasing its probability of being used in future runs."
            },
            DecreaseCredibility: {
                label: "Decrease selector credibility score",
                description: "Penalize selectors that returned incorrect data or failed to find the element. Selectors dropping below 0 are pruned."
            },
            AddNewSelectors: {
                label: "Add new selectors with base credibility score",
                description: "Store the new, AI-discovered selectors with a baseline score, allowing the system to adapt to site layout changes."
            },
            PriceThreshold: {
                label: "Is the new price below the user defined threshold?",
                description: "Compare the verified price against the user's target. Logic handles both absolute values and percentage drops."
            },
            PriceDrop: {
                label: "Send an alert for the price drop",
                description: "Trigger the notification pipeline (Telegram) to alert the user of the deal immediately."
            },
            UpdateDatabase: {
                label: "Update database",
                description: "Commit the new price history, update the 'last checked' timestamp, and close the transaction."
            }
        }
    },
    hu: {
        flowchart: {
            AddNewItem: {
                label: "Új tétel hozzáadása",
                description: "Egy új tétel hozzáadása a felhasználói felületről. Tartalmazza a tétel URL-címét és a felhasználó által beállított riasztási küszöbértéket (százalékos vagy fix ár)."
            },
            SendToDb: {
                label: "URL elküldése az adatbázisba és megjelölése feldolgozásra",
                description: "Az új követési kérelem rögzítése. A tétel 'függőben' státusszal lesz megjelölve, sorba állítva ezzel a kezdeti adatgyűjtési ciklusra."
            },
            InitialScrapingDaemon: {
                label: "Kezdeti Adatgyűjtő Démon Új Tételeket Keres",
                description: "A kezdeti adatgyűjtő démon 30 másodpercenként ellenőrzi, hogy vannak-e új tételek. Kapcsolati ellenőrzéseket végez és kiveszi a sorból a függőben lévő tételeket."
            },
            DomainPresence: {
                label: "A domain már szerepel a szelektor adatbázisban?",
                description: "Ellenőrzi, hogy rendelkezünk-e már bevált adatgyűjtési stratégiákkal (CSS szelektorokkal) ehhez a domainhez, hogy elkerüljük a felesleges MI költségeket."
            },
            SelectorCredibilityInitial: {
                label: "Van-e a küszöbérték feletti hitelességi pontszámú szelektor?",
                description: "A meglévő szelektorok megbízhatóságának értékelése. Csak a magas sikerességi rátával rendelkező szelektorok használhatók a kezdeti ellenőrzéshez."
            },
            AskAIInitial: {
                label: "MI megkérdezése (képi felismeréssel) az árról, OG tagek ellenőrzése",
                description: "Egy képernyőkép küldése a Gemini 2.5 Flash-nek. A prompt egy strukturált JSON választ kér, amely tartalmazza az árat, a pénznemet és a raktárkészlet állapotát."
            },
            UseCredibleSelector: {
                label: "Mentett, magas hitelességű szelektorok használata",
                description: "Adatok kinyerése a gyorsítótárazott, megbízható CSS szelektorokkal. Ez az útvonal gyorsabb és nem jár API költségekkel."
            },
            ApiCallSuccessInitial: {
                label: "Sikeres volt az API hívás?",
                description: "Az MI válaszának struktúrájának ellenőrzése. Ha az API hibát ad vagy hibás JSON-t ad vissza, a rendszer újrapróbálkozást indít exponenciális hátrálással."
            },
            SaveInitialToDb: {
                label: "Kezdeti adatgyűjtés eredményének mentése az adatbázisba",
                description: "A kiindulási ár, a tétel metaadatainak (cím, kép) és elérhetőségének tárolása. Ez képezi a referencia pontot a jövőbeli riasztásokhoz."
            },
            UpdaterDaemon: {
                label: "Frissítő Démon Frissítendő Tételeket Keres",
                description: "Egy háttérszolgáltatás, amely folyamatosan figyeli az adatbázist olyan tételek után, amelyek frissítési időablaka lejárt."
            },
            Shuffle: {
                label: "Oldalak és domainek listájának megkeverése",
                description: "A domainek és tételek feldolgozási sorrendjének véletlenszerűsítése. Ez emberi böngészési mintákat utánoz, és segít elkerülni a sebességkorlátozók (rate limiterek) aktiválását."
            },
            LaunchBrowser: {
                label: "Böngésző Indítása",
                description: "Egy 'headless' (grafikus felület nélküli) böngésző példány indítása 'stealth' pluginekkel a bot-érzékelő rendszerek (pl. Cloudflare/Akamai) kijátszására."
            },
            GetSingleItemToUpdate: {
                label: "Egyetlen frissítendő tétel lekérése",
                description: "A következő tétel kivétele a megkevert sorból. Ez biztosítja az erőforrások egyenletes elosztását a követett domainek között."
            },
            DomainPresenceUpdater: {
                label: "A domain már szerepel a szelektor adatbázisban?",
                description: "Annak ellenőrzése, hogy létezik-e adatgyűjtési logika ehhez a domainhez. Ha nem, a rendszernek MI képi felismerésre kell támaszkodnia az oldal struktúrájának megtanulásához."
            },
            SelectorCredibilityUpdater: {
                label: "Van-e a küszöbérték feletti hitelességi pontszámú szelektor?",
                description: "A meglévő szelektorok megbízhatóságának ellenőrzése. Az alacsony pontszámok az oldal elrendezésének megváltozására utalnak, ami egy öngyógyító folyamatot indít el."
            },
            AskAIUpdater: {
                label: "MI megkérdezése (képi felismeréssel) az árról és elérhetőségről",
                description: "Tartalék mechanizmus: Ha a szelektorok hibáznak, az MI vizuálisan elemzi az oldalt a jelenlegi ár és a 'Kosárba' gomb helyének megkereséséhez."
            },
            UseSavedSelectors: {
                label: "Mentett, magas hitelességű szelektorok használata",
                description: "A jelenlegi ár lekérésének megkísérlése a tárolt DOM szelektorokkal. Ez az előnyben részesített, alacsony késleltetésű útvonal."
            },
            ApiCallSuccessUpdater: {
                label: "Sikeres volt az API hívás?",
                description: "Annak biztosítása, hogy az MI használható adatot adott vissza. Az itt fellépő hibák naplózásra kerülnek, és a tétel a következő ciklusban újrapróbálásra lesz megjelölve."
            },
            Availability: {
                label: "Elérhető még a tétel?",
                description: "A készletjelzők (pl. 'Nincs készleten' szöveg, kiszürkült gombok) elemzése a megvásárolhatóság megállapításához."
            },
            SetUnavailable: {
                label: "Tétel beállítása 'nem elérhető'-re",
                description: "A tétel megjelölése 'nem elérhető'-ként az adatbázisban. Ez szünetelteti az árcsökkenési riasztásokat, de a tételt aktívan tartja a követési ciklusban."
            },
            ReasonablePriceChange: {
                label: "Az árváltozás ésszerű határokon belül van?",
                description: "Heurisztikus ellenőrzés: Ha egy ár 99%-kal esik (pl. 1000-ről 10-re), az valószínűleg hiba vagy anomália. Ez újraellenőrzést indít el."
            },
            GetNewSelectors: {
                label: "Új szelektorok kinyerése a lekért ár alapján",
                description: "Öngyógyító folyamat: A DOM visszafejtése annak megállapítására, hogy mely HTML elemek tartalmazzák a megerősített árat, majd ezek alapján új CSS szelektorok generálása."
            },
            SelectorExists: {
                label: "Az új szelektor(ok) már mentve van(nak)?",
                description: "Deduplikációs ellenőrzés annak biztosítására, hogy ne tároljunk redundáns szelektorokat ugyanahhoz a DOM elemhez."
            },
            IncreaseCredibility: {
                label: "Szelektor hitelességi pontszámának növelése",
                description: "Annak a szelektornak a jutalmazása, amely sikeresen megtalálta a helyes árat, növelve ezzel a jövőbeli futások során való használatának valószínűségét."
            },
            DecreaseCredibility: {
                label: "Szelektor hitelességi pontszámának csökkentése",
                description: "Azon szelektorok büntetése, amelyek helytelen adatot adtak vissza vagy nem találták meg az elemet. A 0 alá eső szelektorok törlésre kerülnek."
            },
            AddNewSelectors: {
                label: "Új szelektorok hozzáadása alap hitelességi pontszámmal",
                description: "Az új, MI által felfedezett szelektorok tárolása egy alap pontszámmal, lehetővé téve a rendszer számára, hogy alkalmazkodjon az oldal elrendezésének változásaihoz."
            },
            PriceThreshold: {
                label: "Az új ár a felhasználó által megadott küszöbérték alatt van?",
                description: "A hitelesített ár összehasonlítása a felhasználó célárával. A logika kezeli mind az abszolút értékeket, mind a százalékos eséseket."
            },
            PriceDrop: {
                label: "Értesítés küldése az áresésről",
                description: "Az értesítési csatorna (Telegram) aktiválása, hogy a felhasználót azonnal tájékoztassa az akcióról."
            },
            UpdateDatabase: {
                label: "Adatbázis frissítése",
                description: "Az új ártörténet rögzítése, az 'utoljára ellenőrizve' időbélyeg frissítése és a tranzakció lezárása."
            }
        }
    }
};